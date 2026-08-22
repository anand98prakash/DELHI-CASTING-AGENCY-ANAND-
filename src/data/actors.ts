export type ActorCategorySlug =
  | "male"
  | "female"
  | "fresh-faces"
  | "experienced"
  | "popular"
  | "child-actors";

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
  type: "Feature Film" | "OTT / Web Series" | "TV Commercial" | "Television" | "Theatre" | "Short Film";
  year: string;
  directorOrClient?: string;
}

export interface Actor {
  id: string;
  name: string;
  category: ActorCategorySlug;
  categoryLabel: string;
  role: string;
  age: number;
  height: string;
  experience: string;
  location: string;
  languages: string[];
  eyeColor: string;
  hair: string;
  mainImage: string;
  badge?: string;
  about: string;
  skills: string[];
  experienceCredits: ExperienceCredit[];
  digitals: string[];
  videos: VideoItem[];
  instagram: InstagramItem[];
  print: PrintItem[];
}

export interface CategoryMeta {
  slug: ActorCategorySlug;
  title: string;
  headline: string;
  description: string;
  heroDescription: string;
  ctaText: string;
  route: string;
  image: string;
  countLabel: string;
}

export const ACTOR_CATEGORIES: CategoryMeta[] = [
  {
    slug: "male",
    title: "Male Actors",
    headline: "Male Actors",
    description:
      "Explore the dedicated male actor category for casting and registration opportunities.",
    heroDescription:
      "Discover talented male actors available for leading, supporting and character roles across film, television and OTT productions.",
    ctaText: "Explore Male Actors",
    route: "/actors/male",
    image: "/images/actors/talent male actore.png",
    countLabel: "6 Featured Actors",
  },
  {
    slug: "female",
    title: "Female Actors",
    headline: "Female Actors",
    description:
      "Explore talented female actors available for casting and entertainment opportunities.",
    heroDescription:
      "Discover versatile female actors available for film, television, OTT series, drama productions and commercial assignments.",
    ctaText: "Explore Female Actors",
    route: "/actors/female",
    image: "/images/actors/talent female actor.png",
    countLabel: "6 Featured Actors",
  },
  {
    slug: "fresh-faces",
    title: "Fresh Faces",
    headline: "Fresh Faces",
    description:
      "Discover emerging actors and new talent looking for their first professional opportunities.",
    heroDescription:
      "Explore high-potential new talent, theatre graduates and promising newcomers ready for auditions and debut opportunities.",
    ctaText: "Explore Fresh Faces",
    route: "/actors/fresh-faces",
    image: "/images/actors/talent fresh afce.png",
    countLabel: "6 Emerging Talents",
  },
  {
    slug: "experienced",
    title: "Experienced Actors",
    headline: "Experienced Actors",
    description:
      "Explore experienced actors with professional backgrounds across different casting requirements.",
    heroDescription:
      "Browse seasoned screen and theatre performers with proven track records across feature films, television serials and OTT platforms.",
    ctaText: "Explore Experienced Actors",
    route: "/actors/experienced",
    image: "/images/actors/talent expierence actor.png",
    countLabel: "6 Senior Performers",
  },
  {
    slug: "popular",
    title: "Popular Actors",
    headline: "Popular Actors",
    description:
      "Discover featured and popular talent available for selected casting and entertainment opportunities.",
    heroDescription:
      "Explore recognized performers and high-demand talent with strong screen presence and audience engagement.",
    ctaText: "Explore Popular Actors",
    route: "/actors/popular",
    image: "/images/actors/talent popular actor.png",
    countLabel: "6 Top Talents",
  },
  {
    slug: "child-actors",
    title: "Child Actors",
    headline: "Child Actors",
    description:
      "Discover young talent suitable for age-appropriate film, television, advertising and entertainment opportunities.",
    heroDescription:
      "Explore charismatic young performers and child talent with natural screen presence for commercials, films and family drama productions.",
    ctaText: "Explore Child Actors",
    route: "/actors/child-actors",
    image: "/images/actors/talent child actor.png",
    countLabel: "6 Child Talents",
  },
];

