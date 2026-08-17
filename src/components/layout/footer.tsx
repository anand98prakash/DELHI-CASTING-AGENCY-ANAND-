"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";

import { SITE } from "@/lib/constants";
import { FOOTER_GROUPS } from "@/lib/site-navigation";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link href="/" className="inline-block"><span className="sr-only">Delhi Casting Agency</span></Link>
            <p className="mt-5 max-w-md text-base leading-8 text-white/65">Delhi Casting Agency is an online-first casting platform serving talent across India. Explore casting categories, talent segments, resources and registration information.</p>
            <div className="mt-7 space-y-4 text-sm text-white/60">
              <div className="flex items-start gap-3"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" /><span>Membership and casting information presented with clear selection disclaimers.</span></div>
              <div className="flex items-start gap-3"><MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" /><span>Online-first support and community access information.</span></div>
            </div>
          </div>

          <div className="grid gap-9 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {FOOTER_GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">{group.title}</h3>
                <ul className="space-y-2.5">
                  {group.links.map((link) => <li key={link.href}><Link href={link.href} className="text-sm text-white/55 transition hover:text-gold">{link.label}</Link></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-5 border-y border-white/10 py-8 md:grid-cols-3">
          <a href="tel:+917074545456" className="flex items-center gap-3 text-sm text-white/55 transition hover:text-gold"><Phone className="h-5 w-5 text-gold" />+91 7074545456</a>
          <a href="mailto:klmn@gmail.com" className="flex items-center gap-3 text-sm text-white/55 transition hover:text-gold"><Mail className="h-5 w-5 text-gold" />klmn@gmail.com</a>
          <div className="flex items-center gap-3 text-sm text-white/55"><MapPin className="h-5 w-5 text-gold" />Online across India</div>
        </div>

        <div className="mt-10 rounded-2xl border border-gold/20 bg-white/[0.03] p-6">
          <p className="text-center text-sm leading-7 text-white/55"><span className="font-semibold text-gold">Important Notice:</span> Membership does not guarantee selection, employment, auditions, or roles. Final selection depends on production requirements and audition performance.</p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-7 text-sm text-white/35 md:flex-row">
          <p>© {new Date().getFullYear()} {SITE.agency}. All Rights Reserved.</p>
          <p>Serving aspiring artists across India.</p>
        </div>
      </motion.div>
    </footer>
  );
}
