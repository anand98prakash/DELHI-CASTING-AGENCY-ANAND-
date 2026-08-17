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

const profilePoints = [
  "Current YouTube channel link",
  "Accurate subscriber and audience information",
  "Relevant content categories and interests",
  "Previous brand collaborations or campaign experience",
  "Recent photographs and professional creator information",
];

const contentTypes = [
  {
    title: "Entertainment Creators",
    description:
      "Creators producing entertainment, comedy, challenges, trends and audience-focused video content.",
  },
  {
    title: "Lifestyle Creators",
    description:
      "Creators focused on lifestyle, travel, fashion, daily experiences and personal storytelling.",
  },
  {
    title: "Education & Knowledge",
    description:
      "Creators producing educational, informational, tutorial and knowledge-based video content.",
  },
  {
    title: "Fitness & Wellness",
    description:
      "Creators focused on fitness, wellness, training and lifestyle-related video content.",
  },
];

const preparationSteps = [
  {
    title: "Keep Your Channel Current",
    description:
      "Use your current YouTube channel and make sure your public creator information is accurate.",
  },
  {
    title: "Define Your Content Niche",
    description:
      "Clearly communicate the type of videos you create and the audience you reach.",
  },
  {
    title: "Keep Audience Details Accurate",
    description:
      "Provide current subscriber and audience information when required for an opportunity.",
  },
  {
    title: "Show Relevant Experience",
    description:
      "Include previous brand collaborations, campaigns, sponsored content or professional creator work where applicable.",
  },
];

const relatedPages = [
  {
    title: "Influencers",
    description:
      "Return to the main influencer talent hub and explore creator categories.",
    href: "/influencers/",
  },
  {
    title: "Instagram Influencers",
    description: "Explore the Instagram-focused creator category.",
    href: "/influencers/instagram-influencers/",
  },
  {
    title: "Commercial Models",
    description:
      "Explore commercial modeling opportunities for advertising and brands.",
    href: "/models/commercial-model/",
  },
];

export default function YouTubeInfluencersPage() {
  return (
    <main>
      <PageHero
        eyebrow="YouTube Influencers"
        title="YouTube Influencer Casting & Registration"
        description="Explore YouTube-focused creator opportunities for branded videos, campaigns, collaborations and digital content."
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
              href: "/influencers/",
            },
            {
              label: "YouTube Influencers",
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
                YouTube Creator Casting
              </p>

              <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
                Turn your YouTube channel into a professional creator profile
              </h2>

              <p className="mt-5 text-base leading-8 text-white/60">
                This category is focused specifically on YouTube creators who
                want to present their channel, content niche, audience and
                relevant professional experience.
              </p>

              <p className="mt-4 text-base leading-8 text-white/60">
                Keep your channel information, audience details and creator
                profile current so your information accurately represents your
                work.
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
                  <PlaySquare className="h-6 w-6" />
                </div>

                <h3 className="mt-6 font-display text-2xl text-white">
                  Build a YouTube-ready profile
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  Highlight your video content, audience, niche and relevant
                  collaboration experience.
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

      {/* Creator Types */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Creator Categories
            </p>

            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              Different YouTube creator profiles
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              YouTube creators can work across different content categories
              depending on their audience, style and experience.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {contentTypes.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-[#D4AF37]/30">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Sparkles className="h-5 w-5" />
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
              Prepare your YouTube creator profile
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              Keep your creator information accurate and make it easy to
              understand your content and audience.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {preparationSteps.map((step, index) => (
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
                  Information to keep ready
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/55 md:text-base">
                  Prepare the information that best represents your YouTube
                  creator profile.
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

      {/* Related Pages */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Explore More
            </p>

            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              Explore related talent categories
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {relatedPages.map((item, index) => (
            <Reveal key={item.href} delay={index * 0.05}>
              <Link
                href={item.href}
                className="group block h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/30"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-xl text-white">
                    {item.title}
                  </h3>

                  <ArrowRight className="h-5 w-5 text-[#D4AF37] transition-transform group-hover:translate-x-1" />
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
              YouTube creator registration does not guarantee collaboration.
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
        title="Ready to showcase your YouTube presence?"
        description="Register your talent profile and explore YouTube-focused creator opportunities."
        buttonLabel="Register Now"
        buttonHref="/register/"
      />
    </main>
  );
}
