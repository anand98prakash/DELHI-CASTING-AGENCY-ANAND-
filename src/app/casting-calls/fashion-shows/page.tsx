import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Image,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  UserPlus,
  Users,
} from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { CTASection } from "@/components/ui/cta-section";

const preparationPoints = [
  {
    title: "Complete Your Profile",
    description:
      "Keep your personal information, measurements, experience and relevant modelling details accurate and current.",
    icon: UserPlus,
  },
  {
    title: "Keep Photos Updated",
    description:
      "Maintain recent, clear photographs that accurately represent your current appearance.",
    icon: Image,
  },
  {
    title: "Review Show Requirements",
    description:
      "Check the designer, event, location, requirements and availability before applying.",
    icon: FileText,
  },
  {
    title: "Be Prepared to Audition",
    description:
      "Follow the instructions provided by the individual fashion-show casting opportunity.",
    icon: CheckCircle2,
  },
];

const checklist = [
  "Recent photographs",
  "Accurate profile information",
  "Relevant modelling experience",
  "Current measurements where requested",
  "Runway or performance experience where applicable",
  "Availability and location",
];

const opportunityTypes = [
  {
    title: "Runway Shows",
    description:
      "Fashion events may require models for runway presentations based on the individual show's requirements.",
  },
  {
    title: "Designer Shows",
    description:
      "Individual designers and productions can have specific casting criteria for their collections.",
  },
  {
    title: "Fashion Events",
    description:
      "Events can require different types of models depending on the format, audience and production.",
  },
];

export default function FashionShowsCastingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Casting Calls"
        title="Fashion Show Casting"
        description="Explore fashion-show and runway casting opportunities for models and suitable talent."
      />

      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Casting Calls", href: "/casting-calls/" },
            { label: "Fashion Shows" },
          ]}
        />
      </div>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                <Users className="h-7 w-7" />
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                Fashion & Runway
              </p>

              <h2 className="mt-4 font-display text-3xl leading-tight text-white md:text-5xl">
                Prepare for fashion-show opportunities
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-white/60 md:text-lg">
                Fashion shows can have specific requirements for models,
                appearances, experience and availability. Keep your profile
                ready and review every casting brief carefully.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Important
              </p>

              <h3 className="mt-4 font-display text-2xl text-white">
                Every show has its own requirements
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/55">
                Requirements may differ by designer, event, collection, location
                and production.
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
              Fashion Opportunities
            </p>

            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              Types of fashion casting
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {opportunityTypes.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Users className="h-5 w-5" />
                </div>

                <h3 className="mt-6 font-display text-xl text-white">
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

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Preparation
            </p>

            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              Get ready before applying
            </h2>
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
            <Sparkles className="h-6 w-6 text-[#D4AF37]" />

            <h2 className="mt-5 font-display text-2xl text-white md:text-3xl">
              Fashion casting checklist
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
              <MapPin className="h-6 w-6 text-[#D4AF37]" />

              <h2 className="mt-6 font-display text-2xl text-white">
                Check location and availability
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/55">
                Review the event location, dates and availability requirements
                before applying to a fashion-show opportunity.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <Search className="h-6 w-6 text-[#D4AF37]" />

              <h2 className="mt-6 font-display text-2xl text-white">
                Review the complete brief
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/55">
                Check the designer, show requirements and submission
                instructions before sending your application.
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
        eyebrow="Fashion Show Casting"
        title="Get your runway profile ready"
        description="Create or update your talent profile for suitable fashion and runway opportunities."
        buttonLabel="Register Now"
        buttonHref="/register/"
      />
    </main>
  );
}
