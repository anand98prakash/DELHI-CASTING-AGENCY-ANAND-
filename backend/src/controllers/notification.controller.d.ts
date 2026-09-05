import type { Response } from "express";
import type { AuthRequest } from "../middleware/auth.middleware.js";
export declare function getMyNotifications(req: AuthRequest, res: Response): Promise<void>;
export declare function getUnreadNotificationCount(req: AuthRequest, res: Response): Promise<void>;
export declare function markNotificationAsRead(req: AuthRequest, res: Response): Promise<void>;
export declare function markAllNotificationsAsRead(req: AuthRequest, res: Response): Promise<void>;
//# sourceMappingURL=notification.controller.d.ts.map