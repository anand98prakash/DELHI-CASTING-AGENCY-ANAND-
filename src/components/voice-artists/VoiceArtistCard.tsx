"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, MapPin, Mic2, Globe } from "lucide-react";
import type { VoiceArtist } from "@/data/voice-artists";
import { ActorRegisterModal } from "@/components/actors/ActorRegisterModal";

interface VoiceArtistCardProps {
  artist: VoiceArtist;
}

export function VoiceArtistCard({ artist }: VoiceArtistCardProps) {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleOpenGate = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsRegisterModalOpen(true);
  };

  return (
    <>
      <div className="group flex flex-col justify-between bg-[#181818] border border-white/10 rounded-2xl overflow-hidden hover:border-[#d4af37]/60 hover:shadow-2xl hover:shadow-[#d4af37]/10 transition-all duration-300 hover:-translate-y-1.5 motion-reduce:hover:translate-y-0 motion-reduce:transition-none">
        <div>
          {/* Photo Container */}
          <div
            onClick={handleOpenGate}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIsRegisterModalOpen(true);
              }
            }}
            aria-label={`View profile for ${artist.name}`}
            className="relative block w-full aspect-[3/4] bg-[#121212] overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
          >
            <Image
              src={artist.mainImage}
              alt={`${artist.name} - Delhi Casting Agency verified ${artist.categoryLabel}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-500 ease-out motion-reduce:group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-black/20 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

            {/* Top Badges */}
            <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#d4af37] border border-[#d4af37]/30">
                {artist.categoryLabel}
              </span>
              {artist.badge && (
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#d4af37]/20 backdrop-blur-md text-amber-200 border border-[#d4af37]/40">
                  {artist.badge}
                </span>
              )}
            </div>

            {/* Name & Role overlay on image bottom */}
            <div className="absolute bottom-3.5 left-4 right-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#d4af37] transition-colors leading-tight">
                {artist.name}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-medium mt-0.5 line-clamp-1">
                {artist.role}
              </p>
            </div>
          </div>

          {/* Quick Specs metadata */}
          <div className="p-5 pt-4">
            <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 text-center bg-white/[0.02] rounded-xl px-2">
              <div className="flex flex-col items-center">
                <span className="text-[10px] uppercase tracking-wider text-white/40 flex items-center gap-1 font-medium">
                  <Mic2 className="w-2.5 h-2.5 text-[#d4af37]" /> Voice
                </span>
                <span className="text-xs font-semibold text-white mt-1 line-clamp-1">
                  {artist.vocalPitch.split(" ")[0]}
                </span>
              </div>
              <div className="flex flex-col items-center border-x border-white/10 px-1">
                <span className="text-[10px] uppercase tracking-wider text-white/40 flex items-center gap-1 font-medium">
                  <Globe className="w-2.5 h-2.5 text-[#d4af37]" /> Lang
                </span>
                <span className="text-xs font-semibold text-white mt-1 line-clamp-1">
                  {artist.languages[0]?.split(" ")[0]}
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[10px] uppercase tracking-wider text-white/40 flex items-center gap-1 font-medium">
                  <MapPin className="w-2.5 h-2.5 text-[#d4af37]" /> City
                </span>
                <span className="text-xs font-semibold text-white mt-1 line-clamp-1">
                  {artist.location.split("/")[0].trim()}
                </span>
              </div>
            </div>

            {/* Skills / Voice styles tags */}
            <div className="flex flex-wrap gap-1.5 mt-3.5">
              {artist.skills.slice(0, 2).map((skill) => (
                <span
                  key={skill}
                  className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 text-white/70 border border-white/5 truncate max-w-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button opens Registration Modal */}
        <div className="px-5 pb-5">
          <button
            type="button"
            onClick={handleOpenGate}
            className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-white/5 hover:bg-[#d4af37] text-white hover:text-black font-semibold text-sm border border-white/10 hover:border-[#d4af37] transition-all duration-300 shadow-md group/btn"
          >
            <span>View Profile</span>
            <ArrowRight className="w-4 h-4 text-[#d4af37] group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all duration-300 motion-reduce:group-hover/btn:translate-x-0" />
          </button>
        </div>
      </div>

      {/* Registration Gating Modal */}
      <ActorRegisterModal
        isOpen={isRegisterModalOpen}
        actorName={artist.name}
        actorImage={artist.mainImage}
        onClose={() => setIsRegisterModalOpen(false)}
      />
    </>
  );
}
