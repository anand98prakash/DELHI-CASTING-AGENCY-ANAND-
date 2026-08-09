

"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, MessageCircle, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

export function Hero() {
  // const scrollToPricing = () => {
  //   document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#090909]"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15),transparent_60%)]" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />

      {/* Spotlight */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[150px]"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-16 px-6 pt-32 lg:flex-row lg:px-10">
        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-center lg:text-left"
        >
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm text-[#D4AF37] backdrop-blur-md">
              <Sparkles size={15} />
              <span>Verified Casting Opportunities</span>
            </div>
          </div>

          {/* Brand */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mb-6 text-base sm:text-lg uppercase tracking-[0.35em] text-white/50 text-center"
          >
            WAY TO{" "}
            {/* <span
              className="block mt-2 text-4xl sm:text-5xl md:text-6xl font-[var(--font-fredoka)] font-bold tracking-widest"
              style={{
                WebkitTextStroke: "1.5px #D4AF37",
                color: "#111", // halka fill (pure black nahi)
                textShadow: `
      0 0 10px rgba(212,175,55,0.5),
      0 0 25px rgba(212,175,55,0.3)
    `,
              }}
            >
              BOLLYWOOD
            </span> */}
            <span className="block mt-2 text-4xl sm:text-5xl md:text-6xl font-[var(--font-fredoka)] font-bold tracking-widest bg-gradient-to-r from-yellow-300 via-[#D4AF37] to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]">
              BOLLYWOOD
            </span>
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl font-bold leading-[1.1] text-white md:text-7xl lg:text-8xl text-center"
          >
            Your Story
            <br />
            <span className="bg-gradient-to-r from-[#D4AF37] via-yellow-300 to-[#D4AF37] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(212,175,55,0.25)]">
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
            className="mt-8 max-w-xl text-lg leading-8 text-white/65"
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
            {/* <Button onClick={scrollToPricing}>
              Become Premium
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button> */}
            <Button
              onClick={() => {
                window.dispatchEvent(new CustomEvent("open-registration"));
              }}
            >
              Become Premium
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <p className="text-sm text-white/50">
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
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white/80 backdrop-blur-md">
              <ShieldCheck size={16} className="text-[#D4AF37]" />
              Verified Auditions
            </div>

            {/* Daily WhatsApp Updates */}
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white/80 backdrop-blur-md">
              <MessageCircle size={16} className="text-[#D4AF37]" />
              Daily WhatsApp Updates
            </div>

            {/* Lifetime Membership (FIXED - icon added) */}
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white/80 backdrop-blur-md">
              <ShieldCheck size={16} className="text-[#D4AF37]" />
              Lifetime Membership
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative flex w-full max-w-xl items-center justify-center"
        >
          {/* Glow */}

          <div className="absolute h-[420px] w-[420px] rounded-full bg-[#D4AF37]/15 blur-[120px]" />

          {/* Main Glass Card */}

          <div className="relative w-full overflow-visible rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src="/videos/hero.mp4" type="video/mp4" />
              </video>

              {/* Dark Overlay */}

              {/* <div className="absolute inset-0 bg-black/5" /> */}

              {/* Content */}

              {/* <div className="relative z-10 flex h-full flex-col items-center justify-end pb-16 px-8  text-center">
                <h3 className="text-3xl font-bold text-white">
                  Your Next Audition
                </h3>

                <p className="mt-4 max-w-sm leading-7 text-white/75">
                  Verified casting opportunities for Bollywood, OTT, TV shows,
                  commercials and fashion projects.
                </p>
              </div> */}
              <div className="relative z-10 flex h-full flex-col items-center justify-end pb-14 px-8 text-center">
                <div className="rounded-2xl bg-black/40 px-6 py-5 backdrop-blur-md">
                  <h3 className="text-4xl font-bold text-white">
                    Your Next Audition
                  </h3>

                  <p className="mt-3 max-w-xs text-base leading-7 text-white/80">
                    Verified casting opportunities for Bollywood, OTT, TV shows,
                    commercials and fashion projects.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card */}

            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -right-3 top-6 rounded-2xl border border-[#D4AF37]/30 bg-black/70 px-5 py-4 backdrop-blur-xl"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                Members
              </p>

              <h4 className="mt-2 text-2xl font-bold text-white">5,000+</h4>
            </motion.div>

            <motion.div
              animate={{
                y: [8, -8, 8],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute -left-4 bottom-6 rounded-2xl border border-white/10 bg-black/70 px-5 py-4 backdrop-blur-xl"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                Opportunities
              </p>

              <h4 className="mt-2 text-2xl font-bold text-white">2,000+</h4>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-white/40">
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          className="h-10 w-px bg-gradient-to-b from-[#D4AF37] to-transparent"
        />
      </motion.div> */}
    </section>
  );
}