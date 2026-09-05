import fs from "node:fs";
import path from "node:path";
import multer from "multer";
// Ensure uploads directory exists on server
const uploadDir = path.resolve(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}
// 1. Storage Engine Configuration
const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, uploadDir);
    },
    filename: (_req, file, cb) => {
        // Generate safe, unique filename: fieldname-timestamp-random.ext
        const ext = path.extname(file.originalname).toLowerCase();
        const sanitizedBase = path
            .basename(file.originalname, ext)
            .replace(/[^a-zA-Z0-9_-]/g, "_");
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        cb(null, `${file.fieldname}-${sanitizedBase}-${uniqueSuffix}${ext}`);
    },
});
// 2. File Filter (JPG, JPEG, PNG, WEBP only, with strict extension check)
const fileFilter = (_req, file, cb) => {
    const allowedMimeTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/webp",
    ];
    const allowedExtensions = [".jpg", ".jpeg", ".png", ".webp"];
    const ext = path.extname(file.originalname).toLowerCase();
    const isValidMime = allowedMimeTypes.includes(file.mimetype.toLowerCase());
    const isValidExt = allowedExtensions.includes(ext);
    if (isValidMime && isValidExt) {
        cb(null, true);
    }
    else {
        cb(new Error("Invalid file format. Only JPG, JPEG, PNG, and WEBP image files are allowed."));
    }
};
// 3. Multer Instance (5MB limit per file)
export const uploadMiddleware = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5 MB per file
    },
});
//# sourceMappingURL=upload.middleware.js.map