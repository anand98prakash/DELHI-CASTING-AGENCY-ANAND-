import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, UserPlus } from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { CTASection } from "@/components/ui/cta-section";

const profilePoints = [
  "Recent and clear photographs",
  "Accurate personal and profile information",
  "Acting skills, interests and abilities",
  "Languages and performance skills",
  "Portfolio or social links where relevant",
];

const preparationSteps = [
  {
    title: "Create Your Profile",
    description:
      "Provide your basic information and create a clear representation of your talent.",
  },
  {
    title: "Add Your Photos",
    description:
      "Use recent, clear and appropriate photographs that represent your current appearance.",
  },
  {
    title: "Show Your Skills",
    description:
      "Mention relevant acting skills, languages, training and other performance abilities.",
  },
  {
    title: "Explore Opportunities",
    description:
      "Review casting opportunities and check their individual requirements before applying.",
  },
];

export default function FreshFacesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Fresh Faces"
        title="Fresh Face Actor Casting & Registration"
        description="A dedicated category for aspiring actors who are beginning their professional journey."
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
              label: "Actors",
              href: "/actors/",
            },
            {
              label: "Fresh Faces",
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
                For Aspiring Actors
              </p>

              <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
                Start your acting journey with a professional profile
              </h2>

              <p className="mt-5 text-base leading-8 text-white/60">
                The Fresh Faces category is intended for aspiring actors and
                talent who are beginning their professional journey and may not
                yet have extensive industry experience.
              </p>

              <p className="mt-4 text-base leading-8 text-white/60">
                Previous professional work is not the only way to present your
                potential. Your profile can communicate your skills, interests,
                training and other relevant abilities.
              </p>

              <Link
                href="/register/"
                className="mt-8 inline-flex items-center rounded-xl bg-[#D4AF37] px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E2C04A] hover:shadow-lg hover:shadow-[#D4AF37]/20"
              >
                Register Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] p-8">
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#D4AF37]/10 blur-3xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <UserPlus className="h-6 w-6" />
                </div>

                <h3 className="mt-6 font-display text-2xl text-white">
                  No extensive experience required
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  Fresh talent can create a profile and present their skills and
                  potential professionally.
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

      {/* How to Prepare */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Getting Started
            </p>

            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              Prepare your profile
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              A professional profile helps you communicate your talent clearly
              when exploring relevant opportunities.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {preparationSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.05}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-[#D4AF37]/30">
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
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                Profile Checklist
              </p>

              <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
                Information worth keeping ready
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/55 md:text-base">
                Prepare accurate information before creating or updating your
                artist profile.
              </p>
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
                  Fresh face does not mean guaranteed selection.
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/55">
                  Individual casting opportunities can have their own
                  requirements and selection processes. Creating a profile or
                  registering does not guarantee auditions, roles, employment or
                  selection.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <CTASection
        eyebrow="Start Your Journey"
        title="Ready to showcase your potential?"
        description="Create your artist profile and present your skills, interests and portfolio professionally."
        buttonLabel="Register Now"
        buttonHref="/register/"
      />
    </main>
  );
}
