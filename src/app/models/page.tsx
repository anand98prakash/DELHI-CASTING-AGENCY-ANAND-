import Link from "next/link";
import {
  ArrowRight,
  Dumbbell,
  Sparkles,
  Shirt,
  ShoppingBag,
  UserRound,
} from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { CTASection } from "@/components/ui/cta-section";

const modelCategories = [
  {
    title: "Female Models",
    description:
      "Explore the dedicated female model category for fashion, commercial and other modeling opportunities.",
    href: "/models/female-models/",
    icon: Sparkles,
  },
  {
    title: "Male Models",
    description:
      "Explore the dedicated male model category for commercial, fashion and other modeling requirements.",
    href: "/models/male-models/",
    icon: UserRound,
  },
  {
    title: "Fashion Models",
    description:
      "A dedicated category for fashion-focused modeling and style-related opportunities.",
    href: "/models/fashion-models/",
    icon: Shirt,
  },
  {
    title: "Commercial Models",
    description:
      "Explore models suitable for advertising, catalogues, brand campaigns and commercial work.",
    href: "/models/commercial-models/",
    icon: ShoppingBag,
  },
  {
    title: "Plus-Size Models",
    description:
      "A dedicated category for plus-size modeling and inclusive commercial opportunities.",
    href: "/models/plus-size-models/",
    icon: Sparkles,
  },
  {
    title: "Fitness Models",
    description:
      "Explore the fitness model category for sports, wellness, lifestyle and fitness-related opportunities.",
    href: "/models/fitness-models/",
    icon: Dumbbell,
  },
];

export default function ModelsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Models"
        title="Model Casting & Registration"
        description="Explore dedicated modeling categories covering fashion, commercial, plus-size, fitness and other modeling requirements."
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
              label: "Models",
            },
          ]}
        />
      </div>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Model Categories
            </p>

            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              Find the modeling category that fits your profile
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              The models section brings together different modeling categories
              so artists can explore the segment that best represents their
              profile, skills and interests.
            </p>
          </div>
        </Reveal>

        {/* Category Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {modelCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <Reveal key={category.title} delay={index * 0.05}>
                <Link
                  href={category.href}
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
                    {category.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {category.description}
                  </p>

                  <div className="mt-6 inline-flex items-center text-sm font-semibold text-[#D4AF37]">
                    Explore {category.title}
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
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-display text-xl text-white">
                Profile Photos
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/55">
                Use recent and clear photographs that accurately represent your
                current appearance.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-display text-xl text-white">
                Experience & Skills
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/55">
                Include relevant modeling experience, skills, training and other
                information that supports your profile.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-display text-xl text-white">
                Portfolio & Links
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/55">
                Add relevant portfolio or professional social links where
                appropriate.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Information Notice */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">
        <Reveal>
          <div className="rounded-3xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Important
            </p>

            <h2 className="mt-4 font-display text-2xl text-white md:text-3xl">
              Modeling opportunities have individual requirements.
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/55 md:text-base">
              Individual casting opportunities can have their own eligibility
              criteria, appearance requirements, experience expectations and
              selection process. Registration does not guarantee auditions, work
              or selection.
            </p>
          </div>
        </Reveal>
      </section>

      <CTASection
        eyebrow="Start Your Journey"
        title="Ready to create your modeling profile?"
        description="Register your talent profile and explore the modeling categories available on the platform."
        buttonLabel="Register Now"
        buttonHref="/register/"
      />
    </main>
  );
}
