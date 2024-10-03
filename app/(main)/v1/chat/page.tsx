import React from "react";
import ListItem from "./ListItem";
import { ArrowLeft } from "lucide-react";
import TopSection from "@/components/topSection/page";
import MainContainer from "@/components/mainContainer/page";
import img from "@/assets/imgs/knowledge-base/article_img.jpg";
import Link from "next/link";

const Page = () => {
  return (
    <MainContainer>
      {/* Top section */}
      <TopSection>
        <div className="w-full flex items-center justify-start gap-8">
          <Link href={"/home"}>
            <ArrowLeft className="bg-brand-white shadow-lg w-9 h-9 p-1 ml-4 rounded-full cursor-pointer" />
          </Link>
          <span className="font-bold text-xl text-brand-white">
            Chat With Facilitators
          </span>
        </div>
      </TopSection>

      {/* Bottom section with scrolling */}
      <div className="w-full overflow-y-auto rounded-xl p-4 flex flex-col items-center justify-start gap-4 h-full">
        <ListItem
          title={"Andrew Henry"}
          body={"Facilitator."}
          thumbnail={img}
          link={
            "http://wa.me/+2348034044418?text=Hello,+I’d+love+to+know+more+about+HIV/AIDS"
          }
        />
        <ListItem
          title={"Mary Udoh"}
          body={"Facilitator."}
          thumbnail={img}
          link={
            "http://wa.me/+2347062822822?text=Hello,+I’d+love+to+know+more+about+HIV/AIDS"
          }
        />
      </div>
    </MainContainer>
  );
};

export default Page;
