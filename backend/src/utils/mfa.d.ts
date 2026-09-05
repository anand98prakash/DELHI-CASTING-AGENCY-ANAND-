/**
 * Encrypts MFA TOTP secret using AES-256-GCM
 */
export declare function encryptMfaSecret(plainSecret: string): string;
/**
 * Decrypts AES-256-GCM encrypted MFA TOTP secret
 */
export declare function decryptMfaSecret(encryptedData: string): string;
export declare function generateBase32Secret(length?: number): string;
/**
 * Generates 6-digit TOTP for a given Base32 secret and time counter
 */
export declare function generateTotp(secretBase32: string, timeStep?: number): string;
/**
 * Verifies 6-digit TOTP with ±1 time-step (±30 seconds) clock drift tolerance
 */
export declare function verifyTotp(secretBase32: string, userCode: string): boolean;
/**
 * Generates 8 random 8-character hex backup codes
 */
export declare function generateBackupCodes(count?: number): string[];
/**
 * Hashes a backup code with bcrypt
 */
export declare function hashBackupCode(code: string): Promise<string>;
/**
 * Verifies a backup code against a bcrypt hash
 */
export declare function compareBackupCode(plainCode: string, codeHash: string): Promise<boolean>;
//# sourceMappingURL=mfa.d.ts.map