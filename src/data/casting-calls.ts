export interface CastingCategoryMeta {
  title: string;
  category: string;
  headline?: string;
  description: string;
  route: string;
  image: string;
  countLabel: string;
  ctaText: string;
  segments: { title: string; href: string }[];
}

export interface CastingCallItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  productionType: string;
  location: string;
  gender: string;
  ageRange: string;
  status: "OPEN" | "CLOSING SOON" | "VERIFIED";
  deadline: string;
  compensation: string;
  description: string;
  roleDetails: string;
  requirements: string[];
  whatToPrepare: string[];
  image: string;
}

export const CASTING_CATEGORIES: CastingCategoryMeta[] = [
  {
    title: "Actors Casting",
    category: "Actors",
    headline: "Lead & Supporting Roles",
    description: "Explore audition opportunities for lead, supporting, and character actors across Bollywood, OTT series, and television productions.",
    route: "/casting-calls/actors/",
    image: "/images/actors/male lead actor feature flim actions.png",
    countLabel: "14 Live Postings",
    ctaText: "Explore Actor Calls",
    segments: [
      { title: "Male Actors", href: "/actors/male-actors/" },
      { title: "Female Actors", href: "/actors/female-actors/" },
      { title: "Fresh Faces", href: "/actors/fresh-faces/" },
    ],
  },
  {
    title: "Models Casting",
    category: "Models",
    headline: "Fashion & Commercial",
    description: "Explore modeling calls for high-fashion runway shows, designer lookbooks, commercial print ads, and brand campaigns.",
    route: "/casting-calls/models/",
    image: "/images/actors/model femal 1.png",
    countLabel: "12 Live Postings",
    ctaText: "Explore Model Calls",
    segments: [
      { title: "Fashion Models", href: "/models/fashion-models/" },
      { title: "Commercial Models", href: "/models/commercial-models/" },
      { title: "Runway Models", href: "/models/female-models/" },
    ],
  },
  {
    title: "Bollywood Films",
    category: "Feature Films",
    headline: "Silver Screen Auditions",
    description: "Feature-film casting calls for upcoming theatrical releases, major studio projects, and independent cinema productions.",
    route: "/casting-calls/bollywood-films/",
    image: "/images/actors/casting-calls bollywooed hrizontally.png",
    countLabel: "8 Live Postings",
    ctaText: "Explore Film Calls",
    segments: [
      { title: "Lead Characters", href: "/casting-calls/bollywood-films/" },
      { title: "Supporting Roles", href: "/casting-calls/bollywood-films/" },
      { title: "Featured Cameos", href: "/casting-calls/bollywood-films/" },
    ],
  },
  {
    title: "OTT / Web Series",
    category: "OTT Series",
    headline: "Streaming Platform Originals",
    description: "Casting calls for high-budget web series, streaming platform dramas, thrillers, and multi-season original productions.",
    route: "/casting-calls/ott-web-series/",
    image: "/images/actors/looking for male & female.png",
    countLabel: "10 Live Postings",
    ctaText: "Explore OTT Calls",
    segments: [
      { title: "Episodic Leads", href: "/casting-calls/ott-web-series/" },
      { title: "Recurring Characters", href: "/casting-calls/ott-web-series/" },
      { title: "Guest Stars", href: "/casting-calls/ott-web-series/" },
    ],
  },
  {
    title: "Dancers Casting",
    category: "Dancers",
    headline: "Bollywood Title Song & Troupe Performance Auditions",
    description: "Audition calls for lead soloists, background dance troupes, music video choreographies, and live stage concert tours.",
    route: "/casting-calls/dancers/",
    image: "/images/actors/Contemporary Dancers.avif",
    countLabel: "18+ Troupe Auditions",
    ctaText: "View Dancer Casting Calls",
    segments: [
      { title: "Lead Soloists", href: "/dancers/lead-dancers/" },
      { title: "Background Troupes", href: "/dancers/background-dancers/" },
      { title: "Contemporary", href: "/dancers/contemporary-dancers/" },
    ],
  },
  {
    title: "TV Commercials",
    category: "Brand TVCs",
    headline: "National Brand Ad Commercial Auditions",
    description: "Auditions for TV commercial ads across FMCG brands, automobile launches, banking services, and retail retail promotions.",
    route: "/casting-calls/tv-commercials/",
    image: "/images/actors/brand 1.png",
    countLabel: "30+ Ad Campaigns",
    ctaText: "View TVC Casting Calls",
    segments: [
      { title: "Brand Face", href: "/casting-calls/tv-commercials/" },
      { title: "Character Lead", href: "/casting-calls/tv-commercials/" },
      { title: "Secondary Lead", href: "/casting-calls/tv-commercials/" },
    ],
  },
  {
    title: "Voice Artists",
    category: "Voice & Dubbing",
    headline: "Dubbing & Voice-Overs",
    description: "Voice casting calls for multilingual theatrical dubbing, commercial voiceovers, radio broadcasting, and narration projects.",
    route: "/casting-calls/voice-artists/",
    image: "/images/actors/ChatGPT Image Aug 21, 2026, 02_50_55 PM (2).png",
    countLabel: "5 Live Postings",
    ctaText: "Explore Voice Calls",
    segments: [
      { title: "Dubbing Soloists", href: "/voice-artists/dubbing-artists/" },
      { title: "Commercial VO", href: "/voice-artists/voice-over-artists/" },
      { title: "Radio Jockeys", href: "/voice-artists/radio-voice-artists/" },
    ],
  },
  {
    title: "Influencers Casting",
    category: "Digital Creators",
    headline: "Brand Collaborations",
    description: "Casting for digital content creators, Instagram reel campaigns, brand endorsement videos, and social media activations.",
    route: "/casting-calls/influencers/",
    image: "/images/actors/fashion influencer.png",
    countLabel: "7 Live Postings",
    ctaText: "Explore Creator Calls",
    segments: [
      { title: "Instagram Creators", href: "/influencers/instagram-influencers/" },
      { title: "YouTube Creators", href: "/influencers/youtube-influencers/" },
      { title: "Lifestyle Creators", href: "/influencers/lifestyle-influencers/" },
    ],
  },
  {
    title: "Music Videos",
    category: "Music Videos",
    headline: "Song Videos & Singles",
    description: "Casting calls for music video leads, secondary performers, and synchronized dancers for record label singles.",
    route: "/casting-calls/music-videos/",
    image: "/images/actors/Music Videos.jpg",
    countLabel: "6 Live Postings",
    ctaText: "Explore Music Calls",
    segments: [
      { title: "Video Leads", href: "/casting-calls/music-videos/" },
      { title: "Featured Performers", href: "/casting-calls/music-videos/" },
    ],
  },
  {
    title: "Fashion Shows",
    category: "Runway & Ramp",
    headline: "Fashion Week & Shows",
    description: "Auditions for fashion week runway shows, designer collection showcases, and luxury couture ramp presentations.",
    route: "/casting-calls/fashion-shows/",
    image: "/images/actors/Fashion Shows.webp",
    countLabel: "4 Live Postings",
    ctaText: "Explore Runway Calls",
    segments: [
      { title: "Runway Models", href: "/casting-calls/fashion-shows/" },
      { title: "High Fashion", href: "/casting-calls/fashion-shows/" },
    ],
  },
  {
    title: "Print Ads",
    category: "Print & Lookbooks",
    headline: "Catalogues & E-Commerce",
    description: "Casting for print advertisements, designer lookbooks, jewelry campaigns, and e-commerce catalogue shoots.",
    route: "/casting-calls/print-ads/",
    image: "/images/actors/model femal 3.png",
    countLabel: "5 Live Postings",
    ctaText: "Explore Print Calls",
    segments: [
      { title: "Jewellery Print", href: "/casting-calls/print-ads/" },
      { title: "Apparel Catalogue", href: "/casting-calls/print-ads/" },
    ],
  },
  {
    title: "TV Serials",
    category: "Television Serials",
    headline: "Daily Soaps & Drama",
    description: "Auditions for daily television serials, prime-time television dramas, and mythological television productions.",
    route: "/casting-calls/tv-serials/",
    image: "/images/actors/TV Serials.webp",
    countLabel: "8 Live Postings",
    ctaText: "Explore Serial Calls",
    segments: [
      { title: "Prime Time Leads", href: "/casting-calls/tv-serials/" },
      { title: "Character Roles", href: "/casting-calls/tv-serials/" },
    ],
  },
];

