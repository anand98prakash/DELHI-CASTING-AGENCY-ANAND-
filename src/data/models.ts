export type ModelCategorySlug =
  | "female-models"
  | "male-models"
  | "fashion-models"
  | "commercial-models"
  | "plus-size-models"
  | "fitness-models";

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  thumbnail: string;
  url?: string;
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
  type: "Fashion Runway" | "Brand Campaign" | "Catalogue Shoot" | "Commercial" | "Editorial" | "Lookbook";
  year: string;
  directorOrClient?: string;
}

export interface Model {
  id: string;
  name: string;
  category: ModelCategorySlug;
  categoryLabel: string;
  role: string;
  age: number;
  height: string;
  experience: string;
  location: string;
  languages: string[];
  eyeColor: string;
  hair: string;
  bustOrChest: string;
  waist: string;
  hips: string;
  shoeSize: string;
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
  slug: ModelCategorySlug;
  title: string;
  headline: string;
  description: string;
  heroDescription: string;
  ctaText: string;
  countLabel: string;
  image: string;
  route: string;
}

export const MODEL_CATEGORIES: CategoryMeta[] = [
  {
    slug: "female-models",
    title: "Female Models",
    headline: "High-Fashion, Editorial & Commercial Models",
    description: "Verified female models for runway fashion, designer lookbooks, e-commerce catalogues, and luxury brand endorsements.",
    heroDescription: "Explore verified female models available for runway showcases, print campaigns, designer editorials, and commercial brand assignments.",
    ctaText: "Explore Female Models",
    countLabel: "18+ Verified Models",
    image: "/images/actors/model femal 1.png",
    route: "/models/female-models/",
  },
  {
    slug: "male-models",
    title: "Male Models",
    headline: "Runway, Lifestyle & Commercial Male Talent",
    description: "Versatile male models suited for sartorial menswear campaigns, fitness editorials, commercial advertisements, and runway shows.",
    heroDescription: "Browse dynamic male models offering strong screen presence, athletic physiques, and versatile styling for international and domestic campaigns.",
    ctaText: "Explore Male Models",
    countLabel: "16+ Verified Models",
    image: "/images/actors/model male 1.png",
    route: "/models/male-models/",
  },
  {
    slug: "fashion-models",
    title: "Fashion Models",
    headline: "Haute Couture & Runway Talent",
    description: "Editorial models trained for fashion week runways, high-fashion magazine covers, luxury couture catalogues, and designer lookbooks.",
    heroDescription: "Discover runway-trained fashion models with striking features and exceptional poise for fashion weeks, couture shoots, and designer showcases.",
    ctaText: "Explore Fashion Models",
    countLabel: "14+ Fashion Models",
    image: "/images/actors/model femal 2.png",
    route: "/models/fashion-models/",
  },
  {
    slug: "commercial-models",
    title: "Commercial Models",
    headline: "Advertising, Brand & TV Commercial Models",
    description: "Relatable, expressive commercial models for FMCG brand commercials, print advertisements, lifestyle billboards, and digital ads.",
    heroDescription: "Connect with approachable and expressive commercial models ideal for national print campaigns, TVCs, FMCG brands, and digital storytelling.",
    ctaText: "Explore Commercial Models",
    countLabel: "15+ Commercial Models",
    image: "/images/actors/model femal 3.png",
    route: "/models/commercial-models/",
  },
  {
    slug: "plus-size-models",
    title: "Plus-Size Models",
    headline: "Body Positive & Inclusive Fashion Talent",
    description: "Confident plus-size models leading inclusive fashion campaigns, body-positive retail brands, and lifestyle brand collaborations.",
    heroDescription: "Browse empowering plus-size models celebrating diversity, authentic confidence, and inclusive representation across fashion and retail.",
    ctaText: "Explore Plus-Size Models",
    countLabel: "10+ Plus-Size Models",
    image: "/images/actors/model female 4.png",
    route: "/models/plus-size-models/",
  },
  {
    slug: "fitness-models",
    title: "Fitness Models",
    headline: "Athletic, Sports & Wellness Models",
    description: "Athletes, calisthenics practitioners, and fitness models for activewear campaigns, sports nutrition brands, and wellness editorials.",
    heroDescription: "Explore conditioned fitness models with athletic physiques and high endurance for sportswear brands, fitness campaigns, and lifestyle shoots.",
    ctaText: "Explore Fitness Models",
    countLabel: "12+ Fitness Models",
    image: "/images/actors/model female 5.png",
    route: "/models/fitness-models/",
  },
];

