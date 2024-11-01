"use client";

import AuthLayout from "@/app/(auth)/auth/layout";
import { info } from "../../helpers/Alert";
import { useGeneralContext } from "@/context/GenralContext";
import { useRouter } from "next/navigation";

const AdminNavbar = () => {
  const { activeUser, topbarTitle }: any = useGeneralContext();

  const router = useRouter();

  const logoutHandler = () => {
    info("You were logged out.");
    localStorage.removeItem("auth_token");
    localStorage.removeItem("userId");
    router.push(`/auth/login`);
    return <AuthLayout />;
  };

  return (
    <div className="bg-white shadow-md w-full flex justify-between items-center p-2 px-4">
      {/* left */}
      <span className="font-inter text-[20px] ont-medium font-semibold leading-29 tracking-normal text-left">
        {topbarTitle}
      </span>
      {/* right */}
      <div className="flex gap-4">
        <div className="flex flex-col justify-center items-center">
          <span className="font-semibold font-sans">
            {activeUser?.firstName}
          </span>
          <span className="font-sans text-sm">{activeUser?.role}</span>
        </div>
        {/* logout */}
        <span
          className="bg-red-500 rounded-lg p-2 px-4 flex items-center justify-center outline-none text-white cursor-pointer hover:bg-red-700"
          onClick={logoutHandler}
        >
          Logout
        </span>
      </div>
    </div>
  );
};

export default AdminNavbar;
