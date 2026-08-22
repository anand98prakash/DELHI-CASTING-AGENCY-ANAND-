"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function VisualBreather() {
  return (
    <section className="relative isolate h-[55vh] min-h-[420px] w-full overflow-hidden border-b border-[#E2DDD3]">
      <Image
        src="/media/dca/about/dca-about-hero-01.jpg"
        alt="Delhi Casting Agency Editorial Banner"
        fill
        priority
        className="object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#171717]/85 via-[#171717]/60 to-[#171717]/85 backdrop-blur-[2px]" />

      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">
        <Reveal className="max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#C5A059]">
            Excellence in Talent Discovery
          </p>
          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#F5F2EA] sm:text-4xl md:text-5xl lg:text-6xl">
            Where Exceptional Indian Talent Meets Visionary Directors
          </h2>
          <div className="mt-8 flex justify-center">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 rounded-full border border-[#C5A059] bg-[#C5A059] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#171717] transition duration-300 hover:bg-[#F5F2EA] hover:border-[#F5F2EA]"
            >
              Start Audition Journey
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
