"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const WHY = [
  {
    title: "Verified Casting Calls",
    body: "Every opportunity is reviewed before reaching our members to reduce spam and fake listings.",
    image: "/images/actors/verified casting calls.png",
  },
  {
    title: "Direct Audition Access",
    body: "Receive genuine casting opportunities from production requirements.",
    image: "/images/icons/directaudition.png",
  },
  {
    title: "Priority Updates",
    body: "Premium members receive important casting updates before public listings.",
    image: "/images/icons/priority update.png",
  },
  {
    title: "Daily WhatsApp Alerts",
    body: "Fresh casting opportunities delivered directly to your phone.",
    image: "/images/icons/whatsaap.png",
  },
  {
    title: "Industry Community",
    body: "Connect with aspiring artists and stay informed about upcoming opportunities.",
    image: "/media/dca/influencers/dca-influencer-community-01.jpg",
  },
  {
    title: "Lifetime Membership",
    body: "One payment. Lifetime access. No recurring subscription fees.",
    image: "/images/actors/Membership.avif",
  },
];

const WHERE = [
  {
    title: "Bollywood Films",
    body: "Feature films and independent productions.",
    image: "/images/actors/casting-calls bollywooed hrizontally.png",
  },
  {
    title: "Television Shows",
    body: "Daily soaps, reality shows and serials.",
    image: "/media/dca/casting-calls/dca-casting-tv-01.jpg",
  },
  {
    title: "OTT Platforms",
    body: "Web series and digital entertainment projects.",
    image: "/images/actors/looking for male & female.png",
  },
  {
    title: "Print Shoots",
    body: "Editorial, magazine and commercial photography.",
    image: "/media/dca/models/dca-model-print-01.png",
  },
  {
    title: "Fashion Shows",
    body: "Runway and designer showcases.",
    image: "/images/actors/Fashion Shows.webp",
  },
  {
    title: "Music Videos",
    body: "Professional music production opportunities.",
    image: "/media/dca/casting-calls/dca-casting-music-01.avif",
  },
  {
    title: "Brand Commercials",
    body: "Advertising campaigns and promotions.",
    image: "/images/actors/brand 1.png",
  },
  {
    title: "Catalogue Shoots",
    body: "Lifestyle and product catalogue photography.",
    image: "/media/dca/models/dca-model-catalogue-01.jpg",
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
    trackRef.current?.scrollTo({ left: 0 });
    const id = requestAnimationFrame(updateScrollState);
    return () => cancelAnimationFrame(id);
  }, [tab]);

  const scrollByCard = (direction: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-carousel-card]");
    const step = (card?.offsetWidth ?? 300) + 24;
    el.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    });
    setTimeout(updateScrollState, 350);
  };

  return (
    <section
      id="benefits"
      className="relative overflow-hidden border-b border-[#E2DDD3] bg-[#F5F2EA] py-20 sm:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A059]/40 bg-[#EFECE4] px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6A50]">
              <Sparkles size={14} className="text-[#C5A059]" />
              Premium Membership Benefits
            </div>

            <h2 className="mt-5 font-serif text-3xl font-extrabold tracking-tight text-[#171717] sm:text-4xl md:text-5xl lg:text-6xl">
              Everything Included <br />
              <span className="italic font-normal text-[#C5A059]">
                In Your Membership
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base font-normal leading-relaxed text-[#171717]/70">
              Designed for aspiring actors and models looking for verified
              casting opportunities across films, OTT, television, fashion and
              commercial projects.
            </p>
          </div>
        </Reveal>

        {/* Quick Trust */}
        <Reveal>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Verified Opportunities",
              "Lifetime Membership",
              "Priority Updates",
              "Daily WhatsApp Alerts",
            ].map((label) => (
              <div
                key={label}
                className="rounded-full border border-[#E2DDD3] bg-[#EFECE4] px-4 py-2 text-xs font-semibold text-[#171717]"
              >
                {label}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Tabs */}
        <Reveal>
          <div className="mt-12 flex justify-center">
            <div className="flex w-full max-w-md rounded-full border border-[#E2DDD3] bg-[#EFECE4] p-1.5 sm:w-auto">
              <TabButton active={tab === "why"} onClick={() => setTab("why")}>
                Why Members Join
              </TabButton>
              <TabButton active={tab === "where"} onClick={() => setTab("where")}>
                Where You Can Apply
              </TabButton>
            </div>
          </div>
        </Reveal>

        {/* Cards Carousel */}
        <div className="relative mt-12">
          <button
            type="button"
            aria-label="Previous cards"
            onClick={() => scrollByCard("prev")}
            disabled={!canScrollLeft}
            className={cn(
              "absolute -left-4 top-1/2 z-20 hidden -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full border border-[#E2DDD3] bg-[#F5F2EA] text-[#171717] shadow-md transition-all duration-300 sm:flex",
              canScrollLeft
                ? "opacity-100 hover:border-[#C5A059] hover:bg-[#C5A059] hover:text-[#171717]"
                : "opacity-0 pointer-events-none"
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
              "absolute -right-4 top-1/2 z-20 hidden -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full border border-[#E2DDD3] bg-[#F5F2EA] text-[#171717] shadow-md transition-all duration-300 sm:flex",
              canScrollRight
                ? "opacity-100 hover:border-[#C5A059] hover:bg-[#C5A059] hover:text-[#171717]"
                : "opacity-0 pointer-events-none"
            )}
          >
            <ChevronRight size={20} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              ref={trackRef}
              onScroll={updateScrollState}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-1 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {cards.map((item, index) => (
                <motion.div
                  key={item.title}
                  data-carousel-card
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="group relative w-[82%] shrink-0 snap-center rounded-xl border border-[#E2DDD3] bg-[#EFECE4] p-6 shadow-xs transition-all duration-500 hover:-translate-y-1.5 hover:border-[#C5A059] hover:shadow-xl sm:w-[310px]"
                >
                  <div className="relative -mx-6 -mt-6 mb-5 aspect-4/3 overflow-hidden rounded-t-xl bg-[#EFECE4]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="310px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 via-transparent to-transparent" />
                  </div>

                  <h3 className="font-serif text-xl font-bold tracking-tight text-[#171717] transition-colors group-hover:text-[#C5A059]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[#171717]/70">
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
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
        "relative flex-1 rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 sm:flex-none",
        active
          ? "bg-[#171717] text-[#F5F2EA] shadow-sm"
          : "text-[#171717]/70 hover:text-[#171717]"
      )}
    >
      {children}
    </button>
  );
}