import MainContainer from "@/components/mainContainer/page";
import TopSection from "@/components/topSection/page";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the LeafletMap component
const LeafletMap = dynamic(() => import("@/components/leafletMap/page"), {
  ssr: false,
});

const page = () => {
  return (
    <>
      <MainContainer>
        <TopSection>
          <span className="font-bold text-xl text-brand-white">
            Facilities Near Me
          </span>
        </TopSection>
        <LeafletMap />
        {/* <TopSection></TopSection> */}
      </MainContainer>
    </>
  );
};

export default page;
