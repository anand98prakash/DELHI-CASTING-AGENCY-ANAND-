import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Info,
  ShieldCheck,
  XCircle,
  Sparkles,
} from "lucide-react";

import { Breadcrumb } from "@/components/ui/breadcrumb";
import { CTASection } from "@/components/ui/cta-section";
import { Reveal } from "@/components/ui/reveal";

const includedItems = [
  {
    title: "Artist profile registration",
    description: "Part of the structured artist membership experience.",
    image: "/images/actors/registration.jpg",
    alt: "Artist profile registration for Delhi Casting Agency membership",
  },
  {
    title: "Talent category selection",
    description: "Part of the structured artist membership experience.",
    image: "/images/actors/talent category selection.webp",
    alt: "Talent category selection for actors, models, and performers",
  },
  {
    title: "Profile and portfolio information",
    description: "Part of the structured artist membership experience.",
    image: "/images/actors/basic info.jpg",
    alt: "Artist portfolio and profile information showcase",
  },
  {
    title: "Access to relevant platform sections",
    description: "Part of the structured artist membership experience.",
    image: "/images/actors/any talent section horizonatlly.png",
    alt: "Access to relevant casting and platform sections",
  },
  {
    title: "Ability to explore available casting opportunities",
    description: "Part of the structured artist membership experience.",
    image: "/images/actors/cating calls horizonattaly.png",
    alt: "Explore available casting opportunities and audition briefs",
  },
  {
    title: "A structured online artist profile experience",
    description: "Part of the structured artist membership experience.",
    image: "/images/actors/experience skills.jpg",
    alt: "Structured online artist profile experience with DCA",
  },
];

const notGuaranteedItems = [
  "Guaranteed selection for a casting call",
  "Guaranteed acting or modeling work",
  "Guaranteed role in a film, web series or television project",
  "Guaranteed brand or commercial assignment",
  "Guaranteed income or number of opportunities",
];

export const metadata = {
  title: "Membership | Delhi Casting Agency (DCA)",
  description:
    "Understand what Delhi Casting Agency membership includes and what it does not guarantee before registering your artist profile.",
};

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EA] text-[#171717]">
      {/* Hero Header */}
      <section className="relative isolate overflow-hidden border-b border-[#E2DDD3] bg-[#F5F2EA] px-6 pb-12 pt-28 sm:pb-16 sm:pt-36">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
              Membership
            </p>

            <div className="relative mb-8 aspect-21/7 max-h-[280px] w-full overflow-hidden rounded-xl border border-[#E2DDD3] bg-[#EFECE4] shadow-md">
              <Image
                src="/images/actors/Membership.avif"
                alt="DCA Premium Artist Membership - Casting Journey"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 via-[#171717]/20 to-transparent" />
            </div>

            <h1 className="font-serif text-3xl font-extrabold tracking-tight text-[#171717] sm:text-5xl md:text-6xl">
              Understanding Membership
            </h1>

            <p className="mt-4 max-w-3xl text-base font-normal leading-relaxed text-[#171717]/75 sm:text-lg">
              Learn what is included in the platform experience and understand expectations before registering your artist profile.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 py-6">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Membership" }]} />
      </div>

      {/* What's Included */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <Reveal>
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
              <Sparkles className="h-3.5 w-3.5" />
              What&apos;s Included
            </span>

            <h2 className="mt-3 font-serif text-3xl font-extrabold tracking-tight text-[#171717] sm:text-4xl">
              What your membership experience covers
            </h2>

            <p className="mt-3 text-base leading-relaxed text-[#171717]/75">
              The membership page is designed to clearly communicate the platform features and registration experience available to artists.
            </p>
          </div>
        </Reveal>

        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {includedItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05} className="h-full">
              <div className="group flex h-full flex-col justify-between overflow-hidden rounded-xl border border-[#E2DDD3] bg-[#EFECE4] p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A059] hover:shadow-xl">
                <div>
                  <div className="relative mb-4 aspect-16/10 w-full overflow-hidden rounded-lg bg-[#F5F2EA]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="350px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#171717]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#171717]/70">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Membership Fee & Overview */}
      <section className="mx-auto max-w-7xl px-6 py-12 border-t border-[#E2DDD3]">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <div className="rounded-xl border border-[#E2DDD3] bg-[#EFECE4] p-8 shadow-md">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
                Membership Fee
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-[#171717]">
                Lifetime Access
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-[#171717]/75">
                The membership fee is part of the registration journey. Please refer to the registration/payment flow for the currently applicable fee before completing payment.
              </p>
              <div className="mt-6 rounded-lg border border-[#E2DDD3] bg-[#F5F2EA] p-4 text-xs text-[#171717]/70">
                <div className="flex items-start gap-2">
                  <Info className="h-4 w-4 shrink-0 text-[#C5A059]" />
                  <span>Lifetime Membership • No Renewal Charges</span>
                </div>
              </div>
              <Link
                href="/register/"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#171717] py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[#F5F2EA] transition duration-300 hover:bg-[#C5A059] hover:text-[#171717]"
              >
                <span>Continue to Registration</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
                What Membership Means
              </span>
              <h2 className="font-serif text-3xl font-extrabold text-[#171717]">
                A structured online experience for artists
              </h2>
              <p className="text-sm leading-relaxed text-[#171717]/75">
                Membership is intended to provide a structured platform experience for artists who want to present their profile and explore relevant opportunities.
              </p>
              <div className="space-y-3 text-xs leading-relaxed text-[#171717]/70">
                <p>Your profile can bring together important information about your talent, experience, skills, photographs and other portfolio details.</p>
                <p>The platform is organized into dedicated talent categories, helping artists discover sections and opportunities that are relevant to their profile.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* No Guarantee Notice */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <Reveal>
          <div className="rounded-xl border border-[#E2DDD3] bg-[#EFECE4] p-8 shadow-md">
            <div className="max-w-3xl">
              <ShieldCheck className="h-8 w-8 text-[#C5A059]" />
              <span className="mt-3 block text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
                Important Information
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-[#171717]">
                Membership does not guarantee work or selection.
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-[#171717]/75">
                Casting decisions depend on the requirements and selection process of individual opportunities. Registration or membership should not be understood as a promise of employment or role selection.
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {notGuaranteedItems.map((item) => (
                <div key={item} className="flex items-start gap-2.5 rounded-lg border border-[#E2DDD3] bg-[#F5F2EA] p-3 text-xs text-[#171717]/75">
                  <XCircle className="h-4 w-4 shrink-0 text-[#6E2424]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Global CTA */}
      <CTASection
        eyebrow="Ready to Continue?"
        title="Create your artist profile."
        description="Start the registration journey and review the applicable membership information before payment."
        buttonLabel="Register Now"
        buttonHref="/register/"
      />
    </main>
  );
}
