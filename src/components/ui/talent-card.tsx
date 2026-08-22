import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface TalentCardProps {
  title: string;
  description: string;
  href: string;
  image?: string;
}

export function TalentCard({ title, description, href, image }: TalentCardProps) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-xl border border-[#E2DDD3] bg-[#EFECE4] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#C5A059] hover:shadow-xl"
    >
      <div className="relative aspect-3/4 w-full overflow-hidden bg-[#EFECE4]">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-[#EFECE4] to-[#F5F2EA]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/90 via-[#171717]/30 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                Category
              </p>
              <h3 className="font-serif text-2xl font-bold tracking-tight text-[#F5F2EA] sm:text-3xl">
                {title}
              </h3>
              {description && (
                <p className="mt-1 line-clamp-2 text-xs font-normal leading-relaxed text-[#F5F2EA]/75">
                  {description}
                </p>
              )}
            </div>
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xs transition duration-300 group-hover:border-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#171717]">
              <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
