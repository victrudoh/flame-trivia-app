"use client";

import { useGeneralContext } from "@/context/GenralContext";
// import { error } from "@/helpers/Alert";
import React, { useEffect } from "react";

const ChallengeCard = ({
  testId,
  data,
  index,
  onNext,
  hasNext,
  levelId,
}: any) => {
  console.log("🚀 ~ data:", data);
  const {
    oneChallenge,
    setOneChallenge,
    nextQuestion,
    setNextQuestion,
    // handleAnswerQuestion,
    handleEndChallenge,
  }: any = useGeneralContext();
  console.log("🚀 ~ oneChallenge:", oneChallenge);

  const handleAnswer = (isCorrect: boolean, chosenAnswer: string) => {
    const question = {
      ...oneChallenge.questions[index],
      attempted: true,
      chosenAnswer,
      correctAnswer: isCorrect,
    };
    const updatedQuestions = oneChallenge.questions.map((q: any, i: number) =>
      i === index ? question : q
    );

    const attemptedQuestions = updatedQuestions.filter(
      (q: any) => q.attempted
    ).length;
    const correctAnswers = updatedQuestions.filter(
      (q: any) => q.correctAnswer
    ).length;

    setOneChallenge({
      ...oneChallenge,
      questions: updatedQuestions,
      attemptedQuestions,
      correctAnswers,
    });
  };

  const answerQuestion = (answerKey: string) => {
    if (data?.attempted) return;

    const isCorrect = data?.question?.correct_answer === answerKey;
    handleAnswer(isCorrect, answerKey);
    setNextQuestion(true);
  };

  useEffect(() => {
    if (nextQuestion) {
      const timer = setTimeout(() => {
        if (!hasNext) {
          localStorage.removeItem(`${levelId}`);
          handleEndChallenge(testId);
        }
        onNext();
        setNextQuestion(false);
      }, 3000); // 3 seconds

      return () => clearTimeout(timer); // Clear the timer if `nextQuestion` changes before 3 seconds
    }
  }, [nextQuestion]);

  return (
    <>
      <div className="flex flex-col items-center justify-start gap-4 bg-brand-white w-[90vw] max-w-screen-sm mx-auto rounded-xl px-4 py-8">
        <span className="font-bold text-base">
          QUESTION {index + 1} of {oneChallenge?.totalQuestions}
        </span>
        <div className="rounded-xl w-full min-h-[25vh] bg-brand-grayish/20 text-center font-medium text-sm flex items-center justify-center p-4 border-brand-grayish/20 border-[0.3px]">
          {data?.question?.question || "No Question"}
        </div>

        {/* Options */}
        <div
          onClick={() => answerQuestion("answer_a")}
          className="flex flex-col gap-2 items-center justify-start w-full"
        >
          <div
            className={`transition-fx group cursor-pointer w-full p-4 flex gap-4 items-center rounded-xl border-brand-grayish/20 border-[0.3px] shadow-lg ${
              data?.attempted
                ? data?.chosenAnswer === "answer_a"
                  ? data?.correctAnswer
                    ? "bg-green-500" // Correct answer background when selected
                    : "bg-red-500 " // Incorrect answer background when selected
                  : data?.question?.correct_answer === "answer_a"
                  ? "bg-green-500" // Highlight correct answer when another is chosen
                  : "bg-brand-white hover:bg-green-500"
                : "bg-brand-white hover:bg-green-500" // Default and hover state
            }`}
          >
            <span
              className={`transition-fx rounded-full p-4 bg-brand-grayish/20 border-brand-grayish/20 border-[0.3px] group-hover:bg-green-500 group-hover:border-[0.9px] group-hover:border-brand-white ${
                data?.attempted
                  ? data?.chosenAnswer === "answer_a"
                    ? data?.correctAnswer
                      ? "bg-green-500 border-[0.9px] border-brand-white" // Circle green for correct answer
                      : "bg-red-500 border-[0.9px] border-brand-white group-hover:bg-red-500" // Circle red for incorrect answer
                    : data?.question?.correct_answer === "answer_a"
                    ? "bg-green-500 border-[0.9px] border-brand-white" // Circle green if it's the correct answer but not chosen
                    : ""
                  : ""
              }`}
            ></span>
            <span
              className={`font-normal text-sm group-hover:text-brand-white ${
                data?.attempted &&
                (data?.chosenAnswer === "answer_a" ||
                  data?.correct_answer === "answer_a")
                  ? "text-brand-white"
                  : "text-brand-dark"
              }`}
            >
              {data?.question?.answer_a}
            </span>
          </div>
        </div>

        {/* Repeat for other options */}
        {/* Option B */}
        <div
          onClick={() => answerQuestion("answer_b")}
          className="flex flex-col gap-2 items-center justify-start w-full"
        >
          <div
            className={`transition-fx group cursor-pointer w-full p-4 flex gap-4 items-center rounded-xl border-brand-grayish/20 border-[0.3px] shadow-lg ${
              data?.attempted
                ? data?.chosenAnswer === "answer_b"
                  ? data?.correctAnswer
                    ? "bg-green-500" // Correct answer background when selected
                    : "bg-red-500 " // Incorrect answer background when selected
                  : data?.question?.correct_answer === "answer_b"
                  ? "bg-green-500" // Highlight correct answer when another is chosen
                  : "bg-brand-white hover:bg-green-500"
                : "bg-brand-white hover:bg-green-500" // Default and hover state
            }`}
          >
            <span
              className={`transition-fx rounded-full p-4 bg-brand-grayish/20 border-brand-grayish/20 border-[0.3px] group-hover:bg-green-500 group-hover:border-[0.9px] group-hover:border-brand-white ${
                data?.attempted
                  ? data?.chosenAnswer === "answer_b"
                    ? data?.correctAnswer
                      ? "bg-green-500 border-[0.9px] border-brand-white" // Circle green for correct answer
                      : "bg-red-500 border-[0.9px] border-brand-white group-hover:bg-red-500" // Circle red for incorrect answer
                    : data?.question?.correct_answer === "answer_b"
                    ? "bg-green-500 border-[0.9px] border-brand-white" // Circle green if it's the correct answer but not chosen
                    : ""
                  : ""
              }`}
            ></span>
            <span
              className={`font-normal text-sm group-hover:text-brand-white ${
                data?.attempted &&
                (data?.chosenAnswer === "answer_b" ||
                  data?.correct_answer === "answer_b")
                  ? "text-brand-white"
                  : "text-brand-dark"
              }`}
            >
              {data?.question?.answer_b}
            </span>
          </div>
        </div>

        {data?.question?.answer_c && (
          <div
            onClick={() => answerQuestion("answer_c")}
            className="flex flex-col gap-2 items-center justify-start w-full"
          >
            <div
              className={`transition-fx group cursor-pointer w-full p-4 flex gap-4 items-center rounded-xl border-brand-grayish/20 border-[0.3px] shadow-lg ${
                data?.attempted
                  ? data?.chosenAnswer === "answer_c"
                    ? data?.correctAnswer
                      ? "bg-green-500" // Correct answer background when selected
                      : "bg-red-500 " // Incorrect answer background when selected
                    : data?.question?.correct_answer === "answer_c"
                    ? "bg-green-500" // Highlight correct answer when another is chosen
                    : "bg-brand-white hover:bg-green-500"
                  : "bg-brand-white hover:bg-green-500" // Default and hover state
              }`}
            >
              <span
                className={`transition-fx rounded-full p-4 bg-brand-grayish/20 border-brand-grayish/20 border-[0.3px] group-hover:bg-green-500 group-hover:border-[0.9px] group-hover:border-brand-white ${
                  data?.attempted
                    ? data?.chosenAnswer === "answer_c"
                      ? data?.correctAnswer
                        ? "bg-green-500 border-[0.9px] border-brand-white" // Circle green for correct answer
                        : "bg-red-500 border-[0.9px] border-brand-white group-hover:bg-red-500" // Circle red for incorrect answer
                      : data?.question?.correct_answer === "answer_c"
                      ? "bg-green-500 border-[0.9px] border-brand-white" // Circle green if it's the correct answer but not chosen
                      : ""
                    : ""
                }`}
              ></span>
              <span
                className={`font-normal text-sm group-hover:text-brand-white ${
                  data?.attempted &&
                  (data?.chosenAnswer === "answer_c" ||
                    data?.correct_answer === "answer_c")
                    ? "text-brand-white"
                    : "text-brand-dark"
                }`}
              >
                {data?.question?.answer_c}
              </span>
            </div>
          </div>
        )}
        {data?.question?.answer_d && (
          <div
            onClick={() => answerQuestion("answer_d")}
            className="flex flex-col gap-2 items-center justify-start w-full"
          >
            <div
              className={`transition-fx group cursor-pointer w-full p-4 flex gap-4 items-center rounded-xl border-brand-grayish/20 border-[0.3px] shadow-lg ${
                data?.attempted
                  ? data?.chosenAnswer === "answer_d"
                    ? data?.correctAnswer
                      ? "bg-green-500" // Correct answer background when selected
                      : "bg-red-500 " // Incorrect answer background when selected
                    : data?.question?.correct_answer === "answer_d"
                    ? "bg-green-500" // Highlight correct answer when another is chosen
                    : "bg-brand-white hover:bg-green-500"
                  : "bg-brand-white hover:bg-green-500" // Default and hover state
              }`}
            >
              <span
                className={`transition-fx rounded-full p-4 bg-brand-grayish/20 border-brand-grayish/20 border-[0.3px] group-hover:bg-green-500 group-hover:border-[0.9px] group-hover:border-brand-white ${
                  data?.attempted
                    ? data?.chosenAnswer === "answer_d"
                      ? data?.correctAnswer
                        ? "bg-green-500 border-[0.9px] border-brand-white" // Circle green for correct answer
                        : "bg-red-500 border-[0.9px] border-brand-white group-hover:bg-red-500" // Circle red for incorrect answer
                      : data?.question?.correct_answer === "answer_d"
                      ? "bg-green-500 border-[0.9px] border-brand-white" // Circle green if it's the correct answer but not chosen
                      : ""
                    : ""
                }`}
              ></span>
              <span
                className={`font-normal text-sm group-hover:text-brand-white ${
                  data?.attempted &&
                  (data?.chosenAnswer === "answer_d" ||
                    data?.correct_answer === "answer_d")
                    ? "text-brand-white"
                    : "text-brand-dark"
                }`}
              >
                {data?.question?.answer_d}
              </span>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        {/* <div className="flex justify-between w-full mt-4">
          <button
            onClick={onPrevious}
            disabled={!hasPrevious}
            className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={onNext}
            // disabled={!hasNext}
            className="bg-blue-500 px-4 py-2 rounded text-white disabled:opacity-50"
          >
            Next
          </button>
        </div> */}
      </div>
    </>
  );
};

export default ChallengeCard;
