"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Sparkles,
  Camera,
  Film,
  Play,
  Plus,
  Trash2,
  X,
  ExternalLink,
  Maximize2,
  CheckCircle2,
  Clock,
  Layers,
} from "lucide-react";
import { ImageLightbox } from "@/components/actors/ImageLightbox";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export interface UserVideoItem {
  id: string;
  title: string;
  category: string;
  duration?: string;
  url: string;
  embedUrl: string;
  thumbnail: string;
  type: "youtube" | "vimeo" | "direct";
  addedAt: string;
}

interface ArtistPortfolioManagerProps {
  userId?: string;
  artistName?: string;
  profilePhoto?: string | null;
  headshots?: string | null;
}

// Helper to parse YouTube / Vimeo URLs
function parseVideoUrl(rawUrl: string): {
  type: "youtube" | "vimeo" | "direct";
  embedUrl: string;
  thumbnail: string;
} {
  const url = rawUrl.trim();

  // YouTube match
  const ytMatch = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/
  );
  if (ytMatch) {
    const videoId = ytMatch[1];
    return {
      type: "youtube",
      embedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1`,
      thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    };
  }

  // Vimeo match
  const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeoMatch) {
    const videoId = vimeoMatch[1];
    return {
      type: "vimeo",
      embedUrl: `https://player.vimeo.com/video/${videoId}?autoplay=1`,
      thumbnail:
        "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=600&auto=format&fit=crop",
    };
  }

  // Fallback direct video
  return {
    type: "direct",
    embedUrl: url,
    thumbnail:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=600&auto=format&fit=crop",
  };
}

