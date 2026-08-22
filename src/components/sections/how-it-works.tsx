"use client";

import { Reveal } from "@/components/ui/reveal";

type Step = {
  num: string;
  tag: string;
  title: string;
  body: string;
};

const STEPS: Step[] = [
  {
    num: "01",
    tag: "REGISTER",
    title: "Create your profile",
    body: "Start your artist registration in under two minutes.",
  },
  {
    num: "02",
    tag: "PAY SECURELY",
    title: "One-time payment",
    body: "Complete your lifetime membership via Razorpay, UPI or card.",
  },
  {
    num: "03",
    tag: "COMPLETE PROFILE",
    title: "Add your details",
    body: "So casting teams can find the right fit for each project.",
  },
  {
    num: "04",
    tag: "GO LIVE",
    title: "Join WhatsApp",
    body: "Start receiving verified, daily casting calls.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-b border-[#E2DDD3] bg-[#EFECE4] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
            The Journey
          </p>
          <h2 className="mt-3 font-serif text-3xl font-extrabold tracking-tight text-[#171717] sm:text-4xl md:text-5xl">
            How It Works
          </h2>
        </div>

        <Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <div
                key={step.num}
                className="group relative rounded-xl border border-[#E2DDD3] bg-[#F5F2EA] p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A059] hover:shadow-lg"
              >
                <span className="font-serif text-5xl font-extrabold text-[#C5A059]/40 transition duration-300 group-hover:text-[#C5A059]">
                  {step.num}
                </span>

                <div className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#6E2424]">
                  {step.tag}
                </div>

                <h3 className="mt-2 font-serif text-xl font-bold tracking-tight text-[#171717]">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-[#171717]/70">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}