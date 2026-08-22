import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Users, ShieldCheck, Sparkles } from "lucide-react";

import { Breadcrumb } from "@/components/ui/breadcrumb";
import { CTASection } from "@/components/ui/cta-section";
import { Reveal } from "@/components/ui/reveal";
import { OFFICIAL_DCA_INSTAGRAM_URL, OFFICIAL_DCA_LINKEDIN_URL } from "@/data/media";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const categoryThumbnails: Record<string, { image: string; href: string }> = {
  Actors: { image: "/media/dca/actors/dca-actor-male-01.jpg", href: "/actors/" },
  Models: { image: "/media/dca/models/dca-model-fashion-01.jpg", href: "/models/" },
  "Child Artists": { image: "/media/dca/child-artists/dca-child-artist-01.jpg", href: "/child-artists/" },
  Influencers: { image: "/media/dca/influencers/dca-influencer-community-01.jpg", href: "/influencers/" },
  Dancers: { image: "/media/dca/dancers/dca-dancer-performance-01.jpg", href: "/dancers/" },
  "Voice Artists": { image: "/media/dca/voice-artists/dca-voice-studio-01.jpg", href: "/voice-artists/" },
};

export const metadata = {
  title: "About Us | Delhi Casting Agency (DCA)",
  description:
    "Discover the story, approach, and values behind Delhi Casting Agency — an online-first platform connecting talent with casting opportunities across India.",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EA] text-[#171717]">
      {/* Hero Header */}
      <section className="relative isolate overflow-hidden border-b border-[#E2DDD3] bg-[#F5F2EA] px-6 pb-12 pt-28 sm:pb-16 sm:pt-36">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
              About Delhi Casting Agency
            </p>

            <div className="relative mb-8 aspect-21/7 max-h-[280px] w-full overflow-hidden rounded-xl border border-[#E2DDD3] bg-[#EFECE4] shadow-md">
              <Image
                src="/images/actors/contact horizontally.jpg"
                alt="About Delhi Casting Agency - Connecting Talent With Opportunities"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 via-[#171717]/20 to-transparent" />
            </div>

            <h1 className="font-serif text-3xl font-extrabold tracking-tight text-[#171717] sm:text-5xl md:text-6xl">
              Connecting Talent With Opportunities
            </h1>

            <p className="mt-4 max-w-3xl text-base font-normal leading-relaxed text-[#171717]/75 sm:text-lg">
              Discover the story, approach and values behind Delhi Casting Agency.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 py-6">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
      </div>

      {/* Our Story */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <div>
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
                <Sparkles className="h-3.5 w-3.5" />
                Discovering Stars, Creating Legacies
              </span>

              <h2 className="mt-3 font-serif text-3xl font-extrabold tracking-tight text-[#171717] sm:text-4xl">
                Bridging talent and industry across India
              </h2>

              <p className="mt-4 text-base font-normal leading-relaxed text-[#171717]/80 sm:text-lg">
                Delhi Casting Agency is dedicated to discovering, grooming, and connecting top talent with the film, television, commercial, and digital media industry across India.
              </p>

              <div className="mt-5 space-y-3 text-xs leading-relaxed text-[#171717]/70 sm:text-sm">
                <p>
                  Our platform brings together diverse talent categories under a structured ecosystem, bridging the gap between aspiring performers and production requirements.
                </p>

                <p>
                  From actors, fashion models, and child artists to dancers, influencers, and voice artists, we support talent discovery with a commitment to excellence and transparent expectations.
                </p>

                <p>
                  The goal is to create a clear and professional experience for talent while keeping expectations realistic about casting and selection.
                </p>
              </div>

              <div className="mt-6 border-t border-[#E2DDD3] pt-4 flex flex-wrap items-center gap-4 text-xs font-semibold">
                <a
                  href={OFFICIAL_DCA_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#C5A059] hover:underline"
                >
                  <InstagramIcon className="h-4 w-4 text-[#C5A059]" />
                  <span>Instagram: @delhicastingagency</span>
                </a>
                <span className="text-[#171717]/20">•</span>
                <a
                  href={OFFICIAL_DCA_LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#C5A059] hover:underline"
                >
                  <LinkedinIcon className="h-4 w-4 text-[#C5A059]" />
                  <span>LinkedIn: Delhi Casting Agency</span>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4 rounded-xl border border-[#E2DDD3] bg-[#EFECE4] p-6 shadow-md sm:p-8">
              <InfoCard
                icon={<Users className="h-5 w-5" />}
                title="Talent Focused"
                description="Dedicated categories help artists find the areas most relevant to them."
              />

              <InfoCard
                icon={<Award className="h-5 w-5" />}
                title="Professional Approach"
                description="A structured platform for discovering casting-related opportunities."
              />

              <InfoCard
                icon={<ShieldCheck className="h-5 w-5" />}
                title="Transparent Expectations"
                description="Casting opportunities do not automatically guarantee selection or work."
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Talent Categories */}
      <section className="mx-auto max-w-7xl px-6 py-12 border-t border-[#E2DDD3]">
        <Reveal>
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
              <Sparkles className="h-3.5 w-3.5" />
              What We Cover
            </span>

            <h2 className="mt-3 font-serif text-3xl font-extrabold tracking-tight text-[#171717] sm:text-4xl">
              One platform for multiple talent categories
            </h2>

            <p className="mt-3 text-base leading-relaxed text-[#171717]/75">
              Explore dedicated sections designed around different types of talent and casting requirements.
            </p>
          </div>
        </Reveal>

        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Actors",
            "Models",
            "Child Artists",
            "Influencers",
            "Dancers",
            "Voice Artists",
          ].map((category, index) => {
            const meta = categoryThumbnails[category];

            return (
              <Reveal key={category} delay={index * 0.05} className="h-full">
                <div className="group flex h-full flex-col justify-between overflow-hidden rounded-xl border border-[#E2DDD3] bg-[#EFECE4] p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A059] hover:shadow-xl">
                  <div className="flex flex-1 flex-col">
                    <Link
                      href={meta?.href || "/talents/"}
                      className="relative mb-4 aspect-16/10 w-full shrink-0 overflow-hidden rounded-lg bg-[#F5F2EA]"
                    >
                      <Image
                        src={meta?.image || "/images/actors/talent male actore.png"}
                        alt={category}
                        fill
                        sizes="350px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 via-transparent to-transparent" />
                    </Link>

                    <h3 className="font-serif text-2xl font-bold tracking-tight text-[#171717] transition-colors group-hover:text-[#C5A059]">
                      {category}
                    </h3>

                    <p className="mt-2 flex-1 text-xs leading-relaxed text-[#171717]/75">
                      Explore the dedicated {category.toLowerCase()} section.
                    </p>
                  </div>

                  <div className="mt-6 flex shrink-0 items-center justify-between border-t border-[#E2DDD3] pt-4">
                    <Link
                      href={meta?.href || "/talents/"}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#171717] transition-colors group-hover:text-[#C5A059]"
                    >
                      <span>Explore {category}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#171717]/40">
                      DCA Verified
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Global CTA */}
      <CTASection
        eyebrow="Ready to Get Started?"
        title="Take the next step toward your casting journey."
        description="Explore the platform and choose the path that fits your talent."
        buttonLabel="Register Now"
        buttonHref="/register/"
      />
    </main>
  );
}

function InfoCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-[#E2DDD3] bg-[#F5F2EA] p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#C5A059]/30 bg-[#EFECE4] text-[#C5A059]">
          {icon}
        </div>
        <div>
          <h3 className="font-serif text-base font-bold tracking-tight text-[#171717]">
            {title}
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-[#171717]/70">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
