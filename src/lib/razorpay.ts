import { RAZORPAY_KEY_ID, SITE } from "./constants";

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => { open: () => void };
  }
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id?: string;
  prefill?: { name?: string; email?: string; contact?: string };
  theme?: { color?: string };
  handler: (response: {
    razorpay_payment_id: string;
    razorpay_order_id?: string;
    razorpay_signature?: string;
  }) => void;
  modal?: { ondismiss?: () => void };
}

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return resolve(false);
    if (window.Razorpay) return resolve(true);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

interface LaunchArgs {
  name: string;
  email: string;
  contact: string;
  onSuccess: (paymentId: string) => void;
  onDismiss?: () => void;
}

/**
 * Opens Razorpay Checkout for the membership fee.
 *
 * IMPORTANT: In production, create the order server-side first
 * (POST /api/razorpay/order using your Key Secret) and pass the
 * returned order_id below — never trust a client-only amount.
 * This client-only version is provided so the UI is wired end-to-end;
 * swap in the real order_id once your API route is ready.
 */
export async function launchRazorpayCheckout({
  name,
  email,
  contact,
  onSuccess,
  onDismiss,
}: LaunchArgs) {
  const loaded = await loadRazorpayScript();
  if (!loaded) {
    alert("Could not load the payment gateway. Please check your connection and try again.");
    return;
  }

  if (!RAZORPAY_KEY_ID) {
    alert(
      "Razorpay key not configured. Add NEXT_PUBLIC_RAZORPAY_KEY_ID to your environment to enable payments."
    );
    return;
  }

  const rzp = new window.Razorpay({
    key: RAZORPAY_KEY_ID,
    amount: SITE.price * 100, // paise
    currency: "INR",
    name: SITE.name,
    description: "Lifetime Premium Membership",
    prefill: { name, email, contact },
    theme: { color: "#d4af37" },
    handler: (response) => onSuccess(response.razorpay_payment_id),
    modal: { ondismiss: onDismiss },
  });

  rzp.open();
}
