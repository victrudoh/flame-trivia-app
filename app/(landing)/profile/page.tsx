"use client";

import React, { Suspense, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import TopSection from "@/components/topSection/page";
import MainContainer from "@/components/mainContainer/page";
import { useGeneralContext } from "@/context/GenralContext";

const OneTopic = () => {
  const { user, handleDeleteAccount }: any = useGeneralContext();
  const router = useRouter();

  const goBack = () => {
    router.push("/home");
  };

  const [verifyDelete, setVerifyDelete] = useState(false);

  return (
    <>
      {/* <div className="bg-brand-main py-8 text-brand-dark h-screen flex flex-col items-center justify-start text-lg font-geistsans gap-8"> */}
      <MainContainer>
        <TopSection>
          <div className="w-full flex items-center justify-start gap-8">
            <ArrowLeft
              className="bg-brand-white shadow-lg w-10 h-10 p-1 ml-4 rounded-full cursor-pointer hover:bg-brand-white/60 hover:text-brand-dark"
              onClick={goBack}
            />
            <span className="font-bold text-lg text-brand-white">
              User Profile
            </span>
          </div>
        </TopSection>
        {/* bottom */}
        <div className="w-full rounded-xl bg-brand-white p-6 flex flex-col items-center justify-start gap-4 font-normal text-sm text-brand-grayish h-max ">
          <span className="max-w-[400px] w-full pb-2 font-geistsans text-sm flex flex-col items-center justify-start">
            <span className="w-full text-lg my-4">
              <strong>Name: </strong> {user?.firstName} {user?.lastName}
            </span>
            <span className="w-full text-lg my-4">
              <strong>Username: </strong> {user?.username}
            </span>
            <span className="w-full text-lg my-4">
              <strong>Email: </strong> {user?.email}
            </span>
            <span className="w-full text-lg my-4">
              <strong>Phone Number: </strong> {user?.phoneNumber}
            </span>
            {verifyDelete ? (
              <>
                <div className="mt-24 w-full flex flex-col items-center justify-center gap-2">
                  <span>Are you sure you want to delete your account?</span>
                  <div className="flex items-center justify-between gap-4 w-full">
                    <span
                      onClick={() => handleDeleteAccount(user?._id)}
                      className="mb-4 w-[50%] bg-red-500 rounded-xl text-brand-white p-4 text-xl flex items-center justify-center cursor-pointer hover:bg-red-400"
                    >
                      Yes
                    </span>
                    <span
                      onClick={() => setVerifyDelete(false)}
                      className="mb-4 w-[50%] bg-brand-main rounded-xl text-brand-white p-4 text-xl flex items-center justify-center cursor-pointer hover:bg-brand-main/80"
                    >
                      No
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <span
                // onClick={() => handleDeleteAccount(user?._id)}
                onClick={() => setVerifyDelete(true)}
                className="mt-24 mb-4 w-full bg-red-500 rounded-xl text-brand-white p-4 text-xl flex items-center justify-center cursor-pointer hover:bg-red-400"
              >
                Delete Account
              </span>
            )}
            <hr className="w-full my-2" />
            <span className="w-full text-sm text-brand-grayish mt-auto">
              Powered by: Digital Technocrats
            </span>
          </span>
        </div>
      </MainContainer>
    </>
  );
};

// export default OneTopic;

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OneTopic />
    </Suspense>
  );
}
