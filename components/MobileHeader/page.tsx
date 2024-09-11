"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/imgs/auth/pays_logo.png";
import { useState, useRef, useEffect, MouseEvent } from "react";
// import { useGeneralContext } from "../../../context/GenralContext";
import { useRouter } from "next/navigation";

const MobileNav = () => {
  const router = useRouter();

  const [activeTopicTag, setActiveTopicTag] = useState() as any;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const handleToggle = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: any) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent | MouseEventInit) => {
      handleClickOutside(event);
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleDocumentClick);
    } else {
      document.removeEventListener("mousedown", handleDocumentClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [isOpen]);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    if (activeTopicTag) {
      console.log("🚀 ~ useEffect ~ activeTopicTag:", activeTopicTag);
      setIsOpen(!isOpen);
      router.push("/resource");
    }
  }, [activeTopicTag]);

  return (
    <div
      ref={navRef}
      className={`relative h-[76px] w-full bg-brand-white shadow-lg
         px-4 py-4 flex items-center md:px-6 ${
           isOpen ? "rounded-t-lg" : "rounded-lg"
         }`}
    >
      <div className="flex items-center justify-between w-full">
        <Link href="/">
          <Image src={logo} alt="LOGO" />
        </Link>
        <div className="flex items-center justify-center lg:hidden">
          <button onClick={handleToggle} className="focus:outline-none">
            <div
              className={`w-8 h-5 flex flex-col justify-between ${
                isOpen ? "open" : ""
              }`}
            >
              <div
                className={`w-full h-0.5 bg-brand-main transition-transform duration-300 ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></div>
              <div
                className={`w-full h-0.5 bg-brand-main transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-full h-0.5 bg-brand-main transition-transform duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`transition-all duration-300 ease-in-out absolute top-full left-0 w-full bg-brand-white shadow-lg z-10 overflow-hidden rounded-b-lg ${
          isOpen ? "opacity-100 p-4 pt-px" : "max-h-0 opacity-0 p-0"
        }`}
      >
        {/* Divider */}
        <div className="flex items-center justify-between gap-4 w-full pt-2 pb-4">
          <span className="w-full bg-brand-grayish/40 p-px rounded"></span>
        </div>

        {/* List items */}
        <nav className="flex flex-col items-start">
          <Link
            href="/about"
            onClick={() => setIsOpen(!isOpen)}
            className="transition-fx cursor-pointer py-4 w-full font-geistsans font-medium text-2xl text-brand-main border-b-[0.1px] border-b-brand-grayish/10 hover:bg-brand-main hover:px-4 hover:rounded-lg hover:text-brand-white"
          >
            About
          </Link>
          <Link
            href="/faqs"
            onClick={() => setIsOpen(!isOpen)}
            className="transition-fx cursor-pointer py-4 w-full font-geistsans font-medium text-2xl text-brand-main border-b-[0.1px] border-b-brand-grayish/10 hover:bg-brand-main hover:px-4 hover:rounded-lg hover:text-brand-white"
          >
            FAQs
          </Link>
          <Link
            href="/contacts"
            onClick={() => setIsOpen(!isOpen)}
            className="transition-fx cursor-pointer py-4 w-full font-geistsans font-medium text-2xl text-brand-main border-b-[0.1px] border-b-brand-grayish/10 hover:bg-brand-main hover:px-4 hover:rounded-lg hover:text-brand-white"
          >
            Contacts
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
