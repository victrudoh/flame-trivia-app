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
      className={`transition-fx cursor-pointer text-3xl text-brand-grayish hover:text-blue-500  ${
        link === pathname && `text-blue-500`
      }`}
    >
      {icon}
    </Link>
    // <Link href={link}>
    //   <div
    //     className={`group transition-fx flex items-center w-full p-2 py-4 pl-4 gap-2 cursor-pointer rounded-r-3xl font-geistsans font-normal text-sm hover:pl-8 hover:text-brand-white hover:bg-brand-main ${
    //       link === pathname && `pl-8 border-main text-brand-white bg-brand-main`
    //     }`}
    //   >
    //     <span>{icon}</span>
    //     {title}
    //   </div>
    // </Link>
  );
};

export default NavItem;
