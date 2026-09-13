import { API_URL } from "@/config/env";
import type { Actor, ActorCategorySlug } from "@/data/actors";
import type { Model, ModelCategorySlug } from "@/data/models";
import type { ChildArtist, ChildArtistCategorySlug } from "@/data/child-artists";

export interface PublicTalentParams {
  category?: string;
  gender?: string;
  subCategory?: string;
  city?: string;
  search?: string;
  page?: number;
  limit?: number;
}

export interface DynamicArtistRecord {
  id: string;
  dbId: string;
  userId: string;
  name: string;
  category: string;
  categoryLabel: string;
  role: string;
  age: number;
  height: string;
  weight: string;
  chest?: string;
  waist?: string;
  hips?: string;
  experience: string;
  location: string;
  languages: string[];
  mainImage: string;
  about: string;
  skills: string[];
  specialAbilities: string[];
  isLiveUser: boolean;
  verificationStatus: string;
  digitals: string[];
  videos?: any[];
  instagram?: any[];
  print?: any[];
  experienceCredits?: any[];
}

// ==========================================
// ACTOR ADAPTER & API
// ==========================================

export function transformDynamicToActor(item: DynamicArtistRecord): Actor {
  let categorySlug: ActorCategorySlug = "male";
  const cat = (item.category || "").toLowerCase();
  const label = (item.categoryLabel || "").toLowerCase();

  if (label.includes("female") || cat.includes("female")) {
    categorySlug = "female";
  } else if (label.includes("child") || cat.includes("child")) {
    categorySlug = "child-actors";
  } else if ((item.experience || "").toLowerCase().includes("fresh")) {
    categorySlug = "fresh-faces";
  } else if ((item.experience || "").toLowerCase().includes("experienced")) {
    categorySlug = "experienced";
  } else {
    categorySlug = label.includes("female") ? "female" : "male";
  }

  return {
    id: item.id,
    name: item.name,
    category: categorySlug,
    categoryLabel: item.categoryLabel || "Verified Talent",
    role: item.role || "Talent",
    age: item.age || 24,
    height: item.height || "Not specified",
    experience: item.experience || "Fresh Face",
    location: item.location || "Delhi, India",
    languages: item.languages?.length ? item.languages : ["Hindi", "English"],
    eyeColor: "Dark Brown",
    hair: "Black",
    badge: "Verified DCA Artist",
    mainImage: item.mainImage || "/images/actors/editorial_grid_1.png",
    about: item.about || `${item.name} is a verified talent with Delhi Casting Agency.`,
    skills: item.skills || [],
    experienceCredits: item.experienceCredits || [],
    digitals: item.digitals?.length ? item.digitals : [item.mainImage || "/images/actors/editorial_grid_1.png"],
    videos: item.videos || [],
    instagram: item.instagram || [],
    print: item.print || [],
    categories: [categorySlug],
  };
}

export async function fetchPublicApprovedTalents(
  params?: PublicTalentParams
): Promise<Actor[]> {
  try {
    const query = new URLSearchParams();
    if (params?.category) query.set("category", params.category);
    if (params?.gender) query.set("gender", params.gender);
    if (params?.subCategory) query.set("subCategory", params.subCategory);
    if (params?.city) query.set("city", params.city);
    if (params?.search) query.set("search", params.search);
    if (params?.page) query.set("page", String(params.page));
    if (params?.limit) query.set("limit", String(params.limit));

    const url = `${API_URL}/api/artist/public?${query.toString()}`;
    const res = await fetch(url, {
      next: { revalidate: 15 },
    }).catch(() => null);

    if (!res || !res.ok) return [];

    const data = await res.json().catch(() => null);
    if (!data || !data.success || !Array.isArray(data.artists)) return [];

    return data.artists.map(transformDynamicToActor);
  } catch (err) {
    console.warn("fetchPublicApprovedTalents error:", err);
    return [];
  }
}

