import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clapperboard,
  Mic2,
  Music2,
  Sparkles,
  Users,
} from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { CTASection } from "@/components/ui/cta-section";

const categories = [
  {
    title: "Actors",
    description:
      "Explore casting calls and opportunities for actors across different productions.",
    href: "/casting-calls/actors/",
    icon: Clapperboard,
  },
  {
    title: "Models",
    description:
      "Explore modeling casting calls for fashion, commercial and other productions.",
    href: "/casting-calls/models/",
    icon: Sparkles,
  },
  {
    title: "Influencers",
    description:
      "Explore creator and influencer casting calls for digital and brand campaigns.",
    href: "/casting-calls/influencers/",
    icon: Users,
  },
  {
    title: "Dancers",
    description:
      "Explore dance casting calls for films, videos, performances and productions.",
    href: "/casting-calls/dancers/",
    icon: Music2,
  },
  {
    title: "Voice Artists",
    description:
      "Explore voice artist casting calls for dubbing, radio and audio productions.",
    href: "/casting-calls/voice-artists/",
    icon: Mic2,
  },
];

const profilePoints = [
  "Keep your talent profile complete and current",
  "Select the talent category that matches your skills",
  "Review casting requirements before applying",
  "Keep relevant photographs, videos or audio samples ready",
  "Provide accurate professional and contact information",
];

const steps = [
  {
    title: "Explore Casting Calls",
    description:
      "Browse the available casting categories and find opportunities relevant to your talent profile.",
  },
  {
    title: "Review Requirements",
    description:
      "Check the requirements and details of a casting opportunity before deciding to apply.",
  },
  {
    title: "Prepare Your Profile",
    description:
      "Make sure your photographs, videos, audio samples and professional information are current.",
  },
  {
    title: "Apply When Suitable",
    description:
      "Submit your application when your profile and experience match the requirements of the opportunity.",
  },
];

export default function CastingCallsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Casting Calls"
        title="Casting Calls & Opportunities"
        description="Explore casting call categories for actors, models, influencers, dancers and voice artists."
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
                Casting Call Listing Hub
              </p>

              <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
                Find casting opportunities that match your talent
              </h2>

              <p className="mt-5 text-base leading-8 text-white/60">
                The Casting Calls section brings together opportunities across
                the main talent categories. Explore the category that best
                matches your skills and professional profile.
              </p>

              <p className="mt-4 text-base leading-8 text-white/60">
                Always review the individual requirements of a casting call
                before applying and make sure your profile information is
                accurate and current.
              </p>

              <Link
                href="/register/"
                className="mt-8 inline-flex items-center rounded-xl bg-[#D4AF37] px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E2C04A] hover:shadow-lg hover:shadow-[#D4AF37]/20"
              >
                Register Your Profile
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#D4AF37]/10 blur-3xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Clapperboard className="h-6 w-6" />
                </div>

                <h3 className="mt-6 font-display text-2xl text-white">
                  Explore by talent category
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  Find the casting category that matches your skills and
                  experience.
                </p>

                <div className="mt-6 space-y-3">
                  {categories.slice(0, 3).map((category) => (
                    <div
                      key={category.href}
                      className="flex items-center gap-3 text-sm text-white/65"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D4AF37]" />
                      <span>{category.title}</span>
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
              Casting Categories
            </p>

            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              Explore casting calls
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              Choose a category to explore the relevant casting call listings.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <Reveal key={category.href} delay={index * 0.05}>
                <Link
                  href={category.href}
                  className="group block h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/35 hover:bg-white/[0.05]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <ArrowRight className="h-5 w-5 text-white/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#D4AF37]" />
                  </div>

                  <h3 className="mt-6 font-display text-xl text-white">
                    {category.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {category.description}
                  </p>

                  <div className="mt-6 inline-flex items-center text-sm font-semibold text-[#D4AF37]">
                    View Casting Calls
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Getting Started
            </p>

            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              How to approach a casting call
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              Keep your profile prepared and review each opportunity carefully
              before submitting an application.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {steps.map((step, index) => (
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
                  Keep your profile ready
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/55 md:text-base">
                  A current and accurate profile makes it easier to review
                  opportunities that match your talent.
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
              Review every casting call carefully.
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/55">
              Each casting opportunity may have its own requirements,
              eligibility criteria, application process and selection
              conditions. Registration or membership does not guarantee an
              audition, booking, employment or selection.
            </p>
          </div>
        </Reveal>
      </section>

      <CTASection
        eyebrow="Find Your Opportunity"
        title="Ready to explore casting calls?"
        description="Explore the category that matches your talent and keep your profile ready for suitable opportunities."
        buttonLabel="Register Now"
        buttonHref="/register/"
      />
    </main>
  );
}
