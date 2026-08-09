

"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";

import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

const links = [
  { name: "Benefits", href: "#benefits" },
  { name: "Membership", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/10 bg-black/80 backdrop-blur-xl shadow-xl"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link href="/" aria-label="WAY TO BOLLYWOOD">
            <Logo />
          </Link>

          {/* Desktop Menu */}

          <div className="hidden items-center gap-10 lg:flex">
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium tracking-wide text-white/80 transition duration-300 hover:text-[#D4AF37]"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}

          <div className="hidden lg:block">
            <button
              onClick={() => {
                window.dispatchEvent(new Event("open-registration"));
              }}
              className="group flex items-center gap-2 rounded-full border border-[#D4AF37] bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]"
            >
              Join Premium
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white lg:hidden"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.45,
            }}
            className="fixed inset-0 z-40 bg-black"
          >
            <div className="flex h-full flex-col items-center justify-center gap-10">
              {links.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-3xl font-semibold text-white transition hover:text-[#D4AF37]"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="#pricing"
                onClick={() => setMobileOpen(false)}
                className="mt-6 rounded-full bg-[#D4AF37] px-8 py-4 text-lg font-bold text-black"
              >
                Join Premium
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}