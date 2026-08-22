import React from "react";
import {
  Calendar,
  Ruler,
  Award,
  MapPin,
  Languages,
  Eye,
  Sparkles,
} from "lucide-react";
import type { Actor } from "@/data/actors";

interface ActorQuickSpecsProps {
  actor: Actor;
}

export function ActorQuickSpecs({ actor }: ActorQuickSpecsProps) {
  const specs = [
    {
      label: "Age",
      value: `${actor.age} Years`,
      icon: Calendar,
    },
    {
      label: "Height",
      value: actor.height,
      icon: Ruler,
    },
    {
      label: "Experience",
      value: actor.experience,
      icon: Award,
    },
    {
      label: "Location",
      value: actor.location,
      icon: MapPin,
    },
    {
      label: "Languages",
      value: actor.languages.join(", "),
      icon: Languages,
    },
    {
      label: "Eye Color",
      value: actor.eyeColor,
      icon: Eye,
    },
    {
      label: "Hair Color",
      value: actor.hair,
      icon: Sparkles,
    },
  ];

  return (
    <div className="bg-[#181818] border border-white/10 rounded-2xl p-5 sm:p-6">
      <h3 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-4 flex items-center gap-2">
        <span>Model Details</span>
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4">
        {specs.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="bg-white/[0.03] border border-white/5 rounded-xl p-3.5 hover:border-[#d4af37]/30 transition-colors"
            >
              <div className="flex items-center gap-1.5 text-white/50 text-xs font-medium mb-1">
                <Icon className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{item.label}</span>
              </div>
              <p className="text-white font-semibold text-sm sm:text-base leading-snug">
                {item.value}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
