export type ChildArtistCategorySlug =
  | "boys"
  | "girls"
  | "fresh-faces";

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
  type: "TV Commercial" | "Feature Film" | "Web Series" | "Print Campaign";
  year: string;
  directorOrClient?: string;
}

export interface ChildArtist {
  id: string;
  name: string;
  category: ChildArtistCategorySlug;
  categoryLabel: string;
  role: string;
  age: number;
  height: string;
  experience: string;
  location: string;
  languages: string[];
  guardianName: string;
  guardianContact: string;
  guardianConsent?: string | boolean;
  eyeColor?: string;
  hair?: string;
  mainImage: string;
  badge?: string;
  about: string;
  skills: string[];
  experienceCredits: ExperienceCredit[];
  photos: string[];
  videos: VideoItem[];
  instagram?: InstagramItem[];
  print?: PrintItem[];
}

export interface CategoryMeta {
  slug: ChildArtistCategorySlug;
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
    headline: "Young Male Performers & Models",
    description: "Energetic and charismatic young boys suitable for family commercials, feature film kids roles, and kids apparel shoots.",
    heroDescription: "Explore talented child boys with natural camera confidence for advertisements, serials, and cinema productions.",
    ctaText: "Explore Child Boys",
    countLabel: "15+ Young Boys",
    image: "/images/talents/child-artists/reyansh-verma-main.jpg",
    route: "/child-artists/boys/",
  },
  {
    slug: "girls",
    title: "Child Girls",
    headline: "Young Female Performers & Models",
    description: "Expressive and endearing young girls for FMCG brand TVCs, emotional drama series, and children's fashion catalogues.",
    heroDescription: "Discover charismatic young girls bringing warmth, natural talent, and professional discipline to commercial shoots.",
    ctaText: "Explore Child Girls",
    countLabel: "18+ Young Girls",
    image: "/images/talents/child-artists/ananya-joshi-main.jpg",
    route: "/child-artists/girls/",
  },
  {
    slug: "fresh-faces",
    title: "Fresh Child Talent",
    headline: "New & Emerging Child Performers",
    description: "Promising child actors and new entries looking for debut opportunities in television commercials and web series.",
    heroDescription: "Browse emerging child talent with natural enthusiasm and quick dialogue retention for kids auditions.",
    ctaText: "Explore Fresh Child Talent",
    countLabel: "10+ New Kids",
    image: "/images/talents/child-artists/reyansh-verma-main.jpg",
    route: "/child-artists/fresh-faces/",
  },
];

export const CHILD_ARTISTS_DATA: ChildArtist[] = [
  {
    id: "reyansh-verma",
    name: "Reyansh Verma",
    category: "boys",
    categoryLabel: "Child Artist (Boy)",
    role: "TVC & Feature Film Kid",
    age: 8,
    height: "4'2\"",
    experience: "2 Years",
    location: "New Delhi",
    languages: ["Hindi", "English"],
    guardianName: "Sunita Verma (Mother)",
    guardianContact: "+91 9811X XXXXX",
    mainImage: "/images/talents/child-artists/reyansh-verma-main.jpg",
    badge: "Featured Child Artist",
    about: "Reyansh Verma is a cheerful 8-year-old actor who has featured in multiple national milk brand TVCs and educational brand campaigns.",
    skills: ["Natural Dialogue", "Expressive Facial Acting", "Quick Prompt Retention"],
    experienceCredits: [
      { project: "Amul Health Drink TVC", role: "Main Child Protagonist", type: "TV Commercial", year: "2024" },
    ],
    photos: [
      "/images/talents/child-artists/reyansh-verma/01.jpg",
      "/images/talents/child-artists/reyansh-verma/02.jpg",
      "/images/talents/child-artists/reyansh-verma/03.jpg"
],
    videos: [],
  },
  {
    id: "ananya-joshi",
    name: "Ananya Joshi",
    category: "girls",
    categoryLabel: "Child Artist (Girl)",
    role: "Commercial & Drama Kid",
    age: 7,
    height: "3'11\"",
    experience: "2 Years",
    location: "New Delhi / NCR",
    languages: ["Hindi", "English"],
    guardianName: "Rajesh Joshi (Father)",
    guardianContact: "+91 9810X XXXXX",
    mainImage: "/images/talents/child-artists/ananya-joshi-main.jpg",
    badge: "Verified Child Artist",
    about: "Ananya Joshi is an adorable 7-year-old child actor with natural screen charm, featured in prominent apparel lookbooks and festive commercials.",
    skills: ["Smile Expression", "Apparel Posing", "Director Guidelines Following"],
    experienceCredits: [
      { project: "FirstCry Festive Edit", role: "Lead Kid Model", type: "Print Campaign", year: "2024" },
    ],
    photos: [
      "/images/talents/child-artists/ananya-joshi/01.jpg",
      "/images/talents/child-artists/ananya-joshi/02.jpg",
      "/images/talents/child-artists/ananya-joshi/03.jpg"
],
    videos: [],
  },
];

export function getAllChildArtists(): ChildArtist[] {
  return CHILD_ARTISTS_DATA;
}

export function getChildArtistById(id: string): ChildArtist | undefined {
  return CHILD_ARTISTS_DATA.find((ca) => ca.id === id);
}

export function getChildArtistsByCategory(category: ChildArtistCategorySlug): ChildArtist[] {
  return CHILD_ARTISTS_DATA.filter((ca) => ca.category === category);
}

export function getChildArtistCategoryBySlug(slug: ChildArtistCategorySlug): CategoryMeta | undefined {
  return CHILD_ARTIST_CATEGORIES.find((c) => c.slug === slug);
}

export const getChildCategoryBySlug = getChildArtistCategoryBySlug;

