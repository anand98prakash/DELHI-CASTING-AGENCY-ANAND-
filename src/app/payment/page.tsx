"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Lock,
  ShieldCheck,
  Smartphone,
  WalletCards,
} from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

type PaymentMethod = "upi" | "card" | "netbanking";

export default function PaymentPage() {
  const router = useRouter();

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("upi");

  const [agreed, setAgreed] = useState(false);
  const [processing, setProcessing] = useState(false);

  /*
   * Check whether the artist completed Step 2.
   *
   * Frontend-only flow:
   * - No backend
   * - No API
   * - No JWT
   * - No database
   * - No setState() inside the effect
   */
  useEffect(() => {
    const registration = sessionStorage.getItem("artist-registration-complete");

    if (!registration) {
      router.replace("/register/");
    }
  }, [router]);

  /*
   * Frontend-only payment simulation.
   *
   * IMPORTANT:
   * This does NOT connect to Razorpay or any real payment gateway.
   */
  const handlePayment = () => {
    if (!agreed || processing) {
      return;
    }

    setProcessing(true);

    /*
     * Save simulated payment status.
     */
    sessionStorage.setItem("payment-status", "success");

    /*
     * Simulate a short payment-processing state.
     */
    setTimeout(() => {
      router.push("/payment/success/");
    }, 1000);
  };

  return (
    <main>
      {/* ================================================================ */}
      {/* HERO                                                             */}
      {/* ================================================================ */}

      <PageHero
        eyebrow="Membership Payment"
        title="Complete Your Registration"
        description="Review your registration summary and continue through the payment interface."
      />

      {/* ================================================================ */}
      {/* BREADCRUMB                                                       */}
      {/* ================================================================ */}

      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <Breadcrumb
          items={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Register",
              href: "/register/",
            },
            {
              label: "Artist Profile",
              href: "/register/step-2-profile/",
            },
            {
              label: "Payment",
            },
          ]}
        />
      </div>

      {/* ================================================================ */}
      {/* PAYMENT SECTION                                                  */}
      {/* ================================================================ */}

      <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* ============================================================ */}
          {/* ORDER SUMMARY                                                 */}
          {/* ============================================================ */}

          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                Registration Summary
              </p>

              <h2 className="mt-4 font-bold tracking-tight text-2xl text-white">
                Artist Membership
              </h2>

              <div className="mt-7 space-y-4">
                <SummaryItem
                  icon={<CheckCircle2 className="h-4 w-4" />}
                  label="Artist registration"
                />

                <SummaryItem
                  icon={<CheckCircle2 className="h-4 w-4" />}
                  label="Artist profile"
                />

                <SummaryItem
                  icon={<CheckCircle2 className="h-4 w-4" />}
                  label="Portfolio information"
                />

                <SummaryItem
                  icon={<CheckCircle2 className="h-4 w-4" />}
                  label="Platform access"
                />
              </div>

              <div className="my-7 h-px bg-white/10" />

              {/* Membership Fee */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/50">Membership Fee</span>

                <span className="font-bold tracking-tight text-xl text-[#D4AF37]">
                  As applicable
                </span>
              </div>

              {/* Price Disclaimer */}
              <div className="mt-5 rounded-2xl border border-[#D4AF37]/15 bg-[#D4AF37]/[0.04] p-4">
                <p className="text-xs leading-6 text-white/50">
                  The provided website structure document does not specify an
                  exact membership amount. Therefore, no unverified price is
                  displayed here.
                </p>
              </div>

              {/* Terms Notice */}
              <div className="mt-6 flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" />

                <p className="text-xs leading-6 text-white/45">
                  Please review the applicable terms, cancellation and refund
                  information before completing payment.
                </p>
              </div>
            </div>
          </Reveal>

          {/* ============================================================ */}
          {/* PAYMENT CARD                                                   */}
          {/* ============================================================ */}

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-[#D4AF37]/20 bg-white/[0.03] p-7 md:p-9">
              {/* Header */}
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                    Secure Checkout
                  </p>

                  <h2 className="mt-3 font-bold tracking-tight text-3xl text-white">
                    Payment
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-white/50">
                    Choose a payment method to continue.
                  </p>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Lock className="h-5 w-5" />
                </div>
              </div>

              {/* ======================================================== */}
              {/* PAYMENT METHODS                                            */}
              {/* ======================================================== */}

              <div className="mt-8 space-y-3">
                <PaymentMethod
                  active={paymentMethod === "upi"}
                  icon={<Smartphone className="h-5 w-5" />}
                  title="UPI"
                  description="Pay using your preferred UPI application."
                  onClick={() => setPaymentMethod("upi")}
                />

                <PaymentMethod
                  active={paymentMethod === "card"}
                  icon={<CreditCard className="h-5 w-5" />}
                  title="Credit / Debit Card"
                  description="Use a supported credit or debit card."
                  onClick={() => setPaymentMethod("card")}
                />

                <PaymentMethod
                  active={paymentMethod === "netbanking"}
                  icon={<WalletCards className="h-5 w-5" />}
                  title="Net Banking"
                  description="Continue using your bank's online payment service."
                  onClick={() => setPaymentMethod("netbanking")}
                />
              </div>

              {/* ======================================================== */}
              {/* SELECTED METHOD                                            */}
              {/* ======================================================== */}

              <div className="mt-7 rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                  Selected Method
                </p>

                <p className="mt-2 text-base font-medium text-white">
                  {paymentMethod === "upi"
                    ? "UPI Payment"
                    : paymentMethod === "card"
                      ? "Credit / Debit Card"
                      : "Net Banking"}
                </p>

                <p className="mt-2 text-sm leading-6 text-white/45">
                  This is a frontend payment interface. No real payment gateway
                  is connected.
                </p>
              </div>

              {/* ======================================================== */}
              {/* AGREEMENT                                                  */}
              {/* ======================================================== */}

              <label className="mt-7 flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(event) => setAgreed(event.target.checked)}
                  className="mt-1 h-4 w-4 accent-[#D4AF37]"
                />

                <span className="text-sm leading-6 text-white/55">
                  I have reviewed the applicable membership information, terms
                  and refund/cancellation conditions and understand that
                  membership does not guarantee casting selection or work.
                </span>
              </label>

              {/* ======================================================== */}
              {/* PAYMENT BUTTON                                             */}
              {/* ======================================================== */}

              <Button
                type="button"
                onClick={handlePayment}
                disabled={!agreed || processing}
                className="mt-8 w-full justify-center"
              >
                {processing ? "Processing..." : "Continue to Payment"}

                {!processing && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>

              {!agreed && (
                <p className="mt-3 text-center text-xs text-white/35">
                  Please accept the acknowledgement above to continue.
                </p>
              )}

              {/* ======================================================== */}
              {/* SECURITY                                                   */}
              {/* ======================================================== */}

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/10 pt-6">
                <SecurityItem text="Secure Interface" />

                <SecurityItem text="Frontend Demo" />

                <SecurityItem text="No Payment Data Stored" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* ============================================================ */}
        {/* BACK BUTTON                                                   */}
        {/* ============================================================ */}

        <div className="mt-8">
          <button
            type="button"
            onClick={() => router.push("/register/step-2-profile/")}
            className="inline-flex items-center gap-2 text-sm font-medium text-white/45 transition-colors hover:text-[#D4AF37]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Artist Profile
          </button>
        </div>
      </section>
    </main>
  );
}

