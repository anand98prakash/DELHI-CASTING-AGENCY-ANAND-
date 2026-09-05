import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import path from "node:path";
import { prisma } from "./config/prisma.js";
import authRoutes from "./routes/auth.routes.js";
import artistRoutes from "./routes/artist.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import castingRoutes from "./routes/casting.routes.js";
import applicationRoutes from "./routes/application.routes.js";
import notificationRoutes from "./routes/notification.routes.js";
import paymentRoutes from "./routes/payment.routes.js";
import { getCloudinaryHealthStatus } from "./services/cloudinary.service.js";
import {
  getArtistApplications,
  getCastingCallApplicants,
  updateApplicationStatus,
} from "./controllers/application.controller.js";
import {
  getBrandCastingCalls,
  getBrandProfile,
  updateBrandProfile,
} from "./controllers/casting.controller.js";
import { authenticate } from "./middleware/auth.middleware.js";

const app = express();

const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";
const isProduction = process.env.NODE_ENV === "production";

// Enable reverse proxy trust for accurate client IP detection in rate limiters
app.set("trust proxy", 1);

// Apply Helmet security headers
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginResourcePolicy: { policy: "cross-origin" },
  }),
);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || !isProduction) {
        callback(null, true);
        return;
      }
      if (origin === FRONTEND_URL) {
        callback(null, true);
        return;
      }
      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  }),
);

app.use(
  express.json({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    verify: (req: any, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(
  express.urlencoded({
    extended: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    verify: (req: any, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

// Serve uploaded static image files
app.use("/uploads", express.static(path.resolve(process.cwd(), "uploads")));

// Auth routes
app.use("/api/auth", authRoutes);

// Artist routes
app.use("/api/artist/applications", authenticate, getArtistApplications);
app.use("/api/artist", artistRoutes);

// Admin routes
app.use("/api/admin", adminRoutes);

// Casting routes
app.use("/api/casting", castingRoutes);

// Brand aliases
app.get("/api/brand/profile", authenticate, getBrandProfile);
app.put("/api/brand/profile", authenticate, updateBrandProfile);
app.get("/api/brand/casting", authenticate, getBrandCastingCalls);
app.get(
  "/api/brand/casting/:id/applications",
  authenticate,
  getCastingCallApplicants,
);
app.patch(
  "/api/brand/applications/:id/status",
  authenticate,
  updateApplicationStatus,
);

// Application routes
app.use("/api/applications", applicationRoutes);

// Notification routes
app.use("/api/notifications", notificationRoutes);

// Payment & Premium Entitlement routes
app.use("/api/payments", paymentRoutes);

// Health check endpoint
app.get("/api/health", async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    res.status(200).json({
      success: true,
      message: "DCA API is healthy",
      database: "connected",
      cloudinary: getCloudinaryHealthStatus(),
      environment: isProduction ? "production" : "development",
    });
  } catch (error: unknown) {
    const message = isProduction
      ? "Database connection issue"
      : error instanceof Error
      ? error.message
      : "Unknown error";

    res.status(500).json({
      success: false,
      message: "Database connection failed",
      error: message,
    });
  }
});

app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found",
  });
});

app.listen(PORT, () => {
  console.log(`DCA Backend running on http://localhost:${PORT}`);
});
