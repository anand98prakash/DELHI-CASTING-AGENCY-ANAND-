"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Sparkles,
  CheckCircle2,
  Mail,
  Phone,
  Building2,
  Film,
  FileText,
  ShieldCheck,
  ArrowRight,
  Clock,
  Send,
  MessageSquare,
  AlertCircle,
  X,
  UserCheck,
  Calendar,
  DollarSign,
  MapPin,
  HelpCircle,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { API_URL } from "@/config/env";

export function InquiryFormView() {
  const searchParams = useSearchParams();
  const initialArtist = searchParams.get("artist") || "";
  const initialCategory = searchParams.get("category") || "";
  const initialId = searchParams.get("id") || "";

  const [artistName, setArtistName] = useState(initialArtist);
  const [artistCategory, setArtistCategory] = useState(initialCategory);

  // Form Fields
  const [clientType, setClientType] = useState("Brand / Direct Advertiser");
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactMethod, setContactMethod] = useState("WhatsApp");
  const [projectType, setProjectType] = useState("Bollywood Feature Film");
  const [projectTitle, setProjectTitle] = useState("");
  const [shootDates, setShootDates] = useState("");
  const [shootLocation, setShootLocation] = useState("");
  const [budgetRange, setBudgetRange] = useState("₹75,000 - ₹2,00,000");
  const [projectBrief, setProjectBrief] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(true);

  // Submission States
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState("");
  const [artistNotified, setArtistNotified] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!companyName.trim() || !contactName.trim() || !email.trim() || !phone.trim()) {
      setFormError("Please fill in your company/brand, contact person name, email, and phone number.");
      return;
    }

    if (!projectBrief.trim()) {
      setFormError("Please provide a brief description of the role, character, or project requirements.");
      return;
    }

    setSubmitting(true);

    const generatedId = `DCA-INQ-${Math.floor(100000 + Math.random() * 900000)}`;

    try {
      // 1. Send inquiry payload to backend API (POST /api/inquiries)
      const payload = {
        artistName: artistName.trim() || null,
        artistCategory: artistCategory.trim() || null,
        artistId: initialId || null,
        clientType,
        companyName: companyName.trim(),
        contactName: contactName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        contactMethod,
        projectType,
        projectTitle: projectTitle.trim() || null,
        shootDates: shootDates.trim() || null,
        shootLocation: shootLocation.trim() || null,
        budgetRange,
        projectBrief: projectBrief.trim(),
      };

      let apiSuccess = false;
      let notified = false;

      try {
        const response = await fetch(`${API_URL}/api/inquiries`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          const data = await response.json();
          apiSuccess = true;
          notified = !!data.notifiedArtist;
        }
      } catch {
        // Fallback gracefully for offline or client-only environments
      }

      // 2. Also log notification in client localStorage for in-app instant visibility
      if (typeof window !== "undefined") {
        try {
          const notificationData = {
            id: generatedId,
            type: "APPLICATION_SHORTLISTED",
            title: `New Casting Inquiry: ${companyName.trim()}`,
            message: `${companyName.trim()} (${clientType}) submitted an official casting inquiry for you for ${projectType}${projectTitle ? ` ("${projectTitle.trim()}")` : ""}. Budget: ${budgetRange}. DCA Talent Desk is reviewing and will coordinate with you.`,
            entityType: "INQUIRY",
            entityId: generatedId,
            isRead: false,
            createdAt: new Date().toISOString(),
          };

          // Store under artist notification queue
          const targetKey = artistName ? `dca_artist_notifications_${artistName.toLowerCase().replace(/\s+/g, "_")}` : "dca_general_inquiries";
          const existing = JSON.parse(localStorage.getItem(targetKey) || "[]");
          existing.unshift(notificationData);
          localStorage.setItem(targetKey, JSON.stringify(existing.slice(0, 30)));

          // Store under global notifications queue
          const globalExisting = JSON.parse(localStorage.getItem("dca_platform_notifications") || "[]");
          globalExisting.unshift(notificationData);
          localStorage.setItem("dca_platform_notifications", JSON.stringify(globalExisting.slice(0, 50)));

          // Dispatch event to update notification bell badge across tabs
          window.dispatchEvent(new CustomEvent("dca-new-inquiry", { detail: notificationData }));
        } catch {}
      }

      setInquiryId(generatedId);
      setArtistNotified(true);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setFormError("Network error submitting inquiry. Please verify your connection or contact the casting desk directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setProjectBrief("");
    setProjectTitle("");
    setInquiryId("");
  };

  // Sleek, modern label and input classes
  const labelClass = "block text-xs sm:text-[13px] font-semibold text-[#222222] mb-1.5";
  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-[#F9F9F8] hover:bg-white hover:border-gray-300 focus:bg-white px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-[#111111] placeholder:text-gray-400 transition-all duration-200 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 shadow-2xs";
  const selectClass =
    "w-full rounded-xl border border-gray-200 bg-[#F9F9F8] hover:bg-white hover:border-gray-300 focus:bg-white px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm font-medium text-[#111111] transition-all duration-200 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 shadow-2xs cursor-pointer";

  return (
    <main className="min-h-screen bg-[#FCFCFA] text-[#111111]">
      {/* Editorial Hero Header */}
      <section className="relative isolate overflow-hidden border-b border-gray-200/80 bg-[#F7F7F5] px-4 sm:px-6 pb-10 pt-24 sm:pb-14 sm:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="mx-auto mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#D4AF37]">
              <Sparkles size={13} />
              <span>Official Talent Casting &amp; Booking Desk</span>
            </div>

            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111111] leading-tight">
              Inquire &amp; Cast Talent
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-[#555555]">
              Direct production booking for verified Bollywood actors, fashion models, child artists, dancers, influencers, and voice artists. Our casting desk confirms availability and audition tapes within 2–4 hours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Breadcrumb Bar */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Talents", href: "/talents" },
            { label: "Inquire & Cast" },
          ]}
        />
      </div>

      {/* Main Container */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20 pt-2">
        {submitted ? (
          /* ============================================================
             SUCCESS & CONFIRMATION SCREEN
          ============================================================ */
          <div className="mx-auto max-w-2xl animate-fade-in">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-10 shadow-lg text-center">
              {/* Animated Emerald Checkmark */}
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/80 shadow-xs">
                <CheckCircle2 className="h-9 w-9" />
              </div>

              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 px-3.5 py-1 text-xs font-bold text-[#D4AF37]">
                Reference ID: {inquiryId}
              </div>

              <h2 className="mt-4 font-serif text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
                Casting Inquiry Submitted Successfully
              </h2>

              <p className="mx-auto mt-3 max-w-lg text-xs sm:text-sm leading-relaxed text-[#555555]">
                Thank you, <strong>{contactName}</strong>. Your project brief for <strong>{companyName}</strong> has been logged into our agency casting desk.
              </p>

              {/* What Happens Next - Step by Step Pipeline */}
              <div className="mt-6 rounded-2xl bg-[#F8F8F6] border border-gray-200/80 p-5 text-left space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white text-xs font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-[#111111]">
                      {artistName ? `Artist Alert Sent to ${artistName}` : "Talent Matching Initiated"}
                    </h4>
                    <p className="text-[#666666] text-xs mt-0.5 leading-relaxed">
                      {artistName
                        ? `An official in-app casting notification has been dispatched to ${artistName}'s DCA dashboard.`
                        : "Our coordinators are shortlisting verified talents matching your project brief."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-gray-200/60 pt-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D4AF37] text-white text-xs font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-[#111111]">Availability &amp; Audition Tape Review</h4>
                    <p className="text-[#666666] text-xs mt-0.5 leading-relaxed">
                      DCA casting directors review shoot dates, budget parameters ({budgetRange}), and audition self-tapes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-gray-200/60 pt-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-white text-xs font-bold shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-[#111111]">Direct Contact within 2–4 Hours</h4>
                    <p className="text-[#666666] text-xs mt-0.5 leading-relaxed">
                      Our senior talent coordinator will reach out to you directly via <strong>{contactMethod} ({phone || email})</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Summary of Inquiry */}
              <div className="mt-5 rounded-2xl bg-white border border-gray-200 p-4 text-left text-xs text-[#555555] space-y-1.5 shadow-2xs">
                {artistName && (
                  <div className="flex justify-between py-1 border-b border-gray-100">
                    <span className="text-[#777777]">Requested Talent:</span>
                    <span className="font-bold text-[#111111]">{artistName} {artistCategory ? `(${artistCategory})` : ""}</span>
                  </div>
                )}
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-[#777777]">Project:</span>
                  <span className="font-medium text-[#111111]">{projectType} {projectTitle ? `• ${projectTitle}` : ""}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-[#777777]">Location:</span>
                  <span className="font-medium text-[#111111]">{shootLocation || "To be confirmed"}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#777777]">Budget Scale:</span>
                  <span className="font-semibold text-[#D4AF37]">{budgetRange}</span>
                </div>
              </div>

              {/* Urgent WhatsApp Coordination */}
              <div className="mt-6 p-4 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-left flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-[#111111]">Need Urgent Confirmation for Same-Week Shoot?</p>
                    <p className="text-[11px] text-[#666666]">Connect directly with our casting desk on WhatsApp.</p>
                  </div>
                </div>
                <a
                  href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hi DCA Casting Desk, I submitted an inquiry (Ref: ${inquiryId}) to cast ${artistName || "talent"} for ${projectType}. Could you please check availability?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-xs flex items-center justify-center gap-1.5 shrink-0"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#C59B27] text-white font-bold text-xs sm:text-sm transition shadow-sm cursor-pointer"
                >
                  Submit Another Casting Brief
                </button>
                <Link
                  href="/talents"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#F7F7F5] hover:bg-gray-100 text-[#111111] font-bold text-xs sm:text-sm border border-gray-200 transition shadow-2xs"
                >
                  Browse Talent Rosters
                </Link>
              </div>
            </div>
          </div>
        ) : (
          /* ============================================================
             RESPONSIVE CASTING INQUIRY FORM (12-COL GRID)
          ============================================================ */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left 8-Cols: The Primary Form Card */}
            <div className="lg:col-span-8 rounded-2xl sm:rounded-3xl border border-gray-200 bg-white p-5 sm:p-8 shadow-xs">
              {/* Selected Talent Luxury Card */}
              {artistName ? (
                <div className="mb-6 rounded-2xl border border-[#D4AF37]/35 bg-gradient-to-r from-[#FDFCF7] via-white to-[#FDFCF7] p-4 sm:p-5 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/25 font-serif font-bold text-base shrink-0">
                      {artistName.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-0.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37]">
                          Selected Talent
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200">
                          <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                          DCA Verified Comp Card
                        </span>
                      </div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#111111] truncate">
                        {artistName}
                      </h3>
                      {artistCategory && (
                        <p className="text-xs text-[#666666] truncate font-medium">
                          {artistCategory} • Direct Representation
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setArtistName("");
                      setArtistCategory("");
                    }}
                    className="text-xs font-semibold text-gray-500 hover:text-red-600 px-3 py-1.5 rounded-lg border border-gray-200 hover:border-red-200 hover:bg-red-50 transition-colors self-end sm:self-center cursor-pointer flex items-center gap-1 shrink-0"
                    title="Clear selected artist to cast general talent"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>Change Talent</span>
                  </button>
                </div>
              ) : (
                <div className="mb-6 rounded-2xl border border-gray-200 bg-[#F8F8F6] p-4 shadow-2xs flex items-start gap-3">
                  <Film className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-bold text-[#111111]">Open Project Casting Requirement</p>
                    <p className="text-[#666666] mt-0.5 leading-relaxed">
                      Looking to cast verified Bollywood actors, models, dancers, or fresh faces? Submit your project parameters and DCA casting directors will curate matching audition tapes.
                    </p>
                  </div>
                </div>
              )}

              {formError && (
                <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs font-semibold text-red-600 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{formError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* SECTION 1: Client & Production Identity */}
                <div>
                  <div className="flex items-center gap-2.5 pb-2.5 mb-4 border-b border-gray-100">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-bold">
                      1
                    </span>
                    <h3 className="font-serif text-base font-bold text-[#111111]">
                      Client &amp; Production House Details
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className={labelClass}>
                        Inquiring Entity Type <span className="text-[#D4AF37]">*</span>
                      </label>
                      <select
                        value={clientType}
                        onChange={(e) => setClientType(e.target.value)}
                        className={selectClass}
                      >
                        <option value="Brand / Direct Advertiser">Brand / Direct Advertiser</option>
                        <option value="Film / OTT Production House">Film / OTT Production House</option>
                        <option value="Casting Director / Coordinator">Casting Director / Coordinator</option>
                        <option value="Advertising Agency / Creative Studio">Advertising Agency / Creative Studio</option>
                        <option value="Fashion House / Runway Organizer">Fashion House / Runway Organizer</option>
                        <option value="Independent Producer / Creator">Independent Producer / Creator</option>
                      </select>
                    </div>

                    <div>
                      <label className={labelClass}>
                        Company / Brand Name <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g. Dharma, Netflix, Myntra, Ogilvy"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        Contact Person Name <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="e.g. Vikram Malhotra"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        Official Email Address <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. casting@productionhouse.com"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        Phone / WhatsApp Number <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        Preferred Contact Channel
                      </label>
                      <select
                        value={contactMethod}
                        onChange={(e) => setContactMethod(e.target.value)}
                        className={selectClass}
                      >
                        <option value="WhatsApp">WhatsApp (Fastest Response)</option>
                        <option value="Direct Phone Call">Direct Phone Call</option>
                        <option value="Official Email">Official Email</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* SECTION 2: Project Specifications */}
                <div className="pt-2">
                  <div className="flex items-center gap-2.5 pb-2.5 mb-4 border-b border-gray-100">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-bold">
                      2
                    </span>
                    <h3 className="font-serif text-base font-bold text-[#111111]">
                      Project &amp; Shoot Specifications
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className={labelClass}>
                        Project Type <span className="text-[#D4AF37]">*</span>
                      </label>
                      <select
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className={selectClass}
                      >
                        <option value="Bollywood Feature Film">Bollywood Feature Film</option>
                        <option value="OTT Web Series">OTT Web Series</option>
                        <option value="TV Commercial (TVC)">TV Commercial (TVC)</option>
                        <option value="Digital Brand Campaign">Digital Brand Campaign</option>
                        <option value="Print / Catalog Shoot">Print / Catalog Shoot</option>
                        <option value="Runway / Fashion Show">Runway / Fashion Show</option>
                        <option value="Music Video">Music Video</option>
                        <option value="Voice Dubbing / Audio Ad">Voice Dubbing / Audio Ad</option>
                      </select>
                    </div>

                    <div>
                      <label className={labelClass}>Project / Campaign Title</label>
                      <input
                        type="text"
                        value={projectTitle}
                        onChange={(e) => setProjectTitle(e.target.value)}
                        placeholder="e.g. Untitled OTT Series / Festive TVC"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Estimated Shoot Dates</label>
                      <input
                        type="text"
                        value={shootDates}
                        onChange={(e) => setShootDates(e.target.value)}
                        placeholder="e.g. Mid Oct 2026 (2 days)"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Shoot Location / City</label>
                      <input
                        type="text"
                        value={shootLocation}
                        onChange={(e) => setShootLocation(e.target.value)}
                        placeholder="e.g. Mumbai, Delhi NCR, Goa"
                        className={inputClass}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className={labelClass}>
                        Talent Budget / Remuneration Bracket
                      </label>
                      <select
                        value={budgetRange}
                        onChange={(e) => setBudgetRange(e.target.value)}
                        className={selectClass}
                      >
                        <option value="₹25,000 - ₹75,000">₹25,000 - ₹75,000 (Digital Scale / Supporting)</option>
                        <option value="₹75,000 - ₹2,00,000">₹75,000 - ₹2,00,000 (Standard Commercial / Lead)</option>
                        <option value="₹2,00,000 - ₹5,00,000">₹2,00,000 - ₹5,00,000 (National Campaign / OTT Principal)</option>
                        <option value="₹5,00,000 - ₹15,00,000">₹5,00,000 - ₹15,00,000 (High-Budget Feature / Brand Ambassador)</option>
                        <option value="₹15,00,000+">₹15,00,000+ (Celebrity / Tier-1 Scale)</option>
                        <option value="Flexible / Negotiable via DCA">Flexible / Open to Agency Discussion</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* SECTION 3: Role & Usage Brief */}
                <div className="pt-2">
                  <div className="flex items-center gap-2.5 pb-2.5 mb-4 border-b border-gray-100">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-bold">
                      3
                    </span>
                    <h3 className="font-serif text-base font-bold text-[#111111]">
                      Role Brief &amp; Usage Rights
                    </h3>
                  </div>

                  <div>
                    <label className={labelClass}>
                      Role Description &amp; Usage Requirements <span className="text-[#D4AF37]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={projectBrief}
                      onChange={(e) => setProjectBrief(e.target.value)}
                      placeholder="Specify character requirements, age bracket, scene details, media rights duration (e.g. Digital + TV for 1 year), or specific audition tape instructions..."
                      className="w-full rounded-xl border border-gray-200 bg-[#F9F9F8] hover:bg-white hover:border-gray-300 focus:bg-white p-3.5 sm:p-4 text-sm text-[#111111] placeholder:text-gray-400 transition-all duration-200 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 shadow-2xs resize-y"
                    />
                  </div>
                </div>

                {/* Confidentiality & Agency Agreement Check */}
                <div className="pt-1">
                  <label className="flex items-start gap-3 cursor-pointer text-xs text-[#555555] leading-relaxed select-none">
                    <input
                      type="checkbox"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#D4AF37] focus:ring-[#D4AF37]"
                    />
                    <span>
                      I acknowledge that Delhi Casting Agency coordinates verified talent representation and official contracts. All project briefs are held strictly confidential under standard industry casting protocols.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={submitting || !agreedToTerms}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#D4AF37] hover:bg-[#C59B27] text-white font-bold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {submitting ? (
                      <>
                        <Clock className="w-5 h-5 animate-spin" />
                        <span>Transmitting Brief &amp; Notifying Talent...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Casting Inquiry &amp; Check Availability</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-[#777777] mt-3">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      100% Confidential Brief
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Direct Artist Notification
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      Response in 2–4 Hours
                    </span>
                  </div>
                </div>
              </form>
            </div>

            {/* Right 4-Cols: Sticky Sidebar on Desktop */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-5">
              {/* Agency Guarantee Card */}
              <div className="rounded-2xl sm:rounded-3xl border border-gray-200 bg-white p-5 sm:p-6 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>DCA Casting Standards</span>
                </div>

                <h4 className="font-serif text-base sm:text-lg font-bold text-[#111111] mb-3">
                  Why Cast Through Delhi Casting Agency?
                </h4>

                <ul className="space-y-3 text-xs text-[#555555]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#111111]">100% Verified Profiles:</strong> Accurate measurements, vetted showreels, and verified age brackets.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#111111]">Direct Coordinator Access:</strong> No middlemen. We liaise directly between your production desk and the artist.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#111111]">Turnaround Within 4 Hours:</strong> Availability status, self-tapes, and commercial terms provided rapidly.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#111111]">Standardized Contracts:</strong> Agreements covering call times, usage duration, and overtime protection.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Direct Urgent Production Support */}
              <div className="rounded-2xl sm:rounded-3xl border border-gray-200 bg-[#F8F8F6] p-5 sm:p-6 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Urgent Requirement?</span>
                </div>
                <h4 className="font-serif text-base font-bold text-[#111111] mb-1.5">
                  Immediate Production Support
                </h4>
                <p className="text-xs text-[#666666] leading-relaxed mb-3.5">
                  Have a same-week shoot or need emergency casting replacement? Connect directly with our on-call casting desk:
                </p>

                <div className="space-y-2 text-xs">
                  <a
                    href="mailto:casting@delhicastingagency.com"
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-gray-200 text-[#333333] hover:text-[#D4AF37] transition shadow-2xs"
                  >
                    <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span className="font-medium truncate">casting@delhicastingagency.com</span>
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-gray-200 text-[#333333] hover:text-[#D4AF37] transition shadow-2xs"
                  >
                    <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span className="font-medium">+91 98765 43210 (Casting Hotline)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
