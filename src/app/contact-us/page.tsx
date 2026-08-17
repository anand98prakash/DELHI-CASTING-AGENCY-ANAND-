"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-[#111111] px-4 py-3.5 text-white placeholder:text-white/30 transition-all duration-300 focus:border-[#D4AF37] focus:bg-[#161616] focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/10";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    /*
     * Frontend-only contact form.
     *
     * No API
     * No backend
     * No email service
     */
    setSubmitted(true);
  };

  return (
    <main>
      {/* ================================================================ */}
      {/* HERO                                                             */}
      {/* ================================================================ */}

      <PageHero
        eyebrow="Contact Delhi Casting Agency"
        title="Let's Connect"
        description="Have a question about registration, talent categories or the platform? Get in touch with our online-first agency."
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
              label: "Contact Us",
            },
          ]}
        />
      </div>

      {/* ================================================================ */}
      {/* CONTACT SECTION                                                   */}
      {/* ================================================================ */}

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* ============================================================ */}
          {/* CONTACT INFORMATION                                           */}
          {/* ============================================================ */}

          <Reveal>
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                Get In Touch
              </p>

              <h2 className="mt-4 font-display text-3xl text-white">
                We are here to help.
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/55">
                Whether you need help understanding the registration process or
                want to know more about the platform, use the available contact
                channels.
              </p>

              <div className="mt-8 space-y-4">
                {/* Email */}
                <ContactCard
                  icon={<Mail className="h-5 w-5" />}
                  title="Email"
                  value="Email details to be confirmed"
                  description="Use the official agency email once the verified address is available."
                />

                {/* Phone */}
                <ContactCard
                  icon={<Phone className="h-5 w-5" />}
                  title="Phone"
                  value="Phone details to be confirmed"
                  description="Use the official agency number once the verified contact number is available."
                />

                {/* Online */}
                <ContactCard
                  icon={<MapPin className="h-5 w-5" />}
                  title="Online-First Agency"
                  value="Serving talent online across India"
                  description="The agency operates through an online-first platform rather than branch-specific pages."
                />
              </div>

              {/* WhatsApp */}
              <div className="mt-6 rounded-2xl border border-[#D4AF37]/15 bg-[#D4AF37]/[0.04] p-5">
                <div className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" />

                  <div>
                    <h3 className="font-medium text-white">
                      Community & Updates
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/45">
                      Verified community and communication details can be added
                      once the official channel is confirmed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ============================================================ */}
          {/* CONTACT FORM                                                   */}
          {/* ============================================================ */}

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-[#D4AF37]/20 bg-white/[0.03] p-7 md:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                Contact Form
              </p>

              <h2 className="mt-4 font-display text-3xl text-white">
                Send us a message
              </h2>

              <p className="mt-3 text-sm leading-7 text-white/50">
                Fill in the form below and tell us how we can help.
              </p>

              {submitted ? (
                /* ====================================================== */
                /* SUCCESS STATE                                           */
                /* ====================================================== */

                <div className="mt-8 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.05] p-7 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37]/10">
                    <CheckCircle2 className="h-8 w-8 text-[#D4AF37]" />
                  </div>

                  <h3 className="mt-5 font-display text-2xl text-white">
                    Message received
                  </h3>

                  <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-white/50">
                    Your message has been captured by this frontend interface.
                    No external email service is connected yet.
                  </p>

                  <Button
                    type="button"
                    variant="ghost"
                    className="mt-6"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                /* ====================================================== */
                /* FORM                                                     */
                /* ====================================================== */

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-white/75"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-white/75"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-white/75"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      className={inputClass}
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-white/75"
                    >
                      Subject
                    </label>

                    <select
                      id="subject"
                      name="subject"
                      required
                      defaultValue=""
                      className={inputClass}
                    >
                      <option value="" disabled className="bg-[#111111]">
                        Select a subject
                      </option>

                      <option value="registration" className="bg-[#111111]">
                        Registration
                      </option>

                      <option value="casting" className="bg-[#111111]">
                        Casting Opportunities
                      </option>

                      <option value="membership" className="bg-[#111111]">
                        Membership
                      </option>

                      <option value="general" className="bg-[#111111]">
                        General Enquiry
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-white/75"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="How can we help you?"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Submit */}
                  <Button type="submit" className="w-full justify-center">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              )}

              {/* Frontend notice */}
              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="text-center text-xs leading-6 text-white/35">
                  This contact form is currently a frontend interface. Official
                  phone and email details should be added only after they are
                  verified.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================================================================ */}
      {/* BOTTOM CTA                                                       */}
      {/* ================================================================ */}

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">
        <Reveal>
          <div className="rounded-3xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.05] p-8 text-center md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Looking for Opportunities?
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl text-white md:text-4xl">
              Ready to explore your next casting opportunity?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/55">
              Create your artist profile and explore the platform&apos;s talent and
              casting categories.
            </p>

            <div className="mt-8 flex justify-center">
              <Button
                type="button"
                onClick={() => (window.location.href = "/register/")}
              >
                Register Now
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

/* ======================================================================== */
/* CONTACT CARD                                                             */
/* ======================================================================== */

function ContactCard({
  icon,
  title,
  value,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
          {icon}
        </div>

        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
            {title}
          </p>

          <h3 className="mt-2 font-medium text-white">{value}</h3>

          <p className="mt-2 text-sm leading-6 text-white/45">{description}</p>
        </div>
      </div>
    </div>
  );
}
