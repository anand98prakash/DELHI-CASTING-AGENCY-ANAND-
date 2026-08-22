"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Sparkles, Upload } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  registrationSchema,
  type RegistrationInput,
  type RegistrationValues,
} from "@/lib/validation";

import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

const fieldInputClass =
  "w-full rounded-xl border border-white/10 bg-[#111111] px-4 py-3.5 text-white placeholder:text-white/30 transition-all duration-300 focus:border-[#D4AF37] focus:bg-[#161616] focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/10";

export default function StepTwoProfilePage() {
  const router = useRouter();

  const [photos, setPhotos] = useState<FileList | null>(null);
  const [saving, setSaving] = useState(false);

  /*
   * React Hook Form
   *
   * register  -> connects inputs
   * errors    -> displays validation errors
   * handleSubmit -> handles form submission
   */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationInput, unknown, RegistrationValues>({
    resolver: zodResolver(registrationSchema),
    mode: "onBlur",
  });

  /*
   * Make sure Step 1 was completed.
   *
   * IMPORTANT:
   * No setState() is called synchronously inside this effect.
   * This avoids the React 19 cascading-render warning.
   */
  useEffect(() => {
    const savedData = sessionStorage.getItem("artist-registration-step-1");

    if (!savedData) {
      router.replace("/register/");
    }
  }, [router]);

  /*
   * Step 2 submit
   *
   * Frontend-only flow:
   * - No backend
   * - No API
   * - No JWT
   * - No Razorpay
   */
  const onSubmit = async (data: RegistrationValues) => {
    setSaving(true);

    try {
      const stepOneData = sessionStorage.getItem("artist-registration-step-1");

      if (!stepOneData) {
        router.replace("/register/");
        return;
      }

      const parsedStepOneData = JSON.parse(stepOneData);

      /*
       * File objects cannot be stored directly in sessionStorage.
       * For this frontend-only flow we keep the selected file names.
       */
      const photoNames = photos
        ? Array.from(photos).map((file) => file.name)
        : [];

      const completeRegistration = {
        ...parsedStepOneData,
        ...data,
        photos: photoNames,
      };

      sessionStorage.setItem(
        "artist-registration-complete",
        JSON.stringify(completeRegistration),
      );

      /*
       * Document transaction flow:
       *
       * /register/
       *      ↓
       * /register/step-2-profile/
       *      ↓
       * /payment/
       */
      router.push("/payment/");
    } catch (error) {
      console.error("Unable to continue registration:", error);

      setSaving(false);
    }
  };

  return (
    <main>
      {/* ================================================================ */}
      {/* HERO                                                             */}
      {/* ================================================================ */}

      <PageHero
        eyebrow="Artist Registration"
        title="Complete Your Artist Profile"
        description="Add your talent information and portfolio details to continue your registration."
      />

      {/* ================================================================ */}
      {/* BREADCRUMB                                                       */}
      {/* ================================================================ */}

      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <Breadcrumb
          items={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Register",
              href: "/register/",
            },
            {
              label: "Artist Profile",
            },
          ]}
        />
      </div>

      {/* ================================================================ */}
      {/* FORM                                                             */}
      {/* ================================================================ */}

      <section className="mx-auto max-w-5xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="overflow-hidden rounded-[32px] border border-[#D4AF37]/20 bg-white/[0.03] p-6 backdrop-blur-xl md:p-10">
            {/* ========================================================== */}
            {/* PROGRESS                                                    */}
            {/* ========================================================== */}

            <div className="mb-10">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-sm font-medium text-[#D4AF37]">
                  Step 2 of 2 — Artist Information
                </div>

                <span className="text-sm text-white/50">100%</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-full rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFD86A]" />
              </div>

              <div className="mt-4 flex items-center justify-center gap-3">
                {/* Step 1 completed */}
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D4AF37] text-black">
                  <Check className="h-4 w-4" />
                </div>

                <div className="h-px w-16 bg-[#D4AF37]" />

                {/* Step 2 */}
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D4AF37] text-black">
                  <span className="text-xs font-semibold">2</span>
                </div>
              </div>
            </div>

            {/* ========================================================== */}
            {/* HEADING                                                      */}
            {/* ========================================================== */}

            <div className="mb-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Sparkles size={18} />
                </div>

                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white">
                    Artist Information
                  </h2>

                  <div className="mt-2 h-px w-24 bg-gradient-to-r from-[#D4AF37] to-transparent" />
                </div>
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55">
                Add information that helps present your talent, experience and
                portfolio professionally.
              </p>
            </div>

            {/* ========================================================== */}
            {/* FORM                                                        */}
            {/* ========================================================== */}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid gap-5 md:grid-cols-2"
            >
              {/* ======================================================== */}
              {/* HEIGHT                                                     */}
              {/* ======================================================== */}

              <Field label="Height" error={errors.height?.message}>
                <input
                  {...register("height")}
                  placeholder={`5'6"`}
                  className={fieldInputClass}
                />
              </Field>

              {/* ======================================================== */}
              {/* LANGUAGES                                                  */}
              {/* ======================================================== */}

              <Field label="Languages Known" error={errors.languages?.message}>
                <input
                  {...register("languages")}
                  placeholder="Hindi, English"
                  className={fieldInputClass}
                />
              </Field>

              {/* ======================================================== */}
              {/* EXPERIENCE                                                 */}
              {/* ======================================================== */}

              <Field
                label="Acting Experience"
                full
                error={errors.experience?.message}
              >
                <textarea
                  {...register("experience")}
                  rows={5}
                  placeholder="Tell us about your acting, modelling or performance experience..."
                  className={`${fieldInputClass} resize-none`}
                />
              </Field>

              {/* ======================================================== */}
              {/* INSTAGRAM                                                  */}
              {/* ======================================================== */}

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

              {/* ======================================================== */}
              {/* PORTFOLIO                                                  */}
              {/* ======================================================== */}

              <Field label="Portfolio Link" error={errors.portfolio?.message}>
                <input
                  {...register("portfolio")}
                  placeholder="https://yourportfolio.com"
                  className={fieldInputClass}
                />
              </Field>

              {/* ======================================================== */}
              {/* PHOTOS                                                     */}
              {/* ======================================================== */}

              <div className="md:col-span-2">
                <label className="mb-3 block text-sm font-medium text-white/75">
                  Upload Recent Photos
                </label>

                <label
                  htmlFor="photos"
                  className="group flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-[#D4AF37]/25 bg-white/[0.02] px-8 py-10 text-center transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5"
                >
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37]/10 transition-transform duration-300 group-hover:scale-110">
                    {photos?.length ? (
                      <Check size={30} className="text-[#D4AF37]" />
                    ) : (
                      <Upload size={30} className="text-[#D4AF37]" />
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {photos?.length
                      ? `${photos.length} Photo(s) Selected`
                      : "Upload Your Photos"}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-7 text-white/55">
                    Upload 4–5 recent photographs. JPG, JPEG and PNG formats are
                    supported.
                  </p>

                  {photos?.length ? (
                    <div className="mt-4 max-w-lg space-y-1">
                      {Array.from(photos).map((file) => (
                        <p
                          key={file.name}
                          className="truncate text-xs text-white/45"
                        >
                          {file.name}
                        </p>
                      ))}
                    </div>
                  ) : null}
                </label>

                <input
                  id="photos"
                  type="file"
                  multiple
                  accept="image/jpeg,image/jpg,image/png"
                  className="hidden"
                  onChange={(event) => {
                    setPhotos(event.target.files);
                  }}
                />
              </div>

              {/* ======================================================== */}
              {/* BUTTONS                                                    */}
              {/* ======================================================== */}

              <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between md:col-span-2">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => router.push("/register/")}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>

                <Button type="submit" disabled={saving} className="group">
                  {saving ? "Saving..." : "Continue to Payment"}

                  {!saving && (
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </Button>
              </div>
            </form>

            {/* ========================================================== */}
            {/* FRONTEND NOTICE                                             */}
            {/* ========================================================== */}

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-center text-sm leading-7 text-white/50">
                Your profile information is being used only to continue this
                frontend registration flow. Payment will be handled on the next
                screen.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

/* ======================================================================== */
/* FIELD COMPONENT                                                          */
/* ======================================================================== */

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
    <div className={full ? "md:col-span-2" : ""}>
      <label className="mb-2 block text-sm font-medium text-white/75">
        {label}
      </label>

      {children}

      {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
    </div>
  );
}
