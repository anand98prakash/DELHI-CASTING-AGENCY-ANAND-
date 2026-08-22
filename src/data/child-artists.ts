export type ChildCategorySlug = "boys" | "girls" | "fresh-faces";

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  thumbnail: string;
  videoUrl?: string;
  description?: string;
}

export interface InstagramItem {
  id: string;
  image: string;
  caption: string;
  likes: string;
  comments: string;
  handle?: string;
}

export interface PrintItem {
  id: string;
  image: string;
  brand: string;
  campaign: string;
  year: string;
}

export interface ExperienceCredit {
  project: string;
  role: string;
  type: "TV Commercial" | "Feature Film" | "TV Series" | "Print Campaign" | "Educational Series";
  year: string;
  directorOrClient?: string;
}

export interface ChildArtist {
  id: string;
  name: string;
  category: ChildCategorySlug;
  categoryLabel: string;
  role: string;
  age: number;
  height: string;
  experience: string;
  location: string;
  languages: string[];
  eyeColor: string;
  hair: string;
  guardianConsent: string;
  mainImage: string;
  badge?: string;
  about: string;
  skills: string[];
  experienceCredits: ExperienceCredit[];
  photos: string[];
  videos: VideoItem[];
  instagram: InstagramItem[];
  print: PrintItem[];
}

export interface CategoryMeta {
  slug: ChildCategorySlug;
  title: string;
  headline: string;
  description: string;
  heroDescription: string;
  ctaText: string;
  countLabel: string;
  image: string;
  route: string;
}

export const CHILD_ARTIST_CATEGORIES: CategoryMeta[] = [
  {
    slug: "boys",
    title: "Child Boys",
    headline: "Young Male Actors & Commercial Performers",
    description: "Expressive young boys for children's feature films, national brand TVCs, print campaigns, and educational series.",
    heroDescription: "Browse verified young male performers with natural camera presence, disciplined shoot readiness, and strict parental coordination.",
    ctaText: "Explore Child Boys",
    countLabel: "12+ Verified Artists",
    image: "/images/actors/child artist boys.jpg",
    route: "/child-artists/boys/",
  },
  {
    slug: "girls",
    title: "Child Girls",
    headline: "Young Female Actors & Print Models",
    description: "Talented young girls for storytelling TVCs, apparel brand lookbooks, cinema productions, and OTT family series.",
    heroDescription: "Discover charismatic young female actors with expressive confidence, age-appropriate roles, and guided talent management.",
    ctaText: "Explore Child Girls",
    countLabel: "14+ Verified Artists",
    image: "/images/actors/child artist female.jpg",
    route: "/child-artists/girls/",
  },
  {
    slug: "fresh-faces",
    title: "Fresh Child Artists",
    headline: "Debut Young Talents & Emerging Kid Performers",
    description: "New young performers making their debut in the entertainment and advertising industry with guided parental support.",
    heroDescription: "Explore enthusiastic newcomers ready for children's fashion campaigns, school commercials, and introductory screen auditions.",
    ctaText: "Explore Fresh Child Artists",
    countLabel: "10+ Emerging Artists",
    image: "/images/actors/fresh child artist.webp",
    route: "/child-artists/fresh-faces/",
  },
];

