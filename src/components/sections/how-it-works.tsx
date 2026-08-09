// import { Reveal } from "@/components/ui/reveal";

// const STEPS = [
//   { num: "01", tag: "REGISTER", title: "Create your profile", body: "Start your artist registration in under two minutes." },
//   { num: "02", tag: "PAY SECURELY", title: "One-time payment", body: "Complete your lifetime membership via Razorpay, UPI or card." },
//   { num: "03", tag: "COMPLETE PROFILE", title: "Add your details", body: "So casting teams can find the right fit for each project." },
//   { num: "04", tag: "GO LIVE", title: "Join WhatsApp", body: "Start receiving verified, daily casting calls." },
// ];

// export function HowItWorks() {
//   return (
//     <section
//       id="how"
//       className="py-[130px] px-6 bg-charcoal border-y border-gold/[0.18]"
//     >
//       <div className="max-w-[1080px] mx-auto">
//         <Reveal className="text-center max-w-[560px] mx-auto mb-14">
//           <span className="font-sans text-[12.5px] font-semibold tracking-[0.32em] text-gold uppercase">
//             The Reel
//           </span>
//           <h2 className="mt-3 font-display font-bold text-[28px] md:text-[42px] text-white">
//             How It Works
//           </h2>
//         </Reveal>

//         <Reveal>
//           <div className="flex overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:overflow-visible flex-col md:flex-row">
//             {STEPS.map((step, i) => (
//               <div
//                 key={step.num}
//                 className="flex-1 min-w-[220px] p-9 md:p-6 border-b md:border-b-0 md:border-r border-dashed border-gold/20 last:border-none"
//               >
//                 <span
//                   className="font-display font-bold text-[46px] leading-none text-transparent"
//                   style={{ WebkitTextStroke: "1.3px #d4af37" }}
//                 >
//                   {step.num}
//                 </span>
//                 <div className="mt-3.5 font-sans text-[10.5px] font-bold tracking-[0.14em] text-red uppercase">
//                   {step.tag}
//                 </div>
//                 <h4 className="mt-1.5 font-sans font-bold text-[16px] text-white">{step.title}</h4>
//                 <p className="mt-1.5 font-sans text-[13px] text-cream/50 leading-relaxed">{step.body}</p>
//               </div>
//             ))}
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }
//========================================================================

// "use client";

// import { useState } from "react";
// import { Reveal } from "@/components/ui/reveal";

// const STEPS = [
//   {
//     num: "01",
//     tag: "REGISTER",
//     title: "Create your profile",
//     body: "Start your artist registration in under two minutes.",
//   },
//   {
//     num: "02",
//     tag: "PAY SECURELY",
//     title: "One-time payment",
//     body: "Complete your lifetime membership via Razorpay, UPI or card.",
//   },
//   {
//     num: "03",
//     tag: "COMPLETE PROFILE",
//     title: "Add your details",
//     body: "So casting teams can find the right fit for each project.",
//   },
//   {
//     num: "04",
//     tag: "GO LIVE",
//     title: "Join WhatsApp",
//     body: "Start receiving verified, daily casting calls.",
//   },
// ];

// export function HowItWorks() {
//   const [index, setIndex] = useState(0);

//   const next = () => {
//     setIndex((prev) => (prev + 1) % STEPS.length);
//   };

//   const prev = () => {
//     setIndex((prev) => (prev - 1 + STEPS.length) % STEPS.length);
//   };

//   return (
//     <section className="w-full py-20">
//       <div className="mx-auto max-w-6xl px-4">
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <p className="text-xs tracking-[0.3em] text-[#D4AF37] uppercase">
//             The Reel
//           </p>
//           <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
//             How It Works
//           </h2>
//         </div>

//         {/* Slider */}
//         <Reveal>
//           <div className="flex flex-col items-center w-full">
//             {/* Card */}
//             <div className="w-full max-w-md md:max-w-2xl lg:max-w-3xl p-10 rounded-2xl border border-dashed border-[#D4AF37]/20 text-center bg-white/5 backdrop-blur-md transition-all">
//               {/* Number */}
//               <span
//                 className="font-bold text-[56px] leading-none text-transparent"
//                 style={{ WebkitTextStroke: "1.5px #d4af37" }}
//               >
//                 {STEPS[index].num}
//               </span>

//               {/* Tag */}
//               <div className="mt-3 text-[11px] font-bold tracking-[0.15em] text-red-500 uppercase">
//                 {STEPS[index].tag}
//               </div>

//               {/* Title */}
//               <h4 className="mt-4 text-2xl font-semibold text-white">
//                 {STEPS[index].title}
//               </h4>

//               {/* Description */}
//               <p className="mt-3 text-base text-white/60 leading-relaxed max-w-md mx-auto">
//                 {STEPS[index].body}
//               </p>
//             </div>

