/**
 * Strict rate limiter for POST /api/auth/login
 * Limits each IP to 10 login attempts per 15-minute window.
 */
export declare const loginRateLimiter: import("express-rate-limit").RateLimitRequestHandler;
/**
 * Strict rate limiter for POST /api/auth/register
 * Limits each IP to 10 registration attempts per 15-minute window.
 */
export declare const registerRateLimiter: import("express-rate-limit").RateLimitRequestHandler;
/**
 * Dedicated rate limiter for POST /api/auth/mfa/verify
 * Limits each IP to 5 MFA verification attempts per 15-minute window.
 */
export declare const mfaVerifyRateLimiter: import("express-rate-limit").RateLimitRequestHandler;
//# sourceMappingURL=rateLimit.middleware.d.ts.map