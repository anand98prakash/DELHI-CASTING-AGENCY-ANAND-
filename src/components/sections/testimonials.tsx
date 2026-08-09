// "use client";

// import { motion } from "framer-motion";
// import { Quote, Star } from "lucide-react";

// import { Reveal } from "@/components/ui/reveal";

// const TESTIMONIALS = [
//   {
//     quote:
//       "The registration process was smooth and I started receiving verified casting opportunities very quickly.",
//     name: "Priya Sharma",
//     role: "Aspiring Actor",
//     city: "Delhi",
//   },
//   {
//     quote:
//       "Daily WhatsApp updates helped me stay informed about new casting calls. The experience has been professional throughout.",
//     name: "Rohan Verma",
//     role: "Model",
//     city: "Mumbai",
//   },
//   {
//     quote:
//       "I appreciate the genuine opportunities and the support provided during my membership journey.",
//     name: "Simran Kaur",
//     role: "Content Creator",
//     city: "Pune",
//   },
// ];

// export function Testimonials() {
//   return (
//     <section
//       id="testimonials"
//       className="relative overflow-hidden bg-[#0B0B0B] py-28"
//     >
//       {/* Background Glow */}

//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_70%)]" />

//       <div className="relative mx-auto max-w-7xl px-6">
//         <Reveal>
//           <div className="mx-auto max-w-3xl text-center">
//             <div className="inline-flex items-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-5 py-2 text-sm text-[#D4AF37]">
//               ⭐ Real Members
//             </div>

//             <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
//               Hear From Our
//               <span className="block text-[#D4AF37]">Premium Members</span>
//             </h2>

//             <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
//               Discover what aspiring artists have to say about their experience
//               with our premium membership and verified casting opportunities.
//             </p>
//           </div>
//         </Reveal>

//         <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
//           {TESTIMONIALS.map((item, index) => (
//             <Reveal key={item.name}>
//               <motion.div
//                 initial={{ opacity: 0, y: 35 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   delay: index * 0.12,
//                   duration: 0.55,
//                 }}
//                 whileHover={{
//                   y: -8,
//                 }}
//                 className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#D4AF37]/40 hover:bg-white/[0.05]"
//               >
//                 {/* Gold Glow */}

//                 <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
//                   <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[90px]" />
//                 </div>

//                 {/* Quote */}

//                 <Quote
//                   className="absolute right-6 top-6 text-[#D4AF37]/15"
//                   size={60}
//                 />

//                 {/* Stars */}

//                 <div className="relative z-10 flex gap-1">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <Star
//                       key={i}
//                       size={18}
//                       className="fill-[#D4AF37] text-[#D4AF37]"
//                     />
//                   ))}
//                 </div>

//                 {/* Text */}

//                 <p className="relative z-10 mt-6 text-base leading-8 italic text-white/70">
//                   &ldquo;{item.quote}&rdquo;
//                 </p>

//                 {/* User */}

//                 <div className="relative z-10 mt-8 flex items-center gap-4">
//                   <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-lg font-bold text-[#D4AF37]">
//                     {item.name.charAt(0)}
//                   </div>

//                   <div>
//                     <h4 className="font-semibold text-white">{item.name}</h4>

//                     <p className="text-sm text-white/55">
//                       {item.role} • {item.city}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
//=======================================================================

// "use client";

// import { motion } from "framer-motion";
// import { Quote, Star } from "lucide-react";
// import { Reveal } from "@/components/ui/reveal";

// const TESTIMONIALS = [
//   {
//     quote:
//       "The registration process was smooth and I started receiving verified casting opportunities very quickly.",
//     name: "Priya Sharma",
//     role: "Aspiring Actor",
//     city: "Delhi",
//     image: "/images/priya.jpg",
//   },
//   {
//     quote:
//       "Daily WhatsApp updates helped me stay informed about new casting calls. The experience has been professional throughout.",
//     name: "Rohan Verma",
//     role: "Model",
//     city: "Mumbai",
//     image: "/images/rohan.jpg",
//   },
//   {
//     quote:
//       "I appreciate the genuine opportunities and the support provided during my membership journey.",
//     name: "Simran Kaur",
//     role: "Content Creator",
//     city: "Pune",
//     image: "/images/simran.jpg",
//   },
// ];

// export function Testimonials() {
//   return (
//     <section className="relative py-24">
//       {/* Background Glow */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_70%)]" />