export const MODELS_DATA: Model[] = [
  {
    id: "meera-sharma",
    name: "Meera Sharma",
    category: "female-models",
    categoryLabel: "Female Model",
    role: "High-Fashion & Runway Model",
    age: 23,
    height: "5'9\"",
    experience: "4 Years",
    location: "New Delhi / Mumbai",
    languages: ["English", "Hindi"],
    eyeColor: "Hazel",
    hair: "Dark Brown",
    bustOrChest: "34B",
    waist: "25 in",
    hips: "35 in",
    shoeSize: "7.5 UK",
    mainImage: "/media/dca/models/dca-model-female-01.jpg",
    badge: "Verified DCA Model",
    about: "Meera Sharma is a high-fashion and runway model with extensive experience walking for leading Indian couture weeks and international designer showcases. Known for her striking posture and versatile editorial adaptability.",
    skills: ["Runway Walk", "High-Fashion Editorial", "Couture Posing", "Commercial Lookbooks", "Beauty Close-ups"],
    experienceCredits: [
      { project: "Lakmé Fashion Week Winter Showcase", role: "Principal Runway Model", type: "Fashion Runway", year: "2025" },
      { project: "Vogue India Beauty Spread", role: "Editorial Feature", type: "Editorial", year: "2025", directorOrClient: "Vogue Studio" },
      { project: "Sabyasachi Heritage Jewellery", role: "Brand Model", type: "Brand Campaign", year: "2024" },
    ],
    photos: [
      "/media/dca/models/dca-model-female-01.jpg",
      "/media/dca/models/dca-model-plus-size-01.jpg",
      "/media/dca/models/dca-model-fitness-01.jpg",
      "/media/dca/models/dca-model-fashion-01.jpg",
    ],
    videos: [
      {
        id: "meera-ramp-walk",
        title: "Meera Sharma Runway Reel",
        category: "Runway",
        duration: "0:45",
        thumbnail: "/media/dca/models/dca-model-female-01.jpg",
        videoUrl: "/videos/actors/ananya-showreel.mp4",
        description: "Highlights from Delhi Couture Week and luxury fashion runways.",
      },
    ],
    instagram: [
      { id: "m1", image: "/media/dca/models/dca-model-female-01.jpg", caption: "Backstage couture energy ✨", likes: "14.2k", comments: "312", handle: "@meerasharma.official" },
      { id: "m2", image: "/media/dca/models/dca-model-fashion-01.jpg", caption: "Walking for the festive collection 🖤", likes: "19.8k", comments: "480", handle: "@meerasharma.official" },
    ],
    print: [
      { id: "p1", image: "/media/dca/models/dca-model-female-01.jpg", brand: "Harper's Bazaar India", campaign: "Cover Story Autumn Edition", year: "2025" },
    ],
  },
  {
    id: "aarav-kapoor",
    name: "Aarav Kapoor",
    category: "male-models",
    categoryLabel: "Male Model",
    role: "Editorial & Menswear Model",
    age: 26,
    height: "6'1\"",
    experience: "5 Years",
    location: "New Delhi / NCR",
    languages: ["English", "Hindi", "Punjabi"],
    eyeColor: "Dark Brown",
    hair: "Black",
    bustOrChest: "40 in",
    waist: "31 in",
    hips: "38 in",
    shoeSize: "10 UK",
    mainImage: "/media/dca/models/dca-model-male-01.jpg",
    badge: "Verified DCA Model",
    about: "Aarav Kapoor is a seasoned menswear model recognized for strong jawline symmetry, athletic proportions, and editorial versatility across tailored suits, casual street fashion, and luxury lifestyle campaigns.",
    skills: ["Menswear Suiting", "Ramp Walk", "E-commerce Catalogue", "Athletic Posing", "Brand Commercials"],
    experienceCredits: [
      { project: "Raymond Luxury Suiting Campaign", role: "Lead Model", type: "Brand Campaign", year: "2025" },
      { project: "GQ India Men of Style", role: "Editorial Feature", type: "Editorial", year: "2024" },
      { project: "Manyavar Festive Lookbook", role: "Principal Model", type: "Lookbook", year: "2024" },
    ],
    photos: [
      "/media/dca/models/dca-model-male-01.jpg",
      "/media/dca/models/dca-model-commercial-01.jpg",
      "/media/dca/actors/dca-actors-hero-banner.jpg",
    ],
    videos: [
      {
        id: "aarav-showreel",
        title: "Aarav Kapoor Fashion Reel",
        category: "Fashion Reel",
        duration: "0:50",
        thumbnail: "/media/dca/models/dca-model-male-01.jpg",
        videoUrl: "/videos/actors/rahul-showreel.mp4",
        description: "Editorial photoshoot and commercial styling compilation.",
      },
    ],
    instagram: [
      { id: "a1", image: "/media/dca/models/dca-model-male-01.jpg", caption: "Autumn tailored tones in Delhi 🍂", likes: "21.4k", comments: "540", handle: "@aaravkapoor_official" },
    ],
    print: [
      { id: "ap1", image: "/media/dca/models/dca-model-male-01.jpg", brand: "Raymond Fine Fabrics", campaign: "The Complete Man Festive 2025", year: "2025" },
    ],
  },
  {
    id: "riya-malhotra",
    name: "Riya Malhotra",
    category: "fashion-models",
    categoryLabel: "Fashion Model",
    role: "Couture & Runway Artist",
    age: 22,
    height: "5'10\"",
    experience: "3 Years",
    location: "Mumbai / Delhi",
    languages: ["English", "Hindi"],
    eyeColor: "Black",
    hair: "Black",
    bustOrChest: "32B",
    waist: "24 in",
    hips: "34 in",
    shoeSize: "7 UK",
    mainImage: "/media/dca/models/dca-model-fashion-01.jpg",
    badge: "Runway Pro",
    about: "Riya Malhotra is an avant-garde fashion model with fluid editorial movement and strong runway pacing. She has been featured in top Indian fashion publications and international designer lookbooks.",
    skills: ["Avant-Garde Posing", "Runway Pacing", "High Fashion Concept Shoots", "Beauty Editorial"],
    experienceCredits: [
      { project: "India Couture Week Opening Show", role: "Opening Model", type: "Fashion Runway", year: "2025" },
      { project: "Elle India Contemporary Fashion", role: "Editorial Feature", type: "Editorial", year: "2025" },
    ],
    photos: ["/media/dca/models/dca-model-fashion-01.jpg", "/media/dca/models/dca-model-female-01.jpg"],
    videos: [],
    instagram: [
      { id: "r1", image: "/media/dca/models/dca-model-fashion-01.jpg", caption: "Opening walk for ICW 💫", likes: "16.8k", comments: "410", handle: "@riyamalhotra_official" },
    ],
    print: [
      { id: "rp1", image: "/media/dca/models/dca-model-fashion-01.jpg", brand: "Tarun Tahiliani", campaign: "Spring Summer Luxury Lookbook", year: "2025" },
    ],
  },
  {
    id: "kabir-singhania",
    name: "Kabir Singhania",
    category: "commercial-models",
    categoryLabel: "Commercial Model",
    role: "Lifestyle & TVC Model",
    age: 28,
    height: "6'0\"",
    experience: "6 Years",
    location: "New Delhi",
    languages: ["English", "Hindi", "Bengali"],
    eyeColor: "Brown",
    hair: "Dark Brown",
    bustOrChest: "41 in",
    waist: "32 in",
    hips: "39 in",
    shoeSize: "9.5 UK",
    mainImage: "/media/dca/models/dca-model-commercial-01.jpg",
    badge: "Verified DCA Model",
    about: "Kabir Singhania is an established commercial face specializing in consumer brand storytelling, corporate campaigns, and television commercials with warm, trustworthy on-screen presence.",
    skills: ["TVC Acting", "Brand Representation", "Lifestyle Print", "Dialogue Delivery", "Catalogue Shoots"],
    experienceCredits: [
      { project: "HDFC Bank Life Insurance TVC", role: "Lead Character Model", type: "Commercial", year: "2025" },
      { project: "Samsung Neo QLED National Campaign", role: "Brand Model", type: "Brand Campaign", year: "2024" },
    ],
    photos: ["/media/dca/models/dca-model-commercial-01.jpg", "/media/dca/models/dca-model-male-01.jpg"],
    videos: [
      {
        id: "kabir-tvc",
        title: "Kabir Singhania Commercial Reel",
        category: "Commercial",
        duration: "0:40",
        thumbnail: "/media/dca/models/dca-model-commercial-01.jpg",
        videoUrl: "/videos/actors/arjun-showreel.mp4",
        description: "National TV commercial and brand lifestyle reel.",
      },
    ],
    instagram: [],
    print: [
      { id: "kp1", image: "/media/dca/models/dca-model-commercial-01.jpg", brand: "Samsung India", campaign: "Festive Living 2024", year: "2024" },
    ],
  },
  {
    id: "tanya-sen",
    name: "Tanya Sen",
    category: "plus-size-models",
    categoryLabel: "Plus-Size Model",
    role: "Body-Positive Fashion Model",
    age: 25,
    height: "5'8\"",
    experience: "4 Years",
    location: "New Delhi / Kolkata",
    languages: ["English", "Hindi", "Bengali"],
    eyeColor: "Dark Brown",
    hair: "Dark Brown",
    bustOrChest: "38D",
    waist: "34 in",
    hips: "44 in",
    shoeSize: "8 UK",
    mainImage: "/media/dca/models/dca-model-plus-size-01.jpg",
    badge: "Verified DCA Model",
    about: "Tanya Sen is a pioneer in body-positive fashion modeling across India. Her vibrant charisma and commanding presence have empowered major retail and lifestyle brands to embrace inclusive beauty standards.",
    skills: ["Curve Fashion", "Retail Catalogue", "Confidence Posing", "Beauty Campaigns", "Commercial TVCs"],
    experienceCredits: [
      { project: "FabIndia Inclusive Silhouettes", role: "Lead Campaign Model", type: "Brand Campaign", year: "2025" },
      { project: "Nykaa Fashion Curve Collection", role: "Principal E-comm Model", type: "Catalogue Shoot", year: "2024" },
    ],
    photos: ["/media/dca/models/dca-model-plus-size-01.jpg", "/media/dca/models/dca-model-female-01.jpg"],
    videos: [],
    instagram: [
      { id: "t1", image: "/media/dca/models/dca-model-plus-size-01.jpg", caption: "Celebrating every curve with confidence 💖", likes: "32.1k", comments: "890", handle: "@tanyasen.official" },
    ],
    print: [
      { id: "tp1", image: "/media/dca/models/dca-model-plus-size-01.jpg", brand: "FabIndia", campaign: "Festive Elegance Curve Edition", year: "2025" },
    ],
  },
  {
    id: "rohan-mehra",
    name: "Rohan Mehra",
    category: "fitness-models",
    categoryLabel: "Fitness Model",
    role: "Athletic & Sportswear Model",
    age: 27,
    height: "6'2\"",
    experience: "5 Years",
    location: "New Delhi / Gurugram",
    languages: ["English", "Hindi"],
    eyeColor: "Black",
    hair: "Black",
    bustOrChest: "44 in",
    waist: "31 in",
    hips: "39 in",
    shoeSize: "11 UK",
    mainImage: "/media/dca/models/dca-model-fitness-01.jpg",
    badge: "Fitness Specialist",
    about: "Rohan Mehra is a certified functional athlete and fitness model with sculpted muscularity, exceptional stamina, and extensive experience modeling for athletic apparel, gym campaigns, and health supplements.",
    skills: ["Activewear Posing", "Dynamic Action Shoots", "CrossFit / Calisthenics", "Sports Brand Endorsements"],
    experienceCredits: [
      { project: "Puma India HyperSpeed Campaign", role: "Lead Athlete Model", type: "Brand Campaign", year: "2025" },
      { project: "MuscleBlaze Fuel Your Ambition", role: "Brand Endorser", type: "Commercial", year: "2024" },
    ],
    photos: ["/media/dca/models/dca-model-fitness-01.jpg", "/media/dca/models/dca-model-male-01.jpg"],
    videos: [
      {
        id: "rohan-fit",
        title: "Rohan Mehra Workout Reel",
        category: "Fitness",
        duration: "0:42",
        thumbnail: "/media/dca/models/dca-model-fitness-01.jpg",
        videoUrl: "/videos/actors/rahul-showreel.mp4",
        description: "Dynamic training and athletic modeling showcase.",
      },
    ],
    instagram: [
      { id: "rm1", image: "/media/dca/models/dca-model-fitness-01.jpg", caption: "Discipline meets performance 🔥", likes: "28.6k", comments: "620", handle: "@rohanmehra.fit" },
    ],
    print: [
      { id: "rmp1", image: "/media/dca/models/dca-model-fitness-01.jpg", brand: "Puma India", campaign: "HyperSpeed Pro Edition", year: "2025" },
    ],
  },
];

export function getAllModels(): Model[] {
  return MODELS_DATA;
}

export function getModelById(id: string): Model | undefined {
  return MODELS_DATA.find((m) => m.id === id);
}

export function getModelsByCategory(category: ModelCategorySlug): Model[] {
  return MODELS_DATA.filter((m) => m.category === category);
}

export function getModelCategoryBySlug(slug: ModelCategorySlug): CategoryMeta | undefined {
  return MODEL_CATEGORIES.find((c) => c.slug === slug);
}
