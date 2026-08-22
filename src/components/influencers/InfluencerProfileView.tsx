"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Share2,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowLeft,
  FileText,
  User,
} from "lucide-react";

import type { Influencer } from "@/data/influencers";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { CTASection } from "@/components/ui/cta-section";
import { InfluencerQuickSpecs } from "./InfluencerQuickSpecs";
import { PortfolioTabs, type PortfolioTabKey } from "@/components/actors/PortfolioTabs";
import { PortfolioGallery } from "@/components/actors/PortfolioGallery";
import { VideoGallery } from "@/components/actors/VideoGallery";
import { ImageLightbox } from "@/components/actors/ImageLightbox";

interface InfluencerProfileViewProps {
  influencer: Influencer;
  similarInfluencers: Influencer[];
}

export function InfluencerProfileView({
  influencer,
  similarInfluencers,
}: InfluencerProfileViewProps) {
  const [activeTab, setActiveTab] = useState<PortfolioTabKey>("digitals");
  const [headerLightboxOpen, setHeaderLightboxOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const counts = {
    digitals: influencer.photos?.length || 0,
    video: influencer.videos?.length || 0,
    instagram: influencer.instagram?.length || 0,
    print: influencer.print?.length || 0,
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const scrollToBiography = () => {
    const el = document.getElementById("biography");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#0d0d0d] min-h-screen text-white">
      {/* Breadcrumb Bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-4">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Talents", href: "/talents/" },
            { label: "Influencers", href: "/influencers/" },
            { label: influencer.categoryLabel, href: `/influencers/${influencer.category}/` },
            { label: influencer.name },
          ]}
        />
      </div>

      {/* Profile Upper Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Photo Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div
              onClick={() => setHeaderLightboxOpen(true)}
              className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden bg-[#181818] border border-white/10 shadow-2xl cursor-pointer group"
            >
              <Image
                src={influencer.mainImage}
                alt={influencer.name}
                fill
                priority
                unoptimized
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            </div>

            {/* Inquire & Share Action Buttons */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact/"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#d4af37] hover:bg-[#e5c158] text-black font-bold text-sm transition-all duration-300 shadow-lg shadow-[#d4af37]/20"
              >
                <Mail className="w-4 h-4" />
                <span>Brand Collaboration</span>
              </Link>
              <button
                onClick={scrollToBiography}
                type="button"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 text-sm font-semibold transition-colors"
              >
                <FileText className="w-4 h-4 text-[#d4af37]" />
                <span>View Biography</span>
              </button>
              <button
                onClick={handleShare}
                type="button"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 transition-colors relative"
                title="Share Profile"
              >
                <Share2 className="w-4 h-4" />
                {copied && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#d4af37] text-black text-[10px] font-bold px-2 py-0.5 rounded shadow">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Profile Overview, Creator Details & Biography Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              {/* Badges ABOVE creator name */}
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/30 font-bold">
                  {influencer.categoryLabel}
                </span>
                {influencer.badge && (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {influencer.badge}
                  </span>
                )}
              </div>

              {/* Creator Name */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {influencer.name}
              </h1>

              {/* Role */}
              <p className="text-lg sm:text-xl text-[#d4af37] font-medium mt-1">
                {influencer.role} • <span className="text-white/60 text-base">{influencer.handle}</span>
              </p>
            </div>

            {/* Creator Details */}
            <InfluencerQuickSpecs influencer={influencer} />

            {/* Biography with #biography anchor */}
            <div
              id="biography"
              className="bg-[#181818] border border-white/10 rounded-2xl p-5 sm:p-6 scroll-mt-24"
            >
              <h3 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-3 flex items-center gap-2">
                <User className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Creator Bio &amp; Audience</span>
              </h3>
              <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                {influencer.about}
              </p>
            </div>

            {/* Content Categories & Skills */}
            <div className="bg-[#181818] border border-white/10 rounded-2xl p-5 sm:p-6">
              <h3 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Content Specialties &amp; Capabilities</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {influencer.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-lg bg-white/5 text-white/85 border border-white/10 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience & Brand Collaborations Table */}
            {influencer.experienceCredits && influencer.experienceCredits.length > 0 && (
              <div className="bg-[#181818] border border-white/10 rounded-2xl p-5 sm:p-6">
                <h3 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Selected Brand Collaborations</span>
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-white/10 text-white/40 uppercase tracking-wider text-[10px]">
                        <th className="pb-2.5 font-medium">Campaign</th>
                        <th className="pb-2.5 font-medium">Role</th>
                        <th className="pb-2.5 font-medium">Type</th>
                        <th className="pb-2.5 font-medium text-right">Year</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {influencer.experienceCredits.map((credit, idx) => (
                        <tr key={idx} className="hover:bg-white/[0.02]">
                          <td className="py-2.5 font-semibold text-white">
                            {credit.project}
                          </td>
                          <td className="py-2.5 text-white/75">{credit.role}</td>
                          <td className="py-2.5 text-[#d4af37]">{credit.type}</td>
                          <td className="py-2.5 text-right text-white/50">{credit.year}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Interactive Portfolio Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 border-t border-white/10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                Creator Content
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Reels, Media &amp; Brand Shoots
              </h2>
            </div>

            <PortfolioTabs
              activeTab={activeTab}
              onTabChange={setActiveTab}
              counts={counts}
            />
          </div>
        </Reveal>

        {/* Tab Contents */}
        <div className="mt-6">
          {activeTab === "digitals" && (
            <PortfolioGallery
              type="digitals"
              digitals={influencer.photos || [influencer.mainImage]}
              actorName={influencer.name}
            />
          )}

          {activeTab === "video" && (
            <VideoGallery
              videos={influencer.videos || []}
              actorName={influencer.name}
            />
          )}

          {activeTab === "instagram" && (
            <PortfolioGallery
              type="instagram"
              instagram={influencer.instagram || []}
              actorName={influencer.name}
            />
          )}

          {activeTab === "print" && (
            <PortfolioGallery
              type="print"
              print={influencer.print || []}
              actorName={influencer.name}
            />
          )}
        </div>
      </section>

      {/* Similar Influencers */}
      {similarInfluencers.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 border-t border-white/10">
          <Reveal>
            <div className="flex items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                  More Creators
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                  Similar {influencer.categoryLabel}s
                </h3>
              </div>
              <Link
                href={`/influencers/${influencer.category}/`}
                className="text-xs sm:text-sm font-semibold text-[#d4af37] hover:text-[#e5c158] inline-flex items-center gap-1"
              >
                <span>View All</span>
                <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {similarInfluencers.map((sim) => (
                <Link
                  key={sim.id}
                  href={`/influencers/profile/${sim.id}/`}
                  className="group block bg-[#181818] border border-white/10 rounded-2xl overflow-hidden hover:border-[#d4af37]/50 transition-all"
                >
                  <div className="relative aspect-[3/4] w-full bg-[#121212]">
                    <Image
                      src={sim.mainImage}
                      alt={sim.name}
                      fill
                      unoptimized
                      sizes="25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-xs font-bold text-white group-hover:text-[#d4af37] transition-colors truncate">
                      {sim.name}
                    </p>
                    <p className="text-[11px] text-white/50 truncate mt-0.5">
                      {sim.followers} • {sim.location.split("/")[0].trim()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </section>
      )}

      {/* Brand Collab CTA */}
      <CTASection
        eyebrow="Brand Collaborations"
        title={`Looking to Partner with ${influencer.name}?`}
        description="Delhi Casting Agency manages deliverables, contract terms, exclusivity clauses, and rate cards."
        buttonLabel="Inquire for Collaboration"
        buttonHref="/contact/"
      />

      {/* Header Lightbox Modal */}
      <ImageLightbox
        isOpen={headerLightboxOpen}
        images={[{ image: influencer.mainImage, title: influencer.name }]}
        currentIndex={0}
        onClose={() => setHeaderLightboxOpen(false)}
        onNavigate={() => {}}
      />
    </main>
  );
}
