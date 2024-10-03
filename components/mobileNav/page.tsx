"use client";

import React from "react";
import {
  HomeIcon,
  BookHeart,
  MessageCircle,
  Navigation,
  Gamepad,
  Gamepad2,
} from "lucide-react";
import NavItem from "./NavItem";

const MobileNav = () => {
  return (
    <div className="glass-fx fixed bottom-0 max-w-screen-md w-full z-50 h-[72px] rounded-t-xl bg-brand-white flex items-center justify-evenly gap-2">
      <NavItem link="/v1/trivia" icon={<Gamepad2 />} />
      <NavItem link="/v1/knowledge" icon={<BookHeart />} />
      <NavItem link="/v1/location" icon={<Navigation />} />
      <NavItem link="/v1/chat" icon={<MessageCircle />} />
    </div>
  );
};

export default MobileNav;
