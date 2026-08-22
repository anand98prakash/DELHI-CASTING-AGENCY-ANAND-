"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function AboutDCA() {
  return (
    <section className="border-b border-[#E2DDD3] bg-[#F5F2EA] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* TEXT - 5 COLUMNS */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
                Agency Legacy & Purpose
              </p>
              <h2 className="font-serif text-3xl font-extrabold leading-[1.15] tracking-tight text-[#171717] sm:text-4xl lg:text-5xl">
                Shaping the Next Era of Indian Casting
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#171717]/75">
                Delhi Casting Agency is an online-first casting platform serving aspiring actors, models, dancers, child artists, influencers, and voice talent across India.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#171717]/65">
                We bridge the gap between fresh, verified Indian performers and leading production houses, casting directors, advertising agencies, and streaming platforms.
              </p>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#C5A059]" />
                  <span className="text-sm font-semibold text-[#171717]">100% Verified Casting Calls & Opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#C5A059]" />
                  <span className="text-sm font-semibold text-[#171717]">Dedicated Talent Portfolios & Digital Comp Cards</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#C5A059]" />
                  <span className="text-sm font-semibold text-[#171717]">Transparent Representation & Audition Guidance</span>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-2 rounded-full bg-[#171717] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#F5F2EA] transition duration-300 hover:bg-[#C5A059] hover:text-[#171717]"
                >
                  Discover DCA Story
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* IMAGE - 7 COLUMNS ASYMMETRIC */}
          <div className="lg:col-span-7">
            <div className="relative grid gap-4 sm:grid-cols-2">
              <div className="relative aspect-3/4 w-full overflow-hidden rounded-xl border border-[#E2DDD3] shadow-md">
                <Image
                  src="/media/dca/about/dca-about-hero-01.jpg"
                  alt="DCA Agency Studio Shoot"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="relative aspect-3/4 w-full overflow-hidden rounded-xl border border-[#E2DDD3] shadow-md sm:translate-y-8">
                <Image
                  src="/media/dca/about/dca-about-studio-01.jpg"
                  alt="DCA Acting & Audition Studio"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
