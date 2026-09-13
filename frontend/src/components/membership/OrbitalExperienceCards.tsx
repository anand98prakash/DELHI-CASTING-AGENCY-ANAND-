"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FileBadge,
  Users,
  Film,
  Building2,
  BellRing,
  ShieldCheck,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

export interface ExperienceItem {
  id: number;
  title: string;
  tagline: string;
  description: string;
  image: string;
  icon: typeof FileBadge;
  accent: string;
  highlight: string;
}

export const experienceItems: ExperienceItem[] = [
  {
    id: 1,
    title: "Verified Comp-Card & Portfolio",
    tagline: "Agency-Standard Comp-Card",
    description:
      "High-resolution digital comp-cards featuring verified physical measurements, unfiltered headshots, and shareable portfolio links for casting directors.",
    image: "/images/actors/basic info.jpg",
    icon: FileBadge,
    accent: "#D4AF37",
    highlight: "100% Industry Verified",
  },
  {
    id: 2,
    title: "Talent Category Specialization",
    tagline: "Precise Roster Indexing",
    description:
      "Categorized indexing across Actors, Models, Child Artists, Dancers, Influencers, and Voice Artists so production houses discover you instantly.",
    image: "/images/actors/talent category selection.webp",
    icon: Users,
    accent: "#C59B27",
    highlight: "Multi-Category Tags",
  },
  {
    id: 3,
    title: "Direct Casting Calls & Auditions",
    tagline: "Bollywood, OTT & TVCs",
    description:
      "Direct submission access to verified feature film auditions, web series roles, national commercials, and runway shows with 0% brokerage.",
    image: "/images/actors/cating calls horizonattaly.png",
    icon: Film,
    accent: "#D4AF37",
    highlight: "Direct Applications",
  },
  {
    id: 4,
    title: "Production House & Brand Scouting",
    tagline: "Private Roster Discovery",
    description:
      "Daily visibility to 150+ registered advertising agencies, film production houses, and casting directors actively scouting talent for commercial campaigns.",
    image: "/images/actors/brand 1.png",
    icon: Building2,
    accent: "#C59B27",
    highlight: "Direct Brand Reach",
  },
  {
    id: 5,
    title: "Instant Callback & WhatsApp Alerts",
    tagline: "Zero Missed Opportunities",
    description:
      "Instant automated WhatsApp, SMS, and in-app alerts whenever a casting call or direct client inquiry matches your look, age, and experience.",
    image: "/images/actors/verified casting calls.png",
    icon: BellRing,
    accent: "#D4AF37",
    highlight: "Real-Time Alerts",
  },
  {
    id: 6,
    title: "Agency Management & Legal Security",
    tagline: "Standardized Performer Contracts",
    description:
      "Standardized contracts, guaranteed payment escrows, clear broadcast media usage rights, and full agency support against unpaid or scam auditions.",
    image: "/images/actors/dca talenet managment.png",
    icon: ShieldCheck,
    accent: "#C59B27",
    highlight: "Legal & Payment Protection",
  },
];

