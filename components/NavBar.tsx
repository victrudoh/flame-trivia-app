"use client";
import { useGeneralContext } from "@/context/GenralContext";
import { User, Wallet } from "lucide-react";
import React from "react";

const NavBar = () => {
  const { user }: any = useGeneralContext();
  return (
    <div className="ml-[208px] py-4 fixed inset-x-0 border-b-[0.3px] z-50 bg-brand-ash">
      <div className="flex px-4 items-center h-full w-full justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-xl text-brand-main font-semibold">WELCOME</h1>
          {/* <h1 className="text-lg text-brand-main font-geistsans font-medium">
            {" "}
            {user?.name}
          </h1> */}
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-2 items-end p-2 px-4 font-geistsans font-normal text-base rounded-3xl bg-brand-white text-brand-main">
            <Wallet />₦{(user?.walletBalance || 0).toLocaleString("en-NG")}
          </div>
          <div className="flex gap-2 items-end p-2 px-4 font-geistsans font-normal text-base rounded-3xl bg-brand-white text-brand-main">
            <User />
            {user?.name}
          </div>
          {/* <div className="flex flex-col items-end">
            <h1 className="font-semibold">{user?.email}</h1>
            <h1>{user?.role}</h1>
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-200 border border-gray-400">
            <User />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
