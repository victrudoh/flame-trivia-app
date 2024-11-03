"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useGeneralContext } from "@/context/GenralContext";
import axios from "axios";
import { success, error } from "@/helpers/Alert";
import Spinner from "@/components/spinner/Spinner";

const AddLevel = () => {
  const router = useRouter();

  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const { levelLoading, setLevelLoading, getAllLevels, token }: any =
    useGeneralContext();

  const goBack = async () => {
    await getAllLevels();
    router.push("/admin/trivia/");
  };

  const [levelDetails, setLevelDetails] = useState({
    name: "",
  });

  const createLevel = async (e: any) => {
    e.preventDefault();
    setLevelLoading(true);
    // console.log("levelDetails", levelDetails);
    try {
      const response = await axios.post(
        `${base_url}/levels/add`,
        levelDetails,
        {
          headers: {
            "content-type": "application/json",
            "x-access-token": token,
          },
        }
      );
      // console.log("🚀 ~ createLevel ~ response:", response);
      setLevelLoading(false);
      if (response.status === 200) {
        success("New level created.");
        goBack();
        // navigate("/");
        // window.location.reload(false);
      }
    } catch (err: any) {
      console.log(err);
      error(err.response.data.message);
      error(err.response.data.error);
      setLevelLoading(false);
    }
  };

  const onchangeHandler = async (e: any) => {
    e.persist();
    setLevelDetails((levelDetails) => ({
      ...levelDetails,
      [e.target.name]: e.target.value,
    }));
    // console.log(
    //   "🚀 ~ file: AddLevel.jsx:53 ~ setLevelDetails ~ levelDetails:",
    //   levelDetails
    // );
  };

  return (
    // <div className="w-[70%] mx-auto my-5 shadow-lg bg-white p-8 flex flex-col gap-4 rounded-lg">
    <form
      onSubmit={createLevel}
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
          <button
            className="bg-teal-600 rounded-lg p-2 px-4 my-4 mx-auto w-1/2 flex items-center justify-center outline-none text-white cursor-pointer hover:bg-teal-500"
            type="submit"
          >
            Add Level
          </button>
        </>
      )}
    </form>
    // </div>
  );
};

export default AddLevel;
