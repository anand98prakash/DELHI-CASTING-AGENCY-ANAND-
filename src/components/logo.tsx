import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3.5 shrink-0", className)}>
      <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg bg-white border border-gray-200 p-1 shadow-xs sm:h-12 sm:w-12">
        <Image
          src="/images/logos/logo.png"
          alt="Delhi Casting Agency"
          width={80}
          height={80}
          priority
          className="h-full w-full object-contain"
        />
      </div>

      <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#D4AF37] whitespace-nowrap sm:text-xs">
        DELHI CASTING AGENCY
      </span>
    </div>
  );
}