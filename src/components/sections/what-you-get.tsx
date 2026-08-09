

"use client";

import React, { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BadgeCheck,
  BookImage,
  Camera,
  ChevronLeft,
  ChevronRight,
  Clapperboard,
  Film,
  Megaphone,
  MonitorPlay,
  Music,
  ShieldCheck,
  Shirt,
  Sparkles,
  Star,
  Trophy,
  Tv,
  Users,
} from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";


/* ------------------------------------------------------ 

/* ------------------------------------------------------ */
/* Cards */
/* ------------------------------------------------------ */

const WHY = [
  {
    title: "Verified Casting Calls",
    body: "Every opportunity is reviewed before reaching our members to reduce spam and fake listings.",
    image: "/images/icons/casting call.jpg"
  },
  {
    title: "Direct Audition Access",
    body: "Receive genuine casting opportunities from production requirements.",
     image: "/images/icons/directaudition.png"
  },
  {
    title: "Priority Updates",
    body: "Premium members receive important casting updates before public listings.",
     image: "/images/icons/priority update.png"
  },
  {
    title: "Daily WhatsApp Alerts",
    body: "Fresh casting opportunities delivered directly to your phone.",
     image:"/images/icons/whatsaap.png"
  },
  {
    
    title: "Industry Community",
    body: "Connect with aspiring artists and stay informed about upcoming opportunities.",
     image:"/images/icons/industries community.jpg"
  },
  {
    title: "Lifetime Membership",
    body: "One payment. Lifetime access. No recurring subscription fees.",
     image:"/images/icons/membership.jpg"
  },
];

const WHERE = [
  {
    title: "Bollywood Films",
    body: "Feature films and independent productions.",
     image:"/images/icons/bollywood flims 1.jpg"
  },
  {
    title: "Television Shows",
    body: "Daily soaps, reality shows and serials.",
     image:"/images/icons/tv show.jpg"
  },
  {
    title: "OTT Platforms",
    body: "Web series and digital entertainment projects.",
     image:"/images/icons/ott platform.webp"
  },
  {
    title: "Print Shoots",
    body: "Editorial, magazine and commercial photography.",
     image:"/images/icons/Models-for-bold-print-shoot.png"
  },
  {
    title: "Fashion Shows",
    body: "Runway and designer showcases.",
     image:"/images/icons/fashion shows.jpg"
  },
  {
    title: "Music Videos",
    body: "Professional music production opportunities.",
     image:"/images/icons/music video.avif"
  },
  {
    title: "Brand Commercials",
    body: "Advertising campaigns and promotions.",
    image:"/images/icons/brand commercial bollywood.jpg"
    
  },
  {
    title: "Catalogue Shoots",
    body: "Lifestyle and product catalogue photography.",
    image:"/images/icons/catelouge shoots.jpg"
  },
];

