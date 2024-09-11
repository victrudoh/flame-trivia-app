import React from "react";
import { HomeIcon, BookHeart, MessageCircle, LocateIcon } from "lucide-react";
import Link from "next/link";

const MobileNav = () => {
  return (
    <>
      <div className="fixed bottom-0 w-full z-50 h-[72px] rounded-t-xl bg-brand-white flex items-center justify-evenly gap-2">
        <Link
          href={"/"}
          className="transition-fx cursor-pointer text-3xl text-brand-grayish hover:text-blue-500"
        >
          <HomeIcon />
        </Link>
        <Link
          href={"/knowledge"}
          className="transition-fx cursor-pointer text-3xl text-brand-grayish hover:text-blue-500"
        >
          <BookHeart />
        </Link>
        <Link
          href={"/location"}
          className="transition-fx cursor-pointer text-3xl text-brand-grayish hover:text-blue-500"
        >
          <LocateIcon />
        </Link>
        <Link
          href={"/chat"}
          className="transition-fx cursor-pointer text-3xl text-brand-grayish hover:text-blue-500"
        >
          <MessageCircle />
        </Link>
      </div>
    </>
  );
};

export default MobileNav;
