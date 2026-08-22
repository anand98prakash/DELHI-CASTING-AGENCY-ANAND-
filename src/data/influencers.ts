export type InfluencerCategorySlug =
  | "instagram-influencers"
  | "youtube-influencers"
  | "lifestyle-influencers"
  | "fashion-influencers";

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
  type: "Brand Collaboration" | "Sponsored Reel / Video" | "Event Ambassador" | "Product Launch" | "Digital Campaign";
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
  location: string;
  languages: string[];
  platform: string;
  followers: string;
  engagementRate: string;
  primaryNiche: string;
  handle: string;
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
    slug: "instagram-influencers",
    title: "Instagram Influencers",
    headline: "Visual Storytellers, Trendsetters & Brand Creators",
    description: "High-engagement Instagram creators specializing in reels, aesthetic imagery, brand integrations, and lifestyle endorsements.",
    heroDescription: "Connect with verified Instagram creators driving high-impact brand awareness, authentic reel storytelling, and targeted engagement.",
    ctaText: "Explore Instagram Influencers",
    countLabel: "20+ Verified Creators",
    image: "/images/actors/insta influencer.png",
    route: "/influencers/instagram-influencers/",
  },
  {
    slug: "youtube-influencers",
    title: "YouTube Influencers",
    headline: "Long-Form Content Creators, Vloggers & Reviewers",
    description: "Established YouTubers creating deep-dive product reviews, travel vlogs, tech breakdowns, and episodic entertainment.",
    heroDescription: "Browse dynamic YouTube creators offering dedicated sponsorship integrations, long-form reviews, and high-retention video content.",
    ctaText: "Explore YouTube Influencers",
    countLabel: "15+ Channel Partners",
    image: "/images/actors/youtube influencer.jpg",
    route: "/influencers/youtube-influencers/",
  },
  {
    slug: "lifestyle-influencers",
    title: "Lifestyle Influencers",
    headline: "Daily Life, Travel, Food & Wellness Creators",
    description: "Relatable lifestyle creators sharing everyday inspiration, hospitality reviews, wellness routines, and experiential stories.",
    heroDescription: "Discover engaging lifestyle creators connecting premium hospitality, wellness, and consumer brands with passionate audiences.",
    ctaText: "Explore Lifestyle Influencers",
    countLabel: "18+ Lifestyle Creators",
    image: "/images/actors/lifestyle influencer.jpg",
    route: "/influencers/lifestyle-influencers/",
  },
  {
    slug: "fashion-influencers",
    title: "Fashion Influencers",
    headline: "Style Curators, Lookbook Creators & Beauty Gurus",
    description: "Fashion-forward creators sharing style lookbooks, beauty transformations, luxury unboxings, and red-carpet trend coverage.",
    heroDescription: "Explore influential fashion and beauty creators with strong aesthetic curation and high-converting audience trust.",
    ctaText: "Explore Fashion Influencers",
    countLabel: "16+ Fashion Creators",
    image: "/images/actors/fashion influencer.png",
    route: "/influencers/fashion-influencers/",
  },
];

