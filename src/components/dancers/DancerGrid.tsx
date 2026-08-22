import React from "react";
import type { Dancer } from "@/data/dancers";
import { DancerCard } from "./DancerCard";

interface DancerGridProps {
  dancers: Dancer[];
}

export function DancerGrid({ dancers }: DancerGridProps) {
  if (dancers.length === 0) {
    return (
      <div className="text-center py-16 px-4 rounded-3xl bg-[#181818] border border-white/10">
        <p className="text-white/60 text-base">
          No dancers found matching this category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {dancers.map((dancer) => (
        <DancerCard key={dancer.id} dancer={dancer} />
      ))}
    </div>
  );
}
