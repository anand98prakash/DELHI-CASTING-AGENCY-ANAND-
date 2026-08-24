"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Sparkles, Upload, Loader2, AlertCircle, Phone, Mail, User, MapPin, ShieldCheck } from "lucide-react";
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

const STEP_1_FIELDS: (keyof RegistrationInput)[] = [
  "fullName",
  "mobile",
  "whatsapp",
  "email",
  "gender",
  "age",
  "city",
];

export default function RegisterPage() {
  const router = useRouter();

  // Multi-step state: Step 1 or Step 2
  const [step, setStep] = useState<1 | 2>(1);
  const [submitting, setSubmitting] = useState(false);
  const [photos, setPhotos] = useState<FileList | null>(null);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    setFocus,
    reset,
    getValues,
    formState: { errors },
  } = useForm<RegistrationInput, unknown, RegistrationValues>({
    resolver: zodResolver(registrationSchema),
    mode: "onChange",
  });

  // Restore saved Step 1 data on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedStep1 = sessionStorage.getItem("artist-registration-step-1");
      if (savedStep1) {
        try {
          const parsed = JSON.parse(savedStep1);
          reset(parsed);
        } catch (e) {
          console.error("Error restoring Step 1 data", e);
        }
      }
    }
  }, [reset]);

  // Step 1 -> Step 2 Continuation Handler
  const handleContinueToStep2 = async () => {
    setSubmitError(null);
    const valid = await trigger(STEP_1_FIELDS);

    if (!valid) {
      const firstError = STEP_1_FIELDS.find((field) => errors[field]);
      if (firstError) {
        setFocus(firstError);
      }
      setSubmitError("Please fill in all required fields in Step 1 correctly before continuing.");
      return;
    }

    // Save Step 1 data
    const step1Data = {
      fullName: getValues("fullName"),
      mobile: getValues("mobile"),
      whatsapp: getValues("whatsapp"),
      email: getValues("email"),
      gender: getValues("gender"),
      age: getValues("age"),
      city: getValues("city"),
    };

    if (typeof window !== "undefined") {
      sessionStorage.setItem("artist-registration-step-1", JSON.stringify(step1Data));
    }

    // Switch to Step 2 immediately & scroll to top of form
    setStep(2);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const onInvalidStep2 = (formErrors: typeof errors) => {
    console.error("Step 2 validation errors:", formErrors);
    setSubmitError("Please fill in all required fields correctly before submitting.");
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 200, behavior: "smooth" });
    }
  };

  // Final Profile Submission Handler
  const onSubmitFinal = async (data: RegistrationValues) => {
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

    setSubmitting(true);

    try {
      const photoFileList = Array.from(photos);
      const photoNames = photoFileList.map((f) => f.name);

      const photoSlots = photoFileList.map((file, idx) => ({
        key: `photo_${idx + 1}`,
        title: file.name,
        name: file.name,
        size: file.size,
        type: file.type,
        previewUrl: URL.createObjectURL(file),
      }));

      const completeProfile = {
        ...data,
        photos: photoNames,
        photoDetails: photoSlots,
        createdAt: new Date().toISOString(),
      };

      if (typeof window !== "undefined") {
        sessionStorage.setItem("artist-registration-complete", JSON.stringify(completeProfile));

        localStorage.setItem(
          "dca_user",
          JSON.stringify({
            identifier: completeProfile.email || completeProfile.mobile,
            email: completeProfile.email,
            name: completeProfile.fullName,
            isLoggedIn: true,
            loginTime: new Date().toISOString(),
          })
        );

        localStorage.setItem(
          "dca_artist_profile",
          JSON.stringify({
            formData: {
              fullName: completeProfile.fullName,
              displayName: completeProfile.fullName,
              dob: "1998-05-14",
              age: String(completeProfile.age || 24),
              gender: completeProfile.gender,
              city: completeProfile.city,
              state: "Delhi NCR",
              phone: completeProfile.mobile,
              email: completeProfile.email,
              languages: completeProfile.languages || "Hindi, English",
              primaryCategory: "Actor",
              experience: completeProfile.experience || "1-2 Years",
              skills: "Acting, Script Delivery",
              specialSkills: "Driving, Dancing",
              previousWork: completeProfile.experience || "Independent Work",
              portfolioDescription: "Registered DCA Artist Profile",
              height: completeProfile.height || "5'8\"",
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

      setTimeout(() => {
        router.push("/register/success/");
      }, 400);
    } catch (err) {
      console.error("Failed to complete artist profile registration:", err);
      setSubmitError("Failed to save your artist profile. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#111111]">
      {/* Top Header & Breadcrumb Bar with Ample Fixed Header Clearance */}
      <section className="relative isolate border-b border-gray-200 bg-[#F7F7F5] px-4 pt-28 pb-6 sm:pt-32 sm:pb-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center mb-3">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Create Profile", href: "/register/" },
                ...(step === 2 ? [{ label: "Artist Profile" }] : []),
              ]}
            />
          </div>
          
          <Reveal>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              {step === 1 ? "DCA ARTIST PROFILE" : "STEP 2 OF 2 — ARTIST PORTFOLIO"}
            </span>
            <h1 className="mt-1 font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111]">
              {step === 1 ? "Create Your Artist Profile" : "Complete Your Artist Profile"}
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-[#555555] max-w-xl mx-auto leading-relaxed">
              {step === 1
                ? "Tell us about yourself to create your verified artist profile and access casting opportunities."
                : "Add information that helps present your talent, experience, and portfolio photos professionally."}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Centered Onboarding Form Section */}
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

            {/* Step Progress Bar */}
            <div className="mb-6">
              <div className="mb-2 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                <span>{step === 1 ? "Step 1 of 2 — Personal Information" : "Step 2 of 2 — Artist Information"}</span>
                <span>{step === 1 ? "50%" : "67%"}</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-[#D4AF37] transition-all duration-500"
                  style={{ width: step === 1 ? "50%" : "67%" }}
                />
              </div>
            </div>

            {/* Section Header */}
            <div className="mb-6 border-b border-gray-200 pb-4">
              <div className="flex items-center gap-2.5">
                {step === 1 ? (
                  <User size={18} className="text-[#D4AF37]" />
                ) : (
                  <Sparkles size={18} className="text-[#D4AF37]" />
                )}
                <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#111111]">
                  {step === 1 ? "Personal Information" : "Artist Information"}
                </h2>
              </div>
            </div>

            {/* Registration Form */}
            <form
              onSubmit={handleSubmit(onSubmitFinal, onInvalidStep2)}
              className="grid gap-4 sm:grid-cols-2"
            >
              {/* ==================== STEP 1 FIELDS ==================== */}
              {step === 1 && (
                <>
                  {/* Full Name */}
                  <Field
                    label="Full Name"
                    error={errors.fullName?.message}
                    icon={<User size={14} />}
                  >
                    <input
                      {...register("fullName")}
                      placeholder="Ananya Sharma"
                      autoComplete="name"
                      className={fieldInputClass}
                    />
                  </Field>

                  {/* Mobile Number */}
                  <Field
                    label="Mobile Number"
                    error={errors.mobile?.message}
                    icon={<Phone size={14} />}
                  >
                    <input
                      {...register("mobile")}
                      type="tel"
                      inputMode="numeric"
                      placeholder="10-digit mobile number"
                      autoComplete="tel"
                      className={fieldInputClass}
                    />
                  </Field>

                  {/* WhatsApp Number */}
                  <Field
                    label="WhatsApp Number"
                    error={errors.whatsapp?.message}
                    icon={<Phone size={14} />}
                  >
                    <input
                      {...register("whatsapp")}
                      type="tel"
                      inputMode="numeric"
                      placeholder="Same as mobile"
                      autoComplete="tel"
                      className={fieldInputClass}
                    />
                  </Field>

                  {/* Email Address */}
                  <Field
                    label="Email Address"
                    error={errors.email?.message}
                    icon={<Mail size={14} />}
                  >
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="you@example.com"
                      autoComplete="email"
                      className={fieldInputClass}
                    />
                  </Field>

                  {/* Gender */}
                  <Field label="Gender" error={errors.gender?.message}>
                    <select
                      {...register("gender")}
                      defaultValue=""
                      className={fieldInputClass}
                    >
                      <option value="" disabled>
                        Select Gender
                      </option>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Other">Other</option>
                    </select>
                  </Field>

                  {/* Age */}
                  <Field label="Age" error={errors.age?.message}>
                    <input
                      type="number"
                      inputMode="numeric"
                      placeholder="Your age"
                      className={fieldInputClass}
                      {...register("age", {
                        setValueAs: (value) => {
                          if (value === "" || value === null || value === undefined) {
                            return undefined;
                          }
                          return Number(value);
                        },
                      })}
                    />
                  </Field>

                  {/* City */}
                  <Field
                    label="City"
                    error={errors.city?.message}
                    icon={<MapPin size={14} />}
                    full
                  >
                    <input
                      {...register("city")}
                      placeholder="Delhi / Mumbai / Bangalore"
                      autoComplete="address-level2"
                      className={fieldInputClass}
                    />
                  </Field>

                  {/* Continue Button to Step 2 */}
                  <div className="mt-2 flex items-center justify-between sm:col-span-2">
                    <div className="flex items-center gap-1.5 text-xs text-[#666666]">
                      <ShieldCheck size={14} className="text-[#D4AF37]" />
                      <span>Free Registration</span>
                    </div>

                    <Button
                      type="button"
                      onClick={handleContinueToStep2}
                      className="group min-h-[52px] min-w-[200px] rounded-xl bg-[#111111] px-8 text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-white hover:bg-[#D4AF37] transition-all shadow-md"
                    >
                      <span>CONTINUE TO STEP 2</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </>
              )}

              {/* ==================== STEP 2 FIELDS ==================== */}
              {step === 2 && (
                <>
                  {/* Registered Hidden Step 1 Inputs */}
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

                  {/* Navigation Buttons for Step 2 */}
                  <div className="mt-4 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between sm:col-span-2">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => {
                        setStep(1);
                        if (typeof window !== "undefined") {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }}
                      className="min-h-[48px] rounded-xl border border-gray-200 text-[#111111] hover:bg-gray-100 px-6 text-xs font-bold"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Step 1
                    </Button>

                    <Button
                      type="submit"
                      disabled={submitting}
                      className="group min-h-[52px] min-w-[220px] rounded-xl bg-[#111111] px-8 text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-white hover:bg-[#D4AF37] transition-all shadow-md"
                    >
                      {submitting ? (
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
                </>
              )}
            </form>

            {/* Footer Note */}
            <div className="mt-6 rounded-xl border border-gray-200 bg-[#F7F7F5] p-3.5 text-center">
              <p className="text-xs text-[#555555]">
                Your information is saved securely. No payment is requested during registration.
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
  icon,
  children,
}: {
  label: string;
  error?: string;
  full?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className="mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#111111]">
        {icon && <span className="text-[#D4AF37]">{icon}</span>}
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs font-semibold text-red-500">{error}</p>}
    </div>
  );
}
