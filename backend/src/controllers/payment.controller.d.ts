import type { Response, Request } from "express";
import type { AuthRequest } from "../middleware/auth.middleware.js";
export declare function createPaymentOrder(req: AuthRequest, res: Response): Promise<void>;
export declare function verifyPayment(req: AuthRequest, res: Response): Promise<void>;
export declare function handleRazorpayWebhook(req: Request, res: Response): Promise<void>;
export declare function getMyEntitlement(req: AuthRequest, res: Response): Promise<void>;
export declare function initiatePayuPayment(req: AuthRequest, res: Response): Promise<void>;
export declare function handlePayuResponse(req: Request, res: Response): Promise<void>;
export declare function handlePayuWebhook(req: Request, res: Response): Promise<void>;
//# sourceMappingURL=payment.controller.d.ts.map