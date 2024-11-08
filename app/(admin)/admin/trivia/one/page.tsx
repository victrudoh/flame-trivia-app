"use client";

import React, { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
// import Students from "./Students";
import Questions from "./Questions";
import { useGeneralContext } from "@/context/GenralContext";
import Link from "next/link";

const OneLevel = () => {
  const { switchLevelPanel, setSwitchLevelPanel, setLevelId }: any =
    useGeneralContext();
  const router = useRouter();

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const goBack = async () => {
    router.push("/admin/trivia");
  };

  const gotoAddQuestion = async () => {
    router.push("/admin/trivia/addQuestion");
  };

  useEffect(() => {
    if (id) {
      setLevelId(id);
    }
  }, [id]);

  return (
    <>
      <div className="flex flex-col justify-between items-end w-full mt-10">
        <div className="w-full flex justify-between items-center">
          <span
            className="bg-teal-600 rounded-lg p-2 px-4 flex items-center justify-center outline-none text-white cursor-pointer hover:bg-teal-500 ml-14"
            onClick={goBack}
          >
            Back
          </span>{" "}
          <div className="flex items-center justify-end w-max">
            {switchLevelPanel === "questions" && (
              <span
                className="bg-teal-600 rounded-lg p-2 px-4 flex items-center justify-center outline-none text-white cursor-pointer hover:bg-teal-500 mr-14"
                onClick={gotoAddQuestion}
              >
                Add New Question
              </span>
            )}
            {/* <Link
              href={`/admin/trivia/edit?id=${id}`}
              className="bg-teal-600 rounded-lg p-2 px-4 flex items-center justify-center outline-none text-white cursor-pointer hover:bg-teal-500 mr-14" // onClick={addLevel}
            >
              Edit Topic
            </Link> */}
          </div>
        </div>
        <div className="w-full flex justify-between p-4 px-14">
          <div className="flex flex-col justify-center items-center w-[20%] shadow-lg bg-white p-4 gap-6 rounded-lg h-[10rem]">
            <span
              className={
                switchLevelPanel === "questions"
                  ? "bg-teal-600 rounded-2xl p-2 px-4 font-bold cursor-pointer text-white hover:bg-teal-300/30 hover:text-teal-600"
                  : "bg-teal-300/30 rounded-2xl p-2 px-4 text-teal-600 font-bold cursor-pointer hover:bg-teal-600 hover:text-white"
              }
              onClick={() => setSwitchLevelPanel("questions")}
            >
              Questions
            </span>
            <Link
              href={`/admin/trivia/edit?id=${id}`}
              className="bg-teal-600 rounded-2xl p-2 px-4 font-bold cursor-pointer text-white hover:bg-teal-300/30 hover:text-teal-600"
            >
              Edit Topic
            </Link>
            {/* <span
              className={
                switchLevelPanel === "students"
                  ? "bg-teal-600 rounded-2xl p-2 px-4 font-bold cursor-pointer text-white"
                  : "bg-teal-300/30 rounded-2xl p-2 px-4 text-teal-600 font-bold cursor-pointer hover:bg-teal-600 hover:text-white"
              }
              onClick={() => setSwitchLevelPanel("students")}
            >
              Students
            </span> */}
          </div>
          {switchLevelPanel === "students" && <>{/* <Students /> */}</>}
          {switchLevelPanel === "questions" && (
            <>
              <Questions id={id} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

// export default OneLevel;

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OneLevel />
    </Suspense>
  );
};

export default Page;
