import React from "react";

const MainContainer = ({ children }: any) => {
  return (
    <>
      <div className="bg-brand-main text-brand-dark h-screen flex flex-col items-center justify-start text-lg font-geistmono gap-8 py-8">
        {children}
      </div>
    </>
  );
};

export default MainContainer;
