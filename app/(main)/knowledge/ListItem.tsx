import Image from "next/image";
import React from "react";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ListItem = ({ title, level, body, quizzes, thumbnail, link }: any) => {
  return (
    <>
      <div className="w-full p-4 border-brand-grayish/20 border-[0.5px] rounded-xl shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-[58px] max-h-[58px]">
            <Image src={thumbnail} alt="img" className="rounded-lg" />
          </div>
          <div className="flex flex-col gap-2 items-start justify-between text-brand-dark">
            <span className="font-bold text-base">{title}</span>
            <span className="font-normal text-xs">
              {body && (
                <>
                  {body.slice(0, 25)}
                  {body.length > 25 && "..."}
                </>
              )}
              {level && (
                <>
                  {level} - {quizzes}
                </>
              )}
            </span>
          </div>
        </div>
        <Link
          href={link}
          className="transition-fx text-brand-main hover:animate-bounce"
        >
          <ArrowRight />
        </Link>
      </div>
    </>
  );
};

export default ListItem;
