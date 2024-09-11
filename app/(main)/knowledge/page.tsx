import React from "react";
import ListItem from "./ListItem";
import { Search } from "lucide-react";

const page = () => {
  return (
    <>
      <div className="bg-brand-main text-brand-secondary h-screen flex flex-col items-center justify-start text-lg font-geistmono gap-8 py-8">
        {/* top */}
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
        {/* bottom */}
        <div className="w-full rounded-t-xl bg-brand-white p-4 flex flex-col items-center justify-start gap-4">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
      </div>
    </>
  );
};

export default page;
