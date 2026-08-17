import Link from "next/link";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  UserRound,
  Sparkles,
} from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { CTASection } from "@/components/ui/cta-section";

const profilePoints = [
  "Recent and clear profile photographs",
  "Accurate measurements and profile information",
  "Relevant modeling experience and skills",
  "Languages, training and special abilities",
  "Portfolio or professional social links where relevant",
];

const relatedCategories = [
  {
    title: "Female Models",
    description:
      "Explore the dedicated female model category for relevant modeling opportunities.",
    href: "/models/female-models/",
  },
  {
    title: "Fashion Models",
    description: "Explore fashion-focused modeling opportunities and profiles.",
    href: "/models/fashion-models/",
  },
  {
    title: "Fitness Models",
    description:
      "Explore the fitness model category for sports, wellness and lifestyle opportunities.",
    href: "/models/fitness-models/",
  },
];

export default function MaleModelsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Male Models"
        title="Male Model Casting & Registration"
        description="Explore the male model category and prepare a professional profile for relevant modeling opportunities."
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
              label: "Models",
              href: "/models/",
            },
            {
              label: "Male Models",
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
                Male Model Category
              </p>

              <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
                Present your modeling profile professionally
              </h2>

              <p className="mt-5 text-base leading-8 text-white/60">
                The male model category is designed for artists who want to
                present their modeling profile and explore relevant casting
                opportunities.
              </p>

              <p className="mt-4 text-base leading-8 text-white/60">
                Keep your photographs, measurements, experience, skills and
                portfolio information accurate and up to date.
              </p>

              <Link
                href="/register/"
                className="mt-8 inline-flex items-center rounded-xl bg-[#D4AF37] px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E2C04A] hover:shadow-lg hover:shadow-[#D4AF37]/20"
              >
                Register as a Model
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#D4AF37]/10 blur-3xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <UserRound className="h-6 w-6" />
                </div>

                <h3 className="mt-6 font-display text-2xl text-white">
                  Build a complete profile
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  Give casting teams a clear and accurate representation of your
                  modeling profile.
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

      {/* Profile Preparation */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Profile Preparation
            </p>

            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              What to include in your profile
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              Prepare clear and accurate information before creating or updating
              your modeling profile.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {profilePoints.map((point, index) => (
            <Reveal key={point} delay={index * 0.05}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-[#D4AF37]/30">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37]">
                  <CheckCircle2 className="h-4 w-4" />
                </div>

                <p className="mt-4 text-sm leading-7 text-white/65">{point}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Modeling Profile */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                <Camera className="h-6 w-6" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                  Professional Presentation
                </p>

                <h2 className="mt-3 font-display text-2xl text-white md:text-3xl">
                  Keep your profile current
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/55 md:text-base">
                  Use recent photographs and provide accurate profile
                  information. If your appearance, measurements, experience or
                  portfolio changes, keep your profile information updated.
                </p>
              </div>
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
              Explore other modeling categories
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {relatedCategories.map((item, index) => (
            <Reveal key={item.href} delay={index * 0.05}>
              <Link
                href={item.href}
                className="group block h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/30 hover:bg-white/[0.05]"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-xl text-white">
                    {item.title}
                  </h3>

                  <ArrowRight className="h-5 w-5 shrink-0 text-[#D4AF37] transition-transform group-hover:translate-x-1" />
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
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                <Sparkles className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                  Important
                </p>

                <h2 className="mt-3 font-display text-2xl text-white md:text-3xl">
                  Modeling opportunities do not guarantee selection.
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/55">
                  Individual modeling opportunities can have their own
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
        title="Ready to create your modeling profile?"
        description="Register your talent profile and explore male modeling opportunities available on the platform."
        buttonLabel="Register Now"
        buttonHref="/register/"
      />
    </main>
  );
}
