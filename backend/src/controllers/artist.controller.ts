import type { Request, Response } from "express";
import fs from "node:fs";
import { prisma } from "../config/prisma.js";
import type { AuthRequest } from "../middleware/auth.middleware.js";
import { uploadToCloudinary, isCloudinaryConfigured } from "../services/cloudinary.service.js";
import { normalizeIndianPhone } from "../utils/phone.js";
import { sendProfileSubmittedEmail } from "../services/email.service.js";

// ==========================================
// CREATE / SUBMIT ARTIST PROFILE
// ==========================================

export async function createArtistProfile(
  req: AuthRequest,
  res: Response,
): Promise<void> {
  try {
    // Check authentication
    if (!req.user) {
      res.status(401).json({
        success: false,
        message: "Authentication required",
      });
      return;
    }

    // Only ARTIST can create artist profile
    if (req.user.role !== "ARTIST") {
      res.status(403).json({
        success: false,
        message: "Only ARTIST users can create an artist profile",
      });
      return;
    }

    const {
      fullName,
      phone,
      gender,
      dateOfBirth,
      primaryCategory,
      experience,
      city,
      state,
      bio,
      height,
      weight,
      chest,
      waist,
      hips,
      languages,
      skills,
      specialAbilities,
      profilePhoto,
      headshots,
    } = req.body as {
      fullName?: string;
      phone?: string;
      gender?: string;
      dateOfBirth?: string;
      primaryCategory?: string;
      experience?: string;
      city?: string;
      state?: string;
      bio?: string;
      height?: string;
      weight?: string;
      chest?: string;
      waist?: string;
      hips?: string;
      languages?: string;
      skills?: string;
      specialAbilities?: string;
      profilePhoto?: string;
      headshots?: string;
    };

    // Required field
    if (!fullName?.trim()) {
      res.status(400).json({
        success: false,
        message: "Full name is required",
      });
      return;
    }

    // Check if profile already exists
    const existingProfile = await prisma.artistProfile.findUnique({
      where: {
        userId: req.user.userId,
      },
    });

    if (existingProfile) {
      res.status(409).json({
        success: false,
        message: "Artist profile already exists",
      });
      return;
    }

    // Phone Normalization and Cross-Profile Uniqueness Check
    let normalizedPhone: string | null = null;
    if (phone && typeof phone === "string" && phone.trim() !== "") {
      normalizedPhone = normalizeIndianPhone(phone);
      if (normalizedPhone) {
        const [existingArtistPhone, existingBrandPhone] = await Promise.all([
          prisma.artistProfile.findFirst({ where: { phone: normalizedPhone } }),
          prisma.brandProfile.findFirst({ where: { phone: normalizedPhone } }),
        ]);

        if (existingArtistPhone || existingBrandPhone) {
          res.status(409).json({
            success: false,
            message: "Phone number is already registered.",
          });
          return;
        }
      }
    }

    // Create artist profile
    const profile = await prisma.artistProfile.create({
      data: {
        userId: req.user.userId,

        fullName: fullName.trim(),

        phone: normalizedPhone,
        gender: gender ?? null,

        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
        primaryCategory: primaryCategory ?? "Actor",
        experience: experience ?? null,

        city: city ?? null,
        state: state ?? null,

        bio: bio ?? null,

        height: height ?? null,
        weight: weight ?? null,

        chest: chest ?? null,
        waist: waist ?? null,
        hips: hips ?? null,

        languages: languages ?? null,
        skills: skills ?? null,
        specialAbilities: specialAbilities ?? null,

        profilePhoto: profilePhoto ?? null,
        headshots: headshots ?? null,

        verificationStatus: "PENDING_REVIEW",
        submittedAt: new Date(),
      },
    });

    // Send profile submitted confirmation email safely
    const userRec = await prisma.user.findUnique({
      where: { id: req.user.userId },
      select: { email: true },
    });
    if (userRec?.email) {
      void sendProfileSubmittedEmail({
        to: userRec.email,
        name: profile.fullName,
        role: "ARTIST",
      }).catch((err) => console.error("Profile submitted email delivery error:", err));
    }

    res.status(201).json({
      success: true,
      message: "Profile submitted for DCA verification",
      profile,
    });
  } catch (error) {
    console.error("Create artist profile error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create artist profile",
    });
  }
}


// ==========================================
// GET ARTIST PROFILE
// ==========================================

