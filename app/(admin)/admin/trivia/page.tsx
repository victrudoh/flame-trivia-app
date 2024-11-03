"use client";

import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { success, error } from "@/helpers/Alert";
import Spinner from "@/components/spinner/Spinner";
import { useGeneralContext } from "@/context/GenralContext";
import Link from "next/link";

const AllLevels = () => {
  const {
    levelLoading,
    setLevelLoading,
    getOneLevel,
    getAllQuestions,
    getAllLevels,
    // getResultsByLevel,
    allLevels,
    token,
  }: any = useGeneralContext();

  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const router = useRouter();

  const gotoLevel = async (id: string) => {
    // setLevelLoading(true);
    await getAllQuestions(id);
    // await getResultsByLevel(id);
    await getOneLevel(id);
    router.push(`/admin/trivia/${id}`);
    // setLevelLoading(false);
  };

  // const addLevel = () => {
  //   router.push("/admin/trivia/addLevel");
  // };

  const deleteHandler = async (id: string) => {
    try {
      setLevelLoading(true);
      const response = await axios.delete(
        `${base_url}/levels/delete?id=${id}`,
        {
          headers: {
            "content-type": "application/json",
            "x-access-token": token,
          },
        }
      );

      if (response.status === 200) {
        success("Deleted Level successfully");
        getAllLevels();
      }
      setLevelLoading(false);
    } catch (err: any) {
      console.error(err);
      error(err.response?.data?.error || "An error occurred");
      setLevelLoading(false);
    }
  };

  return (
    <div className="shadow-lg rounded-md bg-white p-4 w-full flex flex-col gap-4">
      <div className="flex justify-between items-center w-full">
        <div></div>
        <Link
          href={"/admin/trivia/addLevel"}
          className="bg-teal-600 rounded-lg p-2 px-4 text-white hover:bg-teal-500"
          // onClick={addLevel}
        >
          Add New Level
        </Link>
      </div>

      <div className="w-full mx-auto mt-5 flex gap-12 p-4 flex-wrap ml-4">
        {levelLoading ? (
          <Spinner />
        ) : allLevels && allLevels.length > 0 ? (
          allLevels.map((item: any) => (
            <div key={item._id} className="flex gap-2 items-start">
              <div
                className="flex flex-col gap-6 justify-center items-center p-4 shadow-md rounded-md border-2 border-teal-600 w-[200px] min-h-[70px] cursor-pointer hover:shadow-xl"
                onClick={() => gotoLevel(item._id)}
              >
                <span className="font-semibold">{item.name}</span>
              </div>
              <span
                className="text-red-600 font-semibold hover:text-teal-500 cursor-pointer"
                onClick={() => deleteHandler(item._id)}
              >
                x
              </span>
            </div>
          ))
        ) : (
          <div className="w-full mx-auto text-lg p-4 h-12">
            <span>No levels yet, add some</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllLevels;
