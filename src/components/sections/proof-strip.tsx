"use client";

import { ShieldCheck, Sparkles } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";
import { STATS } from "@/lib/constants";

const MARQUEE_ITEMS = [
  "🎬 VERIFIED CASTING OPPORTUNITIES",
  "⭐ LIFETIME PREMIUM MEMBERSHIP",
  "📱 DAILY WHATSAPP UPDATES",
  "🎥 BOLLYWOOD • OTT • TV • ADS",
  "🔒 100% SECURE ONLINE PAYMENT",
];

export function ProofStrip() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section className="relative overflow-hidden border-y border-[#E2DDD3] bg-[#EFECE4]">
      {/* Top Marquee */}
      <div className="relative overflow-hidden border-b border-[#E2DDD3] py-3.5 bg-[#F5F2EA]">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 whitespace-nowrap border-r border-[#E2DDD3] px-8"
            >
              <Sparkles size={13} className="text-[#C5A059]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#171717]/70">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <Reveal>
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A059]/30 bg-[#F5F2EA] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6A50]">
              <ShieldCheck size={15} className="text-[#C5A059]" />
              Trusted Across India
            </div>

            <h2 className="mt-5 font-serif text-3xl font-extrabold tracking-tight text-[#171717] sm:text-4xl md:text-5xl">
              Thousands of Artists <br />
              <span className="italic font-normal text-[#C5A059]">
                Trust Delhi Casting Agency
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm font-normal leading-relaxed text-[#171717]/70 sm:text-base">
              Join one of India&apos;s growing communities of aspiring actors,
              models and performers receiving verified casting opportunities.
            </p>
          </div>

          <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-6">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group flex min-h-[160px] flex-col items-center justify-center rounded-xl border border-[#E2DDD3] bg-[#F5F2EA] px-6 py-8 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A059] hover:shadow-md"
              >
                <Counter target={stat.target} label={stat.label} />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}