export async function getArtistProfile(
  req: AuthRequest,
  res: Response,
): Promise<void> {
  try {
    // Check authentication
    if (!req.user) {
      res.status(401).json({
        success: false,
        message: "Authentication required",
      });
      return;
    }

    // Only ARTIST can access artist profile
    if (req.user.role !== "ARTIST") {
      res.status(403).json({
        success: false,
        message: "Only ARTIST users can access this profile",
      });
      return;
    }

    // Find profile using logged-in user's ID
    const profile = await prisma.artistProfile.findUnique({
      where: {
        userId: req.user.userId,
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            role: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });

    if (!profile) {
      res.status(404).json({
        success: false,
        message: "Artist profile not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      profile,
    });
  } catch (error) {
    console.error("Get artist profile error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch artist profile",
    });
  }
}

// ==========================================
// UPDATE ARTIST PROFILE
// ==========================================

export async function updateArtistProfile(
  req: AuthRequest,
  res: Response,
): Promise<void> {
  try {
    // Check authentication
    if (!req.user) {
      res.status(401).json({
        success: false,
        message: "Authentication required",
      });
      return;
    }

    // Only ARTIST can update artist profile
    if (req.user.role !== "ARTIST") {
      res.status(403).json({
        success: false,
        message: "Only ARTIST users can update an artist profile",
      });
      return;
    }

    const {
      fullName,
      phone,
      gender,
      dateOfBirth,
      primaryCategory,
      experience,
      city,
      state,
      bio,
      height,
      weight,
      chest,
      waist,
      hips,
      languages,
      skills,
      specialAbilities,
      profilePhoto,
      headshots,
    } = req.body as {
      fullName?: string;
      phone?: string | null;
      gender?: string | null;
      dateOfBirth?: string | null;
      primaryCategory?: string | null;
      experience?: string | null;
      city?: string | null;
      state?: string | null;
      bio?: string | null;
      height?: string | null;
      weight?: string | null;
      chest?: string | null;
      waist?: string | null;
      hips?: string | null;
      languages?: string | null;
      skills?: string | null;
      specialAbilities?: string | null;
      profilePhoto?: string | null;
      headshots?: string | null;
    };

    // Find existing profile
    const existingProfile = await prisma.artistProfile.findUnique({
      where: {
        userId: req.user.userId,
      },
    });

    if (!existingProfile) {
      res.status(404).json({
        success: false,
        message: "Artist profile not found",
      });
      return;
    }

    // Build update data
    const updateData: {
      fullName?: string;
      phone?: string | null;
      gender?: string | null;
      dateOfBirth?: Date | null;
      primaryCategory?: string;
      experience?: string | null;
      city?: string | null;
      state?: string | null;
      bio?: string | null;
      height?: string | null;
      weight?: string | null;
      chest?: string | null;
      waist?: string | null;
      hips?: string | null;
      languages?: string | null;
      skills?: string | null;
      specialAbilities?: string | null;
      profilePhoto?: string | null;
      headshots?: string | null;
      verificationStatus?: "PENDING_REVIEW";
      submittedAt?: Date;
      approvedAt?: Date | null;
    } = {};

    if (fullName !== undefined) {
      if (!fullName.trim()) {
        res.status(400).json({
          success: false,
          message: "Full name cannot be empty",
        });
        return;
      }

      updateData.fullName = fullName.trim();
    }

    if (phone !== undefined) {
      if (phone === null || (typeof phone === "string" && phone.trim() === "")) {
        updateData.phone = null;
      } else {
        const normalizedPhone = normalizeIndianPhone(phone);
        if (normalizedPhone) {
          const [existingArtistPhone, existingBrandPhone] = await Promise.all([
            prisma.artistProfile.findFirst({
              where: {
                phone: normalizedPhone,
                NOT: { userId: req.user.userId },
              },
            }),
            prisma.brandProfile.findFirst({
              where: {
                phone: normalizedPhone,
                NOT: { userId: req.user.userId },
              },
            }),
          ]);

          if (existingArtistPhone || existingBrandPhone) {
            res.status(409).json({
              success: false,
              message: "Phone number is already registered.",
            });
            return;
          }
          updateData.phone = normalizedPhone;
        } else {
          updateData.phone = null;
        }
      }
    }
    if (gender !== undefined) updateData.gender = gender;

    if (dateOfBirth !== undefined) {
      updateData.dateOfBirth = dateOfBirth
        ? new Date(dateOfBirth)
        : null;
    }

    if (primaryCategory !== undefined && primaryCategory !== null) {
      updateData.primaryCategory = primaryCategory;
    }
    if (experience !== undefined) {
      updateData.experience = experience;
    }

    if (city !== undefined) updateData.city = city;
    if (state !== undefined) updateData.state = state;
    if (bio !== undefined) updateData.bio = bio;

    if (height !== undefined) updateData.height = height;
    if (weight !== undefined) updateData.weight = weight;

    if (chest !== undefined) updateData.chest = chest;
    if (waist !== undefined) updateData.waist = waist;
    if (hips !== undefined) updateData.hips = hips;

    if (languages !== undefined) updateData.languages = languages;
    if (skills !== undefined) updateData.skills = skills;

    if (specialAbilities !== undefined) {
      updateData.specialAbilities = specialAbilities;
    }

    if (profilePhoto !== undefined) {
      updateData.profilePhoto = profilePhoto;
    }

    if (headshots !== undefined) {
      updateData.headshots = headshots;
    }

    // If an approved/rejected profile is edited,
    // send it back for admin review.
    if (
      existingProfile.verificationStatus === "APPROVED" ||
      existingProfile.verificationStatus === "REJECTED"
    ) {
      updateData.verificationStatus = "PENDING_REVIEW";
      updateData.submittedAt = new Date();
      updateData.approvedAt = null;
    }

    const profile = await prisma.artistProfile.update({
      where: {
        userId: req.user.userId,
      },
      data: updateData,
    });

    res.status(200).json({
      success: true,
      message: "Artist profile updated successfully",
      profile,
    });
  } catch (error) {
    console.error("Update artist profile error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update artist profile",
    });
  }
}

