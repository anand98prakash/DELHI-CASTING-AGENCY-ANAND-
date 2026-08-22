"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Check, ShieldCheck, Sparkles } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { RegistrationForm } from "@/components/sections/registration-form";
import { SuccessModal } from "@/components/success-modal";
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
  const [memberId, setMemberId] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const openRegistration = () => {
    setOpen(true);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        formRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  };

  useEffect(() => {
    const openRegistrationEvent = () => {
      openRegistration();
    };

    window.addEventListener("open-registration", openRegistrationEvent);

    return () => {
      window.removeEventListener("open-registration", openRegistrationEvent);
    };
  }, []);

  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-b border-[#E2DDD3] bg-[#F5F2EA] py-20 sm:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A059]/40 bg-[#EFECE4] px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6A50]">
              <Sparkles size={14} className="text-[#C5A059]" />
              Premium Membership
            </div>

            <h2 className="mt-5 font-serif text-3xl font-extrabold tracking-tight text-[#171717] sm:text-4xl md:text-5xl lg:text-6xl">
              One Membership. <br />
              <span className="italic font-normal text-[#C5A059]">
                Lifetime Access.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base font-normal leading-relaxed text-[#171717]/70">
              Join our premium membership with a one-time payment and receive
              verified casting opportunities across Bollywood, OTT platforms,
              television, fashion and commercial productions.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative mx-auto mt-16 max-w-xl overflow-hidden rounded-xl border border-[#E2DDD3] bg-[#EFECE4] p-8 shadow-xl sm:p-10">
            <div className="relative z-10 text-center">
              <h3 className="font-serif text-3xl font-bold tracking-tight text-[#171717]">
                Premium Membership
              </h3>

              <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                Lifetime Premium Access
              </p>

              <div className="mt-8">
                <div className="flex items-end justify-center gap-1">
                  <span className="mb-2 text-2xl font-bold text-[#C5A059]">₹</span>
                  <span className="font-serif text-6xl font-extrabold leading-none text-[#171717] sm:text-7xl">
                    {SITE.price.toLocaleString()}
                  </span>
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#171717]/60">
                  One-Time Payment • No Renewal Charges
                </p>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-[#E2DDD3] bg-[#F5F2EA] px-4 py-2 text-xs font-semibold text-[#171717]">
                  <ShieldCheck size={15} className="text-[#C5A059]" />
                  Secure Payment
                </div>
                <div className="flex items-center gap-2 rounded-full border border-[#E2DDD3] bg-[#F5F2EA] px-4 py-2 text-xs font-semibold text-[#171717]">
                  <BadgeCheck size={15} className="text-[#C5A059]" />
                  Lifetime Access
                </div>
              </div>

              <div className="mt-10 space-y-3">
                {PERKS.map((perk) => (
                  <div
                    key={perk}
                    className="flex items-center gap-3 rounded-lg border border-[#E2DDD3] bg-[#F5F2EA] px-5 py-3.5 text-left text-xs font-semibold text-[#171717]"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C5A059]/20">
                      <Check size={14} className="text-[#C5A059]" />
                    </div>
                    <span>{perk}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <button
                  type="button"
                  onClick={openRegistration}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#171717] py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#F5F2EA] transition duration-300 hover:bg-[#C5A059] hover:text-[#171717]"
                >
                  Become a Premium Member
                  <ArrowRight size={16} />
                </button>
                <p className="mt-4 text-xs text-[#171717]/60">
                  One payment. Lifetime access. No monthly subscription or renewal fees.
                </p>
              </div>

              <div className="mt-8 rounded-lg border border-[#E2DDD3] bg-[#F5F2EA] p-4 text-left">
                <p className="text-xs leading-relaxed text-[#171717]/65">
                  Membership provides access to verified casting opportunities and related services. It does <strong>not</strong> guarantee selection, employment, auditions or roles. Final selection is based on production requirements and audition performance.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Registration Drawer Container */}
        <motion.div
          id="registration"
          ref={formRef}
          initial={false}
          animate={{
            opacity: open ? 1 : 0,
            height: open ? "auto" : 0,
            marginTop: open ? 64 : 0,
          }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden"
        >
          <Reveal>
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A059]/40 bg-[#EFECE4] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6A50]">
                <Sparkles size={14} className="text-[#C5A059]" />
                Registration Form
              </div>
              <h3 className="mt-4 font-serif text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">
                Complete Your Registration
              </h3>
              <p className="mt-2 text-xs text-[#171717]/70">
                You&apos;re just one step away from becoming a verified member.
              </p>
            </div>
          </Reveal>

          <div className="rounded-xl border border-[#E2DDD3] bg-[#EFECE4] p-6 shadow-lg sm:p-10">
            <RegistrationForm onSuccess={(id) => setMemberId(id)} />
          </div>
        </motion.div>
      </div>

      <SuccessModal memberId={memberId} onClose={() => setMemberId(null)} />
    </section>
  );
}
