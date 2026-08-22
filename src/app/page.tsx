import { Hero } from "@/components/sections/hero";
import { TalentStrip } from "@/components/home/TalentStrip";
import { ProofStrip } from "@/components/sections/proof-strip";
import { BrandMarquee } from "@/components/sections/brand-marquee";
import { WhatYouGet } from "@/components/sections/what-you-get";
import { StatsBar } from "@/components/home/StatsBar";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { AboutDCA } from "@/components/home/AboutDCA";
import { VisualBreather } from "@/components/home/VisualBreather";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { Closing } from "@/components/sections/closing";
import { StickyCta } from "@/components/sticky-cta";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-[#F5F2EA] text-[#171717] pb-16 md:pb-0">
        <Hero />
        <TalentStrip />
        <ProofStrip />
        <BrandMarquee />
        <WhatYouGet />
        <StatsBar />
        <FeaturedWork />
        <AboutDCA />
        <VisualBreather />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Closing />
      </main>
      <StickyCta />
    </>
  );
}
