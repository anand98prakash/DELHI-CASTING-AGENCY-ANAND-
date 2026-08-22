import React from "react";
import type { Actor } from "@/data/actors";
import { ActorCard } from "./ActorCard";

interface ActorGridProps {
  actors: Actor[];
  emptyMessage?: string;
}

export function ActorGrid({
  actors,
  emptyMessage = "No actors found in this category at this time.",
}: ActorGridProps) {
  if (actors.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-[#181818] border border-white/10 rounded-2xl">
        <p className="text-white/60 text-lg">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {actors.map((actor) => (
        <ActorCard key={actor.id} actor={actor} />
      ))}
    </div>
  );
}
