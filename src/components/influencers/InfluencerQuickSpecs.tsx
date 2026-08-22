"use client";

import React from "react";
import {
  Users,
  TrendingUp,
  MapPin,
  Globe,
  Sparkles,
  Share2,
  Calendar,
} from "lucide-react";
import type { Influencer } from "@/data/influencers";

interface InfluencerQuickSpecsProps {
  influencer: Influencer;
}

export function InfluencerQuickSpecs({ influencer }: InfluencerQuickSpecsProps) {
  const specs = [
    { label: "Platform", value: influencer.platform, icon: Share2 },
    { label: "Total Followers", value: influencer.followers, icon: Users },
    { label: "Engagement Rate", value: influencer.engagementRate, icon: TrendingUp },
    { label: "Primary Niche", value: influencer.primaryNiche, icon: Sparkles },
    { label: "Handle", value: influencer.handle, icon: Globe },
    { label: "Location", value: influencer.location, icon: MapPin },
    { label: "Languages", value: influencer.languages.join(", "), icon: Globe },
    { label: "Age", value: `${influencer.age} yrs`, icon: Calendar },
  ];

  return (
    <div className="bg-[#181818] border border-white/10 rounded-2xl p-5 sm:p-6 shadow-md">
      <h3 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-4 flex items-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
        <span>Creator Details</span>
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
        {specs.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex flex-col justify-between"
            >
              <div className="flex items-center gap-1.5 text-white/50 text-[11px] font-medium mb-1">
                <Icon className="w-3.5 h-3.5 text-[#d4af37]/80 shrink-0" />
                <span className="truncate">{item.label}</span>
              </div>
              <div className="text-white text-xs sm:text-sm font-semibold truncate" title={item.value}>
                {item.value}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
