import type { Response } from "express";
import type { AuthRequest } from "../middleware/auth.middleware.js";
export declare function submitApplication(req: AuthRequest, res: Response): Promise<void>;
export declare function getArtistApplications(req: AuthRequest, res: Response): Promise<void>;
export declare function getCastingCallApplicants(req: AuthRequest, res: Response): Promise<void>;
export declare function updateApplicationStatus(req: AuthRequest, res: Response): Promise<void>;
//# sourceMappingURL=application.controller.d.ts.map