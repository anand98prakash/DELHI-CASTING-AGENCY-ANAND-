/**
 * Delhi Casting Agency (DCA) Session & Auth Helper
 * 
 * Manages user session state in localStorage for client-side authentication.
 */

export type ProfileStatus = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "REJECTED" | "SUSPENDED";

export interface PremiumEntitlement {
  plan: "ARTIST_PREMIUM" | "BRAND_PREMIUM";
  amount: number;
  duration: "3_months";
  startedAt: string;
  expiresAt: string;
  paymentId: string;
}

export interface DCAUser {
  identifier?: string;
  email?: string;
  isLoggedIn: boolean;
  loginTime?: string;
  role?: "artist" | "brand";
  isPremium?: boolean;
  premiumEntitlement?: PremiumEntitlement;
  status?: ProfileStatus;
}

export function getUserSession(): DCAUser | null {
  if (typeof window === "undefined") return null;
  try {
    const userStr = localStorage.getItem("dca_user");
    if (!userStr) return null;
    const user: DCAUser = JSON.parse(userStr);
    if (!user || user.isLoggedIn !== true || (!user.identifier && !user.email)) {
      return null;
    }

    // Automatic Expiry Check: Current date >= expiresAt -> Premium Expired
    if (user.isPremium && user.premiumEntitlement?.expiresAt) {
      const expiresAt = new Date(user.premiumEntitlement.expiresAt);
      if (new Date() >= expiresAt) {
        user.isPremium = false;
      }
    }

    return user;
  } catch {
    return null;
  }
}

export function isUserAuthenticated(): boolean {
  return getUserSession() !== null;
}

export function getProfileCreateOrSetupUrl(): string {
  return "/profile/setup";
}

export function setDCAUserSession(
  emailOrPhone: string,
  role: "artist" | "brand" = "artist",
  isNewRegistration: boolean = false
) {
  if (typeof window !== "undefined") {
    const existing = getUserSession();
    const isSameUser =
      existing &&
      (existing.identifier === emailOrPhone || existing.email === emailOrPhone);
    const keepPremium =
      !isNewRegistration && isSameUser && existing?.isPremium === true;

    localStorage.setItem(
      "dca_user",
      JSON.stringify({
        identifier: emailOrPhone,
        email: emailOrPhone,
        isLoggedIn: true,
        loginTime: new Date().toISOString(),
        role: role || existing?.role || "artist",
        isPremium: keepPremium,
        premiumEntitlement: keepPremium ? existing?.premiumEntitlement : undefined,
      })
    );
  }
}

export function setUserRole(role: "artist" | "brand") {
  if (typeof window !== "undefined") {
    const existing = getUserSession();
    if (!existing || !existing.isLoggedIn) return;
    localStorage.setItem(
      "dca_user",
      JSON.stringify({
        ...existing,
        role,
      })
    );
  }
}

export function setUserPremiumStatus(
  isPremium: boolean = true,
  details?: {
    plan: "ARTIST_PREMIUM" | "BRAND_PREMIUM";
    amount: number;
    paymentId: string;
  }
) {
  if (typeof window !== "undefined") {
    const existing = getUserSession();
    if (!existing || !existing.isLoggedIn) return;

    let entitlement: PremiumEntitlement | undefined = existing.premiumEntitlement;

    if (isPremium) {
      const now = new Date();
      const expiresAt = new Date(now);
      expiresAt.setMonth(expiresAt.getMonth() + 3);

      entitlement = {
        plan: details?.plan || (existing.role === "brand" ? "BRAND_PREMIUM" : "ARTIST_PREMIUM"),
        amount: details?.amount || (existing.role === "brand" ? 9999 : 1999),
        duration: "3_months",
        startedAt: entitlement?.startedAt || now.toISOString(),
        expiresAt: expiresAt.toISOString(),
        paymentId: details?.paymentId || `WTB-VERIFIED-${Date.now().toString().slice(-6)}`,
      };
    } else {
      entitlement = undefined;
    }

    localStorage.setItem(
      "dca_user",
      JSON.stringify({
        ...existing,
        isPremium,
        premiumEntitlement: entitlement,
      })
    );
  }
}

export function getPremiumRemainingInfo(user: DCAUser | null): {
  isExpired: boolean;
  startDateFormatted: string;
  expiryDateFormatted: string;
  remainingDays: number;
} | null {
  if (!user || !user.isPremium || !user.premiumEntitlement) return null;

  const now = new Date();
  const expiresAt = new Date(user.premiumEntitlement.expiresAt);
  const startedAt = new Date(user.premiumEntitlement.startedAt);

  if (now >= expiresAt) {
    return {
      isExpired: true,
      startDateFormatted: startedAt.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
      expiryDateFormatted: expiresAt.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
      remainingDays: 0,
    };
  }

  const diffTime = expiresAt.getTime() - now.getTime();
  const remainingDays = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

  const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "short", year: "numeric" };
  const startDateFormatted = startedAt.toLocaleDateString("en-IN", options);
  const expiryDateFormatted = expiresAt.toLocaleDateString("en-IN", options);

  return {
    isExpired: false,
    startDateFormatted,
    expiryDateFormatted,
    remainingDays,
  };
}

export function setUserProfileStatus(status: ProfileStatus) {
  if (typeof window !== "undefined") {
    const existing = getUserSession();
    if (!existing || !existing.isLoggedIn) return;
    localStorage.setItem(
      "dca_user",
      JSON.stringify({
        ...existing,
        status,
      })
    );
  }
}

/**
 * TEMPORARY FRONTEND PROTOTYPE STATE ONLY:
 * Note: localStorage status is strictly for UI state simulation during frontend testing.
 * The future backend API/database will be the authoritative source of truth for
 * profile status (draft, pending_review, approved, rejected, suspended), payment, and security decisions.
 */
export function getUserProfileStatus(): ProfileStatus {
  const session = getUserSession();
  if (!session) return "DRAFT";
  if (session.status) return session.status;
  
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("dca_artist_profile");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.status) return parsed.status;
      } catch (e) {
        console.error("Error reading stored profile status", e);
      }
    }
  }
  // Default for existing demo session
  return "APPROVED";
}

export function clearDCAUserSession() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("dca_user");
  }
}
