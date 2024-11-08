"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useGeneralContext } from "@/context/GenralContext";
import axios from "axios";
import { success, error } from "@/helpers/Alert";
import Spinner from "@/components/spinner/Spinner";

const EditTopic = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const {
    levelLoading,
    setLevelLoading,
    getAllLevels,
    getOneLevel,
    oneLevel,
    token,
  }: any = useGeneralContext();

  const [levelDetails, setLevelDetails] = useState({
    name: "",
  });

  // Synchronize state when `oneLevel` changes
  useEffect(() => {
    if (id) getOneLevel(id);
  }, [id]);

  useEffect(() => {
    if (oneLevel) {
      setLevelDetails({
        name: oneLevel?.name || "",
      });
    }
  }, [oneLevel]);

  const goBack = async () => {
    await getAllLevels();
    router.push("/admin/trivia/");
  };

  const onchangeHandler = async (e: any) => {
    e.persist();
    setLevelDetails((levelDetails) => ({
      ...levelDetails,
      [e.target.name]: e.target.value,
    }));
  };

  const updateLevel = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLevelLoading(true);
    console.log("🚀 ~ EditTopic ~ levelDetails:", levelDetails);
    try {
      const response = await axios.put(
        `${base_url}/levels/edit?id=${oneLevel?._id}`,
        levelDetails,
        {
          headers: {
            "content-type": "application/json",
            "x-access-token": token,
          },
        }
      );

      if (response.status === 200) {
        success("Updated Level.");
        goBack();
      }
    } catch (err: any) {
      error(err.response?.data?.message || "An error occurred.");
    } finally {
      setLevelLoading(false);
    }
  };

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
        success("Deleted Level Successfully");
        getAllLevels();
        goBack();
      }
    } catch (err: any) {
      error(err.response?.data?.error || "An error occurred.");
    } finally {
      setLevelLoading(false);
    }
  };

  return (
    // <div className="w-[70%] mx-auto my-5 shadow-lg bg-white p-8 flex flex-col gap-4 rounded-lg">
    <form
      onSubmit={updateLevel}
      className="w-[70%] mx-auto my-5 shadow-lg bg-white p-8 flex flex-col gap-4 rounded-lg"
    >
      {/* top stuff */}
      <div className="flex w-full gap-4 items-center justify-between">
        <span className="text-xl font-sans font-semibold">Add Level</span>
        <span
          className="bg-teal-600 rounded-lg p-2 px-4 flex items-center justify-center outline-none text-white cursor-pointer hover:bg-teal-500 ml-14"
          onClick={goBack}
        >
          Back
        </span>
      </div>
      {/* Name */}
      <div className="flex flex-col align-start justify-center gap-2 my-2">
        <span className="text-gray-400">
          Level Name <span className="text-red-400">*</span>
        </span>
        <input
          type="text"
          name="name"
          id="name"
          defaultValue={oneLevel?.name}
          required
          onChange={onchangeHandler}
          placeholder="Please add level name here . . ."
          className="bg-gray-300/40 p-2 w-full rounded-lg outline-2 outline-teal-500"
        />
      </div>
      {levelLoading ? (
        <>
          <Spinner />
        </>
      ) : (
        <>
          <div className="flex w-full items-center justify-evenly gap-4 my-8">
            <button
              type="button"
              onClick={() => deleteHandler(oneLevel?._id)}
              className="bg-red-600 rounded-lg p-2 px-4 w-1/3 text-white hover:bg-red-500"
            >
              Delete Level
            </button>
            <button
              type="submit"
              className="bg-teal-600 rounded-lg p-2 px-4 w-1/3 text-white hover:bg-teal-500"
            >
              Update Level
            </button>
          </div>
        </>
      )}
    </form>
    // </div>
  );
};

const Page = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <EditTopic />
  </Suspense>
);

export default Page;
