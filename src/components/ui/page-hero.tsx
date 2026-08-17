import { Reveal } from "@/components/ui/reveal";
import { Breadcrumb } from "@/components/ui/breadcrumb";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
  image?: string;
}

export function PageHero({ eyebrow, title, description, breadcrumbs = [], image }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-charcoal px-6 pb-16 pt-32 md:pb-20 md:pt-40">
      {image ? (
        <div className="absolute inset-0 -z-20 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${image})` }} />
      ) : null}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.16),transparent_38%),linear-gradient(180deg,rgba(10,10,10,0.72),#0a0a0a)]" />
      <div className="mx-auto max-w-7xl">
        {breadcrumbs.length > 0 && <div className="mb-7"><Breadcrumb items={breadcrumbs} /></div>}
        <Reveal>
          {eyebrow && <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-gold">{eyebrow}</p>}
          <h1 className="max-w-4xl font-display text-5xl leading-[0.95] text-white md:text-7xl">{title}</h1>
          {description && <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">{description}</p>}
        </Reveal>
      </div>
    </section>
  );
}
