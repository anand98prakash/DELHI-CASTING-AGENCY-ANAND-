import "dotenv/config";
/**
 * Returns true if Cloudinary credentials are fully configured in process.env
 */
export declare function isCloudinaryConfigured(): boolean;
/**
 * Safe status getter for health check endpoints (Does NOT expose secrets)
 */
export declare function getCloudinaryHealthStatus(): "configured" | "not_configured";
export interface CloudinaryUploadResult {
    url: string;
    public_id: string;
    bytes: number;
    format: string;
}
/**
 * Uploads a local file or buffer to Cloudinary with automatic optimization.
 */
export declare function uploadToCloudinary(filePathOrBuffer: string | Buffer, folder?: string, publicId?: string): Promise<CloudinaryUploadResult | null>;
/**
 * Safely deletes a Cloudinary asset by public_id.
 */
export declare function deleteFromCloudinary(publicId: string): Promise<boolean>;
//# sourceMappingURL=cloudinary.service.d.ts.map