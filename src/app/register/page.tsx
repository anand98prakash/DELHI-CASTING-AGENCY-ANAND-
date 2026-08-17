"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Mail, MapPin, Phone, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { registrationSchema } from "@/lib/validation";
import type { RegistrationInput, RegistrationValues } from "@/lib/validation";

import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

const fieldInputClass =
  "w-full rounded-xl border border-white/10 bg-[#111111] px-4 py-3.5 text-white placeholder:text-white/30 transition-all duration-300 focus:border-[#D4AF37] focus:bg-[#161616] focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/10";

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
    formState: { errors },
  } = useForm<RegistrationInput, unknown, RegistrationValues>({
    resolver: zodResolver(registrationSchema),
    mode: "onBlur",
  });

  const handleContinue = async () => {
    const valid = await trigger(STEP_1_FIELDS);

    if (!valid) {
      return;
    }

    await handleSubmit(onSubmit)();
  };

  const onSubmit = async (data: RegistrationValues) => {
    setSubmitting(true);

    /*
     * Frontend-only flow.
     * No backend/API/payment call is made here.
     *
     * We temporarily keep the registration information in
     * sessionStorage so Step 2 can continue the frontend flow.
     */
    try {
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
    <main>
      {/* Hero */}
      <PageHero
        eyebrow="Artist Registration"
        title="Start Your Casting Journey"
        description="Create your artist profile and continue to the next step of registration."
      />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Register" }]}
        />
      </div>

      {/* Registration */}
      <section className="mx-auto max-w-5xl px-6 py-12 lg:px-8 lg:py-20">
        <Reveal>
          <div className="overflow-hidden rounded-[32px] border border-[#D4AF37]/20 bg-white/[0.03] p-6 backdrop-blur-xl md:p-10">
            {/* Progress */}
            <div className="mb-10">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-sm font-medium text-[#D4AF37]">
                  Step 1 of 2 — Personal Information
                </div>

                <span className="text-sm text-white/50">50%</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFD86A]" />
              </div>

              <div className="mt-4 flex items-center justify-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-[#D4AF37]" />

                <div className="h-px w-16 bg-white/20" />

                <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>
            </div>

            {/* Heading */}
            <div className="mb-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <User size={18} />
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    Personal Information
                  </h2>

                  <div className="mt-2 h-px w-24 bg-gradient-to-r from-[#D4AF37] to-transparent" />
                </div>
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55">
                Enter your basic information to begin creating your artist
                profile.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid gap-5 md:grid-cols-2"
            >
              {/* Full Name */}
              <Field
                label="Full Name"
                error={errors.fullName?.message}
                icon={<User size={16} />}
              >
                <input
                  {...register("fullName")}
                  placeholder="Ananya Sharma"
                  className={fieldInputClass}
                />
              </Field>

              {/* Mobile */}
              <Field
                label="Mobile Number"
                error={errors.mobile?.message}
                icon={<Phone size={16} />}
              >
                <input
                  {...register("mobile")}
                  placeholder="10-digit mobile number"
                  className={fieldInputClass}
                />
              </Field>

              {/* WhatsApp */}
              <Field
                label="WhatsApp Number"
                error={errors.whatsapp?.message}
                icon={<Phone size={16} />}
              >
                <input
                  {...register("whatsapp")}
                  placeholder="Same as mobile"
                  className={fieldInputClass}
                />
              </Field>

              {/* Email */}
              <Field
                label="Email Address"
                error={errors.email?.message}
                icon={<Mail size={16} />}
              >
                <input
                  type="email"
                  {...register("email")}
                  placeholder="you@example.com"
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
                  {...register("age")}
                  placeholder="Your age"
                  className={fieldInputClass}
                />
              </Field>

              {/* City */}
              <Field
                label="City"
                error={errors.city?.message}
                icon={<MapPin size={16} />}
                full
              >
                <input
                  {...register("city")}
                  placeholder="Mumbai"
                  className={fieldInputClass}
                />
              </Field>

              {/* Continue */}
              <div className="mt-5 flex justify-end md:col-span-2">
                <Button
                  type="button"
                  onClick={handleContinue}
                  disabled={submitting}
                  className="group"
                >
                  {submitting ? "Continuing..." : "Continue"}

                  {!submitting && (
                    <ArrowRight
                      size={18}
                      className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  )}
                </Button>
              </div>
            </form>

            {/* Information */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-center text-sm leading-7 text-white/50">
                Your information is used to continue your artist registration
                flow. No payment is requested on this step.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Field Component                                                            */
/* -------------------------------------------------------------------------- */

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
      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-white/75">
        {icon && <span className="text-[#D4AF37]">{icon}</span>}

        {label}
      </label>

      {children}

      {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
    </div>
  );
}
