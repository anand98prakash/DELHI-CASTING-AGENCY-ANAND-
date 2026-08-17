import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Headphones,
  Languages,
  Mic2,
} from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { CTASection } from "@/components/ui/cta-section";

const profilePoints = [
  "Languages and dialects you can perform",
  "Clear and recent voice samples",
  "Dubbing or voiceover experience where applicable",
  "Voice styles and performance strengths",
  "Accurate professional and contact information",
];

const voiceAreas = [
  {
    title: "Language Voiceover",
    description:
      "Voice talent for productions requiring clear and expressive language-based voiceover.",
    icon: Languages,
  },
  {
    title: "Dubbing",
    description:
      "Voice talent for dubbing content across different languages and production formats.",
    icon: Headphones,
  },
  {
    title: "Character Voices",
    description:
      "Performers with suitable vocal range and expression for character-based voice work.",
    icon: Mic2,
  },
  {
    title: "Multilingual Talent",
    description:
      "Voice artists who can work across multiple languages or regional language requirements.",
    icon: Globe2,
  },
];

const preparationSteps = [
  {
    title: "List Your Languages",
    description:
      "Clearly mention the languages and dialects you can speak and perform professionally.",
  },
  {
    title: "Prepare Voice Samples",
    description:
      "Keep clear and relevant audio samples ready to demonstrate your voice and delivery.",
  },
  {
    title: "Mention Your Voice Skills",
    description:
      "Describe your vocal range, styles and performance strengths accurately.",
  },
  {
    title: "Add Relevant Experience",
    description:
      "Include previous dubbing, voiceover, narration or related audio work where applicable.",
  },
];

export default function DubbingArtistsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Dubbing Artists"
        title="Dubbing & Language Voiceover Casting"
        description="Explore dubbing and language voiceover opportunities for voice artists across different production formats."
      />

      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <Breadcrumb
          items={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Talents",
              href: "/talents/",
            },
            {
              label: "Voice Artists",
              href: "/voice-artists/",
            },
            {
              label: "Dubbing Artists",
            },
          ]}
        />
      </div>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                Dubbing / Language Voiceover
              </p>

              <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
                Showcase your language and dubbing voice profile
              </h2>

              <p className="mt-5 text-base leading-8 text-white/60">
                This category is focused on dubbing and language voiceover
                talent for productions that require expressive and suitable
                voices across different languages.
              </p>

              <p className="mt-4 text-base leading-8 text-white/60">
                Present your languages, voice skills, samples and relevant
                experience accurately so your profile reflects your current
                abilities.
              </p>

              <Link
                href="/register/"
                className="mt-8 inline-flex items-center rounded-xl bg-[#D4AF37] px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E2C04A] hover:shadow-lg hover:shadow-[#D4AF37]/20"
              >
                Register as a Voice Artist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#D4AF37]/10 blur-3xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Languages className="h-6 w-6" />
                </div>

                <h3 className="mt-6 font-display text-2xl text-white">
                  Build a language-ready voice profile
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  Highlight your languages, voice qualities, samples and
                  relevant dubbing or voiceover experience.
                </p>

                <div className="mt-6 space-y-3">
                  {profilePoints.slice(0, 3).map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 text-sm text-white/65"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Voice Areas */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Voice Work
            </p>

            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              Dubbing and language voiceover areas
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              Present your voice skills according to the languages, styles and
              types of voice work you can perform.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {voiceAreas.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-[#D4AF37]/30">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 font-display text-xl text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Profile Preparation */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Profile Preparation
            </p>

            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              Prepare your dubbing artist profile
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              A strong dubbing profile should clearly communicate your
              languages, vocal ability, samples and relevant experience.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {preparationSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-sm font-semibold text-[#D4AF37]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="font-display text-xl text-white">
                    {step.title}
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Profile Checklist */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                <Headphones className="h-6 w-6" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                  Profile Checklist
                </p>

                <h2 className="mt-3 font-display text-2xl text-white md:text-3xl">
                  Information to keep ready
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/55 md:text-base">
                  Prepare the information that best represents your dubbing and
                  language voiceover profile.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {profilePoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" />

                  <span className="text-sm leading-7 text-white/65">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Related Category */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <Link
            href="/voice-artists/radio-voice-artists/"
            className="group block rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/30"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                  Explore More
                </p>

                <h2 className="mt-3 font-display text-2xl text-white md:text-3xl">
                  Radio Voice Artists
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/55">
                  Explore radio and audio advertising voice talent.
                </p>
              </div>

              <div className="inline-flex shrink-0 items-center text-sm font-semibold text-[#D4AF37]">
                View Category
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </Reveal>
      </section>

      <CTASection
        eyebrow="Start Your Journey"
        title="Ready to showcase your voice?"
        description="Register your talent profile and explore relevant dubbing and language voiceover opportunities."
        buttonLabel="Register Now"
        buttonHref="/register/"
      />
    </main>
  );
}
