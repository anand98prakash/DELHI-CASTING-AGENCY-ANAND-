"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Circle,
  ArrowRight,
  Sparkles,
  ChevronDown,
  ChevronUp,
  UserCheck,
  Camera,
  Languages,
  Award,
  FileText,
  Ruler,
  Phone,
  Building2,
  X,
  ExternalLink,
} from "lucide-react";

export interface ProfileItem {
  id: string;
  title: string;
  hint: string;
  category: string;
  actionText: string;
  actionHref: string;
  isCompleted: boolean;
  step?: number;
}

export interface SectionSummary {
  name: string;
  isCompleted: boolean;
  itemCount: number;
  completedCount: number;
}

interface ProfileCompletionWidgetProps {
  isBrand?: boolean;
  profile?: any;
  brandData?: any;
  completionPercentage: number;
  variant?: "sidebar" | "main";
}

export function ProfileCompletionWidget({
  isBrand = false,
  profile,
  brandData,
  completionPercentage,
  variant = "sidebar",
}: ProfileCompletionWidgetProps) {
  const [showCompleted, setShowCompleted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleListWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const { scrollTop, scrollHeight, clientHeight } = container;
    const canScrollUp = scrollTop > 0 && e.deltaY < 0;
    const canScrollDown = scrollTop + clientHeight < scrollHeight - 1 && e.deltaY > 0;

    if (canScrollUp || canScrollDown) {
      e.stopPropagation();
      container.scrollTop += e.deltaY;
    }
  };

  // 1. DYNAMICALLY COMPUTE ITEMS FOR ARTISTS
  const artistItems: ProfileItem[] = [
    {
      id: "fullName",
      title: "Full Name",
      hint: "Add your full legal or stage name",
      category: "Basic Information",
      actionText: "Add",
      actionHref: "/profile/setup?mode=edit&step=1&focus=fullName&reason=" + encodeURIComponent("Please enter your full legal or stage name to complete your profile."),
      isCompleted: Boolean(profile?.fullName && String(profile.fullName).trim().length > 0),
      step: 1,
    },
    {
      id: "dob",
      title: "Date of Birth",
      hint: "Add birth date for age-bracket casting calls",
      category: "Basic Information",
      actionText: "Add",
      actionHref: "/profile/setup?mode=edit&step=1&focus=dob&reason=" + encodeURIComponent("Please add your date of birth for age-bracket casting call matching."),
      isCompleted: Boolean(profile?.dateOfBirth && String(profile.dateOfBirth).trim().length > 0),
      step: 1,
    },
    {
      id: "gender",
      title: "Gender Identity",
      hint: "Select your gender identity for roles",
      category: "Basic Information",
      actionText: "Select",
      actionHref: "/profile/setup?mode=edit&step=1&focus=gender&reason=" + encodeURIComponent("Please select your gender identity for character role matching."),
      isCompleted: Boolean(profile?.gender && String(profile.gender).trim().length > 0),
      step: 1,
    },
    {
      id: "phone",
      title: "Contact Phone",
      hint: "Add phone number for audition callbacks",
      category: "Contact Details",
      actionText: "Add",
      actionHref: "/profile/setup?mode=edit&step=1&focus=phone&reason=" + encodeURIComponent("Please provide your contact phone number for audition updates."),
      isCompleted: Boolean(profile?.phone && String(profile.phone).trim().length > 0),
      step: 1,
    },
    {
      id: "city",
      title: "Current City",
      hint: "Specify your current base city",
      category: "Contact Details",
      actionText: "Add",
      actionHref: "/profile/setup?mode=edit&step=1&focus=city&reason=" + encodeURIComponent("Please specify your current city to discover local casting calls."),
      isCompleted: Boolean(profile?.city && String(profile.city).trim().length > 0),
      step: 1,
    },
    {
      id: "state",
      title: "State / Region",
      hint: "Add your operating state or province",
      category: "Contact Details",
      actionText: "Add",
      actionHref: "/profile/setup?mode=edit&step=1&focus=state&reason=" + encodeURIComponent("Please specify your operating state or province."),
      isCompleted: Boolean(profile?.state && String(profile.state).trim().length > 0),
      step: 1,
    },
    {
      id: "languages",
      title: "Languages",
      hint: "Add your preferred languages",
      category: "Languages",
      actionText: "Add",
      actionHref: "/profile/setup?mode=edit&step=1&focus=languages&reason=" + encodeURIComponent("Please add the languages you speak so casting directors can match you to scripts."),
      isCompleted: Boolean(profile?.languages && String(profile.languages).trim().length > 0),
      step: 1,
    },
    {
      id: "skills",
      title: "Skills & Specialization",
      hint: "Add your skills",
      category: "Skills & Specialization",
      actionText: "Add",
      actionHref: "/profile/setup?mode=edit&step=1&focus=skills&reason=" + encodeURIComponent("Please list your acting or modeling skills to highlight your abilities."),
      isCompleted: Boolean(profile?.skills && String(profile.skills).trim().length > 0),
      step: 1,
    },
    {
      id: "portfolioDescription",
      title: "Portfolio / Experience",
      hint: "Complete your portfolio",
      category: "Portfolio / Experience",
      actionText: "Complete",
      actionHref: "/profile/setup?mode=edit&step=1&focus=portfolioDescription&reason=" + encodeURIComponent("Please complete your About / Portfolio Summary to reach 100% profile score and get discovered by casting directors."),
      isCompleted: Boolean(profile?.bio && String(profile.bio).trim().length > 0),
      step: 1,
    },
    {
      id: "height",
      title: "Height",
      hint: "Add your height measurement",
      category: "Physical Attributes",
      actionText: "Add",
      actionHref: "/profile/setup?mode=edit&step=1&focus=height&reason=" + encodeURIComponent("Please enter your height measurement for role specifications."),
      isCompleted: Boolean(profile?.height && String(profile.height).trim().length > 0),
      step: 1,
    },
    {
      id: "weight",
      title: "Weight",
      hint: "Add your weight in kg",
      category: "Physical Attributes",
      actionText: "Add",
      actionHref: "/profile/setup?mode=edit&step=1&focus=weight&reason=" + encodeURIComponent("Please enter your weight in kg for casting specifications."),
      isCompleted: Boolean(profile?.weight && String(profile.weight).trim().length > 0),
      step: 1,
    },
    {
      id: "chest",
      title: "Chest / Bust",
      hint: "Add chest or bust size in inches",
      category: "Physical Attributes",
      actionText: "Add",
      actionHref: "/profile/setup?mode=edit&step=1&focus=chest&reason=" + encodeURIComponent("Please provide chest or bust measurement for costume fittings."),
      isCompleted: Boolean(profile?.chest && String(profile.chest).trim().length > 0),
      step: 1,
    },
    {
      id: "waist",
      title: "Waist",
      hint: "Add waist size in inches",
      category: "Physical Attributes",
      actionText: "Add",
      actionHref: "/profile/setup?mode=edit&step=1&focus=waist&reason=" + encodeURIComponent("Please provide waist measurement for costume fittings."),
      isCompleted: Boolean(profile?.waist && String(profile.waist).trim().length > 0),
      step: 1,
    },
    {
      id: "photos",
      title: "Profile Photo",
      hint: "Upload clear casting photographs",
      category: "Profile Photo",
      actionText: "Upload",
      actionHref: "/profile/setup?mode=edit&step=2&focus=photos&reason=" + encodeURIComponent("Please upload your 4 casting photographs (Front, Back, Left, Right) to complete your portfolio."),
      isCompleted: Boolean(
        (profile?.profilePhoto && String(profile.profilePhoto).trim().length > 0) ||
        (profile?.headshots && String(profile.headshots).trim().length > 0)
      ),
      step: 2,
    },
  ];

  // 2. DYNAMICALLY COMPUTE ITEMS FOR BRANDS
  const brandItems: ProfileItem[] = [
    {
      id: "companyName",
      title: "Company Name",
      hint: "Enter your studio or agency name",
      category: "Company Overview",
      actionText: "Add",
      actionHref: "/register/brand?focus=companyName&reason=" + encodeURIComponent("Please enter your company, studio, or agency name to complete verification."),
      isCompleted: Boolean(brandData?.companyName && String(brandData.companyName).trim().length > 0),
    },
    {
      id: "category",
      title: "Industry Category",
      hint: "Select your production or agency category",
      category: "Company Overview",
      actionText: "Select",
      actionHref: "/register/brand?focus=category&reason=" + encodeURIComponent("Please select your production house or agency category."),
      isCompleted: Boolean(brandData?.category && String(brandData.category).trim().length > 0),
    },
    {
      id: "description",
      title: "Company Description",
      hint: "Add your production background & requirements",
      category: "Company Overview",
      actionText: "Complete",
      actionHref: "/register/brand?focus=description&reason=" + encodeURIComponent("Please add a brief description of your production house or agency."),
      isCompleted: Boolean(brandData?.description && String(brandData.description).trim().length > 0),
    },
    {
      id: "website",
      title: "Official Website",
      hint: "Add your official website URL",
      category: "Company Overview",
      actionText: "Add",
      actionHref: "/register/brand?focus=website&reason=" + encodeURIComponent("Please enter your official website or portfolio link."),
      isCompleted: Boolean(brandData?.website && String(brandData.website).trim().length > 0),
    },
    {
      id: "fullName",
      title: "Contact Person",
      hint: "Add casting representative full name",
      category: "Contact Details",
      actionText: "Add",
      actionHref: "/register/brand?focus=fullName&reason=" + encodeURIComponent("Please enter the full name of the authorized coordinator or casting director."),
      isCompleted: Boolean(brandData?.fullName && String(brandData.fullName).trim().length > 0),
    },
    {
      id: "designation",
      title: "Designation",
      hint: "Add your role or title (e.g. Casting Director)",
      category: "Contact Details",
      actionText: "Add",
      actionHref: "/register/brand?focus=designation&reason=" + encodeURIComponent("Please specify your official role or title (e.g. Casting Director, Producer)."),
      isCompleted: Boolean(brandData?.designation && String(brandData.designation).trim().length > 0),
    },
    {
      id: "email",
      title: "Official Email",
      hint: "Add verified company email",
      category: "Contact Details",
      actionText: "Add",
      actionHref: "/register/brand?focus=email&reason=" + encodeURIComponent("Please provide your corporate or business email address."),
      isCompleted: Boolean(brandData?.email && String(brandData.email).trim().length > 0),
    },
    {
      id: "phone",
      title: "Phone Number",
      hint: "Add contact phone number",
      category: "Contact Details",
      actionText: "Add",
      actionHref: "/register/brand?focus=phone&reason=" + encodeURIComponent("Please provide a direct phone number for talent correspondence."),
      isCompleted: Boolean(brandData?.phone && String(brandData.phone).trim().length > 0),
    },
    {
      id: "city",
      title: "City",
      hint: "Specify operational headquarter city",
      category: "Location",
      actionText: "Add",
      actionHref: "/register/brand?focus=city&reason=" + encodeURIComponent("Please specify the city where your production house or agency is based."),
      isCompleted: Boolean(brandData?.city && String(brandData.city).trim().length > 0),
    },
    {
      id: "state",
      title: "State",
      hint: "Specify state or region",
      category: "Location",
      actionText: "Add",
      actionHref: "/register/brand?focus=state&reason=" + encodeURIComponent("Please specify your state or province."),
      isCompleted: Boolean(brandData?.state && String(brandData.state).trim().length > 0),
    },
  ];

  const items = isBrand ? brandItems : artistItems;
  const pendingItems = items.filter((item) => !item.isCompleted);
  const completedItems = items.filter((item) => item.isCompleted);
  const isComplete = completionPercentage >= 100 || pendingItems.length === 0;

  // Group items by category to build high-level Naukri-style checklist
  const categories = Array.from(new Set(items.map((i) => i.category)));
  const sectionSummaries: SectionSummary[] = categories.map((cat) => {
    const catItems = items.filter((i) => i.category === cat);
    const catCompleted = catItems.filter((i) => i.isCompleted).length;
    return {
      name: cat,
      isCompleted: catCompleted === catItems.length,
      itemCount: catItems.length,
      completedCount: catCompleted,
    };
  });

  const completedSections = sectionSummaries.filter((s) => s.isCompleted);

  // Get icon for category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Basic Information":
        return <UserCheck size={14} className="text-emerald-600" />;
      case "Profile Photo":
        return <Camera size={14} className="text-emerald-600" />;
      case "Contact Details":
      case "Location":
        return <Phone size={14} className="text-emerald-600" />;
      case "Languages":
        return <Languages size={14} className="text-emerald-600" />;
      case "Skills & Specialization":
        return <Award size={14} className="text-emerald-600" />;
      case "Portfolio / Experience":
        return <FileText size={14} className="text-emerald-600" />;
      case "Physical Attributes":
        return <Ruler size={14} className="text-emerald-600" />;
      default:
        return <Building2 size={14} className="text-emerald-600" />;
    }
  };

  // =========================================================================
  // SIDEBAR VARIANT
  // =========================================================================
  if (variant === "sidebar") {
    return (
      <div className="space-y-3">
        {/* Progress Bar & Header */}
        <div>
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-[#555555]">Profile Completion Level</span>
            <span className="text-[#D4AF37] font-bold">
              {completionPercentage}%
            </span>
          </div>
          <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-gray-100 border border-gray-200">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C59B27] transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>

        {/* 100% COMPLETE STATE */}
        {isComplete ? (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 p-3 text-emerald-900 shadow-2xs">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
              <p className="text-xs font-bold">100% Complete • Casting Ready</p>
            </div>
            <p className="mt-1 text-[11px] text-emerald-700 leading-snug">
              Your profile is fully verified and optimized for casting director shortlists.
            </p>
          </div>
        ) : (
          /* NOT 100%: PROFESSIONAL CASTING AGENCY BUTTON & COLLAPSIBLE LIST */
          <div className="space-y-2.5">
            {/* The primary button under Profile Completion Level */}
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="group flex w-full items-center justify-between rounded-xl border border-[#D4AF37]/50 bg-gradient-to-r from-[#FAF7F0] via-[#FDFBF7] to-[#F5EEDB] p-2.5 text-left shadow-2xs transition-all duration-200 hover:border-[#D4AF37] hover:shadow-xs active:scale-[0.99] cursor-pointer"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#D4AF37] text-white shadow-2xs shrink-0">
                  <Sparkles size={13} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#111111] truncate">
                      {isExpanded ? "Hide Pending Items" : "Check Pending Items"}
                    </span>
                    <span className="rounded-full bg-[#D4AF37] px-2 py-0.5 text-[10px] font-bold text-white shrink-0">
                      {pendingItems.length}
                    </span>
                  </div>
                  <p className="text-[10px] text-[#777777] truncate mt-0.5">
                    {isExpanded
                      ? "Click to collapse checklist"
                      : "Click to check missing profile items"}
                  </p>
                </div>
              </div>
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-white/90 border border-gray-200 text-[#555555] group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] shrink-0 transition-transform">
                {isExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
              </div>
            </button>

            {/* EXPANDABLE PENDING ITEMS CONTAINER (Only appears when button is clicked) */}
            {isExpanded && (
              <div
                data-lenis-prevent="true"
                className="rounded-2xl border border-[#D4AF37]/30 bg-[#FAF7F0]/80 p-3 shadow-xs space-y-2.5 animate-in fade-in slide-in-from-top-2 duration-200"
              >
                {/* Header with count and Full View modal trigger */}
                <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-2">
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#997715] block truncate">
                      Pending Profile Items ({pendingItems.length})
                    </span>
                    <p className="text-[10px] text-[#666666] leading-tight truncate">
                      Complete to maximize selection chance
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-1 rounded-lg bg-white border border-[#D4AF37]/40 px-2 py-1 text-[10px] font-bold text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition shadow-2xs shrink-0 cursor-pointer"
                    title="Open checklist in full dialog"
                  >
                    <span>Full View</span>
                    <ExternalLink size={10} />
                  </button>
                </div>

                {/* Scrollable list with native wheel scroll enabled and Lenis prevention */}
                <div
                  ref={scrollContainerRef}
                  onWheel={handleListWheel}
                  data-lenis-prevent="true"
                  tabIndex={0}
                  className="max-h-72 overflow-y-auto space-y-2 pr-1.5 custom-scrollbar focus:outline-none"
                  style={{
                    overscrollBehavior: "contain",
                    touchAction: "pan-y",
                    WebkitOverflowScrolling: "touch",
                  }}
                >
                  {pendingItems.map((item) => (
                    <div
                      key={item.id}
                      className="group rounded-xl border border-gray-200 bg-white p-2.5 transition hover:border-[#D4AF37] hover:shadow-2xs"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-2 min-w-0">
                          <Circle
                            size={13}
                            className="mt-0.5 text-[#D4AF37] shrink-0 fill-[#D4AF37]/20"
                          />
                          <div className="min-w-0">
                            <p className="text-xs font-bold text-[#111111] truncate leading-tight">
                              {item.title}
                            </p>
                            <p className="text-[10px] text-[#666666] truncate mt-0.5">
                              {item.hint}
                            </p>
                          </div>
                        </div>

                        <Link
                          href={item.actionHref}
                          className="inline-flex items-center gap-1 rounded-lg bg-[#D4AF37] px-2.5 py-1 text-[11px] font-bold text-white shadow-2xs transition hover:bg-[#C59B27] shrink-0 active:scale-95"
                        >
                          <span>{item.actionText}</span>
                          <ArrowRight size={10} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer Action */}
                <div className="border-t border-[#D4AF37]/20 pt-2 flex items-center justify-between text-[10px] text-[#777777]">
                  <span>Priority boost: +40%</span>
                  <button
                    type="button"
                    onClick={() => setIsExpanded(false)}
                    className="font-bold text-[#D4AF37] hover:underline cursor-pointer"
                  >
                    Collapse ▴
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Section Checklist (Completed Sections text toggle - subtle & clean) */}
        {completedSections.length > 0 && (
          <div className="pt-1">
            <button
              type="button"
              onClick={() => setShowCompleted(!showCompleted)}
              className="flex w-full items-center justify-between text-[11px] font-medium text-emerald-800 hover:text-emerald-900 cursor-pointer"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-600" />
                <span>{completedSections.length} Sections Completed</span>
              </div>
              {showCompleted ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
            </button>

            {showCompleted && (
              <div className="mt-2 space-y-1.5 rounded-xl border border-emerald-100 bg-emerald-50/50 p-2.5 animate-in fade-in duration-150">
                {completedSections.map((sec) => (
                  <div
                    key={sec.name}
                    className="flex items-center gap-2 text-xs font-medium text-emerald-800"
                  >
                    <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                    <span className="truncate">{sec.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* FULL VIEW MODAL DIALOG */}
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              data-lenis-prevent="true"
              className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[#D4AF37]/40 bg-white p-6 shadow-2xl space-y-5 custom-scrollbar"
              style={{
                overscrollBehavior: "contain",
                touchAction: "pan-y",
                WebkitOverflowScrolling: "touch",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-gray-200 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37]">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                      Delhi Casting Agency • Talent Dossier
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#111111]">
                      Profile Completion Checklist
                    </h3>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-xl border border-gray-200 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Progress Bar in Modal */}
              <div className="rounded-2xl border border-[#D4AF37]/30 bg-[#FAF7F0] p-4">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-[#111111]">Current Profile Score</span>
                  <span className="text-[#D4AF37] text-sm">{completionPercentage}%</span>
                </div>
                <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C59B27] transition-all duration-500"
                    style={{ width: `${completionPercentage}%` }}
                  />
                </div>
                <p className="mt-2 text-[11px] text-[#666666]">
                  Profiles with 100% completion receive up to <strong>4x more casting impressions</strong> and are prioritized in director audition shortlists.
                </p>
              </div>

              {/* Pending Items */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                  Pending Profile Items ({pendingItems.length})
                </span>
                <div
                  data-lenis-prevent="true"
                  className="space-y-2 max-h-60 overflow-y-auto pr-1 custom-scrollbar"
                  style={{
                    overscrollBehavior: "contain",
                    touchAction: "pan-y",
                    WebkitOverflowScrolling: "touch",
                  }}
                >
                  {pendingItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-[#F7F7F5] p-3 hover:border-[#D4AF37] hover:bg-white transition"
                    >
                      <div className="flex items-start gap-2.5 min-w-0">
                        <Circle
                          size={15}
                          className="mt-0.5 text-[#D4AF37] shrink-0 fill-[#D4AF37]/20"
                        />
                        <div>
                          <p className="text-xs font-bold text-[#111111]">{item.title}</p>
                          <p className="text-[11px] text-[#666666]">{item.hint}</p>
                          <span className="inline-block mt-0.5 text-[9px] font-bold uppercase tracking-wider text-gray-400">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <Link
                        href={item.actionHref}
                        onClick={() => setIsModalOpen(false)}
                        className="inline-flex items-center gap-1.5 rounded-xl bg-[#D4AF37] px-3.5 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-[#C59B27] transition shrink-0 active:scale-95"
                      >
                        <span>{item.actionText}</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Completed Sections Summary */}
              {completedSections.length > 0 && (
                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Completed Sections ({completedSections.length})
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {completedSections.map((sec) => (
                      <div
                        key={sec.name}
                        className="flex items-center gap-2 rounded-xl bg-emerald-50/70 border border-emerald-100 p-2 text-xs font-semibold text-emerald-800"
                      >
                        <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                        <span className="truncate">{sec.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Close Button */}
              <div className="border-t border-gray-200 pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-xl bg-gray-100 px-4 py-2 text-xs font-bold text-gray-700 hover:bg-gray-200 transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // =========================================================================
  // MAIN DASHBOARD VARIANT (Prominent Naukri-style Optimization Card)
  // =========================================================================
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-7 shadow-md">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-200 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
              <Sparkles size={18} />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#111111]">
                {isComplete ? "Profile Complete" : "Profile Optimization"}
              </h3>
              <p className="text-xs text-[#666666]">
                {isComplete
                  ? "Your profile is 100% complete and fully verified."
                  : "Complete your profile to improve your chances of getting selected."}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="block text-lg font-bold text-[#D4AF37] leading-none">
              {completionPercentage}%
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">
              {isComplete ? "Completed" : "Complete"}
            </span>
          </div>
          <div className="h-10 w-24 sm:w-32 overflow-hidden rounded-full bg-gray-100 border border-gray-200 p-0.5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C59B27] transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* 100% COMPLETE STATE */}
      {isComplete ? (
        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 text-emerald-950">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-xs">
              <CheckCircle2 size={22} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-emerald-900">
                Your profile is complete!
              </h4>
              <p className="text-xs text-emerald-700 mt-0.5">
                All essential information, physical attributes, contact details, and portfolio media are active. Casting directors can view your complete dossier.
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-emerald-200/60">
            {completedSections.map((sec) => (
              <div
                key={sec.name}
                className="flex items-center gap-2 rounded-lg bg-white/80 px-2.5 py-1.5 text-xs font-semibold text-emerald-800"
              >
                <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                <span className="truncate">{sec.name}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* PENDING & COMPLETED SECTIONS SPLIT (Naukri style) */
        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          {/* Left / Main Column: Pending Items */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                Pending Profile Items ({pendingItems.length})
              </span>
              <span className="text-[11px] text-[#D4AF37] font-medium">
                Click any item to complete directly
              </span>
            </div>

            <div className="space-y-2.5">
              {pendingItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-[#F7F7F5] p-3.5 transition-all hover:border-[#D4AF37] hover:bg-white hover:shadow-sm"
                >
                  <div className="flex items-start gap-2.5 min-w-0">
                    <Circle
                      size={16}
                      className="mt-0.5 text-[#D4AF37] shrink-0"
                    />
                    <div>
                      <h5 className="text-xs font-bold text-[#111111]">
                        {item.title}
                      </h5>
                      <p className="text-[11px] text-[#666666] mt-0.5">
                        {item.hint}
                      </p>
                      <span className="inline-block mt-1 text-[9px] font-bold uppercase tracking-wider text-gray-400">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={item.actionHref}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#D4AF37] px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-[#C59B27] shrink-0 active:scale-95"
                  >
                    <span>{item.actionText}</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Completed Sections */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Completed Sections ({completedSections.length})
            </span>

            <div className="rounded-2xl border border-gray-200 bg-[#F7F7F5] p-4 space-y-3">
              {completedSections.map((sec) => (
                <div
                  key={sec.name}
                  className="flex items-center justify-between text-xs font-medium text-[#111111] pb-2 border-b border-gray-200 last:border-0 last:pb-0"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                    <span className="truncate">{sec.name}</span>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800 shrink-0">
                    Done
                  </span>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-dashed border-[#D4AF37]/50 bg-[#FAF7F0] p-4 text-xs text-[#666666]">
              <p className="font-semibold text-[#111111] flex items-center gap-1.5">
                <Sparkles size={14} className="text-[#D4AF37]" />
                Why complete 100%?
              </p>
              <p className="mt-1 text-[11px] leading-relaxed text-[#555555]">
                Profiles with 100% completion receive up to <strong>4x more casting director impressions</strong> and are prioritized in audition shortlist queries.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
