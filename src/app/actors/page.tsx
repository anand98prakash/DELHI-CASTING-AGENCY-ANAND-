import Link from "next/link";
import { ArrowRight, Award, Sparkles, Users } from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { CTASection } from "@/components/ui/cta-section";

const actorSegments = [
  {
    title: "Male Actors",
    description:
      "Explore the dedicated male actor category for casting and registration opportunities.",
    href: "/actors/male-actors/",
    icon: Users,
  },
  {
    title: "Female Actors",
    description:
      "Explore the dedicated female actor category for casting and registration opportunities.",
    href: "/actors/female-actors/",
    icon: Sparkles,
  },
  {
    title: "Fresh Faces",
    description:
      "A dedicated category for first-time actors and talent without previous professional experience.",
    href: "/actors/fresh-faces/",
    icon: Award,
  },
  {
    title: "Experienced Actors",
    description:
      "For working actors looking to explore additional roles and casting opportunities.",
    href: "/actors/experienced-actors/",
    icon: Award,
  },
];

export default function ActorsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Actors"
        title="Actor Casting & Registration"
        description="Explore dedicated actor categories for fresh faces, experienced performers, male actors and female actors."
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
              label: "Actors",
            },
          ]}
        />
      </div>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Actor Categories
            </p>

            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              Find the actor category that fits your profile
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              The actor section is organized into dedicated segments so that
              artists can explore opportunities relevant to their experience and
              profile.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {actorSegments.map((segment, index) => {
            const Icon = segment.icon;

            return (
              <Reveal key={segment.title} delay={index * 0.06}>
                <Link
                  href={segment.href}
                  className="group block h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/35 hover:bg-white/[0.05]"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 group-hover:border-[#D4AF37]/40 group-hover:text-[#D4AF37]">
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>

                  <h3 className="mt-7 font-display text-2xl text-white">
                    {segment.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-white/55">
                    {segment.description}
                  </p>

                  <div className="mt-6 inline-flex items-center text-sm font-semibold text-[#D4AF37]">
                    Explore {segment.title}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                  For Actors
                </p>

                <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
                  Build a clear and professional talent profile
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55 md:text-base">
                  Keep your profile information accurate and up to date. Include
                  relevant photographs, acting experience, skills and portfolio
                  or social links where appropriate.
                </p>
              </div>

              <Link
                href="/register/"
                className="inline-flex items-center justify-center rounded-xl bg-[#D4AF37] px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E2C04A] hover:shadow-lg hover:shadow-[#D4AF37]/20"
              >
                Register as an Actor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <CTASection
        eyebrow="Start Your Journey"
        title="Ready to explore acting opportunities?"
        description="Choose the actor category that best represents your profile and continue exploring the platform."
        buttonLabel="Register Now"
        buttonHref="/register/"
      />
    </main>
  );
}
