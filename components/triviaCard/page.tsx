import React from "react";

const TriviaCard = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start gap-4 bg-brand-white w-[90vw] rounded-xl p-4 py-8">
        <span className="font-bold text-base font-geistsans">QUESTION 1</span>
        <div className="rounded-xl min-h-[25vh] bg-brand-grayish/20 flex items-center justify-center p-4">
          Lorem ipsum dolor sit amet consectetur. Vel feugiat et in risus diam
          pellentesque interdum. Pharetra elit.
        </div>
        {/* options */}
        <div className="flex flex-col gap-2 items-center justify-start w-full">
          <div className="transition-fx group cursor-pointer w-full p-4 flex gap-4 items-center rounded-xl border-brand-grayish/20 border-[0.3px] bg-brand-white shadow-lg hover:bg-green-500">
            <span className="transition-fx rounded-full p-4 border-brand-grayish/20 border-[0.3px] bg-brand-grayish/20 group-hover:bg-green-500 group-hover:border-[0.9px] group-hover:border-brand-white"></span>
            <span className="font-normal text-sm group-hover:text-brand-white">
              Lorem ipsum dolor sit amet
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-start w-full">
          <div className="transition-fx group cursor-pointer w-full p-4 flex gap-4 items-center rounded-xl border-brand-grayish/20 border-[0.3px] bg-brand-white shadow-lg hover:bg-green-500">
            <span className="transition-fx rounded-full p-4 border-brand-grayish/20 border-[0.3px] bg-brand-grayish/20 group-hover:bg-green-500 group-hover:border-[0.9px] group-hover:border-brand-white"></span>
            <span className="font-normal text-sm group-hover:text-brand-white">
              Lorem ipsum dolor sit amet
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-start w-full">
          <div className="transition-fx group cursor-pointer w-full p-4 flex gap-4 items-center rounded-xl border-brand-grayish/20 border-[0.3px] bg-brand-white shadow-lg hover:bg-green-500">
            <span className="transition-fx rounded-full p-4 border-brand-grayish/20 border-[0.3px] bg-brand-grayish/20 group-hover:bg-green-500 group-hover:border-[0.9px] group-hover:border-brand-white"></span>
            <span className="font-normal text-sm group-hover:text-brand-white">
              Lorem ipsum dolor sit amet
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-start w-full">
          <div className="transition-fx group cursor-pointer w-full p-4 flex gap-4 items-center rounded-xl border-brand-grayish/20 border-[0.3px] bg-brand-white shadow-lg hover:bg-green-500">
            <span className="transition-fx rounded-full p-4 border-brand-grayish/20 border-[0.3px] bg-brand-grayish/20 group-hover:bg-green-500 group-hover:border-[0.9px] group-hover:border-brand-white"></span>
            <span className="font-normal text-sm group-hover:text-brand-white">
              Lorem ipsum dolor sit amet
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TriviaCard;
