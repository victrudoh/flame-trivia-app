"use client";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  link: string;
  icon: React.ReactNode;
};

const NavItem = ({ link, icon }: NavItemProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={link}
      className={`transition-fx cursor-pointer text-3xl text-brand-grayish hover:text-brand-main  ${
        pathname.includes(link) && `text-brand-main`
      }`}
    >
      {icon}
    </Link>
  );
};

export default NavItem;
