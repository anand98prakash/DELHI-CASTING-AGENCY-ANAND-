"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const TESTIMONIALS = [
  {
    quote:
      "The registration process was smooth and I started receiving verified casting opportunities very quickly.",
    name: "Priya Sharma",
    role: "Aspiring Actor",
    city: "Delhi",
  },
  {
    quote:
      "Daily WhatsApp updates helped me stay informed about new casting calls. The experience has been professional throughout.",
    name: "Rohan Verma",
    role: "Model",
    city: "Mumbai",
  },
  {
    quote:
      "I appreciate the genuine opportunities and the support provided during my membership journey.",
    name: "Simran Kaur",
    role: "Content Creator",
    city: "Pune",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="relative overflow-hidden border-b border-[#E2DDD3] bg-[#EFECE4] py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-14 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
              The Experience
            </p>
            <h2 className="mt-3 font-serif text-3xl font-extrabold tracking-tight text-[#171717] sm:text-4xl md:text-5xl lg:text-6xl">
              What Our Members Say
            </h2>
          </div>
        </Reveal>

        <div className="relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-2xl"
            >
              <div className="relative overflow-hidden rounded-xl border border-[#E2DDD3] bg-[#F5F2EA] p-8 shadow-lg sm:p-12">
                <Quote
                  className="absolute right-6 top-6 text-[#C5A059]/20"
                  size={56}
                />

                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-[#C5A059] text-[#C5A059]"
                    />
                  ))}
                </div>

                <p className="mt-6 font-serif text-lg font-normal italic leading-relaxed text-[#171717]/85 sm:text-xl">
                  “{TESTIMONIALS[index].quote}”
                </p>

                <div className="mt-8 border-t border-[#E2DDD3] pt-6">
                  <h4 className="font-serif text-lg font-bold text-[#171717]">
                    {TESTIMONIALS[index].name}
                  </h4>
                  <p className="text-xs text-[#171717]/60">
                    {TESTIMONIALS[index].role} • {TESTIMONIALS[index].city}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 sm:-left-12 flex h-10 w-10 items-center justify-center rounded-full border border-[#E2DDD3] bg-[#F5F2EA] text-[#171717] transition hover:border-[#C5A059] hover:bg-[#C5A059]"
          >
            ←
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 sm:-right-12 flex h-10 w-10 items-center justify-center rounded-full border border-[#E2DDD3] bg-[#F5F2EA] text-[#171717] transition hover:border-[#C5A059] hover:bg-[#C5A059]"
          >
            →
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                i === index ? "w-8 bg-[#C5A059]" : "w-2.5 bg-[#E2DDD3]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}