import React from "react";

const TriviaCard = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start gap-4 bg-brand-white w-[90vw] rounded-lg p-4">
        <span className="font-bold text-base font-geistsans">QUESTION 1</span>
        <div className="rounded-lg bg-brand-grayish/20 flex items-center justify-center p-4">
          Lorem ipsum dolor sit amet consectetur. Vel feugiat et in risus diam
          pellentesque interdum. Pharetra elit.
        </div>
      </div>
    </>
  );
};

export default TriviaCard;
