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
  Mic2,
  Play,
  Volume2,
  Clock,
  Globe,
} from "lucide-react";

import type { VoiceArtist } from "@/data/voice-artists";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { CTASection } from "@/components/ui/cta-section";
import { VoiceArtistQuickSpecs } from "./VoiceArtistQuickSpecs";
import { PortfolioGallery } from "@/components/actors/PortfolioGallery";
import { VideoGallery } from "@/components/actors/VideoGallery";
import { ImageLightbox } from "@/components/actors/ImageLightbox";

interface VoiceArtistProfileViewProps {
  artist: VoiceArtist;
  similarArtists: VoiceArtist[];
}

type VoiceTabType = "audio" | "video" | "photos";

export function VoiceArtistProfileView({
  artist,
  similarArtists,
}: VoiceArtistProfileViewProps) {
  const [activeTab, setActiveTab] = useState<VoiceTabType>("audio");
  const [headerLightboxOpen, setHeaderLightboxOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);

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

  const photoImages = artist.photos || [artist.mainImage];

  return (
    <main className="bg-[#0d0d0d] min-h-screen text-white">
      {/* Breadcrumb Bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-4">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Talents", href: "/talents/" },
            { label: "Voice Artists", href: "/voice-artists/" },
            { label: artist.categoryLabel, href: `/voice-artists/${artist.category}/` },
            { label: artist.name },
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
                src={artist.mainImage}
                alt={artist.name}
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
                <span>Book Voice Talent</span>
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

          {/* Profile Overview, Details & Biography Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              {/* Badges ABOVE voice artist name */}
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/30 font-bold">
                  {artist.categoryLabel}
                </span>
                {artist.badge && (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {artist.badge}
                  </span>
                )}
              </div>

              {/* Voice Artist Name */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {artist.name}
              </h1>

              {/* Role */}
              <p className="text-lg sm:text-xl text-[#d4af37] font-medium mt-1">
                {artist.role}
              </p>
            </div>

            {/* Voice Profile Details */}
            <VoiceArtistQuickSpecs artist={artist} />

            {/* Biography with #biography anchor */}
            <div
              id="biography"
              className="bg-[#181818] border border-white/10 rounded-2xl p-5 sm:p-6 scroll-mt-24"
            >
              <h3 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-3 flex items-center gap-2">
                <User className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Biography &amp; Studio Capabilities</span>
              </h3>
              <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                {artist.about}
              </p>
            </div>

            {/* Skills & Vocal Capabilities */}
            <div className="bg-[#181818] border border-white/10 rounded-2xl p-5 sm:p-6">
              <h3 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Vocal Capabilities &amp; Turnaround</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {artist.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-lg bg-white/5 text-white/85 border border-white/10 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience Credits Table */}
            {artist.experienceCredits && artist.experienceCredits.length > 0 && (
              <div className="bg-[#181818] border border-white/10 rounded-2xl p-5 sm:p-6">
                <h3 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Selected Dubbing &amp; Voiceover Credits</span>
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-white/10 text-white/40 uppercase tracking-wider text-[10px]">
                        <th className="pb-2.5 font-medium">Production / Ad</th>
                        <th className="pb-2.5 font-medium">Role</th>
                        <th className="pb-2.5 font-medium">Category</th>
                        <th className="pb-2.5 font-medium text-right">Year</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {artist.experienceCredits.map((credit, idx) => (
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

      {/* Voice Showcase Section (AUDIO / VIDEO / PHOTOS) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 border-t border-white/10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold flex items-center gap-1.5 mb-1">
                <Mic2 className="w-3.5 h-3.5" />
                Voice Reels &amp; Samples
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Verified Audio Demos &amp; Media
              </h2>
            </div>

            {/* Custom Voice Tabs: AUDIO / VIDEO / PHOTOS */}
            <div className="flex items-center gap-1.5 p-1.5 bg-[#181818] border border-white/10 rounded-2xl self-start md:self-auto">
              <button
                onClick={() => setActiveTab("audio")}
                type="button"
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  activeTab === "audio"
                    ? "bg-[#d4af37] text-black shadow-md"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>AUDIO</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/20 font-bold">
                  {artist.audios?.length || 0}
                </span>
              </button>

              <button
                onClick={() => setActiveTab("video")}
                type="button"
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  activeTab === "video"
                    ? "bg-[#d4af37] text-black shadow-md"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <Mic2 className="w-3.5 h-3.5" />
                <span>VIDEO</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/20 font-bold">
                  {artist.videos?.length || 0}
                </span>
              </button>

              <button
                onClick={() => setActiveTab("photos")}
                type="button"
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  activeTab === "photos"
                    ? "bg-[#d4af37] text-black shadow-md"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>PHOTOS</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/20 font-bold">
                  {photoImages.length}
                </span>
              </button>
            </div>
          </div>
        </Reveal>

        {/* Voice Tab Content */}
        <div className="mt-6">
          {activeTab === "audio" && (
            <div className="space-y-4">
              {artist.audios && artist.audios.length > 0 ? (
                artist.audios.map((audio) => {
                  const isPlaying = playingAudioId === audio.id;
                  return (
                    <div
                      key={audio.id}
                      className="bg-[#181818] border border-white/10 hover:border-[#d4af37]/40 rounded-2xl p-5 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="flex items-start sm:items-center gap-4">
                        <button
                          type="button"
                          onClick={() => setPlayingAudioId(isPlaying ? null : audio.id)}
                          className={`h-12 w-12 rounded-xl flex items-center justify-center transition-all shrink-0 ${
                            isPlaying
                              ? "bg-[#d4af37] text-black shadow-lg shadow-[#d4af37]/30"
                              : "bg-white/5 hover:bg-[#d4af37] text-[#d4af37] hover:text-black border border-white/10"
                          }`}
                          aria-label={isPlaying ? "Pause audio reel" : "Play audio reel"}
                        >
                          {isPlaying ? (
                            <Volume2 className="w-5 h-5 animate-pulse" />
                          ) : (
                            <Play className="w-5 h-5 ml-0.5" />
                          )}
                        </button>
                        <div>
                          <h4 className="text-base font-bold text-white leading-snug">
                            {audio.title}
                          </h4>
                          <p className="text-xs text-white/60 mt-0.5">
                            {audio.description}
                          </p>
                          <div className="flex items-center gap-3 mt-2 text-[11px] text-[#d4af37]">
                            <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5">
                              {audio.category}
                            </span>
                            <span className="flex items-center gap-1 text-white/40">
                              <Globe className="w-3 h-3" /> {audio.language}
                            </span>
                            <span className="flex items-center gap-1 text-white/40">
                              <Clock className="w-3 h-3" /> {audio.duration}
                            </span>
                          </div>
                        </div>
                      </div>

                      {isPlaying && (
                        <div className="px-3 py-1.5 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/20 text-[11px] text-[#d4af37] font-semibold self-start sm:self-center">
                          Playing Demo Audio
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-12 bg-[#181818] rounded-2xl border border-white/10">
                  <p className="text-white/60 text-sm">
                    Voice reels and demo audios coming soon.
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === "video" && (
            <VideoGallery
              videos={artist.videos || []}
              actorName={artist.name}
            />
          )}

          {activeTab === "photos" && (
            <PortfolioGallery
              type="digitals"
              digitals={photoImages}
              actorName={artist.name}
            />
          )}
        </div>
      </section>

      {/* Similar Voice Artists */}
      {similarArtists.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 border-t border-white/10">
          <Reveal>
            <div className="flex items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                  More Voice Artists
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                  Similar {artist.categoryLabel}s
                </h3>
              </div>
              <Link
                href={`/voice-artists/${artist.category}/`}
                className="text-xs sm:text-sm font-semibold text-[#d4af37] hover:text-[#e5c158] inline-flex items-center gap-1"
              >
                <span>View All</span>
                <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {similarArtists.map((sim) => (
                <Link
                  key={sim.id}
                  href={`/voice-artists/profile/${sim.id}/`}
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
                      {sim.voiceTexture.split(",")[0]} • {sim.location.split("/")[0].trim()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </section>
      )}

      {/* Voice Booking CTA */}
      <CTASection
        eyebrow="Voice Casting &amp; Studio Delivery"
        title={`Looking to Cast ${artist.name}?`}
        description="Delhi Casting Agency coordinates custom audition scripts, studio sessions, and broadcast-ready deliverables."
        buttonLabel="Contact Voice Desk"
        buttonHref="/contact/"
      />

      {/* Header Lightbox Modal */}
      <ImageLightbox
        isOpen={headerLightboxOpen}
        images={[{ image: artist.mainImage, title: artist.name }]}
        currentIndex={0}
        onClose={() => setHeaderLightboxOpen(false)}
        onNavigate={() => {}}
      />
    </main>
  );
}