export function WhatYouGet() {
  const [tab, setTab] = useState<"why" | "where">("why");

  const trackRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const [canScrollRight, setCanScrollRight] = useState(true);

  const cards = tab === "why" ? WHY : WHERE;

  const updateScrollState = () => {
    const el = trackRef.current;

    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 4);

    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    trackRef.current?.scrollTo({
      left: 0,
    });

    const id = requestAnimationFrame(updateScrollState);

    return () => cancelAnimationFrame(id);
  }, [tab]);

  const scrollByCard = (direction: "prev" | "next") => {
    const el = trackRef.current;

    if (!el) return;

    const card = el.querySelector<HTMLElement>("[data-carousel-card]");

    const step = (card?.offsetWidth ?? 300) + 20;

    el.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    });

    setTimeout(updateScrollState, 350);
  };

  return (
    //part B
    <section
      id="benefits"
      className="relative overflow-hidden bg-[#0B0B0B] py-20 sm:py-24 md:py-28"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_60%)]" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 sm:px-5 py-2 text-xs sm:text-sm text-[#D4AF37]">
              <Sparkles size={15} />
              Premium Membership
            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl font-bold leading-tight text-white md:text-6xl">
              Everything Included
              <span className="block text-[#D4AF37]">In Your Membership</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-white/60">
              Designed for aspiring actors and models looking for verified
              casting opportunities across films, OTT, television, fashion and
              commercial projects.
            </p>
          </div>
        </Reveal>

        {/* Quick Trust */}

        <Reveal>
          <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-3 sm:gap-4">
            {[
              "Verified Opportunities",
              "Lifetime Membership",
              "Priority Updates",
              "Daily WhatsApp Alerts",
            ].map((label) => (
              <div
                key={label}
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/75 backdrop-blur-md"
              >
                {label}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Tabs */}

        <Reveal>
          <div className="mt-12 sm:mt-16 flex justify-center px-2">
            <div className="flex w-full max-w-md sm:w-auto rounded-full border border-white/10 bg-white/[0.03] p-1.5 sm:p-2 backdrop-blur-xl">
              <TabButton active={tab === "why"} onClick={() => setTab("why")}>
                Why Members Join
              </TabButton>

              <TabButton
                active={tab === "where"}
                onClick={() => setTab("where")}
              >
                Where You Can Apply
              </TabButton>
            </div>
          </div>
        </Reveal>

        {/* Cards — horizontal carousel: swipe/drag on touch, arrows on desktop */}

        <div className="relative mt-12 sm:mt-16">
          {/* Prev / Next controls */}
          <button
            type="button"
            aria-label="Previous cards"
            onClick={() => scrollByCard("prev")}
            disabled={!canScrollLeft}
            className={cn(
              "absolute -left-2 sm:-left-5 top-1/2 z-20 hidden -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white backdrop-blur-md transition-opacity duration-300 sm:flex",
              canScrollLeft
                ? "opacity-100 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
                : "opacity-0 pointer-events-none",
            )}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            aria-label="Next cards"
            onClick={() => scrollByCard("next")}
            disabled={!canScrollRight}
            className={cn(
              "absolute -right-2 sm:-right-5 top-1/2 z-20 hidden -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white backdrop-blur-md transition-opacity duration-300 sm:flex",
              canScrollRight
                ? "opacity-100 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
                : "opacity-0 pointer-events-none",
            )}
          >
            <ChevronRight size={20} />
          </button>

          {/* Edge fades so the cut-off card reads as "more to scroll" */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#0B0B0B] to-transparent sm:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#0B0B0B] to-transparent sm:w-16" />

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              ref={trackRef}
              onScroll={updateScrollState}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.45 }}
              className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-1 pb-4 sm:gap-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {cards.map((item, index) => {
                return (
                  <motion.div
                    key={item.title}
                    data-carousel-card
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.06,
                      duration: 0.5,
                    }}
                    className="group relative w-[78%] shrink-0 snap-center rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#D4AF37]/40 hover:bg-white/[0.05] sm:w-[300px] sm:p-8 lg:w-[320px]"
                  >
                    {/* Icon */}

                    {/* <div className="relative -mx-6 -mt-6 mb-5 h-44 overflow-hidden rounded-t-3xl bg-black flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-contain"
                      />
                    </div> */}
                    <div className="relative -mx-6 -mt-6 mb-5 h-48 overflow-hidden rounded-t-3xl">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-contain bg-black"
                      />

                      {/* Light gradient for better look */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    {/* Content */}

                    <h3 className="relative z-10 mt-6 sm:mt-7 text-xl sm:text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[#D4AF37]">
                      {item.title}
                    </h3>

                    <p className="relative z-10 mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7 text-white/60">
                      {item.body}
                    </p>

                    {/* Top Gold Line */}

                    <div className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-[#D4AF37] via-yellow-300 to-transparent transition-all duration-500 group-hover:w-full z-20" />
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Mobile prev/next (arrows are hidden below sm, so give touch users a fallback) */}
          <div className="mt-5 flex items-center justify-center gap-3 sm:hidden">
            <button
              type="button"
              aria-label="Previous cards"
              onClick={() => scrollByCard("prev")}
              disabled={!canScrollLeft}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-opacity",
                canScrollLeft ? "opacity-100" : "opacity-30",
              )}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next cards"
              onClick={() => scrollByCard("next")}
              disabled={!canScrollRight}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-opacity",
                canScrollRight ? "opacity-100" : "opacity-30",
              )}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative flex-1 sm:flex-none rounded-full px-4 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap",
        active
          ? "bg-[#D4AF37] text-black shadow-[0_0_30px_rgba(212,175,55,0.25)]"
          : "text-white/60 hover:text-white",
      )}
    >
      {children}
    </button>
  );
}