// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { AnimatePresence, motion } from "framer-motion";
// import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

// import { Logo } from "@/components/logo";
// import { cn } from "@/lib/utils";
// import { NAV_GROUPS, type NavGroup } from "@/lib/site-navigation";

// function DesktopDropdown({ group }: { group: NavGroup }) {
//   if (!group.items) {
//     return (
//       <Link href={group.href} className="text-sm font-medium tracking-wide text-white/80 transition hover:text-gold">
//         {group.label}
//       </Link>
//     );
//   }

//   return (
//     <div className="group relative">
//       <Link href={group.href} className="inline-flex items-center gap-1.5 text-sm font-medium tracking-wide text-white/80 transition hover:text-gold">
//         {group.label}<ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
//       </Link>
//       <div className="pointer-events-none absolute left-1/2 top-full w-72 -translate-x-1/2 translate-y-3 pt-4 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
//         <div className="rounded-2xl border border-white/10 bg-[#0b0b0b]/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl">
//           {group.items.map((item) => (
//             <Link key={item.href} href={item.href} className="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-white/70 transition hover:bg-white/[0.06] hover:text-gold">
//               {item.label}<ArrowRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileGroup, setMobileGroup] = useState<string | null>(null);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = mobileOpen ? "hidden" : "";
//     return () => { document.body.style.overflow = ""; };
//   }, [mobileOpen]);

//   const closeMobile = () => {
//     setMobileOpen(false);
//     setMobileGroup(null);
//   };

//   return (
//     <>
//       <motion.header
//         initial={{ y: -80, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.7, ease: "easeOut" }}
//         className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled ? "border-b border-white/10 bg-black/85 shadow-xl backdrop-blur-xl" : "bg-transparent")}
//       >
//         <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
//           <Link href="/" aria-label="Delhi Casting Agency home" onClick={closeMobile}>
//             <Logo />
//           </Link>

//           <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary navigation">
//             {NAV_GROUPS.map((group) => <DesktopDropdown key={group.label} group={group} />)}
//           </nav>

//           <Link href="/register/" className="group hidden items-center gap-2 rounded-full border border-gold bg-gold px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] lg:flex">
//             Register Now<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
//           </Link>

//           <button type="button" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} onClick={() => setMobileOpen((open) => !open)} className="rounded-lg p-2 text-white transition hover:bg-white/10 xl:hidden">
//             {mobileOpen ? <X size={27} /> : <Menu size={27} />}
//           </button>
//         </div>
//       </motion.header>

//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.aside
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ duration: 0.35, ease: "easeOut" }}
//             className="fixed inset-0 z-40 overflow-y-auto bg-black px-6 pb-10 pt-28 xl:hidden"
//           >
//             <div className="mx-auto max-w-lg">
//               <nav className="space-y-2" aria-label="Mobile navigation">
//                 {NAV_GROUPS.map((group) => (
//                   <div key={group.label} className="border-b border-white/10">
//                     {group.items ? (
//                       <>
//                         <button type="button" onClick={() => setMobileGroup((current) => current === group.label ? null : group.label)} className="flex w-full items-center justify-between py-4 text-left text-lg font-medium text-white">
//                           {group.label}<ChevronDown className={cn("h-5 w-5 text-gold transition", mobileGroup === group.label && "rotate-180")} />
//                         </button>
//                         <AnimatePresence initial={false}>
//                           {mobileGroup === group.label && (
//                             <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pb-3">
//                               <Link href={group.href} onClick={closeMobile} className="block rounded-xl px-4 py-3 text-sm font-semibold text-gold">View All {group.label}</Link>
//                               {group.items.map((item) => <Link key={item.href} href={item.href} onClick={closeMobile} className="block rounded-xl px-4 py-3 text-sm text-white/60 transition hover:bg-white/[0.05] hover:text-white">{item.label}</Link>)}
//                             </motion.div>
//                           )}
//                         </AnimatePresence>
//                       </>
//                     ) : (
//                       <Link href={group.href} onClick={closeMobile} className="block py-4 text-lg font-medium text-white transition hover:text-gold">{group.label}</Link>
//                     )}
//                   </div>
//                 ))}
//               </nav>

//               <Link href="/register/" onClick={closeMobile} className="mt-8 flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 font-bold text-black">
//                 Register Now<ArrowRight className="h-4 w-4" />
//               </Link>
//             </div>
//           </motion.aside>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

//=============================================================================
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import { NAV_GROUPS, type NavGroup } from "@/lib/site-navigation";

