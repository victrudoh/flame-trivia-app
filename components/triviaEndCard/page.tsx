"use client";

import { useGeneralContext } from "@/context/GenralContext";
import { useRouter } from "next/navigation";
// import { useSearchParams } from "next/navigation";
import React from "react";

const TriviaEndCard = ({ data }: any) => {
  const { setEndTest, userId, getOneLevel, handleStartTest }: any =
    useGeneralContext();

  const router = useRouter();

  //   const searchParams = useSearchParams();
  //   const levelId = searchParams.get("levelId");

  const handleTryAgain = () => {
    if (data?.levelId && userId) {
      localStorage.removeItem(`${data?.levelId}`);
      setEndTest(false);
      getOneLevel(data?.levelId);
      handleStartTest(data?.levelId);
      router.push("/v1/trivia");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-start gap-4 bg-brand-white w-[90vw] max-w-screen-md mx-auto rounded-xl px-4 py-8">
        <span className="font-bold text-base">TEST ENDED</span>
        <div className="rounded-xl w-full min-h-[25vh] bg-brand-grayish/20 text-center font-medium text-sm flex flex-col items-start justify-start p-4 pt-8 border-brand-grayish/20 border-[0.3px]">
          {/* {data?.question?.question || "No Question"} */}
          <div className="flex justify-between items-center w-[80%] mx-auto">
            <span className="text-xl font-geistsans">Final Score:</span>
            <span className="text-xl font-geistsans flex items-center">
              <span
                className={`${
                  data?.correctAnswer > 10 ? "text-green-500" : "text-red-500"
                }`}
              >
                {data?.correctAnswers}
              </span>
              /{data?.totalQuestions}
            </span>
          </div>
          <span
            onClick={() => handleTryAgain()}
            className="transition-fx w-full rounded-lg bg-brand-main flex justify-center items-center text-lg font-geistsans text-brand-white py-2 px-4 mt-auto cursor-pointer hover:bg-brand-secondary"
          >
            Play Again
          </span>
        </div>
      </div>
    </>
  );
};

export default TriviaEndCard;
