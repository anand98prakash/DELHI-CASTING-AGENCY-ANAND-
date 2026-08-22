"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone, ShieldCheck } from "lucide-react";

import { SITE } from "@/lib/constants";
import { FOOTER_GROUPS } from "@/lib/site-navigation";
import { OFFICIAL_DCA_INSTAGRAM_URL, OFFICIAL_DCA_LINKEDIN_URL } from "@/data/media";

function InstagramIcon({ className = "h-5 w-5 text-[#C5A059]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-5 w-5 text-[#C5A059]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#222222] bg-[#111111] text-[#F5F2EA]">
      <div className="h-0.5 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-wider text-[#F5F2EA] uppercase">Delhi Casting Agency</span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#F5F2EA]/70">Delhi Casting Agency is an online-first casting platform serving talent across India. Explore casting categories, talent segments, resources and registration information.</p>
            <div className="mt-6 space-y-3 text-xs text-[#F5F2EA]/60">
              <div className="flex items-start gap-3"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#C5A059]" /><span>Membership and casting information presented with clear selection disclaimers.</span></div>
              <div className="flex items-start gap-3"><MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#C5A059]" /><span>Online-first support and community access information.</span></div>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {FOOTER_GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059]">{group.title}</h3>
                <ul className="space-y-2">
                  {group.links.map((link) => <li key={link.href}><Link href={link.href} className="text-xs text-[#F5F2EA]/60 transition hover:text-[#C5A059]">{link.label}</Link></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-4 border-y border-[#222222] py-6 sm:grid-cols-2 md:grid-cols-4">
          <a href="tel:+917074545456" className="flex items-center gap-3 text-xs text-[#F5F2EA]/60 transition hover:text-[#C5A059]"><Phone className="h-4 w-4 text-[#C5A059]" />+91 7074545456</a>
          <a href="mailto:klmn@gmail.com" className="flex items-center gap-3 text-xs text-[#F5F2EA]/60 transition hover:text-[#C5A059]"><Mail className="h-4 w-4 text-[#C5A059]" />klmn@gmail.com</a>
          <a href={OFFICIAL_DCA_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xs text-[#F5F2EA]/60 transition hover:text-[#C5A059]"><InstagramIcon className="h-4 w-4 text-[#C5A059]" />@delhicastingagency</a>
          <a href={OFFICIAL_DCA_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xs text-[#F5F2EA]/60 transition hover:text-[#C5A059]"><LinkedinIcon className="h-4 w-4 text-[#C5A059]" />Delhi Casting Agency</a>
        </div>

        <div className="mt-8 rounded-xl border border-[#C5A059]/20 bg-[#171717] p-5">
          <p className="text-center text-xs leading-relaxed text-[#F5F2EA]/60"><span className="font-semibold text-[#C5A059]">Important Notice:</span> Membership does not guarantee selection, employment, auditions, or roles. Final selection depends on production requirements and audition performance.</p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[#222222] pt-6 text-xs text-[#F5F2EA]/40 md:flex-row">
          <p>© {new Date().getFullYear()} {SITE.agency}. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a href={OFFICIAL_DCA_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">Instagram</a>
            <span>•</span>
            <a href={OFFICIAL_DCA_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">LinkedIn</a>
          </div>
          <p>Serving aspiring artists across India.</p>
        </div>
      </motion.div>
    </footer>
  );
}
