// "use client";

import "@/app/globals.css";
import MobileNav from "@/components/mobileNav/page";
// import { error } from "@/helpers/Alert";
// import AuthLayout from "../(auth)/auth/layout";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

export default async function MainLayout({ children }: any) {
  // const router = useRouter();

  // const checkToken = async () => {
  //   const token = localStorage.getItem("auth_token");

  //   if (!token) {
  //     error("Please login to continue.");
  //     router.push(`/auth/login`);
  //     return <AuthLayout />;
  //   }
  // };

  // useEffect(() => {
  //   checkToken();
  // }, []);
  return (
    <div className="gradient-fx flex flex-col min-h-screen max-w-screen-sm mx-auto">
      <div className="flex-grow w-full pb-[40px]">{children}</div>
      <MobileNav />
    </div>
  );
}
