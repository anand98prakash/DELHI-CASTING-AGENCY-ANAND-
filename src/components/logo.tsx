// import { cn } from "@/lib/utils";

// export function Logo({ size = 30, className }: { size?: number; className?: string }) {
//   return (
//     <div className={cn("flex items-center gap-2.5", className)}>
//       <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className="shrink-0">
//         <circle cx="20" cy="20" r="19" stroke="#d4af37" strokeWidth="1.4" />
//         <circle cx="20" cy="20" r="12.5" stroke="#d4af37" strokeWidth="1" opacity="0.55" />
//         <g stroke="#d4af37" strokeWidth="1" opacity="0.85">
//           <line x1="20" y1="1" x2="20" y2="7" />
//           <line x1="20" y1="33" x2="20" y2="39" />
//           <line x1="1" y1="20" x2="7" y2="20" />
//           <line x1="33" y1="20" x2="39" y2="20" />
//         </g>
//         <circle cx="20" cy="20" r="3.5" fill="#d4af37" />
//       </svg>
//       <div className="font-display font-semibold tracking-[0.1em] text-[19px] leading-none text-white">
//         WAY TO BOLLYWOOD
//         <span className="block font-sans text-[9px] tracking-[0.28em] text-gold mt-0.5">
//           DELHI CASTING AGENCY
//         </span>
//       </div>
//     </div>
//   );
// }
//================================================================

import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
       src="/images/logos/logo.png"
        alt="Delhi Casting Agency"
        width={100}
        height={100}
        priority
        className="h-12 w-auto object-contain rounded-0.5 md:h-14"
      />


        <p className="mt-0.5 font-sans text-[10px] uppercase tracking-[0.30em] text-[#f3bd0c]">
          Delhi Casting Agency
        </p>
      </div>
  );
}