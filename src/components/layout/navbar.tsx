"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import { NAV_GROUPS, type NavGroup } from "@/lib/site-navigation";

function DesktopDropdown({ group, scrolled }: { group: NavGroup; scrolled: boolean }) {
  if (!group.items) {
    return (
      <Link
        href={group.href}
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.18em] transition duration-300",
          scrolled
            ? "text-[#171717]/80 hover:text-[#C5A059]"
            : "text-[#171717] hover:text-[#C5A059]"
        )}
      >
        {group.label}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <Link
        href={group.href}
        className={cn(
          "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition duration-300",
          scrolled
            ? "text-[#171717]/80 hover:text-[#C5A059]"
            : "text-[#171717] hover:text-[#C5A059]"
        )}
      >
        {group.label}
        <ChevronDown className="h-3.5 w-3.5 transition duration-300 group-hover:rotate-180 text-[#C5A059]" />
      </Link>

      <div className="pointer-events-none absolute left-1/2 top-full w-72 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
        <div className="rounded-xl border border-[#E2DDD3] bg-[#F5F2EA]/98 p-3 shadow-xl backdrop-blur-md">
          {group.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-between rounded-lg px-4 py-2.5 text-xs font-medium uppercase tracking-[0.12em] text-[#171717]/80 transition duration-200 hover:bg-[#EFECE4] hover:text-[#C5A059]"
            >
              {item.label}
              <ArrowRight className="h-3.5 w-3.5 opacity-0 transition duration-200 group-hover:opacity-100 text-[#C5A059]" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileGroup(null);
  };

  const toggleMobile = () => {
    setMobileOpen((open) => !open);
    setMobileGroup(null);
  };

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 w-full transition-all duration-500",
          scrolled
            ? "border-b border-[#E2DDD3]/80 bg-[#F5F2EA]/95 py-1 shadow-sm backdrop-blur-md"
            : "bg-[#F5F2EA]/80 py-2 backdrop-blur-xs"
        )}
      >
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* LOGO */}
          <Link
            href="/"
            aria-label="Delhi Casting Agency home"
            onClick={closeMobile}
            className="shrink-0 transition duration-300 hover:opacity-90"
          >
            <Logo />
          </Link>

          {/* DESKTOP NAV */}
          <nav
            className="hidden items-center gap-8 xl:flex"
            aria-label="Primary navigation"
          >
            {NAV_GROUPS.map((group) => (
              <DesktopDropdown key={group.label} group={group} scrolled={scrolled} />
            ))}
          </nav>

          {/* DESKTOP REGISTER BUTTON */}
          <Link
            href="/register"
            className="group hidden items-center gap-2 rounded-full border border-[#171717] bg-[#171717] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#F5F2EA] transition duration-300 hover:bg-[#C5A059] hover:border-[#C5A059] hover:text-[#171717] lg:flex"
          >
            Register Now
            <ArrowRight className="h-3.5 w-3.5 transition duration-300 group-hover:translate-x-1" />
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMobile}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-lg p-2 text-[#171717] transition hover:bg-[#EFECE4] xl:hidden"
          >
            {mobileOpen ? (
              <X size={26} strokeWidth={1.8} />
            ) : (
              <Menu size={26} strokeWidth={1.8} />
            )}
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            id="mobile-navigation"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 overflow-y-auto overscroll-contain bg-[#F5F2EA] px-6 pb-12 pt-28 xl:hidden"
          >
            <div className="mx-auto w-full max-w-lg">
              <nav className="space-y-2" aria-label="Mobile navigation">
                {NAV_GROUPS.map((group) => (
                  <div key={group.label} className="border-b border-[#E2DDD3] py-2">
                    {group.items ? (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            setMobileGroup((current) =>
                              current === group.label ? null : group.label,
                            )
                          }
                          className="flex min-h-12 w-full items-center justify-between text-left text-base font-semibold uppercase tracking-wider text-[#171717]"
                        >
                          <span>{group.label}</span>
                          <ChevronDown
                            className={cn(
                              "h-5 w-5 text-[#C5A059] transition duration-300",
                              mobileGroup === group.label && "rotate-180",
                            )}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {mobileGroup === group.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden space-y-1 pl-3 pt-2"
                            >
                              <Link
                                href={group.href}
                                onClick={closeMobile}
                                className="block rounded-lg py-2 text-xs font-bold uppercase tracking-wider text-[#C5A059]"
                              >
                                View All {group.label}
                              </Link>

                              {group.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={closeMobile}
                                  className="block py-2 text-xs font-medium uppercase tracking-wider text-[#171717]/70 transition hover:text-[#171717]"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={group.href}
                        onClick={closeMobile}
                        className="flex min-h-12 items-center text-base font-semibold uppercase tracking-wider text-[#171717]"
                      >
                        {group.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              <Link
                href="/register"
                onClick={closeMobile}
                className="mt-8 flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#171717] px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#F5F2EA] transition active:scale-[0.98]"
              >
                Register Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}