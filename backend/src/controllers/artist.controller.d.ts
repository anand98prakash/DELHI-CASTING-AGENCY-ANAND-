import type { Response } from "express";
import type { AuthRequest } from "../middleware/auth.middleware.js";
export declare function createArtistProfile(req: AuthRequest, res: Response): Promise<void>;
export declare function getArtistProfile(req: AuthRequest, res: Response): Promise<void>;
export declare function updateArtistProfile(req: AuthRequest, res: Response): Promise<void>;
export declare function uploadArtistPhotos(req: AuthRequest, res: Response): Promise<void>;
//# sourceMappingURL=artist.controller.d.ts.map