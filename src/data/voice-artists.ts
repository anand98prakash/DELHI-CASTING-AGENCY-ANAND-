export type VoiceArtistCategorySlug =
  | "voice-over-artists"
  | "dubbing-artists"
  | "radio-voice-artists";

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  thumbnail: string;
  videoUrl?: string;
  description?: string;
}

export interface AudioSample {
  id: string;
  title: string;
  category: string;
  duration: string;
  audioUrl: string;
  language: string;
  tone: string;
  description?: string;
}

export interface ExperienceCredit {
  project: string;
  role: string;
  type: "Movie Dubbing" | "Radio Commercial" | "Corporate Narration" | "Documentary Voiceover";
  year: string;
  directorOrClient?: string;
}

export interface VoiceArtist {
  id: string;
  name: string;
  category: VoiceArtistCategorySlug;
  categoryLabel: string;
  role: string;
  age: number;
  experience: string;
  location: string;
  languages: string[];
  voiceTone: string[];
  voiceTexture?: string;
  vocalPitch?: string;
  accentStyles?: string[];
  accents: string[];
  homeStudio: boolean;
  mainImage: string;
  badge?: string;
  about: string;
  skills: string[];
  experienceCredits: ExperienceCredit[];
  audioSamples: AudioSample[];
  audios?: AudioSample[];
  videos?: VideoItem[];
  photos: string[];
}

export interface CategoryMeta {
  slug: VoiceArtistCategorySlug;
  title: string;
  headline: string;
  description: string;
  heroDescription: string;
  ctaText: string;
  countLabel: string;
  image: string;
  route: string;
}

export const VOICE_ARTIST_CATEGORIES: CategoryMeta[] = [
  {
    slug: "voice-over-artists",
    title: "Voice-Over Artists",
    headline: "Commercial & Corporate Voice Talent",
    description: "Professional voice actors for TVCs, corporate explainer videos, e-learning modules, and audiobook narrations.",
    heroDescription: "Explore versatile voice-over professionals offering crisp diction, authoritative tones, and professional studio delivery.",
    ctaText: "Explore Voice-Over Artists",
    countLabel: "20+ Voice Talents",
    image: "/images/talents/voice-artists/vikram-sharma-main.jpg",
    route: "/voice-artists/voice-over-artists/",
  },
  {
    slug: "dubbing-artists",
    title: "Dubbing Artists",
    headline: "Film & OTT Character Dubbing Specialists",
    description: "Skilled dubbing artists proficient in lip-sync dubbing, emotional character matching, and regional language translation.",
    heroDescription: "Connect with experienced dubbing actors delivering seamless character synchronization for international cinema and web series.",
    ctaText: "Explore Dubbing Artists",
    countLabel: "15+ Dubbing Pros",
    image: "/images/talents/voice-artists/nisha-rao-main.jpg",
    route: "/voice-artists/dubbing-artists/",
  },
  {
    slug: "radio-voice-artists",
    title: "Radio & Podcast Voices",
    headline: "Radio Presenters & Podcast Narrators",
    description: "High-energy radio spot artists and engaging podcast hosts providing upbeat commercial jingles and audio show hosting.",
    heroDescription: "Browse dynamic radio voices bringing rhythmic energy and friendly intimacy to radio advertisements and podcasts.",
    ctaText: "Explore Radio Voices",
    countLabel: "12+ Radio Voices",
    image: "/images/talents/voice-artists/vikram-sharma-main.jpg",
    route: "/voice-artists/radio-voice-artists/",
  },
];

export const VOICE_ARTISTS_DATA: VoiceArtist[] = [
  {
    id: "vikram-sharma",
    name: "Vikram Sharma",
    category: "voice-over-artists",
    categoryLabel: "Voice-Over Artist",
    role: "Corporate & Commercial Voice",
    age: 34,
    experience: "9 Years",
    location: "New Delhi",
    languages: ["Hindi", "English"],
    voiceTone: ["Baritone", "Authoritative", "Warm Corporate", "Documentary"],
    accents: ["Neutral Indian", "North Indian Hindi"],
    homeStudio: true,
    mainImage: "/images/talents/voice-artists/vikram-sharma-main.jpg",
    badge: "Master Voice Artist",
    about: "Vikram Sharma possesses a commanding baritone voice heard across 100+ national TV commercials, documentaries, and luxury car brand launches.",
    skills: ["Deep Baritone", "Documentary Narration", "Commercial Jingle Delivery", "Pro Studio Setup"],
    experienceCredits: [
      { project: "Mahindra SUV Commercial", role: "Main Brand Voice", type: "Radio Commercial", year: "2024" },
    ],
    audioSamples: [],
    photos: [
      "/images/talents/voice-artists/vikram-sharma/01.jpg",
      "/images/talents/voice-artists/vikram-sharma/02.png",
      "/images/talents/voice-artists/vikram-sharma/03.jpg",
      "/images/talents/voice-artists/vikram-sharma/04.jpg"
],
  },
  {
    id: "nisha-rao",
    name: "Nisha Rao",
    category: "dubbing-artists",
    categoryLabel: "Dubbing Artist",
    role: "Character Dubbing & Lip-Sync Pro",
    age: 29,
    experience: "6 Years",
    location: "New Delhi / Mumbai",
    languages: ["Hindi", "English", "Marathi"],
    voiceTone: ["Melodious", "Youthful", "Dramatic", "Character Voice"],
    accents: ["Neutral Hindi", "Urban English"],
    homeStudio: true,
    mainImage: "/images/talents/voice-artists/nisha-rao-main.jpg",
    badge: "Verified Dubbing Pro",
    about: "Nisha Rao is an expressive dubbing artist providing Hindi dubbed character voices for leading Hollywood blockbusters and South Indian feature films.",
    skills: ["Precision Lip Sync", "Dramatic Voice Acting", "Kids & Animated Voices"],
    experienceCredits: [
      { project: "Hollywood Animated Feature Hindi Dub", role: "Female Lead Voice", type: "Movie Dubbing", year: "2024" },
    ],
    audioSamples: [],
    photos: [
      "/images/talents/voice-artists/nisha-rao/01.jpg",
      "/images/talents/voice-artists/nisha-rao/02.png",
      "/images/talents/voice-artists/nisha-rao/03.jpg",
      "/images/talents/voice-artists/nisha-rao/04.jpg"
],
  },
];

export function getAllVoiceArtists(): VoiceArtist[] {
  return VOICE_ARTISTS_DATA;
}

export function getVoiceArtistById(id: string): VoiceArtist | undefined {
  return VOICE_ARTISTS_DATA.find((va) => va.id === id);
}

export function getVoiceArtistsByCategory(category: VoiceArtistCategorySlug): VoiceArtist[] {
  return VOICE_ARTISTS_DATA.filter((va) => va.category === category);
}

export function getVoiceArtistCategoryBySlug(slug: VoiceArtistCategorySlug): CategoryMeta | undefined {
  return VOICE_ARTIST_CATEGORIES.find((c) => c.slug === slug);
}

export const getVoiceCategoryBySlug = getVoiceArtistCategoryBySlug;

