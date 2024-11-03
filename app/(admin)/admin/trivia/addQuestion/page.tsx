"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useGeneralContext } from "@/context/GenralContext";
import axios from "axios";
import { success, error } from "@/helpers/Alert";
import Spinner from "@/components/spinner/Spinner";

const AddQuestion = () => {
  const router = useRouter();
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;

  const {
    levelLoading,
    setLevelLoading,
    levelId,
    allTopics,
    getAllQuestions,
  }: // token,
  any = useGeneralContext();

  const goBack = async () => {
    if (levelId) {
      getAllQuestions(levelId);
      router.push(`/admin/trivia/${levelId}`);
    } else {
      router.push(`/admin/trivia`);
    }
  };

  const [questionDetails, setQuestionDetails] = useState({
    question: "",
    answer_a: "",
    answer_b: "",
    answer_c: "",
    answer_d: "",
    correct_answer: "",
    topicId: "",
  });

  // Filter out empty values from questionDetails
  const filterEmptyFields = (details: any) => {
    return Object.fromEntries(
      Object.entries(details).filter(([_, value]) => {
        console.log("🚀 ~ filterEmptyFields ~ _:", _);
        return value !== "";
      })
    );
  };

  const addQuestionHandler = async (e: any) => {
    e.preventDefault();
    setLevelLoading(true);

    if (!questionDetails.answer_a || !questionDetails.answer_b) {
      error("Answers A and B are required.");
      setLevelLoading(false);
      return;
    }

    try {
      const filteredDetails = filterEmptyFields(questionDetails);

      const response = await axios.post(
        `${base_url}/questions/add?levelId=${levelId}`,
        filteredDetails,
        {
          headers: {
            "content-type": "application/json",
            "x-access-token": `${localStorage.getItem("auth_token")}`,
          },
        }
      );

      if (response.status === 200) {
        success("Added new question");
        goBack();
      }
    } catch (err: any) {
      console.log(err);
      error(err.response?.data?.error || "An error occurred");
    } finally {
      setLevelLoading(false);
    }
  };

  const onchangeHandler = (e: any) => {
    const { name, value } = e.target;
    setQuestionDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={addQuestionHandler}
      className="w-[70%] mx-auto my-5 shadow-lg bg-white p-8 flex flex-col gap-4 rounded-lg"
    >
      {/* Header */}
      <div className="flex w-full gap-4 items-center justify-between">
        <span className="text-xl font-sans font-semibold">Add Question</span>
        <span
          className="bg-teal-600 rounded-lg p-2 px-4 flex items-center justify-center text-white cursor-pointer hover:bg-teal-500 ml-14"
          onClick={goBack}
        >
          Back
        </span>
      </div>

      {/* Question */}
      <div className="flex flex-col gap-2 my-2">
        <span className="text-gray-400">
          Question <span className="text-red-400">*</span>
        </span>
        <textarea
          name="question"
          required
          onChange={onchangeHandler}
          placeholder="Please add question here . . ."
          className="bg-gray-300/40 p-2 w-full rounded-lg outline-teal-500"
        />
      </div>

      {/* Answer A */}
      <div className="flex flex-col gap-2 my-2">
        <span className="text-gray-400">
          Answer A <span className="text-red-400">*</span>
        </span>
        <input
          type="text"
          name="answer_a"
          required
          onChange={onchangeHandler}
          placeholder="Input option A . . ."
          className="bg-gray-300/40 p-2 w-full rounded-lg outline-teal-500"
        />
      </div>

      {/* Answer B */}
      <div className="flex flex-col gap-2 my-2">
        <span className="text-gray-400">
          Answer B <span className="text-red-400">*</span>
        </span>
        <input
          type="text"
          name="answer_b"
          required
          onChange={onchangeHandler}
          placeholder="Input option B . . ."
          className="bg-gray-300/40 p-2 w-full rounded-lg outline-teal-500"
        />
      </div>

      {/* Answer C (Optional) */}
      <div className="flex flex-col gap-2 my-2">
        <span className="text-gray-400">Answer C (Optional)</span>
        <input
          type="text"
          name="answer_c"
          onChange={onchangeHandler}
          placeholder="Input option C (optional) . . ."
          className="bg-gray-300/40 p-2 w-full rounded-lg outline-teal-500"
        />
      </div>

      {/* Answer D (Optional) */}
      <div className="flex flex-col gap-2 my-2">
        <span className="text-gray-400">Answer D (Optional)</span>
        <input
          type="text"
          name="answer_d"
          onChange={onchangeHandler}
          placeholder="Input option D (optional) . . ."
          className="bg-gray-300/40 p-2 w-full rounded-lg outline-teal-500"
        />
      </div>

      {/* Correct Answer */}
      <div className="flex flex-col gap-2 my-2">
        <span className="text-gray-400">
          Correct Answer <span className="text-red-400">*</span>
        </span>
        <select
          name="correct_answer"
          required
          onChange={onchangeHandler}
          className="bg-gray-300/40 p-2 w-full rounded-lg outline-teal-500"
        >
          <option value="">Choose Correct Answer</option>
          <option value="answer_a">Option A</option>
          <option value="answer_b">Option B</option>
          <option value="answer_c">Option C</option>
          <option value="answer_d">Option D</option>
        </select>
      </div>

      {/* Topic Selection */}
      <div className="flex flex-col gap-2 my-2">
        <span className="text-gray-400">
          Related Topic <span className="text-red-400">*</span>
        </span>
        <select
          name="topicId"
          required
          onChange={onchangeHandler}
          className="bg-gray-300/40 p-2 w-full rounded-lg outline-teal-500"
        >
          <option value="">Choose Related Topic</option>
          {allTopics?.map((topic: any, index: number) => (
            <option key={index} value={topic?._id}>
              {topic?.title}
            </option>
          ))}
        </select>
      </div>

      {/* Loading State or Submit Button */}
      {levelLoading ? (
        <Spinner />
      ) : (
        <button
          type="submit"
          className="bg-teal-600 rounded-lg p-2 px-4 my-4 mx-auto w-1/2 text-white cursor-pointer hover:bg-teal-500"
        >
          Add Question
        </button>
      )}
    </form>
  );
};

export default AddQuestion;
