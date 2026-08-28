"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bookmark,
  Briefcase,
  Edit,
  LogOut,
  MapPin,
  Ruler,
  ShieldCheck,
  Sparkles,
  User,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Ban,
  Lock,
} from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import {
  isUserAuthenticated,
  getUserSession,
  getUserProfileStatus,
  clearDCAUserSession,
  getPremiumRemainingInfo,
  type ProfileStatus,
} from "@/lib/auth";
import {
  PremiumFlowModal,
  PremiumModalStep,
} from "@/components/premium-flow-modal";

export default function DashboardPage() {
  const router = useRouter();
  const [userRole, setUserRole] = useState<"artist" | "brand">("artist");
  const [activeTab, setActiveTab] = useState<"profile" | "opportunities" | "saved">("profile");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInitialStep, setModalInitialStep] = useState<PremiumModalStep | undefined>(undefined);
  const [profileStatus, setProfileStatus] = useState<ProfileStatus>("APPROVED");
  const [isPremiumUser, setIsPremiumUser] = useState(false);

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
    rejectionReason: "",
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

      requestAnimationFrame(() => {
        const session = getUserSession();
        if (session?.role === "brand") {
          setUserRole("brand");
        } else if (session?.role === "artist") {
          setUserRole("artist");
        }

        if (session?.isPremium) {
          setIsPremiumUser(true);
        }

        const currentStatus = getUserProfileStatus();
        setProfileStatus(currentStatus);

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
      });
    }
  }, [router]);

  const handleLogout = () => {
    clearDCAUserSession();
    router.push("/login");
  };

  const handleOpenPremiumCheckout = () => {
    if (!isUserAuthenticated()) {
      router.push("/profile/setup");
      return;
    }
    const session = getUserSession();
    const isBrandAccount = userRole === "brand" || session?.role === "brand";
    if (isBrandAccount) {
      setModalInitialStep("brand_checkout");
    } else {
      setModalInitialStep("artist_checkout");
    }
    setModalOpen(true);
  };

  const isBrand = userRole === "brand";

  return (
    <main className="min-h-screen bg-white text-[#111111]">
      <PageHero
        eyebrow={isBrand ? "Brand & Casting Portal" : "Artist Portal"}
        title={`Welcome, ${profileData.fullName}`}
        description={
          isBrand
            ? "Manage your company profile, post casting requirements, and source verified talent."
            : "Manage your artist profile, portfolio headshots, and review verified casting calls."
        }
      />

      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: isBrand ? "Brand Dashboard" : "Artist Dashboard" },
          ]}
        />
      </div>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-12">
          
          {/* LEFT SIDEBAR — USER ACTIONS, STATS & PREMIUM CTA */}
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
                    <span className="text-[#D4AF37] font-bold">
                      {profileData.completionPercentage}%
                    </span>
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
                      <span>{isBrand ? "Company Profile" : "My Casting Profile"}</span>
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
                      <span>{isBrand ? "My Casting Posts" : "Matched Opportunities"}</span>
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
                      <span>{isBrand ? "Shortlisted Talent" : "Saved Audition Calls"}</span>
                    </div>
                    <span className="rounded-full bg-gray-200 px-2 py-0.5 text-[10px] font-bold text-[#555555]">
                      4 Saved
                    </span>
                  </button>
                </div>

                {/* =========================================================
                    CLEARLY VISIBLE PREMIUM CTA CARD IN DASHBOARD SIDEBAR
                ========================================================= */}
                <div className="mt-6 rounded-2xl border border-[#D4AF37]/40 bg-[#F7F7F5] p-5 text-center shadow-xs">
                  {isPremiumUser ? (
                    <>
                      <div className="inline-flex items-center justify-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                        <CheckCircle2 size={13} className="text-emerald-600" />
                        <span>Active Premium Member</span>
                      </div>
                      <h3 className="mt-2 font-serif text-sm font-bold text-[#111111]">
                        {isBrand ? "Brand Premium Active" : "Artist Premium Active"}
                      </h3>
                      {(() => {
                        const session = getUserSession();
                        const rem = getPremiumRemainingInfo(session);
                        if (!rem) {
                          return (
                            <p className="mt-1 text-xs text-[#555555]">
                              Priority casting alerts &amp; enhanced discovery activated
                            </p>
                          );
                        }
                        return (
                          <div className="mt-2 space-y-1 text-xs text-[#555555]">
                            <p className="font-medium">
                              Premium active until {rem.expiryDateFormatted}
                            </p>
                            <p className={`font-bold ${rem.remainingDays <= 7 ? "text-amber-700" : "text-emerald-700"}`}>
                              {rem.remainingDays <= 7
                                ? `Premium expires in ${rem.remainingDays} days`
                                : `${rem.remainingDays} days remaining`}
                            </p>
                          </div>
                        );
                      })()}
                    </>
                  ) : (
                    <>
                      <div className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#D4AF37]">
                        <Sparkles size={13} />
                        <span>{isBrand ? "Brand Premium" : "Artist Premium"}</span>
                      </div>

                      <h3 className="mt-2 font-serif text-sm font-bold text-[#111111]">
                        {isBrand
                          ? "Premium Casting Account"
                          : "Artist Premium Membership"}
                      </h3>

                      <p className="mt-1 text-xs text-[#555555]">
                        {isBrand
                          ? "Direct access to verified talent & priority sourcing"
                          : "Verified casting calls & priority profile visibility"}
                      </p>

                      <button
                        type="button"
                        onClick={handleOpenPremiumCheckout}
                        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#D4AF37] py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#C59B27] cursor-pointer"
                      >
                        <span>
                          {isBrand ? "GO PREMIUM — ₹9,999" : "UPGRADE TO PREMIUM"}
                        </span>
                        <ArrowRight size={14} />
                      </button>
                    </>
                  )}
                </div>

                {/* Actions */}
                <div className="mt-6 border-t border-gray-200 pt-5 space-y-3">
                  <Link
                    href={isBrand ? "/register/brand" : "/profile/setup"}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 py-3 text-xs font-bold uppercase tracking-wider text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-white"
                  >
                    <Edit size={14} />
                    <span>{isBrand ? "Edit Brand Details" : "Edit Profile & Photos"}</span>
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
                  
                  {/* ARTIST PROFILE STATUS BANNER */}
                  {!isBrand && (
                    <div className="mb-6">
                      {profileStatus === "PENDING_REVIEW" && (
                        <div className="flex items-center gap-3 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-xs font-semibold text-amber-900">
                          <Clock size={18} className="shrink-0 text-amber-600" />
                          <div>
                            <p className="font-bold">Profile Submitted for DCA Verification</p>
                            <p className="mt-0.5 text-[11px] font-normal text-amber-800">
                              Your profile details and headshots are currently being reviewed by our casting team.
                            </p>
                          </div>
                        </div>
                      )}

                      {profileStatus === "APPROVED" && (
                        <div className="flex items-center gap-3 rounded-2xl border border-emerald-300 bg-emerald-50 p-4 text-xs font-semibold text-emerald-900">
                          <CheckCircle2 size={18} className="shrink-0 text-emerald-600" />
                          <div>
                            <p className="font-bold">DCA Verified Artist Profile</p>
                            <p className="mt-0.5 text-[11px] font-normal text-emerald-800">
                              Your artist portfolio is verified and visible to active casting directors and production houses.
                            </p>
                          </div>
                        </div>
                      )}

                      {profileStatus === "REJECTED" && (
                        <div className="flex items-center gap-3 rounded-2xl border border-rose-300 bg-rose-50 p-4 text-xs font-semibold text-rose-900">
                          <AlertTriangle size={18} className="shrink-0 text-rose-600" />
                          <div>
                            <p className="font-bold">Profile Update Required</p>
                            <p className="mt-0.5 text-[11px] font-normal text-rose-800">
                              {profileData.rejectionReason || "Please update your portfolio headshots with clear studio lighting."}
                            </p>
                          </div>
                        </div>
                      )}

                      {profileStatus === "SUSPENDED" && (
                        <div className="flex items-center gap-3 rounded-2xl border border-gray-300 bg-gray-100 p-4 text-xs font-semibold text-gray-800">
                          <Ban size={18} className="shrink-0 text-gray-600" />
                          <div>
                            <p className="font-bold">Account Suspended</p>
                            <p className="mt-0.5 text-[11px] font-normal text-gray-700">
                              This artist profile has been suspended by administration. Contact support for details.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex items-center justify-between border-b border-gray-200 pb-5">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                        {isBrand ? "Company Overview" : "Artist Portfolio"}
                      </span>
                      <h2 className="font-serif text-2xl font-bold text-[#111111]">
                        {profileData.fullName}
                      </h2>
                    </div>

                    <Link
                      href={isBrand ? "/register/brand" : "/profile/setup"}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-[#F7F7F5] px-4 py-2 text-xs font-bold text-[#111111] transition hover:bg-[#D4AF37] hover:text-white"
                    >
                      <Edit size={14} />
                      <span>Edit</span>
                    </Link>
                  </div>

                  {/* Profile Details Grid */}
                  <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-2xl border border-gray-200 bg-[#F7F7F5] p-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Primary Role</span>
                      <p className="mt-1 text-sm text-[#111111] font-bold">{profileData.primaryCategory}</p>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-[#F7F7F5] p-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Experience</span>
                      <p className="mt-1 text-sm text-[#111111] font-bold">{profileData.experience}</p>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-[#F7F7F5] p-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Location</span>
                      <p className="mt-1 text-sm text-[#111111] font-bold">{profileData.city}, {profileData.state}</p>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-[#F7F7F5] p-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Contact Email</span>
                      <p className="mt-1 text-xs text-[#111111] font-medium truncate">{profileData.email}</p>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-[#F7F7F5] p-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Phone Number</span>
                      <p className="mt-1 text-xs text-[#111111] font-medium">{profileData.phone}</p>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-[#F7F7F5] p-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Languages</span>
                      <p className="mt-1 text-xs text-[#111111] font-medium truncate">{profileData.languages}</p>
                    </div>
                  </div>

                  {/* Physical Stats */}
                  {!isBrand && (
                    <div className="mt-8 border-t border-gray-200 pt-6">
                      <h3 className="font-serif text-lg font-bold text-[#111111] mb-4">Physical Attributes</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div className="rounded-2xl border border-gray-100 bg-[#F7F7F5] p-3 text-center">
                          <span className="text-[10px] font-bold uppercase text-gray-400">Height</span>
                          <p className="mt-0.5 text-sm font-bold text-[#111111]">{profileData.height}</p>
                        </div>
                        <div className="rounded-2xl border border-gray-100 bg-[#F7F7F5] p-3 text-center">
                          <span className="text-[10px] font-bold uppercase text-gray-400">Weight</span>
                          <p className="mt-0.5 text-sm font-bold text-[#111111]">{profileData.weight}</p>
                        </div>
                        <div className="rounded-2xl border border-gray-100 bg-[#F7F7F5] p-3 text-center">
                          <span className="text-[10px] font-bold uppercase text-gray-400">Chest</span>
                          <p className="mt-0.5 text-sm font-bold text-[#111111]">{profileData.chest}</p>
                        </div>
                        <div className="rounded-2xl border border-gray-100 bg-[#F7F7F5] p-3 text-center">
                          <span className="text-[10px] font-bold uppercase text-gray-400">Waist</span>
                          <p className="mt-0.5 text-sm font-bold text-[#111111]">{profileData.waist}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Skills & Specialization */}
                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <h3 className="font-serif text-lg font-bold text-[#111111] mb-2">Skills &amp; Specialization</h3>
                    <p className="text-xs text-[#555555] leading-relaxed">{profileData.skills}</p>
                    
                    <div className="mt-3">
                      <span className="text-[10px] font-bold uppercase text-gray-400">Special Skills:</span>
                      <p className="mt-1 text-sm text-[#444444] font-medium">{profileData.specialSkills}</p>
                    </div>
                  </div>

                  {/* Verification Status Banner */}
                  <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-[#F7F7F5] p-5 text-xs">
                    <div className="flex items-center gap-3">
                      <ShieldCheck size={24} className="shrink-0 text-[#D4AF37]" />
                      <p className="text-[#444444]">
                        {isPremiumUser
                          ? isBrand
                            ? "Your brand account is active with Premium casting features."
                            : "Your artist profile is active with Premium audition alerts on WhatsApp."
                          : isBrand
                            ? "Your brand account is registered with Delhi Casting Agency. Upgrade to Premium for direct talent access."
                            : "Your artist profile is registered with Delhi Casting Agency. Upgrade to Premium for priority audition calls on WhatsApp."}
                      </p>
                    </div>

                    {isPremiumUser ? (
                      <div className="shrink-0 flex flex-col items-end gap-1">
                        <div className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
                          <CheckCircle2 size={14} className="text-emerald-600" />
                          <span>Active Premium</span>
                        </div>
                        {(() => {
                          const session = getUserSession();
                          const rem = getPremiumRemainingInfo(session);
                          if (!rem) return null;
                          return (
                            <span className="text-[11px] font-medium text-emerald-700">
                              Until {rem.expiryDateFormatted} ({rem.remainingDays} days left)
                            </span>
                          );
                        })()}
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={handleOpenPremiumCheckout}
                        className="shrink-0 rounded-xl bg-[#111111] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#D4AF37] cursor-pointer"
                      >
                        {isBrand ? "GO PREMIUM — ₹9,999" : "UPGRADE TO PREMIUM"}
                      </button>
                    )}
                  </div>
                </div>
              </Reveal>
            )}

            {activeTab === "opportunities" && (
              <Reveal>
                <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-md">
                  <h2 className="font-serif text-2xl font-bold text-[#111111] mb-2">
                    {isBrand ? "Active Casting Announcements" : "Matched Casting Opportunities"}
                  </h2>
                  <p className="text-xs text-[#555555] mb-6">
                    {isBrand
                      ? "Casting briefs posted under your brand account"
                      : `Recent auditions matching your category: ${profileData.primaryCategory}`}
                  </p>

                  {isBrand && !isPremiumUser ? (
                    <div className="rounded-2xl border border-[#D4AF37]/30 bg-[#F7F7F5] p-8 text-center">
                      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                        <Lock size={22} />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-[#111111]">
                        Premium Casting Features Locked
                      </h3>
                      <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-[#555555]">
                        Posting casting calls, listing project briefs, and accessing verified applicant rosters require a verified Premium Casting Account.
                      </p>
                      <button
                        type="button"
                        onClick={handleOpenPremiumCheckout}
                        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#C59B27] cursor-pointer"
                      >
                        <span>GO PREMIUM — ₹9,999</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  ) : (
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
                  )}
                </div>
              </Reveal>
            )}

            {activeTab === "saved" && (
              <Reveal>
                <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-md">
                  <h2 className="font-serif text-2xl font-bold text-[#111111] mb-2">
                    {isBrand ? "Bookmarked Talent Profiles" : "Saved Audition Calls"}
                  </h2>
                  <p className="text-xs text-[#555555] mb-6">
                    Bookmarked items for quick reference
                  </p>

                  {isBrand && !isPremiumUser ? (
                    <div className="rounded-2xl border border-[#D4AF37]/30 bg-[#F7F7F5] p-8 text-center">
                      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                        <Lock size={22} />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-[#111111]">
                        Talent Sourcing & Roster Access Locked
                      </h3>
                      <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-[#555555]">
                        Direct access to verified talent rosters and applicant filtering requires a verified Premium Casting Account.
                      </p>
                      <button
                        type="button"
                        onClick={handleOpenPremiumCheckout}
                        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#C59B27] cursor-pointer"
                      >
                        <span>GO PREMIUM — ₹9,999</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  ) : (
                    <div className="rounded-2xl border border-gray-200 bg-[#F7F7F5] p-8 text-center text-xs text-[#555555]">
                      <Bookmark size={32} className="mx-auto mb-3 text-[#D4AF37]" />
                      <p>You have 4 saved items in your account.</p>
                      <Link
                        href="/casting-calls/"
                        className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] px-5 py-2.5 font-bold uppercase text-white hover:bg-[#C59B27] shadow-xs"
                      >
                        Browse Platform
                      </Link>
                    </div>
                  )}
                </div>
              </Reveal>
            )}
          </div>

        </div>
      </section>

      {/* Premium Checkout Modal Component */}
      <PremiumFlowModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialStep={modalInitialStep}
      />
    </main>
  );
}
