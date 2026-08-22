"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const FAQS = [
  {
    q: "Is this a one-time payment?",
    a: "Yes. Your membership requires only a one-time payment. There are no monthly subscriptions or renewal charges.",
  },
  {
    q: "Does membership guarantee a role?",
    a: "No. Membership provides access to verified casting opportunities and related services. Final selection depends entirely on the production team's requirements and your audition performance.",
  },
  {
    q: "Can beginners join?",
    a: "Absolutely. Whether you're just starting your acting journey or already have experience, you can become a member and apply for suitable opportunities.",
  },
  {
    q: "How will I receive casting updates?",
    a: "Verified casting opportunities are shared regularly through our official WhatsApp community and other communication channels after successful registration.",
  },
  {
    q: "What happens after registration?",
    a: "After your registration is completed, you'll receive your membership details along with instructions to access verified casting opportunities.",
  },
  {
    q: "Which projects can I apply for?",
    a: "Depending on the available opportunities, members may apply for Bollywood films, OTT platforms, television shows, advertisements, music videos, fashion shows and catalogue shoots.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden border-b border-[#E2DDD3] bg-[#F5F2EA] py-20 sm:py-28">
      <div className="relative mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A059]/40 bg-[#EFECE4] px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6A50]">
              <Sparkles size={14} className="text-[#C5A059]" />
              Need Help?
            </div>

            <h2 className="mt-5 font-serif text-3xl font-extrabold tracking-tight text-[#171717] sm:text-4xl md:text-5xl lg:text-6xl">
              Frequently Asked <br />
              <span className="italic font-normal text-[#C5A059]">
                Questions
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base font-normal leading-relaxed text-[#171717]/70">
              Find answers to the most common questions about our premium
              membership, verified casting opportunities and registration
              process.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-14 space-y-4">
            {FAQS.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-xl border border-[#E2DDD3] bg-[#EFECE4] transition duration-300 hover:border-[#C5A059]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${index}`}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-serif text-lg font-bold text-[#171717]"
                  >
                    <span>{item.q}</span>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E2DDD3] bg-[#F5F2EA] text-[#C5A059]">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-[#E2DDD3] px-6 py-5 text-xs font-normal leading-relaxed text-[#171717]/75 sm:text-sm">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}