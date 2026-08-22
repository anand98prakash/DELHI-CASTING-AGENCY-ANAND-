import React from "react";
import Link from "next/link";
import { Users, Sparkles } from "lucide-react";

import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { CTASection } from "@/components/ui/cta-section";
import { getDancersByCategory, getDancerCategoryBySlug, DANCER_CATEGORIES } from "@/data/dancers";
import { DancerGrid } from "@/components/dancers/DancerGrid";

export const metadata = {
  title: "Lead Dancers Roster | Delhi Casting Agency (DCA)",
  description:
    "Discover certified lead dancers and soloists for Bollywood music videos, feature films, and stadium concerts.",
};

export default function LeadDancersPage() {
  const category = getDancerCategoryBySlug("lead-dancers")!;
  const dancers = getDancersByCategory("lead-dancers");
  const otherCategories = DANCER_CATEGORIES.filter((c) => c.slug !== "lead-dancers");

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
                { label: "Dancers", href: "/dancers/" },
                { label: "Lead Dancers" },
              ]}
            />
          </div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d4af37] mb-2">
              Talent Roster
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Lead Dancers
            </h1>
            <p className="mt-2.5 max-w-3xl text-sm sm:text-base text-white/70 leading-relaxed">
              {category.heroDescription}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured Dancers Grid Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold flex items-center gap-1.5 mb-1.5">
                <Users className="w-3.5 h-3.5" />
                Featured Dancers
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Lead Dancer Profiles
              </h2>
            </div>
            <span className="text-xs sm:text-sm text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/30 px-3.5 py-1.5 rounded-full self-start md:self-auto font-medium">
              Showing Verified Dancers
            </span>
          </div>
        </Reveal>

        {/* Dancer Cards Grid */}
        <Reveal delay={0.1}>
          <DancerGrid dancers={dancers} />
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
              Other Dance Divisions
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
        eyebrow="Lead Soloists &amp; Choreographers"
        title="Need Principal Dancers for Music Videos or Shows?"
        description="Delhi Casting Agency manages auditions, performance reels, and rehearsal coordination."
        buttonLabel="Contact Dance Desk"
        buttonHref="/contact/"
      />
    </main>
  );
}
