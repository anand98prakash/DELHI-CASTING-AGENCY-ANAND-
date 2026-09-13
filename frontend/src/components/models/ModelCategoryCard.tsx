import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import type { CategoryMeta } from "@/data/models";

interface ModelCategoryCardProps {
  category: CategoryMeta;
}

export function ModelCategoryCard({ category }: ModelCategoryCardProps) {
  return (
    <Link
      href={category.route}
      className="group relative flex flex-col justify-between h-full overflow-hidden rounded-3xl border border-gray-200 bg-white text-[#111111] shadow-xs p-6 sm:p-7 transition-all duration-500 hover:border-[#d4af37]/60 hover:shadow-md hover:-translate-y-1.5 motion-reduce:hover:translate-y-0 motion-reduce:transition-none cursor-pointer block focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
    >
      <div className="flex flex-col flex-1">
        {/* 1. Top Eyebrow & Category Count + DCA Verified */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#666666] flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#555555]" />
            {category.countLabel}
          </span>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            DCA Verified
          </span>
        </div>

        {/* 2. Category Title (DCA GOLD) */}
        <h2 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-[#d4af37] group-hover:text-[#d4af37] transition-colors leading-tight mb-1">
          {category.title}
        </h2>

        {/* 3. Subtitle / Headline */}
        {category.headline && (
          <p className="text-xs sm:text-sm font-medium text-[#d4af37] mb-3">
            {category.headline}
          </p>
        )}

        {/* 4. Large Visual Image Container */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#F7F7F5] my-3 border border-gray-200 shrink-0 block">
          <Image
            src={category.image}
            alt={`${category.title} Division - Delhi Casting Agency`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-700 ease-out motion-reduce:group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
        </div>

        {/* 5. Category Description */}
        <p className="text-sm leading-relaxed text-[#555555] flex-1 mt-1">
          {category.description}
        </p>
      </div>

      {/* 6. Professional Responsive Full-Width CTA Button */}
      <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col gap-2 shrink-0">
        <div className="w-full inline-flex items-center justify-between rounded-full border border-gray-200 bg-[#F7F7F5] px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-[#111111] transition-all duration-300 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white shadow-2xs group-hover:shadow-xs">
          <span className="truncate">{category.ctaText}</span>
          <ArrowRight className="h-4 w-4 text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white shrink-0 ml-2" />
        </div>
      </div>
    </Link>
  );
}
