import React from "react";

const TopSection = ({ children }: any) => {
  return (
    <>
      <div className="gradient-fx h-16 w-[98%] rounded-xl flex items-center justify-center sticky top-0 z-10 ">
        {children}
      </div>
    </>
  );
};

export default TopSection;
