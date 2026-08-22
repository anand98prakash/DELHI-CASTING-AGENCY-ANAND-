export type DancerCategorySlug =
  | "lead-dancers"
  | "background-dancers"
  | "contemporary-dancers"
  | "hip-hop-dancers";

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
  type: "Bollywood Music Video" | "Live Concert Tour" | "Award Show Performance" | "Feature Film Song" | "Theatre Dance Production";
  year: string;
  directorOrClient?: string;
}

export interface Dancer {
  id: string;
  name: string;
  category: DancerCategorySlug;
  categoryLabel: string;
  role: string;
  age: number;
  height: string;
  experience: string;
  location: string;
  languages: string[];
  danceStyles: string[];
  trainingAcademy: string;
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
  slug: DancerCategorySlug;
  title: string;
  headline: string;
  description: string;
  heroDescription: string;
  ctaText: string;
  countLabel: string;
  image: string;
  route: string;
}

export const DANCER_CATEGORIES: CategoryMeta[] = [
  {
    slug: "lead-dancers",
    title: "Lead Dancers",
    headline: "Principal Dancers, Soloists & Choreography Leads",
    description: "Exceptional principal dancers and solo performers for Bollywood title songs, cinematic music videos, and high-energy stage concerts.",
    heroDescription: "Explore verified lead dancers and soloists featuring elite choreography training, expressive storytelling, and commanding stage magnetism.",
    ctaText: "Explore Lead Dancers",
    countLabel: "14+ Lead Dancers",
    image: "/images/actors/lead dancers.jpg",
    route: "/dancers/lead-dancers/",
  },
  {
    slug: "background-dancers",
    title: "Background Dancers",
    headline: "Ensemble & Troupe Dancers for Stage & Screen",
    description: "Synchronized dance troupes and ensemble artists for major film songs, grand wedding performances, and televised award shows.",
    heroDescription: "Browse synchronized ensemble dancers and troupe performers skilled in rapid choreography learning and immaculate stage coordination.",
    ctaText: "Explore Background Dancers",
    countLabel: "24+ Troupe Artists",
    image: "/images/actors/Background Dancers.webp",
    route: "/dancers/background-dancers/",
  },
  {
    slug: "contemporary-dancers",
    title: "Contemporary Dancers",
    headline: "Modern, Lyrical & Classical Fusion Dancers",
    description: "Trained contemporary and lyrical artists blending modern techniques, fluid partnering, and expressive emotional narratives.",
    heroDescription: "Discover contemporary and neoclassical dancers bringing breathtaking flexibility, aerial poise, and artistic innovation to the stage.",
    ctaText: "Explore Contemporary Dancers",
    countLabel: "12+ Contemporary Artists",
    image: "/images/actors/Contemporary Dancers.avif",
    route: "/dancers/contemporary-dancers/",
  },
  {
    slug: "hip-hop-dancers",
    title: "Hip-Hop Dancers",
    headline: "Urban, Street, Popping & Commercial Dancers",
    description: "Energetic street and urban dancers proficient in breaking, popping, locking, krumping, and high-octane commercial choreography.",
    heroDescription: "Explore dynamic hip-hop and street dancers bringing raw energy, urban flair, and rhythmic precision to music videos and live sets.",
    ctaText: "Explore Hip-Hop Dancers",
    countLabel: "16+ Urban Dancers",
    image: "/images/actors/Hip-Hop Dancers.avif",
    route: "/dancers/hip-hop-dancers/",
  },
];

