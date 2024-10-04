"use client";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

type NavItemProps = {
  link: string;
  icon: any;
};

const NavItem = ({ link, icon }: NavItemProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={link}
      className={`transition-fx cursor-pointer text-3xl p-2 rounded-full text-brand-grayish hover:text-brand-main hover:bg-brand-main/30  ${
        pathname.includes(link) && `text-brand-main bg-brand-main/30`
      }`}
    >
      <Image src={icon} alt="#" />
    </Link>
  );
};

export default NavItem;
