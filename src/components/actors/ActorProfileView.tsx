"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Sparkles,
  Award,
  Clapperboard,
  CheckCircle2,
  Mail,
  Share2,
  ArrowLeft,
  FileText,
  User,
} from "lucide-react";
import type { Actor } from "@/data/actors";
import { ActorQuickSpecs } from "./ActorQuickSpecs";
import { PortfolioTabs, type PortfolioTabKey } from "./PortfolioTabs";
import { PortfolioGallery } from "./PortfolioGallery";
import { VideoGallery } from "./VideoGallery";
import { ActorCard } from "./ActorCard";
import { ImageLightbox } from "./ImageLightbox";

interface ActorProfileViewProps {
  actor: Actor;
  relatedActors: Actor[];
}

export function ActorProfileView({
  actor,
  relatedActors,
}: ActorProfileViewProps) {
  const [activeTab, setActiveTab] = useState<PortfolioTabKey>("digitals");
  const [headerLightboxOpen, setHeaderLightboxOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const counts = {
    digitals: actor.digitals.length,
    video: actor.videos.length,
    instagram: actor.instagram.length,
    print: actor.print.length,
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const scrollToBiography = (e: React.MouseEvent) => {
    e.preventDefault();
    const bioElement = document.getElementById("biography");
    if (bioElement) {
      bioElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      {/* Breadcrumb Bar */}
      <div className="border-b border-white/10 bg-[#121212]/80 backdrop-blur-md sticky top-16 sm:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center text-xs sm:text-sm text-white/60 overflow-x-auto no-scrollbar whitespace-nowrap"
          >
            <Link
              href="/"
              className="hover:text-[#d4af37] transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 mx-2 text-white/30 flex-shrink-0" />
            <Link
              href="/actors"
              className="hover:text-[#d4af37] transition-colors"
            >
              Actors
            </Link>
            <ChevronRight className="w-3.5 h-3.5 mx-2 text-white/30 flex-shrink-0" />
            <Link
              href={`/actors/${actor.category}`}
              className="hover:text-[#d4af37] transition-colors"
            >
              {actor.categoryLabel}s
            </Link>
            <ChevronRight className="w-3.5 h-3.5 mx-2 text-white/30 flex-shrink-0" />
            <span className="text-[#d4af37] font-semibold truncate max-w-[200px]">
              {actor.name}
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href={`/actors/${actor.category}`}
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-white/60 hover:text-[#d4af37] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to {actor.categoryLabel}s</span>
          </Link>
        </div>

        {/* Hero Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          {/* Main Photo Column */}
          <div className="lg:col-span-5">
            <div
              onClick={() => setHeaderLightboxOpen(true)}
              className="group relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-[#181818] border border-white/10 hover:border-[#d4af37]/60 hover:shadow-2xl hover:shadow-[#d4af37]/10 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={actor.mainImage}
                alt={actor.name}
                fill
                priority
                unoptimized
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

              {/* Click to expand pill */}
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs text-white/80 flex items-center gap-1.5 group-hover:border-[#d4af37] group-hover:text-[#d4af37] transition-colors">
                <Sparkles className="w-3.5 h-3.5" />
                <span>View Full Size</span>
              </div>
            </div>

            {/* Quick Actions under photo */}
            <div className="flex flex-wrap items-center gap-3 mt-4">
              <Link
                href="/contact"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#d4af37] hover:bg-[#e5c158] text-black font-bold text-sm transition-all duration-300 shadow-lg shadow-[#d4af37]/20"
              >
                <Mail className="w-4 h-4" />
                <span>Inquire &amp; Cast</span>
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

          {/* Profile Overview, Model Details & Biography Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              {/* Badges ABOVE actor name (Requirement #8) */}
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/30 font-bold">
                  {actor.categoryLabel}
                </span>
                {actor.badge && (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {actor.badge}
                  </span>
                )}
              </div>

              {/* Actor Name */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {actor.name}
              </h1>

              {/* Role */}
              <p className="text-lg sm:text-xl text-[#d4af37] font-medium mt-1">
                {actor.role}
              </p>
            </div>

            {/* Model Details (Requirement #9) */}
            <ActorQuickSpecs actor={actor} />

            {/* Biography with #biography anchor moved higher (Requirement #10 & #11) */}
            <div
              id="biography"
              className="bg-[#181818] border border-white/10 rounded-2xl p-5 sm:p-6 scroll-mt-24"
            >
              <h3 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-3 flex items-center gap-2">
                <User className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Biography</span>
              </h3>
              <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                {actor.about}
              </p>
            </div>

            {/* Skills & Talents */}
            <div className="bg-[#181818] border border-white/10 rounded-2xl p-5 sm:p-6">
              <h3 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Skills &amp; Special Talents</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {actor.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs sm:text-sm px-3 py-1.5 rounded-lg bg-white/5 text-white/90 border border-white/10 hover:border-[#d4af37]/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience & Credits Section */}
        <div className="mb-14 bg-[#181818] border border-white/10 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2.5 mb-6">
            <Award className="w-5 h-5 text-[#d4af37]" />
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Featured Credits &amp; Performance History
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-white/80 border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-white/40">
                  <th className="py-3 px-4">Project / Production</th>
                  <th className="py-3 px-4">Role</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Year</th>
                  <th className="py-3 px-4">Director / Banner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {actor.experienceCredits.map((credit, index) => (
                  <tr
                    key={index}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-3.5 px-4 font-semibold text-white">
                      {credit.project}
                    </td>
                    <td className="py-3.5 px-4 text-[#d4af37]">
                      {credit.role}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="text-xs px-2.5 py-1 rounded bg-white/5 border border-white/5">
                        {credit.type}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-white/60">{credit.year}</td>
                    <td className="py-3.5 px-4 text-white/60">
                      {credit.directorOrClient || "Production Studio"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Interactive Portfolio Section (PHOTOS, VIDEO, INSTAGRAM, PRINT) (Requirement #12) */}
        <section className="mb-16">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold flex items-center gap-1.5 mb-2">
              <Clapperboard className="w-4 h-4 text-[#d4af37]" />
              Artist Media &amp; Comp Card
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Interactive Portfolio
            </h2>
          </div>

          {/* Tab navigation */}
          <PortfolioTabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
            counts={counts}
          />

          {/* Active Tab Panel */}
          <div className="mt-6">
            {activeTab === "digitals" && (
              <PortfolioGallery
                type="digitals"
                digitals={actor.digitals}
                actorName={actor.name}
              />
            )}
            {activeTab === "video" && (
              <VideoGallery videos={actor.videos} actorName={actor.name} />
            )}
            {activeTab === "instagram" && (
              <PortfolioGallery
                type="instagram"
                instagram={actor.instagram}
                actorName={actor.name}
              />
            )}
            {activeTab === "print" && (
              <PortfolioGallery
                type="print"
                print={actor.print}
                actorName={actor.name}
              />
            )}
          </div>
        </section>

        {/* Related Artists Section */}
        {relatedActors.length > 0 && (
          <section className="mb-16 pt-8 border-t border-white/10">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                  Discover More
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Similar {actor.categoryLabel}s
                </h2>
              </div>
              <Link
                href={`/actors/${actor.category}`}
                className="text-xs sm:text-sm text-[#d4af37] hover:underline font-semibold"
              >
                View All {actor.categoryLabel}s &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {relatedActors.map((relActor) => (
                <ActorCard key={relActor.id} actor={relActor} />
              ))}
            </div>
          </section>
        )}

        {/* Call to Action Banner */}
        <section className="bg-gradient-to-r from-[#181818] via-[#201d14] to-[#181818] border border-[#d4af37]/30 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Interested in Casting {actor.name}?
            </h2>
            <p className="text-white/70 text-sm sm:text-base">
              Delhi Casting Agency manages casting inquiries, audition scheduling, contract coordination and direct representation.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-xl bg-[#d4af37] hover:bg-[#e5c158] text-black font-bold text-sm shadow-xl shadow-[#d4af37]/20 transition-all duration-300"
              >
                Submit Casting Inquiry
              </Link>
              <Link
                href="/register"
                className="px-8 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/10 transition-all duration-300"
              >
                Register as Actor
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Header Image Lightbox */}
      <ImageLightbox
        isOpen={headerLightboxOpen}
        images={[{ image: actor.mainImage, title: actor.name }]}
        currentIndex={0}
        onClose={() => setHeaderLightboxOpen(false)}
        onNavigate={() => {}}
      />
    </div>
  );
}
