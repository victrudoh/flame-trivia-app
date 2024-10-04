import React from "react";

const TopSection = ({ children }: any) => {
  return (
    <>
      <div className="h-16 w-full flex items-center justify-center sticky top-0 z-10 ">
        {children}
      </div>
    </>
  );
};

export default TopSection;
