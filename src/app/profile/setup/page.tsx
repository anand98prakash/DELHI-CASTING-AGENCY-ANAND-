"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  FileText,
  Ruler,
  Sparkles,
  User,
  Trash2,
  RefreshCw,
} from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { isUserAuthenticated } from "@/lib/auth";

const inputClass =
  "w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-[#111111] placeholder:text-gray-400 transition-all duration-300 focus:border-[#D4AF37] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/15 shadow-xs";

const selectClass =
  "w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-[#111111] transition-all duration-300 focus:border-[#D4AF37] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/15 shadow-xs";

interface PhotoSlot {
  key: string;
  title: string;
  subtitle: string;
  previewUrl: string | null;
}

export default function ProfileSetupPage() {
  const router = useRouter();
  const [saved, setSaved] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    // Basic Info
    fullName: "Aarav Sharma",
    displayName: "Aarav Sharma",
    dob: "1998-05-14",
    age: "26",
    gender: "Male",
    city: "New Delhi",
    state: "Delhi NCR",
    phone: "+91 9876543210",
    email: "aarav.sharma@example.com",
    languages: "Hindi, English, Punjabi",

    // Talent Info
    primaryCategory: "Actor",
    experience: "3-5 Years",
    skills: "Method Acting, Script Reading, Dialogue Delivery, Sword Fighting",
    specialSkills: "Driving (Four-Wheeler & Bike), Horse Riding, Swimming",
    previousWork: "Featured lead in independent short film 'Manzar' (2024), 2 Print Ad Campaigns",
    portfolioDescription:
      "Passionate theater actor with formal training from National School of Drama workshops. Specialized in dramatic and action roles.",

    // Physical Details
    height: "5'11\"",
    weight: "72 kg",
    chest: "40 inches",
    waist: "32 inches",
    hips: "38 inches",
    shoeSize: "10 UK",
    hairColor: "Black",
    eyeColor: "Dark Brown",
    skinTone: "Fair / Wheatish",
  });

  // Photo Slots State
  const [photos, setPhotos] = useState<PhotoSlot[]>([
    {
      key: "primary",
      title: "Profile / Primary Photo",
      subtitle: "Upload your main headshot or profile photo",
      previewUrl: "/images/actors/model female 1.png",
    },
    {
      key: "front",
      title: "Front Face",
      subtitle: "Upload a clear front-facing headshot",
      previewUrl: "/images/actors/editorial_grid_1.png",
    },
    {
      key: "leftProfile",
      title: "Left Profile",
      subtitle: "Upload a clear left-side profile photo",
      previewUrl: "/images/actors/editorial_grid_2.png",
    },
    {
      key: "rightProfile",
      title: "Right Profile",
      subtitle: "Upload a clear right-side profile photo",
      previewUrl: "/images/actors/editorial_grid_3.png",
    },
    {
      key: "backProfile",
      title: "Back Profile",
      subtitle: "Upload a clear back-view photo",
      previewUrl: "/images/actors/editorial_grid_4.png",
    },
    {
      key: "fullBody",
      title: "Full Body Photo",
      subtitle: "Upload a clear full-body standing photo",
      previewUrl: "/images/actors/editorial_grid_6.png",
    },
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
          if (parsed.formData) setFormData(parsed.formData);
          if (parsed.photos) setPhotos(parsed.photos);
        } catch (e) {
          console.error("Failed to parse stored profile", e);
        }
      }
    }
  }, [router]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (
    key: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPhotos((prev) =>
        prev.map((slot) =>
          slot.key === key ? { ...slot, previewUrl: url } : slot
        )
      );
    }
  };

  const handleRemovePhoto = (key: string) => {
    setPhotos((prev) =>
      prev.map((slot) =>
        slot.key === key ? { ...slot, previewUrl: null } : slot
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);

    if (typeof window !== "undefined") {
      localStorage.setItem(
        "dca_artist_profile",
        JSON.stringify({
          formData,
          photos,
          savedAt: new Date().toISOString(),
          completionPercentage: 95,
        })
      );
    }

    setTimeout(() => {
      router.push("/dashboard");
    }, 600);
  };

  return (
    <main className="min-h-screen bg-white text-[#111111]">
      <PageHero
        eyebrow="Artist Profile Setup"
        title="Create Your Casting Profile"
        description="Fill in your professional casting information, physical specifications, and upload high-quality casting headshots."
      />

      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Dashboard", href: "/dashboard" },
            { label: "Profile Setup" },
          ]}
        />
      </div>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <form onSubmit={handleSubmit} className="space-y-12">
          
          {/* SECTION A — BASIC INFORMATION */}
          <Reveal>
            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-md md:p-10">
              <div className="flex items-center gap-3 border-b border-gray-200 pb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <User size={20} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                    SECTION A
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-[#111111]">
                    Basic Information
                  </h2>
                </div>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Full Name */}
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* Display Name */}
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    Stage / Display Name
                  </label>
                  <input
                    type="text"
                    name="displayName"
                    value={formData.displayName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    name="dob"
                    required
                    value={formData.dob}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    Gender *
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className={selectClass}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Non-Binary">Non-Binary</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>

                {/* City */}
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    Current City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* State */}
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    State *
                  </label>
                  <input
                    type="text"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* Languages */}
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    Languages Known *
                  </label>
                  <input
                    type="text"
                    name="languages"
                    required
                    value={formData.languages}
                    onChange={handleChange}
                    placeholder="Hindi, English, Punjabi..."
                    className={inputClass}
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* SECTION B — TALENT INFORMATION */}
          <Reveal delay={0.05}>
            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-md md:p-10">
              <div className="flex items-center gap-3 border-b border-gray-200 pb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <FileText size={20} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                    SECTION B
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-[#111111]">
                    Talent Information
                  </h2>
                </div>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {/* Primary Category */}
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    Primary Talent Category *
                  </label>
                  <select
                    name="primaryCategory"
                    value={formData.primaryCategory}
                    onChange={handleChange}
                    className={selectClass}
                  >
                    <option value="Actor">Actor</option>
                    <option value="Model">Model</option>
                    <option value="Child Artist">Child Artist</option>
                    <option value="Dancer">Dancer</option>
                    <option value="Influencer">Influencer</option>
                    <option value="Voice Artist">Voice Artist</option>
                  </select>
                </div>

                {/* Experience Level */}
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    Experience Level *
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className={selectClass}
                  >
                    <option value="Fresh Face / Beginner">Fresh Face / Beginner</option>
                    <option value="1-2 Years">1-2 Years</option>
                    <option value="3-5 Years">3-5 Years</option>
                    <option value="5+ Years Experienced">5+ Years Experienced</option>
                  </select>
                </div>

                {/* Skills */}
                <div className="md:col-span-2">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    Acting / Modeling Skills
                  </label>
                  <input
                    type="text"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="Method acting, Runway walk, Script reading..."
                    className={inputClass}
                  />
                </div>

                {/* Special Skills */}
                <div className="md:col-span-2">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    Special Skills &amp; Athletics
                  </label>
                  <input
                    type="text"
                    name="specialSkills"
                    value={formData.specialSkills}
                    onChange={handleChange}
                    placeholder="Driving, Horse Riding, Martial Arts, Singing..."
                    className={inputClass}
                  />
                </div>

                {/* Previous Work */}
                <div className="md:col-span-2">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    Previous Projects / Experience Highlights
                  </label>
                  <textarea
                    name="previousWork"
                    rows={3}
                    value={formData.previousWork}
                    onChange={handleChange}
                    placeholder="List short films, TV ads, theater plays, or print campaigns..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Portfolio Description */}
                <div className="md:col-span-2">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    About / Portfolio Summary
                  </label>
                  <textarea
                    name="portfolioDescription"
                    rows={3}
                    value={formData.portfolioDescription}
                    onChange={handleChange}
                    placeholder="Write a brief professional summary about your talent and passion..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* SECTION C — PHYSICAL DETAILS */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-md md:p-10">
              <div className="flex items-center gap-3 border-b border-gray-200 pb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Ruler size={20} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                    SECTION C
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-[#111111]">
                    Physical Specifications
                  </h2>
                </div>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {/* Height */}
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    Height (ft &amp; in)
                  </label>
                  <input
                    type="text"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    placeholder="e.g. 5'11&quot;"
                    className={inputClass}
                  />
                </div>

                {/* Weight */}
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    Weight (kg)
                  </label>
                  <input
                    type="text"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    placeholder="e.g. 72 kg"
                    className={inputClass}
                  />
                </div>

                {/* Chest / Bust */}
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    Chest / Bust (in)
                  </label>
                  <input
                    type="text"
                    name="chest"
                    value={formData.chest}
                    onChange={handleChange}
                    placeholder="e.g. 40 in"
                    className={inputClass}
                  />
                </div>

                {/* Waist */}
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    Waist (in)
                  </label>
                  <input
                    type="text"
                    name="waist"
                    value={formData.waist}
                    onChange={handleChange}
                    placeholder="e.g. 32 in"
                    className={inputClass}
                  />
                </div>

                {/* Hips */}
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    Hips (in)
                  </label>
                  <input
                    type="text"
                    name="hips"
                    value={formData.hips}
                    onChange={handleChange}
                    placeholder="e.g. 38 in"
                    className={inputClass}
                  />
                </div>

                {/* Shoe Size */}
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    Shoe Size (UK/EU)
                  </label>
                  <input
                    type="text"
                    name="shoeSize"
                    value={formData.shoeSize}
                    onChange={handleChange}
                    placeholder="e.g. 10 UK"
                    className={inputClass}
                  />
                </div>

                {/* Hair Color */}
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    Hair Color
                  </label>
                  <input
                    type="text"
                    name="hairColor"
                    value={formData.hairColor}
                    onChange={handleChange}
                    placeholder="Black, Dark Brown, Blonde..."
                    className={inputClass}
                  />
                </div>

                {/* Eye Color */}
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    Eye Color
                  </label>
                  <input
                    type="text"
                    name="eyeColor"
                    value={formData.eyeColor}
                    onChange={handleChange}
                    placeholder="Dark Brown, Black, Hazel..."
                    className={inputClass}
                  />
                </div>

                {/* Skin Tone */}
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    Skin Tone
                  </label>
                  <input
                    type="text"
                    name="skinTone"
                    value={formData.skinTone}
                    onChange={handleChange}
                    placeholder="Fair, Wheatish, Dusky..."
                    className={inputClass}
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* SECTION D — PROFESSIONAL CASTING PHOTOS UPLOAD */}
          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-md md:p-10">
              <div className="flex items-center gap-3 border-b border-gray-200 pb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Camera size={20} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                    SECTION D
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-[#111111]">
                    Professional Casting Photos
                  </h2>
                </div>
              </div>

              <p className="mt-4 text-sm text-[#555555]">
                Upload clear, well-lit casting headshots and full-body photographs representing your natural appearance.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {photos.map((slot) => (
                  <div
                    key={slot.key}
                    className="flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-[#F7F7F5] p-4 transition duration-300 hover:border-[#D4AF37]"
                  >
                    <div>
                      <h3 className="font-serif text-base font-bold text-[#111111]">
                        {slot.title}
                      </h3>
                      <p className="mt-1 text-xs text-[#666666]">
                        {slot.subtitle}
                      </p>
                    </div>

                    {/* Preview Box */}
                    <div className="relative mt-4 aspect-[3/4] w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
                      {slot.previewUrl ? (
                        <Image
                          src={slot.previewUrl}
                          alt={slot.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center text-gray-400">
                          <Camera size={32} />
                          <span className="text-xs">No image uploaded</span>
                        </div>
                      )}
                    </div>

                    {/* Slot Actions */}
                    <div className="mt-4 flex items-center gap-2">
                      <label className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 py-2.5 text-xs font-bold uppercase tracking-wider text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-white">
                        <RefreshCw size={14} />
                        <span>{slot.previewUrl ? "Replace" : "Upload"}</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageUpload(slot.key, e)}
                          className="hidden"
                        />
                      </label>

                      {slot.previewUrl && (
                        <button
                          type="button"
                          onClick={() => handleRemovePhoto(slot.key)}
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-red-200 bg-red-50 text-red-600 transition hover:bg-red-500 hover:text-white"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form Actions */}
          <div className="flex items-center justify-end gap-4 border-t border-gray-200 pt-8">
            <Button
              type="button"
              variant="ghost"
              onClick={() => router.push("/dashboard")}
              className="border border-gray-200 text-[#111111] hover:bg-gray-100"
            >
              Cancel
            </Button>

            <Button type="submit" className="py-4 px-8 text-sm font-bold uppercase tracking-wider">
              {saved ? (
                <>
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  Saved!
                </>
              ) : (
                <>
                  <span>Save &amp; View Profile</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </div>

        </form>
      </section>
    </main>
  );
}
