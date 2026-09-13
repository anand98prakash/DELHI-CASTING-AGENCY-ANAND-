"use client";

import type { ReactNode } from "react";

/**
 * SmoothScrollProvider:
 * Relies on native CSS scroll-behavior: smooth to avoid intercepting or freezing
 * native mousewheel, trackpad, and touch events across desktop and mobile devices.
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
