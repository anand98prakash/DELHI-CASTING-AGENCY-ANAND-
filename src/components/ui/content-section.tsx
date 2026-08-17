import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";

interface ContentSectionProps {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function ContentSection({ eyebrow, title, children, className = "" }: ContentSectionProps) {
  return (
    <section className={`px-6 py-16 md:py-24 ${className}`}>
      <Reveal className="mx-auto max-w-4xl">
        {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">{eyebrow}</p>}
        {title && <h2 className="font-display text-4xl text-white md:text-5xl">{title}</h2>}
        <div className="mt-6 space-y-5 text-base leading-8 text-white/65">{children}</div>
      </Reveal>
    </section>
  );
}
