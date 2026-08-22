import React from "react";
import type { ChildArtist } from "@/data/child-artists";
import { ChildArtistCard } from "./ChildArtistCard";

interface ChildArtistGridProps {
  artists: ChildArtist[];
}

export function ChildArtistGrid({ artists }: ChildArtistGridProps) {
  if (artists.length === 0) {
    return (
      <div className="text-center py-16 px-4 rounded-3xl bg-[#181818] border border-white/10">
        <p className="text-white/60 text-base">
          No child artists found matching this category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {artists.map((artist) => (
        <ChildArtistCard key={artist.id} artist={artist} />
      ))}
    </div>
  );
}
