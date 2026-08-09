// "use client";

// import { SITE } from "@/lib/constants";

// export function StickyCta() {
//   return (
//     <div className="fixed bottom-0 left-0 right-0 z-90 flex md:hidden items-center justify-between gap-3.5 bg-charcoal border-t border-gold px-4.5 py-3.5">
//       <div className="text-[12px] text-cream/70">
//         Lifetime Membership
//         <b className="block font-sans font-bold tracking-[0.06em] text-[16px] text-gold">
//           ₹{SITE.price.toLocaleString()} only
//         </b>
//       </div>
//       <button
//         onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
//         className="font-sans font-semibold tracking-[0.1em] uppercase bg-gold text-black border-none px-[22px] py-3 rounded-sm text-[13px]"
//       >
//         Join Now
//       </button>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { SITE } from "@/lib/constants";

export function StickyCta() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="fixed inset-x-0 bottom-0 z-50 md:hidden"
    >
      <div className="border-t border-[#D4AF37]/20 bg-black/85 px-4 pb-[calc(env(safe-area-inset-bottom)+16px)] pt-4 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-md items-center justify-between gap-4 rounded-2xl border border-[#D4AF37]/20 bg-white/[0.03] px-4 py-4 shadow-[0_0_40px_rgba(212,175,55,0.12)]">
          {/* Left */}

          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#D4AF37]">
              <Sparkles size={13} />
              Lifetime Membership
            </div>

            <p className="mt-1 text-xl font-bold text-white">
              ₹{SITE.price.toLocaleString()}
            </p>

            <p className="text-xs text-white/55">One-Time Payment</p>
          </div>

          {/* Button */}

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            animate={{
              boxShadow: [
                "0 0 0px rgba(212,175,55,0)",
                "0 0 20px rgba(212,175,55,0.30)",
                "0 0 0px rgba(212,175,55,0)",
              ],
            }}
            transition={{
              boxShadow: {
                repeat: Infinity,
                duration: 2.5,
              },
            }}
            onClick={() =>
              document.getElementById("pricing")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="group flex items-center gap-2 rounded-xl bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-black shadow-lg"
          >
            Join Now
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}