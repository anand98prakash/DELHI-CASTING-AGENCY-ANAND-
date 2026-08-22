"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Sparkles, Clapperboard, Film, ShieldCheck } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { CTASection } from "@/components/ui/cta-section";
import type { CastingCallItem } from "@/data/casting-calls";
import { CastingCallCard } from "@/components/casting-calls/CastingCallCard";
import { CastingFilters } from "@/components/casting-calls/CastingFilters";
import { CastingDetailModal } from "@/components/casting-calls/CastingDetailModal";
import { CastingApplyModal } from "@/components/casting-calls/CastingApplyModal";

interface CastingCallListingViewProps {
  eyebrow?: string;
  title: string;
  description: string;
  heroBannerImage?: string;
  initialCalls: CastingCallItem[];
  defaultCategoryFilter?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export function CastingCallListingView({
  eyebrow = "Casting Calls",
  title,
  description,
  heroBannerImage = "/media/dca/about/dca-about-hero-01.jpg",
  initialCalls,
  defaultCategoryFilter = "All",
  breadcrumbs,
}: CastingCallListingViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(defaultCategoryFilter);
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  const [selectedDetailCall, setSelectedDetailCall] = useState<CastingCallItem | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState<boolean>(false);

  const [selectedApplyCall, setSelectedApplyCall] = useState<CastingCallItem | null>(null);
  const [isApplyOpen, setIsApplyOpen] = useState<boolean>(false);

  // Extract filter categories merged with gender options
  const categoriesList = useMemo(() => {
    const list: string[] = ["All", "Female", "Male", "Any Gender"];
    initialCalls.forEach((c) => {
      if (c.category && !list.includes(c.category)) {
        list.push(c.category);
      }
    });
    return list;
  }, [initialCalls]);

  // Filter calls
  const filteredCalls = useMemo(() => {
    const genderFilters = ["female", "male", "any gender"];
    return initialCalls.filter((call) => {
      const isGenderFilter = genderFilters.includes(selectedCategory.toLowerCase());

      const matchCat =
        selectedCategory === "All"
          ? true
          : isGenderFilter
          ? call.gender.toLowerCase().includes(selectedCategory.toLowerCase())
          : call.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchQuery =
        !searchQuery ||
        call.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        call.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        call.productionType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        call.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCat && matchQuery;
    });
  }, [initialCalls, selectedCategory, searchQuery]);

  const handleOpenDetails = (item: CastingCallItem) => {
    setSelectedDetailCall(item);
    setIsDetailOpen(true);
  };

  const handleOpenApply = (item: CastingCallItem) => {
    setSelectedApplyCall(item);
    setIsApplyOpen(true);
  };

  return (
    <main className="bg-[#0d0d0d] min-h-screen text-white">
      {/* Hero Header with exact visual order: Eyebrow -> Wide Banner -> H1 -> Description */}
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#0a0a0a] px-4 sm:px-6 lg:px-8 pb-12 pt-28 sm:pb-16 sm:pt-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.16),transparent_38%),linear-gradient(180deg,rgba(10,10,10,0.72),#0a0a0a)]" />

        <div className="mx-auto max-w-7xl">
          <Reveal>
            {/* 1. Eyebrow (DCA GOLD) */}
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d4af37] mb-3">
              {eyebrow}
            </p>

            {/* 2. WIDE HORIZONTAL CASTING IMAGE / BANNER */}
            <div className="relative w-full aspect-[21/7] max-h-[260px] sm:max-h-[300px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-6 bg-[#181818]">
              <Image
                src={heroBannerImage}
                alt={title}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70" />
            </div>

            {/* 3. Main H1 Title (WHITE) */}
            <h1 className="max-w-4xl text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-white">
              {title}
            </h1>

            {/* 4. Description */}
            <p className="mt-4 max-w-3xl text-base sm:text-lg font-normal leading-relaxed text-white/65">
              {description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Breadcrumb Bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
        <Breadcrumb items={breadcrumbs} />
      </div>

      {/* Main Casting Call Listing Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <Reveal>
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              Verified Casting Opportunities
            </span>

            <h2 className="mt-3 font-extrabold tracking-tight text-3xl sm:text-4xl text-[#d4af37]">
              Live Audition Listings
            </h2>

            <p className="mt-3 text-base leading-relaxed text-white/60">
              Browse active casting requirements from verified directors, production houses, and DCA casting coordinators.
            </p>
          </div>
        </Reveal>

        {/* Filter Controls */}
        <CastingFilters
          categories={categoriesList}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* 3-Col Desktop, 2-Col Tablet, 1-Col Mobile Grid with Equal Height Cards */}
        {filteredCalls.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {filteredCalls.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.05} className="h-full">
                <CastingCallCard
                  item={item}
                  onViewDetails={handleOpenDetails}
                  onApply={handleOpenApply}
                />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-3xl bg-[#181818] border border-white/10 text-white/60">
            <Clapperboard className="w-12 h-12 text-[#d4af37]/40 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">No Casting Calls Found</h3>
            <p className="text-sm text-white/50 max-w-md mx-auto">
              No live casting calls match your current filter selection. Try clearing filters or searching another keyword.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-5 px-5 py-2.5 rounded-xl bg-[#d4af37] text-black font-semibold text-xs hover:bg-[#e5c158] transition-all"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </section>

      {/* Casting Process Highlights */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8 bg-[#181818] border border-white/10 rounded-3xl">
            <div className="flex items-start gap-4 p-4">
              <div className="p-3 rounded-2xl bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base sm:text-lg">
                  100% Verified Casting Calls
                </h3>
                <p className="text-white/60 text-xs sm:text-sm mt-1 leading-relaxed">
                  Every casting brief is vetted by DCA coordinators to prevent scams and protect talent safety.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 md:border-x border-white/10">
              <div className="p-3 rounded-2xl bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 flex-shrink-0">
                <Film className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base sm:text-lg">
                  Direct Production Access
                </h3>
                <p className="text-white/60 text-xs sm:text-sm mt-1 leading-relaxed">
                  Direct audition submission links forwarded to casting directors in Bollywood, OTT, and TV.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4">
              <div className="p-3 rounded-2xl bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 flex-shrink-0">
                <Clapperboard className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base sm:text-lg">
                  Structured Audition Briefs
                </h3>
                <p className="text-white/60 text-xs sm:text-sm mt-1 leading-relaxed">
                  Clear specifications for age, gender, script preparation, and self-tape formatting.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Global CTA */}
      <CTASection
        eyebrow="Find Your Opportunity"
        title="Ready to apply for casting calls?"
        description="Create your DCA talent profile and submit your portfolio to verified directors."
        buttonLabel="Register Now"
        buttonHref="/register/"
      />

      {/* Modals */}
      <CastingDetailModal
        item={selectedDetailCall}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        onApply={(item) => {
          setSelectedApplyCall(item);
          setIsApplyOpen(true);
        }}
      />

      <CastingApplyModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        castingTitle={selectedApplyCall?.title}
        castingCategory={selectedApplyCall?.category}
      />
    </main>
  );
}
