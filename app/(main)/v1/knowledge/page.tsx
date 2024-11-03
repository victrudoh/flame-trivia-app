"use client";

import React from "react";
import ListItem from "./ListItem";
import { ArrowLeft, Search } from "lucide-react";
import TopSection from "@/components/topSection/page";
import MainContainer from "@/components/mainContainer/page";
import img from "@/assets/imgs/knowledge-base/article_img.jpg";
import Link from "next/link";
import { useGeneralContext } from "@/context/GenralContext";
import Spinner from "@/components/spinner/Spinner";

const Page = () => {
  const { allTopics, topicLoading }: any = useGeneralContext();

  return (
    // <div className="bg-brand-main text-brand-dark h-screen flex flex-col items-center justify-start text-lg font-geistsans gap-8 py-8">
    <MainContainer>
      {/* Top section */}
      <TopSection>
        <Link href={"/home"}>
          <ArrowLeft className="bg-brand-white shadow-lg w-9 h-9 p-1 ml-2 rounded-full cursor-pointer" />
        </Link>
        <div className="flex items-center justify-start gap-2 p-2 rounded-xl bg-brand-white w-[85%] m-auto">
          <Search className="text-brand-dark bg-brand-white rounded-l-xl" />
          <input
            type="search"
            name="search"
            id="search"
            className="bg-transparent font-medium text-sm w-full p-2 outline-none"
            placeholder="Search knowledge base"
          />
        </div>
      </TopSection>

      {/* Bottom section with scrolling */}
      <div className="w-full overflow-y-auto rounded-xl min-h-[80vh] bg-brand-white p-4 flex flex-col items-center justify-start gap-4 h-full">
        {topicLoading ? (
          <Spinner />
        ) : allTopics ? (
          allTopics.map((item: any, i: number) => (
            <ListItem
              key={i}
              title={item?.title}
              body={item?.description}
              thumbnail={item?.image || img}
              link={`/v1/knowledge/${item?._id}`}
            />
          ))
        ) : (
          <span className="w-full flex items-center justify-center font-geistsans font-semibold text-xl p-8 rounded-xl bg-brand-ash/60 mx-auto">
            No Topics
          </span>
        )}
        {/* <ListItem
          title={"About HIV/AIDS"}
          body={
            "HIV is a  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, repellat totam iste est, vitae nulla nobis dolor nemo voluptas."
          }
          thumbnail={img}
          link={"/v1/knowledge/12"}
        /> */}
      </div>
    </MainContainer>
    // </div>
  );
};

export default Page;
