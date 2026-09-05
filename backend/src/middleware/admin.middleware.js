export function requireAdmin(req, res, next) {
    try {
        if (!req.user) {
            res.status(401).json({
                success: false,
                message: "Authentication required",
            });
            return;
        }
        if (req.user.role !== "ADMIN") {
            res.status(403).json({
                success: false,
                message: "Admin access required",
            });
            return;
        }
        next();
    }
    catch (error) {
        console.error("Admin authorization error:", error);
        res.status(403).json({
            success: false,
            message: "Admin access denied",
        });
    }
}
//# sourceMappingURL=admin.middleware.js.map