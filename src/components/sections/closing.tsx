"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { SITE } from "@/lib/constants";

export function Closing() {
  const triggerRegistration = () => {
    window.dispatchEvent(new CustomEvent("open-registration"));
  };

  return (
    <section className="relative overflow-hidden border-b border-[#E2DDD3] bg-[#EFECE4] py-20 sm:py-28">
      <Reveal>
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="overflow-hidden rounded-xl border border-[#E2DDD3] bg-[#F5F2EA] p-8 text-center shadow-xl sm:p-14">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#C5A059]/40 bg-[#EFECE4] px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6A50]">
              <Sparkles size={14} className="text-[#C5A059]" />
              Premium Membership
            </div>

            <h2 className="mt-6 font-serif text-3xl font-extrabold tracking-tight text-[#171717] sm:text-4xl md:text-5xl lg:text-6xl">
              Start Your <br />
              <span className="italic font-normal text-[#C5A059]">
                Bollywood & Casting Journey
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base font-normal leading-relaxed text-[#171717]/75">
              Join thousands of aspiring actors and models who have already
              become members of {SITE.agency}. Take the next step toward your
              dream with verified casting opportunities.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 rounded-full border border-[#E2DDD3] bg-[#EFECE4] px-5 py-2.5 text-xs font-semibold text-[#171717]">
                <ShieldCheck size={16} className="text-[#C5A059]" />
                Secure One-Time Payment
              </div>

              <div className="flex items-center gap-2 rounded-full border border-[#E2DDD3] bg-[#EFECE4] px-5 py-2.5 text-xs font-semibold text-[#171717]">
                ⭐ Lifetime Membership
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={triggerRegistration}
                className="group inline-flex items-center gap-3 rounded-full bg-[#171717] px-9 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#F5F2EA] transition duration-300 hover:bg-[#C5A059] hover:text-[#171717] hover:shadow-xl"
              >
                Become a Premium Member
                <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            <p className="mt-4 text-xs text-[#171717]/60">
              One-Time Payment of{" "}
              <span className="font-bold text-[#171717]">
                ₹{SITE.price.toLocaleString()}
              </span>{" "}
              • Lifetime Access • No Renewal Charges
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}