export type VoiceArtistCategorySlug =
  | "dubbing-artists"
  | "radio-voice-artists"
  | "voice-over-artists";

export interface AudioItem {
  id: string;
  title: string;
  category: string;
  language: string;
  duration: string;
  audioUrl?: string;
  description?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  thumbnail: string;
  videoUrl?: string;
  description?: string;
}

export interface ExperienceCredit {
  project: string;
  role: string;
  type: "Dubbed Film / OTT" | "TV / Radio Commercial" | "Animation / Game" | "Audiobook Narration" | "Documentary Voiceover";
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
  location: string;
  languages: string[];
  voiceTexture: string;
  vocalPitch: string;
  accentStyles: string[];
  homeStudio: string;
  mainImage: string;
  badge?: string;
  about: string;
  skills: string[];
  experienceCredits: ExperienceCredit[];
  audios: AudioItem[];
  videos: VideoItem[];
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
    slug: "dubbing-artists",
    title: "Dubbing Artists",
    headline: "Lip-Sync Dubbing & Multilingual Film Specialists",
    description: "Experienced voice actors specializing in tight lip-sync dubbing for Hollywood & South Indian blockbusters, OTT series, and foreign dramas into Hindi and regional languages.",
    heroDescription: "Connect with certified dubbing actors who master character nuances, emotional modulation, and precise lip-sync timing.",
    ctaText: "Explore Dubbing Artists",
    countLabel: "18+ Dubbing Specialists",
    image: "/images/actors/Dubbing Artists.jpeg",
    route: "/voice-artists/dubbing-artists/",
  },
  {
    slug: "voice-over-artists",
    title: "Voice Over Artists",
    headline: "Commercial, Corporate & Documentary Narrators",
    description: "Versatile voice talents delivering rich, persuasive narration for national TV/radio commercials, corporate presentations, documentaries, and audiobooks.",
    heroDescription: "Browse dynamic voice over talents with broadcast-grade vocal clarity, warm storytelling, and professional home studios.",
    ctaText: "Explore Voice Over Artists",
    countLabel: "20+ Voice Talents",
    image: "/images/actors/Voice Over Artists.webp",
    route: "/voice-artists/voice-over-artists/",
  },
  {
    slug: "radio-voice-artists",
    title: "Radio Voice Artists & RJs",
    headline: "Radio Jockeys, Podcasters & Show Hosts",
    description: "Energetic radio personalities and podcast hosts with captivating modulation, wit, spontaneity, and broadcast mastery.",
    heroDescription: "Discover charismatic radio presenters, podcast moderators, and live broadcast voices for on-air and digital audio programming.",
    ctaText: "Explore Radio Voice Artists",
    countLabel: "14+ Radio Talents",
    image: "/images/actors/Radio Voice Artists & RJs.jpg",
    route: "/voice-artists/radio-voice-artists/",
  },
];

