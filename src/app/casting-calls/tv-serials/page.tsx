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
  Tv,
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
      "Maintain accurate information, recent photographs, relevant skills and experience in your talent profile.",
    icon: UserPlus,
  },
  {
    title: "Review the Role",
    description:
      "Read the television casting brief carefully and check the age range, role requirements, language and other criteria.",
    icon: FileText,
  },
  {
    title: "Prepare Audition Material",
    description:
      "Keep suitable photographs, portfolio material and self-tape or audition material ready when requested.",
    icon: Camera,
  },
  {
    title: "Follow Submission Instructions",
    description:
      "Submit the requested information in the format specified by the individual casting opportunity.",
    icon: CheckCircle2,
  },
];

const profileChecklist = [
  "Current personal information",
  "Recent photographs",
  "Acting experience, if applicable",
  "Languages and communication skills",
  "Relevant acting or performance skills",
  "Portfolio or showreel where applicable",
];

const televisionTypes = [
  {
    title: "TV Serial Roles",
    description:
      "Opportunities may include characters and supporting roles across television productions.",
  },
  {
    title: "Supporting Characters",
    description:
      "Television productions can require different supporting characters depending on the story and production.",
  },
  {
    title: "Fresh Talent",
    description:
      "Some opportunities may be suitable for newer performers, subject to the individual casting requirements.",
  },
];

export default function TvSerialsCastingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Casting Calls"
        title="TV Serial Casting"
        description="Explore television casting opportunities and prepare your talent profile for suitable TV productions."
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
              label: "TV Serials",
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
                <Tv className="h-7 w-7" />
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                Television Casting
              </p>

              <h2 className="mt-4 font-display text-3xl leading-tight text-white md:text-5xl">
                Prepare for TV serial opportunities
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-white/60 md:text-lg">
                Television productions can require performers for a wide range
                of roles. Keep your profile current and carefully review the
                requirements of each casting opportunity before applying.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Important
              </p>

              <h3 className="mt-4 font-display text-2xl text-white">
                Requirements vary by production
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/55">
                Age, appearance, language, experience, availability and other
                requirements can differ between television casting calls.
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

      {/* Preparation */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              TV Casting Preparation
            </p>

            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              Prepare before you apply
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              A complete and accurate profile can make it easier to respond to
              suitable opportunities.
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

      {/* Television Roles */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Television Opportunities
            </p>

            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              Different types of TV roles
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              The exact roles available depend on the production and its casting
              requirements.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {televisionTypes.map((item, index) => (
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

      {/* Checklist */}
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
                  Keep your TV casting profile ready
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/55 md:text-base">
                  Review your profile before applying so that the information
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

      {/* Audition */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
        <Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                <Search className="h-6 w-6" />
              </div>

              <h2 className="mt-6 font-display text-2xl text-white">
                Read every casting brief
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/55">
                Check the role description, eligibility requirements, audition
                instructions and submission deadline where provided.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <h2 className="mt-6 font-display text-2xl text-white">
                Stay casting-safe
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/55">
                Be cautious with unrealistic promises, unsolicited offers or
                requests for sensitive information. Verify important details
                before making payments or sharing personal information.
              </p>

              <Link
                href="/blog/how-to-avoid-casting-scams/"
                className="mt-6 inline-flex items-center text-sm font-semibold text-[#D4AF37]"
              >
                Read Casting Safety Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* More Casting */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
        <Reveal>
          <div className="rounded-3xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Explore More
            </p>

            <h2 className="mt-4 font-display text-2xl text-white md:text-3xl">
              Explore other casting opportunities
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/55 md:text-base">
              Explore additional casting categories and find opportunities
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
        eyebrow="TV Casting"
        title="Keep your profile ready for television opportunities"
        description="Create or update your talent profile and explore suitable casting opportunities."
        buttonLabel="Register Now"
        buttonHref="/register/"
      />
    </main>
  );
}
