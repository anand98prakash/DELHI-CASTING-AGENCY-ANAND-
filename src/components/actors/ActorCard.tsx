"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, MapPin, Calendar, Award } from "lucide-react";
import type { Actor } from "@/data/actors";
import { ActorRegisterModal } from "./ActorRegisterModal";

interface ActorCardProps {
  actor: Actor;
}

export function ActorCard({ actor }: ActorCardProps) {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleOpenGate = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsRegisterModalOpen(true);
  };

  return (
    <>
      <div className="group flex flex-col justify-between overflow-hidden rounded-xl border border-[#E2DDD3] bg-[#EFECE4] shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C5A059] hover:shadow-xl">
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
            aria-label={`View profile for ${actor.name}`}
            className="relative block aspect-3/4 w-full cursor-pointer overflow-hidden bg-[#EFECE4] focus:outline-none"
          >
            <Image
              src={actor.mainImage}
              alt={`${actor.name} - Delhi Casting Agency verified ${actor.categoryLabel}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/90 via-[#171717]/30 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

            {/* Top Badges */}
            <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
              <span className="rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#F5F2EA] backdrop-blur-xs">
                {actor.categoryLabel}
              </span>
              {actor.badge && (
                <span className="rounded-full border border-[#C5A059]/40 bg-[#C5A059]/20 px-2.5 py-0.5 text-[10px] font-semibold text-[#F5F2EA] backdrop-blur-xs">
                  {actor.badge}
                </span>
              )}
            </div>

            {/* Name & Role overlay on image bottom */}
            <div className="absolute bottom-3.5 left-4 right-4 text-white">
              <h3 className="font-serif text-2xl font-bold tracking-tight text-[#F5F2EA] transition-colors group-hover:text-[#C5A059]">
                {actor.name}
              </h3>
              <p className="mt-0.5 line-clamp-1 text-xs font-medium text-[#F5F2EA]/75">
                {actor.role}
              </p>
            </div>
          </div>

          {/* Quick Specs metadata */}
          <div className="p-5 pt-4">
            <div className="grid grid-cols-3 gap-2 rounded-lg border border-[#E2DDD3] bg-[#F5F2EA] p-2.5 text-center">
              <div className="flex flex-col items-center">
                <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#171717]/50">
                  <Calendar className="h-3 w-3 text-[#C5A059]" /> Age
                </span>
                <span className="mt-0.5 text-xs font-bold text-[#171717]">
                  {actor.age} yrs
                </span>
              </div>
              <div className="flex flex-col items-center border-x border-[#E2DDD3] px-1">
                <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#171717]/50">
                  <Award className="h-3 w-3 text-[#C5A059]" /> Exp
                </span>
                <span className="mt-0.5 line-clamp-1 text-xs font-bold text-[#171717]">
                  {actor.experience}
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#171717]/50">
                  <MapPin className="h-3 w-3 text-[#C5A059]" /> City
                </span>
                <span className="mt-0.5 line-clamp-1 text-xs font-bold text-[#171717]">
                  {actor.location.split("/")[0].trim()}
                </span>
              </div>
            </div>

            {/* Languages tags */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {actor.languages.slice(0, 3).map((lang) => (
                <span
                  key={lang}
                  className="rounded-md border border-[#E2DDD3] bg-[#F5F2EA] px-2 py-0.5 text-[10px] font-semibold text-[#171717]/70"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="px-5 pb-5">
          <button
            type="button"
            onClick={handleOpenGate}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-[#171717] bg-[#171717] py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-[#F5F2EA] transition duration-300 hover:border-[#C5A059] hover:bg-[#C5A059] hover:text-[#171717]"
          >
            <span>View Profile</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <ActorRegisterModal
        isOpen={isRegisterModalOpen}
        actorName={actor.name}
        actorImage={actor.mainImage}
        onClose={() => setIsRegisterModalOpen(false)}
      />
    </>
  );
}
