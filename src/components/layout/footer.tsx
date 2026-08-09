// "use client";

// import Link from "next/link";
// import { motion } from "motion/react";
// import {
//   Mail,
//   MessageCircle,
//   ShieldCheck,
//   ArrowUpRight,
//   Phone,
//   MapPin,
// } from "lucide-react";

// import { Logo } from "@/components/logo";
// import { SITE } from "@/lib/constants";

// // const FOOTER_LINKS = [
// //   {
// //     title: "Company",
// //     links: [
// //       { label: "About Delhi Casting Agency", href: "#" },
// //       { label: "Contact Us", href: "#" },
// //       { label: "Instagram", href: "#" },
// //     ],
// //   },
// //   {
// //     title: "Legal",
// //     links: [
// //       { label: "Privacy Policy", href: "#" },
// //       { label: "Terms & Conditions", href: "#" },
// //       { label: "Refund Policy", href: "#" },
// //     ],
// //   },
// //   {
// //     title: "Support",
// //     links: [
// //       { label: "WhatsApp Support", href: "#" },
// //       { label: "Email Support", href: "#" },
// //     ],
// //   },
// // ];

// export function Footer() {
//   return (
//     <footer className="relative overflow-hidden border-t border-white/10 bg-[#090909]">
//       <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7 }}
//         className="mx-auto max-w-7xl px-8 py-20"
//       >

// <div className="mt-10 grid lg:grid-cols-2 gap-14 items-start">

//   {/* LEFT SIDE (TEXT) */}
//   <div>
//     <p className="max-w-xl text-lg leading-9 text-white/70">
//       {SITE.agency} provides verified casting opportunities for Bollywood,
//       OTT, TV Shows, Fashion Shows, Print Ads and Brand Campaigns across India.
//     </p>
//   </div>

//   {/* RIGHT SIDE (FEATURES) */}
//   <div className="flex flex-col gap-5">

//     <div className="flex items-start gap-3 text-white/80">
//       <ShieldCheck className="h-5 w-5 text-[#D4AF37] mt-1" />
//       <span>Secure Lifetime Membership</span>
//     </div>

//     <div className="flex items-start gap-3 text-white/80">
//       <MessageCircle className="h-5 w-5 text-[#D4AF37] mt-1" />
//       <span>Daily WhatsApp Casting Updates</span>
//     </div>

//     <div className="flex items-start gap-3 text-white/80">
//       <Mail className="h-5 w-5 text-[#D4AF37] mt-1" />
//       <span>Professional Support Team</span>
//     </div>

//   </div>

// </div>

//         {/* Right */}
//         {/*
//           <div className="grid gap-10 sm:grid-cols-3">
//             {FOOTER_LINKS.map((column) => (
//               <div key={column.title}>
//                 <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">
//                   {column.title}
//                 </h4>

//                 <ul className="space-y-4">
//                   {column.links.map((link) => (
//                     <li key={link.label}>
//                       <Link
//                         href={link.href}
//                         className="group inline-flex items-center gap-2 text-white/60 transition-all duration-300 hover:text-[#D4AF37]"
//                       >
//                         {link.label}

//                         <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div> */}

//         {/* Contact */}

//         <div className="mt-16 grid gap-6 border-y border-white/10 py-10 md:grid-cols-3">
//           <div className="flex items-center gap-3">
//             <Phone className="h-5 w-5 text-[#D4AF37]" />
//             <div>
//               <p className="text-sm text-white/50">+91 7074545456</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <Mail className="h-5 w-5 text-[#D4AF37]" />
//             <div>
//               <p className="text-sm text-white/50">klmn@gmail.com</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <MapPin className="h-5 w-5 text-[#D4AF37]" />
//             <div>
//               <p className="text-sm text-white/50">Address</p>
//             </div>
//           </div>
//         </div>

//         {/* Disclaimer */}

//         <div className="mt-12 rounded-2xl border border-[#D4AF37]/20 bg-white/[0.03] p-6">
//           <p className="text-center text-sm leading-7 text-white/55">
//             <span className="font-semibold text-[#D4AF37]">
//               Important Notice:
//             </span>{" "}
//             Membership provides access to verified casting opportunities and
//             related services. Membership does not guarantee selection,
//             employment, auditions, or roles. Final selection depends entirely on
//             production requirements and audition performance.
//           </p>
//         </div>

//         {/* Bottom */}

//         <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
//           <p className="text-sm text-white/40">
//             © {new Date().getFullYear()} {SITE.agency}. All Rights Reserved.
//           </p>

//           <p className="text-sm text-white/40">
//             Crafted with ❤️ for aspiring artists across India.
//           </p>
//         </div>
//       </motion.div>
//     </footer>
//   );
// }
//================================================================

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MessageCircle, ShieldCheck, Phone, MapPin } from "lucide-react";

import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-7xl px-6 py-20"
      >
        {/* 🔥 TOP SECTION (FIXED GRID) */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* ================= LEFT SIDE ================= */}
          <div className="max-w-md">
            <p className="text-white/80 text-lg leading-relaxed">
              Delhi Casting Agency provides verified casting opportunities for
              Bollywood, OTT, TV Shows, Fashion Shows, Print Ads and Brand
              Campaigns across India.
            </p>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex flex-col gap-6 max-w-md  ">
            <div className="flex items-start gap-3 text-white/80">
              <ShieldCheck className="h-5 w-5 text-[#D4AF37] mt-1" />
              <span>Secure Lifetime Membership</span>
            </div>

            <div className="flex items-start gap-3 text-white/80">
              <MessageCircle className="h-5 w-5 text-[#D4AF37] mt-1" />
              <span>Daily WhatsApp Casting Updates</span>
            </div>

            <div className="flex items-start gap-3 text-white/80">
              <Mail className="h-5 w-5 text-[#D4AF37] mt-1" />
              <span>Professional Support Team</span>
            </div>
          </div>
        </div>

        {/* ================= CONTACT ================= */}
        <div className="mt-16 grid gap-6 border-y border-white/10 py-10 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-[#D4AF37]" />
            <p className="text-sm text-white/50">+91 7074545456</p>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-[#D4AF37]" />
            <p className="text-sm text-white/50">klmn@gmail.com</p>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-[#D4AF37]" />
            <p className="text-sm text-white/50">Address</p>
          </div>
        </div>

        {/* ================= DISCLAIMER ================= */}
        <div className="mt-12 rounded-2xl border border-[#D4AF37]/20 bg-white/[0.03] p-6">
          <p className="text-center text-sm leading-7 text-white/55">
            <span className="font-semibold text-[#D4AF37]">
              Important Notice:
            </span>{" "}
            Membership provides access to verified casting opportunities and
            related services. Membership does not guarantee selection,
            employment, auditions, or roles. Final selection depends entirely on
            production requirements and audition performance.
          </p>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} {SITE.agency}. All Rights Reserved.
          </p>

          <p className="text-sm text-white/40">
            Crafted with ❤️ for aspiring artists across India.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}