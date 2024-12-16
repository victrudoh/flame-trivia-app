"use client";

import React, { Suspense } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, EyeIcon, User } from "lucide-react";
import TopSection from "@/components/topSection/page";
import MainContainer from "@/components/mainContainer/page";
// import { useGeneralContext } from "@/context/GenralContext";
import ListItem from "./ListItem";

const OneTopic = () => {
  // const { user, handleDeleteAccount }: any = useGeneralContext();
  const router = useRouter();

  const goBack = () => {
    router.push("/home");
  };

  // const [verifyDelete, setVerifyDelete] = useState(false);

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
        <div className="w-full overflow-y-auto rounded-xl p-4 flex flex-col items-center justify-start gap-4 h-full">
          <ListItem
            title={"Profile"}
            thumbnail={<User />}
            link={"/profile/user"}
          />
          <ListItem
            title={"Privacy Policy"}
            thumbnail={<EyeIcon />}
            link={"/privacy"}
          />
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
