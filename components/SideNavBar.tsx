"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/imgs/auth/pays_logo.png";
import SideBarItem from "./SideBarItem";
import {
  LayoutDashboard,
  CircleHelp,
  Link,
  ArrowRightLeft,
  LogOut,
  TicketPercent,
} from "lucide-react";
import { useGeneralContext } from "@/context/GenralContext";

export const navItemsSuperAdmin = [
  {
    title: "Dashboard",
    link: "/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    title: "Vouchers",
    link: "/dashboard/vouchers",
    icon: <TicketPercent />,
  },
  {
    title: "Payment Links",
    link: "/dashboard/payments",
    icon: <Link />,
  },
  {
    title: "Transactions",
    link: "/dashboard/transactions",
    icon: <ArrowRightLeft />,
  },
  // {
  //   title: "FAQ",
  //   link: "/dashboard/faqs",
  //   icon: <CircleHelp />,
  // },
];

export const navItemsMdaAdmin = [
  {
    title: "Dashboard",
    link: "/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    title: "Vouchers",
    link: "/dashboard/vouchers",
    icon: <TicketPercent />,
  },
  {
    title: "Payment Links",
    link: "/dashboard/payments",
    icon: <Link />,
  },
  {
    title: "Transactions",
    link: "/dashboard/transactions",
    icon: <ArrowRightLeft />,
  },
  // {
  //   title: "FAQ",
  //   link: "/dashboard/faqs",
  //   icon: <CircleHelp />,
  // },
];

const SideNavBar = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const { user }: any = useGeneralContext();

  const handleLogout = () => {
    // deleteCookie("auth_token");
    push("/");
    localStorage.removeItem("auth_token");
    localStorage.removeItem("userId");
    // dispatch(logout());
    // window.location.reload();
  };

  const navBar = user?.role === "super" ? navItemsSuperAdmin : navItemsMdaAdmin;

  return (
    <div className=" sticky inset-y-0 w-[240px]  h-full border-r-[1px] ">
      <div className="flex flex-col h-screen py-3 gap-4 justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center justify-center p-4">
            <Image src={logo} alt="Login" width={65} height={22} priority />
          </div>
          <div className="flex flex-col h-full w-full py-4 gap-4">
            {navBar.map((nav, index) => (
              <SideBarItem
                key={index}
                title={nav.title}
                link={nav.link}
                icon={nav.icon}
              />
            ))}
          </div>
        </div>
        <span
          className="transition-fx flex items-center w-full p-2 py-4 pl-4 gap-3 cursor-pointer font-geistsans font-normal text-sm  border-r-4 border-red-500 hover:bg-red-100 hover:pl-8"
          onClick={() => handleLogout()}
        >
          <span className="text-red-500">
            <LogOut />
          </span>
          Logout
        </span>
      </div>
    </div>
  );
};

export default SideNavBar;
