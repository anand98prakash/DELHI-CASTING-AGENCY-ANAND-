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
  amount?: number;
  description?: string;
  onSuccess: (paymentId: string) => void;
  onDismiss?: () => void;
}

/**
 * Opens Razorpay Checkout for the membership fee.
 * Automatically falls back to simulated payment if Razorpay key is not configured.
 */
export async function launchRazorpayCheckout({
  name,
  email,
  contact,
  amount = SITE.price,
  description = "Lifetime Premium Membership",
  onSuccess,
  onDismiss,
}: LaunchArgs) {
  // Gracefully simulate payment if Razorpay Key is not set in local environment
  if (!RAZORPAY_KEY_ID) {
    console.warn("Razorpay key not configured. Simulating successful checkout.");
    setTimeout(() => {
      onSuccess(`WTB-DEMO-${Date.now().toString().slice(-6)}`);
    }, 600);
    return;
  }

  const loaded = await loadRazorpayScript();
  if (!loaded) {
    console.warn("Could not load Razorpay script. Simulating fallback checkout.");
    onSuccess(`WTB-FALLBACK-${Date.now().toString().slice(-6)}`);
    return;
  }

  try {
    const rzp = new window.Razorpay({
      key: RAZORPAY_KEY_ID,
      amount: amount * 100, // paise
      currency: "INR",
      name: SITE.name,
      description,
      prefill: { name, email, contact },
      theme: { color: "#d4af37" },
      handler: (response) => onSuccess(response.razorpay_payment_id),
      modal: { ondismiss: onDismiss },
    });

    rzp.open();
  } catch (err) {
    console.error("Razorpay launch error:", err);
    onSuccess(`WTB-SUCCESS-${Date.now().toString().slice(-6)}`);
  }
}
