import Link from "next/link";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  FileText,
  Music,
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
    title: "Keep Your Profile Updated",
    description:
      "Maintain current photographs, personal information, relevant skills and experience in your talent profile.",
    icon: UserPlus,
  },
  {
    title: "Review the Casting Brief",
    description:
      "Read the music-video casting requirements carefully, including appearance, skills, availability and submission instructions.",
    icon: FileText,
  },
  {
    title: "Prepare Visual Material",
    description:
      "Keep suitable photographs, portfolio material and video content ready when requested by a casting opportunity.",
    icon: Camera,
  },
  {
    title: "Follow Instructions",
    description:
      "Submit only the information and material requested by the individual music-video casting opportunity.",
    icon: CheckCircle2,
  },
];

const checklist = [
  "Current profile information",
  "Recent photographs",
  "Relevant performance skills",
  "Dance or movement skills where applicable",
  "Portfolio or video material where applicable",
  "Availability according to the casting brief",
];

export default function MusicVideosCastingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Casting Calls"
        title="Music Video Casting"
        description="Explore music-video casting opportunities for performers, dancers and other suitable talent."
      />

      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Casting Calls", href: "/casting-calls/" },
            { label: "Music Videos" },
          ]}
        />
      </div>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                <Music className="h-7 w-7" />
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                Music Video Casting
              </p>

              <h2 className="mt-4 font-display text-3xl leading-tight text-white md:text-5xl">
                Get ready for music-video opportunities
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-white/60 md:text-lg">
                Music videos can require performers with different looks, skills
                and performance abilities. Keep your profile ready and review
                each opportunity carefully.
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
                Appearance, dance ability, acting, language, availability and
                other requirements can differ between productions.
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
              Preparation
            </p>

            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              Prepare before applying
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              Keep your profile and relevant performance material ready for
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

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
              <Sparkles className="h-6 w-6" />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Profile Checklist
            </p>

            <h2 className="mt-3 font-display text-2xl text-white md:text-3xl">
              Keep your profile ready
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
                Prepare performance material
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/55">
                If a casting opportunity requests a performance video or
                audition material, follow the instructions provided.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <Search className="h-6 w-6 text-[#D4AF37]" />
              <h2 className="mt-6 font-display text-2xl text-white">
                Read the complete brief
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/55">
                Check the role requirements and submission instructions before
                applying.
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
              Be cautious with unrealistic promises or requests for sensitive
              information. Verify important details before making payments or
              sharing personal information.
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
        eyebrow="Music Video Casting"
        title="Keep your profile ready"
        description="Create or update your talent profile for suitable music-video opportunities."
        buttonLabel="Register Now"
        buttonHref="/register/"
      />
    </main>
  );
}
