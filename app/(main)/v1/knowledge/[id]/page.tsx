"use client";

import { useGeneralContext } from "@/context/GenralContext";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import img from "@/assets/imgs/knowledge-base/article_img.jpg";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import TopSection from "@/components/topSection/page";
import MainContainer from "@/components/mainContainer/page";
import dynamic from "next/dynamic";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

const Page = ({ params }: { params: { id: string } }) => {
  console.log("🚀 ~ Page ~ params:", params);

  const router = useRouter();

  const { getOneTopic, oneTopic }: any = useGeneralContext();

  useEffect(() => {
    if (params?.id) {
      getOneTopic(params?.id);
    }
  }, [params?.id]);

  const goBack = () => {
    router.push("/v1/knowledge");
  };

  return (
    <>
      {/* <div className="bg-brand-main py-8 text-brand-dark h-screen flex flex-col items-center justify-start text-lg font-geistsans gap-8"> */}
      <MainContainer>
        <TopSection>
          <div className="w-full flex items-center justify-start gap-8">
            <ArrowLeft
              className="bg-brand-white shadow-lg w-10 h-10 p-1 ml-4 rounded-full cursor-pointer hover:bg-brand-white/60 hover:text-brand-dark"
              onClick={goBack}
            />
            <span className="font-bold text-xl text-brand-white">
              About HIV/AIDS
            </span>
          </div>
          {/* <div className="w-[80%] flex items-center py-12 gap-4">
            <ArrowLeft
              className="bg-brand-white shadow-lg w-10 h-10 p-1 rounded-full cursor-pointer hover:bg-brand-white/60 hover:text-brand-dark"
              onClick={goBack}
            />
            <span className="font-bold text-xl text-brand-white">
              About HIV/AIDS
            </span>
          </div> */}
        </TopSection>
        {/* top */}
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center justify-center rounded-xl max-w-[350px] max-h-[320px] bg-brand-main">
            <Image
              src={oneTopic?.image || img}
              alt="img"
              className="object-cover border-brand-white border-4 rounded-xl"
              width={320}
              height={240}
            />
          </div>
        </div>
        {/* bottom */}
        <div className="w-full rounded-xl bg-brand-white p-6 flex flex-col items-center justify-start gap-4 font-normal text-sm text-brand-grayish h-max ">
          <span className="max-w-[350px] pb-2 font-geistsans">
            {/* {oneTopic?.description} */}
            <QuillEditor
              value={oneTopic?.body}
              theme="bubble"
              readOnly
              // style={{
              //   fontSize: "34px",
              // }}
              className=""
            />
          </span>
        </div>
      </MainContainer>
      {/* </div> */}
    </>
  );
};

export default Page;
