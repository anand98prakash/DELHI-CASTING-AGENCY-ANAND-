import { Reveal } from "@/components/ui/reveal";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Image from "next/image";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
  image?: string;
}

export function PageHero({ eyebrow, title, description, breadcrumbs = [], image }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-[#E2DDD3] bg-[#F5F2EA] px-6 pb-12 pt-28 sm:pb-16 sm:pt-36">
      <div className="mx-auto max-w-7xl">
        {breadcrumbs.length > 0 && (
          <div className="mb-6">
            <Breadcrumb items={breadcrumbs} />
          </div>
        )}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className={image ? "lg:col-span-7" : "lg:col-span-12"}>
            <Reveal>
              {eyebrow && (
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
                  {eyebrow}
                </p>
              )}
              <h1 className="font-serif text-3xl font-extrabold leading-[1.1] tracking-tight text-[#171717] sm:text-4xl md:text-5xl lg:text-6xl">
                {title}
              </h1>
              {description && (
                <p className="mt-5 max-w-2xl text-base font-normal leading-relaxed text-[#171717]/70 md:text-lg">
                  {description}
                </p>
              )}
            </Reveal>
          </div>

          {image && (
            <div className="lg:col-span-5">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl border border-[#E2DDD3] shadow-md md:aspect-3/2 lg:aspect-4/5">
                <Image
                  src={image}
                  alt={title}
                  fill
                  priority
                  className="object-cover transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/30 via-transparent to-transparent" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
