import Link from "next/link";
import { ArrowRight, Award, Users, ShieldCheck } from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContentSection } from "@/components/ui/content-section";
import { CTASection } from "@/components/ui/cta-section";
import { Reveal } from "@/components/ui/reveal";

export default function AboutUsPage() {
  return (
    <main>
      {/* Hero */}
      <PageHero
        eyebrow="About Delhi Casting Agency"
        title="Connecting Talent With Opportunities"
        description="Discover the story, approach and values behind Delhi Casting Agency."
      />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        />
      </div>

      {/* Our Story */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Our Story"
              title="A platform built around talent"
              description="Delhi Casting Agency is designed as an online-first platform for artists and creators looking for casting and industry opportunities."
              align="left"
            />

            <div className="mt-8 space-y-5 text-base leading-8 text-white/65">
              <p>
                Our website brings together different talent categories under
                one structured platform, making it easier for artists to explore
                relevant opportunities.
              </p>

              <p>
                From actors and models to influencers, dancers, voice artists
                and child artists, the platform is organized around specific
                talent segments and casting categories.
              </p>

              <p>
                The goal is to create a clear and professional experience for
                talent while keeping expectations realistic about casting and
                selection.
              </p>
            </div>
          </Reveal>

          {/* Values */}
          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8">
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#D4AF37]/10 blur-3xl" />

              <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
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
            </div>
          </Reveal>
        </div>
      </section>

      {/* Talent Categories */}
      <ContentSection
        eyebrow="What We Cover"
        title="One platform for multiple talent categories"
      >
        <p className="mx-auto mb-10 max-w-2xl text-center text-base leading-7 text-white/60">
          Explore dedicated sections designed around different types of talent
          and casting requirements.
        </p>
        
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Actors",
            "Models",
            "Child Artists",
            "Influencers",
            "Dancers",
            "Voice Artists",
          ].map((category, index) => (
            <Reveal key={category} delay={index * 0.05}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-[#D4AF37]/40">
                <h3 className="font-display text-xl text-white">{category}</h3>

                <p className="mt-2 text-sm leading-6 text-white/55">
                  Explore the dedicated {category.toLowerCase()} section.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </ContentSection>

      {/* Explore Platform CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <Reveal>
          <div className="rounded-3xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-8 text-center lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Explore the Platform
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl text-white md:text-4xl">
              Find the category that matches your talent.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              Browse dedicated talent categories and discover the opportunities
              available on the platform.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/talents/"
                className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e2c04b]"
              >
                Explore Talents
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/register/"
                className="inline-flex items-center justify-center border border-[#D4AF37]/50 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
              >
                Register Now
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Bottom CTA */}
      <CTASection
        eyebrow="Ready to Get Started?"
        title="Take the next step toward your casting journey."
        description="Explore the platform and choose the path that fits your talent."
        label="Register Now"
        href="/register/"
      />
    </main>
  );
}

/* Info Card */
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
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
        {icon}
      </div>

      <h3 className="mt-4 font-display text-xl text-white">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-white/55">{description}</p>
    </div>
  );
}
