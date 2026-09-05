import type { Response } from "express";
import type { AuthRequest } from "../middleware/auth.middleware.js";
export declare function getPendingArtists(_req: AuthRequest, res: Response): Promise<void>;
export declare function getArtistForReview(req: AuthRequest, res: Response): Promise<void>;
export declare function getApprovedArtists(_req: AuthRequest, res: Response): Promise<void>;
export declare function getRejectedArtists(_req: AuthRequest, res: Response): Promise<void>;
export declare function approveArtist(req: AuthRequest, res: Response): Promise<void>;
export declare function rejectArtist(req: AuthRequest, res: Response): Promise<void>;
export declare function getPendingBrands(_req: AuthRequest, res: Response): Promise<void>;
export declare function approveBrand(req: AuthRequest, res: Response): Promise<void>;
export declare function rejectBrand(req: AuthRequest, res: Response): Promise<void>;
export declare function getPendingCastingCalls(_req: AuthRequest, res: Response): Promise<void>;
export declare function approveCastingCall(req: AuthRequest, res: Response): Promise<void>;
export declare function rejectCastingCall(req: AuthRequest, res: Response): Promise<void>;
export declare function getAdminStats(_req: AuthRequest, res: Response): Promise<void>;
export declare function getAdminPayments(req: AuthRequest, res: Response): Promise<void>;
//# sourceMappingURL=admin.controller.d.ts.map