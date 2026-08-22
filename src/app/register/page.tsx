"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRight, Mail, MapPin, Phone, User } from "lucide-react";
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
  "w-full rounded-lg border border-[#E2DDD3] bg-[#F5F2EA] px-4 py-3.5 text-[#171717] placeholder:text-[#171717]/40 transition-all duration-300 focus:border-[#C5A059] focus:bg-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/20";

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
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    setFocus,
    formState: { errors },
  } = useForm<RegistrationInput, unknown, RegistrationValues>({
    resolver: zodResolver(registrationSchema),
    mode: "onChange",
  });

  const handleContinue = async () => {
    const valid = await trigger(STEP_1_FIELDS);

    if (!valid) {
      const firstError = STEP_1_FIELDS.find((field) => errors[field]);
      if (firstError) {
        setFocus(firstError);
      }
      return;
    }

    await handleSubmit(onSubmit, onInvalid)();
  };

  const onInvalid = (formErrors: typeof errors) => {
    const firstError = STEP_1_FIELDS.find((field) => formErrors[field]);
    if (firstError) {
      setFocus(firstError);
    }
  };

  const onSubmit = async (data: RegistrationValues) => {
    try {
      setSubmitting(true);
      sessionStorage.setItem(
        "artist-registration-step-1",
        JSON.stringify(data),
      );
      router.push("/register/step-2-profile/");
    } catch (error) {
      console.error("Unable to continue registration:", error);
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F5F2EA] text-[#171717]">
      {/* Hero */}
      <PageHero
        eyebrow="Artist Registration"
        title="Start Your Casting Journey"
        description="Create your artist profile and continue to the next step of registration."
        image="/media/dca/models/dca-model-female-01.jpg"
      />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Register" },
          ]}
        />
      </div>

      {/* Registration */}
      <section className="mx-auto max-w-6xl px-6 py-8 lg:px-8 lg:py-16">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Form Left/Center - 8 Columns */}
            <div className="rounded-xl border border-[#E2DDD3] bg-[#EFECE4] p-6 shadow-xl lg:col-span-8 md:p-10">
              {/* Progress */}
              <div className="mb-8">
                <div className="mb-2 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                  <span>Step 1 of 2 — Personal Information</span>
                  <span>50%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-[#E2DDD3]">
                  <div className="h-full w-1/2 rounded-full bg-[#C5A059]" />
                </div>
              </div>

              {/* Heading */}
              <div className="mb-8 border-b border-[#E2DDD3] pb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#C5A059]/30 bg-[#F5F2EA] text-[#C5A059]">
                    <User size={18} />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold tracking-tight text-[#171717]">
                      Personal Information
                    </h2>
                  </div>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[#171717]/70">
                  Enter your basic information to begin creating your verified artist profile.
                </p>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit(onSubmit, onInvalid)}
                className="grid gap-5 md:grid-cols-2"
              >
                {/* Full Name */}
                <Field
                  label="Full Name"
                  error={errors.fullName?.message}
                  icon={<User size={15} />}
                >
                  <input
                    {...register("fullName")}
                    placeholder="Ananya Sharma"
                    autoComplete="name"
                    className={fieldInputClass}
                  />
                </Field>

                {/* Mobile */}
                <Field
                  label="Mobile Number"
                  error={errors.mobile?.message}
                  icon={<Phone size={15} />}
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

                {/* WhatsApp */}
                <Field
                  label="WhatsApp Number"
                  error={errors.whatsapp?.message}
                  icon={<Phone size={15} />}
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

                {/* Email */}
                <Field
                  label="Email Address"
                  error={errors.email?.message}
                  icon={<Mail size={15} />}
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
                  icon={<MapPin size={15} />}
                  full
                >
                  <input
                    {...register("city")}
                    placeholder="Delhi / Mumbai / Bangalore"
                    autoComplete="address-level2"
                    className={fieldInputClass}
                  />
                </Field>

                {/* Validation Summary */}
                {Object.keys(errors).length > 0 && (
                  <div className="rounded-lg border border-red-300 bg-red-50 p-4 md:col-span-2">
                    <p className="text-xs font-bold text-red-600">
                      Please fix the highlighted fields before continuing:
                    </p>
                  </div>
                )}

                {/* Continue */}
                <div className="mt-4 flex justify-end md:col-span-2">
                  <Button
                    type="button"
                    onClick={handleContinue}
                    disabled={submitting}
                    className="min-h-12 min-w-[160px] rounded-full bg-[#171717] px-8 text-xs font-bold uppercase tracking-[0.18em] text-[#F5F2EA] hover:bg-[#C5A059] hover:text-[#171717]"
                  >
                    {submitting ? "Continuing..." : "Continue to Step 2"}
                    {!submitting && <ArrowRight size={16} className="ml-2" />}
                  </Button>
                </div>
              </form>

              <div className="mt-8 rounded-lg border border-[#E2DDD3] bg-[#F5F2EA] p-4 text-center">
                <p className="text-xs text-[#171717]/60">
                  Your information is used to continue your artist registration flow. No payment is requested on this step.
                </p>
              </div>
            </div>

            {/* Campaign Sidebar Right - 4 Columns */}
            <div className="lg:col-span-4">
              <div className="relative aspect-3/4 w-full overflow-hidden rounded-xl border border-[#E2DDD3] bg-[#EFECE4] shadow-md">
                <Image
                  src="/media/dca/about/dca-about-hero-01.jpg"
                  alt="DCA Premium Talent Registration Campaign"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/85 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                    Delhi Casting Agency
                  </p>
                  <p className="mt-1 font-serif text-xl font-bold tracking-tight text-[#F5F2EA]">
                    Join 500+ Verified Indian Artists
                  </p>
                </div>
              </div>
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
    <div className={full ? "md:col-span-2" : ""}>
      <label className="mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#171717]">
        {icon && <span className="text-[#C5A059]">{icon}</span>}
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs font-semibold text-red-500">{error}</p>}
    </div>
  );
}
