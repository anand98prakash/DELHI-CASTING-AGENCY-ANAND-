import { PaymentPlan, PaymentStatus, Prisma } from "@prisma/client";
import { prisma } from "../config/prisma.js";
import { createNotification } from "../services/notification.service.js";
// ==========================================
// HELPER — GET PARAM ID
// ==========================================
function getParamId(req, res) {
    const { id } = req.params;
    if (typeof id !== "string" || id.trim() === "") {
        res.status(400).json({
            success: false,
            message: "Valid artist ID is required",
        });
        return null;
    }
    return id;
}
// ==========================================
// GET PENDING ARTISTS
// ==========================================
export async function getPendingArtists(_req, res) {
    try {
        const artists = await prisma.artistProfile.findMany({
            where: {
                verificationStatus: "PENDING_REVIEW",
            },
            orderBy: {
                submittedAt: "asc",
            },
        });
        res.status(200).json({
            success: true,
            count: artists.length,
            artists,
        });
    }
    catch (error) {
        console.error("Get pending artists error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch pending artists",
        });
    }
}
// ==========================================
// GET ARTIST FOR ADMIN REVIEW
// ==========================================
export async function getArtistForReview(req, res) {
    try {
        const id = getParamId(req, res);
        if (!id) {
            return;
        }
        const artist = await prisma.artistProfile.findUnique({
            where: {
                id,
            },
            include: {
                user: {
                    select: {
                        id: true,
                        email: true,
                        role: true,
                    },
                },
            },
        });
        if (!artist) {
            res.status(404).json({
                success: false,
                message: "Artist profile not found",
            });
            return;
        }
        res.status(200).json({
            success: true,
            artist,
        });
    }
    catch (error) {
        console.error("Get artist for review error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch artist profile",
        });
    }
}
// ==========================================
// GET APPROVED ARTISTS
// ==========================================
export async function getApprovedArtists(_req, res) {
    try {
        const artists = await prisma.artistProfile.findMany({
            where: {
                verificationStatus: "APPROVED",
            },
            orderBy: {
                approvedAt: "desc",
            },
        });
        res.status(200).json({
            success: true,
            count: artists.length,
            artists,
        });
    }
    catch (error) {
        console.error("Get approved artists error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch approved artists",
        });
    }
}
// ==========================================
// GET REJECTED ARTISTS
// ==========================================
export async function getRejectedArtists(_req, res) {
    try {
        const artists = await prisma.artistProfile.findMany({
            where: {
                verificationStatus: "REJECTED",
            },
            orderBy: {
                updatedAt: "desc",
            },
        });
        res.status(200).json({
            success: true,
            count: artists.length,
            artists,
        });
    }
    catch (error) {
        console.error("Get rejected artists error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch rejected artists",
        });
    }
}
// ==========================================
// APPROVE ARTIST
// ==========================================
export async function approveArtist(req, res) {
    try {
        const id = getParamId(req, res);
        if (!id) {
            return;
        }
        const { adminFeedback } = (req.body || {});
        if (adminFeedback !== undefined) {
            if (typeof adminFeedback !== "string") {
                res.status(400).json({
                    success: false,
                    message: "Admin feedback must be a string",
                });
                return;
            }
            if (adminFeedback.length > 2000) {
                res.status(400).json({
                    success: false,
                    message: "Admin feedback cannot exceed 2000 characters",
                });
                return;
            }
        }
        const artist = await prisma.artistProfile.findUnique({
            where: {
                id,
            },
        });
        if (!artist) {
            res.status(404).json({
                success: false,
                message: "Artist profile not found",
            });
            return;
        }
        if (artist.verificationStatus !== "PENDING_REVIEW") {
            res.status(400).json({
                success: false,
                message: `Artist cannot be approved from ${artist.verificationStatus} status`,
            });
            return;
        }
        const updateData = {
            verificationStatus: "APPROVED",
            approvedAt: new Date(),
        };
        if (adminFeedback !== undefined) {
            updateData.adminFeedback = adminFeedback.trim() || null;
        }
        const updatedArtist = await prisma.artistProfile.update({
            where: {
                id,
            },
            data: updateData,
        });
        // Notify Artist safely
        await createNotification({
            userId: artist.userId,
            type: "ARTIST_PROFILE_APPROVED",
            title: "Profile Approved",
            message: "Your artist profile has been approved.",
            entityType: "ARTIST_PROFILE",
            entityId: artist.id,
        });
        res.status(200).json({
            success: true,
            message: "Artist profile approved successfully",
            artist: updatedArtist,
        });
    }
    catch (error) {
        console.error("Approve artist error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to approve artist",
        });
    }
}
// ==========================================
// REJECT ARTIST
// ==========================================
export async function rejectArtist(req, res) {
    try {
        const id = getParamId(req, res);
        if (!id) {
            return;
        }
        const { adminFeedback } = (req.body || {});
        if (adminFeedback !== undefined) {
            if (typeof adminFeedback !== "string") {
                res.status(400).json({
                    success: false,
                    message: "Admin feedback must be a string",
                });
                return;
            }
            if (adminFeedback.length > 2000) {
                res.status(400).json({
                    success: false,
                    message: "Admin feedback cannot exceed 2000 characters",
                });
                return;
            }
        }
        const artist = await prisma.artistProfile.findUnique({
            where: {
                id,
            },
        });
        if (!artist) {
            res.status(404).json({
                success: false,
                message: "Artist profile not found",
            });
            return;
        }
        if (artist.verificationStatus !== "PENDING_REVIEW") {
            res.status(400).json({
                success: false,
                message: `Artist cannot be rejected from ${artist.verificationStatus} status`,
            });
            return;
        }
        const updateData = {
            verificationStatus: "REJECTED",
            approvedAt: null,
        };
        if (adminFeedback !== undefined) {
            updateData.adminFeedback = adminFeedback.trim() || null;
        }
        const updatedArtist = await prisma.artistProfile.update({
            where: {
                id,
            },
            data: updateData,
        });
        const rejectionMsg = updateData.adminFeedback
            ? `Your artist profile verification was rejected: ${updateData.adminFeedback}`
            : "Your artist profile verification was rejected. Please review your profile information.";
        // Notify Artist safely
        await createNotification({
            userId: artist.userId,
            type: "ARTIST_PROFILE_REJECTED",
            title: "Profile Verification Update",
            message: rejectionMsg,
            entityType: "ARTIST_PROFILE",
            entityId: artist.id,
        });
        res.status(200).json({
            success: true,
            message: "Artist profile rejected",
            artist: updatedArtist,
        });
    }
    catch (error) {
        console.error("Reject artist error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to reject artist",
        });
    }
}
// ==========================================
// GET PENDING CASTING CALLS FOR ADMIN
// ==========================================
export async function getPendingCastingCalls(_req, res) {
    try {
        const castings = await prisma.castingCall.findMany({
            where: {
                approvalStatus: "PENDING_REVIEW",
            },
            orderBy: [
                { submittedAt: "asc" },
                { createdAt: "asc" },
            ],
            include: {
                brand: {
                    select: {
                        id: true,
                        email: true,
                        brandProfile: {
                            select: {
                                companyName: true,
                                companyLogo: true,
                                contactName: true,
                            },
                        },
                    },
                },
            },
        });
        res.status(200).json({
            success: true,
            count: castings.length,
            castings,
        });
    }
    catch (error) {
        console.error("Get pending casting calls error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch pending casting calls",
        });
    }
}
// ==========================================
// APPROVE CASTING CALL
// ==========================================
export async function approveCastingCall(req, res) {
    try {
        const id = getParamId(req, res);
        if (!id) {
            return;
        }
        const { adminFeedback } = (req.body || {});
        if (adminFeedback !== undefined) {
            if (typeof adminFeedback !== "string") {
                res.status(400).json({
                    success: false,
                    message: "Admin feedback must be a string",
                });
                return;
            }
            if (adminFeedback.length > 2000) {
                res.status(400).json({
                    success: false,
                    message: "Admin feedback cannot exceed 2000 characters",
                });
                return;
            }
        }
        const casting = await prisma.castingCall.findUnique({
            where: {
                id,
            },
        });
        if (!casting) {
            res.status(404).json({
                success: false,
                message: "Casting call not found",
            });
            return;
        }
        if (casting.approvalStatus !== "PENDING_REVIEW") {
            res.status(400).json({
                success: false,
                message: `Casting call cannot be approved from ${casting.approvalStatus} status`,
            });
            return;
        }
        const updateData = {
            approvalStatus: "APPROVED",
            approvedAt: new Date(),
        };
        if (adminFeedback !== undefined) {
            updateData.adminFeedback = adminFeedback.trim() || null;
        }
        const updatedCasting = await prisma.castingCall.update({
            where: {
                id,
            },
            data: updateData,
        });
        // Notify Brand owner safely
        await createNotification({
            userId: casting.brandId,
            type: "CASTING_APPROVED",
            title: "Casting Call Approved",
            message: `Your casting call "${casting.title}" has been approved and is now visible to artists.`,
            entityType: "CASTING_CALL",
            entityId: casting.id,
        });
        res.status(200).json({
            success: true,
            message: "Casting call approved successfully",
            castingCall: updatedCasting,
        });
    }
    catch (error) {
        console.error("Approve casting call error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to approve casting call",
        });
    }
}
// ==========================================
// REJECT CASTING CALL
// ==========================================
export async function rejectCastingCall(req, res) {
    try {
        const id = getParamId(req, res);
        if (!id) {
            return;
        }
        const { adminFeedback } = (req.body || {});
        if (adminFeedback !== undefined) {
            if (typeof adminFeedback !== "string") {
                res.status(400).json({
                    success: false,
                    message: "Admin feedback must be a string",
                });
                return;
            }
            if (adminFeedback.length > 2000) {
                res.status(400).json({
                    success: false,
                    message: "Admin feedback cannot exceed 2000 characters",
                });
                return;
            }
        }
        const casting = await prisma.castingCall.findUnique({
            where: {
                id,
            },
        });
        if (!casting) {
            res.status(404).json({
                success: false,
                message: "Casting call not found",
            });
            return;
        }
        if (casting.approvalStatus !== "PENDING_REVIEW") {
            res.status(400).json({
                success: false,
                message: `Casting call cannot be rejected from ${casting.approvalStatus} status`,
            });
            return;
        }
        const updateData = {
            approvalStatus: "REJECTED",
            approvedAt: null,
        };
        if (adminFeedback !== undefined) {
            updateData.adminFeedback = adminFeedback.trim() || null;
        }
        const updatedCasting = await prisma.castingCall.update({
            where: {
                id,
            },
            data: updateData,
        });
        const castingRejectionMsg = updateData.adminFeedback
            ? `Your casting call "${casting.title}" was rejected: ${updateData.adminFeedback}`
            : `Your casting call "${casting.title}" was rejected. Please review feedback and resubmit.`;
        // Notify Brand owner safely
        await createNotification({
            userId: casting.brandId,
            type: "CASTING_REJECTED",
            title: "Casting Call Rejected",
            message: castingRejectionMsg,
            entityType: "CASTING_CALL",
            entityId: casting.id,
        });
        res.status(200).json({
            success: true,
            message: "Casting call rejected",
            castingCall: updatedCasting,
        });
    }
    catch (error) {
        console.error("Reject casting call error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to reject casting call",
        });
    }
}
// ==========================================
// GET ADMIN SYSTEM STATISTICS
// ==========================================
export async function getAdminStats(_req, res) {
    try {
        const [totalArtists, totalBrands, pendingArtists, approvedArtists, rejectedArtists, totalCastingCalls, pendingCastingCalls, approvedCastingCalls, rejectedCastingCalls, totalApplications, pendingApplications, shortlistedApplications, selectedApplications, rejectedApplications,] = await Promise.all([
            prisma.user.count({ where: { role: "ARTIST" } }),
            prisma.user.count({ where: { role: "BRAND" } }),
            prisma.artistProfile.count({ where: { verificationStatus: "PENDING_REVIEW" } }),
            prisma.artistProfile.count({ where: { verificationStatus: "APPROVED" } }),
            prisma.artistProfile.count({ where: { verificationStatus: "REJECTED" } }),
            prisma.castingCall.count(),
            prisma.castingCall.count({ where: { approvalStatus: "PENDING_REVIEW" } }),
            prisma.castingCall.count({ where: { approvalStatus: "APPROVED" } }),
            prisma.castingCall.count({ where: { approvalStatus: "REJECTED" } }),
            prisma.application.count(),
            prisma.application.count({ where: { status: "PENDING" } }),
            prisma.application.count({ where: { status: "SHORTLISTED" } }),
            prisma.application.count({ where: { status: "SELECTED" } }),
            prisma.application.count({ where: { status: "REJECTED" } }),
        ]);
        res.status(200).json({
            success: true,
            stats: {
                totalArtists,
                totalBrands,
                pendingArtists,
                approvedArtists,
                rejectedArtists,
                totalCastingCalls,
                pendingCastingCalls,
                approvedCastingCalls,
                rejectedCastingCalls,
                totalApplications,
                pendingApplications,
                shortlistedApplications,
                selectedApplications,
                rejectedApplications,
            },
        });
    }
    catch (error) {
        console.error("Get admin stats error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch platform statistics",
        });
    }
}
// ==========================================
// GET ADMIN PAYMENTS & PREMIUM ANALYTICS
// ==========================================
export async function getAdminPayments(req, res) {
    try {
        const { plan, status, search, page = "1", limit = "20" } = req.query;
        const pageNumber = Math.max(1, parseInt(page, 10) || 1);
        const limitNumber = Math.min(100, Math.max(1, parseInt(limit, 10) || 20));
        const skip = (pageNumber - 1) * limitNumber;
        // Filter conditions
        const whereClause = {};
        if (plan && (plan === "ARTIST_PREMIUM" || plan === "BRAND_PREMIUM")) {
            whereClause.plan = plan;
        }
        if (status && ["PAID", "PENDING", "FAILED", "REFUNDED"].includes(status.toUpperCase())) {
            whereClause.status = status.toUpperCase();
        }
        if (search && typeof search === "string" && search.trim() !== "") {
            const q = search.trim();
            whereClause.OR = [
                { razorpayOrderId: { contains: q, mode: "insensitive" } },
                { razorpayPaymentId: { contains: q, mode: "insensitive" } },
                { user: { email: { contains: q, mode: "insensitive" } } },
            ];
        }
        const now = new Date();
        // Summary Aggregations
        const [totalPayments, successfulPayments, pendingPayments, failedPayments, artistPremiumPayments, brandPremiumPayments, revenueAggregate, activePremiumEntitlements, expiredPremiumEntitlements,] = await Promise.all([
            prisma.payment.count(),
            prisma.payment.count({ where: { status: "PAID" } }),
            prisma.payment.count({ where: { status: "PENDING" } }),
            prisma.payment.count({ where: { status: "FAILED" } }),
            prisma.payment.count({ where: { plan: "ARTIST_PREMIUM", status: "PAID" } }),
            prisma.payment.count({ where: { plan: "BRAND_PREMIUM", status: "PAID" } }),
            prisma.payment.aggregate({
                _sum: { amount: true },
                where: { status: "PAID" },
            }),
            prisma.premiumEntitlement.count({
                where: { expiresAt: { gt: now } },
            }),
            prisma.premiumEntitlement.count({
                where: { expiresAt: { lte: now } },
            }),
        ]);
        const totalRevenue = revenueAggregate._sum.amount || 0;
        // Paginated Payment List
        const [payments, filteredTotal] = await Promise.all([
            prisma.payment.findMany({
                where: whereClause,
                orderBy: { createdAt: "desc" },
                skip,
                take: limitNumber,
                select: {
                    id: true,
                    userId: true,
                    amount: true,
                    currency: true,
                    plan: true,
                    status: true,
                    razorpayOrderId: true,
                    razorpayPaymentId: true,
                    paidAt: true,
                    createdAt: true,
                    updatedAt: true,
                    user: {
                        select: {
                            id: true,
                            email: true,
                            role: true,
                            artistProfile: {
                                select: {
                                    fullName: true,
                                },
                            },
                            brandProfile: {
                                select: {
                                    companyName: true,
                                },
                            },
                            entitlement: {
                                select: {
                                    startedAt: true,
                                    expiresAt: true,
                                    plan: true,
                                },
                            },
                        },
                    },
                },
            }),
            prisma.payment.count({ where: whereClause }),
        ]);
        const totalPages = Math.ceil(filteredTotal / limitNumber) || 1;
        res.status(200).json({
            success: true,
            summary: {
                totalPayments,
                successfulPayments,
                pendingPayments,
                failedPayments,
                totalRevenue,
                artistPremiumPayments,
                brandPremiumPayments,
                activePremiumEntitlements,
                expiredPremiumEntitlements,
            },
            pagination: {
                page: pageNumber,
                limit: limitNumber,
                total: filteredTotal,
                totalPages,
            },
            payments,
        });
    }
    catch (error) {
        console.error("Get admin payments error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch admin payment analytics",
        });
    }
}
//# sourceMappingURL=admin.controller.js.map