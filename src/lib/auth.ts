/**
 * Delhi Casting Agency (DCA) Session & Auth Helper
 * 
 * Manages user session state in localStorage for client-side authentication.
 */

export interface DCAUser {
  identifier?: string;
  email?: string;
  isLoggedIn: boolean;
  loginTime?: string;
  role?: "artist" | "brand";
  isPremium?: boolean;
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
    return user;
  } catch {
    return null;
  }
}

export function isUserAuthenticated(): boolean {
  return getUserSession() !== null;
}

export function getProfileCreateOrSetupUrl(): string {
  const session = getUserSession();
  if (session?.role === "brand") return "/register/brand";
  return "/profile/setup";
}

export function setDCAUserSession(emailOrPhone: string, role: "artist" | "brand" = "artist") {
  if (typeof window !== "undefined") {
    const existing = getUserSession();
    localStorage.setItem(
      "dca_user",
      JSON.stringify({
        identifier: emailOrPhone,
        email: emailOrPhone,
        isLoggedIn: true,
        loginTime: new Date().toISOString(),
        role: role || existing?.role || "artist",
        isPremium: existing?.isPremium || false,
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

export function setUserPremiumStatus(isPremium: boolean = true) {
  if (typeof window !== "undefined") {
    const existing = getUserSession();
    if (!existing || !existing.isLoggedIn) return;
    localStorage.setItem(
      "dca_user",
      JSON.stringify({
        ...existing,
        isPremium,
      })
    );
  }
}

export function clearDCAUserSession() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("dca_user");
  }
}
