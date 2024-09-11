import React from "react";
import ListItem from "./ListItem";
import { Search } from "lucide-react";

const Page = () => {
  return (
    <div className="bg-brand-main text-brand-secondary h-screen flex flex-col items-center justify-start text-lg font-geistmono gap-8 py-8">
      {/* Top section */}
      <div className="bg-brand-main py-8 w-full flex items-center justify-center sticky top-0 z-10 ">
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
      </div>

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
    </div>
  );
};

export default Page;
