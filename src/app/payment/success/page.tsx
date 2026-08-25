"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Check, CheckCircle2, ShieldCheck } from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export default function PaymentSuccessPage() {
  const router = useRouter();

  /*
   * Frontend-only payment status check.
   *
   * No backend.
   * No API.
   * No Razorpay.
   *
   * If the user opens this page directly without completing
   * the simulated payment flow, redirect them back to payment.
   *
   * IMPORTANT:
   * There is no setState() inside this effect, so the React
   * cascading-render warning is avoided.
   */
  useEffect(() => {
    const paymentStatus = sessionStorage.getItem("payment-status");

    if (paymentStatus !== "success") {
      router.replace("/payment/");
    }
  }, [router]);

  return (
    <main className="bg-white min-h-screen text-[#111111]">
      {/* ================================================================ */}
      {/* PAGE HERO                                                        */}
      {/* ================================================================ */}

      <PageHero
        eyebrow="Payment Confirmation"
        title="Registration Completed"
        description="Your frontend registration flow has been completed successfully."
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
              href: "/profile/setup",
            },
            {
              label: "Payment",
              href: "/payment/",
            },
            {
              label: "Success",
            },
          ]}
        />
      </div>

      {/* ================================================================ */}
      {/* SUCCESS SECTION                                                   */}
      {/* ================================================================ */}

      <section className="mx-auto max-w-4xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="overflow-hidden rounded-[32px] border border-gray-200 bg-[#F7F7F5] p-7 text-center md:p-12 shadow-xs">
            {/* ========================================================== */}
            {/* SUCCESS ICON                                                 */}
            {/* ========================================================== */}

            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37] text-white">
                <Check className="h-8 w-8" />
              </div>
            </div>

            {/* ========================================================== */}
            {/* STATUS                                                       */}
            {/* ========================================================== */}

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Payment Successful
            </p>

            <h1 className="mx-auto mt-4 max-w-2xl font-bold tracking-tight text-3xl text-[#111111] md:text-5xl">
              Your registration journey is complete.
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#444444]">
              Your registration information has been saved for this frontend
              demonstration flow. Continue to the community access page for the
              next step.
            </p>

            {/* ========================================================== */}
            {/* CONFIRMATION CARD                                            */}
            {/* ========================================================== */}

            <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-2xs">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#D4AF37]" />

                <h2 className="font-semibold text-[#111111]">
                  Registration Confirmation
                </h2>
              </div>

              <div className="mt-5 space-y-4">
                <ConfirmationItem
                  label="Artist Registration"
                  value="Completed"
                />

                <ConfirmationItem label="Artist Profile" value="Completed" />

                <ConfirmationItem label="Payment Flow" value="Successful" />

                <ConfirmationItem label="Next Step" value="Community Access" />
              </div>
            </div>

            {/* ========================================================== */}
            {/* IMPORTANT NOTICE                                             */}
            {/* ========================================================== */}

            <div className="mx-auto mt-6 max-w-2xl rounded-2xl border border-[#D4AF37]/30 bg-white p-5 shadow-2xs">
              <div className="flex items-start gap-3 text-left">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" />

                <p className="text-sm leading-7 text-[#444444]">
                  This is a frontend-only payment confirmation interface. No
                  real payment gateway or backend payment verification is
                  connected.
                </p>
              </div>
            </div>

            {/* ========================================================== */}
            {/* COMMUNITY ACCESS BUTTON                                      */}
            {/* ========================================================== */}

            <div className="mt-10 flex justify-center">
              <Button
                type="button"
                onClick={() => router.push("/community-access/")}
                className="group bg-[#D4AF37] text-white hover:bg-[#c59b27]"
              >
                Continue to Community Access
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

/* ======================================================================== */
/* CONFIRMATION ITEM                                                        */
/* ======================================================================== */

function ConfirmationItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-5 border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
      <span className="text-sm text-[#444444]">{label}</span>

      <span className="text-sm font-medium text-[#D4AF37]">{value}</span>
    </div>
  );
}
