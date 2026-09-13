"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Building2,
  UserCheck,
  Zap,
  Lock,
  Clock,
  FileCheck2,
  PhoneCall,
  Star,
  Layers,
  ChevronDown,
} from "lucide-react";

import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { PremiumFlowModal, PremiumModalStep } from "@/components/premium-flow-modal";
import { isUserAuthenticated } from "@/lib/auth";
import { OrbitalExperienceCards } from "@/components/membership/OrbitalExperienceCards";

export default function MembershipPage() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInitialStep, setModalInitialStep] = useState<PremiumModalStep | undefined>(undefined);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <main className="min-h-screen bg-white text-[#111111]">
      {/* =========================================================================
          HERO SECTION: High-Impact Editorial Header (Agency Grade, Not a Blog)
          ========================================================================= */}
      <section className="relative isolate overflow-hidden border-b border-gray-200 bg-gradient-to-b from-[#F7F7F5] via-white to-[#FDFBF7] px-6 pb-12 pt-28 sm:pb-16 sm:pt-36">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D4AF37]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                <Sparkles className="h-3.5 w-3.5" />
                Commercial Casting Passes &amp; Membership
              </span>
              <span className="rounded-full bg-black/5 px-2.5 py-0.5 text-[11px] font-semibold text-[#555555]">
                Zero Brokerage • 100% Verified
              </span>
            </div>

            <h1 className="font-serif text-3xl font-extrabold tracking-tight text-[#111111] sm:text-5xl lg:text-6xl">
              Official Membership &amp;{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#B38728] bg-clip-text text-transparent">
                Casting Access
              </span>
            </h1>

            <p className="mt-4 max-w-3xl text-base font-normal leading-relaxed text-[#444444] sm:text-lg">
              Empowering India&apos;s leading production houses, OTT networks, and advertising agencies with direct access to pre-screened talent — while accelerating performers with direct auditions and zero brokerage.
            </p>

            {/* Quick Agency Trust Metrics Bar */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 border-t border-gray-200/80 pt-6">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#D4AF37]/10 text-[#D4AF37]">
                  <UserCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-[#111111]">500+ Curated</div>
                  <div className="text-[11px] text-[#666666]">Verified Performers</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-[#111111]">2–4 Hours</div>
                  <div className="text-[11px] text-[#666666]">Casting Turnaround</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#D4AF37]/10 text-[#D4AF37]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-[#111111]">0% Brokerage</div>
                  <div className="text-[11px] text-[#666666]">Direct Client Deals</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Lock className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-[#111111]">PayU Encrypted</div>
                  <div className="text-[11px] text-[#666666]">256-Bit SSL Secured</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Membership & Pricing" }]} />
      </div>

      {/* =========================================================================
          SECTION 1: PAYMENT & COMMERCIAL CASTING PASSES (Placed Sabse Upar)
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-8 sm:py-12">
        <Reveal>
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              <Zap className="h-3.5 w-3.5" />
              Transparent Pricing &amp; Commercial Passes
            </span>
            <h2 className="mt-2 font-serif text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl">
              Choose Your Platform Pass
            </h2>
            <p className="mt-2 text-sm text-[#555555] sm:text-base">
              Instant activation with zero hidden agency fees. Select whether you are casting talent for a brand or registering as a professional artist.
            </p>
          </div>
        </Reveal>

        {/* Dual Commercial Pricing Cards: Brand Pass (Highlighted) + Artist Pro */}
        <div className="grid gap-8 lg:grid-cols-2 items-stretch max-w-5xl mx-auto">
          {/* =====================================================================
              CARD 1: BRAND & PRODUCTION HOUSE CASTING PASS (HEAVILY HIGHLIGHTED)
              ===================================================================== */}
          <Reveal delay={0.05} className="h-full">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border-2 border-[#D4AF37] bg-gradient-to-b from-white via-[#FDFBF7] to-[#F7F5EE] p-7 sm:p-9 shadow-2xl shadow-[#D4AF37]/10 ring-1 ring-[#D4AF37]/40">
              {/* Gold Top Banner Ribbon */}
              <div className="absolute top-0 right-0 bg-gradient-to-l from-[#D4AF37] to-[#B89222] text-white px-5 py-1.5 rounded-bl-2xl text-[11px] font-extrabold uppercase tracking-widest shadow-md">
                ★ Enterprise Brand Pass
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#D4AF37]/20 text-[#D4AF37]">
                    <Building2 className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B89222]">
                    For Brands, Ad Agencies &amp; Production Houses
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#111111]">
                  Premium Casting Account
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#555555] leading-relaxed">
                  Tailored for casting directors, OTT networks, and production banners who need verified talent shortlists, comp-cards, and priority bookings.
                </p>

                {/* Price Display */}
                <div className="mt-6 rounded-2xl border border-[#D4AF37]/30 bg-white/80 p-4 backdrop-blur-xs">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-bold text-[#D4AF37]">₹</span>
                    <span className="text-4xl sm:text-5xl font-black tracking-tight text-[#111111]">
                      9,999
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-500">
                      / 3 Months Access
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] font-medium text-[#D4AF37]">
                    ✓ Includes unlimited talent search &amp; dedicated casting manager
                  </p>
                </div>

                {/* High-Value Deliverables for Brands */}
                <div className="mt-6 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#222222]">
                    What Your Brand Receives:
                  </div>

                  <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#333333]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D4AF37] mt-0.5" />
                      <span>
                        <strong>Unlimited Roster Access:</strong> Direct contact &amp; comp-cards for 500+ verified actors, models &amp; child artists.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D4AF37] mt-0.5" />
                      <span>
                        <strong>2–4 Hour Turnaround:</strong> Rapid availability checks, unfiltered audition showreels, and booking confirmation.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D4AF37] mt-0.5" />
                      <span>
                        <strong>Broadcast Casting Briefs:</strong> Publish priority audition calls directly to all verified artists on the portal.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D4AF37] mt-0.5" />
                      <span>
                        <strong>Dedicated Casting Supervisor:</strong> Single point of agency contact for call-sheets, auditions &amp; rate coordination.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D4AF37] mt-0.5" />
                      <span>
                        <strong>Standard Contracts &amp; NDA:</strong> Legally verified performer agreements and clear broadcast media usage rights.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D4AF37] mt-0.5" />
                      <span>
                        <strong>0% Production Commission:</strong> No hidden commission on artist talent fees.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action Buttons for Brand */}
              <div className="mt-8 space-y-3">
                <button
                  type="button"
                  onClick={() => {
                    if (!isUserAuthenticated()) {
                      router.push("/register/brand");
                    } else {
                      setModalInitialStep("brand_checkout");
                      setModalOpen(true);
                    }
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#111111] py-3.5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#111111] hover:shadow-xl hover:shadow-[#D4AF37]/25 cursor-pointer active:scale-98"
                >
                  <span>Activate Brand Casting Pass — ₹9,999</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <div className="flex items-center justify-center gap-2 text-center text-xs text-[#666666]">
                  <span>Need an urgent custom shoot?</span>
                  <Link
                    href="/inquiry"
                    className="font-bold text-[#D4AF37] hover:underline"
                  >
                    Submit Casting Brief &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          {/* =====================================================================
              CARD 2: ARTIST PRO TALENT MEMBERSHIP
              ===================================================================== */}
          <Reveal delay={0.1} className="h-full">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 sm:p-9 shadow-lg hover:border-gray-300 transition-all duration-300">
              {/* Roster Badge */}
              <div className="absolute top-0 right-0 bg-[#F7F7F5] border-b border-l border-gray-200 text-[#444444] px-4 py-1.5 rounded-bl-2xl text-[10px] font-bold uppercase tracking-wider">
                Artist Pro Pass
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#D4AF37]/10 text-[#D4AF37]">
                    <UserCheck className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                    For Actors, Models &amp; Performers
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#111111]">
                  3-Month Artist Membership
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#555555] leading-relaxed">
                  Engineered for serious performers seeking verified public visibility, direct Bollywood/OTT audition calls, and comp-card distribution.
                </p>

                {/* Price Display */}
                <div className="mt-6 rounded-2xl border border-gray-200 bg-[#F7F7F5] p-4">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-bold text-[#D4AF37]">₹</span>
                    <span className="text-4xl sm:text-5xl font-black tracking-tight text-[#111111]">
                      1,999
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-500">
                      / 3 Months Access
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] font-medium text-emerald-600">
                    ✓ Full verified status on Delhi Casting Agency roster
                  </p>
                </div>

                {/* High-Value Deliverables for Artists */}
                <div className="mt-6 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#222222]">
                    What Your Artist Profile Receives:
                  </div>

                  <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#333333]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D4AF37] mt-0.5" />
                      <span>
                        <strong>DCA Verified Gold Badge:</strong> High-priority placement in public directory searched by top directors.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D4AF37] mt-0.5" />
                      <span>
                        <strong>Direct Audition Submissions:</strong> Apply directly to Bollywood feature films, TVCs &amp; OTT web series.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D4AF37] mt-0.5" />
                      <span>
                        <strong>Digital Comp-Card Distribution:</strong> Shareable agency portfolio shared with 150+ commercial clients.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D4AF37] mt-0.5" />
                      <span>
                        <strong>WhatsApp &amp; SMS Callback Alerts:</strong> Instant notifications for auditions matching your age and look.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D4AF37] mt-0.5" />
                      <span>
                        <strong>Zero Commission on Bookings:</strong> You keep 100% of your acting / modeling remuneration.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D4AF37] mt-0.5" />
                      <span>
                        <strong>Contract &amp; Scam Protection:</strong> Standardized casting guidance and escrow payment verification.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action Button for Artist */}
              <div className="mt-8 space-y-3">
                <button
                  type="button"
                  onClick={() => {
                    if (!isUserAuthenticated()) {
                      router.push("/profile/setup");
                    } else {
                      setModalInitialStep("artist_checkout");
                      setModalOpen(true);
                    }
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#D4AF37] py-3.5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#C59B27] hover:shadow-lg hover:shadow-[#D4AF37]/20 cursor-pointer active:scale-98"
                >
                  <span>Become Premium Artist — ₹1,999</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <div className="flex items-center justify-center gap-2 text-center text-xs text-[#666666]">
                  <span>New to Delhi Casting Agency?</span>
                  <Link
                    href="/profile/setup"
                    className="font-bold text-[#D4AF37] hover:underline"
                  >
                    Start Free Setup &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Security & Commercial Trust Strip */}
        <div className="mt-10 mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-[#FAFAFA] p-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#555555]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              PayU 256-Bit SSL Encrypted
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-[#D4AF37]" />
              Instant Account Activation
            </span>
            <span className="flex items-center gap-1.5">
              <FileCheck2 className="h-4 w-4 text-blue-600" />
              Official GST Tax Invoice
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#D4AF37]" />
              Zero Hidden Charges
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: DEDICATED BRAND & PRODUCTION HOUSE ADVANTAGE (Attract Brands)
          ========================================================================= */}
      <section className="border-t border-b border-gray-200 bg-white text-[#111111] px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37]/15 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.25em] text-[#B89222] border border-[#D4AF37]/30">
                <Building2 className="h-3.5 w-3.5" />
                Enterprise Casting Advantage
              </span>
              <h2 className="mt-3 font-serif text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl lg:text-5xl">
                Why India&apos;s Top Production Houses &amp; Brands Cast Through DCA
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#555555]">
                From national TV commercials and OTT web series to Bollywood feature films, Delhi Casting Agency provides vetted talent shortlists with verified physical metrics and zero filter distortion.
              </p>
            </div>
          </Reveal>

          {/* 4 Core Pillars for Brands */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal delay={0.05} className="h-full">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-gray-200 bg-[#F9F9F8] p-6 transition-all duration-300 hover:border-[#D4AF37] hover:bg-white hover:shadow-lg">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] mb-4">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#111111]">
                    2-Hour Shortlists
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#555555]">
                    Skip sorting through thousands of unfiltered social media DMs. Receive curated comp-cards tailored to your script brief in under 2 hours.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200 text-[11px] font-semibold text-[#D4AF37]">
                  Instant Availability Check
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="h-full">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-gray-200 bg-[#F9F9F8] p-6 transition-all duration-300 hover:border-[#D4AF37] hover:bg-white hover:shadow-lg">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] mb-4">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#111111]">
                    Zero Filter Distortion
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#555555]">
                    Every artist&apos;s height, vital stats, and self-tapes are authenticated in-person or by agency casting supervisors. No surprises on shoot day.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200 text-[11px] font-semibold text-[#D4AF37]">
                  100% Verified Metrics
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="h-full">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-gray-200 bg-[#F9F9F8] p-6 transition-all duration-300 hover:border-[#D4AF37] hover:bg-white hover:shadow-lg">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] mb-4">
                    <Layers className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#111111]">
                    Turnkey Coordination
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#555555]">
                    A dedicated DCA talent manager handles audition callback rounds, wardrobe trial schedules, and shoot-day logistics alongside your team.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200 text-[11px] font-semibold text-[#D4AF37]">
                  Dedicated Talent Manager
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="h-full">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-gray-200 bg-[#F9F9F8] p-6 transition-all duration-300 hover:border-[#D4AF37] hover:bg-white hover:shadow-lg">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] mb-4">
                    <FileCheck2 className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#111111]">
                    Legal &amp; NDA Safety
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#555555]">
                    Standardized Bollywood performer agreements, clear digital and broadcast usage rights, and transparent payment escrow protection.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200 text-[11px] font-semibold text-[#D4AF37]">
                  Standard Performer Contracts
                </div>
              </div>
            </Reveal>
          </div>

          {/* Urgent Brand Casting Callout Card */}
          <div className="mt-12 rounded-3xl border border-[#D4AF37]/40 bg-gradient-to-r from-[#FDFBF7] via-[#FAF7F0] to-[#F5F2E8] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B89222]">
                Immediate Production Requirement?
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111111] mt-1">
                Have an urgent commercial or OTT casting call to fill?
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] mt-1 max-w-2xl">
                Submit your character brief directly to our Senior Casting Desk. We dispatch shortlisted audition tapes within 2 to 4 hours.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/inquiry"
                className="flex items-center gap-2 rounded-full bg-[#D4AF37] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#C59B27] hover:shadow-lg hover:shadow-[#D4AF37]/20 cursor-pointer"
              >
                <span>Submit Casting Brief</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/register/brand"
                className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#222222] transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                <span>Register Brand Account</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: WHAT YOUR MEMBERSHIP EXPERIENCE COVERS (Animated Orbital Circle)
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <Reveal>
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              <Sparkles className="h-3.5 w-3.5" />
              360° Casting Ecosystem
            </span>

            <h2 className="mt-3 font-serif text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl lg:text-5xl">
              What your membership experience covers
            </h2>

            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#555555]">
              The 6 core pillars connecting actors, models, and performers with high-paying commercial campaigns and verified film productions.
            </p>
          </div>
        </Reveal>

        {/* Circular Orbital Layout with 6 Floating Animated Cards */}
        <OrbitalExperienceCards />
      </section>

      {/* =========================================================================
          SECTION 4: COMMERCIAL COMPARISON TABLE (Artist Pro vs Brand Pass)
          ========================================================================= */}
      <section className="border-t border-gray-200 bg-[#F9F9F8] px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                Direct Plan Comparison
              </span>
              <h2 className="mt-2 font-serif text-3xl font-extrabold text-[#111111]">
                Side-by-Side Deliverables
              </h2>
              <p className="mt-1 text-sm text-[#666666]">
                Clear transparency on what each commercial tier unlocks across our casting ecosystem.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 bg-[#F5F5F3]">
                    <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider text-gray-600">
                      Deliverables &amp; Features
                    </th>
                    <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider text-[#111111] bg-[#F9F8F3] border-l border-r border-gray-200">
                      Artist Pro (₹1,999)
                    </th>
                    <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider text-[#B89222] bg-[#FAF6E9]">
                      Brand &amp; Casting Pass (₹9,999)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-xs sm:text-[13px]">
                  <tr>
                    <td className="p-4 font-semibold text-[#222222]">Target Audience</td>
                    <td className="p-4 text-gray-700 bg-[#FDFCF9] border-l border-r border-gray-100">
                      Actors, Models, Performers
                    </td>
                    <td className="p-4 font-semibold text-[#111111] bg-[#FDFBF3]">
                      Production Houses, OTT, Brands
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#222222]">Access Duration</td>
                    <td className="p-4 text-gray-700 bg-[#FDFCF9] border-l border-r border-gray-100">
                      3 Months Full Access
                    </td>
                    <td className="p-4 text-gray-700 bg-[#FDFBF3]">3 Months Enterprise Access</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#222222]">Public Roster Status</td>
                    <td className="p-4 text-emerald-700 font-semibold bg-[#FDFCF9] border-l border-r border-gray-100">
                      ✓ Verified Gold Comp-Card Badge
                    </td>
                    <td className="p-4 text-gray-700 bg-[#FDFBF3]">
                      ✓ Verified Production Banner Badge
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#222222]">Audition Submissions</td>
                    <td className="p-4 text-emerald-700 font-semibold bg-[#FDFCF9] border-l border-r border-gray-100">
                      ✓ Unlimited Direct Applications
                    </td>
                    <td className="p-4 text-gray-500 bg-[#FDFBF3]">—</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#222222]">Casting Call Broadcasting</td>
                    <td className="p-4 text-gray-500 bg-[#FDFCF9] border-l border-r border-gray-100">
                      —
                    </td>
                    <td className="p-4 text-emerald-700 font-semibold bg-[#FDFBF3]">
                      ✓ Broadcast Unlimited Audition Calls
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#222222]">Talent Comp-Cards &amp; Tapes</td>
                    <td className="p-4 text-gray-700 bg-[#FDFCF9] border-l border-r border-gray-100">
                      Agency Digital Comp-Card
                    </td>
                    <td className="p-4 text-emerald-700 font-semibold bg-[#FDFBF3]">
                      ✓ Full Contact Info &amp; Unfiltered Tapes
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#222222]">Dedicated Coordinator</td>
                    <td className="p-4 text-gray-700 bg-[#FDFCF9] border-l border-r border-gray-100">
                      Agency Audition Helpdesk
                    </td>
                    <td className="p-4 text-emerald-700 font-semibold bg-[#FDFBF3]">
                      ✓ Dedicated Senior Casting Supervisor
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#222222]">Agency Brokerage Fee</td>
                    <td className="p-4 text-emerald-700 font-bold bg-[#FDFCF9] border-l border-r border-gray-100">
                      0% (Keep 100% of Pay)
                    </td>
                    <td className="p-4 text-emerald-700 font-bold bg-[#FDFBF3]">
                      0% (Direct Performer Contracts)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#222222]">Callback Notifications</td>
                    <td className="p-4 text-gray-700 bg-[#FDFCF9] border-l border-r border-gray-100">
                      Instant WhatsApp &amp; SMS
                    </td>
                    <td className="p-4 text-gray-700 bg-[#FDFBF3]">
                      Real-Time Audition Tape Desk
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: COMMERCIAL FAQS
          ========================================================================= */}
      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <Reveal>
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              Common Queries
            </span>
            <h2 className="mt-2 font-serif text-3xl font-extrabold text-[#111111]">
              Frequently Asked Questions
            </h2>
            <p className="mt-1 text-sm text-[#666666]">
              Everything you need to know about our casting passes, payment security, and agency deliverables.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "How soon after payment is my account or brand pass active?",
                a: "Immediately. Our PayU payment gateway confirms transactions within seconds. For artists, your Verified Gold Badge and comp-card become live on the roster instantly. For brands, full contact access and casting call broadcasting unlock right away.",
              },
              {
                q: "Does Delhi Casting Agency take a commission on artist bookings?",
                a: "No. Unlike traditional middleman agencies that deduct 20% to 30% from talent paychecks, DCA operates on a zero-brokerage membership model. Performers negotiate directly and retain 100% of their contracted fees.",
              },
              {
                q: "Can brands and production houses book urgent 24-hour casting calls?",
                a: "Yes. Premium Casting Account holders receive a dedicated Senior Casting Supervisor who dispatches pre-screened audition tapes and availability confirmations within 2 to 4 hours.",
              },
              {
                q: "What payment methods are supported?",
                a: "We support all major Indian and international payment options via PayU 256-bit encrypted checkout, including UPI (Google Pay, PhonePe, Paytm), Credit & Debit Cards (Visa, MasterCard, RuPay), NetBanking, and corporate billing.",
              },
              {
                q: "Will I receive an official tax invoice for corporate expenses?",
                a: "Yes. All transactions generate an automated GST-compliant tax invoice sent directly to your registered email address for accounting and expense filing.",
              },
            ].map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-200 bg-white transition-all overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(i)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-bold text-[#111111] hover:text-[#D4AF37] cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 transition-transform duration-300 text-gray-500 ${
                        isOpen ? "rotate-180 text-[#D4AF37]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed text-[#555555] border-t border-gray-100 bg-[#FAFAFA]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* =========================================================================
          SECTION 6: FINAL CONCIERGE CTA
          ========================================================================= */}
      <section className="border-t border-gray-200 bg-gradient-to-b from-[#F7F7F5] via-white to-[#FDFBF7] text-[#111111] px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D4AF37]/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#B89222]">
              <Star className="h-3.5 w-3.5 fill-[#D4AF37] text-[#D4AF37]" />
              Start Your Casting Journey Today
            </span>

            <h2 className="mt-4 font-serif text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl lg:text-5xl">
              Ready to Access India&apos;s Elite Casting Network?
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-[#555555] leading-relaxed">
              Join hundreds of working actors, commercial models, top brands, and Bollywood casting directors collaborating safely with zero brokerage.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => {
                  if (!isUserAuthenticated()) {
                    router.push("/register/brand");
                  } else {
                    setModalInitialStep("brand_checkout");
                    setModalOpen(true);
                  }
                }}
                className="flex items-center gap-2 rounded-full bg-[#111111] px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#111111] hover:shadow-xl hover:shadow-[#D4AF37]/30 cursor-pointer active:scale-98"
              >
                <Building2 className="h-4 w-4" />
                <span>Activate Brand Pass — ₹9,999</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  if (!isUserAuthenticated()) {
                    router.push("/profile/setup");
                  } else {
                    setModalInitialStep("artist_checkout");
                    setModalOpen(true);
                  }
                }}
                className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#222222] transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:shadow-md cursor-pointer active:scale-98"
              >
                <UserCheck className="h-4 w-4" />
                <span>Join as Artist — ₹1,999</span>
              </button>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#666666]">
              <PhoneCall className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span>Questions? Speak with our Lead Casting Desk:</span>
              <Link href="/contact-us" className="text-[#D4AF37] underline font-bold">
                Contact Concierge
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Global Premium Checkout Modal */}
      <PremiumFlowModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialStep={modalInitialStep}
      />
    </main>
  );
}
