"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Loader2,
  ShieldCheck,
  Sparkles,
  UserCheck,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  getUserSession,
  isUserAuthenticated,
  setUserPremiumStatus,
  setUserRole,
} from "@/lib/auth";
import { launchRazorpayCheckout } from "@/lib/razorpay";

export type PremiumModalStep =
  | "role_select"
  | "artist_checkout"
  | "brand_checkout"
  | "artist_success"
  | "brand_success";

interface PremiumFlowModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialStep?: PremiumModalStep;
  isRegistrationFlow?: boolean;
}

export function PremiumFlowModal({
  isOpen,
  onClose,
  initialStep,
  isRegistrationFlow = false,
}: PremiumFlowModalProps) {
  const router = useRouter();
  const [step, setStep] = useState<PremiumModalStep>("role_select");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        setIsProcessing(false);

        const session = getUserSession();
        const authenticated =
          session?.isLoggedIn === true &&
          Boolean(session.identifier || session.email);

        // STRICT AUTHENTICATION GUARD: Never show payment or role select to logged-out users
        if (!authenticated) {
          onClose();
          router.push("/profile/setup");
          return;
        }

        if (session?.role === "brand") {
          setStep("brand_checkout");
        } else if (session?.role === "artist") {
          setStep("artist_checkout");
        } else {
          onClose();
          router.push("/profile/setup");
        }
      });
    }
  }, [isOpen, initialStep, isRegistrationFlow, onClose, router]);

  if (!isOpen) return null;

  const handleSelectRole = (selectedRole: "artist" | "brand") => {
    if (!isUserAuthenticated()) {
      onClose();
      if (selectedRole === "artist") {
        router.push("/profile/setup");
      } else {
        router.push("/register/brand");
      }
      return;
    }

    setUserRole(selectedRole);
    if (selectedRole === "artist") {
      setStep("artist_checkout");
    } else {
      setStep("brand_checkout");
    }
  };

  const handleArtistPayment = async () => {
    if (isProcessing) return;
    setIsProcessing(true);
    const session = getUserSession();
    try {
      await launchRazorpayCheckout({
        name: session?.identifier || session?.email || "Artist Member",
        email: session?.email || "artist@example.com",
        contact: session?.identifier || "9876543210",
        amount: 3999,
        description: "Lifetime Premium Artist Membership — ₹3,999",
        onSuccess: () => {
          setUserPremiumStatus(true);
          setUserRole("artist");
          setIsProcessing(false);
          setStep("artist_success");
        },
        onDismiss: () => {
          setIsProcessing(false);
        },
      });
    } catch {
      setIsProcessing(false);
    }
  };

  const handleBrandPayment = async () => {
    if (isProcessing) return;
    setIsProcessing(true);
    const session = getUserSession();
    try {
      await launchRazorpayCheckout({
        name: session?.identifier || session?.email || "Brand Casting Account",
        email: session?.email || "brand@example.com",
        contact: session?.identifier || "9876543210",
        amount: 9999,
        description: "Brand Premium Casting Account — ₹9,999",
        onSuccess: () => {
          setUserPremiumStatus(true);
          setUserRole("brand");
          setIsProcessing(false);
          setStep("brand_success");
        },
        onDismiss: () => {
          setIsProcessing(false);
        },
      });
    } catch {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md">
      <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl sm:p-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-gray-200 hover:text-black"
        >
          <X size={18} />
        </button>

        {/* =========================================================
            STEP 1: ROLE SELECTION SCREEN (LOGGED-OUT or UNKNOWN ROLE)
        ========================================================= */}
        {step === "role_select" && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                <Sparkles size={14} />
                <span>Delhi Casting Agency</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#111111] sm:text-3xl">
                Choose Your Account Type
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-[#555555] sm:text-sm">
                Please create an account first before purchasing Premium.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* ARTIST OPTION */}
              <div className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-[#F7F7F5] p-5 transition duration-300 hover:border-[#D4AF37] hover:bg-white shadow-xs">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-2xl text-[#D4AF37]">
                    🎭
                  </div>
                  <h3 className="mt-4 font-serif text-base font-bold text-[#111111]">
                    ARTIST
                  </h3>
                  <p className="mt-2 text-xs text-[#555555]">
                    Create and manage your artist profile
                  </p>
                  <div className="mt-3 inline-block rounded-full bg-[#D4AF37]/15 px-3 py-1 text-[11px] font-bold text-[#D4AF37]">
                    Free Artist Registration
                  </div>
                </div>

                <Button
                  type="button"
                  onClick={() => handleSelectRole("artist")}
                  className="mt-6 w-full py-3 text-xs font-bold uppercase tracking-wider"
                >
                  <span>REGISTER AS ARTIST</span>
                  <ArrowRight size={14} className="ml-1.5" />
                </Button>
              </div>

              {/* BRAND / CASTING PROFESSIONAL OPTION */}
              <div className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-[#F7F7F5] p-5 transition duration-300 hover:border-[#D4AF37] hover:bg-white shadow-xs">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-2xl text-[#D4AF37]">
                    🏢
                  </div>
                  <h3 className="mt-4 font-serif text-base font-bold text-[#111111]">
                    BRAND / CASTING PROFESSIONAL
                  </h3>
                  <p className="mt-2 text-xs text-[#555555]">
                    Find talent and manage casting requirements
                  </p>
                  <div className="mt-3 inline-block rounded-full bg-gray-200 px-3 py-1 text-[11px] font-bold text-[#333333]">
                    Brand Account • ₹9,999
                  </div>
                </div>

                <Button
                  type="button"
                  onClick={() => handleSelectRole("brand")}
                  className="mt-6 w-full py-3 text-xs font-bold uppercase tracking-wider"
                >
                  <span>REGISTER AS BRAND</span>
                  <ArrowRight size={14} className="ml-1.5" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================
            ARTIST CHECKOUT (₹3,999)
        ========================================================= */}
        {step === "artist_checkout" && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="mx-auto mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                <UserCheck size={14} />
                <span>Artist Premium Plan</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#111111] sm:text-3xl">
                Premium Artist Membership
              </h2>
              <div className="mt-4 flex items-end justify-center gap-1">
                <span className="mb-1 text-xl font-bold text-[#D4AF37]">₹</span>
                <span className="text-5xl font-extrabold text-[#D4AF37]">
                  3,999
                </span>
              </div>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-gray-500">
                One-time payment • Lifetime Access
              </p>
            </div>

            <div className="space-y-2.5 rounded-2xl border border-gray-200 bg-[#F7F7F5] p-5 text-xs text-[#333333]">
              {[
                "Lifetime Premium Membership",
                "Verified Casting Opportunities",
                "Priority Casting Visibility",
                "Bollywood, OTT & TV Projects",
                "Premium Artist Profile",
                "No Monthly Renewal Charges",
              ].map((perk) => (
                <div key={perk} className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="shrink-0 text-[#D4AF37]" />
                  <span className="font-medium">{perk}</span>
                </div>
              ))}
            </div>

            <Button
              type="button"
              disabled={isProcessing}
              onClick={handleArtistPayment}
              className="w-full py-4 text-xs font-bold uppercase tracking-wider"
            >
              {isProcessing ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Connecting to Payment Gateway...</span>
                </span>
              ) : (
                <>
                  <span>Proceed to Payment — ₹3,999</span>
                  <ArrowRight size={16} className="ml-2" />
                </>
              )}
            </Button>
          </div>
        )}

        {/* =========================================================
            BRAND CHECKOUT (₹9,999)
        ========================================================= */}
        {step === "brand_checkout" && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="mx-auto mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                <Building2 size={14} />
                <span>Brand &amp; Casting Plan</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#111111] sm:text-3xl">
                Premium Casting Account
              </h2>
              <div className="mt-4 flex items-end justify-center gap-1">
                <span className="mb-1 text-xl font-bold text-[#D4AF37]">₹</span>
                <span className="text-5xl font-extrabold text-[#D4AF37]">
                  9,999
                </span>
              </div>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-gray-500">
                One-time payment • Lifetime Access
              </p>
            </div>

            <div className="space-y-2.5 rounded-2xl border border-gray-200 bg-[#F7F7F5] p-5 text-xs text-[#333333]">
              {[
                "Lifetime Premium Casting Account",
                "Direct Access to Verified Talent Rosters",
                "Post Unlimited Casting Calls & Auditions",
                "Priority Talent Sourcing Support",
                "Advanced Applicant Filtering",
                "No Monthly Renewal Charges",
              ].map((perk) => (
                <div key={perk} className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="shrink-0 text-[#D4AF37]" />
                  <span className="font-medium">{perk}</span>
                </div>
              ))}
            </div>

            <Button
              type="button"
              disabled={isProcessing}
              onClick={handleBrandPayment}
              className="w-full py-4 text-xs font-bold uppercase tracking-wider"
            >
              {isProcessing ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Connecting to Payment Gateway...</span>
                </span>
              ) : (
                <>
                  <span>Proceed to Payment — ₹9,999</span>
                  <ArrowRight size={16} className="ml-2" />
                </>
              )}
            </Button>
          </div>
        )}

        {/* =========================================================
            ARTIST SUCCESS SCREEN
        ========================================================= */}
        {step === "artist_success" && (
          <div className="space-y-6 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <ShieldCheck size={36} />
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-[#111111] sm:text-3xl">
                You&apos;re now a Premium Artist
              </h2>
              <p className="mt-2 text-xs text-[#555555]">
                Your lifetime premium membership has been activated successfully.
              </p>
            </div>

            <div className="mx-auto max-w-sm space-y-3 rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4 text-left text-xs font-semibold text-emerald-900">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>Premium membership activated</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>Premium Artist profile enabled</span>
              </div>
            </div>

            <Button
              type="button"
              onClick={() => {
                onClose();
                router.push("/dashboard");
              }}
              className="w-full py-4 text-xs font-bold uppercase tracking-wider"
            >
              <span>Go to Artist Dashboard</span>
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        )}

        {/* =========================================================
            BRAND SUCCESS SCREEN
        ========================================================= */}
        {step === "brand_success" && (
          <div className="space-y-6 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <ShieldCheck size={36} />
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-[#111111] sm:text-3xl">
                You&apos;re now a Premium Casting Account
              </h2>
              <p className="mt-2 text-xs text-[#555555]">
                Your premium casting features have been activated successfully.
              </p>
            </div>

            <div className="mx-auto max-w-sm space-y-3 rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4 text-left text-xs font-semibold text-emerald-900">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>Premium membership activated</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>Premium casting features enabled</span>
              </div>
            </div>

            <Button
              type="button"
              onClick={() => {
                onClose();
                router.push("/dashboard");
              }}
              className="w-full py-4 text-xs font-bold uppercase tracking-wider"
            >
              <span>Go to Dashboard</span>
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
