import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/45">
      <Link href="/" className="transition hover:text-gold">Home</Link>
      {items.map((item) => (
        <span key={`${item.label}-${item.href ?? "current"}`} className="flex items-center gap-2">
          <ChevronRight className="h-3.5 w-3.5" />
          {item.href ? <Link href={item.href} className="transition hover:text-gold">{item.label}</Link> : <span className="text-white/70">{item.label}</span>}
        </span>
      ))}
    </nav>
  );
}
