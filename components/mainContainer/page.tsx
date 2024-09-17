import React from "react";

const MainContainer = ({ children }: any) => {
  return (
    <>
      <div className="text-brand-dark flex flex-col items-center justify-start text-lg font-geistsans gap-8 py-8">
        {children}
      </div>
    </>
  );
};

export default MainContainer;