// ==========================================
// UPLOAD ARTIST PHOTOS
// ==========================================

export async function uploadArtistPhotos(
  req: AuthRequest,
  res: Response,
): Promise<void> {
  try {
    if (!req.user) {
      res.status(401).json({
        success: false,
        message: "Please log in to upload your profile photo.",
      });
      return;
    }

    if (req.user.role !== "ARTIST") {
      res.status(403).json({
        success: false,
        message: "You do not have permission to update this profile.",
      });
      return;
    }

    const files = req.files as Express.Multer.File[] | { [fieldname: string]: Express.Multer.File[] };
    if (
      !files ||
      (Array.isArray(files) && files.length === 0) ||
      (typeof files === "object" && Object.keys(files).length === 0)
    ) {
      res.status(400).json({
        success: false,
        message: "No image files uploaded",
      });
      return;
    }

    const allowedMimeTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    const maxFileSize = 5 * 1024 * 1024; // 5MB

    const fileList: Express.Multer.File[] = Array.isArray(files)
      ? files
      : Object.values(files).flat();

    // Validate MIME types & File sizes
    for (const file of fileList) {
      if (!allowedMimeTypes.includes(file.mimetype.toLowerCase())) {
        res.status(400).json({
          success: false,
          message: "Please upload a valid JPG, PNG, or WebP image.",
        });
        return;
      }
      if (file.size > maxFileSize) {
        res.status(413).json({
          success: false,
          message: "Image exceeds maximum allowed size of 5MB.",
        });
        return;
      }
    }

    const fileMap: Record<string, string> = {};
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const cloudinaryFolder = `dca/artists/${req.user.userId}`;
    const isConfigured = isCloudinaryConfigured();

    for (const file of fileList) {
      if (isConfigured) {
        try {
          const cldResult = await uploadToCloudinary(file.path, cloudinaryFolder);
          if (cldResult?.url) {
            fileMap[file.fieldname] = cldResult.url;
            if (fs.existsSync(file.path)) {
              fs.unlinkSync(file.path);
            }
          } else {
            if (fs.existsSync(file.path)) fs.unlinkSync(file.path);
            res.status(500).json({
              success: false,
              message: "Cloudinary upload failed to return a secure URL",
            });
            return;
          }
        } catch (err: unknown) {
          if (fs.existsSync(file.path)) fs.unlinkSync(file.path);
          console.error("Cloudinary upload attempt error:", err);
          const errorObj = err as { message?: string; http_code?: number };
          const errorMessage = errorObj?.message || (err instanceof Error ? err.message : String(err));
          res.status(500).json({
            success: false,
            message: `Cloudinary upload failed: ${errorMessage || "Unknown error"}`,
          });
          return;
        }
      } else {
        // Development local fallback ONLY when Cloudinary is genuinely not configured
        if (process.env.NODE_ENV === "production") {
          if (fs.existsSync(file.path)) fs.unlinkSync(file.path);
          res.status(500).json({
            success: false,
            message: "Cloudinary media service is not configured in production environment",
          });
          return;
        }
        fileMap[file.fieldname] = `${baseUrl}/uploads/${file.filename}`;
      }
    }

    res.status(200).json({
      success: true,
      message: "Photos uploaded successfully",
      urls: fileMap,
      storage: isConfigured ? "cloudinary" : "local_fallback",
    });
  } catch (error) {
    console.error("Upload artist photos error:", error);
    res.status(500).json({
      success: false,
      message: "Unable to upload image right now. Please try again.",
    });
  }
}

