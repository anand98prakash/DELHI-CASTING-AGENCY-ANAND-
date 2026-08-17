import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface TalentCardProps {
  title: string;
  description: string;
  href: string;
  image?: string;
}

export function TalentCard({ title, description, href, image }: TalentCardProps) {
  return (
    <Link href={href} className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-charcoal transition duration-500 hover:-translate-y-1 hover:border-gold/40">
      <div className="aspect-[4/3] overflow-hidden bg-charcoal-2">
        {image ? <div className="h-full w-full bg-cover bg-center transition duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${image})` }} /> : <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.16),transparent_60%)]" />}
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div><h3 className="font-display text-2xl text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-white/55">{description}</p></div>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-gold transition group-hover:-translate-y-1 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
