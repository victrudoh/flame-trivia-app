"use client";

import React from "react";
import { HomeIcon, BookHeart, MessageCircle, Navigation } from "lucide-react";
import NavItem from "./NavItem";

const MobileNav = () => {
  return (
    <div className="glass-fx fixed bottom-0 max-w-screen-md w-full z-50 h-[72px] rounded-t-xl bg-brand-white flex items-center justify-evenly gap-2">
      <NavItem link="/home" icon={<HomeIcon />} />
      <NavItem link="/knowledge" icon={<BookHeart />} />
      <NavItem link="/location" icon={<Navigation />} />
      <NavItem link="/chat" icon={<MessageCircle />} />
    </div>
  );
};

export default MobileNav;
