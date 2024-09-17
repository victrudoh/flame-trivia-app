import MainContainer from "@/components/mainContainer/page";
import TopSection from "@/components/topSection/page";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Dynamically import the LeafletMap component
const LeafletMap = dynamic(() => import("@/components/leafletMap/page"), {
  ssr: false,
});

const page = () => {
  return (
    <>
      <MainContainer>
        <TopSection>
          <div className="w-full flex items-center justify-start gap-8">
            <Link href={"/"}>
              <ArrowLeft className="bg-brand-white shadow-lg w-9 h-9 p-1 ml-4 rounded-full cursor-pointer" />
            </Link>
            <span className="font-bold text-xl text-brand-white">
              Facilities Near Me
            </span>
          </div>
        </TopSection>
        <LeafletMap />
        {/* <TopSection></TopSection> */}
      </MainContainer>
    </>
  );
};

export default page;
