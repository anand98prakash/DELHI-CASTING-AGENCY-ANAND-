import React from "react";
import Link from "next/link";
import { Users, Sparkles } from "lucide-react";

import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { CTASection } from "@/components/ui/cta-section";
import { getChildArtistsByCategory, getChildCategoryBySlug, CHILD_ARTIST_CATEGORIES } from "@/data/child-artists";
import { ChildArtistGrid } from "@/components/child-artists/ChildArtistGrid";

export const metadata = {
  title: "Child Girls Talent Roster | Delhi Casting Agency (DCA)",
  description:
    "Discover talented young female actors and child artists available for feature films, TVCs, and commercial projects.",
};

export default function ChildGirlsPage() {
  const category = getChildCategoryBySlug("girls")!;
  const artists = getChildArtistsByCategory("girls");
  const otherCategories = CHILD_ARTIST_CATEGORIES.filter((c) => c.slug !== "girls");

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
                { label: "Child Artists", href: "/child-artists/" },
                { label: "Child Girls" },
              ]}
            />
          </div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d4af37] mb-2">
              Talent Roster
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Child Girls
            </h1>
            <p className="mt-2.5 max-w-3xl text-sm sm:text-base text-white/70 leading-relaxed">
              {category.heroDescription}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured Artists Grid Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold flex items-center gap-1.5 mb-1.5">
                <Users className="w-3.5 h-3.5" />
                Featured Junior Artists
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Child Girl Profiles
              </h2>
            </div>
            <span className="text-xs sm:text-sm text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/30 px-3.5 py-1.5 rounded-full self-start md:self-auto font-medium">
              Showing Verified Artists
            </span>
          </div>
        </Reveal>

        {/* Child Artist Cards Grid */}
        <Reveal delay={0.1}>
          <ChildArtistGrid artists={artists} />
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
              Other Junior Divisions
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-3.5 max-w-lg">
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
        eyebrow="Junior Girl Talent"
        title="Looking to Cast Child Girls for Campaigns or Serials?"
        description="Delhi Casting Agency manages auditions, parental approvals, and shoot coordination."
        buttonLabel="Contact Junior Casting"
        buttonHref="/contact/"
      />
    </main>
  );
}
