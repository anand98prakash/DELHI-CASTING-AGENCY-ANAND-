import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Music2,
  Sparkles,
  Users,
} from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { CTASection } from "@/components/ui/cta-section";

const dancerCategories = [
  {
    title: "Background Dancers",
    description:
      "Explore background and group dancer casting for films, music videos and other productions.",
    href: "/dancers/background-dancers/",
  },
  {
    title: "Lead Dancers",
    description:
      "Explore lead and featured dancer casting for performances and productions.",
    href: "/dancers/lead-dancers/",
  },
];

const profilePoints = [
  "Recent and clear dance photographs or videos",
  "Accurate dance profile and experience information",
  "Relevant dance styles and performance skills",
  "Previous stage, film, music video or event experience",
  "Professional portfolio or performance links where relevant",
];

const preparationSteps = [
  {
    title: "Show Your Dance Skills",
    description:
      "Present your strongest dance styles, performance abilities and relevant training clearly.",
  },
  {
    title: "Keep Your Profile Current",
    description:
      "Use recent photographs and keep your experience and skill information accurate.",
  },
  {
    title: "Mention Dance Styles",
    description:
      "Clearly list the dance forms and styles you are trained or experienced in.",
  },
  {
    title: "Add Relevant Experience",
    description:
      "Include previous performances, productions, music videos, stage shows or other relevant work.",
  },
];

export default function DancersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Dancers"
        title="Dancer Casting & Registration"
        description="Explore dancer talent categories for films, music videos, performances, events and other productions."
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
                Dancer Talent
              </p>

              <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
                Showcase your dance and performance profile
              </h2>

              <p className="mt-5 text-base leading-8 text-white/60">
                The Dancers section is designed for performers interested in
                dance-related opportunities across films, music videos,
                performances, events and other productions.
              </p>

              <p className="mt-4 text-base leading-8 text-white/60">
                Explore the dedicated Background Dancers and Lead Dancers
                categories and present your dance experience, styles and
                performance skills accurately.
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
                  <Music2 className="h-6 w-6" />
                </div>

                <h3 className="mt-6 font-display text-2xl text-white">
                  Build a performance-ready profile
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  Highlight your dance styles, experience, skills and relevant
                  performance work.
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

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Dancer Categories
            </p>

            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              Choose your dancer category
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              Explore the dancer category that best matches your performance
              experience and the type of work you are interested in.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {dancerCategories.map((category, index) => (
            <Reveal key={category.href} delay={index * 0.08}>
              <Link
                href={category.href}
                className="group block h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/35 hover:bg-white/[0.05]"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                    <Music2 className="h-6 w-6" />
                  </div>

                  <ArrowRight className="h-5 w-5 text-white/35 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#D4AF37]" />
                </div>

                <h3 className="mt-7 font-display text-2xl text-white">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  {category.description}
                </p>

                <div className="mt-6 inline-flex items-center text-sm font-semibold text-[#D4AF37]">
                  Explore Category
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Preparation */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Profile Preparation
            </p>

            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              Prepare your dancer profile
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              A clear dancer profile should communicate your dance styles,
              experience, skills and performance background.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {preparationSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-[#D4AF37]/30">
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
                <Users className="h-6 w-6" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                  Profile Checklist
                </p>

                <h2 className="mt-3 font-display text-2xl text-white md:text-3xl">
                  Information to keep ready
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/55 md:text-base">
                  Prepare the information that best represents your dance and
                  performance profile.
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

      {/* Important Notice */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">
        <Reveal>
          <div className="rounded-3xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] p-7 md:p-9">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                <Sparkles className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                  Important
                </p>

                <h2 className="mt-3 font-display text-2xl text-white md:text-3xl">
                  Dancer registration does not guarantee selection.
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/55">
                  Individual casting opportunities can have their own
                  requirements, eligibility criteria and selection processes.
                  Registration or membership does not guarantee auditions,
                  bookings, employment or selection.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <CTASection
        eyebrow="Start Your Journey"
        title="Ready to showcase your dance profile?"
        description="Register your talent profile and explore relevant dancer casting opportunities."
        buttonLabel="Register Now"
        buttonHref="/register/"
      />
    </main>
  );
}
