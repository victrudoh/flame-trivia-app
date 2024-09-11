import Image from "next/image";
import React from "react";

import img from "@/assets/imgs/knowledge-base/article_img.png";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ListItem = () => {
  return (
    <>
      <div className="w-full p-4 border-brand-grayish/20 border-[0.5px] rounded-xl shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-[58px] h-[58px]">
            <Image src={img} alt="img" className="rounded-lg" />
          </div>
          <div className="flex flex-col gap-2 items-start justify-between text-brand-dark">
            <span className="font-bold text-base">About HIV/AIDS</span>
            <span className="font-normal text-xs">
              HIV is the human Lorem ip...
            </span>
          </div>
        </div>
        <Link
          href={`/knowledge/12`}
          className="transition-fx text-brand-main hover:animate-bounce"
        >
          <ArrowRight />
        </Link>
      </div>
    </>
  );
};

export default ListItem;
