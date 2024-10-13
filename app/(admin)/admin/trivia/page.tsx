"use client";

import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { success, error } from "@/helpers/Alert";
import Spinner from "@/components/spinner/Spinner";
import { useGeneralContext } from "@/context/GenralContext";

const AllLevels = () => {
  const {
    loading,
    setLoading,
    getAllQuestions,
    getAllLevels,
    getResultsByLevel,
    allLevels,
  }: any = useGeneralContext();
  console.log("🚀 ~ AllLevels ~ allLevels:", allLevels);

  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const router = useRouter();

  const gotoLevel = async (id: string) => {
    setLoading(true);
    await getAllQuestions(id);
    await getResultsByLevel(id);
    setLoading(false);
    router.push(`/admin/levels/one?id=${id}`);
  };

  const addLevel = () => {
    router.push("/admin/levels/add");
  };

  const deleteHandler = async (id: string) => {
    try {
      setLoading(true);
      const response = await axios.delete(
        `${base_url}/levels/delete?id=${id}`,
        { headers: { "content-type": "application/json" } }
      );

      if (response.status === 200) {
        success("Deleted Level successfully");
        getAllLevels();
      }
      setLoading(false);
    } catch (err: any) {
      console.error(err);
      error(err.response?.data?.error || "An error occurred");
      setLoading(false);
    }
  };

  return (
    <div className="shadow-lg rounded-md bg-white p-4 w-full flex flex-col gap-4">
      <div className="flex justify-between items-center w-full">
        <div></div>
        <button
          className="bg-teal-600 rounded-lg p-2 px-4 text-white hover:bg-teal-500"
          onClick={addLevel}
        >
          Add New Level
        </button>
      </div>

      <div className="w-full mx-auto mt-5 flex gap-12 p-4 flex-wrap ml-4">
        {loading ? (
          <Spinner />
        ) : allLevels && allLevels.length > 0 ? (
          allLevels.map((item: any) => (
            <div key={item._id} className="flex gap-2 items-start">
              <div
                className="flex flex-col gap-6 justify-center items-center p-4 shadow-md rounded-md border-2 border-teal-600 w-[200px] h-[70px] cursor-pointer hover:shadow-xl"
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
          <span className="w-full mx-auto">No Levels, please add some</span>
        )}
      </div>
    </div>
  );
};

export default AllLevels;
