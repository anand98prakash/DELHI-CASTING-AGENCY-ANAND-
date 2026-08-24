"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Sparkles, Upload, Loader2, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  registrationSchema,
  type RegistrationInput,
  type RegistrationValues,
} from "@/lib/validation";

import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

const fieldInputClass =
  "w-full h-[52px] rounded-xl border border-gray-200 bg-white px-4 text-sm text-[#111111] placeholder:text-[#777777] transition-all duration-300 focus:border-[#D4AF37] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 shadow-2xs";

export default function StepTwoProfilePage() {
  const router = useRouter();

  const [photos, setPhotos] = useState<FileList | null>(null);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [stepOneData, setStepOneData] = useState<any>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<RegistrationInput, unknown, RegistrationValues>({
    resolver: zodResolver(registrationSchema),
    mode: "onChange",
  });

  useEffect(() => {
    const savedData = sessionStorage.getItem("artist-registration-step-1");

    if (!savedData) {
      router.replace("/register/");
      return;
    }

    try {
      const parsed = JSON.parse(savedData);
      setStepOneData(parsed);

      // Populate Step 1 default values into react-hook-form
      reset({
        fullName: parsed.fullName || "",
        mobile: parsed.mobile || "",
        whatsapp: parsed.whatsapp || "",
        email: parsed.email || "",
        gender: parsed.gender || "Female",
        age: parsed.age ? Number(parsed.age) : 22,
        city: parsed.city || "",
        height: parsed.height || "",
        languages: parsed.languages || "",
        experience: parsed.experience || "",
        instagram: parsed.instagram || "",
        portfolio: parsed.portfolio || "",
      });
    } catch (e) {
      console.error("Failed to parse Step 1 registration data", e);
      router.replace("/register/");
    }
  }, [reset, router]);

  const onInvalid = (formErrors: typeof errors) => {
    console.error("Form validation errors:", formErrors);
    setSubmitError("Please fill in all required fields correctly before continuing.");
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  const onSubmit = async (data: RegistrationValues) => {
    setSubmitError(null);
    setPhotoError(null);

    // Validate Photo Selection
    if (!photos || photos.length === 0) {
      setPhotoError("Please upload at least 1 recent photo to complete your profile.");
      const photoArea = document.getElementById("photo-upload-container");
      if (photoArea) {
        photoArea.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setSaving(true);

    try {
      const storedStepOne = sessionStorage.getItem("artist-registration-step-1");
      const parsedStepOne = storedStepOne ? JSON.parse(storedStepOne) : {};

      const photoFileList = Array.from(photos);
      const photoNames = photoFileList.map((file) => file.name);

      // Preserve Photo metadata & previews
      const photoSlots = photoFileList.map((file, idx) => ({
        key: `photo_${idx + 1}`,
        title: file.name,
        name: file.name,
        size: file.size,
        type: file.type,
        previewUrl: URL.createObjectURL(file),
      }));

      const completeRegistration = {
        ...parsedStepOne,
        ...data,
        photos: photoNames,
        photoDetails: photoSlots,
        createdAt: new Date().toISOString(),
      };

      // 1. Save complete registration in sessionStorage
      sessionStorage.setItem(
        "artist-registration-complete",
        JSON.stringify(completeRegistration)
      );

      // 2. Save user session in localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "dca_user",
          JSON.stringify({
            identifier: completeRegistration.email || completeRegistration.mobile,
            email: completeRegistration.email,
            name: completeRegistration.fullName,
            isLoggedIn: true,
            loginTime: new Date().toISOString(),
          })
        );

        // 3. Save DCA artist profile in localStorage for Profile Setup / Dashboard
        localStorage.setItem(
          "dca_artist_profile",
          JSON.stringify({
            formData: {
              fullName: completeRegistration.fullName,
              displayName: completeRegistration.fullName,
              dob: "1998-05-14",
              age: String(completeRegistration.age || 24),
              gender: completeRegistration.gender,
              city: completeRegistration.city,
              state: "Delhi NCR",
              phone: completeRegistration.mobile,
              email: completeRegistration.email,
              languages: completeRegistration.languages || "Hindi, English",
              primaryCategory: "Actor",
              experience: completeRegistration.experience || "1-2 Years",
              skills: "Acting, Script Delivery",
              specialSkills: "Driving, Dancing",
              previousWork: completeRegistration.experience || "Independent Work",
              portfolioDescription: "Registered DCA Artist Profile",
              height: completeRegistration.height || "5'8\"",
              weight: "65 kg",
              chest: "38 inches",
              waist: "30 inches",
              hips: "36 inches",
              shoeSize: "9 UK",
              hairColor: "Black",
              eyeColor: "Dark Brown",
              skinTone: "Fair",
            },
            photos: photoSlots.length > 0 ? photoSlots : [
              {
                key: "primary",
                title: "Profile / Primary Photo",
                subtitle: "Upload your main headshot or profile photo",
                previewUrl: "/images/talents/models/female/aarsha-mohan-main.jpg",
              }
            ],
            savedAt: new Date().toISOString(),
            completionPercentage: 100,
          })
        );
      }

      // Short delay for user visual feedback then navigate to success
      setTimeout(() => {
        router.push("/register/success/");
      }, 500);
    } catch (error) {
      console.error("Unable to save profile registration:", error);
      setSubmitError("Failed to save your profile. Please try again.");
      setSaving(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#111111]">
      {/* Top Header & Breadcrumb Bar with Clearance */}
      <section className="relative isolate border-b border-gray-200 bg-[#F7F7F5] px-4 pt-28 pb-6 sm:pt-32 sm:pb-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center mb-3">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Register", href: "/register/" },
                { label: "Artist Profile" },
              ]}
            />
          </div>
          <Reveal>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              STEP 2 OF 2 — ARTIST PORTFOLIO
            </span>
            <h1 className="mt-1 font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111]">
              Complete Your Artist Profile
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-[#555555] max-w-xl mx-auto leading-relaxed">
              Add information that helps present your talent, experience, and portfolio photos professionally.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Centered Layout */}
      <section className="mx-auto max-w-2xl px-4 py-8 sm:py-12">
        <Reveal>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-xs">
            
            {/* Submit Error Message */}
            {submitError && (
              <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-xs font-semibold text-red-600 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                <span>{submitError}</span>
              </div>
            )}

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="mb-2 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                <span>Step 2 of 2 — Artist Information</span>
                <span>100%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-full rounded-full bg-[#D4AF37]" />
              </div>
            </div>

            {/* Section Title */}
            <div className="mb-6 border-b border-gray-200 pb-4">
              <div className="flex items-center gap-2.5">
                <Sparkles size={18} className="text-[#D4AF37]" />
                <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#111111]">
                  Artist Information
                </h2>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit(onSubmit, onInvalid)}
              className="grid gap-4 sm:grid-cols-2"
            >
              {/* Hidden Registered Step 1 Fields */}
              <input type="hidden" {...register("fullName")} />
              <input type="hidden" {...register("mobile")} />
              <input type="hidden" {...register("whatsapp")} />
              <input type="hidden" {...register("email")} />
              <input type="hidden" {...register("gender")} />
              <input type="hidden" {...register("age")} />
              <input type="hidden" {...register("city")} />

              {/* Height */}
              <Field label="Height" error={errors.height?.message}>
                <input
                  {...register("height")}
                  placeholder={`5'6"`}
                  className={fieldInputClass}
                />
              </Field>

              {/* Languages Known */}
              <Field label="Languages Known" error={errors.languages?.message}>
                <input
                  {...register("languages")}
                  placeholder="Hindi, English"
                  className={fieldInputClass}
                />
              </Field>

              {/* Acting Experience */}
              <Field
                label="Acting / Modeling Experience"
                full
                error={errors.experience?.message}
              >
                <textarea
                  {...register("experience")}
                  rows={4}
                  placeholder="Tell us about your acting, modeling or performance experience..."
                  className="w-full rounded-xl border border-gray-200 bg-white p-4 text-sm text-[#111111] placeholder:text-[#777777] transition-all duration-300 focus:border-[#D4AF37] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 shadow-2xs resize-none"
                />
              </Field>

              {/* Instagram Profile */}
              <Field
                label="Instagram Profile"
                error={errors.instagram?.message}
              >
                <input
                  {...register("instagram")}
                  placeholder="@yourusername"
                  className={fieldInputClass}
                />
              </Field>

              {/* Portfolio Link */}
              <Field label="Portfolio Link" error={errors.portfolio?.message}>
                <input
                  {...register("portfolio")}
                  placeholder="https://yourportfolio.com"
                  className={fieldInputClass}
                />
              </Field>

              {/* Photo Upload Area */}
              <div id="photo-upload-container" className="sm:col-span-2">
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#111111]">
                  Upload Recent Photos *
                </label>
                <label
                  htmlFor="photos"
                  className={`group flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-8 text-center transition-all duration-300 shadow-2xs ${
                    photoError
                      ? "border-red-400 bg-red-50/50"
                      : "border-[#D4AF37]/40 bg-[#F7F7F5] hover:border-[#D4AF37] hover:bg-amber-50/50"
                  }`}
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37]/10 transition-transform duration-300 group-hover:scale-110">
                    {photos?.length ? (
                      <Check size={24} className="text-[#D4AF37]" />
                    ) : (
                      <Upload size={24} className="text-[#D4AF37]" />
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-[#111111]">
                    {photos?.length
                      ? `${photos.length} Photo(s) Selected`
                      : "Upload Your Photos"}
                  </h3>
                  <p className="mt-1 text-xs text-[#555555]">
                    Upload 4–5 recent photographs. JPG, JPEG, and PNG formats are supported.
                  </p>
                  {photos?.length ? (
                    <div className="mt-3 max-w-lg space-y-0.5">
                      {Array.from(photos).map((file) => (
                        <p key={file.name} className="truncate text-[11px] font-semibold text-[#111111]">
                          ✓ {file.name} ({(file.size / 1024).toFixed(0)} KB)
                        </p>
                      ))}
                    </div>
                  ) : null}
                </label>
                {photoError && (
                  <p className="mt-1.5 text-xs font-semibold text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {photoError}
                  </p>
                )}
                <input
                  id="photos"
                  type="file"
                  multiple
                  accept="image/jpeg,image/jpg,image/png"
                  className="hidden"
                  onChange={(event) => {
                    setPhotos(event.target.files);
                    if (event.target.files && event.target.files.length > 0) {
                      setPhotoError(null);
                    }
                  }}
                />
              </div>

              {/* Navigation Buttons */}
              <div className="mt-4 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between sm:col-span-2">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => router.push("/register/")}
                  className="min-h-[48px] rounded-xl border border-gray-200 text-[#111111] hover:bg-gray-100 px-6 text-xs font-bold"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Step 1
                </Button>

                <Button
                  type="submit"
                  disabled={saving}
                  className="group min-h-[52px] min-w-[220px] rounded-xl bg-[#111111] px-8 text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-white hover:bg-[#D4AF37] transition-all shadow-md"
                >
                  {saving ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      CREATING PROFILE...
                    </span>
                  ) : (
                    <>
                      <span>COMPLETE &amp; CONTINUE</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </div>
            </form>

            {/* Footer Notice */}
            <div className="mt-6 rounded-xl border border-gray-200 bg-[#F7F7F5] p-3.5 text-center">
              <p className="text-xs text-[#555555]">
                Your profile information is saved securely to your account session.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

function Field({
  label,
  error,
  full,
  children,
}: {
  label: string;
  error?: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#111111]">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs font-semibold text-red-500">{error}</p>}
    </div>
  );
}
