import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import AppContext from "../../../context/AppContext";
import axios from "axios";
import { success, error } from "../../../helpers/Alert";
import Spinner from "../../../components/widgets/spinner/Spinner";

const AddQuestion = () => {

  const base_url = process.env.REACT_APP_BASE_URL;

  const navigate = useNavigate();

  const goBack = async () => {
    navigate("/admin/courses/one");
  };

  const { loading, setLoading, courseId, getAllQuestions } =
    useContext(AppContext);

  const [questionDetails, setQuestionDetails] = useState({
    question: "",
    answer_a: "",
    answer_b: "",
    answer_c: "",
    answer_d: "",
    correct_answer: "",
  });

  const addQuestionHandler = async (e) => {
    setLoading(true);
    // console.log("QuestionDetails", questionDetails);
    e.preventDefault();
    try {
      const response = await axios.post(
        `${base_url}/questions/add?courseId=${courseId}`,
        questionDetails,
        {
          headers: { "content-type": "application/json" },
        }
      );
      // console.log("response", response);
      if (response.status === 200) {
        success("Added new question");
        getAllQuestions(courseId);
        goBack();
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      error(err.response.data.error);
      setLoading(false);
    }
  };

  const onchangeHandler = async (e) => {
    e.persist();
    setQuestionDetails((questionDetails) => ({
      ...questionDetails,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    // <div className="w-[70%] mx-auto my-5 shadow-lg bg-white p-8 flex flex-col gap-4 rounded-lg">
    <form
      onSubmit={addQuestionHandler}
      className="w-[70%] mx-auto my-5 shadow-lg bg-white p-8 flex flex-col gap-4 rounded-lg"
    >
      {/* top stuff */}
      <div className="flex w-full gap-4 items-center justify-between">
        <span className="text-xl font-sans font-semibold">Add Question</span>
        <span
          className="bg-teal-600 rounded-lg p-2 px-4 flex items-center justify-center outline-none text-white cursor-pointer hover:bg-teal-500 ml-14"
          onClick={goBack}
        >
          Back
        </span>
      </div>

      {/* Question */}
      <div className="flex flex-col align-start justify-center gap-2 my-2">
        <span className="text-gray-400">
          Question <span className="text-red-400">*</span>
        </span>
        <textarea
          type="text"
          name="question"
          id="question"
          required
          onChange={onchangeHandler}
          placeholder="Please add question here . . ."
          className="bg-gray-300/40 p-2 w-full rounded-lg outline-2 outline-teal-500"
        />
      </div>
      {/* Image */}
      {/* <div className="flex flex-col align-start justify-center gap-2 my-2">
        <span className="text-gray-400">Image</span>
        <input
          type="file"
          name="image"
          id="image"
          className="bg-gray-300/40 p-2 w-full rounded-lg"
        />
      </div> */}
      {/* pair */}
      <div className="flex flex-col align-start justify-center gap-2 my-2">
        <span className="text-gray-400">
          Answer A <span className="text-red-400">*</span>
        </span>
        <input
          type="text"
          name="answer_a"
          id="answer_a"
          onChange={onchangeHandler}
          placeholder="Input option A . . ."
          className="bg-gray-300/40 p-2 w-full rounded-lg outline-2 outline-teal-500"
        />
      </div>
      {/* pair */}
      <div className="flex flex-col align-start justify-center gap-2 my-2">
        <span className="text-gray-400">
          Answer B <span className="text-red-400">*</span>
        </span>
        <input
          type="text"
          name="answer_b"
          id="answer_b"
          onChange={onchangeHandler}
          placeholder="Input option B . . ."
          className="bg-gray-300/40 p-2 w-full rounded-lg outline-2 outline-teal-500"
        />
      </div>
      {/* pair */}
      <div className="flex flex-col align-start justify-center gap-2 my-2">
        <span className="text-gray-400">
          Answer C <span className="text-red-400">*</span>
        </span>
        <input
          type="text"
          name="answer_c"
          id="answer_c"
          onChange={onchangeHandler}
          placeholder="Input option C . . ."
          className="bg-gray-300/40 p-2 w-full rounded-lg outline-2 outline-teal-500"
        />
      </div>
      {/* pair */}
      <div className="flex flex-col align-start justify-center gap-2 my-2">
        <span className="text-gray-400">
          Answer D <span className="text-red-400">*</span>
        </span>
        <input
          type="text"
          name="answer_d"
          id="answer_d"
          onChange={onchangeHandler}
          placeholder="Input option D . . ."
          className="bg-gray-300/40 p-2 w-full rounded-lg outline-2 outline-teal-500"
        />
      </div>
      {/* pair */}
      <div className="flex flex-col align-start justify-center gap-2 my-2">
        <span className="text-gray-400">
          Correct Answer<span className="text-red-400">*</span>
        </span>
        <select
          name="correct_answer"
          id="correct_answer"
          onChange={onchangeHandler}
          className="bg-gray-300/40 p-2 w-full rounded-lg outline-2 outline-teal-500"
        >
          <option>Choose Correct Answer</option>
          <option value="answer_a">Option A</option>
          <option value="answer_b">Option B</option>
          <option value="answer_c">Option C</option>
          <option value="answer_d">Option D</option>
        </select>
      </div>

      {loading ? (
        <>
          <Spinner />
        </>
      ) : (
        <>
          <button
            className="bg-teal-600 rounded-lg p-2 px-4 my-4 mx-auto w-1/2 flex items-center justify-center outline-none text-white cursor-pointer hover:bg-teal-500"
            type="submit"
          >
            Add Question
          </button>
        </>
      )}
    </form>
    // </div>
  );
};

export default AddQuestion;