export const CASTING_CALLS: CastingCallItem[] = [
  {
    id: "cc-001",
    slug: "female-lead-ott-drama-series",
    title: "Female Lead Actor for Upcoming OTT Thriller Series",
    category: "Actors",
    categorySlug: "actors",
    productionType: "OTT Web Series",
    location: "Mumbai, MH",
    gender: "Female",
    ageRange: "20 - 28 Years",
    status: "OPEN",
    deadline: "Sep 05, 2026",
    compensation: "Industry Standard Paid (Per Episode Scale)",
    description: "Casting a charismatic female lead for a 8-episode crime thriller web series directed by a premier Bollywood director for a top streaming platform.",
    roleDetails: "Character is an articulate investigative lawyer navigating high-stakes courtroom battles and personal conflicts. Strong screen presence and fluent Hindi dialogue delivery required.",
    requirements: [
      "Prior acting experience in short films, theatre, or screen work preferred",
      "Fluent in spoken Hindi with natural diction",
      "Must be available for a 45-day continuous shoot schedule in Mumbai & Pune",
      "Clean skin tone with expressive facial eyes and screen confidence",
    ],
    whatToPrepare: [
      "2-minute dramatic audition monologue video in Hindi",
      "Current clean digital headshots (front, 45-degree, full length)",
      "Updated acting resume detailing prior credits or workshop training",
    ],
    image: "/images/actors/talent female actor.png",
  },
  {
    id: "cc-002",
    slug: "male-lead-bollywood-action-film",
    title: "Male Lead Actor for Feature Film Action Drama",
    category: "Bollywood Films",
    categorySlug: "bollywood-films",
    productionType: "Bollywood Feature Film",
    location: "Mumbai / Delhi NCR",
    gender: "Male",
    ageRange: "24 - 32 Years",
    status: "VERIFIED",
    deadline: "Sep 15, 2026",
    compensation: "High-Budget Contract Scale",
    description: "Casting male lead for an action-packed theatrical feature film produced by a top-tier production house. Requires intense screen presence and physical agility.",
    roleDetails: "Protagonist playing an undercover army officer on a special assignment. Requires athletic build, martial arts or stunt training background, and intense emotional depth.",
    requirements: [
      "Height minimum 5'10\" with athletic or toned physique",
      "Experience in action choreography, martial arts, or fitness modeling is a plus",
      "Strong command over Hindi and conversational English",
      "Flexible dates for physical boot camp training prior to principal photography",
    ],
    whatToPrepare: [
      "1-minute intense dramatic monologue",
      "Short action/fitness demonstration reel or video sample",
      "Clear front & side comp card photos",
    ],
    image: "/images/actors/talent male actore.png",
  },
  {
    id: "cc-003",
    slug: "fashion-model-designer-couture-runway",
    title: "High-Fashion Female Models for Couture Runway Showcase",
    category: "Models",
    categorySlug: "models",
    productionType: "Fashion Show / Ramp",
    location: "New Delhi (DL)",
    gender: "Female",
    ageRange: "18 - 25 Years",
    status: "CLOSING SOON",
    deadline: "Aug 28, 2026",
    compensation: "₹45,000 - ₹75,000 Per Show",
    description: "Casting 12 high-fashion runway models for premier Delhi Fashion Week designer showcases.",
    roleDetails: "Models will walk for leading Indian couture labels presenting bridal and contemporary luxury collections.",
    requirements: [
      "Height: Minimum 5'8.5\" without heels",
      "Bust-Waist-Hips: 32-24-35 (Standard couture sample size)",
      "Prior runway or fashion week experience mandatory",
      "Professional demeanor and confidence under high-pressure backstage timelines",
    ],
    whatToPrepare: [
      "Unedited digital polaroids (Natural lighting, no makeup)",
      "High-definition runway walk video sample (catwalk on heels)",
      "Model comp card with exact current measurements",
    ],
    image: "/images/actors/model femal 3.png",
  },
  {
    id: "cc-004",
    slug: "lead-dancers-bollywood-music-video",
    title: "Lead & Troupe Dancers for Bollywood Single Music Video",
    category: "Dancers",
    categorySlug: "dancers",
    productionType: "Music Video",
    location: "Mumbai, MH",
    gender: "Any Gender",
    ageRange: "18 - 28 Years",
    status: "OPEN",
    deadline: "Sep 10, 2026",
    compensation: "₹15,000 - ₹35,000 Per Shoot Day",
    description: "Casting 16 synchronized commercial dancers for a high-octane Bollywood music video song featuring top playback singers.",
    roleDetails: "Choreography combines Hip-Hop, Bollywood Commercial, and Contemporary energy. Fast-paced choreography learning required.",
    requirements: [
      "Formal dance academy training or proven music video experience",
      "Exceptional rhythmic timing and camera expression",
      "Available for 3 mandatory rehearsal days followed by a 2-day shoot",
    ],
    whatToPrepare: [
      "60-second freestyle or commercial dance reel video link",
      "Full length body shot and dance headshot",
    ],
    image: "/images/actors/lead dancers.jpg",
  },
  {
    id: "cc-005",
    slug: "commercial-face-automobile-tvc",
    title: "Lead Family & Young Professional Faces for Automobile TVC",
    category: "TV Commercials",
    categorySlug: "tv-commercials",
    productionType: "TV Commercial (TVC)",
    location: "Delhi NCR",
    gender: "Any Gender",
    ageRange: "25 - 40 Years",
    status: "VERIFIED",
    deadline: "Sep 02, 2026",
    compensation: "₹80,000 - ₹1,500,000 (TVC + Digital Usage)",
    description: "Casting relatable yet premium commercial faces for a nationwide launch TV commercial of an flagship Electric SUV.",
    roleDetails: "Expressive actors representing urban professionals and young families enjoying road trips. Warm smile, natural screen charisma.",
    requirements: [
      "Relatable commercial face with clean skin and photogenic smile",
      "Ability to project natural joy and emotion without over-acting",
      "Valid passport & driving license preferred",
    ],
    whatToPrepare: [
      "Natural self-introduction video (30 seconds in Hindi & English)",
      "Smiling front and profile photographs",
    ],
    image: "/media/dca/casting-calls/dca-casting-commercial-01.jpg",
  },
  {
    id: "cc-006",
    slug: "dubbing-voice-artist-action-movie",
    title: "Lead Dubbing Voice Artist for South Blockbuster Hindi Dubbing",
    category: "Voice Artists",
    categorySlug: "voice-artists",
    productionType: "Voice / Dubbing",
    location: "Mumbai Studio / Remote Home Studio",
    gender: "Male",
    ageRange: "25 - 45 Years",
    status: "OPEN",
    deadline: "Sep 20, 2026",
    compensation: "Industry Standard Dubbing Scale",
    description: "Casting powerful male voice artist for Hindi dubbing of a pan-India action blockbuster film.",
    roleDetails: "Rich baritone voice capable of expressing intense dialogue delivery, battle cries, and emotional depth aligned with lip sync.",
    requirements: [
      "Broadcast-grade home recording setup or availability in Mumbai dubbing studio",
      "FLawless Hindi diction without regional accent bleed",
      "Prior dubbing credits for feature films or foreign series mandatory",
    ],
    whatToPrepare: [
      "2 audio voice demo reels (Dramatic dialogue & Action punch lines)",
      "Vocal specifications sheet (mic setup, DAW software)",
    ],
    image: "/media/dca/voice-artists/dca-voice-studio-01.jpg",
  },
  {
    id: "cc-007",
    slug: "lifestyle-influencer-luxury-skincare",
    title: "Lifestyle & Skincare Influencers for Brand Campaign",
    category: "Influencers",
    categorySlug: "influencers",
    productionType: "Digital / Brand Campaign",
    location: "Pan India (Remote)",
    gender: "Female",
    ageRange: "19 - 32 Years",
    status: "VERIFIED",
    deadline: "Sep 12, 2026",
    compensation: "Paid Collaboration + Product Gifting",
    description: "Casting 10 verified Instagram and YouTube creators for an exclusive luxury skincare product launch.",
    roleDetails: "Creators will produce aesthetic reel tutorials, unboxing reviews, and authentic testimonial posts showcasing product results.",
    requirements: [
      "Minimum 25,000 authentic Instagram followers or 15,000 YouTube subscribers",
      "High engagement rate (>3.5%) with aesthetic video editing skills",
      "Clean skin focus with passion for skincare and beauty storytelling",
    ],
    whatToPrepare: [
      "Media kit with audience demographics and past brand collaboration metrics",
      "Link to top performing skincare reel or video review",
    ],
    image: "/media/dca/influencers/dca-influencer-community-01.jpg",
  },
  {
    id: "cc-008",
    slug: "child-artist-festive-jewellery-ad",
    title: "Charismatic Child Artists for Festive Apparel & Print Campaign",
    category: "Actors",
    categorySlug: "actors",
    productionType: "Print / Commercial",
    location: "Delhi NCR",
    gender: "Any Gender",
    ageRange: "6 - 12 Years",
    status: "OPEN",
    deadline: "Sep 08, 2026",
    compensation: "₹25,000 - ₹50,000 Per Shoot Day",
    description: "Casting cute and expressive child artists for a major ethnic clothing brand's Diwali campaign shoot.",
    roleDetails: "Child performers presenting festive ethnic wear alongside adult model parents in warm, celebratory family scenes.",
    requirements: [
      "Photogenic child artist comfortable facing studio lighting and camera crews",
      "Parental consent and mandatory guardian accompaniment on set",
      "Friendly, obedient demeanor without stage fear",
    ],
    whatToPrepare: [
      "Recent natural child photographs (No heavy editing or makeup)",
      "30-second casual self-introduction video guided by parent",
    ],
    image: "/media/dca/child-artists/dca-child-artist-boy-01.jpg",
  },
];

export function getAllCastingCategories(): CastingCategoryMeta[] {
  return CASTING_CATEGORIES;
}

export function getAllCastingCalls(): CastingCallItem[] {
  return CASTING_CALLS;
}

export function getCastingCallsByCategory(categorySlug: string): CastingCallItem[] {
  if (!categorySlug || categorySlug === "all") return CASTING_CALLS;

  return CASTING_CALLS.filter(
    (item) =>
      item.categorySlug.toLowerCase() === categorySlug.toLowerCase() ||
      item.category.toLowerCase().includes(categorySlug.toLowerCase())
  );
}

export function getCastingCallBySlug(slug: string): CastingCallItem | undefined {
  return CASTING_CALLS.find((item) => item.slug === slug || item.id === slug);
}