function DesktopDropdown({ group }: { group: NavGroup }) {
  if (!group.items) {
    return (
      <Link
        href={group.href}
        className="text-sm font-medium tracking-wide text-white/80 transition hover:text-gold"
      >
        {group.label}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <Link
        href={group.href}
        className="inline-flex items-center gap-1.5 text-sm font-medium tracking-wide text-white/80 transition hover:text-gold"
      >
        {group.label}

        <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
      </Link>

      <div className="pointer-events-none absolute left-1/2 top-full w-72 -translate-x-1/2 translate-y-3 pt-4 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
        <div className="rounded-2xl border border-white/10 bg-[#0b0b0b]/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl">
          {group.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-white/70 transition hover:bg-white/[0.06] hover:text-gold"
            >
              {item.label}

              <ArrowRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
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

  // ==========================================
  // Detect page scroll
  // ==========================================

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    // Set initial state
    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // ==========================================
  // Lock body when mobile menu is open
  // ==========================================

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // ==========================================
  // Close mobile menu
  // ==========================================

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileGroup(null);
  };

  // ==========================================
  // Toggle mobile menu
  // ==========================================

  const toggleMobile = () => {
    setMobileOpen((open) => !open);

    // Reset opened submenu when opening/closing
    setMobileGroup(null);
  };

  return (
    <>
      {/* ========================================
          HEADER
      ======================================== */}

      <motion.header
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 w-full transition-all duration-500",
          scrolled
            ? "border-b border-white/10 bg-black/85 shadow-xl backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
          {/* ====================================
              LOGO
          ==================================== */}

          <Link
            href="/"
            aria-label="Delhi Casting Agency home"
            onClick={closeMobile}
            className="shrink-0"
          >
            <Logo />
          </Link>

          {/* ====================================
              DESKTOP NAVIGATION
          ==================================== */}

          <nav
            className="hidden items-center gap-7 xl:flex"
            aria-label="Primary navigation"
          >
            {NAV_GROUPS.map((group) => (
              <DesktopDropdown key={group.label} group={group} />
            ))}
          </nav>

          {/* ====================================
              DESKTOP REGISTER BUTTON
          ==================================== */}

          <Link
            href="/register"
            className="group hidden items-center gap-2 rounded-full border border-gold bg-gold px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] lg:flex"
          >
            Register Now
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>

          {/* ====================================
              MOBILE MENU BUTTON
          ==================================== */}

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMobile}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-lg p-2 text-white transition hover:bg-white/10 active:bg-white/20 xl:hidden"
          >
            {mobileOpen ? (
              <X size={27} strokeWidth={2} />
            ) : (
              <Menu size={27} strokeWidth={2} />
            )}
          </button>
        </div>
      </motion.header>

      {/* ========================================
          MOBILE MENU
      ======================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            id="mobile-navigation"
            initial={{
              x: "100%",
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              x: "100%",
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="fixed inset-0 z-40 overflow-y-auto overscroll-contain bg-black px-4 pb-10 pt-24 sm:px-6 xl:hidden"
          >
            <div className="mx-auto w-full max-w-lg">
              {/* ==================================
                  MOBILE NAVIGATION
              ================================== */}

              <nav className="space-y-1" aria-label="Mobile navigation">
                {NAV_GROUPS.map((group) => (
                  <div key={group.label} className="border-b border-white/10">
                    {group.items ? (
                      <>
                        {/* Group Button */}

                        <button
                          type="button"
                          onClick={() =>
                            setMobileGroup((current) =>
                              current === group.label ? null : group.label,
                            )
                          }
                          className="flex min-h-14 w-full items-center justify-between py-4 text-left text-lg font-medium text-white active:bg-white/[0.04]"
                        >
                          <span>{group.label}</span>

                          <ChevronDown
                            className={cn(
                              "h-5 w-5 shrink-0 text-gold transition",
                              mobileGroup === group.label && "rotate-180",
                            )}
                          />
                        </button>

                        {/* Submenu */}

                        <AnimatePresence initial={false}>
                          {mobileGroup === group.label && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              transition={{
                                duration: 0.2,
                              }}
                              className="overflow-hidden pb-3"
                            >
                              {/* View All */}

                              <Link
                                href={group.href}
                                onClick={closeMobile}
                                className="block rounded-xl px-4 py-3 text-sm font-semibold text-gold active:bg-white/[0.06]"
                              >
                                View All {group.label}
                              </Link>

                              {/* Items */}

                              {group.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={closeMobile}
                                  className="block min-h-11 rounded-xl px-4 py-3 text-sm text-white/60 transition active:bg-white/[0.06] active:text-white"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      /* Normal Link */

                      <Link
                        href={group.href}
                        onClick={closeMobile}
                        className="flex min-h-14 items-center py-4 text-lg font-medium text-white transition active:text-gold"
                      >
                        {group.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* ==================================
                  MOBILE REGISTER
              ================================== */}

              <Link
                href="/register"
                onClick={closeMobile}
                className="mt-8 flex min-h-14 items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 font-bold text-black active:scale-[0.98]"
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