export const VOICE_ARTISTS_DATA: VoiceArtist[] = [
  {
    id: "vikram-sharma",
    name: "Vikram Sharma",
    category: "dubbing-artists",
    categoryLabel: "Dubbing Artist",
    role: "Lead Dubbing Voice Actor",
    age: 36,
    location: "New Delhi / Mumbai",
    languages: ["Hindi (Native)", "English", "Punjabi"],
    voiceTexture: "Deep, Authoritative & Warm Baritone",
    vocalPitch: "Medium-Low to Deep",
    accentStyles: ["Standard Hindi", "Urban Indian English", "North Indian Colloquial"],
    homeStudio: "Broadcast Grade Studio (Neumann U87 / Apollo Twin)",
    mainImage: "/media/dca/models/dca-model-commercial-01.jpg",
    badge: "Senior Voice Artist",
    about: "Vikram Sharma is an industry-recognized voice talent and dubbing director who has lent his voice to leading international actors in Hindi-dubbed Hollywood blockbusters, Netflix originals, and national automotive commercials.",
    skills: ["Precision Lip-Sync Dubbing", "Character Modulation", "Documentary Narration", "Commercial Ad Spills", "Home Studio Turnaround (<24h)"],
    experienceCredits: [
      { project: "Hollywood Superhero Blockbuster (Hindi Dub)", role: "Principal Protagonist Voice", type: "Dubbed Film / OTT", year: "2025" },
      { project: "National Geographic Wildlife India", role: "Narrator", type: "Documentary Voiceover", year: "2024" },
      { project: "Audi India Prestige Series Ad", role: "Brand Voice", type: "TV / Radio Commercial", year: "2024" },
    ],
    audios: [
      {
        id: "vs-commercial-demo",
        title: "Vikram Sharma - Commercial Voice Reel (Hindi & English)",
        category: "Commercial Voiceover",
        language: "Hindi / English",
        duration: "1:15",
        description: "Showcasing luxury automotive, banking, and energetic FMCG ad deliveries.",
      },
      {
        id: "vs-dubbing-demo",
        title: "Vikram Sharma - Action & Drama Dubbing Samples",
        category: "Film Dubbing",
        language: "Hindi",
        duration: "1:40",
        description: "Emotional confrontations, heroic monologues, and villain modulation.",
      },
    ],
    videos: [
      {
        id: "vikram-behind-mic",
        title: "Vikram Sharma Behind The Mic",
        category: "Studio Session",
        duration: "0:45",
        thumbnail: "/media/dca/models/dca-model-commercial-01.jpg",
        videoUrl: "/videos/actors/rahul-showreel.mp4",
        description: "Live studio dubbing session and dialogue delivery.",
      },
    ],
    photos: ["/media/dca/models/dca-model-commercial-01.jpg", "/media/dca/models/dca-model-male-01.jpg"],
  },
  {
    id: "nisha-rao",
    name: "Nisha Rao",
    category: "voice-over-artists",
    categoryLabel: "Voice Over Artist",
    role: "Commercial & Audiobook Narrator",
    age: 29,
    location: "New Delhi",
    languages: ["English (Neutral)", "Hindi", "Marathi"],
    voiceTexture: "Silky, Articulate, Conversational & Trustworthy",
    vocalPitch: "Medium-High",
    accentStyles: ["Neutral Indian English", "Contemporary Urban Hindi", "Corporate Narrative"],
    homeStudio: "Professional Acoustic Booth (Rode NT1-A / Focusrite 2i2)",
    mainImage: "/media/dca/models/dca-model-female-01.jpg",
    badge: "Verified DCA Voice",
    about: "Nisha Rao specializes in conversational and inspiring corporate storytelling, e-learning modules, cosmetics commercial ads, and bestselling fiction audiobook narration.",
    skills: ["Conversational Voiceovers", "Audiobook Narration", "E-Learning Modules", "Cosmetics Ad Modulation", "IVR Systems"],
    experienceCredits: [
      { project: "Audible India Bestseller Narration", role: "Sole Narrator", type: "Audiobook Narration", year: "2025" },
      { project: "Lakmé Radiant Skin TVC Voice", role: "Brand Voice", type: "TV / Radio Commercial", year: "2024" },
    ],
    audios: [
      {
        id: "nr-commercial",
        title: "Nisha Rao - Beauty & Lifestyle Voice Reel",
        category: "Commercial Voiceover",
        language: "English / Hindi",
        duration: "1:00",
        description: "Warm, soothing, and sophisticated lifestyle brand deliveries.",
      },
    ],
    videos: [],
    photos: ["/media/dca/models/dca-model-female-01.jpg", "/media/dca/models/dca-model-plus-size-01.jpg"],
  },
  {
    id: "alok-kumar",
    name: "Alok Kumar",
    category: "radio-voice-artists",
    categoryLabel: "Radio Voice Artist",
    role: "Radio Jockey & Podcast Host",
    age: 32,
    location: "New Delhi / NCR",
    languages: ["Hindi", "English", "Haryanvi"],
    voiceTexture: "Punchy, Dynamic, Witty & High Energy",
    vocalPitch: "Medium",
    accentStyles: ["Delhi Youth Slang", "Fast-Paced Radio Patter", "Comedic Accents"],
    homeStudio: "Broadcast Radio Setup (Shure SM7B / Cloudlifter)",
    mainImage: "/media/dca/models/dca-model-fitness-01.jpg",
    badge: "RJ & Podcaster",
    about: "Alok Kumar (RJ Alok) is a former prime-time Delhi radio jockey and host of top-charting comedy podcasts with spontaneous wit and rapid comedic timing.",
    skills: ["Live Radio Patter", "Podcast Hosting", "Character Comedy", "Spot Dubbing", "Event Emcee Voice"],
    experienceCredits: [
      { project: "Delhi Morning Drive Radio Show", role: "Prime-Time RJ", type: "TV / Radio Commercial", year: "2025" },
    ],
    audios: [
      {
        id: "ak-radio-link",
        title: "RJ Alok - Radio Aircheck & Show Intro Samples",
        category: "Radio Jockey Reel",
        language: "Hindi",
        duration: "1:20",
        description: "Energetic radio links, listener interactions, and punchy drops.",
      },
    ],
    videos: [],
    photos: ["/media/dca/models/dca-model-fitness-01.jpg", "/media/dca/models/dca-model-male-01.jpg"],
  },
];

export function getAllVoiceArtists(): VoiceArtist[] {
  return VOICE_ARTISTS_DATA;
}

export function getVoiceArtistById(id: string): VoiceArtist | undefined {
  return VOICE_ARTISTS_DATA.find((v) => v.id === id);
}

export function getVoiceArtistsByCategory(category: VoiceArtistCategorySlug): VoiceArtist[] {
  return VOICE_ARTISTS_DATA.filter((v) => v.category === category);
}

export function getVoiceCategoryBySlug(slug: VoiceArtistCategorySlug): CategoryMeta | undefined {
  return VOICE_ARTIST_CATEGORIES.find((c) => c.slug === slug);
}