export async function fetchPublicArtistById(
  id: string
): Promise<Actor | null> {
  try {
    const cleanId = id.startsWith("dca-") ? id : `dca-${id}`;
    const url = `${API_URL}/api/artist/public/${cleanId}`;
    const res = await fetch(url, {
      next: { revalidate: 15 },
    }).catch(() => null);

    if (!res || !res.ok) return null;

    const data = await res.json().catch(() => null);
    if (!data || !data.success || !data.artist) return null;

    return transformDynamicToActor(data.artist);
  } catch (err) {
    console.warn("fetchPublicArtistById error:", err);
    return null;
  }
}

export function mergeTalentsWithLive(
  staticList: Actor[],
  liveList: Actor[]
): Actor[] {
  if (!liveList || liveList.length === 0) return staticList;

  const liveIds = new Set(liveList.map((a) => a.id));
  const filteredStatic = staticList.filter((a) => !liveIds.has(a.id));

  return [...liveList, ...filteredStatic];
}

// ==========================================
// MODEL ADAPTER & API
// ==========================================

export function transformDynamicToModel(item: DynamicArtistRecord): Model {
  let categorySlug: ModelCategorySlug = "male-models";
  const cat = (item.category || "").toLowerCase();
  const label = (item.categoryLabel || "").toLowerCase();

  if (label.includes("female") || cat.includes("female")) {
    categorySlug = "female-models";
  } else if (label.includes("fitness") || cat.includes("fitness")) {
    categorySlug = "fitness-models";
  } else if (label.includes("plus") || cat.includes("plus")) {
    categorySlug = "plus-size-models";
  } else if (label.includes("commercial") || cat.includes("commercial")) {
    categorySlug = "commercial-models";
  } else if (label.includes("fashion") || cat.includes("fashion")) {
    categorySlug = "fashion-models";
  } else {
    categorySlug = label.includes("female") ? "female-models" : "male-models";
  }

  return {
    id: item.id,
    name: item.name,
    category: categorySlug,
    categoryLabel: item.categoryLabel || "Verified Model",
    role: item.role || "Model",
    age: item.age || 22,
    height: item.height || "Not specified",
    experience: item.experience || "Fresh Face",
    location: item.location || "Delhi, India",
    languages: item.languages?.length ? item.languages : ["Hindi", "English"],
    eyeColor: "Dark Brown",
    hair: "Black",
    bustOrChest: item.chest || "Not specified",
    waist: item.waist || "Not specified",
    hips: item.hips || "Not specified",
    shoeSize: "UK 8 / EU 42",
    badge: "Verified DCA Model",
    mainImage: item.mainImage || "/images/actors/editorial_grid_1.png",
    about: item.about || `${item.name} is a verified model registered with Delhi Casting Agency.`,
    skills: item.skills || [],
    experienceCredits: item.experienceCredits || [],
    photos: item.digitals?.length ? item.digitals : [item.mainImage || "/images/actors/editorial_grid_1.png"],
    videos: item.videos || [],
    instagram: item.instagram || [],
    print: item.print || [],
  };
}

export async function fetchPublicApprovedModels(
  params?: PublicTalentParams
): Promise<Model[]> {
  try {
    const query = new URLSearchParams();
    query.set("category", "model");
    if (params?.gender) query.set("gender", params.gender);
    if (params?.subCategory) query.set("subCategory", params.subCategory);
    if (params?.city) query.set("city", params.city);
    if (params?.search) query.set("search", params.search);

    const url = `${API_URL}/api/artist/public?${query.toString()}`;
    const res = await fetch(url, { next: { revalidate: 15 } }).catch(() => null);
    if (!res || !res.ok) return [];

    const data = await res.json().catch(() => null);
    if (!data || !data.success || !Array.isArray(data.artists)) return [];

    return data.artists.map(transformDynamicToModel);
  } catch {
    return [];
  }
}

export async function fetchPublicModelById(id: string): Promise<Model | null> {
  try {
    const cleanId = id.startsWith("dca-") ? id : `dca-${id}`;
    const url = `${API_URL}/api/artist/public/${cleanId}`;
    const res = await fetch(url, { next: { revalidate: 15 } }).catch(() => null);
    if (!res || !res.ok) return null;

    const data = await res.json().catch(() => null);
    if (!data || !data.success || !data.artist) return null;

    return transformDynamicToModel(data.artist);
  } catch {
    return null;
  }
}

