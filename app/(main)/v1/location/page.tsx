import MainContainer from "@/components/mainContainer/page";
import TopSection from "@/components/topSection/page";
import React from "react";
// import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ListItem from "./ListItem";
// import img from "@/assets/imgs/knowledge-base/article_img.jpg";

// Dynamically import the LeafletMap component
// const LeafletMap = dynamic(() => import("@/components/leafletMap/page"), {
//   ssr: false,
// });

const page = () => {
  return (
    <>
      <MainContainer>
        <TopSection>
          <div className="w-full flex items-center justify-start gap-8">
            <Link href={"/home"}>
              <ArrowLeft className="bg-brand-white shadow-lg w-9 h-9 p-1 ml-4 rounded-full cursor-pointer" />
            </Link>
            <span className="font-bold text-xl text-brand-white">
              Facilities Near Me
            </span>
          </div>
        </TopSection>
        {/* <LeafletMap /> */}
        {/* <TopSection></TopSection> */}
        {/* Bottom section with scrolling */}
        <div className="w-full overflow-y-auto rounded-xl bg-brand-white p-4 flex flex-col items-center justify-start gap-4 h-full">
          <ListItem title={"Benue State"} link={"/v1/location/one?id=benue"} />
          <ListItem title={"Borno State"} link={"/v1/location/one?id=borno"} />
          <ListItem title={"FCT"} link={"/v1/location/one?id=fct"} />
          <ListItem title={"Gombe State"} link={"/v1/location/one?id=gombe"} />
          <ListItem title={"Kogi State"} link={"/v1/location/one?id=kogi"} />
          <ListItem title={"Kwara State"} link={"/v1/location/one?id=kwara"} />
          <ListItem
            title={"Nasarawa State"}
            link={"/v1/location/one?id=nasarawa"}
          />
          <ListItem title={"Niger State"} link={"/v1/location/one?id=niger"} />
          <ListItem
            title={"Plateau State"}
            link={"/v1/location/one?id=plateau"}
          />
          <ListItem
            title={"Taraba State"}
            link={"/v1/location/one?id=taraba"}
          />
        </div>
      </MainContainer>
    </>
  );
};

export default page;
