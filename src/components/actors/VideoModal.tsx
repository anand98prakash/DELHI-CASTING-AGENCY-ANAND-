"use client";

import React, { useEffect, useState, useRef } from "react";
import { X, Film, AlertCircle, RefreshCw } from "lucide-react";
import type { VideoItem } from "@/data/actors";

interface VideoModalProps {
  isOpen: boolean;
  video: VideoItem | null;
  actorName: string;
  onClose: () => void;
}

function VideoPlayerBody({
  video,
  actorName,
}: {
  video: VideoItem;
  actorName: string;
}) {
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoUrl = video.url || video.videoUrl;

  useEffect(() => {
    const currentElement = videoRef.current;
    return () => {
      if (currentElement) {
        currentElement.pause();
      }
    };
  }, []);

  return (
    <>
      {/* Video Player Container */}
      <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
        {videoUrl && !hasError ? (
          <video
            ref={videoRef}
            controls
            playsInline
            preload="metadata"
            poster={video.thumbnail}
            className="w-full h-full object-contain bg-black"
            onError={() => setHasError(true)}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="flex flex-col items-center justify-center p-8 text-center max-w-md mx-auto">
            <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#d4af37] mb-3">
              <AlertCircle className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold text-white mb-1">
              Video Unavailable
            </h4>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-4">
              The showreel for {actorName} is currently undergoing verification or being updated by our casting team.
            </p>
            {videoUrl && hasError && (
              <button
                type="button"
                onClick={() => setHasError(false)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Retry</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Footer Details */}
      {video.description && (
        <div className="p-4 sm:p-5 bg-[#181818] border-t border-white/10 text-xs sm:text-sm text-white/70 flex-shrink-0">
          <p className="leading-relaxed">{video.description}</p>
        </div>
      )}
    </>
  );
}

export function VideoModal({
  isOpen,
  video,
  actorName,
  onClose,
}: VideoModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !video) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Video Reel Player"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-3 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#141414] border border-[#d4af37]/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-[#181818] z-10 flex-shrink-0">
          <div className="flex items-center gap-3 pr-4 min-w-0">
            <div className="p-2 rounded-xl bg-[#d4af37]/10 text-[#d4af37] flex-shrink-0">
              <Film className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg font-bold text-white leading-tight truncate">
                {video.title}
              </h3>
              <p className="text-xs text-white/50 truncate">
                {actorName} &bull; {video.category} {video.duration ? `(${video.duration})` : ""}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            type="button"
            aria-label="Close Video Modal"
            className="p-2.5 rounded-full bg-white/10 hover:bg-[#d4af37] text-white hover:text-black transition-colors flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic Keyed Player Body */}
        <VideoPlayerBody
          key={video.id}
          video={video}
          actorName={actorName}
        />
      </div>
    </div>
  );
}