//             {/* Dots Indicator */}
//             <div className="flex gap-2 mt-6">
//               {STEPS.map((_, i) => (
//                 <div
//                   key={i}
//                   className={`h-2 w-2 rounded-full ${
//                     i === index ? "bg-[#D4AF37]" : "bg-white/20"
//                   }`}
//                 />
//               ))}
//             </div>

//             {/* Arrows */}
//             <div className="flex gap-6 mt-6">
//               <button
//                 onClick={prev}
//                 className="h-11 w-11 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition"
//               >
//                 ←
//               </button>

//               <button
//                 onClick={next}
//                 className="h-11 w-11 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition"
//               >
//                 →
//               </button>
//             </div>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }
//=======================================================================================

// "use client";

// import { Reveal } from "@/components/ui/reveal";

// type Step = {
//   num: string;
//   tag: string;
//   title: string;
//   body: string;
// };

// const STEPS: Step[] = [
//   {
//     num: "01",
//     tag: "REGISTER",
//     title: "Create your profile",
//     body: "Start your artist registration in under two minutes.",
//   },
//   {
//     num: "02",
//     tag: "PAY SECURELY",
//     title: "One-time payment",
//     body: "Complete your lifetime membership via Razorpay, UPI or card.",
//   },
//   {
//     num: "03",
//     tag: "COMPLETE PROFILE",
//     title: "Add your details",
//     body: "So casting teams can find the right fit for each project.",
//   },
//   {
//     num: "04",
//     tag: "GO LIVE",
//     title: "Join WhatsApp",
//     body: "Start receiving verified, daily casting calls.",
//   },
// ];

// export function HowItWorks() {
//   return (
//     <section className="py-16">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <p className="text-[#D4AF37] tracking-[0.3em] text-sm uppercase">
//             The Reel
//           </p>
//           <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
//             How It Works
//           </h2>
//         </div>

//         <Reveal>
//           {/* ================= DESKTOP ================= */}
//           <div className="hidden md:flex relative items-center justify-between">
//             {STEPS.map((step, i) => (
//               <div
//                 key={step.num}
//                 className="relative flex flex-col items-center"
//               >
//                 <Card step={step} />

//                 {i !== STEPS.length - 1 && (

//                   <svg
//                     className={`absolute ${
//                       i % 2 === 0 ? "-top-16" : "top-full mt-2"
//                     } left-full`}
//                     width="120"
//                     height="60"
//                     viewBox="0 0 120 60"
//                   >
//                     <defs>
//                       <marker
//                         id={`arrow-d-${i}`}
//                         markerWidth="8"
//                         markerHeight="8"
//                         refX="4"
//                         refY="4"
//                         orient="auto"
//                       >
//                         <path d="M0,0 L8,4 L0,8 Z" fill="#D4AF37" />
//                       </marker>
//                     </defs>

//                     <path
//                       d={
//                         i % 2 === 0
//                           ? "M10 40 C 40 -10, 80 -10, 110 30"
//                           : "M10 10 C 40 70, 80 70, 110 20"
//                       }
//                       stroke="#D4AF37"
//                       strokeWidth="2.5"
//                       fill="transparent"
//                       strokeLinecap="round"
//                       markerEnd={`url(#arrow-d-${i})`}
//                     />
//                   </svg>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* ================= MOBILE (YOUR VERSION) ================= */}
//           <div className="md:hidden flex flex-col gap-10">
//             {STEPS.map((step, i) => {
//               const isRight = i % 2 === 1;

//               return (
//                 <div key={step.num} className="relative">
//                   <div className="flex w-full">
//                     {!isRight ? (
//                       <div className="w-full flex justify-start">
//                         <Card step={step} />
//                       </div>
//                     ) : (
//                       <div className="w-full flex justify-end">
//                         <Card step={step} />
//                       </div>
//                     )}
//                   </div>
//                   {/* ================= MOBILE ARROW ================= */}
//                   {i !== STEPS.length - 1 && (
//                     <div className="md:hidden flex justify-center mt-[-16px] mb-[-25px]   ">
//                       <svg width="120" height="80" viewBox="0 0 120 80">
//                         <defs>
//                           <marker
//                             id="arrowMobile"
//                             markerWidth="8"
//                             markerHeight="8"
//                             refX="4"
//                             refY="4"
//                             orient="auto"
//                           >
//                             <path d="M0,0 L8,4 L0,8 Z" fill="#D4AF37" />
//                           </marker>
//                         </defs>

//                         <path
//                           d={
//                             isRight
//                               ? "M110 10 C 60 100, 60 -10, 10 70"
//                               : "M10 10 C 60 100, 60 -10, 110 70"
//                           }
//                           stroke="#D4AF37"
//                           strokeWidth="2.5"
//                           fill="transparent"
//                           strokeLinecap="round"
//                           markerEnd="url(#arrowMobile)"
//                         />
//                       </svg>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

