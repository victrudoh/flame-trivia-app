"use client";

import Spinner from "@/components/spinner/Spinner";
import { useGeneralContext } from "@/context/GenralContext";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import React, { Suspense, useEffect } from "react";

const AllTopics = () => {
  // const router = useRouter();

  // const gotoStudent = async (id: any) => {
  //   router.push(`/admin/students/one?id=${id}`);
  // };

  const { topicLoading, setCourseId, allTopics }: any = useGeneralContext();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    if (id) {
      setCourseId(id);
    }
  }, []);

  return (
    <>
      <div className="shadow-lg rounded-md bg-white p-4 w-full flex flex-col gap-4">
        <div className="w-full flex items-center justify-between p-4">
          <span className="text-2xl font-geistsans font-bold text-brand-dark capitalize">
            All Topics
          </span>
          <Link
            href={"/admin/knowledge/add"}
            className="bg-teal-600 rounded-lg p-2 px-4 text-white capitalize hover:bg-teal-500"
            // onClick={addLevel}
          >
            Add New Topic
          </Link>
        </div>
        <div className="w-full flex flex-col gap-4 items-start justify-start p-2 bg-brand-ash rounded-xl">
          {topicLoading ? (
            <Spinner />
          ) : allTopics ? (
            <>
              {allTopics.map((item: any, i: number) => (
                <Link
                  key={i}
                  // onClick={() => gotoStudent(item._id)}
                  href={`/admin/knowledge/one?id=${item?._id}`}
                  className="group transition-fx w-full p-4 border-brand-grayish/20 border-[0.3px] rounded-xl bg-brand-white shadow-xl flex items-center justify-between hover:bg-teal-400/40"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-[58px] max-h-[58px]">
                      <Image
                        src={item?.image}
                        alt="img"
                        className="rounded-lg"
                        width={152}
                        height={152}
                      />
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-between text-brand-dark">
                      <span className="font-bold text-base">{item?.title}</span>
                      <span className="font-normal text-xs">
                        {item?.description && (
                          <>
                            {item?.description?.slice(0, 170)}
                            {item?.description?.length > 170 && "..."}
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                  <span className="transition-fx text-brand-main group-hover:animate-bounce">
                    <ArrowRight />
                  </span>
                </Link>
              ))}
            </>
          ) : (
            <>
              <div className="w-full mx-auto text-lg p-4 h-12">
                <span>No topics yet, add some</span>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AllTopics />
    </Suspense>
  );
};

export default Page;

// export default AllTopics;
