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
}

export function isUserAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const userStr = localStorage.getItem("dca_user");
    if (!userStr) return false;
    const user: DCAUser = JSON.parse(userStr);
    return Boolean(user && user.isLoggedIn);
  } catch {
    return false;
  }
}

export function getProfileCreateOrSetupUrl(): string {
  return isUserAuthenticated() ? "/profile/setup" : "/register";
}

export function setDCAUserSession(emailOrPhone: string) {
  if (typeof window !== "undefined") {
    localStorage.setItem(
      "dca_user",
      JSON.stringify({
        identifier: emailOrPhone,
        email: emailOrPhone,
        isLoggedIn: true,
        loginTime: new Date().toISOString(),
      })
    );
  }
}

export function clearDCAUserSession() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("dca_user");
  }
}