// ==========================================
// GET PUBLIC APPROVED ARTISTS (TALENT DIRECTORY)
// ==========================================
export async function getPublicArtists(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const {
      category,
      gender,
      subCategory,
      city,
      search,
      page = "1",
      limit = "50",
    } = req.query as Record<string, string | undefined>;

    const pageNum = Math.max(1, parseInt(page || "1", 10) || 1);
    const limitNum = Math.min(100, Math.max(1, parseInt(limit || "50", 10) || 50));
    const skip = (pageNum - 1) * limitNum;

    // Build dynamic query for approved public directory
    const where: any = {
      verificationStatus: "APPROVED",
      fullName: { not: "" },
    };

    if (gender && typeof gender === "string") {
      where.gender = { equals: gender, mode: "insensitive" };
    }

    if (category && typeof category === "string") {
      const cleanCat = category.trim().toLowerCase();
      if (cleanCat === "actors" || cleanCat === "actor") {
        where.primaryCategory = { in: ["Actor", "actor", "ACTOR"] };
      } else if (cleanCat === "models" || cleanCat === "model") {
        where.primaryCategory = { in: ["Model", "model", "MODEL"] };
      } else if (cleanCat === "dancers" || cleanCat === "dancer") {
        where.primaryCategory = { in: ["Dancer", "dancer", "DANCER"] };
      } else if (cleanCat === "voice-artists" || cleanCat === "voice artist" || cleanCat === "voice") {
        where.primaryCategory = { in: ["Voice Artist", "voice artist", "VOICE ARTIST"] };
      } else if (cleanCat === "influencers" || cleanCat === "influencer") {
        where.primaryCategory = { in: ["Influencer", "influencer", "INFLUENCER"] };
      } else if (cleanCat === "child-artists" || cleanCat === "child artist" || cleanCat === "child") {
        where.primaryCategory = { in: ["Child Artist", "child artist", "CHILD ARTIST"] };
      }
    }

    if (subCategory && typeof subCategory === "string") {
      const sub = subCategory.toLowerCase();
      if (sub === "male" || sub === "male-actors" || sub === "male-models" || sub === "boys") {
        where.gender = { equals: "Male", mode: "insensitive" };
      } else if (sub === "female" || sub === "female-actors" || sub === "female-models" || sub === "girls") {
        where.gender = { equals: "Female", mode: "insensitive" };
      } else if (sub.includes("child")) {
        where.primaryCategory = { in: ["Child Artist", "child artist"] };
      } else if (sub.includes("fresh")) {
        where.experience = { contains: "Fresh", mode: "insensitive" };
      } else if (sub.includes("experienced")) {
        where.experience = { contains: "Experienced", mode: "insensitive" };
      }
    }

    if (city && typeof city === "string") {
      where.city = { contains: city, mode: "insensitive" };
    }

    if (search && typeof search === "string") {
      where.OR = [
        { fullName: { contains: search, mode: "insensitive" } },
        { skills: { contains: search, mode: "insensitive" } },
        { city: { contains: search, mode: "insensitive" } },
      ];
    }

    const [total, artists] = await Promise.all([
      prisma.artistProfile.count({ where }),
      prisma.artistProfile.findMany({
        where,
        skip,
        take: limitNum,
        orderBy: [
          { approvedAt: "desc" },
          { updatedAt: "desc" },
        ],
        select: {
          id: true,
          userId: true,
          fullName: true,
          gender: true,
          dateOfBirth: true,
          primaryCategory: true,
          experience: true,
          city: true,
          state: true,
          height: true,
          weight: true,
          bio: true,
          languages: true,
          skills: true,
          specialAbilities: true,
          profilePhoto: true,
          headshots: true,
          verificationStatus: true,
          approvedAt: true,
        },
      }),
    ]);

    const talents = artists.map((art) => {
      let age = 24;
      if (art.dateOfBirth) {
        const diff = Date.now() - new Date(art.dateOfBirth).getTime();
        age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      }

      const catLabel = `${art.gender || ""} ${art.primaryCategory || "Artist"}`.trim();
      const headshotsArr = art.headshots ? art.headshots.split(",").filter(Boolean) : [];

      return {
        id: `dca-${art.id}`,
        dbId: art.id,
        userId: art.userId,
        name: art.fullName,
        category: (art.primaryCategory || "Actor").toLowerCase().replace(/\s+/g, "-"),
        categoryLabel: catLabel,
        role: art.primaryCategory || "Artist",
        age,
        height: art.height || "Not specified",
        weight: art.weight || "Not specified",
        experience: art.experience || "Fresh Face",
        location: [art.city, art.state].filter(Boolean).join(", ") || "Delhi, India",
        languages: art.languages ? art.languages.split(",").map((s) => s.trim()) : ["Hindi", "English"],
        mainImage: art.profilePhoto || "/images/actors/default-avatar.png",
        about: art.bio || `${art.fullName} is a verified ${catLabel} registered with Delhi Casting Agency.`,
        skills: art.skills ? art.skills.split(",").map((s) => s.trim()) : [],
        specialAbilities: art.specialAbilities ? art.specialAbilities.split(",").map((s) => s.trim()) : [],
        isLiveUser: true,
        verificationStatus: art.verificationStatus,
        digitals: [art.profilePhoto, ...headshotsArr].filter(Boolean),
        videos: [],
        instagram: [],
        print: [],
        experienceCredits: [],
      };
    });

    res.status(200).json({
      success: true,
      count: talents.length,
      total,
      page: pageNum,
      totalPages: Math.ceil(total / limitNum),
      artists: talents,
    });
  } catch (error) {
    console.error("Get public artists error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch public artists directory",
    });
  }
}