//       <div className="relative mx-auto max-w-7xl px-6">
//         {/* Heading */}
//         <Reveal>
//           <div className="mx-auto max-w-3xl text-center">
//             <div className="inline-flex items-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-5 py-2 text-sm text-[#D4AF37]">
//               ⭐ Real Members
//             </div>

//             <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
//               Hear From Our
//               <span className="block text-[#D4AF37]">Premium Members</span>
//             </h2>

//             <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
//               Discover what aspiring artists have to say about their experience
//               with our premium membership and verified casting opportunities.
//             </p>
//           </div>
//         </Reveal>

//         {/* Cards */}
//         <div className="mt-20 grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
//           {TESTIMONIALS.map((item, index) => (
//             <Reveal key={item.name}>
//               <motion.div
//                 initial={{ opacity: 0, y: 35 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   delay: index * 0.12,
//                   duration: 0.55,
//                 }}
//                 whileHover={{ y: -8 }}
//                 className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#D4AF37]/40 hover:bg-white/[0.05]"
//               >
//                 {/* Glow */}
//                 <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
//                   <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[90px]" />
//                 </div>

//                 {/* Quote Icon */}
//                 <Quote
//                   className="absolute right-6 top-6 text-[#D4AF37]/15"
//                   size={60}
//                 />

//                 {/* Stars */}
//                 <div className="relative z-10 flex gap-1">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <Star
//                       key={i}
//                       size={18}
//                       className="fill-[#D4AF37] text-[#D4AF37]"
//                     />
//                   ))}
//                 </div>

//                 {/* Text */}
//                 <p className="relative z-10 mt-6 text-base leading-8 italic text-white/70">
//                   &ldquo;{item.quote}&rdquo;
//                 </p>

//                 {/* User (RECTANGULAR IMAGE + ALIGNMENT FIXED) */}
//                 <div className="relative z-10 mt-8 flex items-center gap-4">
//                   {/* Thumbnail */}
//                   <div className="h-14 w-20 overflow-hidden rounded-md border border-white/10 flex-shrink-0">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//                     />
//                   </div>

//                   {/* Info */}
//                   <div className="flex flex-col justify-center text-left">
//                     <h4 className="font-semibold text-white leading-tight">
//                       {item.name}
//                     </h4>

//                     <p className="text-sm text-white/55">
//                       {item.role} • {item.city}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
//===============================================================

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const TESTIMONIALS = [
  {
    quote:
      "The registration process was smooth and I started receiving verified casting opportunities very quickly.",
    name: "Priya Sharma",
    role: "Aspiring Actor",
    city: "Delhi",
    // image: "/images/icons/female 1.png",
  },
  {
    quote:
      "Daily WhatsApp updates helped me stay informed about new casting calls. The experience has been professional throughout.",
    name: "Rohan Verma",
    role: "Model",
    city: "Mumbai",
    // image: "/images/icons/male 1.png",
  },
  {
    quote:
      "I appreciate the genuine opportunities and the support provided during my membership journey.",
    name: "Simran Kaur",
    role: "Content Creator",
    city: "Pune",
    // image: "/images/icons/female 2.png",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Heading */}
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] text-[#D4AF37] uppercase">
              The Experience
            </p>

            <h2 className="mt-4 text-4xl md:text-6xl font-bold text-white">
              What Our Members Say
            </h2>
          </div>
        </Reveal>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -40 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-2xl"
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-10 backdrop-blur-xl">
                {/* Quote icon */}
                <Quote
                  className="absolute right-6 top-6 text-[#D4AF37]/15"
                  size={60}
                />

                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-[#D4AF37] text-[#D4AF37]"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="mt-6 text-lg leading-8 italic text-white/75">
                  “{TESTIMONIALS[index].quote}”
                </p>

                {/* User */}
                <div className="mt-10 flex items-center gap-4">
                  {/* 🔥 RECTANGULAR THUMBNAIL */}
                  {/* <div className="h-16 w-24 overflow-hidden rounded-lg border border-white/10 flex-shrink-0">
                    <img
                      src={TESTIMONIALS[index].image}
                      alt={TESTIMONIALS[index].name}
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div> */}

                  {/* Info */}
                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {TESTIMONIALS[index].name}
                    </h4>
                    <p className="text-sm text-white/50">
                      {TESTIMONIALS[index].role} • {TESTIMONIALS[index].city}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 md:-left-12 h-11 w-11 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition"
          >
            ←
          </button>

          <button
            onClick={next}
            className="absolute right-0 md:-right-12 h-11 w-11 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition"
          >
            →
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {TESTIMONIALS.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full cursor-pointer ${
                i === index ? "bg-[#D4AF37]" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}