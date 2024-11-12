"use client";

import React, { Suspense, useEffect, useState } from "react";
import MainContainer from "@/components/mainContainer/page";
import TopSection from "@/components/topSection/page";
import { ArrowLeft } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import TriviaCard from "@/components/triviaCard/page";
import { useGeneralContext } from "@/context/GenralContext";
import Spinner from "@/components/spinner/Spinner";
import TriviaEndCard from "@/components/triviaEndCard/page";
import Confetti from "react-confetti";

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");
  const [isCelebrating, setIsCelebrating] = useState(true);
  const router = useRouter();

  const goBack = () => {
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

  useEffect(() => {
    const savedIndex = localStorage.getItem(`${levelId}`);
    if (savedIndex) {
      setCurrentIndex(parseInt(savedIndex));
    }
  }, []);

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

  // Confetti effect on endTest
  useEffect(() => {
    if (endTest) {
      // Any additional confetti setup or logic can be placed here if needed
      // Stop the confetti after 5 seconds
      const timer = setTimeout(() => {
        setIsCelebrating(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [endTest]);

  return (
    <MainContainer>
      {endTest && isCelebrating && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
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
          <svg
            width="47"
            height="45"
            viewBox="0 0 47 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-[-10px]"
            onClick={gotoKnowledge}
          >
            <path
              d="M0.13474 22.0761C0.0559673 32.2167 8.21275 40.5012 18.3534 40.58C28.4941 40.6588 36.7786 32.502 36.8574 22.3613C36.9361 12.2206 28.7794 3.93614 18.6387 3.85737C8.49801 3.7786 0.213514 11.9354 0.13474 22.0761Z"
              fill="white"
            />
            <path
              d="M10.9999 16.6505C10.9999 15.9443 11.1016 14.32 13.3685 12.4514C14.7145 11.342 16.331 11.0206 17.7794 11.0009C19.1021 10.9846 20.2843 11.2085 20.9912 11.5531C22.1995 12.1449 24.559 13.5856 24.559 16.6505C24.559 19.8757 22.4983 21.3375 20.1558 22.9484C17.8133 24.5592 17.2145 25.5741 17.2145 27.3848"
              stroke="black"
              stroke-width="4.0185"
              stroke-miterlimit="10"
              stroke-linecap="square"
            />
            <path
              d="M18.9446 31.057H15.4842C15.3477 31.057 15.2371 31.1677 15.2371 31.3042V34.7646C15.2371 34.9011 15.3477 35.0118 15.4842 35.0118H18.9446C19.0811 35.0118 19.1918 34.9011 19.1918 34.7646V31.3042C19.1918 31.1677 19.0811 31.057 18.9446 31.057Z"
              fill="black"
            />
          </svg>
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

// "use client";

// import React, { Suspense, useEffect, useState } from "react";
// import MainContainer from "@/components/mainContainer/page";
// import TopSection from "@/components/topSection/page";
// import { ArrowLeft, CircleHelp } from "lucide-react";
// import { useRouter, useSearchParams } from "next/navigation";
// import TriviaCard from "@/components/triviaCard/page";
// import { useGeneralContext } from "@/context/GenralContext";
// import Spinner from "@/components/spinner/Spinner";
// import TriviaEndCard from "@/components/triviaEndCard/page";

// const TakeTest = () => {
//   const {
//     userId,
//     oneLevel,
//     getOneLevel,
//     triviaLoading,
//     handleStartTest,
//     oneTest,
//     endTest,
//     setEndTest,
//   }: any = useGeneralContext();
//   // console.log("🚀 ~ TakeTest ~ oneTest:", oneTest);

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [animationClass, setAnimationClass] = useState("");
//   // const [endTest, setEndTest] = useState(false);
//   const router = useRouter();

//   const goBack = () => {
//     // localStorage.removeItem(`${levelId}`);
//     router.push("/v1/trivia");
//   };

//   const gotoKnowledge = () => {
//     router.push(
//       `/v1/knowledge/${oneTest?.questions?.[currentIndex]?.question?.topicId}`
//     );
//   };

//   const searchParams = useSearchParams();
//   const levelId = searchParams.get("levelId");

//   useEffect(() => {
//     if (levelId && userId) {
//       getOneLevel(levelId);
//       handleStartTest(levelId);
//     }
//   }, [userId]);

//   // Load saved index from localStorage when the component mounts
//   useEffect(() => {
//     const savedIndex = localStorage.getItem(`${levelId}`);

//     if (savedIndex) {
//       setCurrentIndex(parseInt(savedIndex));
//     }
//   }, []);

//   // Update and save index immediately when navigating to the next/previous question
//   const updateIndex = (newIndex: any) => {
//     setCurrentIndex(newIndex);
//     localStorage.setItem(`${levelId}`, newIndex.toString());
//   };

//   const handleNext = () => {
//     if (currentIndex < oneTest.questions.length - 1) {
//       setAnimationClass("fall-off-left");
//       setTimeout(() => {
//         updateIndex(currentIndex + 1);
//         setAnimationClass("");
//       }, 500);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentIndex > 0) {
//       setAnimationClass("fall-off-right");
//       setTimeout(() => {
//         updateIndex(currentIndex - 1);
//         setAnimationClass("");
//       }, 500);
//     }
//   };

//   return (
//     <MainContainer>
//       <TopSection>
//         <div className="w-[80%] flex items-center justify-start py-12 gap-4">
//           <ArrowLeft
//             className="bg-brand-white shadow-lg w-10 h-10 p-1 rounded-full cursor-pointer hover:bg-brand-white/60 hover:text-brand-dark"
//             onClick={goBack}
//           />
//           <div className="flex flex-col items-start gap-[2px] flex-wrap max-w-[80%]">
//             <span className="font-bold text-sm text-brand-white">
//               {oneLevel?.name || oneTest?.levelTitle}
//             </span>
//           </div>
//         </div>
//         {!oneTest?.testEnded && (
//           <CircleHelp
//             className="bg-brand-white shadow-lg w-10 h-10 rounded-full cursor-pointer hover:bg-brand-white/60 hover:text-brand-dark"
//             onClick={gotoKnowledge}
//           />
//         )}
//       </TopSection>

//       {triviaLoading ? (
//         <Spinner />
//       ) : oneTest ? (
//         <div className="relative w-full h-full flex flex-col items-center">
//           {endTest ? (
//             <TriviaEndCard data={oneTest} />
//           ) : (
//             <div className={`trivia-card-container ${animationClass}`}>
//               <TriviaCard
//                 key={currentIndex}
//                 testId={oneTest?._id}
//                 levelId={levelId}
//                 data={oneTest?.questions[currentIndex]}
//                 index={currentIndex}
//                 onNext={handleNext}
//                 onPrevious={handlePrevious}
//                 hasPrevious={currentIndex > 0}
//                 hasNext={currentIndex < oneTest?.questions?.length - 1}
//                 hasTestEnded={oneTest?.testEnded}
//                 endTest={endTest}
//                 setEndTest={setEndTest}
//               />
//             </div>
//           )}
//         </div>
//       ) : (
//         <Spinner />
//       )}
//     </MainContainer>
//   );
// };

// export default function Page() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <TakeTest />
//     </Suspense>
//   );
// }
