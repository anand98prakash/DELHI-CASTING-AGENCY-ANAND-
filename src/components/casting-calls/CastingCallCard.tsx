import React from "react";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Tag, User } from "lucide-react";
import type { CastingCallItem } from "@/data/casting-calls";

interface CastingCallCardProps {
  item: CastingCallItem;
  onViewDetails: (item: CastingCallItem) => void;
  onApply: (item: CastingCallItem) => void;
}

export function CastingCallCard({ item, onViewDetails, onApply }: CastingCallCardProps) {
  const statusColor =
    item.status === "VERIFIED"
      ? "bg-[#d4af37]/10 text-[#d4af37] border-[#d4af37]/30"
      : item.status === "CLOSING SOON"
      ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
      : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";

  return (
    <div className="group relative flex flex-col justify-between h-full overflow-hidden rounded-3xl border border-white/10 bg-[#181818] p-6 sm:p-7 transition-all duration-500 hover:border-[#d4af37]/60 hover:shadow-2xl hover:shadow-[#d4af37]/10 hover:-translate-y-1.5 motion-reduce:hover:translate-y-0 motion-reduce:transition-none">
      <div className="flex flex-col flex-1">
        {/* 1. Category Eyebrow & Status Badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">
            {item.category}
          </span>
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${statusColor}`}>
            {item.status}
          </span>
        </div>

        {/* 2. Visual Image Container */}
        <div
          onClick={() => onViewDetails(item)}
          className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#121212] mb-4 border border-white/5 shrink-0 block cursor-pointer group/img"
        >
          <Image
            src={item.image}
            alt={`${item.title} - Delhi Casting Agency verified casting call`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover/img:scale-[1.04] transition-transform duration-700 ease-out motion-reduce:group-hover/img:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover/img:opacity-50 transition-opacity" />
        </div>

        {/* 3. Casting Call Title (DCA GOLD) */}
        <h3
          onClick={() => onViewDetails(item)}
          className="text-lg sm:text-xl font-bold tracking-tight text-[#d4af37] group-hover:text-amber-200 transition-colors leading-snug mb-3 cursor-pointer"
        >
          {item.title}
        </h3>

        {/* 4. Scannable Details Grid */}
        <div className="grid grid-cols-2 gap-2 mb-4 p-3 rounded-2xl bg-black/40 border border-white/5 text-xs text-white/70">
          <div className="flex items-center gap-1.5 truncate">
            <Tag className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
            <span className="truncate">{item.productionType}</span>
          </div>
          <div className="flex items-center gap-1.5 truncate">
            <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
            <span className="truncate">{item.location}</span>
          </div>
          <div className="flex items-center gap-1.5 truncate">
            <User className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
            <span className="truncate">{item.gender} ({item.ageRange})</span>
          </div>
          <div className="flex items-center gap-1.5 truncate">
            <Calendar className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
            <span className="truncate">{item.deadline}</span>
          </div>
        </div>

        {/* 5. Short Summary Description */}
        <p className="text-xs sm:text-sm leading-relaxed text-white/60 flex-1 line-clamp-2 mb-4">
          {item.description}
        </p>
      </div>

      {/* 6. Bottom CTA Footer */}
      <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between shrink-0">
        <button
          type="button"
          onClick={() => onViewDetails(item)}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white group-hover:text-[#d4af37] transition-colors"
        >
          <span>View Casting Call</span>
          <ArrowRight className="w-4 h-4 text-[#d4af37] group-hover:translate-x-1.5 transition-transform duration-300" />
        </button>

        <button
          type="button"
          onClick={() => onApply(item)}
          className="px-3.5 py-1.5 rounded-xl bg-[#d4af37] hover:bg-[#e5c158] text-black font-semibold text-xs transition-all shadow-md hover:shadow-lg"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}
