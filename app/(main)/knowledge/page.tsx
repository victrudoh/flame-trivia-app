import React from "react";
import ListItem from "./ListItem";
import { Search } from "lucide-react";
import TopSection from "@/components/topSection/page";
import MainContainer from "@/components/mainContainer/page";

const Page = () => {
  return (
    // <div className="bg-brand-main text-brand-dark h-screen flex flex-col items-center justify-start text-lg font-geistmono gap-8 py-8">
    <MainContainer>
      {/* Top section */}
      <TopSection>
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
      <div className="w-full overflow-y-auto rounded-xl bg-brand-white p-4 flex flex-col items-center justify-start gap-4 h-full">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </MainContainer>
    // </div>
  );
};

export default Page;
