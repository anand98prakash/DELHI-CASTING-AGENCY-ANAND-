"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bookmark,
  Briefcase,
  CheckCircle2,
  Edit,
  Globe,
  LogOut,
  MapPin,
  Ruler,
  ShieldCheck,
  Sparkles,
  User,
} from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { isUserAuthenticated, clearDCAUserSession } from "@/lib/auth";

export default function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"profile" | "opportunities" | "saved">("profile");

  const [profileData, setProfileData] = useState({
    fullName: "Aarav Sharma",
    displayName: "Aarav Sharma",
    age: "26",
    gender: "Male",
    city: "New Delhi",
    state: "Delhi NCR",
    phone: "+91 9876543210",
    email: "aarav.sharma@example.com",
    languages: "Hindi, English, Punjabi",
    primaryCategory: "Actor",
    experience: "3-5 Years",
    skills: "Method Acting, Script Reading, Dialogue Delivery, Action",
    specialSkills: "Driving, Horse Riding, Swimming",
    height: "5'11\"",
    weight: "72 kg",
    chest: "40 in",
    waist: "32 in",
    shoes: "10 UK",
    completionPercentage: 92,
  });

  const [photos, setPhotos] = useState<string[]>([
    "/images/actors/model female 1.png",
    "/images/actors/editorial_grid_1.png",
    "/images/actors/editorial_grid_2.png",
    "/images/actors/editorial_grid_3.png",
    "/images/actors/editorial_grid_4.png",
    "/images/actors/editorial_grid_6.png",
  ]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!isUserAuthenticated()) {
        router.push("/login");
        return;
      }
      const stored = localStorage.getItem("dca_artist_profile");
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (parsed.formData) {
            setProfileData((prev) => ({ ...prev, ...parsed.formData }));
          }
          if (parsed.photos) {
            const validUrls = parsed.photos
              .map((slot: { previewUrl: string | null }) => slot.previewUrl)
              .filter(Boolean);
            if (validUrls.length > 0) setPhotos(validUrls);
          }
        } catch (e) {
          console.error("Failed to load profile from storage", e);
        }
      }
    }
  }, []);

  const handleLogout = () => {
    clearDCAUserSession();
    router.push("/login");
  };

  return (
    <main className="min-h-screen bg-white text-[#111111]">
      <PageHero
        eyebrow="Artist Portal"
        title={`Welcome, ${profileData.fullName}`}
        description="Manage your artist profile, portfolio headshots, and review verified casting calls."
      />

      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Artist Dashboard" }]}
        />
      </div>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-12">
          
          {/* LEFT SIDEBAR — USER ACTIONS & STATS */}
          <div className="lg:col-span-4 space-y-6">
            <Reveal>
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-md">
                {/* Main Avatar */}
                <div className="relative mx-auto aspect-square w-32 overflow-hidden rounded-2xl border-2 border-[#D4AF37] shadow-md">
                  <Image
                    src={photos[0] || "/images/actors/model female 1.png"}
                    alt={profileData.fullName}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="mt-4 text-center">
                  <h2 className="font-serif text-xl font-bold text-[#111111]">
                    {profileData.fullName}
                  </h2>
                  <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mt-0.5">
                    {profileData.primaryCategory} • {profileData.experience}
                  </p>
                  <p className="mt-1 flex items-center justify-center gap-1 text-xs text-[#555555]">
                    <MapPin size={12} className="text-[#D4AF37]" />
                    {profileData.city}, {profileData.state}
                  </p>
                </div>

                {/* Profile Completion Bar */}
                <div className="mt-6 border-t border-gray-200 pt-5">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-[#555555]">Profile Completion</span>
                    <span className="text-[#D4AF37] font-bold">{profileData.completionPercentage}%</span>
                  </div>
                  <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-gray-100 border border-gray-200">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C59B27]"
                      style={{ width: `${profileData.completionPercentage}%` }}
                    />
                  </div>
                </div>

                {/* Navigation Tabs */}
                <div className="mt-6 space-y-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab("profile")}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider transition ${
                      activeTab === "profile"
                        ? "bg-[#D4AF37] text-white shadow-xs"
                        : "bg-[#F7F7F5] text-[#111111] hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>My Casting Profile</span>
                    </div>
                    <ArrowRight size={14} />
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("opportunities")}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider transition ${
                      activeTab === "opportunities"
                        ? "bg-[#D4AF37] text-white shadow-xs"
                        : "bg-[#F7F7F5] text-[#111111] hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} />
                      <span>Matched Opportunities</span>
                    </div>
                    <span className="rounded-full bg-[#D4AF37]/20 px-2 py-0.5 text-[10px] font-bold text-[#D4AF37]">
                      12 Open
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("saved")}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider transition ${
                      activeTab === "saved"
                        ? "bg-[#D4AF37] text-white shadow-xs"
                        : "bg-[#F7F7F5] text-[#111111] hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Bookmark size={16} />
                      <span>Saved Audition Calls</span>
                    </div>
                    <span className="rounded-full bg-gray-200 px-2 py-0.5 text-[10px] font-bold text-[#555555]">
                      4 Saved
                    </span>
                  </button>
                </div>

                {/* Actions */}
                <div className="mt-6 border-t border-gray-200 pt-5 space-y-3">
                  <Link
                    href="/profile/setup"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 py-3 text-xs font-bold uppercase tracking-wider text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-white"
                  >
                    <Edit size={14} />
                    <span>Edit Profile &amp; Photos</span>
                  </Link>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 py-3 text-xs font-bold uppercase tracking-wider text-red-600 transition hover:bg-red-500 hover:text-white"
                  >
                    <LogOut size={14} />
                    <span>Logout Account</span>
                  </button>
                </div>

              </div>
            </Reveal>
          </div>

          {/* RIGHT MAIN DISPLAY AREA — PROFILE PREVIEW / CASTING CALLS */}
          <div className="lg:col-span-8">
            {activeTab === "profile" && (
              <Reveal>
                <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-md">
                  
                  {/* Title & Edit Button */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-5">
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                        <Sparkles size={14} />
                        Casting Portfolio Preview
                      </div>
                      <h2 className="mt-1 font-serif text-2xl font-bold text-[#111111]">
                        {profileData.fullName}&apos;s Official Card
                      </h2>
                    </div>

                    <Link
                      href="/profile/setup"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#C59B27] shadow-xs"
                    >
                      <Edit size={14} />
                      <span>Edit Info</span>
                    </Link>
                  </div>

                  {/* Portfolio Photo Grid */}
                  <div className="mt-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#555555] mb-3">
                      Casting Headshots &amp; Angles
                    </h3>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                      {photos.map((url, i) => (
                        <div
                          key={i}
                          className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-xs"
                        >
                          <Image src={url} alt={`Headshot ${i + 1}`} fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Specifications Grid */}
                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-4 flex items-center gap-2">
                      <Ruler size={16} />
                      <span>Physical Attributes</span>
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div className="rounded-xl border border-gray-200 bg-[#F7F7F5] p-3">
                        <p className="text-[10px] font-bold uppercase text-[#666666]">Height</p>
                        <p className="mt-1 font-semibold text-[#111111]">{profileData.height}</p>
                      </div>

                      <div className="rounded-xl border border-gray-200 bg-[#F7F7F5] p-3">
                        <p className="text-[10px] font-bold uppercase text-[#666666]">Weight</p>
                        <p className="mt-1 font-semibold text-[#111111]">{profileData.weight}</p>
                      </div>

                      <div className="rounded-xl border border-gray-200 bg-[#F7F7F5] p-3">
                        <p className="text-[10px] font-bold uppercase text-[#666666]">Chest / Bust</p>
                        <p className="mt-1 font-semibold text-[#111111]">{profileData.chest}</p>
                      </div>

                      <div className="rounded-xl border border-gray-200 bg-[#F7F7F5] p-3">
                        <p className="text-[10px] font-bold uppercase text-[#666666]">Waist</p>
                        <p className="mt-1 font-semibold text-[#111111]">{profileData.waist}</p>
                      </div>
                    </div>
                  </div>

                  {/* Talent Details & Skills */}
                  <div className="mt-8 border-t border-gray-200 pt-6 space-y-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                        Languages
                      </p>
                      <p className="mt-1 text-sm text-[#444444] font-medium">{profileData.languages}</p>
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                        Skills
                      </p>
                      <p className="mt-1 text-sm text-[#444444] font-medium">{profileData.skills}</p>
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                        Special Abilities
                      </p>
                      <p className="mt-1 text-sm text-[#444444] font-medium">{profileData.specialSkills}</p>
                    </div>
                  </div>

                  {/* Verification Status Banner */}
                  <div className="mt-8 flex items-center gap-3 rounded-2xl border border-gray-200 bg-[#F7F7F5] p-4 text-xs">
                    <ShieldCheck size={20} className="shrink-0 text-[#D4AF37]" />
                    <p className="text-[#444444]">
                      Your artist profile is registered with <strong className="text-[#111111]">Delhi Casting Agency</strong>. Premium members receive priority audition calls on WhatsApp.
                    </p>
                  </div>

                </div>
              </Reveal>
            )}

            {activeTab === "opportunities" && (
              <Reveal>
                <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-md">
                  <h2 className="font-serif text-2xl font-bold text-[#111111] mb-2">
                    Matched Casting Opportunities
                  </h2>
                  <p className="text-xs text-[#555555] mb-6">
                    Recent auditions matching your category: {profileData.primaryCategory}
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Lead Male Actor — Bollywood Feature Film",
                        location: "Mumbai / Delhi",
                        budget: "₹1,50,000 - ₹3,00,000",
                        type: "Feature Film",
                      },
                      {
                        title: "Commercial Model — National Apparel Brand Shoot",
                        location: "Delhi NCR",
                        budget: "₹45,000 / Day",
                        type: "Print & Digital Ad",
                      },
                      {
                        title: "Supporting Character — OTT Web Series (Season 2)",
                        location: "Mumbai",
                        budget: "₹80,000",
                        type: "Web Series",
                      },
                    ].map((call, i) => (
                      <div
                        key={i}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-[#F7F7F5] p-5 transition hover:border-[#D4AF37]"
                      >
                        <div>
                          <span className="rounded-full bg-[#D4AF37]/20 px-2.5 py-0.5 text-[10px] font-bold text-[#D4AF37] uppercase">
                            {call.type}
                          </span>
                          <h3 className="mt-2 font-serif text-base font-bold text-[#111111]">
                            {call.title}
                          </h3>
                          <p className="mt-1 text-xs text-[#555555]">
                            Location: {call.location} • Budget: {call.budget}
                          </p>
                        </div>

                        <Link
                          href="/casting-calls/"
                          className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-[#111111] transition hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] shadow-xs"
                        >
                          <span>Apply Now</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {activeTab === "saved" && (
              <Reveal>
                <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-md">
                  <h2 className="font-serif text-2xl font-bold text-[#111111] mb-2">
                    Saved Audition Calls
                  </h2>
                  <p className="text-xs text-[#555555] mb-6">
                    Bookmarked opportunities for quick reference
                  </p>

                  <div className="rounded-2xl border border-gray-200 bg-[#F7F7F5] p-8 text-center text-xs text-[#555555]">
                    <Bookmark size={32} className="mx-auto mb-3 text-[#D4AF37]" />
                    <p>You have 4 saved casting calls in your profile.</p>
                    <Link
                      href="/casting-calls/"
                      className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] px-5 py-2.5 font-bold uppercase text-white hover:bg-[#C59B27] shadow-xs"
                    >
                      Browse Casting Calls
                    </Link>
                  </div>
                </div>
              </Reveal>
            )}
          </div>

        </div>
      </section>
    </main>
  );
}
