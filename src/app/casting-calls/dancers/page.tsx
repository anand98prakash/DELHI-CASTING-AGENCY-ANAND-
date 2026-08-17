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
    title: "Lead Dancers",
    description:
      "Explore casting opportunities for lead and featured dancers in productions and performances.",
    href: "/dancers/lead-dancers/",
  },
  {
    title: "Background Dancers",
    description:
      "Explore opportunities for background and group dancers in films, music videos and productions.",
    href: "/dancers/background-dancers/",
  },
];

const profilePoints = [
  "Keep your dancer profile complete and current",
  "Use recent and clear dance photographs",
  "Mention your dance styles and performance skills",
  "Keep relevant performance videos or portfolio material ready",
  "Provide accurate professional and contact information",
];

const applicationSteps = [
  {
    title: "Explore Dancer Casting Calls",
    description:
      "Browse available dance opportunities and identify casting calls that match your skills.",
  },
  {
    title: "Review Requirements",
    description:
      "Read the casting details carefully and check the required dance styles, experience and other criteria.",
  },
  {
    title: "Prepare Your Dance Material",
    description:
      "Keep your photographs, performance videos and relevant dance portfolio material current.",
  },
  {
    title: "Apply With Accurate Information",
    description:
      "Submit your application using current and accurate professional information.",
  },
];

export default function DancerCastingCallsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Dancer Casting Calls"
        title="Dancer Casting Call Listings"
        description="Explore dance casting opportunities for lead dancers, featured performers and background dancers."
      />

      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <Breadcrumb
          items={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Casting Calls",
              href: "/casting-calls/",
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
                Dancer Casting
              </p>

              <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
                Find dance casting opportunities that match your skills
              </h2>

              <p className="mt-5 text-base leading-8 text-white/60">
                Explore dancer-focused casting opportunities for films, music
                videos, performances and other productions.
              </p>

              <p className="mt-4 text-base leading-8 text-white/60">
                Review each casting opportunity carefully and make sure your
                dance styles, photographs and performance material accurately
                represent your current abilities.
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
                  Keep your dancer profile ready
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  Make sure your dance styles, photographs and performance
                  material are current.
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

      {/* Dancer Categories */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Dancer Categories
            </p>

            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              Explore dancer casting categories
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              Choose the dancer category that best matches your performance
              experience and skills.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {dancerCategories.map((item, index) => (
            <Reveal key={item.href} delay={index * 0.08}>
              <Link
                href={item.href}
                className="group block h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/35 hover:bg-white/[0.05]"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                    <Sparkles className="h-6 w-6" />
                  </div>

                  <ArrowRight className="h-5 w-5 text-white/30 transition-transform group-hover:translate-x-1 group-hover:text-[#D4AF37]" />
                </div>

                <h3 className="mt-7 font-display text-2xl text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  {item.description}
                </p>

                <div className="mt-6 inline-flex items-center text-sm font-semibold text-[#D4AF37]">
                  Explore Category
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Application Process */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Casting Process
            </p>

            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              How to approach a dancer casting call
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              Review each opportunity carefully and apply when the requirements
              match your dance profile.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {applicationSteps.map((step, index) => (
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
                <Users className="h-6 w-6" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                  Profile Checklist
                </p>

                <h2 className="mt-3 font-display text-2xl text-white md:text-3xl">
                  Keep your dancer profile ready
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/55 md:text-base">
                  Keep the following information current when exploring dancer
                  casting opportunities.
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
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Important
            </p>

            <h2 className="mt-4 font-display text-2xl text-white md:text-3xl">
              Review each casting call carefully.
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/55">
              Individual dance opportunities can have their own requirements,
              eligibility criteria and selection processes. Registration or
              membership does not guarantee an audition, booking, employment or
              selection.
            </p>
          </div>
        </Reveal>
      </section>

      <CTASection
        eyebrow="Find Your Opportunity"
        title="Ready to explore dancer casting calls?"
        description="Keep your dance profile ready and explore opportunities that match your performance skills."
        buttonLabel="Register Now"
        buttonHref="/register/"
      />
    </main>
  );
}
