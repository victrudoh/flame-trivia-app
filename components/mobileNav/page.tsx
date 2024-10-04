"use client";

import React from "react";
import NavItem from "./NavItem";

import knowledge from "@/assets/svgs/knowledgeBase.svg";
import home from "@/assets/svgs/home.svg";
import location from "@/assets/svgs/location.svg";
import chat from "@/assets/svgs/chat.svg";

const MobileNav = () => {
  return (
    <div className="glass-fx fixed bottom-0 max-w-screen-md w-full z-50 h-[72px] rounded-t-xl bg-brand-white flex items-center justify-evenly gap-2">
      <NavItem link="/v1/trivia" icon={home} />
      <NavItem link="/v1/knowledge" icon={knowledge} />
      <NavItem link="/v1/location" icon={location} />
      <NavItem link="/v1/chat" icon={chat} />
    </div>
  );
};

export default MobileNav;
