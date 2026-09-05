import { prisma } from "../config/prisma.js";
// ==========================================
// 1. POST /api/casting (Brand creates casting call)
// ==========================================
export async function createCastingCall(req, res) {
    try {
        // 1. Authenticate user
        if (!req.user) {
            res.status(401).json({
                success: false,
                message: "Authentication token required",
            });
            return;
        }
        // 2. Authorize role: Only BRAND users can create casting calls
        if (req.user.role !== "BRAND") {
            res.status(403).json({
                success: false,
                message: "Only BRAND users can create casting calls",
            });
            return;
        }
        // 2b. Authorize verification: Brand must have APPROVED verificationStatus
        const brandProfile = await prisma.brandProfile.findUnique({
            where: { userId: req.user.userId },
            select: { id: true, verificationStatus: true },
        });
        if (!brandProfile || brandProfile.verificationStatus !== "APPROVED") {
            res.status(403).json({
                success: false,
                message: brandProfile?.verificationStatus === "REJECTED"
                    ? "Your brand account verification was rejected. You cannot post casting calls."
                    : "Your brand account is currently under review. Admin approval is required before you can post casting calls.",
            });
            return;
        }
        // 3. Extract & validate body
        const { title, description, category, location, compensation, startDate, endDate, ageMin, ageMax, gender, requirements, } = req.body;
        // Validate title (required string, non-empty)
        if (!title || typeof title !== "string" || title.trim() === "") {
            res.status(400).json({
                success: false,
                message: "Title is required",
            });
            return;
        }
        if (title.trim().length > 200) {
            res.status(400).json({
                success: false,
                message: "Title cannot exceed 200 characters",
            });
            return;
        }
        // Validate description (required string, non-empty)
        if (!description ||
            typeof description !== "string" ||
            description.trim() === "") {
            res.status(400).json({
                success: false,
                message: "Description is required",
            });
            return;
        }
        // Validate optional numeric age range
        let parsedAgeMin = null;
        let parsedAgeMax = null;
        if (ageMin !== undefined && ageMin !== null && ageMin !== "") {
            const numMin = Number(ageMin);
            if (Number.isNaN(numMin) || numMin < 0 || numMin > 100) {
                res.status(400).json({
                    success: false,
                    message: "Invalid ageMin value. Must be a number between 0 and 100",
                });
                return;
            }
            parsedAgeMin = numMin;
        }
        if (ageMax !== undefined && ageMax !== null && ageMax !== "") {
            const numMax = Number(ageMax);
            if (Number.isNaN(numMax) || numMax < 0 || numMax > 100) {
                res.status(400).json({
                    success: false,
                    message: "Invalid ageMax value. Must be a number between 0 and 100",
                });
                return;
            }
            parsedAgeMax = numMax;
        }
        if (parsedAgeMin !== null &&
            parsedAgeMax !== null &&
            parsedAgeMin > parsedAgeMax) {
            res.status(400).json({
                success: false,
                message: "ageMin cannot be greater than ageMax",
            });
            return;
        }
        // Validate optional dates
        let parsedStartDate = null;
        let parsedEndDate = null;
        if (startDate) {
            const dStart = new Date(startDate);
            if (Number.isNaN(dStart.getTime())) {
                res.status(400).json({
                    success: false,
                    message: "Invalid startDate format",
                });
                return;
            }
            parsedStartDate = dStart;
        }
        if (endDate) {
            const dEnd = new Date(endDate);
            if (Number.isNaN(dEnd.getTime())) {
                res.status(400).json({
                    success: false,
                    message: "Invalid endDate format",
                });
                return;
            }
            parsedEndDate = dEnd;
        }
        if (parsedStartDate && parsedEndDate && parsedStartDate > parsedEndDate) {
            res.status(400).json({
                success: false,
                message: "startDate cannot be after endDate",
            });
            return;
        }
        // 4. Construct payload (brandId strictly from req.user.userId, status enforced PENDING_REVIEW)
        const castingCall = await prisma.castingCall.create({
            data: {
                brandId: req.user.userId,
                title: title.trim(),
                description: description.trim(),
                category: typeof category === "string" && category.trim()
                    ? category.trim()
                    : null,
                location: typeof location === "string" && location.trim()
                    ? location.trim()
                    : null,
                compensation: typeof compensation === "string" && compensation.trim()
                    ? compensation.trim()
                    : null,
                startDate: parsedStartDate,
                endDate: parsedEndDate,
                ageMin: parsedAgeMin,
                ageMax: parsedAgeMax,
                gender: typeof gender === "string" && gender.trim() ? gender.trim() : null,
                requirements: typeof requirements === "string" && requirements.trim()
                    ? requirements.trim()
                    : null,
                // Security enforced flags
                approvalStatus: "PENDING_REVIEW",
                submittedAt: new Date(),
                approvedAt: null,
                adminFeedback: null,
            },
        });
        res.status(201).json({
            success: true,
            message: "Casting call submitted successfully for admin review",
            castingCall,
        });
    }
    catch (error) {
        console.error("Create casting call error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to create casting call",
        });
    }
}
// ==========================================
// 2. GET /api/casting (Public list approved casting calls)
// ==========================================
export async function getPublicCastingCalls(req, res) {
    try {
        const { category, location, gender, search } = req.query;
        // Build filter criteria
        // MANDATORY SECURITY RULE: Only return approvalStatus = APPROVED and isClosed = false
        const whereCondition = {
            approvalStatus: "APPROVED",
            isClosed: false,
        };
        if (typeof category === "string" && category.trim() !== "") {
            whereCondition.category = {
                contains: category.trim(),
                mode: "insensitive",
            };
        }
        if (typeof location === "string" && location.trim() !== "") {
            whereCondition.location = {
                contains: location.trim(),
                mode: "insensitive",
            };
        }
        if (typeof gender === "string" && gender.trim() !== "") {
            whereCondition.gender = {
                contains: gender.trim(),
                mode: "insensitive",
            };
        }
        if (typeof search === "string" && search.trim() !== "") {
            const q = search.trim();
            whereCondition.OR = [
                { title: { contains: q, mode: "insensitive" } },
                { description: { contains: q, mode: "insensitive" } },
                { category: { contains: q, mode: "insensitive" } },
                { location: { contains: q, mode: "insensitive" } },
            ];
        }
        const castings = await prisma.castingCall.findMany({
            where: whereCondition,
            orderBy: {
                createdAt: "desc",
            },
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
        console.error("Get public casting calls error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch casting calls",
        });
    }
}
// ==========================================
// 3. GET /api/casting/:id (Public view single approved casting call)
// ==========================================
export async function getPublicCastingCallById(req, res) {
    try {
        const { id } = req.params;
        if (typeof id !== "string" || id.trim() === "") {
            res.status(400).json({
                success: false,
                message: "Valid casting call ID is required",
            });
            return;
        }
        // MANDATORY SECURITY RULE: Fetch only if approvalStatus = APPROVED and isClosed = false
        const casting = await prisma.castingCall.findFirst({
            where: {
                id: id.trim(),
                approvalStatus: "APPROVED",
                isClosed: false,
            },
            include: {
                brand: {
                    select: {
                        id: true,
                        email: true,
                        brandProfile: {
                            select: {
                                companyName: true,
                                companyLogo: true,
                                companyDescription: true,
                                city: true,
                                state: true,
                            },
                        },
                    },
                },
            },
        });
        if (!casting) {
            res.status(404).json({
                success: false,
                message: "Casting call not found",
            });
            return;
        }
        res.status(200).json({
            success: true,
            casting,
        });
    }
    catch (error) {
        console.error("Get public casting call by ID error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch casting call details",
        });
    }
}
// ==========================================
// 4. GET /api/brand/casting (List logged-in Brand's own casting calls)
// ==========================================
export async function getBrandCastingCalls(req, res) {
    try {
        if (!req.user) {
            res.status(401).json({
                success: false,
                message: "Authentication token required",
            });
            return;
        }
        if (req.user.role !== "BRAND") {
            res.status(403).json({
                success: false,
                message: "Only BRAND users can access their casting calls",
            });
            return;
        }
        const castings = await prisma.castingCall.findMany({
            where: {
                brandId: req.user.userId,
            },
            orderBy: {
                createdAt: "desc",
            },
            include: {
                _count: {
                    select: {
                        applications: true,
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
        console.error("Get brand casting calls error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch brand casting calls",
        });
    }
}
// ==========================================
// 4b. GET /api/brand/profile (Get logged-in Brand's profile including companyLogo)
// ==========================================
export async function getBrandProfile(req, res) {
    try {
        if (!req.user) {
            res.status(401).json({
                success: false,
                message: "Authentication token required",
            });
            return;
        }
        let brandProfile = await prisma.brandProfile.findUnique({
            where: { userId: req.user.userId },
            select: {
                id: true,
                userId: true,
                companyName: true,
                contactName: true,
                phone: true,
                email: true,
                website: true,
                city: true,
                state: true,
                companyDescription: true,
                companyLogo: true,
                verificationStatus: true,
                adminFeedback: true,
                submittedAt: true,
                approvedAt: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        // Auto-provision brand profile for brand users if not yet created
        if (!brandProfile && req.user.role === "BRAND") {
            const user = await prisma.user.findUnique({
                where: { id: req.user.userId },
                select: { email: true },
            });
            brandProfile = await prisma.brandProfile.create({
                data: {
                    userId: req.user.userId,
                    companyName: (user?.email ? user.email.split("@")[0] : undefined) ||
                        "Brand Partner",
                    email: user?.email || null,
                    verificationStatus: "PENDING_REVIEW",
                    submittedAt: new Date(),
                },
                select: {
                    id: true,
                    userId: true,
                    companyName: true,
                    contactName: true,
                    phone: true,
                    email: true,
                    website: true,
                    city: true,
                    state: true,
                    companyDescription: true,
                    companyLogo: true,
                    verificationStatus: true,
                    adminFeedback: true,
                    submittedAt: true,
                    approvedAt: true,
                    createdAt: true,
                    updatedAt: true,
                },
            });
        }
        res.status(200).json({
            success: true,
            profile: brandProfile,
        });
    }
    catch (error) {
        console.error("Get brand profile error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch brand profile",
        });
    }
}
// ==========================================
// 4c. PUT /api/brand/profile (Update logged-in Brand's company profile)
// ==========================================
export async function updateBrandProfile(req, res) {
    try {
        if (!req.user) {
            res.status(401).json({
                success: false,
                message: "Authentication token required",
            });
            return;
        }
        if (req.user.role !== "BRAND") {
            res.status(403).json({
                success: false,
                message: "Only BRAND users can update brand profiles",
            });
            return;
        }
        const { companyName, contactName, phone, email, website, city, state, companyDescription, companyLogo, } = req.body;
        const existingProfile = await prisma.brandProfile.findUnique({
            where: { userId: req.user.userId },
        });
        const updateData = {};
        if (companyName !== undefined &&
            typeof companyName === "string" &&
            companyName.trim() !== "") {
            updateData.companyName = companyName.trim();
        }
        if (contactName !== undefined) {
            updateData.contactName =
                typeof contactName === "string" ? contactName.trim() || null : null;
        }
        if (phone !== undefined) {
            updateData.phone =
                typeof phone === "string" ? phone.trim() || null : null;
        }
        if (email !== undefined) {
            updateData.email =
                typeof email === "string" ? email.trim() || null : null;
        }
        if (website !== undefined) {
            updateData.website =
                typeof website === "string" ? website.trim() || null : null;
        }
        if (city !== undefined) {
            updateData.city =
                typeof city === "string" ? city.trim() || null : null;
        }
        if (state !== undefined) {
            updateData.state =
                typeof state === "string" ? state.trim() || null : null;
        }
        if (companyDescription !== undefined) {
            updateData.companyDescription =
                typeof companyDescription === "string"
                    ? companyDescription.trim() || null
                    : null;
        }
        if (companyLogo !== undefined) {
            updateData.companyLogo =
                typeof companyLogo === "string" ? companyLogo.trim() || null : null;
        }
        let savedProfile;
        if (existingProfile) {
            savedProfile = await prisma.brandProfile.update({
                where: { userId: req.user.userId },
                data: updateData,
                select: {
                    id: true,
                    userId: true,
                    companyName: true,
                    contactName: true,
                    phone: true,
                    email: true,
                    website: true,
                    city: true,
                    state: true,
                    companyDescription: true,
                    companyLogo: true,
                    verificationStatus: true,
                    adminFeedback: true,
                    submittedAt: true,
                    approvedAt: true,
                    createdAt: true,
                    updatedAt: true,
                },
            });
        }
        else {
            savedProfile = await prisma.brandProfile.create({
                data: {
                    userId: req.user.userId,
                    companyName: updateData.companyName || "Brand Partner",
                    contactName: updateData.contactName || null,
                    phone: updateData.phone || null,
                    email: updateData.email || null,
                    website: updateData.website || null,
                    city: updateData.city || null,
                    state: updateData.state || null,
                    companyDescription: updateData.companyDescription || null,
                    companyLogo: updateData.companyLogo || null,
                    verificationStatus: "PENDING_REVIEW",
                    submittedAt: new Date(),
                },
                select: {
                    id: true,
                    userId: true,
                    companyName: true,
                    contactName: true,
                    phone: true,
                    email: true,
                    website: true,
                    city: true,
                    state: true,
                    companyDescription: true,
                    companyLogo: true,
                    verificationStatus: true,
                    adminFeedback: true,
                    submittedAt: true,
                    approvedAt: true,
                    createdAt: true,
                    updatedAt: true,
                },
            });
        }
        res.status(200).json({
            success: true,
            message: "Brand profile updated successfully",
            profile: savedProfile,
        });
    }
    catch (error) {
        console.error("Update brand profile error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to update brand profile",
        });
    }
}
// ==========================================
// 5. PUT /api/casting/:id (Brand edits owned casting call)
// ==========================================
export async function updateCastingCall(req, res) {
    try {
        if (!req.user) {
            res.status(401).json({
                success: false,
                message: "Authentication token required",
            });
            return;
        }
        if (req.user.role !== "BRAND") {
            res.status(403).json({
                success: false,
                message: "Only BRAND users can update casting calls",
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
        const casting = await prisma.castingCall.findUnique({
            where: {
                id: id.trim(),
            },
        });
        if (!casting) {
            res.status(404).json({
                success: false,
                message: "Casting call not found",
            });
            return;
        }
        // Ownership Guard
        if (casting.brandId !== req.user.userId) {
            res.status(403).json({
                success: false,
                message: "You do not have permission to edit another brand's casting call",
            });
            return;
        }
        const { title, description, category, location, compensation, startDate, endDate, ageMin, ageMax, gender, requirements, } = req.body;
        if (title !== undefined && (typeof title !== "string" || !title.trim())) {
            res.status(400).json({
                success: false,
                message: "Title must be a non-empty string",
            });
            return;
        }
        if (description !== undefined && (typeof description !== "string" || !description.trim())) {
            res.status(400).json({
                success: false,
                message: "Description must be a non-empty string",
            });
            return;
        }
        // Validate optional numeric age range
        let parsedAgeMin = undefined;
        let parsedAgeMax = undefined;
        if (ageMin !== undefined && ageMin !== null && ageMin !== "") {
            const numMin = Number(ageMin);
            if (Number.isNaN(numMin) || numMin < 0 || numMin > 100) {
                res.status(400).json({
                    success: false,
                    message: "Invalid ageMin value",
                });
                return;
            }
            parsedAgeMin = numMin;
        }
        else if (ageMin === null || ageMin === "") {
            parsedAgeMin = null;
        }
        if (ageMax !== undefined && ageMax !== null && ageMax !== "") {
            const numMax = Number(ageMax);
            if (Number.isNaN(numMax) || numMax < 0 || numMax > 100) {
                res.status(400).json({
                    success: false,
                    message: "Invalid ageMax value",
                });
                return;
            }
            parsedAgeMax = numMax;
        }
        else if (ageMax === null || ageMax === "") {
            parsedAgeMax = null;
        }
        // Validate dates
        let parsedStartDate = undefined;
        let parsedEndDate = undefined;
        if (startDate) {
            const dStart = new Date(startDate);
            if (Number.isNaN(dStart.getTime())) {
                res.status(400).json({
                    success: false,
                    message: "Invalid startDate format",
                });
                return;
            }
            parsedStartDate = dStart;
        }
        else if (startDate === null) {
            parsedStartDate = null;
        }
        if (endDate) {
            const dEnd = new Date(endDate);
            if (Number.isNaN(dEnd.getTime())) {
                res.status(400).json({
                    success: false,
                    message: "Invalid endDate format",
                });
                return;
            }
            parsedEndDate = dEnd;
        }
        else if (endDate === null) {
            parsedEndDate = null;
        }
        // BUSINESS RULE: Editing material fields resets status to PENDING_REVIEW for re-verification
        const updateData = {
            approvalStatus: "PENDING_REVIEW",
            submittedAt: new Date(),
        };
        if (title && typeof title === "string")
            updateData.title = title.trim();
        if (description && typeof description === "string")
            updateData.description = description.trim();
        if (category !== undefined)
            updateData.category = typeof category === "string" && category.trim() ? category.trim() : null;
        if (location !== undefined)
            updateData.location = typeof location === "string" && location.trim() ? location.trim() : null;
        if (compensation !== undefined)
            updateData.compensation = typeof compensation === "string" && compensation.trim() ? compensation.trim() : null;
        if (parsedStartDate !== undefined)
            updateData.startDate = parsedStartDate;
        if (parsedEndDate !== undefined)
            updateData.endDate = parsedEndDate;
        if (parsedAgeMin !== undefined)
            updateData.ageMin = parsedAgeMin;
        if (parsedAgeMax !== undefined)
            updateData.ageMax = parsedAgeMax;
        if (gender !== undefined)
            updateData.gender = typeof gender === "string" && gender.trim() ? gender.trim() : null;
        if (requirements !== undefined)
            updateData.requirements = typeof requirements === "string" && requirements.trim() ? requirements.trim() : null;
        const updatedCasting = await prisma.castingCall.update({
            where: {
                id: id.trim(),
            },
            data: updateData,
        });
        res.status(200).json({
            success: true,
            message: "Casting call updated and submitted for re-review",
            castingCall: updatedCasting,
        });
    }
    catch (error) {
        console.error("Update casting call error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to update casting call",
        });
    }
}
// ==========================================
// 6. DELETE /api/casting/:id (Brand or Admin deletes/closes casting call)
// ==========================================
export async function deleteCastingCall(req, res) {
    try {
        if (!req.user) {
            res.status(401).json({
                success: false,
                message: "Authentication token required",
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
        const casting = await prisma.castingCall.findUnique({
            where: {
                id: id.trim(),
            },
        });
        if (!casting) {
            res.status(404).json({
                success: false,
                message: "Casting call not found",
            });
            return;
        }
        // Ownership & Admin Guard
        if (req.user.role !== "ADMIN" && casting.brandId !== req.user.userId) {
            res.status(403).json({
                success: false,
                message: "You do not have permission to close this casting call",
            });
            return;
        }
        const updatedCasting = await prisma.castingCall.update({
            where: {
                id: id.trim(),
            },
            data: {
                isClosed: true,
                closedAt: new Date(),
            },
        });
        res.status(200).json({
            success: true,
            message: "Casting call closed successfully",
            castingCall: updatedCasting,
        });
    }
    catch (error) {
        console.error("Close casting call error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to close casting call",
        });
    }
}
//# sourceMappingURL=casting.controller.js.map