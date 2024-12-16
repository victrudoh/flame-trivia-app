"use client";

// logo
// import logo from "../../assets/images/logo.jpeg";
import logo from "@/assets/imgs/logo.jpg";
import Link from "next/link";
import { useGeneralContext } from "@/context/GenralContext";
import Image from "next/image";

const AdminSidebar = () => {
  const { sidebarActive, setSidebarActive }: any = useGeneralContext();

  return (
    <div className="flex flex-col w-[180px] bg-white h-screen shadow-md">
      {/* Logo in the top-left corner */}
      <div className="w-full flex items-center justify-center p-4 mt-2 mb-10">
        <Image
          src={logo} // Replace with your actual logo image source
          alt="Logo"
          className="w-16 h-16" // Adjust the width and height as needed
        />
      </div>
      {/* Menu Items */}
      <div className="my-5 w-full flex flex-col gap-4">
        <Link
          onClick={() => setSidebarActive("trivia")}
          href="/admin/trivia"
          className={
            sidebarActive === "trivia"
              ? "w-full p-3 flex items-center justify-evenly text-white bg-teal-600 transition-all duration-300 ease-in-out rounded-tr rounded-br ml-3 no-underline hover:text-white"
              : "w-full p-3 flex items-center justify-evenly text-white bg-teal-500 transition-all duration-300 ease-in-out rounded-tr rounded-br hover:text-white hover:bg-teal-600 hover:ml-3"
          }
        >
          <h3>Trivia</h3>
        </Link>
        <Link
          onClick={() => setSidebarActive("knowledge")}
          href="/admin/knowledge"
          className={
            sidebarActive === "knowledge"
              ? "w-full p-3 flex items-center justify-evenly text-white bg-teal-600 transition-all duration-300 ease-in-out rounded-tr rounded-br ml-3 no-underline hover:text-white"
              : "w-full p-3 flex items-center justify-evenly text-white bg-teal-500 transition-all duration-300 ease-in-out rounded-tr rounded-br hover:text-white hover:bg-teal-600 hover:ml-3"
          }
        >
          <h3>Knowledge Base</h3>
        </Link>
        <Link
          onClick={() => setSidebarActive("leaderboard")}
          href="/admin/leaderboard"
          className={
            sidebarActive === "user"
              ? "w-full p-3 flex items-center justify-evenly text-white bg-teal-600 transition-all duration-300 ease-in-out rounded-tr rounded-br ml-3 no-underline hover:text-white"
              : "w-full p-3 flex items-center justify-evenly text-white bg-teal-500 transition-all duration-300 ease-in-out rounded-tr rounded-br hover:text-white hover:bg-teal-600 hover:ml-3"
          }
        >
          <h3>Leaderboard</h3>
        </Link>
        {/* <Link
          onClick={() => setSidebarActive("user")}
          href="/admin/user"
          className={
            sidebarActive === "user"
              ? "w-full p-3 flex items-center justify-evenly text-white bg-teal-600 transition-all duration-300 ease-in-out rounded-tr rounded-br ml-3 no-underline hover:text-white"
              : "w-full p-3 flex items-center justify-evenly text-white bg-teal-500 transition-all duration-300 ease-in-out rounded-tr rounded-br hover:text-white hover:bg-teal-600 hover:ml-3"
          }
        >
          <h3>Users</h3>
        </Link> */}
      </div>
    </div>
  );
};

export default AdminSidebar;
