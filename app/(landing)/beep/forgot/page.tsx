"use client";

import MainContainer from "@/components/mainContainer/page";
// import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";

import logo from "@/assets/imgs/logo.jpg";
import { useGeneralContext } from "@/context/GenralContext";
import Image from "next/image";
import Link from "next/link";
import Spinner from "@/components/spinner/Spinner";
import SponsorBanners from "@/components/sponsorBanners/page";

const Forgot = () => {
  const { handleForgotPassword, authLoading }: any = useGeneralContext();

  const [email, setEmail] = useState();

  const onchangeHandler = async (e: any) => {
    e.persist();
    setEmail(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    handleForgotPassword(email);
  };

  return (
    <>
      <MainContainer>
        {/* TopSection */}
        <div className="gradient-fx w-[98%] rounded-xl flex items-center justify-center">
          <div className="w-full flex flex-col justify-between items-center p-2">
            <div className="w-full flex items-center justify-center p-2 my-2">
              <Image
                src={logo} // Replace with your actual logo image source
                alt="Logo"
                className="w-16 h-16 rounded-xl" // Adjust the width and height as needed
              />
            </div>
            {/* title-bytext */}
            <div className="flex flex-col gap-2 items-center justify-center font-geistsans">
              <span className="font-bold text-3xl text-brand-white">
                Forgot Password
              </span>
              <span className="font-normal text-xs text-brand-white">
                Forgot your password? Let&apos;s help you
              </span>
            </div>
          </div>
        </div>
        <div className="w-full rounded-xl bg-brand-white p-6 flex flex-col items-center justify-between gap-4 font-normal text-sm text-brand-grayish">
          <form
            // onSubmit={handleLogin}
            onSubmit={onSubmit}
            className="w-full flex flex-col justify-between gap-4 py-4"
          >
            {/* left top */}
            <div className="flex flex-col gap-6 justify-center">
              {/* input fields */}
              <div className="flex flex-col justify-center">
                <span className="font-medium text-sm text-gray-500 font-geistsans mb-2">
                  Email Address
                </span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email Address"
                  onChange={onchangeHandler}
                  className="w-full h-[40px] px-2 py-[12px] border border-brand-grayish rounded-lg text-brand-grayish bg-transparent"
                />
              </div>
            </div>
            {/* left bottom */}
            <div className="flex flex-col gap-4 pt-auto justify-start mt-6">
              {authLoading ? (
                <span className="w-full h-[44px] flex items-center justify-center text-brand-white">
                  <Spinner />
                </span>
              ) : (
                <button
                  type="submit"
                  className="transition-fx w-full h-[44px] capitalize bg-brand-main cursor-pointer rounded-3xl flex items-center justify-center text-brand-white hover:bg-brand-main/60"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
          {/* divider */}
          <span className="font-geistsans text-base font-normal flex flex-col items-center gap-2 w-full mt-auto mb-2">
            <div className="w-full h-[0.1px] mt-4 bg-brand-grayish lg:w-[90%]"></div>
            <div className="flex w-full items-center justify-center gap-2 text-xs">
              Wrong turn?{" "}
              <Link
                // href={"/auth/login"}
                href={"/beep/login"}
                className="flex items-center
                  text-blue-700"
              >
                Go Back{" "}
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-2"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.263225 12.2368C0.431987 12.4053 0.660751 12.5 0.899267 12.5C1.13778 12.5 1.36655 12.4053 1.53531 12.2368L10.1999 3.5722V10.4007C10.1999 10.6394 10.2947 10.8683 10.4635 11.0371C10.6323 11.2059 10.8612 11.3007 11.0999 11.3007C11.3387 11.3007 11.5676 11.2059 11.7364 11.0371C11.9052 10.8683 12 10.6394 12 10.4007V1.40006C12 1.16135 11.9052 0.932415 11.7364 0.763621C11.5676 0.594827 11.3387 0.5 11.0999 0.5H2.09935C1.86064 0.5 1.6317 0.594827 1.46291 0.763621C1.29411 0.932415 1.19929 1.16135 1.19929 1.40006C1.19929 1.63877 1.29411 1.8677 1.46291 2.0365C1.6317 2.20529 1.86064 2.30012 2.09935 2.30012H8.9278L0.263225 10.9647C0.0946735 11.1335 0 11.3622 0 11.6007C0 11.8392 0.0946735 12.068 0.263225 12.2368Z"
                    fill="#3B82F6"
                  />
                </svg>{" "}
              </Link>
            </div>
          </span>
          {/* Banners */}
          <SponsorBanners />
        </div>
      </MainContainer>
    </>
  );
};

export default Forgot;
