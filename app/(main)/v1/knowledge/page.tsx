"use client";

import React, { useState } from "react";
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
  const [searchQuery, setSearchQuery] = useState("");

  // Filter topics based on the search query
  const filteredTopics = allTopics?.filter((topic: any) =>
    topic.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
          />
        </div>
      </TopSection>

      {/* Bottom section with scrolling */}
      <div className="w-full overflow-y-auto rounded-xl min-h-[80vh] bg-brand-white p-4 flex flex-col items-center justify-start gap-4 h-full">
        {topicLoading ? (
          <Spinner />
        ) : filteredTopics?.length > 0 ? (
          filteredTopics.map((item: any, i: number) => (
            <ListItem
              key={i}
              title={item?.title}
              body={item?.description}
              thumbnail={item?.image || img}
              link={`/v1/knowledge/one?id=${item?._id}`}
            />
          ))
        ) : (
          <span className="w-full flex items-center justify-center font-geistsans font-semibold text-xl p-8 rounded-xl bg-brand-ash/60 mx-auto">
            No Topics Found
          </span>
        )}
      </div>
    </MainContainer>
  );
};

export default Page;
