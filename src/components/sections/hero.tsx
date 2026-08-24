"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

import { SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Ambient Gold & Warm Background Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[35%] top-[5%] h-[650px] w-[650px] rounded-full bg-[#D4AF37]/10 blur-[160px]" />
        <div className="absolute right-[8%] top-[25%] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/[0.07] blur-[150px]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1500px] items-center px-5 pb-16 pt-28 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 xl:gap-14">
          {/* =====================================================
              LEFT SIDE — CONTENT & BRANDING
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-center lg:text-left"
          >
            {/* Badge */}
            <div className="mb-8 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm text-[#A88416] backdrop-blur-md">
                <Sparkles size={15} />
                <span>Verified Casting Opportunities</span>
              </div>
            </div>

            {/* Brand */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mb-6 text-base sm:text-lg uppercase tracking-[0.35em] text-[#444444] text-center"
            >
              WAY TO{" "}
              <span className="block mt-2 text-4xl sm:text-5xl md:text-6xl font-[var(--font-fredoka)] font-bold tracking-wide text-[#111111]">
                BOLLYWOOD
              </span>
            </motion.p>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl font-bold leading-[1.1] text-[#111111] md:text-7xl lg:text-8xl text-center"
            >
              Your Story
              <br />
              <span className="bg-gradient-to-r from-[#B58B20] via-[#D4AF37] to-[#B58B20] bg-clip-text text-transparent">
                Could Start Here.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.6,
              }}
              className="mt-8 max-w-xl text-lg leading-8 text-[#555555]"
            >
              {SITE.tagline}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
              }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <Button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent("open-registration"));
                }}
                className="bg-[#111111] text-white hover:bg-[#222222]"
              >
                Become Premium
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-sm text-[#555555]">
                ₹3,999 • Lifetime Membership
              </p>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-4 px-4"
            >
              {/* Verified Auditions */}
              <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm text-[#333333] shadow-sm">
                <ShieldCheck size={16} className="text-[#D4AF37]" />
                Verified Auditions
              </div>

              {/* Daily WhatsApp Updates */}
              <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm text-[#333333] shadow-sm">
                <MessageCircle size={16} className="text-[#D4AF37]" />
                Daily WhatsApp Updates
              </div>

              {/* Lifetime Membership */}
              <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm text-[#333333] shadow-sm">
                <ShieldCheck size={16} className="text-[#D4AF37]" />
                Lifetime Membership
              </div>
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT SIDE — EXACT 6-PHOTO EDITORIAL MASONRY GRID
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex w-full max-w-xl items-center justify-center -mt-6 sm:-mt-10 lg:-mt-16 xl:-mt-20"
          >
            {/* Ambient Radial Glow */}
            <div className="absolute h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />

            {/* 3D Perspective Container */}
            <div className="relative w-full" style={{ perspective: "1200px" }}>
              {/* OUTER WRAPPER — Slow Continuous Vertical Floating Animation */}
              <motion.div
                animate={{
                  y: [-8, 8, -8],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full"
              >
                {/* INNER CARD — Smooth 180deg 3D Y-Axis Hover Rotation */}
                <motion.div
                  whileHover={{
                    rotateY: -180,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  className="relative w-full overflow-visible rounded-[32px] border border-gray-200 bg-white p-8 shadow-xl transform-gpu cursor-pointer"
                >
                  {/* 3 Columns Masonry Grid */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-4">
                    {/* COLUMN 1 */}
                    <div className="flex flex-col gap-3 sm:gap-4">
                      {/* Photo 1 */}
                      <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-gray-200 bg-[#F7F7F5]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/images/actors/editorial_grid_1.png"
                          alt="High fashion editorial model"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      </div>

                      {/* Photo 2 */}
                      <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-gray-200 bg-[#F7F7F5]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/images/actors/editorial_grid_2.png"
                          alt="Editorial fashion model"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      </div>
                    </div>

                    {/* COLUMN 2 */}
                    <div className="flex flex-col gap-3 pt-5 sm:gap-4 sm:pt-8">
                      {/* Photo 3 */}
                      <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-[#D4AF37]/40 bg-[#F7F7F5]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/images/actors/editorial_grid_3.png"
                          alt="Indian commercial talent"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      </div>

                      {/* Photo 4 */}
                      <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-[#D4AF37]/40 bg-[#F7F7F5]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/images/actors/editorial_grid_4.png"
                          alt="The Suit Edit fashion model"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      </div>
                    </div>

                    {/* COLUMN 3 */}
                    <div className="flex flex-col gap-3 sm:gap-4">
                      {/* Photo 5 */}
                      <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-gray-200 bg-[#F7F7F5]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/images/actors/editorial_grid_5.png"
                          alt="Contemporary model"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      </div>

                      {/* Photo 6 */}
                      <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-gray-200 bg-[#F7F7F5]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/images/actors/editorial_grid_6.png"
                          alt="Denim style editorial model"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* FLOATING CARD 1 — MEMBERS 5,000+ */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -right-3 top-6 rounded-2xl border border-[#D4AF37]/30 bg-white px-5 py-4 shadow-lg"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[#A88416]">
                  Members
                </p>

                <h4 className="mt-2 text-2xl font-bold text-[#111111]">
                  5,000+
                </h4>
              </motion.div>

              {/* FLOATING CARD 2 — OPPORTUNITIES 2,000+ */}
              <motion.div
                animate={{
                  y: [8, -8, 8],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -left-4 bottom-6 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-lg"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[#A88416]">
                  Opportunities
                </p>

                <h4 className="mt-2 text-2xl font-bold text-[#111111]">
                  2,000+
                </h4>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
