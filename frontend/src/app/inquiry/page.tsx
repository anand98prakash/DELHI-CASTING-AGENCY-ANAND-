import React, { Suspense } from "react";
import type { Metadata } from "next";
import { InquiryFormView } from "@/components/inquiry/InquiryFormView";

export const metadata: Metadata = {
  title: "Inquire & Cast Talent | Delhi Casting Agency (DCA)",
  description:
    "Official casting inquiry and booking portal for brands, production houses, and directors to hire verified Bollywood actors, models, child artists, dancers, influencers, and voice artists.",
  alternates: {
    canonical: "https://delhicastingagency.com/inquiry",
  },
  openGraph: {
    title: "Inquire & Cast Talent | Delhi Casting Agency (DCA)",
    description:
      "Direct talent casting, availability verification, and booking coordination for films, OTT series, TV commercials, and brand campaigns.",
    url: "https://delhicastingagency.com/inquiry",
    type: "website",
    siteName: "Delhi Casting Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inquire & Cast Talent | Delhi Casting Agency (DCA)",
    description:
      "Direct talent booking and casting coordination for verified Bollywood actors, models, dancers, influencers, and voice talents.",
  },
};

export default function InquiryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Inquire & Cast Talent | Delhi Casting Agency",
    description:
      "Direct talent casting, availability verification, and booking coordination for films, OTT series, TV commercials, and brand campaigns.",
    url: "https://delhicastingagency.com/inquiry",
    provider: {
      "@type": "Organization",
      name: "Delhi Casting Agency",
      url: "https://delhicastingagency.com",
      telephone: "+91-9876543210",
      email: "casting@delhicastingagency.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense
        fallback={
          <div className="min-h-screen bg-white flex items-center justify-center pt-32">
            <div className="animate-pulse text-[#D4AF37] font-semibold text-sm">
              Loading Casting Inquiry Desk...
            </div>
          </div>
        }
      >
        <InquiryFormView />
      </Suspense>
    </>
  );
}
