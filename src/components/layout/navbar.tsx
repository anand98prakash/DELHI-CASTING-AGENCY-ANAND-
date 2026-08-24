"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, User, X } from "lucide-react";

import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import { NAV_GROUPS, type NavGroup } from "@/lib/site-navigation";
import { getProfileCreateOrSetupUrl } from "@/lib/auth";

function DesktopDropdown({ group }: { group: NavGroup }) {
  if (!group.items) {
    return (
      <Link
        href={group.href}
        className="whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.14em] text-[#111111] transition duration-200 hover:text-[#D4AF37]"
      >
        {group.label}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <Link
        href={group.href}
        className="inline-flex items-center gap-1.5 whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.14em] text-[#111111] transition duration-200 hover:text-[#D4AF37]"
      >
        <span>{group.label}</span>
        <ChevronDown className="h-3.5 w-3.5 shrink-0 text-[#D4AF37] transition duration-200 group-hover:rotate-180" />
      </Link>

      <div className="pointer-events-none absolute left-1/2 top-full w-72 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
        <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-2xl backdrop-blur-xl">
          {group.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-between rounded-lg px-4 py-2.5 text-xs font-medium uppercase tracking-[0.12em] text-gray-800 transition duration-200 hover:bg-[#F7F7F5] hover:text-[#D4AF37]"
            >
              <span>{item.label}</span>
              <ArrowRight className="h-3.5 w-3.5 opacity-0 transition duration-200 group-hover:opacity-100 text-[#D4AF37]" />
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
          "fixed inset-x-0 top-0 z-50 w-full transition-all duration-500 border-b border-gray-200",
          scrolled
            ? "bg-white/95 py-2 shadow-sm backdrop-blur-md"
            : "bg-white/90 py-3 backdrop-blur-xs"
        )}
      >
        <div className="mx-auto flex h-20 w-full max-w-[1550px] items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* LOGO & BRAND NAME */}
          <Link
            href="/"
            aria-label="Delhi Casting Agency home"
            onClick={closeMobile}
            className="shrink-0 transition duration-300 hover:opacity-90"
          >
            <Logo />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            className="hidden items-center gap-4 xl:flex 2xl:gap-6"
            aria-label="Main navigation"
          >
            {NAV_GROUPS.map((group) => (
              <DesktopDropdown key={group.label} group={group} />
            ))}
          </nav>

          {/* DESKTOP ACTIONS: LOGIN & REGISTER NOW */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/login"
              className="whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.14em] text-[#111111] transition duration-200 hover:text-[#D4AF37] flex items-center gap-1.5"
            >
              <User className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span>Login</span>
            </Link>

            <Link
              href={getProfileCreateOrSetupUrl()}
              className="group flex items-center gap-2 rounded-full border border-[#D4AF37] bg-white px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.16em] text-[#111111] transition duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white shadow-xs whitespace-nowrap"
            >
              <span>REGISTER NOW</span>
              <ArrowRight className="h-3.5 w-3.5 transition duration-300 group-hover:translate-x-1 text-[#D4AF37] group-hover:text-white" />
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMobile}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-lg p-2 text-[#111111] transition hover:bg-gray-100 xl:hidden"
          >
            {mobileOpen ? (
              <X size={26} strokeWidth={1.8} />
            ) : (
              <Menu size={26} strokeWidth={1.8} />
            )}
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            id="mobile-navigation"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 overflow-y-auto overscroll-contain bg-white px-6 pb-12 pt-28 xl:hidden"
          >
            <div className="mx-auto w-full max-w-lg">
              <nav className="space-y-2" aria-label="Mobile navigation">
                {NAV_GROUPS.map((group) => (
                  <div key={group.label} className="border-b border-gray-200 py-2">
                    {group.items ? (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            setMobileGroup((current) =>
                              current === group.label ? null : group.label,
                            )
                          }
                          className="flex min-h-12 w-full items-center justify-between text-left text-base font-semibold uppercase tracking-wider text-[#111111]"
                        >
                          <span>{group.label}</span>
                          <ChevronDown
                            className={cn(
                              "h-5 w-5 text-[#D4AF37] transition duration-300",
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
                                className="block rounded-lg py-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37]"
                              >
                                View All {group.label}
                              </Link>

                              {group.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={closeMobile}
                                  className="block py-2 text-xs font-medium uppercase tracking-wider text-gray-700 transition hover:text-[#D4AF37]"
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
                        className="flex min-h-12 items-center text-base font-semibold uppercase tracking-wider text-[#111111]"
                      >
                        {group.label}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Mobile Login option */}
                <div className="border-b border-gray-200 py-2">
                  <Link
                    href="/login"
                    onClick={closeMobile}
                    className="flex min-h-12 items-center gap-2 text-base font-semibold uppercase tracking-wider text-[#D4AF37]"
                  >
                    <User className="h-5 w-5" />
                    <span>Login to Artist Account</span>
                  </Link>
                </div>
              </nav>

              <Link
                href={getProfileCreateOrSetupUrl()}
                onClick={closeMobile}
                className="mt-8 flex min-h-14 items-center justify-center gap-2 rounded-full border border-[#D4AF37] bg-[#D4AF37] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition active:scale-[0.98] shadow-md"
              >
                <span>REGISTER NOW</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}