import Link from "next/link";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  FileText,
  Search,
  ShieldCheck,
  Sparkles,
  Tv,
  UserPlus,
  Video,
} from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { CTASection } from "@/components/ui/cta-section";

const preparationPoints = [
  {
    title: "Update Your Profile",
    description:
      "Keep your photographs, personal information, skills and relevant experience current.",
    icon: UserPlus,
  },
  {
    title: "Review the Campaign Brief",
    description:
      "Check the required appearance, age range, role, location, availability and other campaign requirements.",
    icon: FileText,
  },
  {
    title: "Prepare Camera-Ready Material",
    description:
      "Keep suitable photographs and video or audition material ready when requested.",
    icon: Camera,
  },
  {
    title: "Follow Instructions",
    description:
      "Submit the requested information and material according to the individual casting brief.",
    icon: CheckCircle2,
  },
];

const checklist = [
  "Recent photographs",
  "Accurate profile information",
  "Relevant acting or modelling experience",
  "Languages and communication skills",
  "Portfolio or showreel where applicable",
  "Current availability",
];

export default function TvCommercialsCastingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Casting Calls"
        title="TV Commercial Casting"
        description="Explore television commercial casting opportunities for advertising campaigns and brand productions."
      />

      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Casting Calls", href: "/casting-calls/" },
            { label: "TV Commercials" },
          ]}
        />
      </div>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                <Tv className="h-7 w-7" />
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                Television Advertising
              </p>

              <h2 className="mt-4 font-display text-3xl leading-tight text-white md:text-5xl">
                Prepare for commercial casting
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-white/60 md:text-lg">
                TV commercials can require actors, models and other performers
                for different brand campaigns. Review every casting brief
                carefully before applying.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Important
              </p>

              <h3 className="mt-4 font-display text-2xl text-white">
                Campaign requirements vary
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/55">
                A campaign may have specific requirements related to appearance,
                age, language, skills and availability.
              </p>

              <Link
                href="/register/"
                className="mt-6 inline-flex items-center text-sm font-semibold text-[#D4AF37]"
              >
                Create Your Profile
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Commercial Preparation
            </p>

            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              Get ready before applying
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {preparationPoints.map((point, index) => {
            const Icon = point.icon;

            return (
              <Reveal key={point.title} delay={index * 0.06}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 font-display text-xl text-white">
                    {point.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {point.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <Sparkles className="h-6 w-6 text-[#D4AF37]" />

            <h2 className="mt-5 font-display text-2xl text-white md:text-3xl">
              Commercial casting checklist
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {checklist.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" />
                  <span className="text-sm leading-7 text-white/65">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
        <Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <Video className="h-6 w-6 text-[#D4AF37]" />

              <h2 className="mt-6 font-display text-2xl text-white">
                Prepare for camera work
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/55">
                If an opportunity requests a self-tape or audition, follow the
                exact instructions provided by the casting brief.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <Search className="h-6 w-6 text-[#D4AF37]" />

              <h2 className="mt-6 font-display text-2xl text-white">
                Review the campaign
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/55">
                Understand the role and submission requirements before sending
                your application.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
        <Reveal>
          <div className="rounded-3xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] p-8 md:p-10">
            <ShieldCheck className="h-6 w-6 text-[#D4AF37]" />

            <h2 className="mt-6 font-display text-2xl text-white md:text-3xl">
              Stay casting-safe
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/55 md:text-base">
              Verify important details before making payments or sharing
              sensitive information.
            </p>

            <Link
              href="/blog/how-to-avoid-casting-scams/"
              className="mt-7 inline-flex items-center text-sm font-semibold text-[#D4AF37]"
            >
              Read Casting Safety Guide
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      <CTASection
        eyebrow="TV Commercial Casting"
        title="Keep your profile camera-ready"
        description="Create or update your talent profile for suitable commercial opportunities."
        buttonLabel="Register Now"
        buttonHref="/register/"
      />
    </main>
  );
}
