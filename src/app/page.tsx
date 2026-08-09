import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ProofStrip } from "@/components/sections/proof-strip";
import { WhatYouGet } from "@/components/sections/what-you-get";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { Closing } from "@/components/sections/closing";
import { StickyCta } from "@/components/sticky-cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0">
        <Hero />
        <ProofStrip />
        <WhatYouGet />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Closing />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
