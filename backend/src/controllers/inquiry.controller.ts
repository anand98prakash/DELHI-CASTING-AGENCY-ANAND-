import type { Request, Response } from "express";
import { prisma } from "../config/prisma.js";

/**
 * POST /api/inquiries
 * Public & authenticated casting inquiry endpoint for brands, directors, and production houses.
 * Dispatches database notifications to the target artist and DCA admin team.
 */
export async function submitCastingInquiry(req: Request, res: Response): Promise<void> {
  try {
    const {
      artistName,
      artistCategory,
      artistId,
      clientType,
      companyName,
      contactName,
      email,
      phone,
      contactMethod,
      projectType,
      projectTitle,
      shootDates,
      shootLocation,
      budgetRange,
      projectBrief,
    } = req.body;

    if (!companyName || !contactName || !email || !phone || !projectBrief) {
      res.status(400).json({
        success: false,
        message: "Missing required fields: companyName, contactName, email, phone, or projectBrief.",
      });
      return;
    }

    const inquiryId = `DCA-INQ-${Math.floor(100000 + Math.random() * 900000)}`;

    // 1. Check if the target artist is registered in the database
    let targetUser = null;
    if (artistId && typeof artistId === "string" && artistId.startsWith("dca-")) {
      const realId = artistId.replace("dca-", "");
      const profile = await prisma.artistProfile.findUnique({
        where: { id: realId },
        include: { user: true },
      });
      if (profile?.user) {
        targetUser = profile.user;
      }
    }

    if (!targetUser && artistName && typeof artistName === "string") {
      const trimmedName = artistName.trim();
      const user = await prisma.user.findFirst({
        where: {
          name: { equals: trimmedName, mode: "insensitive" },
          role: "ARTIST",
        },
      });
      if (user) {
        targetUser = user;
      }
    }

    // 2. Dispatch in-app notification to the artist
    if (targetUser) {
      try {
        await prisma.notification.create({
          data: {
            userId: targetUser.id,
            type: "APPLICATION_SHORTLISTED",
            title: `New Casting Inquiry: ${companyName}`,
            message: `${companyName} (${clientType || "Production House"}) submitted an official casting inquiry for you for ${projectType || "Project"}${projectTitle ? ` ("${projectTitle}")` : ""}. Budget: ${budgetRange || "Industry Scale"}. DCA Talent Desk is reviewing and will coordinate with you.`,
            entityType: "INQUIRY",
            entityId: inquiryId,
          },
        });
      } catch (notifyErr) {
        console.warn("Failed to create artist notification safely:", notifyErr);
      }
    }

    // 3. Dispatch in-app notification to DCA Admins
    try {
      const admins = await prisma.user.findMany({
        where: { role: "ADMIN" },
        select: { id: true },
      });

      for (const admin of admins) {
        await prisma.notification.create({
          data: {
            userId: admin.id,
            type: "NEW_APPLICATION",
            title: `New Casting Inquiry: ${artistName || "General Talent"}`,
            message: `${companyName} (${contactName}, ${phone}) submitted a casting inquiry for ${artistName || "talent"} for ${projectType || "Project"}. Budget: ${budgetRange || "Negotiable"}.`,
            entityType: "INQUIRY",
            entityId: inquiryId,
          },
        });
      }
    } catch (adminErr) {
      console.warn("Failed to create admin notification safely:", adminErr);
    }

    res.status(201).json({
      success: true,
      inquiryId,
      message: "Casting inquiry successfully submitted and dispatched to DCA talent desk.",
      notifiedArtist: !!targetUser,
      artistName: artistName || null,
    });
  } catch (error) {
    console.error("Error submitting casting inquiry:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit casting inquiry. Please try again or contact casting desk directly.",
    });
  }
}
