import React from "react";
import Image from "next/image";
import logo from "@/assets/imgs/auth/pays_logo.png";
import Link from "next/link";
import MobileNav from "@/components/MobileHeader/page";

const Header = () => {
  return (
    <>
      {/* Main Nav */}
      <div className="hidden fixed bg-brand-white z-50 w-full items-center justify-between py-2 px-8 border-[0.1px] pb-4 border-b-brand-ash shadow-lg lg:flex">
        {/* left */}
        <Link href={"/"} className="flex gap-2 items-center justify-center p-4">
          <Image src={logo} alt="logo" width={65} height={22} priority />
        </Link>
        {/* middle */}
        {/* <div className="flex items-center justify-evenly gap-10">
          <Link
            href={"/"}
            className="transition-fx nav-hover-fx font-medium capitalize text-base text-brand-grayish font-geistsans hover:text-brand-main"
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className="transition-fx nav-hover-fx font-medium capitalize text-base text-brand-grayish font-geistsans hover:text-brand-main"
          >
            About
          </Link>{" "}
          <Link
            href={"/faqs"}
            className="transition-fx nav-hover-fx font-medium capitalize text-base text-brand-grayish font-geistsans hover:text-brand-main"
          >
            FAQs
          </Link>{" "}
          <Link
            href={"/contact"}
            className="transition-fx nav-hover-fx font-medium capitalize text-base text-brand-grayish font-geistsans hover:text-brand-main"
          >
            Contact
          </Link>
        </div> */}
        {/* right */}
        <Link
          href={"/auth"}
          className="transition-fx rounded-3xl cursor-pointer font-medium text-base uppercase py-2 px-4 bg-brand-main flex items-center justify-center gap-4 text-brand-white hover:bg-brand-main/25 hover:text-brand-main"
        >
          Get Started{" "}
          <svg
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.263225 12.2368C0.431987 12.4053 0.660751 12.5 0.899267 12.5C1.13778 12.5 1.36655 12.4053 1.53531 12.2368L10.1999 3.5722V10.4007C10.1999 10.6394 10.2947 10.8683 10.4635 11.0371C10.6323 11.2059 10.8612 11.3007 11.0999 11.3007C11.3387 11.3007 11.5676 11.2059 11.7364 11.0371C11.9052 10.8683 12 10.6394 12 10.4007V1.40006C12 1.16135 11.9052 0.932415 11.7364 0.763621C11.5676 0.594827 11.3387 0.5 11.0999 0.5H2.09935C1.86064 0.5 1.6317 0.594827 1.46291 0.763621C1.29411 0.932415 1.19929 1.16135 1.19929 1.40006C1.19929 1.63877 1.29411 1.8677 1.46291 2.0365C1.6317 2.20529 1.86064 2.30012 2.09935 2.30012H8.9278L0.263225 10.9647C0.0946735 11.1335 0 11.3622 0 11.6007C0 11.8392 0.0946735 12.068 0.263225 12.2368Z"
              fill="#3B82F6"
            />
          </svg>
        </Link>
      </div>

      {/* MOBILE MENU */}
      <div className="flex lg:hidden">
        <MobileNav />
      </div>
    </>
  );
};

export default Header;
