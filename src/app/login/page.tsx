"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Lock, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pl-11 text-xs sm:text-sm text-[#111111] placeholder:text-gray-400 transition-all duration-300 focus:border-[#D4AF37] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 shadow-2xs";

export default function LoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!identifier || !password) {
      setError("Please enter your Email / Mobile Number and Password.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "dca_user",
          JSON.stringify({
            identifier,
            isLoggedIn: true,
            loginTime: new Date().toISOString(),
          })
        );
      }
      setLoading(false);
      router.push("/profile/setup");
    }, 600);
  };

  return (
    <main className="min-h-screen bg-white text-[#111111]">
      {/* Compact Luxury Header Banner */}
      <section className="relative isolate overflow-hidden border-b border-gray-200 bg-[#F7F7F5] px-4 pt-28 pb-4 sm:pt-32 sm:pb-6 text-center">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              ARTIST PORTAL
            </span>
            <h1 className="mt-1 font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#111111]">
              Welcome Back
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-[#555555] max-w-xl mx-auto leading-relaxed">
              Login to access your artist profile, portfolio photos, and verified casting calls.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Compact Breadcrumb */}
      <div className="mx-auto max-w-xl px-4 py-2 text-center flex justify-center">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Login" }]} />
      </div>

      {/* First-Viewport Centered Login Card Section */}
      <section className="mx-auto max-w-xl px-4 pb-12 pt-2">
        <Reveal>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-xs">
            {/* Error Message */}
            {error && (
              <div className="mb-4 rounded-xl border border-red-200 bg-red-50 p-3 text-center text-xs font-semibold text-red-600">
                {error}
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email / Mobile Field */}
              <div>
                <label
                  htmlFor="identifier"
                  className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#111111]"
                >
                  Email Address or Mobile Number
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                    <Mail size={16} />
                  </div>
                  <input
                    id="identifier"
                    name="identifier"
                    type="text"
                    required
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="you@example.com or +91 9876543210"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-xs font-bold uppercase tracking-wider text-[#111111]"
                  >
                    Password
                  </label>
                  <a
                    href="#forgot-password"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Password reset instructions will be sent to your registered Email/Phone.");
                    }}
                    className="text-xs font-semibold text-[#111111] hover:text-[#D4AF37] transition-colors"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                    <Lock size={16} />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full justify-center py-3.5 text-xs sm:text-sm font-bold uppercase tracking-[0.16em] bg-[#D4AF37] hover:bg-[#c59b27] text-white transition-all shadow-xs"
              >
                {loading ? (
                  "Logging in..."
                ) : (
                  <>
                    <span>Login to Artist Account</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              {/* Register Prompt */}
              <div className="mt-4 border-t border-gray-200 pt-4 text-center">
                <p className="text-xs text-[#555555]">
                  Don&apos;t have an artist profile yet?{" "}
                  <Link
                    href="/register"
                    className="font-bold text-[#111111] hover:text-[#D4AF37] transition-colors"
                  >
                    Create Your Profile &rarr;
                  </Link>
                </p>
              </div>
            </form>

            {/* Encrypted Security Badge */}
            <div className="mt-5 flex items-center justify-center gap-1.5 text-center text-[11px] font-medium text-[#666666]">
              <ShieldCheck size={14} className="text-[#D4AF37]" />
              <span>100% Encrypted &amp; Secure Artist Portal</span>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
