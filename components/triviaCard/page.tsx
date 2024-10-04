import React from "react";

const TriviaCard = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start gap-4 bg-brand-ash w-[90vw] rounded-lg p-4">
        <span className="font-bold text-base font-geistsans">QUESTION 1</span>
        <div className="rounded-lg bg-brand-grayish/20 flex items-center justify-center p-4">
          Lorem ipsum dolor sit amet consectetur. Vel feugiat et in risus diam
          pellentesque interdum. Pharetra elit.
        </div>
        {/* options */}
        <div className="flex flex-col gap-2 items-center justify-start w-full">
          <div className="group w-full p-4 flex gap-4 items-center rounded-lg border-brand-grayish/20 border-[0.3px] bg-brand-white shadow-lg">
            <span className="transition-fx rounded-full p-4 cursor-pointer border-brand-grayish/20 border-[0.3px] bg-brand-grayish/20 hover:bg-green-500 hover:border-[0.5px] hover:border-brand-white"></span>
            <span className="font-normal text-sm">
              Lorem ipsum dolor sit amet
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TriviaCard;
