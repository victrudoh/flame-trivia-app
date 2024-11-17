"use client";

import { useGeneralContext } from "@/context/GenralContext";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const TriviaEndCard = ({ data }: any) => {
  const { setEndTest, userId, getOneLevel, handleStartTest }: any =
    useGeneralContext();
  const router = useRouter();

  const [percentage, setPercentage] = useState(0);

  // Handle the progress bar animation
  useEffect(() => {
    if (data?.correctAnswers && data?.totalQuestions) {
      const correctPercentage =
        (data.correctAnswers / data.totalQuestions) * 100;
      setTimeout(() => setPercentage(correctPercentage), 100); // Start animation slightly after render
    }
  }, [data]);

  // Dynamic color based on percentage
  const getColor = (percentage: number) => {
    if (percentage < 40) return "red";
    if (percentage < 70) return "orange";
    if (percentage < 90) return "yellow";
    return "green";
  };

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
    <div className="flex flex-col items-center justify-start gap-6 bg-brand-white w-[90vw] max-w-screen-sm mx-auto rounded-xl px-4 py-8">
      <span className="font-bold text-base">TEST ENDED</span>

      {/* Circular Progress Bar */}
      <div className="w-40 h-40">
        <CircularProgressbar
          value={percentage}
          text={`${data?.correctAnswers || 0}/${data?.totalQuestions || 0}`}
          styles={buildStyles({
            pathColor: getColor(percentage),
            textColor: "#000",
            trailColor: "#d6d6d6",
            textSize: "16px",
            pathTransitionDuration: 3, // Animation duration
          })}
        />
      </div>

      <div className="rounded-xl w-full bg-brand-ash text-center font-medium text-sm flex items-center justify-center p-8 border-brand-ash/40 border-[0.3px]">
        <span
          onClick={() => handleTryAgain()}
          className="transition-fx w-full rounded-lg bg-brand-main flex justify-center items-center text-lg font-geistsans text-brand-white py-2 px-4 mt-auto cursor-pointer hover:bg-brand-secondary"
        >
          Play Again
        </span>
      </div>
    </div>
  );
};

export default TriviaEndCard;
