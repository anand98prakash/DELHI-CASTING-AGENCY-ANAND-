import { rateLimit } from "express-rate-limit";
// Shared generic error handler for rate limit violations
const rateLimitHandler = (_req, res) => {
    res.status(429).json({
        success: false,
        message: "Too many requests. Please try again later.",
    });
};
/**
 * Strict rate limiter for POST /api/auth/login
 * Limits each IP to 10 login attempts per 15-minute window.
 */
export const loginRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 10, // 10 attempts per window
    standardHeaders: "draft-7",
    legacyHeaders: false,
    handler: rateLimitHandler,
});
/**
 * Strict rate limiter for POST /api/auth/register
 * Limits each IP to 10 registration attempts per 15-minute window.
 */
export const registerRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 10, // 10 attempts per window
    standardHeaders: "draft-7",
    legacyHeaders: false,
    handler: rateLimitHandler,
});
/**
 * Dedicated rate limiter for POST /api/auth/mfa/verify
 * Limits each IP to 5 MFA verification attempts per 15-minute window.
 */
export const mfaVerifyRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 5, // 5 attempts per window to prevent 6-digit PIN brute forcing
    standardHeaders: "draft-7",
    legacyHeaders: false,
    handler: (_req, res) => {
        res.status(429).json({
            success: false,
            message: "Too many MFA verification attempts. Please try again later.",
        });
    },
});
//# sourceMappingURL=rateLimit.middleware.js.map