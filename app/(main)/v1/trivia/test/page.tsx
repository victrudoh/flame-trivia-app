"use client";

import MainContainer from "@/components/mainContainer/page";
import TopSection from "@/components/topSection/page";
import { ArrowLeft, CircleHelp } from "lucide-react";
import React, { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import TriviaCard from "@/components/triviaCard/page";
import { useGeneralContext } from "@/context/GenralContext";
import Spinner from "@/components/spinner/Spinner";

const TakeTest = () => {
  const {
    userId,
    oneLevel,
    getOneLevel,
    triviaLoading,
    handleStartTest,
    oneTest,
  }: any = useGeneralContext();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");
  const router = useRouter();

  const goBack = () => {
    router.push("/v1/trivia");
  };

  const searchParams = useSearchParams();
  const levelId = searchParams.get("levelId");

  useEffect(() => {
    if (levelId && userId) {
      getOneLevel(levelId);
      handleStartTest(levelId);
    }
  }, [userId]);

  const handleNext = () => {
    if (currentIndex < oneTest.questions.length - 1) {
      setAnimationClass("fall-off-left"); // Set animation for "next" transition
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setAnimationClass(""); // Reset after transition
      }, 500);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setAnimationClass("fall-off-right"); // Set animation for "previous" transition
      setTimeout(() => {
        setCurrentIndex((prev) => prev - 1);
        setAnimationClass(""); // Reset after transition
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
        <CircleHelp
          className="bg-brand-white shadow-lg w-10 h-10 rounded-full cursor-pointer hover:bg-brand-white/60 hover:text-brand-dark"
          onClick={goBack}
        />
      </TopSection>

      {triviaLoading ? (
        <Spinner />
      ) : oneTest ? (
        <div className="relative w-full h-full flex flex-col items-center">
          <div className={`trivia-card-container ${animationClass}`}>
            <TriviaCard
              key={currentIndex}
              data={oneTest.questions[currentIndex]}
              index={currentIndex}
              onNext={handleNext}
              onPrevious={handlePrevious}
              hasPrevious={currentIndex > 0}
              hasNext={currentIndex < oneTest.questions.length - 1}
            />
          </div>
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

// ************************* //
// ************************* //
// ************************* //
// ************************* //
// ************************* //
// ************************* //
// ************************* //

// ("use client");

// import MainContainer from "@/components/mainContainer/page";
// import TopSection from "@/components/topSection/page";
// import { ArrowLeft, CircleHelp } from "lucide-react";
// import React, { Suspense, useEffect, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import TriviaCard from "@/components/triviaCard/page";
// import { useGeneralContext } from "@/context/GenralContext";
// import Spinner from "@/components/spinner/Spinner";

// const TakeTest = () => {
//   const {
//     userId,
//     oneLevel,
//     getOneLevel,
//     triviaLoading,
//     handleStartTest,
//     oneTest,
//   }: any = useGeneralContext();
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [animationClass, setAnimationClass] = useState(""); // Add animation class state
//   const router = useRouter();

//   const goBack = () => {
//     router.push("/v1/trivia");
//   };

//   const searchParams = useSearchParams();
//   const levelId = searchParams.get("levelId");

//   useEffect(() => {
//     if (levelId && userId) {
//       getOneLevel(levelId);
//       handleStartTest(levelId);
//     }
//   }, [userId]);

//   const handleNext = () => {
//     if (currentIndex < oneTest.questions.length - 1) {
//       setAnimationClass("fall-off-left"); // Set animation class for "next" direction
//       setTimeout(() => {
//         setCurrentIndex((prev) => prev + 1);
//         setAnimationClass(""); // Reset animation class after transition
//       }, 500);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentIndex > 0) {
//       setAnimationClass("fall-off-right"); // Set animation class for "previous" direction
//       setTimeout(() => {
//         setCurrentIndex((prev) => prev - 1);
//         setAnimationClass(""); // Reset animation class after transition
//       }, 500);
//     }
//   };

//   return (
//     <MainContainer>
//       <TopSection>
//         <div className="w-[80%] flex items-center py-12 gap-4">
//           <ArrowLeft
//             className="bg-brand-white shadow-lg w-10 h-10 p-1 rounded-full cursor-pointer hover:bg-brand-white/60 hover:text-brand-dark"
//             onClick={goBack}
//           />
//           <div className="flex flex-col items-start gap-[2px]">
//             <span className="font-bold text-sm text-brand-white w-[90%]">
//               {oneLevel?.name || oneTest?.levelTitle}
//             </span>
//           </div>
//         </div>
//         <CircleHelp
//           className="bg-brand-white shadow-lg w-10 h-10 rounded-full cursor-pointer hover:bg-brand-white/60 hover:text-brand-dark"
//           onClick={goBack}
//         />
//       </TopSection>

//       {triviaLoading ? (
//         <Spinner />
//       ) : oneTest ? (
//         <div className="relative w-full h-full flex flex-col items-center">
//           <div className={`trivia-card-container ${animationClass}`}>
//             <TriviaCard
//               key={currentIndex}
//               data={oneTest.questions[currentIndex]}
//               index={currentIndex}
//             />
//           </div>
//           <div className="flex justify-between w-full mt-4">
//             <button
//               onClick={handlePrevious}
//               disabled={currentIndex === 0}
//               className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
//             >
//               Previous
//             </button>
//             <button
//               onClick={handleNext}
//               disabled={currentIndex === oneTest.questions.length - 1}
//               className="bg-blue-500 px-4 py-2 rounded text-white disabled:opacity-50"
//             >
//               Next
//             </button>
//           </div>
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

// *********************** //
// *********************** //
// *********************** //
// *********************** //
// *********************** //
// *********************** //
// *********************** //

// "use client";

// import MainContainer from "@/components/mainContainer/page";
// import TopSection from "@/components/topSection/page";
// import { ArrowLeft, CircleHelp } from "lucide-react";
// import React, { Suspense, useEffect } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import TriviaCard from "@/components/triviaCard/page";
// import { useGeneralContext } from "@/context/GenralContext";
// import Spinner from "@/components/spinner/Spinner";

// const TakeTest = () => {
//   const {
//     userId,
//     oneLevel,
//     getOneLevel,
//     triviaLoading,
//     handleStartTest,
//     oneTest,
//   }: any = useGeneralContext();
//   console.log("🚀 ~ TakeTest ~ oneTest:", oneTest);
//   const router = useRouter();

//   const goBack = () => {
//     router.push("/v1/trivia");
//   };

//   const searchParams = useSearchParams();
//   const levelId = searchParams.get("levelId");

//   useEffect(() => {
//     if (levelId && userId) {
//       getOneLevel(levelId);
//       handleStartTest(levelId);
//     }
//   }, [userId]);

//   return (
//     <>
//       <MainContainer>
//         <TopSection>
//           <div className="w-[80%] flex items-center py-12 gap-4">
//             <ArrowLeft
//               className="bg-brand-white shadow-lg w-10 h-10 p-1 rounded-full cursor-pointer hover:bg-brand-white/60 hover:text-brand-dark"
//               onClick={goBack}
//             />
//             <div className="flex flex-col items-start gap-[2px]">
//               <span className="font-bold text-sm text-brand-white w-[90%]">
//                 {oneLevel?.name || oneTest?.levelTitle}
//               </span>
//             </div>
//           </div>
//           <CircleHelp
//             className="bg-brand-white shadow-lg w-10 h-10 rounded-full cursor-pointer hover:bg-brand-white/60 hover:text-brand-dark"
//             onClick={goBack}
//           />
//         </TopSection>
//         {triviaLoading ? (
//           <Spinner />
//         ) : oneTest ? (
//           oneTest.questions.map((item: any, i: number) => (
//             <TriviaCard key={i} data={item} index={i} />
//           ))
//         ) : (
//           <Spinner />
//         )}
//       </MainContainer>
//     </>
//   );
// };

// export default function Page() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <TakeTest />
//     </Suspense>
//   );
// }

// // export default Page;
