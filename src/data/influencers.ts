export type InfluencerCategorySlug =
  | "fashion-influencers"
  | "lifestyle-influencers"
  | "instagram-influencers"
  | "youtube-influencers";

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
  type: "Brand Collaboration" | "Product Launch" | "Digital Campaign" | "Event Attendance";
  year: string;
  directorOrClient?: string;
}

export interface Influencer {
  id: string;
  name: string;
  category: InfluencerCategorySlug;
  categoryLabel: string;
  role: string;
  age: number;
  height: string;
  experience: string;
  location: string;
  languages: string[];
  followersCount: string;
  followers?: string;
  handle?: string;
  platform?: string;
  engagementRate?: string;
  primaryNiche?: string;
  niche: string[];
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
  slug: InfluencerCategorySlug;
  title: string;
  headline: string;
  description: string;
  heroDescription: string;
  ctaText: string;
  countLabel: string;
  image: string;
  route: string;
}

export const INFLUENCER_CATEGORIES: CategoryMeta[] = [
  {
    slug: "fashion-influencers",
    title: "Fashion Influencers",
    headline: "Style Creators & Fashion Content Specialists",
    description: "Trending fashion creators specializing in outfit styling reels, luxury brand unboxings, seasonal lookbooks, and fashion week coverage.",
    heroDescription: "Explore fashion creators driving style trends, street fashion, and high-impact brand partnerships across digital platforms.",
    ctaText: "Explore Fashion Influencers",
    countLabel: "20+ Style Creators",
    image: "/images/talents/influencers/aanya-mehta-main.jpg",
    route: "/influencers/fashion-influencers/",
  },
  {
    slug: "lifestyle-influencers",
    title: "Lifestyle Influencers",
    headline: "Wellness, Travel & Daily Vlogging Creators",
    description: "Engaging lifestyle creators sharing authentic daily routines, luxury hotel reviews, wellness tips, and consumer tech recommendations.",
    heroDescription: "Connect with authentic lifestyle creators driving consumer trust, brand integration, and high engagement across social media.",
    ctaText: "Explore Lifestyle Influencers",
    countLabel: "25+ Lifestyle Creators",
    image: "/images/talents/influencers/rohan-kapoor-inf-main.jpg",
    route: "/influencers/lifestyle-influencers/",
  },
  {
    slug: "instagram-influencers",
    title: "Instagram Influencers",
    headline: "Reels & Short-Form Content Pioneers",
    description: "High-reach Instagram creators commanding loyal followings through viral reels, aesthetic grids, and interactive stories.",
    heroDescription: "Browse high-converting Instagram creators with verified engagement rates for sponsored posts and digital activations.",
    ctaText: "Explore Instagram Influencers",
    countLabel: "30+ Instagram Creators",
    image: "/images/talents/influencers/aanya-mehta-main.jpg",
    route: "/influencers/instagram-influencers/",
  },
  {
    slug: "youtube-influencers",
    title: "YouTube Influencers",
    headline: "Long-Form Vloggers & Video Reviewers",
    description: "Established YouTubers producing in-depth video reviews, cinematic travel vlogs, beauty tutorials, and brand integration videos.",
    heroDescription: "Discover high-authority YouTube creators offering deep brand integration, dedicated video reviews, and long-term audience impact.",
    ctaText: "Explore YouTube Influencers",
    countLabel: "15+ YouTube Creators",
    image: "/images/talents/influencers/rohan-kapoor-inf-main.jpg",
    route: "/influencers/youtube-influencers/",
  },
];

export const INFLUENCERS_DATA: Influencer[] = [
  {
    id: "aanya-mehta",
    name: "Aanya Mehta",
    category: "fashion-influencers",
    categoryLabel: "Fashion Influencer",
    role: "Luxury Fashion & Beauty Creator",
    age: 24,
    height: "5'8\"",
    experience: "4 Years",
    location: "New Delhi / NCR",
    languages: ["English", "Hindi"],
    followersCount: "450K+",
    niche: ["Luxury Fashion", "Skincare", "Haute Couture", "Travel"],
    mainImage: "/images/talents/influencers/aanya-mehta-main.jpg",
    badge: "Top Fashion Creator",
    about: "Aanya Mehta is a prominent Delhi-based fashion and luxury lifestyle content creator known for high-aesthetic Instagram reels and brand partnerships with global cosmetics brands.",
    skills: ["Reel Direction", "Aesthetic Styling", "Brand Integration", "Live Hosting"],
    experienceCredits: [
      { project: "Sephora India Festive Edit", role: "Brand Ambassador", type: "Brand Collaboration", year: "2025" },
    ],
    photos: [
      "/images/talents/influencers/aanya-mehta/01.jpg",
      "/images/talents/influencers/aanya-mehta/02.jpg",
      "/images/talents/influencers/aanya-mehta/03.jpg",
      "/images/talents/influencers/aanya-mehta/04.jpg",
      "/images/talents/influencers/aanya-mehta/05.jpg"
],
    videos: [],
    instagram: [],
    print: [],
  },
  {
    id: "rohan-kapoor",
    name: "Rohan Kapoor",
    category: "lifestyle-influencers",
    categoryLabel: "Lifestyle Influencer",
    role: "Fitness & Tech Vlogger",
    age: 27,
    height: "6'0\"",
    experience: "5 Years",
    location: "New Delhi / Gurugram",
    languages: ["English", "Hindi", "Punjabi"],
    followersCount: "680K+",
    niche: ["Fitness", "Consumer Tech", "Men's Grooming", "Automotive"],
    mainImage: "/images/talents/influencers/rohan-kapoor-inf-main.jpg",
    badge: "Verified Creator",
    about: "Rohan Kapoor is a dynamic lifestyle vlogger and tech enthusiast delivering high-production video reviews, workout routines, and men's grooming recommendations.",
    skills: ["Cinematic Vlogging", "Product Reviewing", "Fitness Coaching", "Public Speaking"],
    experienceCredits: [
      { project: "OnePlus Nord Series Launch", role: "Featured Tech Reviewer", type: "Product Launch", year: "2025" },
    ],
    photos: [
      "/images/talents/influencers/rohan-kapoor/01.jpg",
      "/images/talents/influencers/rohan-kapoor/02.jpg",
      "/images/talents/influencers/rohan-kapoor/03.jpg",
      "/images/talents/influencers/rohan-kapoor/04.jpeg",
      "/images/talents/influencers/rohan-kapoor/05.jpg"
],
    videos: [],
    instagram: [],
    print: [],
  },
];

export function getAllInfluencers(): Influencer[] {
  return INFLUENCERS_DATA;
}

export function getInfluencerById(id: string): Influencer | undefined {
  return INFLUENCERS_DATA.find((inf) => inf.id === id);
}

export function getInfluencersByCategory(category: InfluencerCategorySlug): Influencer[] {
  return INFLUENCERS_DATA.filter((inf) => inf.category === category);
}

export function getInfluencerCategoryBySlug(slug: InfluencerCategorySlug): CategoryMeta | undefined {
  return INFLUENCER_CATEGORIES.find((c) => c.slug === slug);
}