export const CHILD_ARTISTS_DATA: ChildArtist[] = [
  {
    id: "reyansh-verma",
    name: "Reyansh Verma",
    category: "boys",
    categoryLabel: "Child Boy Artist",
    role: "TVC & Feature Film Artist",
    age: 9,
    height: "4'2\"",
    experience: "3 Years",
    location: "New Delhi",
    languages: ["Hindi", "English"],
    eyeColor: "Dark Brown",
    hair: "Black",
    guardianConsent: "Verified Parental Guardian",
    mainImage: "/media/dca/child-artists/dca-child-artist-boy-01.jpg",
    badge: "Verified DCA Junior",
    about: "Reyansh Verma is an energetic 9-year-old child actor who has starred in prominent national brand commercials. Known for quick dialogue memorization and natural expressions on set.",
    skills: ["Natural Acting", "Expressive Reactions", "Cycling", "Basic Martial Arts", "Hindi Dialogue Delivery"],
    experienceCredits: [
      { project: "Horlicks Energy Boost National TVC", role: "Lead Child Artist", type: "TV Commercial", year: "2025" },
      { project: "Amazon India Great Indian Festival", role: "Son in Family Story", type: "TV Commercial", year: "2024" },
    ],
    photos: ["/media/dca/child-artists/dca-child-artist-boy-01.jpg", "/media/dca/models/dca-model-fitness-01.jpg"],
    videos: [
      {
        id: "reyansh-showreel",
        title: "Reyansh Verma Audition Reel",
        category: "Audition Reel",
        duration: "0:35",
        thumbnail: "/media/dca/child-artists/dca-child-artist-boy-01.jpg",
        videoUrl: "/videos/actors/actor-showreel-demo.mp4",
        description: "Monologue introduction and commercial ad compilation.",
      },
    ],
    instagram: [],
    print: [
      { id: "rp1", image: "/media/dca/child-artists/dca-child-artist-boy-01.jpg", brand: "Max Kids Wear", campaign: "Festive Back to School", year: "2025" },
    ],
  },
  {
    id: "ananya-joshi",
    name: "Ananya Joshi",
    category: "girls",
    categoryLabel: "Child Girl Artist",
    role: "Commercial & Print Artist",
    age: 8,
    height: "3'11\"",
    experience: "2 Years",
    location: "New Delhi / NCR",
    languages: ["Hindi", "English"],
    eyeColor: "Brown",
    hair: "Dark Brown",
    guardianConsent: "Verified Parental Guardian",
    mainImage: "/media/dca/models/dca-model-plus-size-01.jpg",
    badge: "Verified DCA Junior",
    about: "Ananya Joshi is a bright and photogenic child artist with experience in children's apparel campaigns, television ads, and print lookbooks. Highly cooperative and comfortable in front of cameras.",
    skills: ["Camera Poise", "Expressive Smile", "Kathak Beginner", "Poem Recitation"],
    experienceCredits: [
      { project: "Dettol Healthy Kids Campaign", role: "Featured Girl", type: "TV Commercial", year: "2025" },
      { project: "FabIndia Kids Festive Catalogue", role: "Print Model", type: "Print Campaign", year: "2024" },
    ],
    photos: ["/media/dca/models/dca-model-plus-size-01.jpg", "/media/dca/models/dca-model-female-01.jpg"],
    videos: [],
    instagram: [],
    print: [
      { id: "ap1", image: "/media/dca/models/dca-model-plus-size-01.jpg", brand: "FabIndia Kids", campaign: "Festive Joy Collection", year: "2025" },
    ],
  },
  {
    id: "vivaan-malhotra",
    name: "Vivaan Malhotra",
    category: "fresh-faces",
    categoryLabel: "Fresh Child Artist",
    role: "Emerging Child Performer",
    age: 7,
    height: "3'9\"",
    experience: "1 Year",
    location: "New Delhi",
    languages: ["Hindi", "English"],
    eyeColor: "Black",
    hair: "Black",
    guardianConsent: "Verified Parental Guardian",
    mainImage: "/media/dca/models/dca-model-fitness-01.jpg",
    badge: "New Talent",
    about: "Vivaan Malhotra is an enthusiastic newcomer with strong theatrical flair and expressive storytelling ability. Ready for auditions in TVCs and digital brand commercials.",
    skills: ["Impromptu Storytelling", "Singing", "Natural Emotions"],
    experienceCredits: [
      { project: "Colgate Bright Smiles School Ad", role: "Student Artist", type: "TV Commercial", year: "2025" },
    ],
    photos: ["/media/dca/models/dca-model-fitness-01.jpg", "/media/dca/child-artists/dca-child-artist-boy-01.jpg"],
    videos: [],
    instagram: [],
    print: [],
  },
];

export function getAllChildArtists(): ChildArtist[] {
  return CHILD_ARTISTS_DATA;
}

export function getChildArtistById(id: string): ChildArtist | undefined {
  return CHILD_ARTISTS_DATA.find((c) => c.id === id);
}

export function getChildArtistsByCategory(category: ChildCategorySlug): ChildArtist[] {
  return CHILD_ARTISTS_DATA.filter((c) => c.category === category);
}

export function getChildCategoryBySlug(slug: ChildCategorySlug): CategoryMeta | undefined {
  return CHILD_ARTIST_CATEGORIES.find((c) => c.slug === slug);
}
