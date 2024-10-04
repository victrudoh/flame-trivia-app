import React from "react";
import { ArrowRight, Hospital } from "lucide-react";
import Link from "next/link";

const ListItem = ({ title, link }: any) => {
  return (
    <>
      <Link
        href={link}
        className="group w-full p-4 border-brand-grayish/20 border-[0.3px] rounded-xl shadow-lg flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <div className="w-[58px] max-h-[58px]">
            <Hospital />
          </div>
          <span className="font-semibold text-xl">{title}</span>
        </div>
        <span className="transition-fx text-brand-main group-hover:animate-bounce">
          <ArrowRight />
        </span>
      </Link>
    </>
  );
};

export default ListItem;