// /* ================= CARD ================= */
// function Card({ step }: { step: Step }) {
//   return (
//     <div className="w-[90%] max-w-sm p-6 rounded-2xl border border-[#D4AF37]/20 bg-white/5 backdrop-blur-md">
//       <span
//         className="text-[48px] font-bold text-transparent"
//         style={{ WebkitTextStroke: "1.5px #D4AF37" }}
//       >
//         {step.num}
//       </span>

//       <div className="mt-2 text-xs tracking-widest text-red-500 uppercase">
//         {step.tag}
//       </div>

//       <h4 className="mt-2 text-lg font-semibold text-white">{step.title}</h4>

//       <p className="mt-1 text-xs text-white/60">{step.body}</p>
//     </div>
//   );
// }

//=========================================================================

"use client";

import { Reveal } from "@/components/ui/reveal";

type Step = {
  num: string;
  tag: string;
  title: string;
  body: string;
};

const STEPS: Step[] = [
  {
    num: "01",
    tag: "REGISTER",
    title: "Create your profile",
    body: "Start your artist registration in under two minutes.",
  },
  {
    num: "02",
    tag: "PAY SECURELY",
    title: "One-time payment",
    body: "Complete your lifetime membership via Razorpay, UPI or card.",
  },
  {
    num: "03",
    tag: "COMPLETE PROFILE",
    title: "Add your details",
    body: "So casting teams can find the right fit for each project.",
  },
  {
    num: "04",
    tag: "GO LIVE",
    title: "Join WhatsApp",
    body: "Start receiving verified, daily casting calls.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 pt-24 overflow-visible">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[#D4AF37] tracking-[0.3em] text-sm uppercase">
            The Reel
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            How It Works
          </h2>
        </div>

        <Reveal>
          {/* ================= DESKTOP ================= */}
          <div className="hidden md:flex relative items-center justify-between overflow-visible  pt-10">
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className="relative flex flex-col items-center"
              >
                <Card step={step} />

                {/* 🔥 FIXED DESKTOP ARROW */}

                 {i !== STEPS.length - 1 && (

                  <svg
                    className={`absolute ${
                      i % 2 === 0 ? "-top-15" : "top-full mt-0"
                    } left-full`}
                    width="120"
                    height="70"
                    viewBox="0 0 120 60"
                  >
                    <defs>
                      <marker
                        id={`arrow-d-${i}`}
                        markerWidth="8"
                        markerHeight="8"
                        refX="4"
                        refY="4"
                        orient="auto"
                      >
                        <path d="M0,0 L8,4 L0,8 Z" fill="#D4AF37" />
                      </marker>
                    </defs>

                    <path
                      d={
                        i % 2 === 0
                          ? "M0 50 C 30 -10, 70 -10, 100 30"
                          : "M10 3 C 30 80, 90 70, 110 20"
                      }
                      stroke="#D4AF37"
                      strokeWidth="2.5"
                      fill="transparent"
                      strokeLinecap="round"
                      markerEnd={`url(#arrow-d-${i})`}
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>

          {/* ================= MOBILE ================= */}
          <div className="md:hidden flex flex-col gap-0">
            {STEPS.map((step, i) => {
              const isRight = i % 2 === 1;

              return (
                <div key={step.num} className="relative">
                  {/* CARDS */}
                  <div className="flex w-full">
                    {!isRight ? (
                      <div className="w-full flex justify-start">
                        <Card step={step} />
                      </div>
                    ) : (
                      <div className="w-full flex justify-end">
                        <Card step={step} />
                      </div>
                    )}
                  </div>

                  {/* MOBILE ARROW */}
                 {i !== STEPS.length - 1 && (
                    <div className="md:hidden flex justify-center mt-[-20px] mb-[-45px]   ">
                      <svg width="120" height="70" viewBox="7 0 120 80">
                        <defs>
                          <marker
                            id="arrowMobile"
                            markerWidth="8"
                            markerHeight="8"
                            refX="4"
                            refY="4"
                            orient="auto"
                          >
                            <path d="M0,0 L8,4 L0,8 Z" fill="#D4AF37" />
                          </marker>
                        </defs>

                        <path
                          d={
                            isRight
                              ? "M110 10 C 60 100, 60 -10, 10 70"
                              : "M10 10 C 60 100, 60 -10, 110 70"
                          }
                          stroke="#D4AF37"
                          strokeWidth="2.5"
                          fill="transparent"
                          strokeLinecap="round"
                          markerEnd="url(#arrowMobile)"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= CARD ================= */
function Card({ step }: { step: Step }) {
  return (
    <div className="bg-[#111] border border-[#D4AF37]/20 rounded-xl p-6 w-[260px]">
      <span
        className="text-[48px] font-bold text-transparent"
        style={{ WebkitTextStroke: "1.5px #D4AF37" }}
      >
        {step.num}
      </span>

      <div className="mt-2 text-xs tracking-widest text-red-500 uppercase">
        {step.tag}
      </div>

      <h4 className="mt-2 text-lg font-semibold text-white">{step.title}</h4>

      <p className="mt-1 text-xs text-white/60">{step.body}</p>
    </div>
  );
}