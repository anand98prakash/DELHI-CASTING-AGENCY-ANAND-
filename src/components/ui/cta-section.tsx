import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  description?: string;

  /* Existing props */
  href?: string;
  label?: string;

  /* Document/page props */
  buttonHref?: string;
  buttonLabel?: string;
}

export function CTASection({
  eyebrow = "Take the next step",
  title,
  description,

  /* Existing defaults */
  href = "/register/",
  label = "Register Now",

  /* New compatible props */
  buttonHref,
  buttonLabel,
}: CTASectionProps) {
  /*
   * Support both naming conventions.
   *
   * Existing pages can continue using:
   * href + label
   *
   * New/document pages can use:
   * buttonHref + buttonLabel
   */
  const finalHref = buttonHref ?? href;
  const finalLabel = buttonLabel ?? label;

  return (
    <section className="px-6 py-20 md:py-28">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-gold/25 bg-charcoal-2 p-8 md:p-12">
        {/* Decorative glow */}
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          {/* Content */}
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              {eyebrow}
            </p>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              {title}
            </h2>

            {description && (
              <p className="mt-4 text-base font-normal leading-7 text-white/60 md:text-lg">{description}</p>
            )}
          </div>

          {/* CTA */}
          <Link
            href={finalHref}
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold tracking-wider text-black transition hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]"
          >
            {finalLabel}

            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
