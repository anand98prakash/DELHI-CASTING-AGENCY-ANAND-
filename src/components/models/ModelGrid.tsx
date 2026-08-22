import React from "react";
import type { Model } from "@/data/models";
import { ModelCard } from "./ModelCard";

interface ModelGridProps {
  models: Model[];
}

export function ModelGrid({ models }: ModelGridProps) {
  if (models.length === 0) {
    return (
      <div className="text-center py-16 px-4 rounded-3xl bg-[#181818] border border-white/10">
        <p className="text-white/60 text-base">
          No models found matching this category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {models.map((model) => (
        <ModelCard key={model.id} model={model} />
      ))}
    </div>
  );
}