export function ArtistPortfolioManager({
  userId = "current_user",
  artistName = "Artist",
  profilePhoto,
  headshots,
}: ArtistPortfolioManagerProps) {
  const [activeTab, setActiveTab] = useState<"photos" | "videos" | "instagram">("photos");

  // State
  const [extraPhotos, setExtraPhotos] = useState<string[]>([]);
  const [videos, setVideos] = useState<UserVideoItem[]>([]);
  const [instagramHandle, setInstagramHandle] = useState<string>("");

  // Modals
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [playingVideo, setPlayingVideo] = useState<UserVideoItem | null>(null);
  const [isInstagramModalOpen, setIsInstagramModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Form states for adding video
  const [videoTitle, setVideoTitle] = useState("");
  const [videoCategory, setVideoCategory] = useState("Audition Reel");
  const [videoUrl, setVideoUrl] = useState("");
  const [videoDuration, setVideoDuration] = useState("");
  const [videoError, setVideoError] = useState("");

  // Form states for Instagram
  const [instaInput, setInstaInput] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Base profile photos (from registration)
  const basePhotos: string[] = [];
  if (profilePhoto && profilePhoto.trim()) {
    basePhotos.push(profilePhoto.trim());
  }
  if (headshots && headshots.trim()) {
    const split = headshots
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0 && !basePhotos.includes(s));
    basePhotos.push(...split);
  }

  // Combined photos list
  const allPhotos = [...basePhotos, ...extraPhotos];

  // Storage key
  const storageKey = `dca_portfolio_${userId}`;

  // Load from LocalStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed.extraPhotos)) setExtraPhotos(parsed.extraPhotos);
        if (Array.isArray(parsed.videos)) setVideos(parsed.videos);
        if (typeof parsed.instagramHandle === "string") setInstagramHandle(parsed.instagramHandle);
      }
    } catch (e) {
      console.error("Failed to load portfolio from localStorage", e);
    }
  }, [storageKey]);

  // Save to LocalStorage whenever modified
  const persistState = (newPhotos: string[], newVideos: UserVideoItem[], newInsta: string) => {
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify({
          extraPhotos: newPhotos,
          videos: newVideos,
          instagramHandle: newInsta,
          updatedAt: new Date().toISOString(),
        })
      );
    } catch (e) {
      console.error("Failed to save portfolio to localStorage", e);
    }
  };

  // Add extra photo
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("Image size should be less than 5MB.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        const updated = [...extraPhotos, reader.result];
        setExtraPhotos(updated);
        persistState(updated, videos, instagramHandle);
      }
    };
    reader.readAsDataURL(file);

    // Reset input
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Delete extra photo
  const handleDeleteExtraPhoto = (indexToDelete: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = extraPhotos.filter((_, idx) => idx !== indexToDelete);
    setExtraPhotos(updated);
    persistState(updated, videos, instagramHandle);
  };

  // Submit new video
  const handleAddVideo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoUrl.trim()) {
      setVideoError("Please paste a valid YouTube or Vimeo URL");
      return;
    }

    const parsed = parseVideoUrl(videoUrl);
    const newVideo: UserVideoItem = {
      id: "vid_" + Date.now(),
      title: videoTitle.trim() || "Audition Tape",
      category: videoCategory,
      duration: videoDuration.trim() || "1:30",
      url: videoUrl.trim(),
      embedUrl: parsed.embedUrl,
      thumbnail: parsed.thumbnail,
      type: parsed.type,
      addedAt: new Date().toISOString(),
    };

    const updated = [newVideo, ...videos];
    setVideos(updated);
    persistState(extraPhotos, updated, instagramHandle);

    // Reset form
    setVideoTitle("");
    setVideoUrl("");
    setVideoDuration("");
    setVideoError("");
    setIsVideoModalOpen(false);
  };

  // Delete video
  const handleDeleteVideo = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = videos.filter((v) => v.id !== id);
    setVideos(updated);
    persistState(extraPhotos, updated, instagramHandle);
  };

  // Save Instagram
  const handleSaveInstagram = (e: React.FormEvent) => {
    e.preventDefault();
    let cleaned = instaInput.trim();
    if (cleaned.startsWith("https://www.instagram.com/")) {
      cleaned = cleaned.replace("https://www.instagram.com/", "").replace("/", "");
    }
    if (cleaned.startsWith("instagram.com/")) {
      cleaned = cleaned.replace("instagram.com/", "").replace("/", "");
    }
    if (cleaned.startsWith("@")) {
      cleaned = cleaned.substring(1);
    }
    setInstagramHandle(cleaned);
    persistState(extraPhotos, videos, cleaned);
    setIsInstagramModalOpen(false);
  };

  // Lightbox items mapping
  const lightboxItems = allPhotos.map((url, i) => ({
    image: url,
    title: `${artistName} — Portfolio Photo #${i + 1}`,
  }));

  return (
    <section
      aria-labelledby="portfolio-heading"
      className="w-full min-w-0 max-w-full rounded-2xl sm:rounded-3xl border border-gray-200 bg-white p-3.5 sm:p-6 lg:p-8 shadow-xs sm:shadow-md overflow-hidden"
    >
      {/* Header & Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3.5 sm:gap-4 border-b border-gray-200 pb-4 sm:pb-5 w-full min-w-0">
        <div className="min-w-0 max-w-full">
          <div className="flex items-center gap-2 mb-1">
            <span className="flex items-center gap-1.5 rounded-full bg-[#D4AF37]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#D4AF37]">
              <Sparkles size={12} />
              <span>DCA Artist Showcase</span>
            </span>
          </div>
          <h3
            id="portfolio-heading"
            className="font-serif text-lg sm:text-2xl font-bold text-[#111111] tracking-tight"
          >
            Interactive Portfolio &amp; Showreels
          </h3>
          <p className="text-xs text-[#666666] mt-0.5 leading-relaxed">
            Add showreel videos, audition monologues, and extra photoshoot angles for casting directors.
          </p>
        </div>

        {/* Action Buttons - Identical Equal Size on Mobile & Desktop */}
        <div className="grid grid-cols-2 gap-2.5 w-full sm:w-auto sm:flex sm:items-center shrink-0">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handlePhotoUpload}
            accept="image/jpeg,image/png,image/webp"
            className="hidden"
            aria-label="Upload portfolio photo file"
          />

          <button
            type="button"
            aria-label="Upload new portfolio photo"
            onClick={() => {
              if (fileInputRef.current) fileInputRef.current.click();
            }}
            className="h-10 w-full sm:w-44 px-2.5 sm:px-4 rounded-xl border border-[#D4AF37] bg-[#FAF7F0] text-xs font-bold text-[#111111] hover:bg-[#D4AF37] hover:text-white transition-all shadow-2xs cursor-pointer active:scale-95 inline-flex items-center justify-center gap-1.5 sm:gap-2 text-center"
          >
            <Camera size={14} className="shrink-0 text-[#D4AF37] group-hover:text-white" />
            <span className="truncate">+ Add Photo</span>
          </button>

          <button
            type="button"
            aria-label="Add new video showreel"
            onClick={() => setIsVideoModalOpen(true)}
            className="h-10 w-full sm:w-44 px-2.5 sm:px-4 rounded-xl bg-[#D4AF37] text-xs font-bold text-white hover:bg-[#C59B27] transition-all shadow-2xs cursor-pointer active:scale-95 inline-flex items-center justify-center gap-1.5 sm:gap-2 text-center"
          >
            <Film size={14} className="shrink-0" />
            <span className="truncate">+ Add Video</span>
          </button>
        </div>
      </div>

      {/* Tabs Selector - Responsive, Non-Clipping with ARIA */}
      <div
        role="tablist"
        aria-label="Portfolio sections"
        className="mt-4 sm:mt-5 flex items-center gap-1.5 sm:gap-2 border-b border-gray-200 pb-3 w-full min-w-0 overflow-x-auto scrollbar-none"
      >
        <button
          type="button"
          role="tab"
          id="portfolio-tab-photos"
          aria-selected={activeTab === "photos"}
          aria-controls="portfolio-panel-photos"
          onClick={() => setActiveTab("photos")}
          className={`flex items-center gap-1.5 sm:gap-2 rounded-xl px-3 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider transition cursor-pointer shrink-0 whitespace-nowrap ${
            activeTab === "photos"
              ? "bg-[#D4AF37] text-white shadow-2xs"
              : "bg-[#F7F7F5] text-[#555555] hover:bg-gray-200/70"
          }`}
        >
          <Camera size={13} className="shrink-0" />
          <span>Photos</span>
          <span
            className={`rounded-full px-1.5 sm:px-2 py-0.2 text-[10px] font-extrabold ${
              activeTab === "photos" ? "bg-white/20 text-white" : "bg-gray-300 text-gray-700"
            }`}
          >
            {allPhotos.length}
          </span>
        </button>

        <button
          type="button"
          role="tab"
          id="portfolio-tab-videos"
          aria-selected={activeTab === "videos"}
          aria-controls="portfolio-panel-videos"
          onClick={() => setActiveTab("videos")}
          className={`flex items-center gap-1.5 sm:gap-2 rounded-xl px-3 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider transition cursor-pointer shrink-0 whitespace-nowrap ${
            activeTab === "videos"
              ? "bg-[#D4AF37] text-white shadow-2xs"
              : "bg-[#F7F7F5] text-[#555555] hover:bg-gray-200/70"
          }`}
        >
          <Film size={13} className="shrink-0" />
          <span>
            <span className="hidden sm:inline">Videos / </span>Showreel
          </span>
          <span
            className={`rounded-full px-1.5 sm:px-2 py-0.2 text-[10px] font-extrabold ${
              activeTab === "videos" ? "bg-white/20 text-white" : "bg-gray-300 text-gray-700"
            }`}
          >
            {videos.length}
          </span>
        </button>

        <button
          type="button"
          role="tab"
          id="portfolio-tab-instagram"
          aria-selected={activeTab === "instagram"}
          aria-controls="portfolio-panel-instagram"
          onClick={() => setActiveTab("instagram")}
          className={`flex items-center gap-1.5 sm:gap-2 rounded-xl px-3 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider transition cursor-pointer shrink-0 whitespace-nowrap ${
            activeTab === "instagram"
              ? "bg-[#D4AF37] text-white shadow-2xs"
              : "bg-[#F7F7F5] text-[#555555] hover:bg-gray-200/70"
          }`}
        >
          <InstagramIcon className="w-3.5 h-3.5 shrink-0" />
          <span>
            <span className="hidden sm:inline">Instagram &amp; </span>Social
          </span>
          {instagramHandle && (
            <span className="rounded-full bg-emerald-500/20 text-emerald-700 px-1.5 py-0.2 text-[10px] font-bold">
              Linked
            </span>
          )}
        </button>
      </div>

      {/* =========================================================================
          TAB 1: PHOTOS GALLERY
      ========================================================================= */}
      {/* =========================================================================
          TAB 1: PHOTOS GALLERY
      ========================================================================= */}
      {activeTab === "photos" && (
        <div
          role="tabpanel"
          id="portfolio-panel-photos"
          aria-labelledby="portfolio-tab-photos"
          className="mt-5 sm:mt-6 min-w-0 w-full"
        >
          {allPhotos.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-[#F7F7F5] p-6 sm:p-10 text-center min-w-0 w-full">
              <Camera size={30} className="mx-auto text-gray-400 mb-2" />
              <h4 className="text-sm font-bold text-[#111111]">No Portfolio Photos Added</h4>
              <p className="text-xs text-[#666666] max-w-sm mx-auto mt-1">
                Upload your primary casting headshots, fashion shoots, or ramp photos.
              </p>
              <button
                type="button"
                aria-label="Upload your first portfolio photo"
                onClick={() => {
                  if (fileInputRef.current) fileInputRef.current.click();
                }}
                className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#D4AF37] px-4 py-2 text-xs font-bold text-white shadow-2xs hover:bg-[#C59B27] transition cursor-pointer w-full sm:w-auto"
              >
                <Plus size={14} />
                <span>Upload First Photo</span>
              </button>
            </div>
          ) : (
            <div className="min-w-0 w-full">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3 text-xs text-[#666666]">
                <span>Showing {allPhotos.length} high-resolution casting images</span>
                <span className="text-[11px] text-[#D4AF37] font-semibold">Click any image to enlarge</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 min-w-0 w-full">
                {allPhotos.map((url, index) => {
                  const isBase = index < basePhotos.length;
                  const extraIndex = index - basePhotos.length;

                  return (
                    <div
                      key={index}
                      role="button"
                      tabIndex={0}
                      aria-label={`View photo ${index + 1} full screen`}
                      onClick={() => {
                        setLightboxIndex(index);
                        setLightboxOpen(true);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setLightboxIndex(index);
                          setLightboxOpen(true);
                        }
                      }}
                      className="group relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-2xs hover:border-[#D4AF37] hover:shadow-md transition cursor-pointer"
                    >
                      <Image
                        src={url}
                        alt={`${artistName || "Artist"} - Professional Portfolio & Audition Headshot ${index + 1} | Delhi Casting Agency`}
                        fill
                        unoptimized
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />

                      {/* Tag: Headshot / Extra */}
                      <span className="absolute top-2 left-2 z-10 rounded-md bg-black/60 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur-xs">
                        {isBase ? `Pose #${index + 1}` : "Extra"}
                      </span>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <div className="p-2 rounded-full bg-white/90 text-[#D4AF37] shadow-xs">
                          <Maximize2 size={16} />
                        </div>

                        {!isBase && (
                          <button
                            type="button"
                            aria-label={`Delete portfolio photo ${index + 1}`}
                            title="Delete this photo"
                            onClick={(e) => handleDeleteExtraPhoto(extraIndex, e)}
                            className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700 shadow-xs transition"
                          >
                            <Trash2 size={14} />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}

                {/* Quick Add Placeholder Card */}
                <div
                  role="button"
                  tabIndex={0}
                  aria-label="Add new photo to portfolio"
                  onClick={() => {
                    if (fileInputRef.current) fileInputRef.current.click();
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      if (fileInputRef.current) fileInputRef.current.click();
                    }
                  }}
                  className="flex flex-col items-center justify-center aspect-[3/4] rounded-2xl border-2 border-dashed border-gray-300 bg-[#F7F7F5] hover:bg-gray-100/70 hover:border-[#D4AF37] transition cursor-pointer p-4 text-center group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-gray-200 text-[#D4AF37] group-hover:scale-110 transition shadow-2xs mb-2">
                    <Plus size={20} />
                  </div>
                  <span className="text-xs font-bold text-[#111111]">Add Photo</span>
                  <span className="text-[10px] text-gray-400 mt-0.5">JPG, PNG, WebP</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* =========================================================================
          TAB 2: VIDEOS GALLERY / SHOWREEL
      ========================================================================= */}
      {activeTab === "videos" && (
        <div
          role="tabpanel"
          id="portfolio-panel-videos"
          aria-labelledby="portfolio-tab-videos"
          className="mt-5 sm:mt-6 min-w-0 w-full"
        >
          {videos.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-[#F7F7F5] p-6 sm:p-10 text-center min-w-0 w-full">
              <div className="mx-auto flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37] mb-3">
                <Film size={24} />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-[#111111]">No Audition Videos or Showreels Yet</h4>
              <p className="text-xs text-[#666666] max-w-md mx-auto mt-1 leading-relaxed">
                Add your acting monologues, dance audition clips, or commercial showreels from YouTube or Vimeo. Casting directors prioritize profiles with verified video clips.
              </p>
              <button
                type="button"
                aria-label="Add your first audition video link"
                onClick={() => setIsVideoModalOpen(true)}
                className="mt-4 sm:mt-5 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#D4AF37] px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#C59B27] transition cursor-pointer active:scale-95 w-full sm:w-auto"
              >
                <Film size={14} />
                <span>+ Add Your First Video Link</span>
              </button>
            </div>
          ) : (
            <div className="min-w-0 w-full">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4 text-xs text-[#666666]">
                <span>{videos.length} Audition &amp; Performance Clip{videos.length > 1 ? "s" : ""}</span>
                <span className="text-[11px] text-[#D4AF37] font-semibold">Click to play video</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5 min-w-0 w-full">
                {videos.map((vid) => (
                  <div
                    key={vid.id}
                    role="button"
                    tabIndex={0}
                    aria-label={`Play audition video: ${vid.title}`}
                    onClick={() => setPlayingVideo(vid)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setPlayingVideo(vid);
                      }
                    }}
                    className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xs hover:border-[#D4AF37] hover:shadow-md transition cursor-pointer"
                  >
                    {/* Thumbnail with Play Icon */}
                    <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
                      <Image
                        src={vid.thumbnail}
                        alt={`${vid.title} - Audition Video Performance by ${artistName || "Artist"} | Delhi Casting Agency`}
                        fill
                        unoptimized
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#D4AF37] text-white shadow-lg group-hover:scale-110 transition-transform">
                          <Play size={18} className="ml-0.5 fill-white" />
                        </div>
                      </div>

                      {/* Category Badge */}
                      <span className="absolute top-2.5 left-2.5 rounded-md bg-black/80 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] backdrop-blur-xs border border-[#D4AF37]/30">
                        {vid.category}
                      </span>

                      {/* Duration */}
                      {vid.duration && (
                        <span className="absolute bottom-2.5 right-2.5 flex items-center gap-1 rounded bg-black/80 px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold text-white backdrop-blur-xs">
                          <Clock size={11} className="text-[#D4AF37]" />
                          <span>{vid.duration}</span>
                        </span>
                      )}
                    </div>

                    {/* Content & Action */}
                    <div className="p-3.5 sm:p-4 flex items-center justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-bold text-[#111111] truncate group-hover:text-[#D4AF37] transition">
                          {vid.title}
                        </h4>
                        <p className="text-[11px] text-[#777777] truncate mt-0.5">
                          {vid.url}
                        </p>
                      </div>

                      <button
                        type="button"
                        aria-label={`Delete video ${vid.title}`}
                        title="Delete video"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteVideo(vid.id, e);
                        }}
                        className="rounded-xl border border-gray-200 p-2 text-gray-400 hover:bg-red-50 hover:text-red-600 transition shrink-0"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* =========================================================================
          TAB 3: INSTAGRAM & SOCIAL
      ========================================================================= */}
      {/* =========================================================================
          TAB 3: INSTAGRAM & SOCIAL
      ========================================================================= */}
      {activeTab === "instagram" && (
        <div
          role="tabpanel"
          id="portfolio-panel-instagram"
          aria-labelledby="portfolio-tab-instagram"
          className="mt-5 sm:mt-6 min-w-0 w-full"
        >
          {instagramHandle ? (
            <div className="rounded-2xl border border-gray-200 bg-[#FAF7F0] p-4 sm:p-7 min-w-0 w-full">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white shadow-xs">
                    <InstagramIcon className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      Connected Instagram Account
                    </span>
                    <h4 className="text-base font-bold text-[#111111] truncate">
                      @{instagramHandle}
                    </h4>
                    <a
                      href={`https://instagram.com/${instagramHandle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit Instagram profile of @${instagramHandle}`}
                      className="text-xs font-bold text-[#D4AF37] hover:underline inline-flex items-center gap-1 mt-0.5"
                    >
                      <span>View Public Profile</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    aria-label="Edit Instagram handle"
                    onClick={() => {
                      setInstaInput(instagramHandle);
                      setIsInstagramModalOpen(true);
                    }}
                    className="flex-1 sm:flex-initial rounded-xl border border-gray-200 bg-white px-3.5 py-2 text-xs font-bold text-[#111111] hover:border-[#D4AF37] transition cursor-pointer text-center"
                  >
                    Edit Handle
                  </button>
                  <button
                    type="button"
                    aria-label="Remove connected Instagram handle"
                    onClick={() => {
                      setInstagramHandle("");
                      persistState(extraPhotos, videos, "");
                    }}
                    className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-bold text-red-600 hover:bg-red-50 transition cursor-pointer text-center"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <p className="text-xs text-[#666666] mt-4 pt-4 border-t border-gray-200">
                Your Instagram profile will be shared with casting directors seeking lifestyle modeling and commercial brand shoots.
              </p>
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-[#F7F7F5] p-6 sm:p-10 text-center min-w-0 w-full">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white mb-3">
                <InstagramIcon className="w-5.5 h-5.5" />
              </div>
              <h4 className="text-sm font-bold text-[#111111]">Link Your Instagram Handle</h4>
              <p className="text-xs text-[#666666] max-w-sm mx-auto mt-1">
                Help casting directors explore your daily style, social media engagement, and photoshoot portfolio.
              </p>
              <button
                type="button"
                aria-label="Link your Instagram handle"
                onClick={() => {
                  setInstaInput("");
                  setIsInstagramModalOpen(true);
                }}
                className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#D4AF37] px-4 py-2 text-xs font-bold text-white shadow-2xs hover:bg-[#C59B27] transition cursor-pointer w-full sm:w-auto"
              >
                <Plus size={14} />
                <span>Link Instagram</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* =========================================================================
          MODAL: ADD VIDEO / SHOWREEL
      ========================================================================= */}
      {isVideoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-add-video-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-150"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md my-auto rounded-2xl sm:rounded-3xl border border-[#D4AF37]/40 bg-white p-5 sm:p-6 shadow-2xl space-y-4 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-gray-200 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D4AF37]/15 text-[#D4AF37]">
                  <Film size={18} />
                </div>
                <div>
                  <h4 id="modal-add-video-title" className="font-serif text-base font-bold text-[#111111]">
                    Add Video / Showreel
                  </h4>
                  <p className="text-[11px] text-[#666666]">
                    Paste your YouTube or Vimeo link
                  </p>
                </div>
              </div>
              <button
                type="button"
                aria-label="Close modal"
                onClick={() => setIsVideoModalOpen(false)}
                className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition"
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleAddVideo} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-[#111111] mb-1">
                  Video Title *
                </label>
                <input
                  type="text"
                  required
                  value={videoTitle}
                  onChange={(e) => setVideoTitle(e.target.value)}
                  placeholder="e.g. Hindi Emotional Monologue / Audition Clip"
                  className="w-full rounded-xl border border-gray-300 bg-white px-3.5 py-2.5 text-sm sm:text-xs text-[#111111] focus:border-[#D4AF37] focus:outline-none shadow-2xs"
                />
              </div>

              <div>
                <label className="block font-bold text-[#111111] mb-1">
                  Category
                </label>
                <select
                  value={videoCategory}
                  onChange={(e) => setVideoCategory(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm sm:text-xs text-[#111111] focus:border-[#D4AF37] focus:outline-none shadow-2xs"
                >
                  <option value="Audition Reel">Audition Reel</option>
                  <option value="Dramatic Monologue">Dramatic Monologue</option>
                  <option value="Showreel / Acting Work">Showreel / Acting Work</option>
                  <option value="Dance Clip">Dance Clip</option>
                  <option value="Commercial Ad Clip">Commercial Ad Clip</option>
                  <option value="Ramp Walk / Modeling">Ramp Walk / Modeling</option>
                  <option value="Voice Demo">Voice Demo</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-[#111111] mb-1">
                  YouTube / Vimeo URL *
                </label>
                <input
                  type="url"
                  required
                  value={videoUrl}
                  onChange={(e) => {
                    setVideoUrl(e.target.value);
                    if (videoError) setVideoError("");
                  }}
                  placeholder="https://www.youtube.com/watch?v=... or youtu.be/..."
                  className="w-full rounded-xl border border-gray-300 bg-white px-3.5 py-2.5 text-sm sm:text-xs text-[#111111] focus:border-[#D4AF37] focus:outline-none shadow-2xs"
                />
                {videoError && (
                  <p className="text-red-600 text-[11px] font-semibold mt-1">
                    {videoError}
                  </p>
                )}
                <p className="text-[10px] text-[#777777] mt-1">
                  Tip: Supports YouTube standard links, YouTube Shorts, and Vimeo links.
                </p>
              </div>

              <div>
                <label className="block font-bold text-[#111111] mb-1">
                  Duration (Optional)
                </label>
                <input
                  type="text"
                  value={videoDuration}
                  onChange={(e) => setVideoDuration(e.target.value)}
                  placeholder="e.g. 1:45"
                  className="w-full rounded-xl border border-gray-300 bg-white px-3.5 py-2 text-sm sm:text-xs text-[#111111] focus:border-[#D4AF37] focus:outline-none shadow-2xs"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(false)}
                  className="rounded-xl px-4 py-2 text-xs font-bold text-gray-600 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-[#D4AF37] px-4 py-2 text-xs font-bold text-white hover:bg-[#C59B27] transition shadow-xs"
                >
                  Add to Portfolio
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL: PLAY VIDEO
      ========================================================================= */}
      {playingVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={playingVideo.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-3 sm:p-4 animate-in fade-in duration-150"
          onClick={() => setPlayingVideo(null)}
        >
          <div
            className="relative w-full max-w-2xl my-auto overflow-hidden rounded-2xl sm:rounded-3xl bg-black border border-[#D4AF37]/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3.5 bg-black/90 text-white border-b border-white/10">
              <div className="min-w-0 flex items-center gap-2">
                <span className="rounded bg-[#D4AF37] px-2 py-0.5 text-[9px] font-bold uppercase text-white">
                  {playingVideo.category}
                </span>
                <span className="font-bold text-xs truncate">{playingVideo.title}</span>
              </div>
              <button
                type="button"
                aria-label="Close video player"
                onClick={() => setPlayingVideo(null)}
                className="rounded-lg p-1 text-gray-400 hover:bg-white/10 hover:text-white transition"
              >
                <X size={16} />
              </button>
            </div>

            {/* Video Iframe / Player */}
            <div className="relative aspect-video w-full bg-black">
              {playingVideo.type === "youtube" || playingVideo.type === "vimeo" ? (
                <iframe
                  src={playingVideo.embedUrl}
                  title={`${playingVideo.title} - Video Showreel by ${artistName || "Artist"}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              ) : (
                <video
                  src={playingVideo.url}
                  controls
                  autoPlay
                  className="h-full w-full object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL: LINK INSTAGRAM
      ========================================================================= */}
      {isInstagramModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-instagram-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-150"
          onClick={() => setIsInstagramModalOpen(false)}
        >
          <div
            className="relative w-full max-w-sm my-auto rounded-2xl sm:rounded-3xl border border-[#D4AF37]/40 bg-white p-5 sm:p-6 shadow-2xl space-y-4 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-gray-200 pb-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white shadow-xs">
                  <InstagramIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 id="modal-instagram-title" className="font-serif text-base font-bold text-[#111111]">
                    Instagram Handle
                  </h4>
                  <p className="text-[11px] text-[#666666]">
                    Connect your public handle
                  </p>
                </div>
              </div>
              <button
                type="button"
                aria-label="Close modal"
                onClick={() => setIsInstagramModalOpen(false)}
                className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition"
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleSaveInstagram} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-[#111111] mb-1">
                  Username / Profile Link *
                </label>
                <input
                  type="text"
                  required
                  value={instaInput}
                  onChange={(e) => setInstaInput(e.target.value)}
                  placeholder="e.g. yourname or @yourname"
                  className="w-full rounded-xl border border-gray-300 bg-white px-3.5 py-2.5 text-sm sm:text-xs text-[#111111] focus:border-[#D4AF37] focus:outline-none shadow-2xs"
                />
                <p className="text-[10px] text-[#777777] mt-1">
                  Enter your Instagram username. Casting directors will be able to see your public portfolio.
                </p>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setIsInstagramModalOpen(false)}
                  className="rounded-xl px-4 py-2 text-xs font-bold text-gray-600 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-[#D4AF37] px-4 py-2 text-xs font-bold text-white hover:bg-[#C59B27] transition shadow-xs"
                >
                  Save Handle
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Lightbox for Photo Full-Screen Inspection */}
      <ImageLightbox
        isOpen={lightboxOpen}
        images={lightboxItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </section>
  );
}
