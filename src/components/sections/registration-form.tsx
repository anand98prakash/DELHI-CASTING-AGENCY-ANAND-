// "use client";

// import { useMemo, useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   Upload,
//   Check,
//   User,
//   Phone,
//   Mail,
//   MapPin,
//   Sparkles,
// } from "lucide-react";

// import {
//   registrationSchema,
//   type RegistrationInput,
//   type RegistrationValues,
// } from "@/lib/validation";

// import { Button } from "@/components/ui/button";
// import { launchRazorpayCheckout } from "@/lib/razorpay";
// import { trackPurchase } from "@/components/analytics";
// import { SITE } from "@/lib/constants";

// interface Props {
//   onSuccess: (memberId: string) => void;
// }

// export function RegistrationForm({ onSuccess }: Props) {
//   const [photos, setPhotos] = useState<FileList | null>(null);
//   const [submitting, setSubmitting] = useState(false);
//   const [step, setStep] = useState(1);

//   const {
//     register,
//     handleSubmit,
//     watch,
//     trigger,
//     formState: { errors },
//   } = useForm<RegistrationInput, unknown, RegistrationValues>({
//     resolver: zodResolver(registrationSchema),
//     mode: "onBlur",
//   });

//  const values = watch();

//  const nextStep = async () => {
//    const valid = await trigger([
//      "fullName",
//      "mobile",
//      "whatsapp",
//      "email",
//      "gender",
//      "age",
//      "city",
//    ]);

//    if (valid) {
//      setStep(2);
//    }
//  };

//  const prevStep = () => {
//    setStep(1);
//  };

//  const progress = useMemo(() => {
//    const fieldNames: (keyof RegistrationInput)[] = [
//      "fullName",
//      "mobile",
//      "email",
//      "gender",
//      "age",
//      "city",
//      "height",
//      "languages",
//    ];

//    const filled = fieldNames.filter((field) => {
//      const value = values[field];
//      return value !== undefined && value !== "" && value !== null;
//    }).length;

//    const withPhotos = filled + (photos?.length ? 1 : 0);

//    return Math.round((withPhotos / (fieldNames.length + 1)) * 100);
//  }, [values, photos]);

//   const onSubmit = async (data: RegistrationValues) => {
//     setSubmitting(true);

//     await launchRazorpayCheckout({
//       name: data.fullName,
//       email: data.email,
//       contact: data.mobile,

//       onSuccess: (paymentId) => {
//         trackPurchase(SITE.price);

//         onSuccess(
//           `WTB-${paymentId.slice(-6).toUpperCase()}`
//         );

//         setSubmitting(false);
//       },

