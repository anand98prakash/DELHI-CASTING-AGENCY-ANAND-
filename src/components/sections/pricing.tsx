"use client";

// import { useState } from "react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { RegistrationForm } from "@/components/sections/registration-form";
import { SuccessModal } from "@/components/success-modal";
import { PremiumFlowModal, PremiumModalStep } from "@/components/premium-flow-modal";
import { getUserSession, isUserAuthenticated } from "@/lib/auth";
import { SITE } from "@/lib/constants";

const PERKS = [
  "Lifetime Premium Membership",
  "Verified Casting Opportunities",
  "Priority Daily WhatsApp Updates",
  "Bollywood, OTT & TV Projects",
  "No Monthly Charges",
  "Secure One-Time Payment",
];

export function Pricing() {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInitialStep, setModalInitialStep] = useState<PremiumModalStep | undefined>(undefined);
  const [isRegistrationFlow, setIsRegistrationFlow] = useState(false);
  const [memberId, setMemberId] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const handleBecomePremium = () => {
    setIsRegistrationFlow(false);
    if (!isUserAuthenticated()) {
      setModalInitialStep("role_select");
    } else {
      const session = getUserSession();
      if (session?.role === "brand") {
        setModalInitialStep("brand_checkout");
      } else if (session?.role === "artist") {
        setModalInitialStep("artist_checkout");
      } else {
        setModalInitialStep("role_select");
      }
    }
    setModalOpen(true);
  };

  const handleOpenRegistration = () => {
    setIsRegistrationFlow(true);
    setModalInitialStep("role_select");
    setModalOpen(true);
  };

  useEffect(() => {
    const openRegistrationHandler = () => {
      handleOpenRegistration();
    };

    const openPremiumHandler = () => {
      handleBecomePremium();
    };

    window.addEventListener("open-registration", openRegistrationHandler);
    window.addEventListener("open-premium-modal", openPremiumHandler);

    return () => {
      window.removeEventListener("open-registration", openRegistrationHandler);
      window.removeEventListener("open-premium-modal", openPremiumHandler);
    };
  }, []);

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#F7F7F5] py-28 md:py-32 border-b border-gray-200"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-medium text-[#D4AF37]">
              <Sparkles size={15} />
              Premium Membership
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-[#111111] md:text-6xl">
              One Membership.
              <span className="block text-[#D4AF37]">Lifetime Access.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#444444]">
              Join our premium membership with a one-time payment and receive
              verified casting opportunities across Bollywood, OTT platforms,
              television, fashion and commercial productions.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <motion.div
            whileHover={{
              y: -6,
              scale: 1.01,
            }}
            transition={{ duration: 0.35 }}
            className="relative mx-auto mt-20 max-w-xl overflow-hidden rounded-[34px] border border-gray-200 bg-white p-8 md:p-10 shadow-lg backdrop-blur-xl"
          >
            {/* Premium Glow */}
            <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

            <div className="relative z-10 text-center">
              {/* Title */}
              <h3 className="text-3xl font-bold text-[#111111] md:text-4xl">
                Premium Membership
              </h3>

              <p className="mt-3 text-base text-[#555555]">
                Lifetime Premium Access
              </p>

              {/* Price */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-10"
              >
                <div className="flex items-end justify-center gap-1">
                  <span className="mb-2 text-2xl font-bold text-[#D4AF37]">
                    ₹
                  </span>

                  <span className="text-6xl font-extrabold leading-none text-[#D4AF37] md:text-7xl">
                    {SITE.price.toLocaleString()}
                  </span>
                </div>

                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#777777]">
                  One-Time Payment
                </p>

                <p className="mt-2 text-sm font-medium text-[#D4AF37]">
                  Lifetime Access • No Renewal Charges
                </p>
              </motion.div>

              {/* Trust Chips */}
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-[#F7F7F5] px-4 py-2 text-sm font-medium text-[#333333] shadow-xs">
                  <ShieldCheck size={16} className="text-[#D4AF37]" />
                  Secure Payment
                </div>

                <div className="flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-2 text-sm font-medium text-[#D4AF37] shadow-xs">
                  <BadgeCheck size={16} className="text-[#D4AF37]" />
                  Lifetime Access
                </div>
              </div>

              {/* Membership Benefits */}
              <div className="mt-12 space-y-4">
                {PERKS.map((perk, index) => (
                  <motion.div
                    key={perk}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.45,
                    }}
                    className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-[#F7F7F5] px-5 py-4 transition-all duration-300 hover:border-[#D4AF37]/50 hover:bg-white"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D4AF37]/10 transition-transform duration-300 group-hover:scale-110">
                      <Check size={18} className="text-[#D4AF37]" />
                    </div>

                    <span className="text-base font-medium text-[#222222]">{perk}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-10"
              >
                <Button size="block" onClick={handleBecomePremium}>
                  Become Premium
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="mt-5 text-sm leading-7 text-[#555555]">
                  One payment. Lifetime access. No monthly subscription or
                  renewal fees.
                </p>
              </motion.div>

              {/* Disclaimer */}
              <div className="mt-8 rounded-2xl border border-[#D4AF37]/25 bg-[#F7F7F5] p-5">
                <p className="text-sm leading-7 text-[#444444]">
                  Membership provides access to verified casting opportunities
                  and related services. It does <strong>not</strong> guarantee
                  selection, employment, auditions or roles. Final selection is
                  based on the production team&apos;s requirements and audition
                  performance.
                </p>
              </div>
            </div>
          </motion.div>
        </Reveal>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 rounded-3xl border border-gray-200 bg-[#F7F7F5] p-8 text-center shadow-md"
        >
          <h3 className="text-3xl font-bold text-[#111111]">
            Start Your <span className="text-[#D4AF37]">Bollywood Journey</span>
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#444444]">
            Join thousands of aspiring actors and models who have already become
            members of{" "}
            <span className="text-[#D4AF37] font-semibold">
              Delhi Casting Agency
            </span>
            . Take the next step toward your dream with verified casting
            opportunities.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-[#333333]">
              🔒 Secure One-Time Payment
            </span>

            <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-2 text-sm font-medium text-[#D4AF37]">
              ⭐ Lifetime Membership
            </span>
          </div>

          <Button
            size="block"
            onClick={handleBecomePremium}
            className="mx-auto mt-8 max-w-md"
          >
            Become Premium
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <p className="mt-5 text-sm text-[#555555]">
            One-Time Payment of{" "}
            <span className="font-semibold text-[#D4AF37]">
              ₹{SITE.price.toLocaleString()}
            </span>{" "}
            • Lifetime Access • No Renewal Charges
          </p>
        </motion.div>

        {/* Registration */}
        <motion.div
          id="registration"
          ref={formRef}
          initial={false}
          animate={{
            opacity: open ? 1 : 0,
            height: open ? "auto" : 0,
            marginTop: open ? 96 : 0,
          }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden"
        >
          <Reveal>
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-medium text-[#D4AF37]">
                <Sparkles size={15} />
                Registration
              </div>

              <h3 className="mt-6 text-4xl font-bold leading-tight text-[#111111] md:text-5xl">
                Complete Your Registration
              </h3>

              <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#444444]">
                You&apos;re just one step away from becoming a premium member.
              </p>
            </div>
          </Reveal>

          <motion.div className="rounded-3xl border border-gray-200 bg-white p-4 md:p-8 shadow-md">
            <RegistrationForm onSuccess={(id) => setMemberId(id)} />
          </motion.div>
        </motion.div>
      </div>

      <SuccessModal memberId={memberId} onClose={() => setMemberId(null)} />
      <PremiumFlowModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialStep={modalInitialStep}
        isRegistrationFlow={isRegistrationFlow}
      />
    </section>
  );
}
