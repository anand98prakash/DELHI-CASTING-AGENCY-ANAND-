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
  Video,
} from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { CTASection } from "@/components/ui/cta-section";

const preparationPoints = [
  {
    title: "Keep Your Profile Current",
    description:
      "Maintain accurate personal information, recent photographs, relevant skills and experience in your talent profile.",
    icon: UserPlus,
  },
  {
    title: "Understand the Brief",
    description:
      "Read the OTT casting requirements carefully, including role details, eligibility criteria and submission instructions.",
    icon: FileText,
  },
  {
    title: "Prepare Self-Tape Material",
    description:
      "Keep suitable audition or self-tape material ready when an opportunity specifically requests it.",
    icon: Video,
  },
  {
    title: "Submit Relevant Material",
    description:
      "Provide only the photographs, portfolio material and information requested by the individual casting opportunity.",
    icon: Camera,
  },
];

const profileChecklist = [
  "Current profile information",
  "Recent clear photographs",
  "Acting experience where applicable",
  "Languages and communication skills",
  "Relevant performance skills",
  "Portfolio or showreel where applicable",
];

const opportunityTypes = [
  {
    title: "Web Series",
    description:
      "OTT productions may require performers for lead, supporting and character roles depending on the project.",
  },
  {
    title: "Digital Originals",
    description:
      "Digital productions can have different casting requirements based on the story, format and production.",
  },
  {
    title: "Character Roles",
    description:
      "Some projects may look for performers with specific appearances, skills, languages or acting experience.",
  },
];

export default function OttWebSeriesCastingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Casting Calls"
        title="OTT & Web Series Casting"
        description="Explore opportunities for OTT productions and web series while keeping your talent profile ready for suitable roles."
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
              label: "OTT & Web Series",
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
                <Video className="h-7 w-7" />
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                OTT Casting
              </p>

              <h2 className="mt-4 font-display text-3xl leading-tight text-white md:text-5xl">
                Get ready for digital productions
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-white/60 md:text-lg">
                OTT platforms and web-series productions can require a wide
                range of performers. Keep your profile accurate and review every
                casting brief carefully before applying.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Important
              </p>

              <h3 className="mt-4 font-display text-2xl text-white">
                Requirements vary by project
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/55">
                Role requirements can differ according to the production,
                character, language, experience and other casting criteria.
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

      {/* Opportunity Types */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Digital Productions
            </p>

            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              Types of OTT opportunities
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              The exact roles and opportunities available depend on individual
              projects and their casting requirements.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {opportunityTypes.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Clapperboard className="h-5 w-5" />
                </div>

                <h3 className="mt-6 font-display text-xl text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Preparation */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Casting Preparation
            </p>

            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              Prepare before applying
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              Having your relevant profile and audition material ready can help
              you respond efficiently to suitable casting opportunities.
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
                  Keep your OTT profile ready
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/55 md:text-base">
                  Review your profile regularly and make sure the information
                  reflects your current skills and experience.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {profileChecklist.map((item) => (
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

      {/* Self Tape */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
        <Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                <Video className="h-6 w-6" />
              </div>

              <h2 className="mt-6 font-display text-2xl text-white">
                Be prepared for self-tapes
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/55">
                When a casting brief requests a self-tape, follow the
                instructions provided by that opportunity and submit the
                requested material in the specified format.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                <Search className="h-6 w-6" />
              </div>

              <h2 className="mt-6 font-display text-2xl text-white">
                Read the complete brief
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/55">
                Check eligibility, role details, submission instructions and
                deadlines before applying.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Safety */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
        <Reveal>
          <div className="rounded-3xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] p-8 md:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
              <ShieldCheck className="h-6 w-6" />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Casting Safety
            </p>

            <h2 className="mt-3 font-display text-2xl text-white md:text-3xl">
              Be careful with unrealistic promises
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/55 md:text-base">
              Be cautious with unsolicited offers, unrealistic guarantees or
              requests for sensitive information. Verify important details
              before making payments or sharing personal information.
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

      {/* More Casting */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Explore More
            </p>

            <h2 className="mt-4 font-display text-2xl text-white md:text-3xl">
              Explore other casting categories
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/55 md:text-base">
              Explore additional casting opportunities and find categories
              relevant to your talent profile.
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
        eyebrow="OTT Casting"
        title="Keep your profile ready for digital opportunities"
        description="Create or update your talent profile and explore suitable OTT and web-series casting opportunities."
        buttonLabel="Register Now"
        buttonHref="/register/"
      />
    </main>
  );
}
