"use client";

import React, { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useGeneralContext } from "@/context/GenralContext";
import Image from "next/image";
import MainContainer from "@/components/mainContainer/page";
import TopSection from "@/components/topSection/page";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

const OneTopic = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const { getAllTopics, getOneTopic, oneTopic }: any = useGeneralContext();

  const goBack = async () => {
    await getAllTopics();
    router.push("/admin/knowledge/");
  };

  useEffect(() => {
    if (id) {
      getOneTopic(id);
    }
  }, [id]);

  return (
    <>
      <MainContainer>
        <TopSection>
          <div className="w-full flex justify-between items-center p-2">
            <div className="w-full flex items-center justify-start gap-8">
              <ArrowLeft
                className="bg-brand-white shadow-lg w-10 h-10 p-1 ml-4 rounded-full cursor-pointer hover:bg-brand-white/60 hover:text-brand-dark"
                onClick={goBack}
              />
              <span className="font-bold text-xl text-brand-white">
                {oneTopic?.title}
              </span>
            </div>
            <Link
              href={`/admin/knowledge/edit?id=${oneTopic?._id}`}
              className="bg-teal-600 rounded-lg w-[120px] p-2 flex justify-center text-white capitalize hover:bg-teal-500"
              // onClick={addLevel}
            >
              Edit Topic
            </Link>
          </div>
        </TopSection>
        {/* top */}
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center justify-center rounded-xl max-w-[350px] max-h-[320px] bg-brand-main">
            <Image
              src={oneTopic?.image}
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
    </>
  );
};

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OneTopic />
    </Suspense>
  );
};

export default Page;
