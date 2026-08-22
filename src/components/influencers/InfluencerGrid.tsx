import React from "react";
import type { Influencer } from "@/data/influencers";
import { InfluencerCard } from "./InfluencerCard";

interface InfluencerGridProps {
  influencers: Influencer[];
}

export function InfluencerGrid({ influencers }: InfluencerGridProps) {
  if (influencers.length === 0) {
    return (
      <div className="text-center py-16 px-4 rounded-3xl bg-[#181818] border border-white/10">
        <p className="text-white/60 text-base">
          No influencers found matching this category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {influencers.map((influencer) => (
        <InfluencerCard key={influencer.id} influencer={influencer} />
      ))}
    </div>
  );
}
