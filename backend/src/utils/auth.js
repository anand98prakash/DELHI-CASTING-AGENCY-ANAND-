import "dotenv/config";
import crypto from "crypto";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../config/prisma.js";
const JWT_SECRET = process.env.JWT_SECRET ?? "";
if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured");
}
export async function hashPassword(password) {
    return bcrypt.hash(password, 12);
}
export async function comparePassword(password, hashedPassword) {
    return bcrypt.compare(password, hashedPassword);
}
/**
 * Computes SHA-256 hash of a JWT token for revocation lookup
 */
export function hashToken(token) {
    return crypto.createHash("sha256").update(token).digest("hex");
}
/**
 * Generates a full authentication JWT with userId, role, tokenVersion, and unique JTI
 */
export function generateToken(userId, role, tokenVersion = 0) {
    const jti = crypto.randomUUID();
    return jwt.sign({
        userId,
        role,
        tokenVersion,
        jti,
    }, JWT_SECRET, {
        expiresIn: "7d",
    });
}
/**
 * Cryptographically verifies and parses a full authentication JWT
 */
export function verifyToken(token) {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (typeof decoded === "string" || !decoded.userId || !decoded.role) {
        throw new Error("Invalid token payload");
    }
    return {
        userId: decoded.userId,
        role: decoded.role,
        tokenVersion: typeof decoded.tokenVersion === "number" ? decoded.tokenVersion : 0,
        jti: typeof decoded.jti === "string" ? decoded.jti : undefined,
        exp: typeof decoded.exp === "number" ? decoded.exp : undefined,
    };
}
/**
 * Generates a short-lived 5-minute MFA challenge token for Admin MFA verification
 */
export function generateMfaToken(userId, scope) {
    return jwt.sign({
        userId,
        scope,
        role: "ADMIN_MFA_CHALLENGE",
    }, JWT_SECRET, {
        expiresIn: "5m", // 5 minute validity
    });
}
/**
 * Cryptographically verifies an MFA challenge token and checks payload binding
 */
export function verifyMfaToken(token) {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (typeof decoded === "string" ||
        !decoded.userId ||
        !decoded.scope ||
        decoded.role !== "ADMIN_MFA_CHALLENGE") {
        throw new Error("Invalid MFA challenge token payload");
    }
    return {
        userId: decoded.userId,
        scope: decoded.scope,
    };
}
/**
 * Purges expired tokens from RevokedToken table
 */
export async function cleanupExpiredRevokedTokens() {
    const result = await prisma.revokedToken.deleteMany({
        where: {
            expiresAt: {
                lt: new Date(),
            },
        },
    });
    return result.count;
}
//# sourceMappingURL=auth.js.map