export function mergeModelsWithLive(
  staticList: Model[],
  liveList: Model[]
): Model[] {
  if (!liveList || liveList.length === 0) return staticList;
  const liveIds = new Set(liveList.map((m) => m.id));
  const filtered = staticList.filter((m) => !liveIds.has(m.id));
  return [...liveList, ...filtered];
}

// ==========================================
// CHILD ARTIST ADAPTER & API
// ==========================================

export function transformDynamicToChildArtist(item: DynamicArtistRecord): ChildArtist {
  let categorySlug: ChildArtistCategorySlug = "fresh-faces";
  const label = (item.categoryLabel || "").toLowerCase();

  if (label.includes("girl") || (item.category || "").includes("girl")) {
    categorySlug = "girls";
  } else if (label.includes("boy") || (item.category || "").includes("boy")) {
    categorySlug = "boys";
  } else {
    categorySlug = "fresh-faces";
  }

  return {
    id: item.id,
    name: item.name,
    category: categorySlug,
    categoryLabel: item.categoryLabel || "Verified Child Artist",
    role: item.role || "Child Artist",
    age: item.age || 10,
    height: item.height || "Not specified",
    experience: item.experience || "Fresh Face",
    location: item.location || "Delhi, India",
    languages: item.languages?.length ? item.languages : ["Hindi", "English"],
    guardianName: "Parent / Legal Guardian",
    guardianContact: "Verified on File (Delhi Casting Agency)",
    guardianConsent: true,
    eyeColor: "Dark Brown",
    hair: "Black",
    badge: "Verified Child Artist",
    mainImage: item.mainImage || "/images/actors/editorial_grid_1.png",
    about: item.about || `${item.name} is a verified child artist registered with Delhi Casting Agency.`,
    skills: item.skills || [],
    experienceCredits: item.experienceCredits || [],
    photos: item.digitals?.length ? item.digitals : [item.mainImage || "/images/actors/editorial_grid_1.png"],
    videos: item.videos || [],
    instagram: item.instagram || [],
    print: item.print || [],
  };
}

export async function fetchPublicApprovedChildArtists(
  params?: PublicTalentParams
): Promise<ChildArtist[]> {
  try {
    const query = new URLSearchParams();
    query.set("category", "child-artists");
    if (params?.gender) query.set("gender", params.gender);
    if (params?.subCategory) query.set("subCategory", params.subCategory);
    if (params?.city) query.set("city", params.city);
    if (params?.search) query.set("search", params.search);

    const url = `${API_URL}/api/artist/public?${query.toString()}`;
    const res = await fetch(url, { next: { revalidate: 15 } }).catch(() => null);
    if (!res || !res.ok) return [];

    const data = await res.json().catch(() => null);
    if (!data || !data.success || !Array.isArray(data.artists)) return [];

    return data.artists.map(transformDynamicToChildArtist);
  } catch {
    return [];
  }
}

export async function fetchPublicChildArtistById(id: string): Promise<ChildArtist | null> {
  try {
    const cleanId = id.startsWith("dca-") ? id : `dca-${id}`;
    const url = `${API_URL}/api/artist/public/${cleanId}`;
    const res = await fetch(url, { next: { revalidate: 15 } }).catch(() => null);
    if (!res || !res.ok) return null;

    const data = await res.json().catch(() => null);
    if (!data || !data.success || !data.artist) return null;

    return transformDynamicToChildArtist(data.artist);
  } catch {
    return null;
  }
}

export function mergeChildArtistsWithLive(
  staticList: ChildArtist[],
  liveList: ChildArtist[]
): ChildArtist[] {
  if (!liveList || liveList.length === 0) return staticList;
  const liveIds = new Set(liveList.map((c) => c.id));
  const filtered = staticList.filter((c) => !liveIds.has(c.id));
  return [...liveList, ...filtered];
}