/* ======================================================================== */
/* SUMMARY ITEM                                                             */
/* ======================================================================== */

function SummaryItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D4AF37]/10 text-[#D4AF37]">
        {icon}
      </div>

      <span className="text-sm text-white/60">{label}</span>
    </div>
  );
}

/* ======================================================================== */
/* PAYMENT METHOD                                                           */
/* ======================================================================== */

function PaymentMethod({
  active,
  icon,
  title,
  description,
  onClick,
}: {
  active: boolean;
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ${
        active
          ? "border-[#D4AF37]/50 bg-[#D4AF37]/[0.07]"
          : "border-white/10 bg-white/[0.02] hover:border-white/20"
      }`}
    >
      {/* Icon */}
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
          active ? "bg-[#D4AF37]/15 text-[#D4AF37]" : "bg-white/5 text-white/50"
        }`}
      >
        {icon}
      </div>

      {/* Text */}
      <div className="min-w-0 flex-1">
        <h3 className="font-medium text-white">{title}</h3>

        <p className="mt-1 text-xs leading-5 text-white/40">{description}</p>
      </div>

      {/* Radio */}
      <div
        className={`h-5 w-5 shrink-0 rounded-full border ${
          active ? "border-[#D4AF37] bg-[#D4AF37]" : "border-white/20"
        }`}
      >
        {active && <div className="m-1 h-2.5 w-2.5 rounded-full bg-black" />}
      </div>
    </button>
  );
}

/* ======================================================================== */
/* SECURITY ITEM                                                            */
/* ======================================================================== */

function SecurityItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-xs text-white/35">
      <ShieldCheck className="h-4 w-4 text-[#D4AF37]/70" />

      {text}
    </div>
  );
}
