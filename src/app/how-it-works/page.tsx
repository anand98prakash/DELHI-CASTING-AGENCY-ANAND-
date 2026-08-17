import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Search,
  UserCheck,
  Megaphone,
} from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContentSection } from "@/components/ui/content-section";
import { CTASection } from "@/components/ui/cta-section";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    number: "01",
    icon: <FileText className="h-6 w-6" />,
    title: "Registration",
    description:
      "Create your artist profile by providing the basic information required to present your talent professionally.",
  },
  {
    number: "02",
    icon: <UserCheck className="h-6 w-6" />,
    title: "Verification",
    description:
      "Your submitted profile information can be reviewed as part of the registration and talent onboarding process.",
  },
  {
    number: "03",
    icon: <Search className="h-6 w-6" />,
    title: "Portfolio",
    description:
      "Present your relevant photos, experience, skills and other portfolio information so your profile clearly represents your talent.",
  },
  {
    number: "04",
    icon: <Megaphone className="h-6 w-6" />,
    title: "Casting Calls",
    description:
      "Explore relevant casting opportunities and look for calls that match your talent category, profile and requirements.",
  },
];

export default function HowItWorksPage() {
  return (
    <main>
      {/* Hero */}
      <PageHero
        eyebrow="How It Works"
        title="From Registration to Casting Opportunities"
        description="Understand the journey from creating your artist profile to exploring relevant casting calls."
      />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "How It Works" }]}
        />
      </div>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="The Process"
            title="A simple journey for artists"
            description="The platform follows a straightforward journey: registration, verification, portfolio preparation and discovering relevant casting calls."
          />
        </Reveal>

        {/* Steps */}
        <div className="relative mt-16">
          <div className="absolute left-8 top-10 hidden h-[calc(100%-80px)] w-px bg-gradient-to-b from-[#D4AF37]/60 via-[#D4AF37]/20 to-transparent md:block" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.08}>
                <div className="relative grid gap-6 md:grid-cols-[100px_1fr]">
                  {/* Number */}
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 font-display text-lg text-[#D4AF37]">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-[#D4AF37]/30 hover:bg-white/[0.045]">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                        {step.icon}
                      </div>

                      <div>
                        <h3 className="font-display text-2xl text-white">
                          {step.title}
                        </h3>

                        <p className="mt-3 max-w-3xl text-base leading-7 text-white/60">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What You Should Prepare */}
      <ContentSection
        eyebrow="Before You Register"
        title="Prepare your profile"
      >
        <p className="mx-auto max-w-3xl text-center text-base leading-7 text-white/60">
          A well-presented profile makes it easier to communicate your talent,
          experience and skills when exploring opportunities.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Basic Information",
            "Profile Photos",
            "Experience & Skills",
            "Portfolio / Social Links",
          ].map((item, index) => (
            <Reveal key={item} delay={index * 0.05}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <CheckCircle2 className="h-5 w-5 text-[#D4AF37]" />

                <h3 className="mt-4 font-display text-lg text-white">{item}</h3>

                <p className="mt-2 text-sm leading-6 text-white/55">
                  Keep this information clear and up to date in your artist
                  profile.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </ContentSection>

      {/* Important Expectations */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <Reveal>
          <div className="rounded-3xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-8 lg:p-12">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                Important
              </p>

              <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
                Casting opportunities are not a guarantee of selection.
              </h2>

              <p className="mt-5 text-base leading-8 text-white/60">
                Each casting opportunity can have its own requirements,
                selection process and eligibility criteria. Artists should
                review the details of an opportunity carefully before applying.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <CTASection
        eyebrow="Start Your Journey"
        title="Ready to create your artist profile?"
        description="Register your talent profile and explore the platform."
        label="Register Now"
        href="/register/"
      />

      {/* Secondary CTA */}
      <section className="mx-auto max-w-7xl px-6 py-12 text-center lg:px-8 lg:py-16">
        <Reveal>
          <Link
            href="/casting-calls/"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#D4AF37] transition-colors hover:text-white"
          >
            Explore Casting Calls
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
