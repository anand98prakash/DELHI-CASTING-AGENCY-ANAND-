import Link from "next/link";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  Clapperboard,
  FileText,
  Search,
  ShieldCheck,
  Sparkles,
  UserPlus,
} from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { CTASection } from "@/components/ui/cta-section";

const preparationPoints = [
  {
    title: "Keep Your Profile Updated",
    description:
      "Make sure your talent profile contains current information, recent photographs, relevant skills and experience.",
    icon: UserPlus,
  },
  {
    title: "Review Role Requirements",
    description:
      "Read each feature-film casting brief carefully and check the requirements before applying.",
    icon: FileText,
  },
  {
    title: "Prepare Your Audition Material",
    description:
      "Keep suitable photographs, portfolio material and audition or self-tape material ready when requested.",
    icon: Camera,
  },
  {
    title: "Apply Carefully",
    description:
      "Submit the information requested by the individual casting opportunity and avoid sending unnecessary personal information.",
    icon: CheckCircle2,
  },
];

const checklist = [
  "Current profile information",
  "Recent and clear photographs",
  "Relevant acting experience",
  "Languages and skills",
  "Portfolio or showreel where applicable",
  "Availability according to the casting brief",
];

export default function BollywoodFilmsCastingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Casting Calls"
        title="Bollywood Film Casting"
        description="Explore feature-film casting opportunities and prepare your talent profile for suitable Bollywood projects."
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
              label: "Bollywood Films",
            },
          ]}
        />
      </div>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                <Clapperboard className="h-7 w-7" />
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                Feature Film Casting
              </p>

              <h2 className="mt-4 font-display text-3xl leading-tight text-white md:text-5xl">
                Prepare for Bollywood film opportunities
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-white/60 md:text-lg">
                Feature films can require different types of talent depending on
                the production and role. Keep your profile accurate and review
                the requirements of every casting opportunity before applying.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Important
              </p>

              <h3 className="mt-4 font-display text-2xl text-white">
                Every casting call is different
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/55">
                Age range, appearance, experience, language, skills,
                availability and other requirements can vary by production.
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

      {/* Opportunities */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Feature Film Opportunities
            </p>

            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              What to prepare before applying
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              A well-maintained profile can help you respond efficiently when a
              suitable opportunity becomes available.
            </p>
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

      {/* Profile Checklist */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                <Sparkles className="h-6 w-6" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                  Profile Checklist
                </p>

                <h2 className="mt-3 font-display text-2xl text-white md:text-3xl">
                  Keep these details ready
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/55 md:text-base">
                  Before applying for a feature-film opportunity, check that
                  your profile contains relevant and current information.
                </p>
              </div>
            </div>

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

      {/* Audition Preparation */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
        <Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                <Search className="h-6 w-6" />
              </div>

              <h2 className="mt-6 font-display text-2xl text-white">
                Read the casting brief
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/55">
                Check the role description, eligibility requirements, submission
                instructions and any requested audition material before
                applying.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <h2 className="mt-6 font-display text-2xl text-white">
                Protect your information
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/55">
                Be careful with unsolicited offers, unrealistic promises or
                requests for sensitive information. Verify important details
                before making payments or sharing personal information.
              </p>

              <Link
                href="/blog/how-to-avoid-casting-scams/"
                className="mt-6 inline-flex items-center text-sm font-semibold text-[#D4AF37]"
              >
                Casting Safety Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Explore Other Casting */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
        <Reveal>
          <div className="rounded-3xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Explore More
            </p>

            <h2 className="mt-4 font-display text-2xl text-white md:text-3xl">
              Explore other casting categories
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/55 md:text-base">
              Explore other entertainment casting categories and find the
              opportunities most relevant to your talent profile.
            </p>

            <Link
              href="/casting-calls/"
              className="mt-7 inline-flex items-center text-sm font-semibold text-[#D4AF37]"
            >
              View All Casting Calls
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      <CTASection
        eyebrow="Feature Film Casting"
        title="Keep your profile ready for the right opportunity"
        description="Create or update your talent profile and explore suitable casting opportunities."
        buttonLabel="Register Now"
        buttonHref="/register/"
      />
    </main>
  );
}
