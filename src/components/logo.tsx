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

      <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.30em] text-[#f3bd0c]">
        Delhi Casting Agency
      </p>
    </div>
  );
}