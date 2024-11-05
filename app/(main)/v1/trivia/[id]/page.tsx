"use client";

import MainContainer from "@/components/mainContainer/page";
import TopSection from "@/components/topSection/page";
import { ArrowLeft, CircleHelp } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
import TriviaCard from "@/components/triviaCard/page";

const Page = ({ params }: { params: { id: string } }) => {
  console.log("🚀 ~ Page ~ params:", params);
  const router = useRouter();

  const goBack = () => {
    router.push("/v1/trivia");
  };

  const gotoKnowledge = () => {
    router.push("/v1/knowledge/671a995390c7fc0fa8666992");
  };

  return (
    <>
      <MainContainer>
        <TopSection>
          <div className="w-[80%] flex items-center py-12 gap-4">
            <ArrowLeft
              className="bg-brand-white shadow-lg w-10 h-10 p-1 rounded-full cursor-pointer hover:bg-brand-white/60 hover:text-brand-dark"
              onClick={goBack}
            />
            <div className="flex flex-col items-start gap-[2px]">
              <span className="font-bold text-xl text-brand-white">
                About HIV/AIDS
              </span>
              <span className="font-normal text-sm text-brand-white">
                About HIV/AIDS
              </span>
            </div>
          </div>
          <CircleHelp
            className="bg-brand-white shadow-lg w-10 h-10 rounded-full cursor-pointer hover:bg-brand-white/60 hover:text-brand-dark"
            onClick={gotoKnowledge}
          />
        </TopSection>
        {/* {params?.id} */}
        <TriviaCard />
      </MainContainer>
    </>
  );
};

export default Page;
