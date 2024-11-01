import React from "react";

const TriviaCard = ({
  data,
  index,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
}: any) => {
  console.log("🚀 ~ TriviaCard ~ data:", data);
  return (
    <>
      <div className="flex flex-col items-center justify-start gap-4 bg-brand-white w-[90vw] rounded-xl px-4 py-8">
        <span className="font-bold text-base">QUESTION {index + 1}</span>
        <div className="rounded-xl w-full min-h-[25vh] bg-brand-grayish/20 text-center font-medium text-sm flex items-center justify-center p-4 border-brand-grayish/20 border-[0.3px]">
          {data?.question?.question || "No Question"}
        </div>

        {/* Options */}
        <div className="flex flex-col gap-2 items-center justify-start w-full">
          <div className="transition-fx group cursor-pointer w-full p-4 flex gap-4 items-center rounded-xl border-brand-grayish/20 border-[0.3px] bg-brand-white shadow-lg hover:bg-green-500">
            <span className="transition-fx rounded-full p-4 border-brand-grayish/20 border-[0.3px] bg-brand-grayish/20 group-hover:bg-green-500 group-hover:border-[0.9px] group-hover:border-brand-white"></span>
            <span className="font-normal text-sm group-hover:text-brand-white">
              {data?.question?.answer_a}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-start w-full">
          <div className="transition-fx group cursor-pointer w-full p-4 flex gap-4 items-center rounded-xl border-brand-grayish/20 border-[0.3px] bg-brand-white shadow-lg hover:bg-green-500">
            <span className="transition-fx rounded-full p-4 border-brand-grayish/20 border-[0.3px] bg-brand-grayish/20 group-hover:bg-green-500 group-hover:border-[0.9px] group-hover:border-brand-white"></span>
            <span className="font-normal text-sm group-hover:text-brand-white">
              {data?.question?.answer_b}
            </span>
          </div>
        </div>
        {data?.question?.answer_c && (
          <div className="flex flex-col gap-2 items-center justify-start w-full">
            <div className="transition-fx group cursor-pointer w-full p-4 flex gap-4 items-center rounded-xl border-brand-grayish/20 border-[0.3px] bg-brand-white shadow-lg hover:bg-green-500">
              <span className="transition-fx rounded-full p-4 border-brand-grayish/20 border-[0.3px] bg-brand-grayish/20 group-hover:bg-green-500 group-hover:border-[0.9px] group-hover:border-brand-white"></span>
              <span className="font-normal text-sm group-hover:text-brand-white">
                {data?.question?.answer_c}
              </span>
            </div>
          </div>
        )}
        {data?.question?.answer_d && (
          <div className="flex flex-col gap-2 items-center justify-start w-full">
            <div className="transition-fx group cursor-pointer w-full p-4 flex gap-4 items-center rounded-xl border-brand-grayish/20 border-[0.3px] bg-brand-white shadow-lg hover:bg-green-500">
              <span className="transition-fx rounded-full p-4 border-brand-grayish/20 border-[0.3px] bg-brand-grayish/20 group-hover:bg-green-500 group-hover:border-[0.9px] group-hover:border-brand-white"></span>
              <span className="font-normal text-sm group-hover:text-brand-white">
                {data?.question?.answer_d}
              </span>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between w-full mt-4">
          <button
            onClick={onPrevious}
            disabled={!hasPrevious}
            className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={onNext}
            disabled={!hasNext}
            className="bg-blue-500 px-4 py-2 rounded text-white disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default TriviaCard;

// ****************** //
// ****************** //
// ****************** //
// ****************** //

// import React from "react";

// const TriviaCard = ({ data, index }: any) => {
//   console.log("🚀 ~ TriviaCard ~ data:", data);
//   return (
//     <>
//       <div className="flex flex-col items-center justify-start gap-4 bg-brand-white w-[90vw] rounded-xl px-4 py-8">
//         <span className="font-bold text-base">QUESTION {index + 1}</span>
//         <div className="rounded-xl w-full min-h-[25vh] bg-brand-grayish/20 text-center font-medium text-sm flex items-center justify-center p-4 border-brand-grayish/20 border-[0.3px]">
//           {data?.question?.question || "No Question"}
//         </div>
//         {/* options */}
//         <div className="flex flex-col gap-2 items-center justify-start w-full">
//           <div className="transition-fx group cursor-pointer w-full p-4 flex gap-4 items-center rounded-xl border-brand-grayish/20 border-[0.3px] bg-brand-white shadow-lg hover:bg-green-500">
//             <span className="transition-fx rounded-full p-4 border-brand-grayish/20 border-[0.3px] bg-brand-grayish/20 group-hover:bg-green-500 group-hover:border-[0.9px] group-hover:border-brand-white"></span>
//             <span className="font-normal text-sm group-hover:text-brand-white">
//               {data?.question?.answer_a}
//             </span>
//           </div>
//         </div>
//         <div className="flex flex-col gap-2 items-center justify-start w-full">
//           <div className="transition-fx group cursor-pointer w-full p-4 flex gap-4 items-center rounded-xl border-brand-grayish/20 border-[0.3px] bg-brand-white shadow-lg hover:bg-green-500">
//             <span className="transition-fx rounded-full p-4 border-brand-grayish/20 border-[0.3px] bg-brand-grayish/20 group-hover:bg-green-500 group-hover:border-[0.9px] group-hover:border-brand-white"></span>
//             <span className="font-normal text-sm group-hover:text-brand-white">
//               {data?.question?.answer_b}
//             </span>
//           </div>
//         </div>
//         {data?.question?.answer_c && (
//           <div className="flex flex-col gap-2 items-center justify-start w-full">
//             <div className="transition-fx group cursor-pointer w-full p-4 flex gap-4 items-center rounded-xl border-brand-grayish/20 border-[0.3px] bg-brand-white shadow-lg hover:bg-green-500">
//               <span className="transition-fx rounded-full p-4 border-brand-grayish/20 border-[0.3px] bg-brand-grayish/20 group-hover:bg-green-500 group-hover:border-[0.9px] group-hover:border-brand-white"></span>
//               <span className="font-normal text-sm group-hover:text-brand-white">
//                 {data?.question?.answer_c}
//               </span>
//             </div>
//           </div>
//         )}
//         {data?.question?.answer_d && (
//           <div className="flex flex-col gap-2 items-center justify-start w-full">
//             <div className="transition-fx group cursor-pointer w-full p-4 flex gap-4 items-center rounded-xl border-brand-grayish/20 border-[0.3px] bg-brand-white shadow-lg hover:bg-green-500">
//               <span className="transition-fx rounded-full p-4 border-brand-grayish/20 border-[0.3px] bg-brand-grayish/20 group-hover:bg-green-500 group-hover:border-[0.9px] group-hover:border-brand-white"></span>
//               <span className="font-normal text-sm group-hover:text-brand-white">
//                 {data?.question?.answer_d}
//               </span>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default TriviaCard;