export function OrbitalExperienceCards() {
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [isHoveringCenter, setIsHoveringCenter] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  // Auto rotation for mobile & preview
  useEffect(() => {
    if (!autoRotate) return;
    const timer = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % experienceItems.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [autoRotate]);

  // Radius for desktop orbital circle
  const radius = 310; // in pixels from center (50%, 50%)

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Custom Scoped Animations for Floating Physics */}
      <style jsx>{`
        @keyframes float-pod-0 {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-12px); }
        }
        @keyframes float-pod-1 {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(10px); }
        }
        @keyframes float-pod-2 {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-10px); }
        }
        @keyframes float-pod-3 {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(12px); }
        }
        @keyframes float-pod-4 {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-9px); }
        }
        @keyframes float-pod-5 {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(11px); }
        }
        .anim-float-0 { animation: float-pod-0 5.2s ease-in-out infinite; }
        .anim-float-1 { animation: float-pod-1 6s ease-in-out infinite 0.7s; }
        .anim-float-2 { animation: float-pod-2 5.5s ease-in-out infinite 1.4s; }
        .anim-float-3 { animation: float-pod-3 6.2s ease-in-out infinite 2.1s; }
        .anim-float-4 { animation: float-pod-4 5.8s ease-in-out infinite 2.8s; }
        .anim-float-5 { animation: float-pod-5 5.4s ease-in-out infinite 3.5s; }
        .anim-float-0:hover,
        .anim-float-1:hover,
        .anim-float-2:hover,
        .anim-float-3:hover,
        .anim-float-4:hover,
        .anim-float-5:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* =========================================================================
          DESKTOP ORBITAL VIEW (lg:block) - Complete 360° Circular Animated System
          ========================================================================= */}
      <div className="hidden lg:block relative mx-auto w-full max-w-[1020px] h-[860px]">
        {/* Background Ambient Glow & Concentric Orbital Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Subtle Golden Radial Glow */}
          <div className="w-[680px] h-[680px] rounded-full bg-radial from-[#D4AF37]/10 via-[#D4AF37]/3 to-transparent blur-2xl" />

          {/* Innermost Ring */}
          <div className="absolute w-[360px] h-[360px] rounded-full border border-gray-200/80" />

          {/* Primary Orbital Circle Passing Through All 6 Cards */}
          <div className="absolute w-[620px] h-[620px] rounded-full border border-dashed border-[#D4AF37]/35 animate-[spin_120s_linear_infinite]" />

          {/* Outer Orbital Orbit Ring */}
          <div className="absolute w-[740px] h-[740px] rounded-full border border-gray-100" />
        </div>

        {/* SVG Orbital Connectors from Center to Each Card */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          viewBox="0 0 1020 860"
        >
          {experienceItems.map((_, i) => {
            const angleDeg = i * 60 - 90; // Top is -90 deg
            const angleRad = (angleDeg * Math.PI) / 180;
            const cx = 510;
            const cy = 430;
            const x = cx + radius * Math.cos(angleRad);
            const y = cy + radius * Math.sin(angleRad);
            const isHovered = activeCardIndex === i;

            return (
              <g key={i}>
                <line
                  x1={cx}
                  y1={cy}
                  x2={x}
                  y2={y}
                  stroke={isHovered ? "#D4AF37" : "#E5E7EB"}
                  strokeWidth={isHovered ? "2" : "1.2"}
                  strokeDasharray={isHovered ? "4 4" : "6 6"}
                  className="transition-all duration-300"
                />
                <circle
                  cx={x}
                  cy={y}
                  r={isHovered ? 5 : 3.5}
                  fill={isHovered ? "#D4AF37" : "#CBD5E1"}
                  className="transition-all duration-300"
                />
              </g>
            );
          })}
        </svg>

        {/* Central Core Glowing Hub */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          onMouseEnter={() => setIsHoveringCenter(true)}
          onMouseLeave={() => setIsHoveringCenter(false)}
        >
          <div className="relative flex flex-col items-center justify-center w-48 h-48 rounded-full bg-white p-2 shadow-2xl border-2 border-[#D4AF37] group transition-transform duration-500 hover:scale-105">
            {/* Spinning Golden Accent Ring */}
            <div className="absolute -inset-2.5 rounded-full border border-dashed border-[#D4AF37]/50 animate-[spin_35s_linear_infinite]" />
            <div className="absolute -inset-5 rounded-full border border-[#D4AF37]/20 animate-pulse" />

            <div className="relative flex flex-col items-center text-center px-3 z-10">
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B89222] mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                DCA 360°
              </span>
              <h4 className="font-serif text-lg font-extrabold tracking-tight text-[#111111]">
                Core Casting
              </h4>
              <p className="text-[11px] font-semibold text-[#666666] mt-0.5">
                Ecosystem Hub
              </p>
              <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-[#D4AF37]">
                <Sparkles className="w-3 h-3" />
                <span>6 Core Pillars</span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Floating Orbital Cards Positioned Exactly at 60° Intervals */}
        {experienceItems.map((item, i) => {
          const angleDeg = i * 60 - 90; // -90° is Top, 30° is Top-Right, 90° is Bottom, etc.
          const angleRad = (angleDeg * Math.PI) / 180;
          const cx = 510;
          const cy = 430;
          const x = cx + radius * Math.cos(angleRad);
          const y = cy + radius * Math.sin(angleRad);
          const isSelected = activeCardIndex === i;
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              style={{
                left: `${(x / 1020) * 100}%`,
                top: `${(y / 860) * 100}%`,
              }}
              onMouseEnter={() => {
                setAutoRotate(false);
                setActiveCardIndex(i);
              }}
              onMouseLeave={() => setAutoRotate(true)}
              className={`absolute z-10 w-[270px] anim-float-${i} cursor-pointer transition-all duration-300`}
            >
              <div
                className={`relative overflow-hidden rounded-2xl border bg-white p-4 shadow-md transition-all duration-300 ${
                  isSelected
                    ? "border-[#D4AF37] shadow-xl shadow-[#D4AF37]/15 ring-2 ring-[#D4AF37]/30 scale-105"
                    : "border-gray-200/90 hover:border-[#D4AF37]/70 hover:shadow-lg"
                }`}
              >
                {/* Highlight Pill & Number Badge */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="inline-flex items-center gap-1 rounded-md bg-[#F7F7F5] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#222222]">
                    <Icon className="h-3 w-3 text-[#D4AF37]" />
                    {item.highlight}
                  </span>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D4AF37]/15 text-[10px] font-extrabold text-[#D4AF37]">
                    0{item.id}
                  </span>
                </div>

                {/* Card Thumbnail */}
                <div className="relative mb-2.5 aspect-16/9 w-full overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="270px"
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-1.5 left-2 text-[10px] font-semibold text-white/95">
                    {item.tagline}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-serif text-sm font-bold text-[#111111] leading-snug">
                  {item.title}
                </h3>
                <p className="mt-1 text-[11px] leading-relaxed text-[#555555] line-clamp-3">
                  {item.description}
                </p>

                {/* Active Indicator Footer */}
                <div className="mt-2.5 flex items-center justify-between pt-2 border-t border-gray-100 text-[10px] font-bold text-[#D4AF37]">
                  <span className="uppercase tracking-wider">
                    {isSelected ? "Active Feature" : "Explore Feature"}
                  </span>
                  <CheckCircle2
                    className={`w-3.5 h-3.5 transition-opacity ${
                      isSelected ? "opacity-100 text-[#D4AF37]" : "opacity-30"
                    }`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* =========================================================================
          MOBILE & TABLET VIEW (lg:hidden) - Interactive Circular Dial & Floating Card
          ========================================================================= */}
      <div className="lg:hidden mx-auto max-w-lg px-4">
        {/* Central Circular Emblem */}
        <div className="flex flex-col items-center justify-center text-center mb-6">
          <div className="relative flex flex-col items-center justify-center w-36 h-36 rounded-full bg-white p-3 shadow-xl border-2 border-[#D4AF37]">
            {/* Spinning Golden Dashed Ring */}
            <div className="absolute -inset-2 rounded-full border border-dashed border-[#D4AF37]/45 animate-[spin_30s_linear_infinite]" />

            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#D4AF37]/15 text-[9px] font-bold uppercase tracking-wider text-[#B89222] mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              DCA 360°
            </span>
            <h4 className="font-serif text-sm font-extrabold text-[#111111]">
              Casting Hub
            </h4>
            <span className="text-[10px] text-[#666666] mt-0.5">
              Pillar {activeCardIndex + 1} of 6
            </span>
          </div>

          {/* Circular Selector Pills (1 to 6) */}
          <div className="mt-6 flex items-center justify-center gap-2 flex-wrap">
            {experienceItems.map((item, index) => {
              const isActive = activeCardIndex === index;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setAutoRotate(false);
                    setActiveCardIndex(index);
                  }}
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-[#D4AF37] text-white shadow-md shadow-[#D4AF37]/30 scale-110 ring-2 ring-[#D4AF37]/40"
                      : "bg-[#F7F7F5] text-[#333333] border border-gray-200 hover:border-[#D4AF37]"
                  }`}
                  aria-label={`Select experience pillar ${index + 1}`}
                >
                  0{item.id}
                </button>
              );
            })}
          </div>
        </div>

        {/* Floating Active Feature Card */}
        {(() => {
          const current = experienceItems[activeCardIndex];
          const Icon = current.icon;
          return (
            <div className="relative overflow-hidden rounded-2xl border-2 border-[#D4AF37] bg-white p-5 shadow-xl transition-all duration-500 animate-[float-subtle_4s_ease-in-out_infinite]">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D4AF37]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#D4AF37]">
                  <Icon className="h-3.5 w-3.5" />
                  {current.highlight}
                </span>
                <span className="text-xs font-extrabold text-[#999999]">
                  0{current.id} / 06
                </span>
              </div>

              <div className="relative mb-4 aspect-16/9 w-full overflow-hidden rounded-xl bg-gray-100 shadow-inner">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  sizes="400px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-3 rounded bg-black/40 px-2 py-0.5 text-xs font-semibold text-white backdrop-blur-xs">
                  {current.tagline}
                </span>
              </div>

              <h3 className="font-serif text-lg font-extrabold text-[#111111]">
                {current.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#444444]">
                {current.description}
              </p>

              {/* Navigation Arrows */}
              <div className="mt-5 flex items-center justify-between pt-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => {
                    setAutoRotate(false);
                    setActiveCardIndex(
                      (prev) => (prev - 1 + experienceItems.length) % experienceItems.length
                    );
                  }}
                  className="flex items-center gap-1 rounded-full border border-gray-200 px-3 py-1.5 text-xs font-bold text-[#333333] hover:bg-gray-50 active:scale-95 cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Previous</span>
                </button>

                <div className="flex items-center gap-1 text-[11px] font-bold text-[#D4AF37]">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Interactive Hub</span>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setAutoRotate(false);
                    setActiveCardIndex((prev) => (prev + 1) % experienceItems.length);
                  }}
                  className="flex items-center gap-1 rounded-full bg-[#111111] px-3.5 py-1.5 text-xs font-bold text-white hover:bg-black active:scale-95 cursor-pointer"
                >
                  <span>Next</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          );
        })()}

        {/* Mobile All 6 Pillars Quick Grid */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {experienceItems.map((item, idx) => {
            const Icon = item.icon;
            const isCurrent = activeCardIndex === idx;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setAutoRotate(false);
                  setActiveCardIndex(idx);
                }}
                className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all ${
                  isCurrent
                    ? "border-[#D4AF37] bg-[#FDFBF7] shadow-sm ring-1 ring-[#D4AF37]"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1.5">
                  <Icon className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-[10px] font-extrabold text-gray-400">
                    0{item.id}
                  </span>
                </div>
                <span className="text-xs font-bold text-[#111111] line-clamp-1">
                  {item.title}
                </span>
                <span className="text-[10px] text-gray-500 line-clamp-1 mt-0.5">
                  {item.tagline}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
