import React from "react";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ListItem = ({ title, thumbnail, link }: any) => {
  return (
    <>
      <Link
        href={link}
        className="transition-fx group w-full p-4 border-brand-grayish/20 border-[0.3px] rounded-xl shadow-lg bg-brand-white flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <div className="w-[58px] max-h-[58px]">{thumbnail}</div>
          <div className="flex flex-col gap-2 items-start justify-between text-brand-dark">
            <span className="font-bold text-base">{title}</span>
          </div>
        </div>
        <span className="transition-fx text-brand-main group-hover:animate-bounce">
          <ArrowRight />
        </span>
      </Link>
    </>
  );
};

export default ListItem;