//       onDismiss: () => setSubmitting(false),
//     });
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-[#D4AF37]/20 bg-white/[0.03] p-6 backdrop-blur-xl md:p-10"
//     >
//       {/* Progress */}

//       <div className="mb-10">
//         <div className="mb-3 flex items-center justify-between">
//           <div className="flex items-center gap-2 text-sm text-[#D4AF37]">
//             <Sparkles size={15} />
//             Registration Progress
//           </div>

//           <span className="text-sm text-white/60">
//             {progress}%
//           </span>
//         </div>

//         <div className="h-3 overflow-hidden rounded-full bg-white/10">
//           <div
//             className="h-full rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFD86A] transition-all duration-500"
//             style={{
//               width: `${progress}%`,
//             }}
//           />
//         </div>
//       </div>

//       {step === 1 && (
//   <>
//     {/* Personal */}

//    {step === 1 && (
//   <>
//     <SectionTitle
//       title="Personal Information"
//       icon={<User size={18} />}
//     />

//     <div className="grid gap-5 md:grid-cols-2">
//       <Field
//         label="Full Name"
//         error={errors.fullName?.message}
//         icon={<User size={16} />}
//       >
//         <input
//           {...register("fullName")}
//           placeholder="Ananya Sharma"
//           className={fieldInputClass}
//         />
//       </Field>

//       <Field
//         label="Mobile Number"
//         error={errors.mobile?.message}
//         icon={<Phone size={16} />}
//       >
//         <input
//           {...register("mobile")}
//           placeholder="10-digit mobile number"
//           className={fieldInputClass}
//         />
//       </Field>

//       <Field
//         label="WhatsApp Number"
//         error={errors.whatsapp?.message}
//         icon={<Phone size={16} />}
//       >
//         <input
//           {...register("whatsapp")}
//           placeholder="Same as mobile"
//           className={fieldInputClass}
//         />
//       </Field>

//       <Field
//         label="Email Address"
//         error={errors.email?.message}
//         icon={<Mail size={16} />}
//       >
//         <input
//           type="email"
//           {...register("email")}
//           placeholder="you@example.com"
//           className={fieldInputClass}
//         />
//       </Field>

//       <Field
//         label="Gender"
//         error={errors.gender?.message}
//       >
//         <select
//           {...register("gender")}
//           defaultValue=""
//           className={fieldInputClass}
//         >
//           <option value="" disabled>
//             Select Gender
//           </option>
//           <option>Female</option>
//           <option>Male</option>
//           <option>Other</option>
//         </select>
//       </Field>

//       <Field
//         label="Age"
//         error={errors.age?.message}
//       >
//         <input
//           type="number"
//           {...register("age")}
//           placeholder="Your age"
//           className={fieldInputClass}
//         />
//       </Field>

//       <Field
//         label="City"
//         full
//         icon={<MapPin size={16} />}
//         error={errors.city?.message}
//       >
//         <input
//           {...register("city")}
//           placeholder="Mumbai"
//           className={fieldInputClass}
//         />
//       </Field>
//     </div>

//     <div className="mt-10 flex justify-end">
//       <Button
//         type="button"
//         size="default"
//         onClick={nextStep}
//       >
//         Next →
//       </Button>
//     </div>
//   </>
// )}
// {/**Artist Information */}

// {step === 2 && (
//   <>
//     <SectionTitle
//       title="Artist Information"
//       icon={<Sparkles size={18} />}
//     />

//     <div className="grid gap-5 md:grid-cols-2">

//       <Field
//         label="Height"
//         error={errors.height?.message}
//       >
//         <input
//           {...register("height")}
//           placeholder={`5'6"`}
//           className={fieldInputClass}
//         />
//       </Field>

//       <Field
//         label="Languages Known"
//         error={errors.languages?.message}
//       >
//         <input
//           {...register("languages")}
//           placeholder="Hindi, English"
//           className={fieldInputClass}
//         />
//       </Field>

//       <Field
//         label="Acting Experience"
//         full
//       >
//         <textarea
//           {...register("experience")}
//           rows={4}
//           placeholder="Tell us about your acting, modelling or performance experience..."
//           className={`${fieldInputClass} resize-none`}
//         />
//       </Field>

//       <Field
//         label="Instagram Profile"
//       >
//         <input
//           {...register("instagram")}
//           placeholder="@yourusername"
//           className={fieldInputClass}
//         />
//       </Field>

//       <Field
//         label="Portfolio Link"
//         error={errors.portfolio?.message}
//       >
//         <input
//           {...register("portfolio")}
//           placeholder="https://yourportfolio.com"
//           className={fieldInputClass}
//         />
//       </Field>

//       {/* Upload */}

//       <div className="md:col-span-2">
//         <label className="mb-3 block text-sm font-medium text-white/75">
//           Upload Recent Photos
//         </label>

//         <label
//           htmlFor="photos"
//           className="group flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-[#D4AF37]/25 bg-white/[0.02] px-8 py-10 text-center transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5"
//         >
//           <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37]/10 transition-transform duration-300 group-hover:scale-110">
//             {photos?.length ? (
//               <Check
//                 size={30}
//                 className="text-[#D4AF37]"
//               />
//             ) : (
//               <Upload
//                 size={30}
//                 className="text-[#D4AF37]"
//               />
//             )}
//           </div>

//           <h3 className="text-lg font-semibold text-white">
//             {photos?.length
//               ? `${photos.length} Photo(s) Selected`
//               : "Upload Your Photos"}
//           </h3>

//           <p className="mt-3 max-w-md text-sm leading-7 text-white/55">
//             Upload 4–5 recent photographs.
//             JPG, JPEG and PNG formats are supported.
//           </p>
//         </label>

//         <input
//           id="photos"
//           type="file"
//           multiple
//           accept="image/*"
//           className="hidden"
//           onChange={(e) => setPhotos(e.target.files)}
//         />
//       </div>

//     </div>

//     <div className="mt-10 flex items-center justify-between gap-4">
//       <Button
//         type="button"
//         variant="ghost"
//         onClick={prevStep}
//       >
//         ← Back
//       </Button>

//       <Button
//         type="submit"
//         size="default"
//         disabled={submitting}
//       >
//         {submitting ? "Opening Secure Checkout..." : "Proceed to Secure Payment"}
//       </Button>
//     </div>
//   </>
// )}

//       {/* Payment */}

//       <div className="mt-10 flex flex-wrap justify-center gap-3">
//         {[
//           "🔒 Razorpay",
//           "📲 UPI",
//           "💳 Credit / Debit Card",
//           "🏦 Net Banking",
//         ].map((item) => (
//           <div
//             key={item}
//             className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/70 transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/5"
//           >
//             {item}
//           </div>
//         ))}
//       </div>

//       {/* Submit */}

//             <motion.div
//         initial={{ opacity: 0, y: 25 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.4 }}
//         className="mt-10"
//       >
//         <Button
//           type="submit"
//           size="block"
//           disabled={submitting}
//           className="group"
//         >
//           {submitting ? (
//             <>
//               <motion.span
//                 animate={{ rotate: 360 }}
//                 transition={{
//                   repeat: Infinity,
//                   duration: 1,
//                   ease: "linear",
//                 }}
//                 className="mr-2 inline-block h-5 w-5 rounded-full border-2 border-white border-t-transparent"
//               />
//               Opening Secure Checkout...
//             </>
//           ) : (
//             <>
//               Proceed to Secure Payment
//             </>
//           )}
//         </Button>

//         <p className="mt-5 text-center text-sm leading-7 text-white/55">
//           Your payment is processed securely through Razorpay. Your personal
//           information is protected and never shared with third parties.
//         </p>
//       </motion.div>
//     </form>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*                              Helper Components                             */
// /* -------------------------------------------------------------------------- */

// function SectionTitle({
//   title,
//   icon,
// }: {
//   title: string;
//   icon: React.ReactNode;
// }) {
//   return (
//     <div className="mb-6 mt-10 flex items-center gap-3 first:mt-0">
//       <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
//         {icon}
//       </div>

//       <div>
//         <h3 className="text-xl font-semibold text-white">
//           {title}
//         </h3>

//         <div className="mt-2 h-px w-24 bg-gradient-to-r from-[#D4AF37] to-transparent" />
//       </div>
//     </div>
//   );
// }

// export const fieldInputClass =
//   "w-full rounded-xl border border-white/10 bg-[#111111] px-4 py-3.5 text-white placeholder:text-white/30 transition-all duration-300 focus:border-[#D4AF37] focus:bg-[#161616] focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/10";

// function Field({
//   label,
//   error,
//   full,
//   icon,
//   children,
// }: {
//   label: string;
//   error?: string;
//   full?: boolean;
//   icon?: React.ReactNode;
//   children: React.ReactNode;
// }) {
//   return (
//     <div className={`${full ? "md:col-span-2" : ""}`}>
//       <label className="mb-2 flex items-center gap-2 text-sm font-medium text-white/75">
//         {icon && (
//           <span className="text-[#D4AF37]">
//             {icon}
//           </span>
//         )}

//         {label}
//       </label>

//       {children}

//       {error && (
//         <p className="mt-2 text-sm text-red-400">
//           {error}
//         </p>
//       )}
//     </div>
//   );
// }

"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import {
  Upload,
  Check,
  User,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import {
  registrationSchema,
  type RegistrationInput,
  type RegistrationValues,
} from "@/lib/validation";

import { Button } from "@/components/ui/button";
import { launchRazorpayCheckout } from "@/lib/razorpay";
import { trackPurchase } from "@/components/analytics";
import { SITE } from "@/lib/constants";

interface Props {
  onSuccess: (memberId: string) => void;
}

// Fields that belong to Step 1 — validated before moving to Step 2
const STEP_1_FIELDS: (keyof RegistrationInput)[] = [
  "fullName",
  "mobile",
  "whatsapp",
  "email",
  "gender",
  "age",
  "city",
];

export function RegistrationForm({ onSuccess }: Props) {
  const [step, setStep] = useState<1 | 2>(1);
  const [photos, setPhotos] = useState<FileList | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm<RegistrationInput, unknown, RegistrationValues>({
    resolver: zodResolver(registrationSchema),
    mode: "onBlur",
  });

  const values = watch();

  const progress = useMemo(() => {
    const fieldNames: (keyof RegistrationInput)[] = [
      "fullName",
      "mobile",
      "email",
      "gender",
      "age",
      "city",
      "height",
      "languages",
    ];

    const filled = fieldNames.filter((field) => {
      const value = values[field];
      return value !== undefined && value !== "" && value !== null;
    }).length;

    const withPhotos = filled + (photos?.length ? 1 : 0);

    return Math.round((withPhotos / (fieldNames.length + 1)) * 100);
  }, [values, photos]);

  // Step 1 -> Step 2, only after validating Step 1 fields
  const handleNext = async () => {
    const valid = await trigger(STEP_1_FIELDS);
    if (valid) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const onSubmit = async (data: RegistrationValues) => {
    // Extra safety: only allow real submit on step 2
    if (step !== 2) {
      setStep(2);
      return;
    }

    setSubmitting(true);

    await launchRazorpayCheckout({
      name: data.fullName,
      email: data.email,
      contact: data.mobile,

      onSuccess: (paymentId) => {
        trackPurchase(SITE.price);

        onSuccess(`WTB-${paymentId.slice(-6).toUpperCase()}`);

        setSubmitting(false);
      },

      onDismiss: () => setSubmitting(false),
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-[#D4AF37]/20 bg-white/[0.03] p-6 backdrop-blur-xl md:p-10"
    >
      {/* Step Indicator */}

      <div className="mb-10">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-[#D4AF37]">
            <Sparkles size={15} />
            Step {step} of 2 —{" "}
            {step === 1 ? "Personal Information" : "Artist Information"}
          </div>

          <span className="text-sm text-white/60">{progress}%</span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFD86A] transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        {/* Step dots */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <div
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
              step >= 1 ? "bg-[#D4AF37]" : "bg-white/20"
            }`}
          />
          <div
            className={`h-px w-16 transition-all duration-300 ${
              step === 2 ? "bg-[#D4AF37]" : "bg-white/20"
            }`}
          />
          <div
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
              step === 2 ? "bg-[#D4AF37]" : "bg-white/20"
            }`}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Personal */}

            <SectionTitle
              title="Personal Information"
              icon={<User size={18} />}
            />

            <div className="grid gap-5 md:grid-cols-2">
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

              <Field label="Gender" error={errors.gender?.message}>
                <select
                  {...register("gender")}
                  defaultValue=""
                  className={fieldInputClass}
                >
                  <option value="" disabled>
                    Select Gender
                  </option>

                  <option>Female</option>
                  <option>Male</option>
                  <option>Other</option>
                </select>
              </Field>

              <Field label="Age" error={errors.age?.message}>
                <input
                  type="number"
                  {...register("age")}
                  placeholder="Your age"
                  className={fieldInputClass}
                />
              </Field>

              <Field
                label="City"
                full
                icon={<MapPin size={16} />}
                error={errors.city?.message}
              >
                <input
                  {...register("city")}
                  placeholder="Mumbai"
                  className={fieldInputClass}
                />
              </Field>
            </div>

            {/* Next button */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex justify-end"
            >
              <Button type="button" onClick={handleNext} className="group">
                Next
                <ArrowRight size={18} className="ml-2 inline-block" />
              </Button>
            </motion.div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Artist Information */}

            <SectionTitle
              title="Artist Information"
              icon={<Sparkles size={18} />}
            />

            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Height" error={errors.height?.message}>
                <input
                  {...register("height")}
                  placeholder={`5'6"`}
                  className={fieldInputClass}
                />
              </Field>

              <Field label="Languages Known" error={errors.languages?.message}>
                <input
                  {...register("languages")}
                  placeholder="Hindi, English"
                  className={fieldInputClass}
                />
              </Field>

              <Field label="Acting Experience" full>
                <textarea
                  {...register("experience")}
                  rows={4}
                  placeholder="Tell us about your acting, modelling or performance experience..."
                  className={`${fieldInputClass} resize-none`}
                />
              </Field>

              <Field label="Instagram Profile">
                <input
                  {...register("instagram")}
                  placeholder="@yourusername"
                  className={fieldInputClass}
                />
              </Field>

              <Field label="Portfolio Link" error={errors.portfolio?.message}>
                <input
                  {...register("portfolio")}
                  placeholder="https://yourportfolio.com"
                  className={fieldInputClass}
                />
              </Field>

              {/* Upload */}

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
                </label>

                <input
                  id="photos"
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => setPhotos(e.target.files)}
                />
              </div>
            </div>

            {/* Payment */}

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {[
                "🔒 Razorpay",
                "📲 UPI",
                "💳 Credit / Debit Card",
                "🏦 Net Banking",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/70 transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/5"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Back + Submit */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex items-center gap-4"
            >
              <Button
                type="button"
                onClick={handleBack}
                // variant="outline"
                variant="ghost"
                className="group"
              >
                <ArrowLeft size={18} className="mr-2 inline-block" />
                Back
              </Button>

              <Button
                type="submit"
                size="block"
                disabled={submitting}
                className="group flex-1"
              >
                {submitting ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear",
                      }}
                      className="mr-2 inline-block h-5 w-5 rounded-full border-2 border-white border-t-transparent"
                    />
                    Opening Secure Checkout...
                  </>
                ) : (
                  <>Submit</>
                )}
              </Button>
            </motion.div>

            <p className="mt-5 text-center text-sm leading-7 text-white/55">
              Your payment is processed securely through Razorpay. Your personal
              information is protected and never shared with third parties.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Helper Components                             */
/* -------------------------------------------------------------------------- */

function SectionTitle({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="mb-6 mt-10 flex items-center gap-3 first:mt-0">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
        {icon}
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>

        <div className="mt-2 h-px w-24 bg-gradient-to-r from-[#D4AF37] to-transparent" />
      </div>
    </div>
  );
}

export const fieldInputClass =
  "w-full rounded-xl border border-white/10 bg-[#111111] px-4 py-3.5 text-white placeholder:text-white/30 transition-all duration-300 focus:border-[#D4AF37] focus:bg-[#161616] focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/10";

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
    <div className={`${full ? "md:col-span-2" : ""}`}>
      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-white/75">
        {icon && <span className="text-[#D4AF37]">{icon}</span>}

        {label}
      </label>

      {children}

      {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
    </div>
  );
}