import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware.js";
import { createPaymentOrder, verifyPayment, handleRazorpayWebhook, getMyEntitlement, initiatePayuPayment, handlePayuResponse, handlePayuWebhook, } from "../controllers/payment.controller.js";
const router = Router();
// ==========================================
// 1. PUBLIC WEBHOOK / CALLBACK ENDPOINTS
// ==========================================
router.post("/webhook", handleRazorpayWebhook);
// POST /api/payments/payu/response (Public PayU hosted checkout callback handler)
router.post("/payu/response", handlePayuResponse);
// POST /api/payments/payu/webhook (Public PayU server-to-server IPN webhook listener)
router.post("/payu/webhook", handlePayuWebhook);
// ==========================================
// 2. AUTHENTICATED USER ENDPOINTS
// ==========================================
router.use(authenticate);
// POST /api/payments/create-order (Create PENDING order in DB)
router.post("/create-order", createPaymentOrder);
// POST /api/payments/verify (Verify transaction & activate 3-month entitlement)
router.post("/verify", verifyPayment);
// POST /api/payments/payu/initiate (Initiate PayU payment & create PENDING record in DB)
router.post("/payu/initiate", initiatePayuPayment);
// GET /api/payments/my-entitlement (Get user's active entitlement status)
router.get("/my-entitlement", getMyEntitlement);
export default router;
//# sourceMappingURL=payment.routes.js.map