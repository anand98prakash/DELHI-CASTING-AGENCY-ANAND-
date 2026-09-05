import { Prisma } from "@prisma/client";
import { prisma } from "../config/prisma.js";
import { createNotification } from "../services/notification.service.js";
// ==========================================
// 1. POST /api/applications (Artist submits casting application)
// ==========================================
export async function submitApplication(req, res) {
    try {
        // 1. Authenticate user
        if (!req.user) {
            res.status(401).json({
                success: false,
                message: "Authentication token required",
            });
            return;
        }
        // 2. Authorize role: Only ARTIST users can submit applications
        if (req.user.role !== "ARTIST") {
            res.status(403).json({
                success: false,
                message: "Only ARTIST users can submit casting applications",
            });
            return;
        }
        // 3. Verify Artist Profile Verification Status (Must be APPROVED)
        const artistProfile = await prisma.artistProfile.findUnique({
            where: {
                userId: req.user.userId,
            },
        });
        if (!artistProfile || artistProfile.verificationStatus !== "APPROVED") {
            res.status(403).json({
                success: false,
                message: "Only verified artists with APPROVED profile status can submit casting applications",
            });
            return;
        }
        // 4. Extract & validate body input
        const { castingCallId, message, portfolioUrl } = req.body;
        if (!castingCallId ||
            typeof castingCallId !== "string" ||
            castingCallId.trim() === "") {
            res.status(400).json({
                success: false,
                message: "Valid castingCallId is required",
            });
            return;
        }
        const trimmedCastingId = castingCallId.trim();
        // 5. Verify target casting call exists and is APPROVED
        const castingCall = await prisma.castingCall.findUnique({
            where: {
                id: trimmedCastingId,
            },
        });
        if (!castingCall) {
            res.status(404).json({
                success: false,
                message: "Casting call not found",
            });
            return;
        }
        if (castingCall.approvalStatus !== "APPROVED") {
            res.status(403).json({
                success: false,
                message: "Applications are accepted only for APPROVED casting calls",
            });
            return;
        }
        if (castingCall.isClosed) {
            res.status(400).json({
                success: false,
                message: "This casting call is closed for new applications",
            });
            return;
        }
        // 6. Validate optional fields
        let trimmedMessage = null;
        if (typeof message === "string" && message.trim() !== "") {
            if (message.trim().length > 2000) {
                res.status(400).json({
                    success: false,
                    message: "Application message cannot exceed 2000 characters",
                });
                return;
            }
            trimmedMessage = message.trim();
        }
        let trimmedPortfolioUrl = null;
        if (typeof portfolioUrl === "string" && portfolioUrl.trim() !== "") {
            trimmedPortfolioUrl = portfolioUrl.trim();
        }
        // 7. Create Application in database (artistId strictly from req.user.userId)
        const application = await prisma.application.create({
            data: {
                artistId: req.user.userId,
                castingCallId: castingCall.id,
                message: trimmedMessage,
                portfolioUrl: trimmedPortfolioUrl,
                status: "PENDING",
                appliedAt: new Date(),
            },
        });
        // Notify the Brand owner safely
        await createNotification({
            userId: castingCall.brandId,
            type: "NEW_APPLICATION",
            title: "New Application Received",
            message: `A new artist has applied to your casting call: "${castingCall.title}".`,
            entityType: "APPLICATION",
            entityId: application.id,
        });
        res.status(201).json({
            success: true,
            message: "Application submitted successfully",
            application,
        });
    }
    catch (error) {
        // Handle Prisma unique constraint error (P2002 on artistId_castingCallId)
        if (error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2002") {
            res.status(409).json({
                success: false,
                message: "You have already submitted an application for this casting call",
            });
            return;
        }
        console.error("Submit application error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to submit application",
        });
    }
}
// ==========================================
// 2. GET /api/artist/applications (Artist lists my applications)
// ==========================================
export async function getArtistApplications(req, res) {
    try {
        if (!req.user) {
            res.status(401).json({
                success: false,
                message: "Authentication token required",
            });
            return;
        }
        if (req.user.role !== "ARTIST") {
            res.status(403).json({
                success: false,
                message: "Only ARTIST users can view their applications",
            });
            return;
        }
        const applications = await prisma.application.findMany({
            where: {
                artistId: req.user.userId,
            },
            orderBy: {
                appliedAt: "desc",
            },
            include: {
                castingCall: {
                    select: {
                        id: true,
                        title: true,
                        category: true,
                        location: true,
                        compensation: true,
                        approvalStatus: true,
                        brand: {
                            select: {
                                id: true,
                                email: true,
                                brandProfile: {
                                    select: {
                                        companyName: true,
                                        companyLogo: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        res.status(200).json({
            success: true,
            count: applications.length,
            applications,
        });
    }
    catch (error) {
        console.error("Get artist applications error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch applications",
        });
    }
}
// ==========================================
// 3. GET /api/brand/casting/:id/applications (Brand / Admin views applicants)
// ==========================================
export async function getCastingCallApplicants(req, res) {
    try {
        if (!req.user) {
            res.status(401).json({
                success: false,
                message: "Authentication token required",
            });
            return;
        }
        if (req.user.role !== "BRAND" && req.user.role !== "ADMIN") {
            res.status(403).json({
                success: false,
                message: "Access denied. Only BRAND owners or ADMIN can view applicants",
            });
            return;
        }
        const { id } = req.params;
        if (typeof id !== "string" || id.trim() === "") {
            res.status(400).json({
                success: false,
                message: "Valid casting call ID is required",
            });
            return;
        }
        const trimmedId = id.trim();
        // Verify casting call exists
        const castingCall = await prisma.castingCall.findUnique({
            where: {
                id: trimmedId,
            },
        });
        if (!castingCall) {
            res.status(404).json({
                success: false,
                message: "Casting call not found",
            });
            return;
        }
        // Verify Brand ownership if user is BRAND
        if (req.user.role === "BRAND" && castingCall.brandId !== req.user.userId) {
            res.status(403).json({
                success: false,
                message: "You do not have permission to view applicants for another brand's casting call",
            });
            return;
        }
        const applications = await prisma.application.findMany({
            where: {
                castingCallId: trimmedId,
            },
            orderBy: {
                appliedAt: "desc",
            },
            include: {
                artist: {
                    select: {
                        id: true,
                        email: true,
                        artistProfile: {
                            select: {
                                id: true,
                                fullName: true,
                                phone: true,
                                gender: true,
                                city: true,
                                state: true,
                                profilePhoto: true,
                                headshots: true,
                                skills: true,
                                languages: true,
                                verificationStatus: true,
                            },
                        },
                    },
                },
            },
        });
        res.status(200).json({
            success: true,
            count: applications.length,
            applications,
        });
    }
    catch (error) {
        console.error("Get casting call applicants error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch applicants",
        });
    }
}
// ==========================================
// 4. PATCH /api/brand/applications/:id/status (Brand / Admin updates applicant status)
// ==========================================
export async function updateApplicationStatus(req, res) {
    try {
        if (!req.user) {
            res.status(401).json({
                success: false,
                message: "Authentication token required",
            });
            return;
        }
        if (req.user.role !== "BRAND" && req.user.role !== "ADMIN") {
            res.status(403).json({
                success: false,
                message: "Access denied. Only BRAND owners or ADMIN can update application status",
            });
            return;
        }
        const { id } = req.params;
        if (typeof id !== "string" || id.trim() === "") {
            res.status(400).json({
                success: false,
                message: "Valid application ID is required",
            });
            return;
        }
        const { status, adminFeedback } = (req.body || {});
        const allowedStatuses = ["PENDING", "SHORTLISTED", "SELECTED", "REJECTED"];
        if (!status ||
            typeof status !== "string" ||
            !allowedStatuses.includes(status.toUpperCase())) {
            res.status(400).json({
                success: false,
                message: "Invalid status value. Allowed statuses: PENDING, SHORTLISTED, SELECTED, REJECTED",
            });
            return;
        }
        const targetStatus = status.toUpperCase();
        // Validate feedback if provided
        let trimmedFeedback = null;
        if (typeof adminFeedback === "string" && adminFeedback.trim() !== "") {
            if (adminFeedback.trim().length > 2000) {
                res.status(400).json({
                    success: false,
                    message: "Feedback cannot exceed 2000 characters",
                });
                return;
            }
            trimmedFeedback = adminFeedback.trim();
        }
        // Find application and check ownership
        const application = await prisma.application.findUnique({
            where: {
                id: id.trim(),
            },
            include: {
                castingCall: true,
            },
        });
        if (!application) {
            res.status(404).json({
                success: false,
                message: "Application not found",
            });
            return;
        }
        // Check Brand Ownership if caller is BRAND
        if (req.user.role === "BRAND" &&
            application.castingCall.brandId !== req.user.userId) {
            res.status(403).json({
                success: false,
                message: "You do not have permission to update applications for another brand's casting call",
            });
            return;
        }
        const updateData = {
            status: targetStatus,
        };
        if (trimmedFeedback !== null) {
            updateData.adminFeedback = trimmedFeedback;
        }
        const updatedApplication = await prisma.application.update({
            where: {
                id: id.trim(),
            },
            data: updateData,
        });
        // Trigger notification to Artist safely
        if (targetStatus === "SHORTLISTED") {
            await createNotification({
                userId: application.artistId,
                type: "APPLICATION_SHORTLISTED",
                title: "Application Shortlisted",
                message: `Your application for "${application.castingCall.title}" has been shortlisted!`,
                entityType: "APPLICATION",
                entityId: application.id,
            });
        }
        else if (targetStatus === "SELECTED") {
            await createNotification({
                userId: application.artistId,
                type: "APPLICATION_SELECTED",
                title: "Application Selected",
                message: `Congratulations! You have been selected for "${application.castingCall.title}".`,
                entityType: "APPLICATION",
                entityId: application.id,
            });
        }
        else if (targetStatus === "REJECTED") {
            await createNotification({
                userId: application.artistId,
                type: "APPLICATION_REJECTED",
                title: "Application Status Update",
                message: `Your application status for "${application.castingCall.title}" was updated to Rejected.`,
                entityType: "APPLICATION",
                entityId: application.id,
            });
        }
        res.status(200).json({
            success: true,
            message: `Application status updated to ${targetStatus}`,
            application: updatedApplication,
        });
    }
    catch (error) {
        console.error("Update application status error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to update application status",
        });
    }
}
//# sourceMappingURL=application.controller.js.map