export const DANCERS_DATA: Dancer[] = [
  {
    id: "kabir-verma",
    name: "Kabir Verma",
    category: "lead-dancers",
    categoryLabel: "Lead Dancer",
    role: "Bollywood & Commercial Soloist",
    age: 25,
    height: "5'11\"",
    experience: "7 Years",
    location: "New Delhi / Mumbai",
    languages: ["Hindi", "English"],
    danceStyles: ["Bollywood Commercial", "Semi-Classical", "Urban Hip-Hop", "Lyrical"],
    trainingAcademy: "Terence Lewis Dance Academy / DCA Fellow",
    mainImage: "/media/dca/models/dca-model-male-01.jpg",
    badge: "Verified Lead Artist",
    about: "Kabir Verma is a powerhouse lead dancer and assistant choreographer who has performed alongside Bollywood A-listers in major feature film songs and global stadium tours.",
    skills: ["High-Energy Bollywood", "Stage Acrobatics", "Choreography Direction", "Partner Lifting"],
    experienceCredits: [
      { project: "IIFA Awards Main Stage Finale", role: "Principal Troupe Lead", type: "Award Show Performance", year: "2025" },
      { project: "T-Series Chartbuster Music Video", role: "Featured Solo Dancer", type: "Bollywood Music Video", year: "2024" },
    ],
    photos: ["/media/dca/models/dca-model-male-01.jpg", "/media/dca/models/dca-model-fitness-01.jpg"],
    videos: [
      {
        id: "kabir-dance-reel",
        title: "Kabir Verma Dance Performance Reel",
        category: "Dance Reel",
        duration: "0:45",
        thumbnail: "/media/dca/models/dca-model-male-01.jpg",
        videoUrl: "/videos/actors/rahul-showreel.mp4",
        description: "Stage performance and music video dance reel.",
      },
    ],
    instagram: [
      { id: "kd1", image: "/media/dca/models/dca-model-male-01.jpg", caption: "Rehearsals in progress for the stadium tour 💥", likes: "18.5k", comments: "390", handle: "@kabirverma.dance" },
    ],
    print: [],
  },
  {
    id: "anika-rao",
    name: "Anika Rao",
    category: "contemporary-dancers",
    categoryLabel: "Contemporary Dancer",
    role: "Lyrical & Neoclassical Artist",
    age: 23,
    height: "5'7\"",
    experience: "6 Years",
    location: "New Delhi / Bengaluru",
    languages: ["English", "Hindi", "Kannada"],
    danceStyles: ["Contemporary", "Kathak Fusion", "Modern Ballet", "Floorwork"],
    trainingAcademy: "Attakkalari Centre for Movement Arts",
    mainImage: "/media/dca/models/dca-model-female-01.jpg",
    badge: "Verified DCA Artist",
    about: "Anika Rao is a celebrated contemporary movement artist known for poetic musicality, incredible flexibility, and evocative emotional storytelling in dance films and theatrical productions.",
    skills: ["Fluid Floorwork", "Kathak Footwork", "Flexibility & Extensions", "Dance Theatre"],
    experienceCredits: [
      { project: "Serendipity Arts Festival Showcase", role: "Solo Performer", type: "Theatre Dance Production", year: "2025" },
    ],
    photos: ["/media/dca/models/dca-model-female-01.jpg", "/media/dca/models/dca-model-plus-size-01.jpg"],
    videos: [
      {
        id: "anika-contemporary",
        title: "Anika Rao Movement Piece",
        category: "Contemporary",
        duration: "0:40",
        thumbnail: "/media/dca/models/dca-model-female-01.jpg",
        videoUrl: "/videos/actors/ananya-showreel.mp4",
        description: "Lyrical contemporary dance performance.",
      },
    ],
    instagram: [
      { id: "ad1", image: "/media/dca/models/dca-model-female-01.jpg", caption: "Poetry in motion 🩰", likes: "22.3k", comments: "510", handle: "@anikarao.dance" },
    ],
    print: [],
  },
  {
    id: "vikram-thapa",
    name: "Vikram Thapa",
    category: "hip-hop-dancers",
    categoryLabel: "Hip-Hop Dancer",
    role: "Urban & Street Crew Leader",
    age: 24,
    height: "5'9\"",
    experience: "5 Years",
    location: "New Delhi",
    languages: ["Hindi", "English", "Nepali"],
    danceStyles: ["Popping & Locking", "Breaking (B-Boying)", "Urban Choreo", "Krump"],
    trainingAcademy: "Delhi Street Dance Collective",
    mainImage: "/media/dca/models/dca-model-fitness-01.jpg",
    badge: "Street Pro",
    about: "Vikram Thapa is an explosive urban dancer and battle champion who brings razor-sharp isolations and acrobatic power moves to commercial video shoots and live events.",
    skills: ["Power Moves", "Isolations", "Freestyle Battles", "Sync Choreo"],
    experienceCredits: [
      { project: "Red Bull Dance Your Style India", role: "Finalist & Performer", type: "Live Concert Tour", year: "2025" },
    ],
    photos: ["/media/dca/models/dca-model-fitness-01.jpg", "/media/dca/models/dca-model-commercial-01.jpg"],
    videos: [],
    instagram: [],
    print: [],
  },
  {
    id: "priya-nair",
    name: "Priya Nair",
    category: "background-dancers",
    categoryLabel: "Background Dancer",
    role: "Ensemble & Stage Specialist",
    age: 22,
    height: "5'6\"",
    experience: "3 Years",
    location: "New Delhi / Mumbai",
    languages: ["Hindi", "English", "Malayalam"],
    danceStyles: ["Bollywood Troupe", "Folk Fusion", "Commercial Jazz"],
    trainingAcademy: "Shiamak Davar Institute of Performing Arts",
    mainImage: "/media/dca/models/dca-model-plus-size-01.jpg",
    badge: "Ensemble Pro",
    about: "Priya Nair is a disciplined ensemble dancer with exceptional spatial awareness, swift formation adaptation, and vibrant expressions for high-energy music videos and award shows.",
    skills: ["Sync Formations", "Bollywood Pacing", "Prop Choreography", "Costume Handling"],
    experienceCredits: [
      { project: "Filmfare Awards Opening Act", role: "Troupe Dancer", type: "Award Show Performance", year: "2025" },
    ],
    photos: ["/media/dca/models/dca-model-plus-size-01.jpg", "/media/dca/models/dca-model-female-01.jpg"],
    videos: [],
    instagram: [],
    print: [],
  },
];

export function getAllDancers(): Dancer[] {
  return DANCERS_DATA;
}

export function getDancerById(id: string): Dancer | undefined {
  return DANCERS_DATA.find((d) => d.id === id);
}

export function getDancersByCategory(category: DancerCategorySlug): Dancer[] {
  return DANCERS_DATA.filter((d) => d.category === category);
}

export function getDancerCategoryBySlug(slug: DancerCategorySlug): CategoryMeta | undefined {
  return DANCER_CATEGORIES.find((c) => c.slug === slug);
}
