import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllActors,
  getActorById,
  getRelatedActors,
} from "@/data/actors";
import { fetchPublicArtistById } from "@/lib/publicTalents";
import { ActorProfileView } from "@/components/actors/ActorProfileView";

export const dynamicParams = true;

interface ActorProfilePageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const actors = getAllActors();
  return actors.map((actor) => ({
    id: actor.id,
  }));
}

export async function generateMetadata({
  params,
}: ActorProfilePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  let actor = getActorById(resolvedParams.id);
  if (!actor) {
    actor = (await fetchPublicArtistById(resolvedParams.id)) || undefined;
  }

  if (!actor) {
    return {
      title: "Actor Not Found | Delhi Casting Agency",
    };
  }

  const pageTitle = `${actor.name} - ${actor.role} | Delhi Casting Agency (DCA)`;
  const pageDescription = `${actor.name} (${actor.categoryLabel}) - ${actor.experience} experience. ${actor.about.slice(0, 150)}... Book for Bollywood films, OTT web series & commercial shoots.`;
  const canonicalUrl = `https://delhicastingagency.com/actors/profile/${actor.id}`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      type: "profile",
      siteName: "Delhi Casting Agency",
      images: [
        {
          url: actor.mainImage,
          width: 800,
          height: 1000,
          alt: `${actor.name} - Actor Portfolio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [actor.mainImage],
    },
  };
}

export default async function ActorProfilePage({
  params,
}: ActorProfilePageProps) {
  const resolvedParams = await params;
  let actor = getActorById(resolvedParams.id);
  if (!actor) {
    actor = (await fetchPublicArtistById(resolvedParams.id)) || undefined;
  }

  if (!actor) {
    notFound();
  }

  const relatedActors = getRelatedActors(actor.id, actor.category, 8);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: actor.name,
    jobTitle: actor.role,
    description: actor.about,
    image: actor.mainImage,
    url: `https://delhicastingagency.com/actors/profile/${actor.id}`,
    worksFor: {
      "@type": "Organization",
      name: "Delhi Casting Agency",
      url: "https://delhicastingagency.com",
    },
    knowsAbout: [actor.categoryLabel, ...(actor.skills || [])],
    height: actor.height,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ActorProfileView actor={actor} relatedActors={relatedActors} />
    </>
  );
}
