import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Dumbbell,
  Sparkles,
  Activity,
} from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { CTASection } from "@/components/ui/cta-section";

const profilePoints = [
  "Recent and clear fitness-focused photographs",
  "Accurate profile and physical information",
  "Relevant fitness, sports or modeling experience",
  "Sports, wellness and performance-related skills",
  "Portfolio or professional social links where relevant",
];

const profileSections = [
  {
    title: "Fitness Profile",
    description:
      "Present your fitness background, interests and relevant physical or performance abilities clearly.",
  },
  {
    title: "Sports & Training",
    description:
      "Mention relevant sports, training, fitness disciplines or certifications where applicable.",
  },
  {
    title: "Professional Photos",
    description:
      "Use recent and clear photographs that accurately represent your current appearance and fitness profile.",
  },
  {
    title: "Portfolio & Links",
    description:
      "Add relevant portfolio material or professional social links that support your modeling profile.",
  },
];

const relatedCategories = [
  {
    title: "Commercial Models",
    description:
      "Explore commercial modeling opportunities for brands, advertising and lifestyle content.",
    href: "/models/commercial-models/",
  },
  {
    title: "Fashion Models",
    description: "Explore fashion-focused modeling opportunities and profiles.",
    href: "/models/fashion-models/",
  },
  {
    title: "Male Models",
    description: "Explore the dedicated male model category.",
    href: "/models/male-models/",
  },
];

export default function FitnessModelsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Fitness Models"
        title="Fitness Model Casting & Registration"
        description="Explore the fitness model category for sports, wellness, lifestyle and fitness-related modeling opportunities."
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
              label: "Fitness Models",
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
                Fitness Model Category
              </p>

              <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
                Showcase your fitness and modeling profile
              </h2>

              <p className="mt-5 text-base leading-8 text-white/60">
                The fitness model category is designed for talent interested in
                opportunities related to fitness, sports, wellness, lifestyle
                and performance-focused content.
              </p>

              <p className="mt-4 text-base leading-8 text-white/60">
                Keep your photographs, experience, skills and profile
                information accurate and up to date.
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
                  <Dumbbell className="h-6 w-6" />
                </div>

                <h3 className="mt-6 font-display text-2xl text-white">
                  Build a strong fitness profile
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  Highlight relevant fitness, sports and modeling experience for
                  opportunities that match your profile.
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
              Prepare your fitness modeling profile
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              Present accurate and relevant information so your profile clearly
              communicates your fitness and modeling capabilities.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {profileSections.map((section, index) => (
            <Reveal key={section.title} delay={index * 0.06}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-[#D4AF37]/30">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Activity className="h-5 w-5" />
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

      {/* Checklist */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                Profile Checklist
              </p>

              <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
                Information to keep ready
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/55 md:text-base">
                Prepare accurate information before creating or updating your
                fitness model profile.
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
                  Fitness opportunities do not guarantee selection.
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/55">
                  Individual opportunities can have their own requirements,
                  eligibility criteria and selection processes. Registration or
                  membership does not guarantee auditions, bookings, employment
                  or selection.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <CTASection
        eyebrow="Start Your Journey"
        title="Ready to showcase your fitness profile?"
        description="Create your talent profile and explore relevant fitness modeling opportunities."
        buttonLabel="Register Now"
        buttonHref="/register/"
      />
    </main>
  );
}
