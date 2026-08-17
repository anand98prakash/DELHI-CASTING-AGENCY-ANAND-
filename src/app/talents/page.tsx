import Link from "next/link";
import { ArrowRight, Mic2, Music2, Sparkles, Star, Users } from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { CTASection } from "@/components/ui/cta-section";

const talentCategories = [
  {
    title: "Actors",
    description:
      "Explore actor categories for different experience levels and casting requirements.",
    href: "/actors/",
    icon: Star,
    segments: [
      {
        title: "Male Actors",
        href: "/actors/male-actors/",
      },
      {
        title: "Female Actors",
        href: "/actors/female-actors/",
      },
      {
        title: "Fresh Faces",
        href: "/actors/fresh-faces/",
      },
      {
        title: "Experienced Actors",
        href: "/actors/experienced-actors/",
      },
    ],
  },
  {
    title: "Models",
    description:
      "Discover modeling categories covering fashion, commercial, fitness and other requirements.",
    href: "/models/",
    icon: Sparkles,
    segments: [
      {
        title: "Female Models",
        href: "/models/female-models/",
      },
      {
        title: "Male Models",
        href: "/models/male-models/",
      },
      {
        title: "Fashion Models",
        href: "/models/fashion-models/",
      },
      {
        title: "Commercial Models",
        href: "/models/commercial-models/",
      },
      {
        title: "Plus-Size Models",
        href: "/models/plus-size-models/",
      },
      {
        title: "Fitness Models",
        href: "/models/fitness-models/",
      },
    ],
  },
  {
    title: "Child Artists",
    description:
      "A dedicated category for child artists with appropriate parental-consent and safety considerations.",
    href: "/child-artists/",
    icon: Users,
    segments: [],
  },
  {
    title: "Influencers",
    description:
      "Explore creator categories for social-media and digital-content opportunities.",
    href: "/influencers/",
    icon: Sparkles,
    segments: [
      {
        title: "Instagram Influencers",
        href: "/influencers/instagram-influencers/",
      },
      {
        title: "YouTube Influencers",
        href: "/influencers/youtube-influencers/",
      },
    ],
  },
  {
    title: "Dancers",
    description:
      "Discover dancer categories for background, featured and performance-based opportunities.",
    href: "/dancers/",
    icon: Music2,
    segments: [
      {
        title: "Background Dancers",
        href: "/dancers/background-dancers/",
      },
      {
        title: "Lead Dancers",
        href: "/dancers/lead-dancers/",
      },
    ],
  },
  {
    title: "Voice Artists",
    description:
      "Explore voice talent categories for dubbing, radio and audio-based opportunities.",
    href: "/voice-artists/",
    icon: Mic2,
    segments: [
      {
        title: "Dubbing Artists",
        href: "/voice-artists/dubbing-artists/",
      },
      {
        title: "Radio Voice Artists",
        href: "/voice-artists/radio-voice-artists/",
      },
    ],
  },
];

export default function TalentsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Talent Directory"
        title="Discover Talent Categories"
        description="Explore actors, models, child artists, influencers, dancers and voice artists across dedicated talent categories."
      />

      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Talents" }]}
        />
      </div>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Talent Hub
            </p>

            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              Find the talent category that fits your profile
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              Browse dedicated talent categories and explore the different
              segments available on the platform.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {talentCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <Reveal key={category.title} delay={index * 0.05}>
                <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/35 hover:bg-white/[0.05]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <Link
                      href={category.href}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
                      aria-label={`Explore ${category.title}`}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <h3 className="mt-6 font-display text-2xl text-white">
                    {category.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {category.description}
                  </p>

                  {category.segments.length > 0 && (
                    <div className="mt-6 space-y-2">
                      {category.segments.map((segment) => (
                        <Link
                          key={segment.href}
                          href={segment.href}
                          className="group/link flex items-center justify-between rounded-xl border border-white/5 bg-black/20 px-4 py-3 text-sm text-white/70 transition hover:border-[#D4AF37]/25 hover:bg-[#D4AF37]/5 hover:text-white"
                        >
                          <span>{segment.title}</span>

                          <ArrowRight className="h-4 w-4 text-white/30 transition-transform group-hover/link:translate-x-1 group-hover/link:text-[#D4AF37]" />
                        </Link>
                      ))}
                    </div>
                  )}

                  <Link
                    href={category.href}
                    className="mt-6 inline-flex items-center text-sm font-semibold text-[#D4AF37] transition hover:text-[#E2C04A]"
                  >
                    Explore {category.title}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">
        <Reveal>
          <div className="rounded-3xl border border-[#D4AF37]/15 bg-[#D4AF37]/[0.04] p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                  For Artists
                </p>

                <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
                  Ready to showcase your talent?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
                  Create your artist profile and provide accurate information
                  about your experience, skills and portfolio.
                </p>
              </div>

              <Link
                href="/register/"
                className="inline-flex items-center justify-center rounded-xl bg-[#D4AF37] px-6 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#E2C04A] hover:shadow-lg hover:shadow-[#D4AF37]/20"
              >
                Register Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <CTASection
        eyebrow="Explore Opportunities"
        title="Find the category that matches your talent."
        description="Explore dedicated talent categories and learn more about the types of profiles the platform supports."
        buttonLabel="View Casting Calls"
        buttonHref="/casting-calls/"
      />
    </main>
  );
}
