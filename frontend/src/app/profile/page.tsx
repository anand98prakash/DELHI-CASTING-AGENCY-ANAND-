"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getUserSession, isUserAuthenticated } from "@/lib/auth";

export default function ProfilePage() {
  const router = useRouter();

  useEffect(() => {
    if (!isUserAuthenticated()) {
      router.push("/login");
      return;
    }

    const session = getUserSession();
    if (session?.role === "ADMIN" || session?.role === "admin") {
      router.push("/admin/dashboard");
    } else {
      router.push("/dashboard");
    }
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F7F7F5]">
      <div className="text-center">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-[#D4AF37] border-t-transparent" />
        <p className="mt-3 text-xs font-bold uppercase tracking-wider text-[#555555]">
          Loading profile...
        </p>
      </div>
    </div>
  );
}
