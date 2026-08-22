"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { OFFICIAL_DCA_INSTAGRAM_URL, OFFICIAL_DCA_LINKEDIN_URL } from "@/data/media";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const inputClass =
  "w-full rounded-lg border border-[#E2DDD3] bg-[#F5F2EA] px-4 py-3.5 text-[#171717] placeholder:text-[#171717]/40 transition-all duration-300 focus:border-[#C5A059] focus:bg-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/20";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#F5F2EA] text-[#171717]">
      {/* Hero Header */}
      <section className="relative isolate overflow-hidden border-b border-[#E2DDD3] bg-[#F5F2EA] px-6 pb-12 pt-28 sm:pb-16 sm:pt-36">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
              Contact Delhi Casting Agency
            </p>

            <div className="relative mb-8 aspect-21/7 max-h-[280px] w-full overflow-hidden rounded-xl border border-[#E2DDD3] bg-[#EFECE4] shadow-md">
              <Image
                src="/images/actors/contact horizontally.jpg"
                alt="Contact Delhi Casting Agency - Let's Connect"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 via-[#171717]/20 to-transparent" />
            </div>

            <h1 className="font-serif text-3xl font-extrabold tracking-tight text-[#171717] sm:text-5xl md:text-6xl">
              Let&apos;s Connect
            </h1>

            <p className="mt-4 max-w-3xl text-base font-normal leading-relaxed text-[#171717]/75 sm:text-lg">
              Have a question about registration, talent categories or the platform? Get in touch with our online-first agency.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 py-6">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />
      </div>

      {/* Contact Section */}
      <section className="mx-auto max-w-7xl px-6 py-10 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Info Left */}
          <Reveal>
            <div className="rounded-xl border border-[#E2DDD3] bg-[#EFECE4] p-6 shadow-md sm:p-8">
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
                <Sparkles className="h-3.5 w-3.5" />
                Get In Touch
              </span>

              <h2 className="mt-3 font-serif text-2xl font-bold tracking-tight text-[#171717] sm:text-3xl">
                We are here to help.
              </h2>

              <p className="mt-3 text-xs leading-relaxed text-[#171717]/75 sm:text-sm">
                Whether you are an artist seeking registration guidance or a production team looking for casting solutions and talent placement across India, reach out through our official channels.
              </p>

              <div className="mt-6 space-y-4">
                <ContactCard
                  icon={<Mail className="h-4 w-4 text-[#C5A059]" />}
                  title="Email"
                  value="klmn@gmail.com"
                  description="Official agency inquiry address."
                />

                <ContactCard
                  icon={<Phone className="h-4 w-4 text-[#C5A059]" />}
                  title="Phone"
                  value="+91 7074545456"
                  description="Direct desk for artist and production queries."
                />

                <ContactCard
                  icon={<MapPin className="h-4 w-4 text-[#C5A059]" />}
                  title="Online-First Agency"
                  value="Delhi NCR / Serving Talent Across India"
                  description="Operations powered through digital casting tools and audition management."
                />
              </div>

              <div className="mt-6 border-t border-[#E2DDD3] pt-4">
                <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#C5A059]">
                  Official Social Channels
                </h3>
                <div className="flex flex-col gap-2 text-xs text-[#171717]/75">
                  <a
                    href={OFFICIAL_DCA_INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[#C5A059]"
                  >
                    <InstagramIcon className="h-4 w-4 text-[#C5A059]" />
                    <span>Instagram: @delhicastingagency</span>
                  </a>
                  <a
                    href={OFFICIAL_DCA_LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[#C5A059]"
                  >
                    <LinkedinIcon className="h-4 w-4 text-[#C5A059]" />
                    <span>LinkedIn: Delhi Casting Agency</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form Right */}
          <Reveal delay={0.1}>
            <div className="rounded-xl border border-[#E2DDD3] bg-[#EFECE4] p-6 shadow-xl sm:p-8">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
                Contact Form
              </span>

              <h2 className="mt-2 font-serif text-2xl font-bold tracking-tight text-[#171717] sm:text-3xl">
                Send us a message
              </h2>

              {submitted ? (
                <div className="mt-6 rounded-lg border border-[#C5A059]/30 bg-[#F5F2EA] p-6 text-center">
                  <CheckCircle2 className="mx-auto h-8 w-8 text-[#C5A059]" />
                  <h3 className="mt-3 font-serif text-xl font-bold text-[#171717]">
                    Message Received
                  </h3>
                  <p className="mt-2 text-xs text-[#171717]/70">
                    Thank you for reaching out. A DCA talent representative will get back to you.
                  </p>
                  <Button
                    type="button"
                    variant="ghost"
                    className="mt-4 border border-[#171717] text-[#171717]"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-xs font-bold uppercase tracking-wider text-[#171717]">
                      Full Name
                    </label>
                    <input id="name" name="name" type="text" required placeholder="Your full name" className={inputClass} />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1 block text-xs font-bold uppercase tracking-wider text-[#171717]">
                      Email Address
                    </label>
                    <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-1 block text-xs font-bold uppercase tracking-wider text-[#171717]">
                      Phone Number
                    </label>
                    <input id="phone" name="phone" type="tel" placeholder="Your phone number" className={inputClass} />
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-1 block text-xs font-bold uppercase tracking-wider text-[#171717]">
                      Subject
                    </label>
                    <select id="subject" name="subject" required defaultValue="" className={inputClass}>
                      <option value="" disabled>Select a subject</option>
                      <option value="registration">Registration</option>
                      <option value="casting">Casting Opportunities</option>
                      <option value="membership">Membership</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1 block text-xs font-bold uppercase tracking-wider text-[#171717]">
                      Message
                    </label>
                    <textarea id="message" name="message" required rows={5} placeholder="How can we help you?" className={`${inputClass} resize-none`} />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#171717] py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[#F5F2EA] transition duration-300 hover:bg-[#C5A059] hover:text-[#171717]"
                  >
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

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
    <div className="rounded-lg border border-[#E2DDD3] bg-[#F5F2EA] p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#C5A059]/30 bg-[#EFECE4]">
          {icon}
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059]">{title}</p>
          <h3 className="font-serif text-sm font-bold text-[#171717]">{value}</h3>
          <p className="mt-1 text-xs text-[#171717]/65">{description}</p>
        </div>
      </div>
    </div>
  );
}
