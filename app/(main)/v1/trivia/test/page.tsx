"use client";

import React, { Suspense, useEffect, useState } from "react";
import MainContainer from "@/components/mainContainer/page";
import TopSection from "@/components/topSection/page";
import { ArrowLeft, CircleHelp } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import TriviaCard from "@/components/triviaCard/page";
import { useGeneralContext } from "@/context/GenralContext";
import Spinner from "@/components/spinner/Spinner";
import TriviaEndCard from "@/components/triviaEndCard/page";

const TakeTest = () => {
  const {
    userId,
    oneLevel,
    getOneLevel,
    triviaLoading,
    handleStartTest,
    oneTest,
    endTest,
    setEndTest,
  }: any = useGeneralContext();
  console.log("🚀 ~ TakeTest ~ oneTest:", oneTest);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");
  // const [endTest, setEndTest] = useState(false);
  const router = useRouter();

  const goBack = () => {
    // localStorage.removeItem(`${levelId}`);
    router.push("/v1/trivia");
  };

  const gotoKnowledge = () => {
    router.push(
      `/v1/knowledge/${oneTest?.questions?.[currentIndex]?.question?.topicId}`
    );
  };

  const searchParams = useSearchParams();
  const levelId = searchParams.get("levelId");

  useEffect(() => {
    if (levelId && userId) {
      getOneLevel(levelId);
      handleStartTest(levelId);
    }
  }, [userId]);

  // Load saved index from localStorage when the component mounts
  useEffect(() => {
    const savedIndex = localStorage.getItem(`${levelId}`);

    if (savedIndex) {
      setCurrentIndex(parseInt(savedIndex));
    }
  }, []);

  // Update and save index immediately when navigating to the next/previous question
  const updateIndex = (newIndex: any) => {
    setCurrentIndex(newIndex);
    localStorage.setItem(`${levelId}`, newIndex.toString());
  };

  const handleNext = () => {
    if (currentIndex < oneTest.questions.length - 1) {
      setAnimationClass("fall-off-left");
      setTimeout(() => {
        updateIndex(currentIndex + 1);
        setAnimationClass("");
      }, 500);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setAnimationClass("fall-off-right");
      setTimeout(() => {
        updateIndex(currentIndex - 1);
        setAnimationClass("");
      }, 500);
    }
  };

  return (
    <MainContainer>
      <TopSection>
        <div className="w-[80%] flex items-center justify-start py-12 gap-4">
          <ArrowLeft
            className="bg-brand-white shadow-lg w-10 h-10 p-1 rounded-full cursor-pointer hover:bg-brand-white/60 hover:text-brand-dark"
            onClick={goBack}
          />
          <div className="flex flex-col items-start gap-[2px] flex-wrap max-w-[80%]">
            <span className="font-bold text-sm text-brand-white">
              {oneLevel?.name || oneTest?.levelTitle}
            </span>
          </div>
        </div>
        {!oneTest?.testEnded && (
          <CircleHelp
            className="bg-brand-white shadow-lg w-10 h-10 rounded-full cursor-pointer hover:bg-brand-white/60 hover:text-brand-dark"
            onClick={gotoKnowledge}
          />
        )}
      </TopSection>

      {triviaLoading ? (
        <Spinner />
      ) : oneTest ? (
        <div className="relative w-full h-full flex flex-col items-center">
          {endTest ? (
            <TriviaEndCard data={oneTest} />
          ) : (
            <div className={`trivia-card-container ${animationClass}`}>
              <TriviaCard
                key={currentIndex}
                testId={oneTest?._id}
                levelId={levelId}
                data={oneTest?.questions[currentIndex]}
                index={currentIndex}
                onNext={handleNext}
                onPrevious={handlePrevious}
                hasPrevious={currentIndex > 0}
                hasNext={currentIndex < oneTest?.questions?.length - 1}
                hasTestEnded={oneTest?.testEnded}
                endTest={endTest}
                setEndTest={setEndTest}
              />
            </div>
          )}
        </div>
      ) : (
        <Spinner />
      )}
    </MainContainer>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TakeTest />
    </Suspense>
  );
}
