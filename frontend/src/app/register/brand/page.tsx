"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  Building2,
  CheckCircle2,
  RefreshCw,
  Sparkles,
  User,
} from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { setDCAUserSession, getUserSession, getAuthToken } from "@/lib/auth";
import { API_URL } from "@/config/env";

const inputClass =
  "w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-[#111111] placeholder:text-gray-400 transition-all duration-300 focus:border-[#D4AF37] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/15 shadow-xs";

const selectClass =
  "w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-[#111111] transition-all duration-300 focus:border-[#D4AF37] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/15 shadow-xs";

const BRAND_FIELD_REASON_MAP: Record<string, { title: string; reason: string }> = {
  companyName: {
    title: "Company Name",
    reason: "Please enter your company, studio, or agency name to complete verification.",
  },
  category: {
    title: "Industry Category",
    reason: "Please select your production house or agency category.",
  },
  description: {
    title: "Company Description",
    reason: "Please add a brief description of your production house or agency.",
  },
  website: {
    title: "Official Website",
    reason: "Please enter your official website or portfolio link.",
  },
  fullName: {
    title: "Contact Person",
    reason: "Please enter the full name of the authorized coordinator or casting director.",
  },
  designation: {
    title: "Designation",
    reason: "Please specify your official role or title (e.g. Casting Director, Producer).",
  },
  email: {
    title: "Official Email",
    reason: "Please provide your corporate or business email address.",
  },
  phone: {
    title: "Contact Phone",
    reason: "Please provide a direct phone number for talent correspondence.",
  },
  city: {
    title: "City",
    reason: "Please specify the city where your production house or agency is based.",
  },
  state: {
    title: "State",
    reason: "Please specify your state or province.",
  },
};

