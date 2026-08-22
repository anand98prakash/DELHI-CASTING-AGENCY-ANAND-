"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const FEATURED_PROJECTS = [
  {
    title: "National Brand TVC Campaign 2026",
    category: "Commercial Casting",
    client: "Leading FMCG Brand",
    image: "/media/dca/about/dca-about-hero-01.jpg",
    details: "Cast 12 lead actors and commercial models for nationwide television commercial.",
  },
  {
    title: "Editorial Fashion Showcase",
    category: "Fashion & Print",
    client: "Couture Magazine",
    image: "/media/dca/models/dca-model-female-01.jpg",
    details: "Provided high-fashion Indian models for luxury apparel campaign shoot.",
  },
  {
    title: "OTT Web Series Ensemble",
    category: "OTT Streaming",
    client: "Major OTT Platform",
    image: "/media/dca/about/dca-about-studio-01.jpg",
    details: "Complete casting management for 8 principal roles and supporting cast.",
  },
];

export function FeaturedWork() {
  return (
    <section className="border-b border-[#E2DDD3] bg-[#F6F3ED] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Casting Highlights"
            title="Featured Projects & Credibility"
            description="Discover recent film, commercial, and fashion projects cast through Delhi Casting Agency."
          />
          <Link
            href="/casting-calls"
            className="inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#171717] transition hover:text-[#C5A059]"
          >
            View All Projects
            <ArrowUpRight className="h-4 w-4 text-[#C5A059]" />
          </Link>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {FEATURED_PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl border border-[#E2DDD3] bg-[#F5F2EA] shadow-xs transition duration-500 hover:-translate-y-1 hover:border-[#C5A059] hover:shadow-xl"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-[#EFECE4]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#F5F2EA] backdrop-blur-xs">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">
                  {project.client}
                </p>
                <h3 className="mt-1 font-serif text-xl font-bold tracking-tight text-[#171717]">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#171717]/70">
                  {project.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