// ==========================================
// GET PUBLIC ARTIST BY ID (FOR PROFILE VIEW)
// ==========================================
export async function getPublicArtistById(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const rawId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    if (!rawId || typeof rawId !== "string") {
      res.status(400).json({ success: false, message: "Artist ID required" });
      return;
    }

    const cleanId = rawId.startsWith("dca-") ? rawId.replace("dca-", "") : rawId;

    const artist = await prisma.artistProfile.findFirst({
      where: {
        OR: [
          { id: cleanId },
          { userId: cleanId },
        ],
        verificationStatus: "APPROVED",
      },
      include: {
        user: {
          select: {
            email: true,
          },
        },
      },
    });

    if (!artist) {
      res.status(404).json({
        success: false,
        message: "Artist not found or not yet approved for public viewing",
      });
      return;
    }

    let age = 24;
    if (artist.dateOfBirth) {
      const diff = Date.now() - new Date(artist.dateOfBirth).getTime();
      age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    }

    const catLabel = `${artist.gender || ""} ${artist.primaryCategory || "Artist"}`.trim();
    const headshotsArr = artist.headshots ? artist.headshots.split(",").filter(Boolean) : [];

    const formatted = {
      id: `dca-${artist.id}`,
      dbId: artist.id,
      userId: artist.userId,
      name: artist.fullName,
      category: (artist.primaryCategory || "Actor").toLowerCase().replace(/\s+/g, "-"),
      categoryLabel: catLabel,
      role: artist.primaryCategory || "Artist",
      age,
      height: artist.height || "Not specified",
      weight: artist.weight || "Not specified",
      chest: artist.chest || "Not specified",
      waist: artist.waist || "Not specified",
      hips: artist.hips || "Not specified",
      experience: artist.experience || "Fresh Face",
      location: [artist.city, artist.state].filter(Boolean).join(", ") || "Delhi, India",
      languages: artist.languages ? artist.languages.split(",").map((s) => s.trim()) : ["Hindi", "English"],
      mainImage: artist.profilePhoto || "/images/actors/default-avatar.png",
      about: artist.bio || `${artist.fullName} is a verified ${catLabel} registered with Delhi Casting Agency.`,
      skills: artist.skills ? artist.skills.split(",").map((s) => s.trim()) : [],
      specialAbilities: artist.specialAbilities ? artist.specialAbilities.split(",").map((s) => s.trim()) : [],
      isLiveUser: true,
      verificationStatus: artist.verificationStatus,
      digitals: [artist.profilePhoto, ...headshotsArr].filter(Boolean),
      videos: [],
      instagram: [],
      print: [],
      experienceCredits: [],
    };

    res.status(200).json({
      success: true,
      artist: formatted,
    });
  } catch (error) {
    console.error("Get public artist by ID error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch artist profile",
    });
  }
}