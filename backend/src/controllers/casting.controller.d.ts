import type { Response } from "express";
import type { AuthRequest } from "../middleware/auth.middleware.js";
export declare function createCastingCall(req: AuthRequest, res: Response): Promise<void>;
export declare function getPublicCastingCalls(req: AuthRequest, res: Response): Promise<void>;
export declare function getPublicCastingCallById(req: AuthRequest, res: Response): Promise<void>;
export declare function getBrandCastingCalls(req: AuthRequest, res: Response): Promise<void>;
export declare function getBrandProfile(req: AuthRequest, res: Response): Promise<void>;
export declare function updateBrandProfile(req: AuthRequest, res: Response): Promise<void>;
export declare function updateCastingCall(req: AuthRequest, res: Response): Promise<void>;
export declare function deleteCastingCall(req: AuthRequest, res: Response): Promise<void>;
//# sourceMappingURL=casting.controller.d.ts.map