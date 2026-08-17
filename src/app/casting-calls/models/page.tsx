import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Camera,
  Sparkles,
  Users,
} from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { CTASection } from "@/components/ui/cta-section";

const modelCategories = [
  {
    title: "Fashion Models",
    description:
      "Explore fashion-focused casting opportunities for models suitable for fashion productions and campaigns.",
    href: "/models/fashion-models/",
  },
  {
    title: "Commercial Models",
    description:
      "Explore commercial modeling opportunities for advertising, brands and promotional productions.",
    href: "/models/commercial-model/",
  },
  {
    title: "Male Models",
    description:
      "Explore casting opportunities for male models across relevant productions and campaigns.",
    href: "/models/male-models/",
  },
  {
    title: "Female Models",
    description:
      "Explore casting opportunities for female models across relevant productions and campaigns.",
    href: "/models/female-models/",
  },
  {
    title: "Fitness Models",
    description:
      "Explore modeling opportunities requiring fitness-focused talent and profiles.",
    href: "/models/fitness-models/",
  },
  {
    title: "Plus Size Models",
    description:
      "Explore modeling opportunities for plus-size talent across suitable productions and campaigns.",
    href: "/models/plus-size-models/",
  },
];

const profilePoints = [
  "Keep your model profile complete and current",
  "Use recent and clear photographs",
  "Mention relevant modeling experience and skills",
  "Keep your portfolio and measurements ready where applicable",
  "Provide accurate professional and contact information",
];

const applicationSteps = [
  {
    title: "Explore Model Casting Calls",
    description:
      "Browse available modeling opportunities and identify calls that match your profile.",
  },
  {
    title: "Review Requirements",
    description:
      "Read the casting details carefully and check the eligibility and profile requirements.",
  },
  {
    title: "Prepare Your Portfolio",
    description:
      "Keep your photographs, portfolio and other relevant modeling material current.",
  },
  {
    title: "Apply With Accurate Information",
    description:
      "Submit your application using current and accurate professional information.",
  },
];

export default function ModelCastingCallsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Model Casting Calls"
        title="Model Casting Call Listings"
        description="Explore modeling casting call opportunities across fashion, commercial, fitness and other model categories."
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
              label: "Models",
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
                Model Casting
              </p>

              <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
                Find modeling casting opportunities that match your profile
              </h2>

              <p className="mt-5 text-base leading-8 text-white/60">
                Explore model-focused casting opportunities and review the
                requirements of each opportunity before applying.
              </p>

              <p className="mt-4 text-base leading-8 text-white/60">
                Keep your photographs, portfolio and professional information
                current so your model profile accurately represents your work.
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
                  <Camera className="h-6 w-6" />
                </div>

                <h3 className="mt-6 font-display text-2xl text-white">
                  Keep your modeling profile ready
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  Make sure your photographs, portfolio and relevant modeling
                  information are current.
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

      {/* Model Categories */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Model Categories
            </p>

            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              Explore model casting categories
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              Explore the model categories available on the platform and choose
              the one that best matches your profile.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modelCategories.map((item, index) => (
            <Reveal key={item.href} delay={index * 0.05}>
              <Link
                href={item.href}
                className="group block h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/30"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                    <Sparkles className="h-5 w-5" />
                  </div>

                  <ArrowRight className="h-5 w-5 text-white/30 transition-transform group-hover:translate-x-1 group-hover:text-[#D4AF37]" />
                </div>

                <h3 className="mt-6 font-display text-xl text-white">
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
              How to approach a model casting call
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              Review each opportunity carefully and apply when the requirements
              match your profile.
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
                  Keep your model profile ready
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/55 md:text-base">
                  Keep the following information current when exploring model
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
              Individual casting opportunities can have their own requirements,
              eligibility criteria and selection processes. Registration or
              membership does not guarantee an audition, booking, employment or
              selection.
            </p>
          </div>
        </Reveal>
      </section>

      <CTASection
        eyebrow="Find Your Opportunity"
        title="Ready to explore model casting calls?"
        description="Keep your profile ready and explore opportunities that match your modeling experience."
        buttonLabel="Register Now"
        buttonHref="/register/"
      />
    </main>
  );
}
