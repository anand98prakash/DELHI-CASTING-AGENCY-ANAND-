import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  PlaySquare,
  Sparkles,
  Users,
} from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { CTASection } from "@/components/ui/cta-section";

function InstagramIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const categories = [
  {
    title: "Instagram Influencers",
    description:
      "Explore Instagram-focused creator casting for brand, lifestyle and social media campaigns.",
    href: "/influencers/instagram-influencers/",
    icon: InstagramIcon,
  },
  {
    title: "YouTube Influencers",
    description:
      "Explore YouTube-focused creator casting for video campaigns, collaborations and branded content.",
    href: "/influencers/youtube-influencers/",
    icon: PlaySquare,
  },
];

const profilePoints = [
  "Current social media profile links",
  "Accurate follower and audience information",
  "Relevant content categories and interests",
  "Previous brand collaborations where applicable",
  "Recent photographs and professional profile information",
];

const preparationSteps = [
  {
    title: "Show Your Content",
    description:
      "Keep your social profiles active and make sure your content represents your current style and audience.",
  },
  {
    title: "Define Your Niche",
    description:
      "Clearly communicate the topics, content categories and interests that your audience follows.",
  },
  {
    title: "Keep Metrics Accurate",
    description:
      "Provide current and accurate audience information when an opportunity requires social media metrics.",
  },
  {
    title: "Add Relevant Experience",
    description:
      "Mention relevant brand collaborations, campaigns, content work or creator experience where applicable.",
  },
];

export default function InfluencersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Influencers"
        title="Influencer Casting & Registration"
        description="Explore influencer talent categories for social media creators, branded content, digital campaigns and creator opportunities."
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
              label: "Influencers",
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
                Creator Talent
              </p>

              <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
                Turn your audience into a professional creator profile
              </h2>

              <p className="mt-5 text-base leading-8 text-white/60">
                The Influencers section is designed for social media creators
                who want to present their audience, content niche, experience
                and professional profile for relevant opportunities.
              </p>

              <p className="mt-4 text-base leading-8 text-white/60">
                Explore the dedicated Instagram and YouTube categories and keep
                your creator information accurate and up to date.
              </p>

              <Link
                href="/register/"
                className="mt-8 inline-flex items-center rounded-xl bg-[#D4AF37] px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E2C04A] hover:shadow-lg hover:shadow-[#D4AF37]/20"
              >
                Register as a Creator
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
                  Build a creator-ready profile
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  Highlight your audience, content niche, social presence and
                  relevant professional experience.
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

      {/* Influencer Categories */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Creator Categories
            </p>

            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              Choose your creator platform
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              Explore the creator category that best matches your primary social
              media platform.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <Reveal key={category.href} delay={index * 0.08}>
                <Link
                  href={category.href}
                  className="group block h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/35 hover:bg-white/[0.05]"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <ArrowRight className="h-5 w-5 text-white/35 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#D4AF37]" />
                  </div>

                  <h3 className="mt-7 font-display text-2xl text-white">
                    {category.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {category.description}
                  </p>

                  <div className="mt-6 inline-flex items-center text-sm font-semibold text-[#D4AF37]">
                    Explore Category
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
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
              Prepare your influencer profile
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              A strong creator profile clearly communicates your content,
              audience and professional experience.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {preparationSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-[#D4AF37]/30">
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
                <Sparkles className="h-6 w-6" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                  Profile Checklist
                </p>

                <h2 className="mt-3 font-display text-2xl text-white md:text-3xl">
                  Information to keep ready
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/55 md:text-base">
                  Keep your creator profile accurate, current and relevant to
                  the type of opportunities you want to explore.
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
              Creator registration does not guarantee collaboration.
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/55">
              Individual creator opportunities can have their own audience,
              content, eligibility and selection requirements. Registration or
              membership does not guarantee brand collaborations, campaigns,
              auditions, employment or selection.
            </p>
          </div>
        </Reveal>
      </section>

      <CTASection
        eyebrow="Start Your Journey"
        title="Ready to showcase your creator profile?"
        description="Register your talent profile and explore influencer opportunities across relevant social platforms."
        buttonLabel="Register Now"
        buttonHref="/register/"
      />
    </main>
  );
}
