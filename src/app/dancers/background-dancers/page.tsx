import Link from "next/link";
import { ArrowRight, CheckCircle2, Film, Music2, Users } from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { CTASection } from "@/components/ui/cta-section";

const profilePoints = [
  "Recent and clear photographs",
  "Relevant dance styles and performance skills",
  "Previous group or background dance experience",
  "Film, video or stage performance experience where applicable",
  "Accurate profile and contact information",
];

const castingTypes = [
  {
    title: "Film Productions",
    description:
      "Background and group dancers for film sequences and dance-focused scenes.",
  },
  {
    title: "Music Videos",
    description:
      "Dancers for group performances and choreography-based music video productions.",
  },
  {
    title: "Video Productions",
    description:
      "Background dancers for digital and other video productions requiring group performers.",
  },
];

const profileSteps = [
  {
    title: "Create Your Profile",
    description:
      "Provide accurate information about your dance experience, skills and performance background.",
  },
  {
    title: "Add Recent Photos",
    description:
      "Use clear and recent photographs that represent your current appearance.",
  },
  {
    title: "Mention Dance Skills",
    description:
      "List the dance styles and performance skills that are relevant to your profile.",
  },
  {
    title: "Keep Information Updated",
    description:
      "Update your profile whenever your experience, skills or professional information changes.",
  },
];

export default function BackgroundDancersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Background Dancers"
        title="Background Dancer Casting"
        description="Explore background and group dancer opportunities for films and video productions."
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
              label: "Dancers",
              href: "/dancers/",
            },
            {
              label: "Background Dancers",
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
                Background / Group Dancers
              </p>

              <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
                Showcase your background dance profile
              </h2>

              <p className="mt-5 text-base leading-8 text-white/60">
                This category is focused on background and group dancers
                interested in opportunities for films and video productions.
              </p>

              <p className="mt-4 text-base leading-8 text-white/60">
                Present your dance skills, relevant experience and current
                profile information clearly.
              </p>

              <Link
                href="/register/"
                className="mt-8 inline-flex items-center rounded-xl bg-[#D4AF37] px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E2C04A] hover:shadow-lg hover:shadow-[#D4AF37]/20"
              >
                Register as a Dancer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#D4AF37]/10 blur-3xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Users className="h-6 w-6" />
                </div>

                <h3 className="mt-6 font-display text-2xl text-white">
                  Group performance profile
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  Keep your dance experience and performance information
                  accurate for relevant background and group casting.
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

      {/* Casting Types */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Casting Focus
            </p>

            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              Background and group dance opportunities
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              This page is specifically focused on background and group dancers
              for film and video work.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {castingTypes.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-[#D4AF37]/30">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Film className="h-5 w-5" />
                </div>

                <h3 className="mt-5 font-display text-xl text-white">
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

      {/* Profile Preparation */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Profile Preparation
            </p>

            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              Prepare your dancer profile
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              Keep your information clear, current and relevant to background
              and group dance casting.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {profileSteps.map((step, index) => (
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

      {/* Checklist */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                <Music2 className="h-6 w-6" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                  Profile Checklist
                </p>

                <h2 className="mt-3 font-display text-2xl text-white md:text-3xl">
                  Information to keep ready
                </h2>
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

      {/* Related Category */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <Link
            href="/dancers/lead-dancers/"
            className="group block rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/30"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                  Explore More
                </p>

                <h2 className="mt-3 font-display text-2xl text-white md:text-3xl">
                  Lead Dancers
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/55">
                  Explore the lead and featured dancer category.
                </p>
              </div>

              <div className="inline-flex shrink-0 items-center text-sm font-semibold text-[#D4AF37]">
                View Category
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </Reveal>
      </section>

      <CTASection
        eyebrow="Start Your Journey"
        title="Ready to showcase your dance profile?"
        description="Register your talent profile and explore relevant background and group dancer opportunities."
        buttonLabel="Register Now"
        buttonHref="/register/"
      />
    </main>
  );
}
