import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  category: string;
  excerpt: string;
  href: string;
  image?: string;
}

export function BlogCard({ title, category, excerpt, href, image }: BlogCardProps) {
  return (
    <Link href={href} className="group block overflow-hidden rounded-2xl border border-white/10 bg-charcoal transition duration-500 hover:-translate-y-1 hover:border-gold/40">
      <div className="aspect-[16/9] overflow-hidden bg-charcoal-2">{image && <div className="h-full w-full bg-cover bg-center transition duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${image})` }} />}</div>
      <div className="p-6"><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">{category}</p><div className="mt-2 flex items-start justify-between gap-4"><div><h3 className="font-display text-2xl text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-white/55">{excerpt}</p></div><ArrowUpRight className="h-5 w-5 shrink-0 text-gold" /></div></div>
    </Link>
  );
}
