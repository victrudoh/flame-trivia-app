"use client";

import "@/app/globals.css";
import AdminNavbar from "@/components/admin/AdminNavbar";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { useEffect } from "react";
import { error } from "@/helpers/Alert";
import { useRouter } from "next/navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const checkToken = () => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("auth_token");
      if (!token) {
        error("Please login to continue.");
        router.push(`/auth/login`);
      }
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <div className="flex h-screen w-full overflow-x-hidden bg-gray-100 text-brand-dark">
      {/* Left */}
      <AdminSidebar />
      {/* Right */}
      <div className="w-full flex flex-col">
        <AdminNavbar />
        <div className="h-screen overflow-y-scroll w-full p-4">{children}</div>
      </div>
    </div>
  );
}