export const ACTORS_DATA: Actor[] = [
  /* 1. MALE ACTORS (6) */
  {
    id: "rahul-mehra",
    name: "Rahul Mehra",
    category: "male",
    categoryLabel: "Male Actor",
    role: "Lead & Character Actor",
    age: 27,
    height: "182 cm (6'0\")",
    experience: "5 Years",
    location: "Delhi / NCR",
    languages: ["Hindi", "English", "Punjabi"],
    eyeColor: "Dark Brown",
    hair: "Black",
    badge: "Verified DCA Artist",
    mainImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=80",
    about: "Trained at the National School of Drama workshop and experienced in contemporary theatre, web-series and national TV commercials. Known for strong dramatic presence, natural dialogue delivery, and nuanced screen acting.",
    skills: ["Method Acting", "Dialogue Delivery", "Theatre Performance", "Voice Modulation", "Motorcycle Riding", "Contemporary Dance"],
    experienceCredits: [
      { project: "Dilli Junction (Web Series)", role: "Devrat (Parallel Lead)", type: "OTT / Web Series", year: "2024", directorOrClient: "Major OTT Platform" },
      { project: "Royal Stag Club Soda Campaign", role: "Lead Protagonist", type: "TV Commercial", year: "2023", directorOrClient: "National Ad Agency" },
      { project: "Andha Yug (Theatre Production)", role: "Ashwatthama", type: "Theatre", year: "2022", directorOrClient: "Delhi Repertory" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-rm-1", title: "Dramatic Showreel 2024", category: "Acting Reel", duration: "02:15", thumbnail: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/rahul-showreel.mp4", description: "Intense dramatic scenes from OTT web series and festival short films." },
      { id: "v-rm-2", title: "Monologue: The Dilemma", category: "Monologue", duration: "01:30", thumbnail: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/rahul-showreel.mp4", description: "Solo dramatic monologue performed in contemporary Hindi." }
    ],
    instagram: [
      { id: "ig-rm-1", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80", caption: "Between takes on the night schedule. 🎬 #ActorsLife", likes: "3.4K", comments: "142" },
      { id: "ig-rm-2", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80", caption: "Studio portrait session with @dca_official.", likes: "4.8K", comments: "210" },
      { id: "ig-rm-3", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&auto=format&fit=crop&q=80", caption: "Theatre rehearsal days are where true character begins. 🎭", likes: "2.9K", comments: "98" },
      { id: "ig-rm-4", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=80", caption: "Suited for the premiere night.", likes: "6.2K", comments: "330" },
      { id: "ig-rm-5", image: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=800&auto=format&fit=crop&q=80", caption: "Golden hour candid between rehearsals.", likes: "3.1K", comments: "115" },
      { id: "ig-rm-6", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80", caption: "Character test shot for upcoming crime thriller.", likes: "5.5K", comments: "280" }
    ],
    print: [
      { id: "pr-rm-1", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=80", brand: "Raymond Heritage", campaign: "The Complete Man Collection", year: "2024" },
      { id: "pr-rm-2", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=80", brand: "Titan Watches", campaign: "Timeless Moments Lookbook", year: "2023" },
      { id: "pr-rm-3", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80", brand: "GQ India", campaign: "Emerging Talents Editorial", year: "2024" },
      { id: "pr-rm-4", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=80", brand: "Manyavar", campaign: "Festive Elegance Campaign", year: "2023" },
      { id: "pr-rm-5", image: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=900&auto=format&fit=crop&q=80", brand: "FabIndia Men", campaign: "Urban Classic Lookbook", year: "2023" }
    ]
  },
  {
    id: "arjun-verma",
    name: "Arjun Verma",
    category: "male",
    categoryLabel: "Male Actor",
    role: "Action & Drama Lead",
    age: 29,
    height: "185 cm (6'1\")",
    experience: "6 Years",
    location: "Mumbai / Delhi",
    languages: ["Hindi", "English", "Haryanvi"],
    eyeColor: "Hazel",
    hair: "Dark Brown",
    badge: "Verified DCA Artist",
    mainImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=80",
    about: "Physically agile and screen-commanding actor with formal martial arts training and extensive work in action dramas and cop thrillers. Experienced in stunt coordination, weapon handling, and intense character roles.",
    skills: ["Martial Arts", "Screen Combat", "Horse Riding", "Method Acting", "Dubbing", "Hindi Dialects"],
    experienceCredits: [
      { project: "Vigilante (Feature Film)", role: "Inspector Samar", type: "Feature Film", year: "2024", directorOrClient: "Cinema Works" },
      { project: "Thums Up National Campaign", role: "Lead Stunt Performer", type: "TV Commercial", year: "2023", directorOrClient: "Ogilvy & Mather" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-av-1", title: "Action & Combat Showreel", category: "Action Reel", duration: "01:50", thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/arjun-showreel.mp4", description: "Martial arts stunts and action combat reel." }
    ],
    instagram: [
      { id: "ig-av-1", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80", caption: "Prep work for the action sequences. Consistency is key. 🥋", likes: "5.1K", comments: "190" },
      { id: "ig-av-2", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80", caption: "Mountain schedule candid.", likes: "4.2K", comments: "155" }
    ],
    print: [
      { id: "pr-av-1", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=80", brand: "HRX Active", campaign: "Urban Athlete Series", year: "2024" }
    ]
  },
  {
    id: "kabir-sharma",
    name: "Kabir Sharma",
    category: "male",
    categoryLabel: "Male Actor",
    role: "Romantic & Commercial Lead",
    age: 26,
    height: "179 cm (5'10\")",
    experience: "4 Years",
    location: "Delhi",
    languages: ["Hindi", "English"],
    eyeColor: "Black",
    hair: "Black",
    badge: "Verified DCA Artist",
    mainImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80",
    about: "Charming and relatable actor specializing in romantic comedy, urban lifestyle characters, and emotional family dramas. Featured in 15+ national commercial campaigns.",
    skills: ["Romantic Comedy", "Voice Modulation", "Camera Acting", "Dancing", "Improvisation"],
    experienceCredits: [
      { project: "Love in South Extension", role: "Aman (Main Lead)", type: "OTT / Web Series", year: "2024", directorOrClient: "Viacom18 Studio" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-ks-1", title: "Commercials & Rom-Com Reel", category: "Showreel", duration: "01:40", thumbnail: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-ks-1", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&auto=format&fit=crop&q=80", caption: "Smile for the camera, the rest is rehearsal! ☕✨", likes: "7.2K", comments: "410" }
    ],
    print: [
      { id: "pr-ks-1", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80", brand: "Levi's India", campaign: "Summer Denim Lookbook", year: "2024" }
    ]
  },
  {
    id: "rohan-kapoor",
    name: "Rohan Kapoor",
    category: "male",
    categoryLabel: "Male Actor",
    role: "Character & Antagonist",
    age: 31,
    height: "180 cm (5'11\")",
    experience: "7 Years",
    location: "Mumbai",
    languages: ["Hindi", "English", "Urdu"],
    eyeColor: "Dark Brown",
    hair: "Black",
    badge: "Verified DCA Artist",
    mainImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=80",
    about: "Versatile character actor with a strong theatre pedigree from Mandi House. Capable of intense antagonistic roles, subtle bureaucratic portrayals, and layered grey characters in web series and feature films.",
    skills: ["Urdu Diction", "Method Acting", "Voice Over", "Stage Combat", "Script Analysis"],
    experienceCredits: [
      { project: "The Syndicate (Web Series)", role: "Farooq (Antagonist)", type: "OTT / Web Series", year: "2024", directorOrClient: "Prime Video Release" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-rk-1", title: "Antagonist Monologue Showreel", category: "Showreel", duration: "02:05", thumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-rk-1", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=80", caption: "Eyes reveal what lines leave unsaid. #ActorCraft", likes: "2.8K", comments: "94" }
    ],
    print: [
      { id: "pr-rk-1", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=80", brand: "Van Heusen", campaign: "Executive Series 2024", year: "2024" }
    ]
  },
  {
    id: "ayaan-khanna",
    name: "Ayaan Khanna",
    category: "male",
    categoryLabel: "Male Actor",
    role: "Urban Lead & Theatre Artist",
    age: 25,
    height: "178 cm (5'10\")",
    experience: "3 Years",
    location: "Delhi",
    languages: ["Hindi", "English"],
    eyeColor: "Brown",
    hair: "Black",
    badge: "Verified DCA Artist",
    mainImage: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=900&auto=format&fit=crop&q=80",
    about: "Young, energetic performer with a natural flair for campus dramas, modern relationship narratives, and digital comedy sketches. Active in Delhi collegiate theatre circuit with several best actor awards.",
    skills: ["Contemporary Drama", "Comic Timing", "Improv", "Guitar Playing", "Vocal Modulation"],
    experienceCredits: [
      { project: "Campus Chronicle", role: "Sameer", type: "Short Film", year: "2024", directorOrClient: "Festival Selection" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-ak-1", title: "Campus Drama Monologue", category: "Monologue", duration: "01:25", thumbnail: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-ak-1", image: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=800&auto=format&fit=crop&q=80", caption: "Auditions done. Trusting the process always. 📽️", likes: "1.9K", comments: "72" }
    ],
    print: [
      { id: "pr-ak-1", image: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=900&auto=format&fit=crop&q=80", brand: "Wildcraft", campaign: "Trailblazer Collection", year: "2024" }
    ]
  },
  {
    id: "dev-malhotra",
    name: "Dev Malhotra",
    category: "male",
    categoryLabel: "Male Actor",
    role: "Method & Art House Performer",
    age: 28,
    height: "181 cm (5'11\")",
    experience: "5 Years",
    location: "Delhi / Chandigarh",
    languages: ["Hindi", "Punjabi", "English"],
    eyeColor: "Black",
    hair: "Black",
    badge: "Verified DCA Artist",
    mainImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=80",
    about: "Deeply committed method performer with an impressive portfolio in independent cinema and regional cinema. Adept in heavy dialect work, period characters, and psychologically complex narratives.",
    skills: ["Method Acting", "Period Drama", "Punjabi Diction", "Horse Riding", "Physical Theatre"],
    experienceCredits: [
      { project: "Mitti Di Khushboo", role: "Gurbaaz (Lead)", type: "Feature Film", year: "2023", directorOrClient: "Panjab Cinema" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-dm-1", title: "Period Drama Scene Performance", category: "Showreel", duration: "02:10", thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-dm-1", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80", caption: "In character, living the truth of the scene.", likes: "3.8K", comments: "112" }
    ],
    print: [
      { id: "pr-dm-1", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=80", brand: "Sabyasachi Heritage Men", campaign: "Winter Couturier", year: "2024" }
    ]
  },

  /* 2. FEMALE ACTORS (6) */
  {
    id: "ananya-deshmukh",
    name: "Ananya Deshmukh",
    category: "female",
    categoryLabel: "Female Actor",
    role: "Lead Dramatic & OTT Actor",
    age: 26,
    height: "172 cm (5'8\")",
    experience: "5 Years",
    location: "Delhi / Mumbai",
    languages: ["Hindi", "English", "Marathi"],
    eyeColor: "Hazel Brown",
    hair: "Dark Brown",
    badge: "Verified DCA Artist",
    mainImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=80",
    about: "Accomplished screen performer with leading roles in critically acclaimed OTT thrillers, feature films and national brand campaigns. Classically trained in Kathak with versatile screen presence.",
    skills: ["Method Acting", "Kathak Dance", "Voice Modulation", "Screen Fighting", "Marathi & Hindi Diction"],
    experienceCredits: [
      { project: "Shadows Over Yamuna", role: "Roshni (Lead)", type: "OTT / Web Series", year: "2024", directorOrClient: "Major Streaming Platform" },
      { project: "Tanishq Festive Collection", role: "Lead Bride", type: "TV Commercial", year: "2023", directorOrClient: "Lowe Lintas" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-ad-1", title: "Dramatic Reel: Crime & Investigation", category: "Showreel", duration: "02:20", thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/ananya-showreel.mp4", description: "Nuanced screen performance from acclaimed OTT web series." }
    ],
    instagram: [
      { id: "ig-ad-1", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80", caption: "Wrap on our biggest sequence yet! 🎬✨", likes: "12.4K", comments: "630" },
      { id: "ig-ad-2", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=80", caption: "Studio vibes with @dca_official.", likes: "9.8K", comments: "415" }
    ],
    print: [
      { id: "pr-ad-1", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=80", brand: "Vogue India", campaign: "Voices of New Cinema", year: "2024" }
    ]
  },
  {
    id: "priya-kapoor",
    name: "Priya Kapoor",
    category: "female",
    categoryLabel: "Female Actor",
    role: "Commercial & Romantic Lead",
    age: 24,
    height: "168 cm (5'6\")",
    experience: "4 Years",
    location: "Delhi",
    languages: ["Hindi", "English", "Punjabi"],
    eyeColor: "Black",
    hair: "Dark Brown",
    badge: "Verified DCA Artist",
    mainImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=80",
    about: "Vibrant and charismatic actor with an enviable roster of 20+ TV commercials, youth web shows and romantic comedy pilots. Highly expressive with quick comedic timing.",
    skills: ["Comedic Timing", "Contemporary Dance", "Voice Modulation", "Commercial Acting", "Fashion Modeling"],
    experienceCredits: [
      { project: "Lenskart Trendsetter Ad", role: "Main Lead", type: "TV Commercial", year: "2024", directorOrClient: "National Broadcast" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-pk-1", title: "Commercial & Rom-Com Showreel", category: "Showreel", duration: "01:35", thumbnail: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-pk-1", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=80", caption: "Sunshine and shooting schedules! ☀️📽️", likes: "15.1K", comments: "580" }
    ],
    print: [
      { id: "pr-pk-1", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=80", brand: "Nykaa Beauty", campaign: "Glow Season Lookbook", year: "2024" }
    ]
  },
  {
    id: "natasha-roy",
    name: "Natasha Roy",
    category: "female",
    categoryLabel: "Female Actor",
    role: "Drama & Art Cinema Performer",
    age: 28,
    height: "170 cm (5'7\")",
    experience: "6 Years",
    location: "Kolkata / Delhi",
    languages: ["Hindi", "English", "Bengali"],
    eyeColor: "Dark Brown",
    hair: "Black",
    badge: "Verified DCA Artist",
    mainImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80",
    about: "Trained theatre actor with extensive work in parallel cinema, experimental theatre and psychological character roles. Recipient of multiple state theatre accolades.",
    skills: ["Classical Theatre", "Bengali & Hindi Diction", "Method Acting", "Dubbing", "Poetry Recitation"],
    experienceCredits: [
      { project: "Monsoon Letters (Indie Feature)", role: "Sharmila (Lead)", type: "Feature Film", year: "2023", directorOrClient: "IFFI Film Bazaar Selection" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-nr-1", title: "Intense Character Monologue", category: "Monologue", duration: "02:00", thumbnail: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-nr-1", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=80", caption: "Stories written in the eyes. 🖤", likes: "4.5K", comments: "130" }
    ],
    print: [
      { id: "pr-nr-1", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80", brand: "Harper's Bazaar India", campaign: "Art & Performance", year: "2024" }
    ]
  },
  {
    id: "kriti-sen",
    name: "Kriti Sen",
    category: "female",
    categoryLabel: "Female Actor",
    role: "Urban Professional & Character Lead",
    age: 27,
    height: "174 cm (5'8.5\")",
    experience: "5 Years",
    location: "Delhi",
    languages: ["Hindi", "English"],
    eyeColor: "Brown",
    hair: "Dark Brown",
    badge: "Verified DCA Artist",
    mainImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=80",
    about: "Modern screen presence with a sharp, articulate delivery ideal for corporate thrillers, legal dramas, urban crime shows and lifestyle brands.",
    skills: ["Urban Accents", "Dialogue Precision", "Corporate Styling", "Camera Poise", "Yoga"],
    experienceCredits: [
      { project: "The Corner Office", role: "Tarini (Senior Counsel)", type: "OTT / Web Series", year: "2024", directorOrClient: "Hotstar Specials" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-ks2-1", title: "Legal Thriller Courtroom Sequence", category: "Showreel", duration: "01:55", thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-ks2-1", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80", caption: "Suit up for the boardroom sequence. #ActorAtWork", likes: "3.2K", comments: "105" }
    ],
    print: [
      { id: "pr-ks2-1", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=80", brand: "FabAlley Luxe", campaign: "Power Dressing Edit", year: "2024" }
    ]
  },
  {
    id: "rhea-mehra",
    name: "Rhea Mehra",
    category: "female",
    categoryLabel: "Female Actor",
    role: "Commercial & OTT Series Actor",
    age: 23,
    height: "167 cm (5'6\")",
    experience: "3 Years",
    location: "Delhi / Jaipur",
    languages: ["Hindi", "English", "Rajasthani"],
    eyeColor: "Black",
    hair: "Black",
    badge: "Verified DCA Artist",
    mainImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&auto=format&fit=crop&q=80",
    about: "Fresh, camera-friendly talent with a natural charm and expressive face. Ideal for youth drama, music videos, beauty brands and fast-paced commercial shoots.",
    skills: ["Camera Movement", "Hip Hop & Bollywood Dance", "Blogging", "Youth Character Roles"],
    experienceCredits: [
      { project: "Rangrez (Music Video)", role: "Female Lead", type: "Short Film", year: "2024", directorOrClient: "T-Series Regional" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-rm2-1", title: "Music Video Highlights", category: "Music Video", duration: "01:20", thumbnail: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-rm2-1", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&auto=format&fit=crop&q=80", caption: "Golden hour glow on location. ✨🎥", likes: "8.9K", comments: "390" }
    ],
    print: [
      { id: "pr-rm2-1", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&auto=format&fit=crop&q=80", brand: "Maybelline New York", campaign: "City Matte Collection", year: "2024" }
    ]
  },
  {
    id: "tanya-oberoi",
    name: "Tanya Oberoi",
    category: "female",
    categoryLabel: "Female Actor",
    role: "Screen & Stage Performer",
    age: 25,
    height: "170 cm (5'7\")",
    experience: "4 Years",
    location: "Delhi",
    languages: ["Hindi", "English"],
    eyeColor: "Dark Brown",
    hair: "Black",
    badge: "Verified DCA Artist",
    mainImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=80",
    about: "Trained actor with an innate ability to connect with audiences through subtle expressions and relatable modern dialogue delivery.",
    skills: ["Classical Theatre", "Voice Acting", "Camera Technique", "Creative Writing"],
    experienceCredits: [
      { project: "City of Shadows (Short Film)", role: "Nandini (Lead)", type: "Short Film", year: "2024", directorOrClient: "Festival Entry" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-to-1", title: "Drama & Emotional Reel", category: "Showreel", duration: "01:30", thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-to-1", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=80", caption: "Quiet focus right before action is called. 💫", likes: "4.1K", comments: "150" }
    ],
    print: [
      { id: "pr-to-1", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=80", brand: "Biba Ethnic Wear", campaign: "Festive Joy Lookbook", year: "2024" }
    ]
  },

  /* 3. FRESH FACES (6) */
  {
    id: "manav-chopra",
    name: "Manav Chopra",
    category: "fresh-faces",
    categoryLabel: "Fresh Face",
    role: "Aspiring Screen Actor",
    age: 21,
    height: "180 cm (5'11\")",
    experience: "1 Year (Theatre)",
    location: "Delhi",
    languages: ["Hindi", "English"],
    eyeColor: "Dark Brown",
    hair: "Black",
    badge: "New Talent 2024",
    mainImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=900&auto=format&fit=crop&q=80",
    about: "Promising newcomer trained at the Shri Ram Centre for Performing Arts weekend workshops. Natural on-camera ease, disciplined work ethic, and athletic physique ready for film and OTT auditions.",
    skills: ["Basic Method Acting", "Street Play Performance", "Acrobatics", "Cricket", "Hindi Diction"],
    experienceCredits: [
      { project: "Nukkad Natak Ensemble (Delhi University)", role: "Lead Speaker", type: "Theatre", year: "2024", directorOrClient: "Dramatics Society" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-mc-1", title: "Introduction & Audition Monologue", category: "Audition Reel", duration: "01:15", thumbnail: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-mc-1", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=80", caption: "First official portfolio test with Delhi Casting Agency. 🎬🔥", likes: "2.1K", comments: "88" }
    ],
    print: [
      { id: "pr-mc-1", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=900&auto=format&fit=crop&q=80", brand: "Flying Machine", campaign: "Gen-Z Denim Edit", year: "2024" }
    ]
  },
  {
    id: "ishita-bhatia",
    name: "Ishita Bhatia",
    category: "fresh-faces",
    categoryLabel: "Fresh Face",
    role: "Aspiring Lead Actor",
    age: 20,
    height: "169 cm (5'6.5\")",
    experience: "1 Year",
    location: "Delhi",
    languages: ["Hindi", "English"],
    eyeColor: "Dark Brown",
    hair: "Black",
    badge: "New Talent 2024",
    mainImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=80",
    about: "Fresh, photogenic debut talent with classical singing background and theatre workshop training. Unmatched expressive screen potential for youth romantic roles and television commercials.",
    skills: ["Classical Vocal", "Expressive Facial Acting", "Contemporary Dance", "Dialogue Delivery"],
    experienceCredits: [
      { project: "Delhi Collegiate Theatre Festival", role: "Rupa", type: "Theatre", year: "2024", directorOrClient: "SRCC Drama Society" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-ib-1", title: "Self Tape: College Drama", category: "Audition Reel", duration: "01:20", thumbnail: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-ib-1", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=80", caption: "New beginnings and grateful hearts. 🌸", likes: "3.5K", comments: "140" }
    ],
    print: [
      { id: "pr-ib-1", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=80", brand: "Mamaearth", campaign: "Naturally Radiant Campaign", year: "2024" }
    ]
  },
  {
    id: "kartik-sethi",
    name: "Kartik Sethi",
    category: "fresh-faces",
    categoryLabel: "Fresh Face",
    role: "Youth & Commercial Talent",
    age: 22,
    height: "179 cm (5'10.5\")",
    experience: "1 Year",
    location: "Noida / Delhi",
    languages: ["Hindi", "English"],
    eyeColor: "Black",
    hair: "Black",
    badge: "New Talent 2024",
    mainImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80",
    about: "Bright, enthusiastic talent with natural comedic timing and sharp urban appeal. Quick learner on set with high energy and dedication.",
    skills: ["Improv Comedy", "Voice Modulation", "Fitness & Athletics", "Basketball"],
    experienceCredits: [
      { project: "Fastrack Digital Ad", role: "College Student", type: "TV Commercial", year: "2024", directorOrClient: "Digital Agency" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-ks3-1", title: "Introduction Tape 2024", category: "Audition Reel", duration: "01:05", thumbnail: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-ks3-1", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&auto=format&fit=crop&q=80", caption: "Ready for the audition circuit! 🚀", likes: "1.8K", comments: "65" }
    ],
    print: [
      { id: "pr-ks3-1", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80", brand: "Boat Lifestyle", campaign: "Sound of Youth", year: "2024" }
    ]
  },
  {
    id: "samaira-khurana",
    name: "Samaira Khurana",
    category: "fresh-faces",
    categoryLabel: "Fresh Face",
    role: "Aspiring Drama Actor",
    age: 22,
    height: "170 cm (5'7\")",
    experience: "1 Year",
    location: "Gurugram / Delhi",
    languages: ["Hindi", "English"],
    eyeColor: "Hazel",
    hair: "Dark Brown",
    badge: "New Talent 2024",
    mainImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80",
    about: "Trained at Barry John Acting Studio weekend program. Possesses a subtle, deeply engaging camera gaze and natural empathy for character nuance.",
    skills: ["Scene Study", "Voice Training", "Monologue Delivery", "Contemporary Dance"],
    experienceCredits: [
      { project: "Reflections (Student Short)", role: "Tara", type: "Short Film", year: "2024", directorOrClient: "AJK MCRC Film" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-sk-1", title: "Drama Self Tape Monologue", category: "Monologue", duration: "01:30", thumbnail: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-sk-1", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=80", caption: "Stepping onto set with open eyes and big dreams. ✨", likes: "2.7K", comments: "110" }
    ],
    print: [
      { id: "pr-sk-1", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80", brand: "Forest Essentials", campaign: "Ayurvedic Beauty Edit", year: "2024" }
    ]
  },
  {
    id: "neil-saxena",
    name: "Neil Saxena",
    category: "fresh-faces",
    categoryLabel: "Fresh Face",
    role: "Aspiring Action & Urban Lead",
    age: 23,
    height: "183 cm (6'0\")",
    experience: "1 Year",
    location: "Delhi",
    languages: ["Hindi", "English"],
    eyeColor: "Dark Brown",
    hair: "Black",
    badge: "New Talent 2024",
    mainImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=80",
    about: "Athletic, disciplined performer with a strong background in gymnastics and stage movement. Ready for high-intensity action auditions and web series roles.",
    skills: ["Gymnastics", "Stage Combat", "Martial Arts", "Screen Movement", "Hindi Diction"],
    experienceCredits: [
      { project: "Decathlon Active Campaign", role: "Lead Runner", type: "TV Commercial", year: "2024", directorOrClient: "Commercial Shoot" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-ns-1", title: "Action & Intro Reel", category: "Showreel", duration: "01:10", thumbnail: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-ns-1", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80", caption: "Work in silence, let the craft speak. ⚡", likes: "2.4K", comments: "79" }
    ],
    print: [
      { id: "pr-ns-1", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=80", brand: "Cult.fit", campaign: "Never Settle Campaign", year: "2024" }
    ]
  },
  {
    id: "meher-singh",
    name: "Meher Singh",
    category: "fresh-faces",
    categoryLabel: "Fresh Face",
    role: "Aspiring Screen Actor",
    age: 21,
    height: "168 cm (5'6\")",
    experience: "1 Year",
    location: "Delhi / Chandigarh",
    languages: ["Hindi", "Punjabi", "English"],
    eyeColor: "Brown",
    hair: "Black",
    badge: "New Talent 2024",
    mainImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=80",
    about: "Charming, graceful newcomer with a strong screen presence and natural conversational dialogue delivery in both Hindi and Punjabi.",
    skills: ["Punjabi Diction", "Bhangra & Giddha", "Conversational Acting", "Camera Comfort"],
    experienceCredits: [
      { project: "Kudi Punjab Di (Music Video)", role: "Lead Model", type: "Short Film", year: "2024", directorOrClient: "Speed Records" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-ms-1", title: "Introduction Video & Monologue", category: "Audition Reel", duration: "01:15", thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-ms-1", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80", caption: "Embracing every step of this journey. ❤️🎬", likes: "3.1K", comments: "124" }
    ],
    print: [
      { id: "pr-ms-1", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=80", brand: "W for Woman", campaign: "New Classic Collection", year: "2024" }
    ]
  },

  /* 4. EXPERIENCED ACTORS (6) */
  {
    id: "vikramaditya-rao",
    name: "Vikramaditya Rao",
    category: "experienced",
    categoryLabel: "Experienced Actor",
    role: "Senior Character & Antagonist",
    age: 46,
    height: "185 cm (6'1\")",
    experience: "18 Years",
    location: "Delhi / Mumbai",
    languages: ["Hindi", "English", "Telugu", "Urdu"],
    eyeColor: "Dark Brown",
    hair: "Salt & Pepper",
    badge: "Master Talent DCA",
    mainImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=80",
    about: "Veteran screen and stage actor with over 30 feature film and OTT credits. Renowned for commanding vocal power, authoritative bureaucratic roles, political figures and high-intensity drama.",
    skills: ["Classical Theatre", "Deep Voice Over & Dubbing", "Urdu Poetic Recitation", "Method Character Building", "Horse Riding"],
    experienceCredits: [
      { project: "Sultanate (OTT Series)", role: "Nawab Haider Ali (Lead Antagonist)", type: "OTT / Web Series", year: "2023", directorOrClient: "Major Streaming Giant" },
      { project: "The Governor's Decree", role: "Governor Singh", type: "Feature Film", year: "2022", directorOrClient: "National Award Winning Director" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-vr-1", title: "Career Highlights & Master Showreel", category: "Master Reel", duration: "03:15", thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-vr-1", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80", caption: "On stage, every silence must be earned. 🎭", likes: "8.4K", comments: "320" }
    ],
    print: [
      { id: "pr-vr-1", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=80", brand: "Cadillac India", campaign: "Prestige Icons", year: "2023" }
    ]
  },
  {
    id: "sunita-bhardwaj",
    name: "Sunita Bhardwaj",
    category: "experienced",
    categoryLabel: "Experienced Actor",
    role: "Senior Character & Matriarch",
    age: 44,
    height: "165 cm (5'5\")",
    experience: "16 Years",
    location: "Delhi",
    languages: ["Hindi", "English", "Bhojpuri", "Maithili"],
    eyeColor: "Dark Brown",
    hair: "Black / Grey",
    badge: "Master Talent DCA",
    mainImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=80",
    about: "Highly respected dramatic actor across television daily soaps, National Award-winning regional features, and high-budget OTT dramas. Specializes in nuanced mother figures, rural matriarchs, and political leaders.",
    skills: ["Emotional Breakdown Scenes", "Folk Dialects", "Theatre Directing", "Dubbing", "Poetry"],
    experienceCredits: [
      { project: "Ganga Kinare (Television Serial)", role: "Sumitra Devi (Lead Matriarch)", type: "Television", year: "2021-2023", directorOrClient: "Star Plus Prime" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-sb-1", title: "Dramatic & Emotional Showreel", category: "Master Reel", duration: "02:40", thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-sb-1", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80", caption: "Memories from 500 episodes of Ganga Kinare. Forever blessed.", likes: "6.2K", comments: "240" }
    ],
    print: [
      { id: "pr-sb-1", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=80", brand: "Kalyan Jewellers", campaign: "Tradition & Legacy", year: "2023" }
    ]
  },
  {
    id: "rajesh-talwar",
    name: "Rajesh Talwar",
    category: "experienced",
    categoryLabel: "Experienced Actor",
    role: "Senior Character & Comedy Veteran",
    age: 50,
    height: "176 cm (5'9.5\")",
    experience: "22 Years",
    location: "Delhi",
    languages: ["Hindi", "English", "Punjabi"],
    eyeColor: "Black",
    hair: "Grey",
    badge: "Master Talent DCA",
    mainImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=80",
    about: "Veteran theatre comedian, character artist, and voiceover icon. A household face in commercial ads and satire theatre productions across northern India.",
    skills: ["Comic Timing", "Satirical Monologue", "Improv", "Voice Modulation", "Dialect Mastery"],
    experienceCredits: [
      { project: "Sharmaji Ki Kahani (Film)", role: "Principal Chaddha", type: "Feature Film", year: "2023", directorOrClient: "Excel Entertainment" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-rt-1", title: "Comedy & Character Showreel", category: "Showreel", duration: "02:15", thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-rt-1", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80", caption: "Laughter is the shortest distance between two people.", likes: "3.7K", comments: "98" }
    ],
    print: [
      { id: "pr-rt-1", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=80", brand: "State Bank of India", campaign: "Senior Citizen Trust Series", year: "2024" }
    ]
  },
  {
    id: "alok-narang",
    name: "Alok Narang",
    category: "experienced",
    categoryLabel: "Experienced Actor",
    role: "Police & Bureaucracy Specialist",
    age: 42,
    height: "183 cm (6'0\")",
    experience: "14 Years",
    location: "Delhi / Chandigarh",
    languages: ["Hindi", "Punjabi", "English"],
    eyeColor: "Dark Brown",
    hair: "Black",
    badge: "Master Talent DCA",
    mainImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=80",
    about: "Sharp, imposing screen actor with extensive experience in crime thrillers, courtroom dramas, and high-tension investigative procedurals.",
    skills: ["Action Stunts", "Police Bearing", "Weapon Handling", "Hindi & Punjabi Dialects"],
    experienceCredits: [
      { project: "Special Cell 24", role: "ACP Dahiya", type: "OTT / Web Series", year: "2024", directorOrClient: "ZEE5 Original" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-an-1", title: "Crime Thriller Showreel", category: "Showreel", duration: "02:00", thumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-an-1", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=80", caption: "Another investigation wrapped on set. 🎬🚨", likes: "4.8K", comments: "135" }
    ],
    print: [
      { id: "pr-an-1", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=80", brand: "Woodland Boots", campaign: "Rugged Terrain Series", year: "2023" }
    ]
  },
  {
    id: "kamla-shukla",
    name: "Kamla Shukla",
    category: "experienced",
    categoryLabel: "Experienced Actor",
    role: "Classical Theatre & Art Film Actor",
    age: 48,
    height: "162 cm (5'4\")",
    experience: "20 Years",
    location: "Varanasi / Delhi",
    languages: ["Hindi", "Awadhi", "Sanskrit", "Bhojpuri"],
    eyeColor: "Dark Brown",
    hair: "Black / Grey",
    badge: "Master Talent DCA",
    mainImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80",
    about: "Eminent stage actress and voice exponent with decades of experience at Sangeet Natak Akademi and premier national theatre festivals.",
    skills: ["Classical Sanskrit Theatre", "Voice Projection", "Folk Songs", "Method Acting", "Script Mentoring"],
    experienceCredits: [
      { project: "Benares Tales", role: "Parvati Bai", type: "Feature Film", year: "2022", directorOrClient: "Festival Feature" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-ks4-1", title: "Classical Monologue Performance", category: "Master Reel", duration: "02:30", thumbnail: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-ks4-1", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=80", caption: "Theatre is worship. 🌸🙏", likes: "2.9K", comments: "85" }
    ],
    print: [
      { id: "pr-ks4-1", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80", brand: "Taneira Sarees", campaign: "Heritage Weaves", year: "2023" }
    ]
  },
  {
    id: "harish-gupta",
    name: "Harish Gupta",
    category: "experienced",
    categoryLabel: "Experienced Actor",
    role: "Dramatic & Corporate Character Actor",
    age: 45,
    height: "177 cm (5'9.5\")",
    experience: "15 Years",
    location: "Delhi",
    languages: ["Hindi", "English"],
    eyeColor: "Black",
    hair: "Black",
    badge: "Master Talent DCA",
    mainImage: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=900&auto=format&fit=crop&q=80",
    about: "Dependable character artist with steady appearances across banking ads, medical dramas, web series and family films.",
    skills: ["Subtle Acting", "Doctor & Lawyer Personas", "Dialogue Nuance", "Voice Over"],
    experienceCredits: [
      { project: "HDFC Life Campaign", role: "Responsible Father", type: "TV Commercial", year: "2023", directorOrClient: "Leo Burnett" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-hg-1", title: "Commercial & Corporate Reel", category: "Showreel", duration: "01:45", thumbnail: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-hg-1", image: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=800&auto=format&fit=crop&q=80", caption: "On set for another national brand commercial.", likes: "2.1K", comments: "50" }
    ],
    print: [
      { id: "pr-hg-1", image: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=900&auto=format&fit=crop&q=80", brand: "ICICI Prudential", campaign: "Secure Future Series", year: "2024" }
    ]
  },

  /* 5. POPULAR ACTORS (6) */
  {
    id: "siddharth-raina",
    name: "Siddharth Raina",
    category: "popular",
    categoryLabel: "Popular Actor",
    role: "Mainstream Feature & OTT Lead",
    age: 28,
    height: "184 cm (6'0.5\")",
    experience: "7 Years",
    location: "Mumbai / Delhi",
    languages: ["Hindi", "English", "Kashmiri"],
    eyeColor: "Hazel",
    hair: "Dark Brown",
    badge: "DCA Featured Star",
    mainImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=80",
    about: "High-engagement mainstream star with a massive digital following and leading credits across romantic thrillers, high-octane action web series, and blockbuster commercial endorsements.",
    skills: ["Star Presence", "Action Sequences", "Romantic Lead", "Brand Endorsements", "Voice Modulation"],
    experienceCredits: [
      { project: "Reckless Hearts (Feature Film)", role: "Rudra (Solo Lead)", type: "Feature Film", year: "2024", directorOrClient: "Nationwide Theatrical Release" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-sr-1", title: "Mainstream Action & Romance Reel", category: "Featured Reel", duration: "02:30", thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-sr-1", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80", caption: "From the cover shoot today. Big love! 💥📸", likes: "84.2K", comments: "1.4K" },
      { id: "ig-sr-2", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80", caption: "Pre-shoot mindset. Let the work do the talking. 🎬", likes: "62.1K", comments: "980" }
    ],
    print: [
      { id: "pr-sr-1", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=80", brand: "GQ Men of the Year", campaign: "Cover Story 2024", year: "2024" }
    ]
  },
  {
    id: "tara-kapur",
    name: "Tara Kapur",
    category: "popular",
    categoryLabel: "Popular Actor",
    role: "Leading Actress & Fashion Icon",
    age: 26,
    height: "175 cm (5'9\")",
    experience: "6 Years",
    location: "Mumbai / Delhi",
    languages: ["Hindi", "English", "French"],
    eyeColor: "Amber Brown",
    hair: "Dark Brown",
    badge: "DCA Featured Star",
    mainImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=80",
    about: "Sensational screen star with a stellar track record in romantic comedies, top fashion magazine covers, and digital streaming hits. One of the most sought-after faces for high-fashion campaigns.",
    skills: ["Screen Presence", "Jazz & Contemporary Dance", "Fashion Styling", "Brand Endorsement", "French & Hindi Diction"],
    experienceCredits: [
      { project: "Midnight in Bandra", role: "Alia (Solo Lead)", type: "Feature Film", year: "2024", directorOrClient: "Top Production House" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-tk-1", title: "Feature Film & Commercials Star Reel", category: "Featured Reel", duration: "02:15", thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-tk-1", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80", caption: "Red carpet moments in Paris. Thank you for the love! ✨🌹", likes: "112K", comments: "2.3K" }
    ],
    print: [
      { id: "pr-tk-1", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=80", brand: "ELLE India", campaign: "Cover Special 2024", year: "2024" }
    ]
  },
  {
    id: "samar-vohra",
    name: "Samar Vohra",
    category: "popular",
    categoryLabel: "Popular Actor",
    role: "Action & Dramatic Protagonist",
    age: 30,
    height: "183 cm (6'0\")",
    experience: "8 Years",
    location: "Delhi",
    languages: ["Hindi", "English", "Punjabi"],
    eyeColor: "Dark Brown",
    hair: "Black",
    badge: "DCA Featured Star",
    mainImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=80",
    about: "Critically acclaimed action hero and intense dramatic lead with multiple hit web series. Notable for intense screen persona, charisma, and disciplined performance.",
    skills: ["High Impact Action", "Martial Arts", "Heavy Dramatic Roles", "Voice Modulation"],
    experienceCredits: [
      { project: "Code Red: Delhi", role: "Major Ranveer", type: "OTT / Web Series", year: "2023-2024", directorOrClient: "Netflix Series" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-sv-1", title: "Action Thriller Highlights", category: "Featured Reel", duration: "02:00", thumbnail: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-sv-1", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80", caption: "Intensity is not an act, it is a conviction. ⚡", likes: "45.8K", comments: "890" }
    ],
    print: [
      { id: "pr-sv-1", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=80", brand: "Men's Health India", campaign: "Cover Fitness Icon", year: "2024" }
    ]
  },
  {
    id: "meera-singhania",
    name: "Meera Singhania",
    category: "popular",
    categoryLabel: "Popular Actor",
    role: "Mainstream Drama & Commercial Star",
    age: 27,
    height: "171 cm (5'7.5\")",
    experience: "5 Years",
    location: "Mumbai / Delhi",
    languages: ["Hindi", "English"],
    eyeColor: "Black",
    hair: "Dark Brown",
    badge: "DCA Featured Star",
    mainImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=80",
    about: "Youth icon and celebrated television & streaming actress with pan-India popularity. Front-runner in top cosmetic and lifestyle campaigns.",
    skills: ["Classical Indian Dance", "Emotional Dramatic Delivery", "TV Commercial Endorsements", "Red Carpet Presence"],
    experienceCredits: [
      { project: "Ishqbaazi (Web Series)", role: "Siya (Lead)", type: "OTT / Web Series", year: "2024", directorOrClient: "Balaji Telefilms" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-ms2-1", title: "Drama & Commercial Showreel", category: "Featured Reel", duration: "02:10", thumbnail: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-ms2-1", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=80", caption: "Glamour is an attitude. 💖✨", likes: "78.4K", comments: "1.1K" }
    ],
    print: [
      { id: "pr-ms2-1", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=80", brand: "L'Oréal Paris", campaign: "Because You're Worth It", year: "2024" }
    ]
  },
  {
    id: "kabir-oberoi",
    name: "Kabir Oberoi",
    category: "popular",
    categoryLabel: "Popular Actor",
    role: "Romantic & OTT Thriller Lead",
    age: 29,
    height: "182 cm (6'0\")",
    experience: "6 Years",
    location: "Delhi",
    languages: ["Hindi", "English"],
    eyeColor: "Dark Brown",
    hair: "Black",
    badge: "DCA Featured Star",
    mainImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80",
    about: "Beloved screen star celebrated for his intense emotional depth and natural screen chemistry. Highly sought after for romance and suspense thrillers.",
    skills: ["Romantic Acting", "Dialogue Nuance", "Vocal Control", "Screen Presence"],
    experienceCredits: [
      { project: "Whispers of the Heart", role: "Raghav", type: "Feature Film", year: "2023", directorOrClient: "National Theatrical Release" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-ko-1", title: "Romantic & Suspense Showreel", category: "Featured Reel", duration: "01:50", thumbnail: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-ko-1", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&auto=format&fit=crop&q=80", caption: "Living through stories. Forever grateful. 🎥❤️", likes: "52.3K", comments: "940" }
    ],
    print: [
      { id: "pr-ko-1", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80", brand: "Monte Carlo", campaign: "Winter Elegance Lookbook", year: "2024" }
    ]
  },
  {
    id: "zoya-khan",
    name: "Zoya Khan",
    category: "popular",
    categoryLabel: "Popular Actor",
    role: "Leading Actress & Digital Creator",
    age: 25,
    height: "173 cm (5'8\")",
    experience: "5 Years",
    location: "Delhi / Mumbai",
    languages: ["Hindi", "English", "Urdu"],
    eyeColor: "Hazel",
    hair: "Black",
    badge: "DCA Featured Star",
    mainImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80",
    about: "Captivating leading lady with massive social engagement, known for her strong portrayals in female-centric OTT series and high-fashion luxury campaigns.",
    skills: ["Urdu Diction", "Method Acting", "Dance Choreography", "Social Influence"],
    experienceCredits: [
      { project: "Noor Mahal (Period Drama)", role: "Princess Zeba", type: "OTT / Web Series", year: "2024", directorOrClient: "SonyLIV Original" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-zk-1", title: "Period Drama Showreel", category: "Featured Reel", duration: "02:15", thumbnail: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-zk-1", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=80", caption: "Royalty is a state of grace. ✨👑", likes: "95.6K", comments: "1.8K" }
    ],
    print: [
      { id: "pr-zk-1", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80", brand: "Harper's Bazaar", campaign: "Royal Splendor Cover", year: "2024" }
    ]
  },

  /* 6. CHILD ACTORS (6) */
  {
    id: "aarav-mehta",
    name: "Aarav Mehta",
    category: "child-actors",
    categoryLabel: "Child Actor",
    role: "Commercial & Film Child Artist",
    age: 9,
    height: "132 cm",
    experience: "3 Years",
    location: "Delhi",
    languages: ["Hindi", "English"],
    eyeColor: "Dark Brown",
    hair: "Black",
    badge: "Verified DCA Child Talent",
    mainImage: "https://images.unsplash.com/photo-1543332164-6e82f355badc?w=900&auto=format&fit=crop&q=80",
    about: "Bright, natural, and expressive child actor with featured roles in leading biscuit ads, health drinks campaigns, and family drama films. Exceptionally comfortable with lines and directors.",
    skills: ["Natural Dialogue Delivery", "Facial Expressions", "Recitation", "Swimming", "Cricket"],
    experienceCredits: [
      { project: "Bournvita Champion Campaign", role: "School Boy (Lead)", type: "TV Commercial", year: "2024", directorOrClient: "National Ad Agency" },
      { project: "Ghar Ki Khushi (Feature Film)", role: "Chintu (Son)", type: "Feature Film", year: "2023", directorOrClient: "Family Drama Feature" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1543332164-6e82f355badc?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-am-1", title: "Commercials & Audition Highlights", category: "Child Reel", duration: "01:10", thumbnail: "https://images.unsplash.com/photo-1543332164-6e82f355badc?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-am-1", image: "https://images.unsplash.com/photo-1543332164-6e82f355badc?w=800&auto=format&fit=crop&q=80", caption: "Fun shoot day with the best team! 🌟🎬 (Managed by parents)", likes: "4.2K", comments: "120" }
    ],
    print: [
      { id: "pr-am-1", image: "https://images.unsplash.com/photo-1543332164-6e82f355badc?w=900&auto=format&fit=crop&q=80", brand: "Hopscotch Kids", campaign: "Back to School Collection", year: "2024" }
    ]
  },
  {
    id: "anvi-gupta",
    name: "Anvi Gupta",
    category: "child-actors",
    categoryLabel: "Child Actor",
    role: "Drama & Commercial Child Artist",
    age: 8,
    height: "125 cm",
    experience: "2 Years",
    location: "Delhi",
    languages: ["Hindi", "English"],
    eyeColor: "Black",
    hair: "Black",
    badge: "Verified DCA Child Talent",
    mainImage: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&auto=format&fit=crop&q=80",
    about: "Incredibly adorable, attentive, and confident young performer. Known for clear dialogue recitation, cheerful energy on set, and emotional understanding of family scenes.",
    skills: ["Natural Acting", "Poem Recitation", "Storytelling", "Kids Classical Dance"],
    experienceCredits: [
      { project: "Kinder Joy Surprise Ad", role: "Little Girl", type: "TV Commercial", year: "2024", directorOrClient: "National Broadcast" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1543332164-6e82f355badc?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-ag-1", title: "Introduction & Cute Monologue", category: "Child Reel", duration: "01:00", thumbnail: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-ag-1", image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&auto=format&fit=crop&q=80", caption: "Smile and sparkle! ✨💖 (Managed by parents)", likes: "5.8K", comments: "160" }
    ],
    print: [
      { id: "pr-ag-1", image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&auto=format&fit=crop&q=80", brand: "FirstCry India", campaign: "Little Princess Lookbook", year: "2024" }
    ]
  },
  {
    id: "vihaan-sharma",
    name: "Vihaan Sharma",
    category: "child-actors",
    categoryLabel: "Child Actor",
    role: "Film & Commercial Child Artist",
    age: 11,
    height: "142 cm",
    experience: "4 Years",
    location: "Noida / Delhi",
    languages: ["Hindi", "English"],
    eyeColor: "Dark Brown",
    hair: "Black",
    badge: "Verified DCA Child Talent",
    mainImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&auto=format&fit=crop&q=80",
    about: "Talented pre-teen actor with substantial experience in web series and national commercials. Excellent memorization, emotional range, and disciplined attitude during long shooting days.",
    skills: ["Emotional Scene Acting", "Dialogue Delivery", "Chess", "Skating"],
    experienceCredits: [
      { project: "The Little Detective (Web Series)", role: "Karan (Lead Kid)", type: "OTT / Web Series", year: "2024", directorOrClient: "Kids OTT Special" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1543332164-6e82f355badc?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-vs-1", title: "Drama Scene Performance Reel", category: "Child Reel", duration: "01:30", thumbnail: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-vs-1", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=80", caption: "Ready for the big scene! 🎬 (Parent Managed)", likes: "3.2K", comments: "85" }
    ],
    print: [
      { id: "pr-vs-1", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&auto=format&fit=crop&q=80", brand: "Max Kids", campaign: "Junior Trendsetters", year: "2024" }
    ]
  },
  {
    id: "riya-verma",
    name: "Riya Verma",
    category: "child-actors",
    categoryLabel: "Child Actor",
    role: "Commercial & Print Child Model",
    age: 7,
    height: "120 cm",
    experience: "2 Years",
    location: "Delhi",
    languages: ["Hindi", "English"],
    eyeColor: "Black",
    hair: "Black",
    badge: "Verified DCA Child Talent",
    mainImage: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&auto=format&fit=crop&q=80",
    about: "Sweet, energetic, and photogenic young talent. Highly responsive to cues and loved by creative directors for quick, radiant takes.",
    skills: ["Kids Modeling", "Dance Moves", "Expressions", "Nursery Recitation"],
    experienceCredits: [
      { project: "Colgate Junior Ad", role: "Smiling Child", type: "TV Commercial", year: "2024", directorOrClient: "National Campaign" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1543332164-6e82f355badc?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-rv-1", title: "Fun Introduction Video", category: "Child Reel", duration: "00:50", thumbnail: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-rv-1", image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&auto=format&fit=crop&q=80", caption: "Camera, smiles, action! 🌸 (Parent Managed)", likes: "4.9K", comments: "135" }
    ],
    print: [
      { id: "pr-rv-1", image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&auto=format&fit=crop&q=80", brand: "Mothercare India", campaign: "Little Smiles Series", year: "2024" }
    ]
  },
  {
    id: "reyansh-patel",
    name: "Reyansh Patel",
    category: "child-actors",
    categoryLabel: "Child Actor",
    role: "Drama & Television Child Artist",
    age: 10,
    height: "138 cm",
    experience: "3 Years",
    location: "Delhi",
    languages: ["Hindi", "English", "Gujarati"],
    eyeColor: "Brown",
    hair: "Black",
    badge: "Verified DCA Child Talent",
    mainImage: "https://images.unsplash.com/photo-1543332164-6e82f355badc?w=900&auto=format&fit=crop&q=80",
    about: "Confident and versatile child performer with experience in historical serials, school educational campaigns, and TV commercials.",
    skills: ["Historical Dialogue Recitation", "Martial Arts Basics", "Expression", "Drawing"],
    experienceCredits: [
      { project: "Balveer Special Episode", role: "Young Prince", type: "Television", year: "2023", directorOrClient: "Sony SAB" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1543332164-6e82f355badc?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-rp-1", title: "Historical Role Monologue", category: "Child Reel", duration: "01:15", thumbnail: "https://images.unsplash.com/photo-1543332164-6e82f355badc?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-rp-1", image: "https://images.unsplash.com/photo-1543332164-6e82f355badc?w=800&auto=format&fit=crop&q=80", caption: "Proud day on set. Keep dreaming big! 🌟 (Parent Managed)", likes: "2.8K", comments: "76" }
    ],
    print: [
      { id: "pr-rp-1", image: "https://images.unsplash.com/photo-1543332164-6e82f355badc?w=900&auto=format&fit=crop&q=80", brand: "Pantaloons Junior", campaign: "Festive Sparkle 2024", year: "2024" }
    ]
  },
  {
    id: "myra-kapoor",
    name: "Myra Kapoor",
    category: "child-actors",
    categoryLabel: "Child Actor",
    role: "Film, Web & Commercial Child Artist",
    age: 12,
    height: "145 cm",
    experience: "4 Years",
    location: "Delhi",
    languages: ["Hindi", "English"],
    eyeColor: "Dark Brown",
    hair: "Black",
    badge: "Verified DCA Child Talent",
    mainImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&auto=format&fit=crop&q=80",
    about: "Mature, expressive, and deeply talented child artist with featured parts in sensitive festival films and leading brand campaigns.",
    skills: ["Emotional Acting", "Classical Kathak Basics", "Piano", "Fluent English & Hindi"],
    experienceCredits: [
      { project: "A Letter to Papa (Short Film)", role: "Ananya (Lead Child)", type: "Short Film", year: "2024", directorOrClient: "Festival Feature" }
    ],
    digitals: [
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1543332164-6e82f355badc?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=80"
    ],
    videos: [
      { id: "v-mk-1", title: "Emotional Dramatic Monologue", category: "Child Reel", duration: "01:25", thumbnail: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&auto=format&fit=crop&q=80", url: "/videos/actors/actor-showreel-demo.mp4" }
    ],
    instagram: [
      { id: "ig-mk-1", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=80", caption: "Love bringing stories to life on camera. 💫🎬 (Parent Managed)", likes: "4.5K", comments: "110" }
    ],
    print: [
      { id: "pr-mk-1", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&auto=format&fit=crop&q=80", brand: "FabIndia Kids", campaign: "Festive Collection 2024", year: "2024" }
    ]
  }
];

export function getActorCategories(): CategoryMeta[] {
  return ACTOR_CATEGORIES;
}

export function getCategoryBySlug(slug: string): CategoryMeta | undefined {
  return ACTOR_CATEGORIES.find((category) => category.slug === slug);
}

export function getActorsByCategory(category: ActorCategorySlug): Actor[] {
  return ACTORS_DATA.filter((actor) => actor.category === category);
}

export function getActorById(id: string): Actor | undefined {
  return ACTORS_DATA.find((actor) => actor.id === id);
}

export function getAllActors(): Actor[] {
  return ACTORS_DATA;
}

export function getRelatedActors(currentId: string, category: ActorCategorySlug, limit = 3): Actor[] {
  return ACTORS_DATA.filter((actor) => actor.category === category && actor.id !== currentId).slice(0, limit);
}
