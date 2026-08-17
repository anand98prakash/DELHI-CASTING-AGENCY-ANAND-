"use client";

import { useRouter } from "next/navigation";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CreditCard,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export default function PaymentFailedPage() {
  const router = useRouter();

  /*
   * Frontend-only failed payment state.
   *
   * No backend
   * No API
   * No Razorpay
   * No real payment verification
   *
   * This page is a UI state that allows the user
   * to return to the payment screen and retry.
   */

  const handleRetry = () => {
    router.push("/payment/");
  };

  return (
    <main>
      {/* ================================================================ */}
      {/* PAGE HERO                                                        */}
      {/* ================================================================ */}

      <PageHero
        eyebrow="Payment Status"
        title="Payment Could Not Be Completed"
        description="Something prevented the payment flow from being completed. You can review your payment details and try again."
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
              label: "Payment",
              href: "/payment/",
            },
            {
              label: "Failed",
            },
          ]}
        />
      </div>

      {/* ================================================================ */}
      {/* FAILED PAYMENT CONTENT                                           */}
      {/* ================================================================ */}

      <section className="mx-auto max-w-4xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-7 text-center md:p-12">
            {/* ========================================================== */}
            {/* ERROR ICON                                                   */}
            {/* ========================================================== */}

            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-red-400/20 bg-red-400/10">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-400/10 text-red-400">
                <AlertCircle className="h-9 w-9" />
              </div>
            </div>

            {/* ========================================================== */}
            {/* STATUS                                                       */}
            {/* ========================================================== */}

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
              Payment Failed
            </p>

            <h1 className="mx-auto mt-4 max-w-2xl font-display text-3xl text-white md:text-5xl">
              We couldn&apos;t complete your payment.
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/60">
              Your registration information has not been lost. You can return to
              the payment screen and try again.
            </p>

            {/* ========================================================== */}
            {/* FAILURE INFORMATION                                          */}
            {/* ========================================================== */}

            <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-white/10 bg-black/20 p-6 text-left">
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-[#D4AF37]" />

                <h2 className="font-semibold text-white">What You Can Do</h2>
              </div>

              <div className="mt-6 space-y-4">
                <FailureItem
                  number="01"
                  title="Review your payment method"
                  description="Check that the selected payment method is correct before trying again."
                />

                <FailureItem
                  number="02"
                  title="Try again"
                  description="Return to the payment screen and continue the frontend payment flow again."
                />

                <FailureItem
                  number="03"
                  title="Check your information"
                  description="Make sure your registration and profile information has been completed correctly."
                />
              </div>
            </div>

            {/* ========================================================== */}
            {/* FRONTEND NOTICE                                              */}
            {/* ========================================================== */}

            <div className="mx-auto mt-6 max-w-2xl rounded-2xl border border-[#D4AF37]/15 bg-[#D4AF37]/[0.04] p-5">
              <div className="flex items-start gap-3 text-left">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" />

                <p className="text-sm leading-7 text-white/50">
                  This is a frontend-only payment failure interface. No real
                  payment gateway or backend transaction verification is
                  connected.
                </p>
              </div>
            </div>

            {/* ========================================================== */}
            {/* ACTIONS                                                      */}
            {/* ========================================================== */}

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Button type="button" onClick={handleRetry} className="group">
                <RefreshCw className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                Try Payment Again
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>

              <Button
                type="button"
                variant="ghost"
                onClick={() => router.push("/register/step-2-profile/")}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Profile
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

/* ======================================================================== */
/* FAILURE ITEM                                                             */
/* ======================================================================== */

function FailureItem({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#D4AF37]/10 text-xs font-semibold text-[#D4AF37]">
        {number}
      </div>

      <div>
        <h3 className="font-medium text-white">{title}</h3>

        <p className="mt-1 text-sm leading-6 text-white/45">{description}</p>
      </div>
    </div>
  );
}
