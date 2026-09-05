import "dotenv/config";
export declare function hashPassword(password: string): Promise<string>;
export declare function comparePassword(password: string, hashedPassword: string): Promise<boolean>;
/**
 * Computes SHA-256 hash of a JWT token for revocation lookup
 */
export declare function hashToken(token: string): string;
export interface DecodedTokenPayload {
    userId: string;
    role: string;
    tokenVersion: number;
    jti?: string | undefined;
    exp?: number | undefined;
}
/**
 * Generates a full authentication JWT with userId, role, tokenVersion, and unique JTI
 */
export declare function generateToken(userId: string, role: string, tokenVersion?: number): string;
/**
 * Cryptographically verifies and parses a full authentication JWT
 */
export declare function verifyToken(token: string): DecodedTokenPayload;
/**
 * Generates a short-lived 5-minute MFA challenge token for Admin MFA verification
 */
export declare function generateMfaToken(userId: string, scope: "mfa_setup" | "mfa_pending"): string;
/**
 * Cryptographically verifies an MFA challenge token and checks payload binding
 */
export declare function verifyMfaToken(token: string): {
    userId: string;
    scope: string;
};
/**
 * Purges expired tokens from RevokedToken table
 */
export declare function cleanupExpiredRevokedTokens(): Promise<number>;
//# sourceMappingURL=auth.d.ts.map