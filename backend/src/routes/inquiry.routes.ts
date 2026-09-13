import { Router } from "express";
import { submitCastingInquiry } from "../controllers/inquiry.controller.js";

const router = Router();

// POST /api/inquiries - Submit casting brief and dispatch notifications
router.post("/", submitCastingInquiry);

export default router;
