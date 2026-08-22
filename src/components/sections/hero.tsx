"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Star } from "lucide-react";
import { SITE } from "@/lib/constants";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const triggerRegistration = () => {
    window.dispatchEvent(new CustomEvent("open-registration"));
  };

  return (
    <section
      id="top"
      className="relative min-h-[92vh] overflow-hidden border-b border-[#E2DDD3] bg-[#F5F2EA] pt-24 pb-16 lg:pt-32 lg:pb-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* LEFT CONTENT - 6 COLUMNS */}
          <div
            className={`transition-all duration-1000 lg:col-span-6 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C5A059]/40 bg-[#EFECE4] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6A50]">
              <Sparkles className="h-3.5 w-3.5 text-[#C5A059]" />
              <span>Verified Indian Talent & Casting</span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl font-extrabold leading-[1.08] tracking-tight text-[#171717] sm:text-5xl md:text-6xl lg:text-7xl">
              Your Story <br />
              <span className="italic font-normal text-[#C5A059]">
                Could Start Here.
              </span>
            </h1>

            {/* Tagline */}
            <p className="mt-6 max-w-lg text-base font-normal leading-relaxed text-[#171717]/75 sm:text-lg">
              {SITE.tagline || "Verified casting opportunities for Bollywood, OTT series, TV commercials, and high-fashion brand campaigns across India."}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={triggerRegistration}
                className="group inline-flex items-center gap-3 rounded-full bg-[#171717] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#F5F2EA] transition duration-300 hover:bg-[#C5A059] hover:text-[#171717] hover:shadow-xl"
              >
                Become Premium Member
                <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
              </button>

              <Link
                href="/actors"
                className="inline-flex items-center gap-2 rounded-full border border-[#171717]/20 bg-transparent px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#171717] transition duration-300 hover:border-[#171717] hover:bg-[#EFECE4]"
              >
                Explore Talent
              </Link>
            </div>

            {/* Trust Points */}
            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-[#E2DDD3] pt-6 text-xs font-medium text-[#171717]/70">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#C5A059]" />
                <span>Verified Audition Calls</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-[#C5A059]" />
                <span>500+ Indian Artists</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#171717]">₹3,999</span>
                <span>Lifetime Membership</span>
              </div>
            </div>
          </div>

          {/* RIGHT EDITORIAL CAMPAIGN PHOTOGRAPHY - 6 COLUMNS */}
          <div
            className={`transition-all duration-1000 delay-200 lg:col-span-6 ${
              mounted
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            <div className="relative mx-auto aspect-4/5 w-full max-w-lg overflow-hidden rounded-2xl border border-[#E2DDD3] bg-[#EFECE4] shadow-2xl">
              <Image
                src="/media/dca/about/dca-about-hero-01.jpg"
                alt="Delhi Casting Agency Editorial Indian Talent Campaign"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 via-transparent to-transparent" />

              {/* Editorial Caption */}
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A059]">
                  Editorial Showcase
                </p>
                <p className="mt-1 font-serif text-2xl font-bold tracking-tight text-[#F5F2EA]">
                  Representing Modern Indian Cinema & Fashion
                </p>
                <p className="mt-2 text-xs leading-relaxed text-[#F5F2EA]/75">
                  Direct connection with verified production houses across Delhi, Mumbai & India.
                </p>
              </div>

              {/* Floating Stat Pill */}
              <div className="absolute top-6 right-6 rounded-xl border border-white/20 bg-[#171717]/85 px-4 py-3 text-white backdrop-blur-md shadow-lg">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                  Active Auditions
                </p>
                <p className="font-serif text-xl font-bold text-[#F5F2EA]">120+ Open</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}