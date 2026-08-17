import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Info,
  ShieldCheck,
  XCircle,
} from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContentSection } from "@/components/ui/content-section";
import { CTASection } from "@/components/ui/cta-section";
import { Reveal } from "@/components/ui/reveal";

const includedItems = [
  "Artist profile registration",
  "Talent category selection",
  "Profile and portfolio information",
  "Access to relevant platform sections",
  "Ability to explore available casting opportunities",
  "A structured online artist profile experience",
];

const notGuaranteedItems = [
  "Guaranteed selection for a casting call",
  "Guaranteed acting or modeling work",
  "Guaranteed role in a film, web series or television project",
  "Guaranteed brand or commercial assignment",
  "Guaranteed income or number of opportunities",
];

export default function MembershipPage() {
  return (
    <main>
      {/* Hero */}
      <PageHero
        eyebrow="Membership"
        title="A Professional Profile for Your Casting Journey"
        description="Understand what membership includes and what it does not guarantee before you register."
      />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Membership" }]}
        />
      </div>

      {/* Membership Overview */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          {/* Fee Card */}
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/30 bg-[#D4AF37]/[0.06] p-8 lg:sticky lg:top-28">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D4AF37]/10 blur-3xl" />

              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                  Membership
                </p>

                <h2 className="mt-5 font-display text-3xl text-white">
                  Membership Fee
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  The membership fee is part of the registration journey. Please
                  refer to the registration/payment flow for the currently
                  applicable fee before completing payment.
                </p>

                <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
                  <div className="flex items-start gap-3">
                    <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" />

                    <p className="text-sm leading-6 text-white/60">
                      The actual membership amount is not specified in the
                      provided website structure document, so no unverified
                      price is displayed here.
                    </p>
                  </div>
                </div>

                <Link
                  href="/register/"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-[#D4AF37] px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e2c04b]"
                >
                  Continue to Registration
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Explanation */}
          <Reveal delay={0.1}>
            <div>
              <SectionHeading
                eyebrow="What Membership Means"
                title="A structured online experience for artists"
                description="Membership is intended to provide a structured platform experience for artists who want to present their profile and explore relevant opportunities."
                align="left"
              />

              <div className="mt-8 space-y-5 text-base leading-8 text-white/60">
                <p>
                  Your profile can bring together important information about
                  your talent, experience, skills, photographs and other
                  portfolio details.
                </p>

                <p>
                  The platform is organized into dedicated talent categories,
                  helping artists discover sections and opportunities that are
                  relevant to their profile.
                </p>

                <p>
                  Before completing any payment, artists should review the
                  applicable membership information, terms and cancellation or
                  refund conditions presented during the registration process.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Included */}
      <ContentSection
        eyebrow="What's Included"
        title="What your membership experience covers"
      >
        <p className="mx-auto max-w-3xl text-center text-base leading-7 text-white/60">
          The membership page is designed to clearly communicate the platform
          features and registration experience available to artists.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {includedItems.map((item, index) => (
            <Reveal key={item} delay={index * 0.05}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#D4AF37]/30 hover:bg-white/[0.045]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/10">
                  <CheckCircle2 className="h-5 w-5 text-[#D4AF37]" />
                </div>

                <h3 className="mt-5 font-display text-xl text-white">{item}</h3>

                <p className="mt-2 text-sm leading-6 text-white/50">
                  Part of the structured artist membership experience.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </ContentSection>

      {/* No Guarantee */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-red-400/10 bg-red-400/[0.025] p-8 lg:p-12">
            <div className="max-w-3xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-400/10">
                <ShieldCheck className="h-6 w-6 text-red-300" />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                Important Information
              </p>

              <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
                Membership does not guarantee work or selection.
              </h2>

              <p className="mt-5 text-base leading-8 text-white/60">
                Casting decisions depend on the requirements and selection
                process of individual opportunities. Registration or membership
                should not be understood as a promise of employment, role
                selection, project placement or income.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {notGuaranteedItems.map((item, index) => (
                <Reveal key={item} delay={index * 0.04}>
                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/20 p-4">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-white/35" />

                    <span className="text-sm leading-6 text-white/60">
                      {item}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Before Payment */}
      <ContentSection
        eyebrow="Before You Pay"
        title="Review the details carefully"
      >
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <div className="space-y-5">
              {[
                "Review the current membership fee displayed during registration.",
                "Read the applicable terms and conditions.",
                "Check the refund and cancellation policy before payment.",
                "Understand that membership does not guarantee selection or work.",
              ].map((item, index) => (
                <Reveal key={item} delay={index * 0.05}>
                  <div className="flex items-start gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/10 text-xs font-semibold text-[#D4AF37]">
                      {index + 1}
                    </span>

                    <p className="text-sm leading-7 text-white/60">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </ContentSection>

      {/* CTA */}
      <CTASection
        eyebrow="Ready to Continue?"
        title="Create your artist profile."
        description="Start the registration journey and review the applicable membership information before payment."
        label="Register Now"
        href="/register/"
      />
    </main>
  );
}
