"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowRight, ShieldCheck } from "lucide-react";
import { getProfileCreateOrSetupUrl } from "@/lib/auth";

interface CastingApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  castingTitle?: string;
  castingCategory?: string;
}

const CASTING_PHOTOS = [
  { src: "/media/dca/actors/dca-actor-female-01.jpg", alt: "Actor Audition" },
  { src: "/media/dca/actors/dca-actor-male-01.jpg", alt: "Screen Test" },
  { src: "/media/dca/casting-calls/dca-casting-commercial-01.jpg", alt: "Commercial Shoot" },
  { src: "/media/dca/models/dca-model-fashion-01.jpg", alt: "Fashion Runway" },
];

export function CastingApplyModal({
  isOpen,
  onClose,
  castingTitle,
  castingCategory = "Casting Call",
}: CastingApplyModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="casting-modal-title"
      aria-describedby="casting-modal-desc"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-4 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[500px] bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Understated Close Button (×) */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close"
          className="absolute top-4 sm:top-5 right-4 sm:right-5 p-2 rounded-full text-gray-400 hover:text-[#111111] hover:bg-gray-100 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 4 Production Photos Collage */}
        <div className="grid grid-cols-4 gap-2.5 sm:gap-3 mb-6 pt-2">
          {CASTING_PHOTOS.map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gray-100 border border-gray-200 shadow-xs group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                unoptimized
                sizes="(max-width: 640px) 20vw, 100px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>
          ))}
        </div>

        {/* Badge */}
        <div className="mx-auto mb-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-semibold text-[#d4af37]">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>DCA Verified Casting Access</span>
        </div>

        {/* Heading */}
        <h3
          id="casting-modal-title"
          className="font-serif text-2xl sm:text-[26px] font-bold text-[#111111] tracking-tight leading-snug mb-2.5"
        >
          Register to Apply
        </h3>

        {/* Value Proposition */}
        <p className="text-sm sm:text-base text-[#444444] font-medium leading-relaxed mb-2 max-w-sm mx-auto">
          {castingTitle ? (
            <>
              Apply for <span className="text-[#d4af37] font-semibold">{castingTitle}</span> with your verified DCA profile.
            </>
          ) : (
            `Create your DCA profile to apply for verified ${castingCategory} opportunities.`
          )}
        </p>

        {/* Supporting Description */}
        <p
          id="casting-modal-desc"
          className="text-xs sm:text-sm text-[#666666] leading-relaxed mb-7 max-w-sm mx-auto"
        >
          Register with Delhi Casting Agency to submit auditions, track application status, and showcase your talent to production directors.
        </p>

        {/* Actions Stack */}
        <div className="flex flex-col items-center gap-3 w-full">
          <Link
            href={getProfileCreateOrSetupUrl()}
            onClick={onClose}
            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-[#d4af37] hover:bg-[#c59b27] text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <span>Create Your Profile</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={onClose}
            type="button"
            className="text-xs sm:text-sm text-[#666666] hover:text-[#111111] transition-colors py-1 font-medium"
          >
            Not now
          </button>
        </div>
      </div>
    </div>
  );
}
