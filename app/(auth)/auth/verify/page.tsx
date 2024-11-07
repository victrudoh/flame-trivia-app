"use client";

import MainContainer from "@/components/mainContainer/page";
import React, { Suspense, useEffect } from "react";

import logo from "@/assets/imgs/logo.jpg";
import { useGeneralContext } from "@/context/GenralContext";
import Image from "next/image";
import Spinner from "@/components/spinner/Spinner";
import { useSearchParams } from "next/navigation";

const Verify = () => {
  const { setVerifyEmailDetails, authLoading }: any = useGeneralContext();

  //localhost:3000/auth/verify?id=6720ab0313804820a8a83981&emailToken=gaE_202410291029399

  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const token = searchParams.get("emailToken");

  useEffect(() => {
    if (id && token) {
      setVerifyEmailDetails((verifyEmailDetails: any) => ({
        ...verifyEmailDetails,
        id: id,
        emailToken: token,
      }));
    }
  }, []);

  return (
    <>
      <MainContainer>
        {/* TopSection */}
        <div className="gradient-fx w-[98%] rounded-xl flex items-center justify-center top-2">
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
                Verifying your account
              </span>
              <span className="font-normal text-xs text-brand-white">
                This will take a moment
              </span>
            </div>
          </div>
        </div>
        <div className="w-full rounded-xl bg-brand-white p-6 flex flex-col items-center justify-between gap-4 font-normal text-sm text-brand-grayish">
          {authLoading && (
            <span className="w-full h-[44px] my-12 flex items-center justify-center text-brand-white">
              <Spinner />
            </span>
          )}
        </div>
      </MainContainer>
    </>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Verify />
    </Suspense>
  );
}

// export default Login;
