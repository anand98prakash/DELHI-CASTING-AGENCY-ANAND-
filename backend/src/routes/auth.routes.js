import { Router } from "express";
import { getMe, login, logout, register, setupMfa, verifyMfa } from "../controllers/auth.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { loginRateLimiter, mfaVerifyRateLimiter, registerRateLimiter } from "../middleware/rateLimit.middleware.js";
const router = Router();
// Public routes with rate limiting
router.post("/register", registerRateLimiter, register);
router.post("/login", loginRateLimiter, login);
// Admin MFA Challenge routes
router.post("/mfa/setup", setupMfa);
router.post("/mfa/verify", mfaVerifyRateLimiter, verifyMfa);
// Protected routes
router.post("/logout", authenticate, logout);
router.get("/me", authenticate, getMe);
export default router;
//# sourceMappingURL=auth.routes.js.map