export const INFLUENCERS_DATA: Influencer[] = [
  {
    id: "aanya-mehta",
    name: "Aanya Mehta",
    category: "instagram-influencers",
    categoryLabel: "Instagram Influencer",
    role: "Fashion & Lifestyle Creator",
    age: 24,
    location: "New Delhi / Mumbai",
    languages: ["English", "Hindi"],
    platform: "Instagram & YouTube",
    followers: "450K+",
    engagementRate: "4.8%",
    primaryNiche: "Fashion, Luxury & Beauty",
    handle: "@aanyamehta.style",
    mainImage: "/media/dca/models/dca-model-female-01.jpg",
    badge: "Top Tier Creator",
    about: "Aanya Mehta is a Delhi-based digital creator renowned for editorial aesthetics, curated fashion lookbooks, and authentic luxury brand integrations. Her audience engages heavily with her daily styling tips and beauty recommendations.",
    skills: ["Reel Production", "Brand Endorsement", "Aesthetic Photography", "Live Hosting", "Beauty Reviews"],
    experienceCredits: [
      { project: "L'Oréal Paris Festive Glow Campaign", role: "Digital Brand Ambassador", type: "Digital Campaign", year: "2025" },
      { project: "Zara Autumn/Winter Lookbook Reel", role: "Creator Collaboration", type: "Sponsored Reel / Video", year: "2024" },
    ],
    photos: ["/media/dca/models/dca-model-female-01.jpg", "/media/dca/models/dca-model-fashion-01.jpg"],
    videos: [
      {
        id: "aanya-reel",
        title: "Aanya Mehta Creator Showreel",
        category: "Creator Reel",
        duration: "0:45",
        thumbnail: "/media/dca/models/dca-model-female-01.jpg",
        videoUrl: "/videos/actors/ananya-showreel.mp4",
        description: "Highlights of top-performing brand campaigns and lifestyle content.",
      },
    ],
    instagram: [
      { id: "ai1", image: "/media/dca/models/dca-model-female-01.jpg", caption: "Festive glam with @lorealparis ✨", likes: "48.2k", comments: "1.2k", handle: "@aanyamehta.style" },
    ],
    print: [
      { id: "aip1", image: "/media/dca/models/dca-model-female-01.jpg", brand: "L'Oréal Paris", campaign: "Festive Radiance 2025", year: "2025" },
    ],
  },
  {
    id: "rohan-kapoor",
    name: "Rohan Kapoor",
    category: "youtube-influencers",
    categoryLabel: "YouTube Creator",
    role: "Tech & Lifestyle Vlogger",
    age: 27,
    location: "New Delhi / Gurugram",
    languages: ["English", "Hindi"],
    platform: "YouTube (820K Subs)",
    followers: "820K+",
    engagementRate: "6.2%",
    primaryNiche: "Consumer Tech & Smart Living",
    handle: "@rohankapoortech",
    mainImage: "/media/dca/models/dca-model-male-01.jpg",
    badge: "Verified Creator",
    about: "Rohan Kapoor runs one of North India's fastest-growing tech and lifestyle YouTube channels, producing cinematic hardware reviews, travel vlogs, and consumer tech buying guides.",
    skills: ["Cinematic Video Production", "Tech Reviews", "Keynote Coverage", "Long-form Storytelling"],
    experienceCredits: [
      { project: "Samsung Galaxy Unpacked Keynote Sponsor", role: "Official Tech Partner", type: "Brand Collaboration", year: "2025" },
    ],
    photos: ["/media/dca/models/dca-model-male-01.jpg", "/media/dca/models/dca-model-commercial-01.jpg"],
    videos: [
      {
        id: "rohan-vlog",
        title: "Rohan Kapoor Channel Reel",
        category: "YouTube Reel",
        duration: "0:50",
        thumbnail: "/media/dca/models/dca-model-male-01.jpg",
        videoUrl: "/videos/actors/rahul-showreel.mp4",
        description: "Best cinematic moments and brand integration highlights.",
      },
    ],
    instagram: [],
    print: [],
  },
  {
    id: "zara-khan",
    name: "Zara Khan",
    category: "lifestyle-influencers",
    categoryLabel: "Lifestyle Influencer",
    role: "Travel & Wellness Creator",
    age: 26,
    location: "New Delhi / Goa",
    languages: ["English", "Hindi", "Urdu"],
    platform: "Instagram & Threads",
    followers: "310K+",
    engagementRate: "5.1%",
    primaryNiche: "Experiential Travel & Wellness",
    handle: "@zarakhan.wander",
    mainImage: "/media/dca/models/dca-model-plus-size-01.jpg",
    badge: "Lifestyle Partner",
    about: "Zara Khan documents boutique travel, mindful living, and sustainable wellness routines with poetic captions and stunning visual direction.",
    skills: ["Travel Storytelling", "Hospitality Review", "Wellness Vlogs", "Photography"],
    experienceCredits: [
      { project: "Taj Hotels Boutique Retreat Feature", role: "Featured Creator", type: "Brand Collaboration", year: "2025" },
    ],
    photos: ["/media/dca/models/dca-model-plus-size-01.jpg", "/media/dca/models/dca-model-female-01.jpg"],
    videos: [],
    instagram: [
      { id: "zi1", image: "/media/dca/models/dca-model-plus-size-01.jpg", caption: "Sunrise moments in the Himalayas 🏔️", likes: "26.4k", comments: "580", handle: "@zarakhan.wander" },
    ],
    print: [],
  },
  {
    id: "siddharth-roy",
    name: "Siddharth Roy",
    category: "fashion-influencers",
    categoryLabel: "Fashion Influencer",
    role: "Menswear & Grooming Specialist",
    age: 28,
    location: "New Delhi",
    languages: ["English", "Hindi"],
    platform: "Instagram & YouTube",
    followers: "280K+",
    engagementRate: "4.5%",
    primaryNiche: "Menswear Styling & Grooming",
    handle: "@siddharth.menswear",
    mainImage: "/media/dca/models/dca-model-fitness-01.jpg",
    badge: "Style Specialist",
    about: "Siddharth Roy helps modern Indian men refine their wardrobe with practical capsule collection guides, grooming routines, and sneaker styling tips.",
    skills: ["Menswear Styling", "Grooming Tutorials", "Product Photography", "Brand Endorsement"],
    experienceCredits: [
      { project: "Bombay Shaving Company Festive Ambassador", role: "Lead Influencer", type: "Digital Campaign", year: "2025" },
    ],
    photos: ["/media/dca/models/dca-model-fitness-01.jpg", "/media/dca/models/dca-model-male-01.jpg"],
    videos: [],
    instagram: [],
    print: [],
  },
];

export function getAllInfluencers(): Influencer[] {
  return INFLUENCERS_DATA;
}

export function getInfluencerById(id: string): Influencer | undefined {
  return INFLUENCERS_DATA.find((i) => i.id === id);
}

export function getInfluencersByCategory(category: InfluencerCategorySlug): Influencer[] {
  return INFLUENCERS_DATA.filter((i) => i.category === category);
}

export function getInfluencerCategoryBySlug(slug: InfluencerCategorySlug): CategoryMeta | undefined {
  return INFLUENCER_CATEGORIES.find((c) => c.slug === slug);
}
