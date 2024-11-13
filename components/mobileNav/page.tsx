"use client";

import React, { useEffect } from "react";
import NavItem from "./NavItem";

import knowledge from "@/assets/svgs/knowledgeBase.svg";
import home from "@/assets/svgs/home.svg";
import location from "@/assets/svgs/location.svg";
import chat from "@/assets/svgs/chat.svg";
import { useRouter } from "next/navigation";
import AuthLayout from "@/app/(auth)/auth/layout";
import { error } from "@/helpers/Alert";

const MobileNav = () => {
  const router = useRouter();

  const checkToken = async () => {
    const token = localStorage.getItem("auth_token");

    if (!token) {
      error("Please login to continue.");
      router.push(`/auth/login`);
      return <AuthLayout />;
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <div className="glass-fx fixed bottom-0 max-w-screen-sm w-full z-50 h-[72px] rounded-t-xl bg-brand-white flex items-center justify-evenly gap-2">
      <NavItem link="/v1/trivia" icon={home} />
      <NavItem link="/v1/knowledge" icon={knowledge} />
      <NavItem link="/v1/location" icon={location} />
      <NavItem link="/v1/chat" icon={chat} />
    </div>
  );
};

export default MobileNav;
