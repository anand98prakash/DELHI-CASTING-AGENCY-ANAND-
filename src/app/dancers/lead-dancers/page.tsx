import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Crown,
  Music2,
  Sparkles,
  Star,
} from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { CTASection } from "@/components/ui/cta-section";

const profilePoints = [
  "Recent and clear dance photographs",
  "Relevant dance styles and performance skills",
  "Lead or featured performance experience where applicable",
  "Stage, film, music video or production experience",
  "Accurate profile and contact information",
];

const performanceAreas = [
  {
    title: "Lead Performances",
    description:
      "Featured dance performances where the dancer has a prominent role within a production.",
  },
  {
    title: "Music Videos",
    description:
      "Lead or featured dancers for music videos and choreography-focused productions.",
  },
  {
    title: "Film Productions",
    description:
      "Featured dance talent for film sequences and performance-based scenes.",
  },
  {
    title: "Live Performances",
    description:
      "Dancers with experience in stage, event and other live performance environments.",
  },
];

const preparationSteps = [
  {
    title: "Show Your Strongest Work",
    description:
      "Present your strongest and most relevant dance experience clearly in your profile.",
  },
  {
    title: "Mention Your Dance Styles",
    description:
      "List the dance forms and styles you are trained or experienced in.",
  },
  {
    title: "Use Recent Photos",
    description:
      "Upload clear and recent photographs that accurately represent your current appearance.",
  },
  {
    title: "Add Performance Experience",
    description:
      "Include relevant lead, featured, stage, film, music video or production experience where applicable.",
  },
];

const relatedPages = [
  {
    title: "Dancers",
    description:
      "Return to the main dancer talent hub and explore dancer categories.",
    href: "/dancers/",
  },
  {
    title: "Background Dancers",
    description:
      "Explore background and group dancer casting for films and videos.",
    href: "/dancers/background-dancers/",
  },
];

export default function LeadDancersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Lead Dancers"
        title="Lead & Featured Dancer Casting"
        description="Explore lead and featured dancer opportunities for films, music videos, performances and productions."
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
              label: "Dancers",
              href: "/dancers/",
            },
            {
              label: "Lead Dancers",
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
                Lead / Featured Dancers
              </p>

              <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
                Showcase your lead and featured dance profile
              </h2>

              <p className="mt-5 text-base leading-8 text-white/60">
                This category is focused on lead and featured dancers interested
                in opportunities where dance performance plays a prominent role.
              </p>

              <p className="mt-4 text-base leading-8 text-white/60">
                Present your dance styles, performance skills and relevant
                experience accurately so your profile reflects your current
                abilities.
              </p>

              <Link
                href="/register/"
                className="mt-8 inline-flex items-center rounded-xl bg-[#D4AF37] px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E2C04A] hover:shadow-lg hover:shadow-[#D4AF37]/20"
              >
                Register as a Dancer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#D4AF37]/10 blur-3xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Crown className="h-6 w-6" />
                </div>

                <h3 className="mt-6 font-display text-2xl text-white">
                  Featured performance profile
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  Highlight your strongest dance skills, styles and relevant
                  lead or featured performance experience.
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

      {/* Performance Areas */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Performance Areas
            </p>

            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              Lead and featured dance opportunities
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              This category focuses on dancers suitable for prominent
              performance roles across different production formats.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {performanceAreas.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-[#D4AF37]/30">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Music2 className="h-5 w-5" />
                </div>

                <h3 className="mt-5 font-display text-xl text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
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
              Prepare your lead dancer profile
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              A strong profile should clearly communicate your dance ability,
              performance style and relevant experience.
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

      {/* Checklist */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                <Star className="h-6 w-6" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                  Profile Checklist
                </p>

                <h2 className="mt-3 font-display text-2xl text-white md:text-3xl">
                  Information to keep ready
                </h2>
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

      {/* Related Categories */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Explore More
            </p>

            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              Explore dancer categories
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {relatedPages.map((item, index) => (
            <Reveal key={item.href} delay={index * 0.06}>
              <Link
                href={item.href}
                className="group block h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/30"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-xl text-white">
                    {item.title}
                  </h3>

                  <ArrowRight className="h-5 w-5 text-[#D4AF37] transition-transform group-hover:translate-x-1" />
                </div>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  {item.description}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Important Notice */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">
        <Reveal>
          <div className="rounded-3xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] p-7 md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Important
            </p>

            <h2 className="mt-4 font-display text-2xl text-white md:text-3xl">
              Registration does not guarantee selection.
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/55">
              Individual casting opportunities can have their own requirements
              and selection processes. Registration or membership does not
              guarantee auditions, roles, bookings, employment or selection.
            </p>
          </div>
        </Reveal>
      </section>

      <CTASection
        eyebrow="Start Your Journey"
        title="Ready to showcase your dance profile?"
        description="Register your talent profile and explore relevant lead and featured dancer opportunities."
        buttonLabel="Register Now"
        buttonHref="/register/"
      />
    </main>
  );
}
