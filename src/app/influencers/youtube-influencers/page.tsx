import React from "react";
import Link from "next/link";
import { Users, Sparkles } from "lucide-react";

import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { CTASection } from "@/components/ui/cta-section";
import { getInfluencersByCategory, getInfluencerCategoryBySlug, INFLUENCER_CATEGORIES } from "@/data/influencers";
import { InfluencerGrid } from "@/components/influencers/InfluencerGrid";

export const metadata = {
  title: "YouTube Creators Roster | Delhi Casting Agency (DCA)",
  description:
    "Explore dynamic YouTube creators and vloggers for dedicated video sponsorships, product reviews, and brand integrations.",
};

export default function YouTubeInfluencersPage() {
  const category = getInfluencerCategoryBySlug("youtube-influencers")!;
  const influencers = getInfluencersByCategory("youtube-influencers");
  const otherCategories = INFLUENCER_CATEGORIES.filter((c) => c.slug !== "youtube-influencers");

  return (
    <main className="bg-[#0d0d0d] min-h-screen text-white">
      {/* Streamlined Category Hero */}
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#0a0a0a] px-4 sm:px-6 lg:px-8 pb-8 pt-24 sm:pt-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.16),transparent_38%),linear-gradient(180deg,rgba(10,10,10,0.72),#0a0a0a)]" />
        <div className="mx-auto max-w-7xl">
          <div className="mb-4">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Talents", href: "/talents/" },
                { label: "Influencers", href: "/influencers/" },
                { label: "YouTube Influencers" },
              ]}
            />
          </div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d4af37] mb-2">
              Talent Roster
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              YouTube Influencers
            </h1>
            <p className="mt-2.5 max-w-3xl text-sm sm:text-base text-white/70 leading-relaxed">
              {category.heroDescription}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured Creators Grid Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold flex items-center gap-1.5 mb-1.5">
                <Users className="w-3.5 h-3.5" />
                Featured Creators
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                YouTube Creator Profiles
              </h2>
            </div>
            <span className="text-xs sm:text-sm text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/30 px-3.5 py-1.5 rounded-full self-start md:self-auto font-medium">
              Showing Verified Creators
            </span>
          </div>
        </Reveal>

        {/* Influencer Cards Grid */}
        <Reveal delay={0.1}>
          <InfluencerGrid influencers={influencers} />
        </Reveal>
      </section>

      {/* Other Categories Switcher */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 border-t border-white/10">
        <Reveal>
          <div className="mb-6">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold flex items-center gap-1.5 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              Explore More Categories
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Other Creator Divisions
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {otherCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={cat.route}
                className="p-4 rounded-xl bg-[#181818] border border-white/10 hover:border-[#d4af37]/60 hover:bg-white/[0.05] transition-all group block text-center"
              >
                <span className="text-sm font-semibold text-white group-hover:text-[#d4af37] transition-colors block">
                  {cat.title}
                </span>
                <span className="text-[11px] text-white/50 block mt-1">
                  {cat.countLabel}
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Category CTA */}
      <CTASection
        eyebrow="YouTube Sponsorships"
        title="Looking for High-Retention Video Integrations?"
        description="Delhi Casting Agency manages channel sponsorships, product integrations, and long-form reviews."
        buttonLabel="Contact Partnerships Desk"
        buttonHref="/contact/"
      />
    </main>
  );
}
