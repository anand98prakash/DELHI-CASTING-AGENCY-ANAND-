import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  BriefcaseBusiness,
} from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { CTASection } from "@/components/ui/cta-section";

const profilePoints = [
  "Recent and professional profile photographs",
  "Accurate acting credits and professional experience",
  "Relevant acting skills and performance abilities",
  "Languages, training and special skills",
  "Portfolio, showreel or professional social links where relevant",
];

const profileSections = [
  {
    title: "Professional Experience",
    description:
      "Present your previous acting work clearly, including relevant roles, projects, training or professional experience.",
  },
  {
    title: "Skills & Abilities",
    description:
      "Highlight acting techniques, languages, dance, theatre, voice skills or other abilities relevant to casting.",
  },
  {
    title: "Portfolio",
    description:
      "Keep your photographs, showreel and other professional portfolio information current and representative.",
  },
  {
    title: "Casting Preferences",
    description:
      "Review individual casting requirements carefully and apply only where your profile is relevant.",
  },
];

const relatedCategories = [
  {
    title: "Male Actors",
    description: "Explore the dedicated male actor category.",
    href: "/actors/male-actors/",
  },
  {
    title: "Female Actors",
    description: "Explore the dedicated female actor category.",
    href: "/actors/female-actors/",
  },
  {
    title: "Fresh Faces",
    description:
      "Explore the category for aspiring actors beginning their professional journey.",
    href: "/actors/fresh-faces/",
  },
];

export default function ExperiencedActorsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Experienced Actors"
        title="Experienced Actor Casting & Registration"
        description="A dedicated category for actors with previous professional experience who want to present their profile and explore relevant opportunities."
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
              label: "Experienced Actors",
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
                Professional Actor Category
              </p>

              <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
                Present your professional experience clearly
              </h2>

              <p className="mt-5 text-base leading-8 text-white/60">
                The Experienced Actors category is designed for performers who
                already have professional acting experience and want to present
                their background through a structured talent profile.
              </p>

              <p className="mt-4 text-base leading-8 text-white/60">
                Keep your credits, skills, photographs and portfolio information
                accurate and up to date so that your profile represents your
                current professional experience.
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
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#D4AF37]/10 blur-3xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <BriefcaseBusiness className="h-6 w-6" />
                </div>

                <h3 className="mt-6 font-display text-2xl text-white">
                  Showcase your experience
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  Give casting teams a clear picture of your professional
                  background and current capabilities.
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

      {/* Profile Sections */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Profile Preparation
            </p>

            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              Build a strong professional profile
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              Keep the most relevant information easy to understand and make
              sure your profile accurately represents your professional work.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {profileSections.map((section, index) => (
            <Reveal key={section.title} delay={index * 0.06}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-[#D4AF37]/30">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Award className="h-5 w-5" />
                </div>

                <h3 className="mt-5 font-display text-xl text-white">
                  {section.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  {section.description}
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
                Professional Checklist
              </p>

              <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
                Keep your profile up to date
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/55 md:text-base">
                Accurate and current information helps communicate your
                professional profile more effectively.
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

      {/* Related Categories */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Explore More
            </p>

            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              Explore other actor categories
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
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Important
            </p>

            <h2 className="mt-4 font-display text-2xl text-white md:text-3xl">
              Experience does not guarantee selection.
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/55">
              Every casting opportunity can have its own requirements,
              eligibility criteria and selection process. A professional profile
              or registration does not guarantee auditions, roles, employment or
              selection.
            </p>
          </div>
        </Reveal>
      </section>

      <CTASection
        eyebrow="Start Your Journey"
        title="Ready to showcase your professional experience?"
        description="Create or update your artist profile with accurate information about your acting work, skills and portfolio."
        buttonLabel="Register Now"
        buttonHref="/register/"
      />
    </main>
  );
}