export default function BrandRegisterPage() {
  const router = useRouter();
  const [saved, setSaved] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [redirectReason, setRedirectReason] = useState<{
    field: string;
    title: string;
    message: string;
  } | null>(null);

  // Real-time Phone and Email Uniqueness / Validation states
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);
  const phoneCheckTimer = useRef<NodeJS.Timeout | null>(null);
  const emailCheckTimer = useRef<NodeJS.Timeout | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    companyName: "",
    designation: "",
    category: "Production House",
    city: "New Delhi",
    state: "Delhi NCR",
    website: "",
    description: "",
  });

  // Helper to scroll smoothly to and highlight a specific input field
  // Helper to scroll smoothly to a specific input field
  const highlightField = (fieldId: string, shouldFocus = false) => {
    if (typeof window === "undefined") return;
    const el =
      document.getElementById(`field-${fieldId}`) ||
      document.getElementById(fieldId) ||
      document.querySelector(`[name="${fieldId}"]`);

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      if (shouldFocus) {
        if (
          el instanceof HTMLInputElement ||
          el instanceof HTMLTextAreaElement ||
          el instanceof HTMLSelectElement
        ) {
          el.focus();
        }
      }
    }
  };

  // Helper to remove highlight from a field
  const removeFieldHighlight = (fieldId: string) => {
    if (typeof window === "undefined") return;
    const el =
      document.getElementById(`field-${fieldId}`) ||
      document.getElementById(fieldId) ||
      document.querySelector(`[name="${fieldId}"]`);

    if (el) {
      el.classList.remove(
        "ring-4",
        "ring-[#D4AF37]",
        "border-[#D4AF37]",
        "!ring-4",
        "!ring-red-500/30",
        "!border-red-500",
        "!border-2",
        "shadow-lg"
      );
    }
  };

  // Real-time backend availability check for phone and email (without stealing focus)
  const checkFieldAvailability = async (
    field: "phone" | "email",
    value: string
  ): Promise<boolean> => {
    const val = value.trim();
    if (!val) return true;

    if (field === "phone") {
      const digits = val.replace(/\D/g, "");
      if (digits.length < 10) return false;
    } else if (field === "email") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return false;
    }

    try {
      const res = await fetch(`${API_URL}/api/auth/check-availability`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [field]: val }),
      });
      const data = await res.json();
      if (data.success) {
        if (field === "phone") {
          if (data.phoneExists) {
            setPhoneError("Phone number is already registered. Please use a different phone number.");
            return false;
          } else {
            setPhoneError(null);
            return true;
          }
        } else if (field === "email") {
          if (data.emailExists) {
            setEmailError("This email is already registered. Please log in or use a different email address.");
            return false;
          } else {
            setEmailError(null);
            return true;
          }
        }
      }
      return true;
    } catch (e) {
      console.warn("Failed to check availability:", e);
      return true;
    }
  };

  // Helper to verify if the highlighted field now satisfies requirements
  const isFieldSatisfied = (fieldName: string, value: string): boolean => {
    const val = (value || "").trim();
    if (!val) return false;

    if (fieldName === "password") {
      return val.length >= 8;
    }
    if (fieldName === "phone") {
      return val.replace(/\D/g, "").length >= 10 && !phoneError;
    }
    if (fieldName === "email") {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) && !emailError;
    }
    return val.length > 0;
  };

  // Helper to render contextual reason banner directly above focused field
  const renderFieldReason = (fieldName: string) => {
    if (redirectReason && redirectReason.field === fieldName) {
      return (
        <div className="mb-2.5 flex items-center justify-between gap-2 rounded-xl border border-amber-300 bg-amber-50 px-3.5 py-2 text-xs font-semibold text-amber-950 shadow-xs">
          <div className="flex items-center gap-2">
            <Sparkles size={15} className="text-[#D4AF37] shrink-0" />
            <span>
              <strong>Action Required:</strong> {redirectReason.message}
            </span>
          </div>
          <button
            type="button"
            onClick={() => {
              setRedirectReason(null);
              removeFieldHighlight(fieldName);
            }}
            className="text-amber-700 hover:text-amber-950 text-base font-bold leading-none p-1"
            aria-label="Dismiss reason"
          >
            &times;
          </button>
        </div>
      );
    }
    return null;
  };

  // Dynamic Scroll & Highlight for Target Field (Naukri-style profile completion)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const searchParams = new URLSearchParams(window.location.search);
    const focusParam = searchParams.get("focus");
    const reasonParam = searchParams.get("reason");

    if (focusParam) {
      const fieldInfo = BRAND_FIELD_REASON_MAP[focusParam] || {
        title: focusParam,
        reason: "Please complete this section to finalize your brand profile.",
      };

      setRedirectReason({
        field: focusParam,
        title: fieldInfo.title,
        message: reasonParam || fieldInfo.reason,
      });

      const timer = setTimeout(() => {
        const el =
          document.getElementById(`field-${focusParam}`) ||
          document.getElementById(focusParam) ||
          document.querySelector(`[name="${focusParam}"]`);

        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          if (
            el instanceof HTMLInputElement ||
            el instanceof HTMLTextAreaElement ||
            el instanceof HTMLSelectElement
          ) {
            el.focus();
          }

          el.classList.add(
            "ring-4",
            "ring-[#D4AF37]",
            "border-[#D4AF37]",
            "shadow-lg",
            "transition-all",
            "duration-300"
          );
          setTimeout(() => {
            el.classList.remove(
              "ring-4",
              "ring-[#D4AF37]",
              "border-[#D4AF37]",
              "shadow-lg"
            );
          }, 5000);
        }
      }, 400);

      // Clean up URL search parameters
      try {
        const cleanParams = new URLSearchParams(window.location.search);
        cleanParams.delete("focus");
        cleanParams.delete("reason");
        const cleanQuery = cleanParams.toString();
        const newUrl = window.location.pathname + (cleanQuery ? `?${cleanQuery}` : "");
        window.history.replaceState({}, "", newUrl);
      } catch {
        // Ignore history errors
      }

      return () => {
        clearTimeout(timer);
        if (phoneCheckTimer.current) clearTimeout(phoneCheckTimer.current);
        if (emailCheckTimer.current) clearTimeout(emailCheckTimer.current);
      };
    } else if (reasonParam) {
      setRedirectReason({
        field: "general",
        title: "Brand Profile Notice",
        message: reasonParam,
      });
    }
    return () => {
      if (phoneCheckTimer.current) clearTimeout(phoneCheckTimer.current);
      if (emailCheckTimer.current) clearTimeout(emailCheckTimer.current);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time debounced availability check for phone
    if (name === "phone") {
      if (phoneCheckTimer.current) clearTimeout(phoneCheckTimer.current);
      const digits = value.replace(/\D/g, "");
      if (digits.length >= 10) {
        phoneCheckTimer.current = setTimeout(() => {
          void checkFieldAvailability("phone", value);
        }, 500);
      } else {
        if (phoneError) {
          setPhoneError(null);
          removeFieldHighlight("phone");
        }
      }
    }

    // Real-time debounced availability check for email
    if (name === "email") {
      if (emailCheckTimer.current) clearTimeout(emailCheckTimer.current);
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
        emailCheckTimer.current = setTimeout(() => {
          void checkFieldAvailability("email", value);
        }, 500);
      } else {
        if (emailError) {
          setEmailError(null);
          removeFieldHighlight("brand_register_email");
        }
      }
    }

    // Auto-dismiss reason banner and remove gold highlight as soon as the user fills/satisfies the field!
    if (redirectReason && redirectReason.field === name) {
      if (isFieldSatisfied(name, value)) {
        setRedirectReason(null);
        removeFieldHighlight(name);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const normalizedEmail = (formData.email || "").trim().toLowerCase();
    if (!normalizedEmail) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!formData.fullName.trim()) {
      setErrorMessage("Please enter the contact person's full name.");
      return;
    }

    if (!formData.companyName.trim()) {
      setErrorMessage("Please enter your company or casting name.");
      return;
    }

    const session = getUserSession();
    const existingToken = getAuthToken();

    let token = existingToken;
    let userId = session?.id;

    // If not authenticated as this brand user, register with the user's chosen password
    const isMatchingSession =
      Boolean(session?.isLoggedIn) &&
      (session?.role?.toLowerCase() === "brand") &&
      (session?.email?.toLowerCase() === normalizedEmail || session?.identifier?.toLowerCase() === normalizedEmail);

    if (!token || !isMatchingSession) {
      if (!formData.password || formData.password.length < 8) {
        setErrorMessage("Please enter a secure password with at least 8 characters.");
        return;
      }

      // Check uniqueness availability before registration
      setIsCheckingAvailability(true);
      try {
        const checkRes = await fetch(`${API_URL}/api/auth/check-availability`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            phone: formData.phone.trim() || undefined,
            email: normalizedEmail,
          }),
        });
        const checkData = await checkRes.json();
        setIsCheckingAvailability(false);

        if (checkData.phoneExists) {
          setPhoneError("Phone number is already registered. Please use a different phone number.");
          highlightField("phone", true);
          return;
        }

        if (checkData.emailExists) {
          setEmailError("This email is already registered. Please log in or use a different email address.");
          highlightField("brand_register_email", true);
          return;
        }
      } catch (checkErr) {
        setIsCheckingAvailability(false);
        console.warn("Availability pre-check error:", checkErr);
      }

      setSubmitting(true);

      try {
        const regRes = await fetch(`${API_URL}/api/auth/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: normalizedEmail,
            password: formData.password,
            role: "BRAND",
            fullName: formData.fullName.trim(),
            phone: formData.phone.trim() || undefined,
          }),
        });

        const regData = await regRes.json();

        // STRICT SECURITY: On collision, HALT immediately. Never auto-login, never overwrite.
        if (regRes.status === 409) {
          setErrorMessage(
            regData.message ||
              "This email is already registered. Please log in or use a different email address."
          );
          setSubmitting(false);
          return;
        }

        if (!regRes.ok || !regData.success || !regData.token) {
          setErrorMessage(regData.message || "Registration failed. Please check your information.");
          setSubmitting(false);
          return;
        }

        token = regData.token;
        userId = regData.user?.id;
        setDCAUserSession(normalizedEmail, "brand", true, token, userId);
      } catch (err) {
        console.error("Brand registration network error:", err);
        setErrorMessage("Network error during registration. Please try again.");
        setSubmitting(false);
        return;
      }
    } else {
      setSubmitting(true);
    }

    // Persist BrandProfile directly to backend
    if (token) {
      try {
        const profileRes = await fetch(`${API_URL}/api/brand/profile`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            companyName: formData.companyName.trim(),
            contactName: formData.fullName.trim(),
            phone: formData.phone.trim() || null,
            email: normalizedEmail,
            website: formData.website.trim() || null,
            city: formData.city.trim() || null,
            state: formData.state.trim() || null,
            companyDescription: formData.description.trim() || null,
          }),
        });

        const profileData = await profileRes.json();
        if (!profileRes.ok || !profileData.success) {
          setErrorMessage(profileData.message || "Failed to save brand profile. Please check your details.");
          setSubmitting(false);
          return;
        }
      } catch (err) {
        console.error("Failed to persist brand profile to backend:", err);
        setErrorMessage("Network error while saving profile. Please try again.");
        setSubmitting(false);
        return;
      }
    } else {
      setErrorMessage("Authentication required. Please log in.");
      setSubmitting(false);
      return;
    }

    setDCAUserSession(normalizedEmail, "brand", true, token, userId);

    try {
      localStorage.setItem(
        "dca_brand_profile",
        JSON.stringify({
          formData: { ...formData, password: "" },
          savedAt: new Date().toISOString(),
          completionPercentage: 90,
        })
      );
    } catch {
      // Ignore localStorage errors
    }

    setSubmitting(false);
    setSaved(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 500);
  };

  return (
    <main className="min-h-screen bg-white text-[#111111]">
      <PageHero
        eyebrow="Brand &amp; Casting Setup"
        title="Create Your Casting Profile"
        description="Register your company, brand or casting agency to source verified talent and post casting requirements."
      />

      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Register", href: "/profile/setup" },
            { label: "Brand & Casting Profile" },
          ]}
        />
      </div>

      <section className="mx-auto max-w-5xl px-6 py-8 lg:px-8 lg:py-12">
        <form onSubmit={handleSubmit} autoComplete="off" className="space-y-8">
          {/* Redirection / Navigation Reason Alert Banner */}
          {redirectReason && (
            <div className="rounded-2xl border-2 border-[#D4AF37] bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 p-5 shadow-sm flex items-start gap-4 animate-fadeIn">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37] text-white shadow-xs shrink-0 mt-0.5">
                <Sparkles size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-[#D4AF37] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                    Action Required
                  </span>
                  <h3 className="font-serif text-sm font-bold text-[#111111]">
                    Complete: {redirectReason.title}
                  </h3>
                </div>
                <p className="mt-1 text-xs text-[#555555] leading-relaxed">
                  {redirectReason.message}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setRedirectReason(null)}
                className="rounded-lg p-1 text-gray-400 hover:bg-black/5 hover:text-gray-700 transition cursor-pointer"
                aria-label="Dismiss reason banner"
              >
                <span className="text-xl leading-none font-bold">&times;</span>
              </button>
            </div>
          )}

          {errorMessage && (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-xs font-semibold text-red-700 shadow-xs">
              {errorMessage}
            </div>
          )}

          {/* SECTION 1 — CONTACT PERSON & ACCOUNT */}
          <Reveal>
            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-md md:p-10">
              <div className="flex items-center gap-3 border-b border-gray-200 pb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <User size={20} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                    SECTION 1
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-[#111111]">
                    Account Contact Person
                  </h2>
                </div>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {/* Full Name */}
                <div>
                  {renderFieldReason("fullName")}
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="field-fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Rajesh Malhotra"
                    className={inputClass}
                  />
                </div>

                {/* Email Address */}
                <div>
                  {renderFieldReason("email")}
                  <label className={`mb-2 block text-xs font-semibold uppercase tracking-wider ${emailError ? 'text-red-600' : 'text-[#111111]'}`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="brand_register_email"
                    name="email"
                    autoComplete="off"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={(e) => {
                      const val = e.target.value.trim();
                      if (val.length > 0) {
                        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
                          void checkFieldAvailability("email", val);
                        } else {
                          setEmailError("Please enter a valid email address.");
                        }
                      }
                    }}
                    placeholder="e.g. rajesh@productionhouse.com"
                    className={`w-full rounded-xl bg-white px-4 py-3.5 text-[#111111] placeholder:text-gray-400 shadow-xs transition-colors duration-150 ${
                      emailError
                        ? "!border-2 !border-red-500 focus:!border-red-500 focus:!outline-none focus:!ring-0"
                        : "border border-gray-300 focus:border-[#D4AF37] focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/15"
                    }`}
                  />
                  {emailError && (
                    <div className="mt-2 rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-700 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-semibold">{emailError}</p>
                        <div className="mt-1">
                          <Link href="/login" className="font-bold underline text-red-800 hover:text-red-950">
                            Already have an account? Click here to Log In &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Password */}
                <div>
                  {renderFieldReason("password")}
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    Account Password *
                  </label>
                  <input
                    type="password"
                    id="brand_register_password"
                    name="password"
                    autoComplete="new-password"
                    required
                    minLength={8}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Min 8 characters"
                    className={inputClass}
                  />
                </div>

                {/* Phone */}
                <div>
                  {renderFieldReason("phone")}
                  <label className={`mb-2 block text-xs font-semibold uppercase tracking-wider ${phoneError ? 'text-red-600' : 'text-[#111111]'}`}>
                    Mobile / Phone *
                  </label>
                  <input
                    type="tel"
                    id="field-phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={(e) => {
                      const digits = e.target.value.replace(/\D/g, "");
                      if (digits.length >= 10) {
                        void checkFieldAvailability("phone", e.target.value);
                      } else if (e.target.value.trim().length > 0) {
                        setPhoneError("Please enter a valid 10-digit phone number.");
                      }
                    }}
                    placeholder="+91 9876543210"
                    className={`w-full rounded-xl bg-white px-4 py-3.5 text-[#111111] placeholder:text-gray-400 shadow-xs transition-colors duration-150 ${
                      phoneError
                        ? '!border-2 !border-red-500 focus:!border-red-500 focus:!outline-none focus:!ring-0'
                        : 'border border-gray-300 focus:border-[#D4AF37] focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/15'
                    }`}
                  />
                  {phoneError && (
                    <div className="mt-2 rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-700 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-semibold">{phoneError}</p>
                        <div className="mt-1">
                          <Link href="/login" className="font-bold underline text-red-800 hover:text-red-950">
                            Already registered? Click here to Log In &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Reveal>

          {/* SECTION 2 — COMPANY / ORGANIZATION DETAILS */}
          <Reveal delay={0.05}>
            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-md md:p-10">
              <div className="flex items-center gap-3 border-b border-gray-200 pb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Building2 size={20} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                    SECTION 2
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-[#111111]">
                    Company &amp; Organization Details
                  </h2>
                </div>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {/* Company Name */}
                <div>
                  {renderFieldReason("companyName")}
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    Company / Production Name *
                  </label>
                  <input
                    type="text"
                    id="field-companyName"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="e.g. Apex Film Studios"
                    className={inputClass}
                  />
                </div>

                {/* Designation */}
                <div>
                  {renderFieldReason("designation")}
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    Your Role / Designation
                  </label>
                  <input
                    type="text"
                    id="field-designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    placeholder="e.g. Lead Casting Director"
                    className={inputClass}
                  />
                </div>

                {/* Category */}
                <div>
                  {renderFieldReason("category")}
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    Organization Category *
                  </label>
                  <select
                    id="field-category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className={selectClass}
                  >
                    <option value="Production House">Production House</option>
                    <option value="Casting Director">Casting Director</option>
                    <option value="Brand / Agency">Brand / Commercial Agency</option>
                    <option value="Modeling Agency">Modeling Agency</option>
                    <option value="OTT / Web Series Team">OTT / Web Series Team</option>
                    <option value="Other">Other Talent Recruiter</option>
                  </select>
                </div>

                {/* City */}
                <div>
                  {renderFieldReason("city")}
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    City *
                  </label>
                  <input
                    type="text"
                    id="field-city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="New Delhi"
                    className={inputClass}
                  />
                </div>

                {/* State */}
                <div>
                  {renderFieldReason("state")}
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    State *
                  </label>
                  <input
                    type="text"
                    id="field-state"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Delhi NCR"
                    className={inputClass}
                  />
                </div>

                {/* Website */}
                <div>
                  {renderFieldReason("website")}
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    Website / Social Link
                  </label>
                  <input
                    type="url"
                    id="field-website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://company.com"
                    className={inputClass}
                  />
                </div>

                {/* Company Description */}
                <div className="md:col-span-3">
                  {renderFieldReason("description")}
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#111111]">
                    About Company / Casting Overview
                  </label>
                  <textarea
                    id="field-description"
                    name="description"
                    rows={3}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Briefly describe your production projects, casting requirements or talent preferences..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form Actions */}
          <div className="flex items-center justify-end gap-4 border-t border-gray-200 pt-6">
            <Button
              type="button"
              variant="ghost"
              onClick={() => router.push("/")}
              className="border border-gray-200 text-[#111111] hover:bg-gray-100"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={submitting || isCheckingAvailability}
              className="py-4 px-8 text-sm font-bold uppercase tracking-wider bg-[#111111] hover:bg-[#D4AF37] text-white"
            >
              {saved ? (
                <>
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  Account Created!
                </>
              ) : submitting || isCheckingAvailability ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  <span>Verifying Details...</span>
                </>
              ) : (
                <>
                  <span>Create Casting Account</span>
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
