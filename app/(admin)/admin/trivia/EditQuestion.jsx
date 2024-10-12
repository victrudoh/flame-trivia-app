import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../../context/AppContext";
import axios from "axios";
import { error, success } from "../../../helpers/Alert";
import Spinner from "../../../components/widgets/spinner/Spinner";

const EditQuestion = () => {
  const { loading, setLoading, setCourseId, courseId, oneQuestion } =
    useContext(AppContext);
  // console.log(
  //   "🚀 ~ file: EditQuestion.jsx:16 ~ EditQuestion ~ oneQuestion:",
  //   oneQuestion
  // );

  const base_url = process.env.REACT_APP_BASE_URL;

  const navigate = useNavigate();

  const goBack = async () => {
    navigate(`/admin/courses/one?id=${courseId}`);
  };

  const [questionDetails, setQuestionDetails] = useState({
    question: oneQuestion.question,
    answer_a: oneQuestion.answer_a,
    answer_b: oneQuestion.answer_b,
    answer_c: oneQuestion.answer_c,
    answer_d: oneQuestion.answer_d,
    correct_answer: oneQuestion.correct_answer,
  });

  const editQuestionHandler = async (e) => {
    setLoading(true);
    // console.log("QuestionDetails", questionDetails);
    e.preventDefault();
    try {
      const response = await axios.put(
        `${base_url}/questions/edit?id${oneQuestion._id}`,
        questionDetails,
        {
          headers: { "content-type": "application/json" },
        }
      );
      // console.log("response", response);
      if (response.status === 200) {
        success("Edited question successfully");
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

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    if (id) {
      setCourseId(id);
    }
  }, []);

  return (
    // <div className="w-[70%] mx-auto my-5 shadow-lg bg-white p-8 flex flex-col gap-4 rounded-lg">
    <form
      onSubmit={editQuestionHandler}
      className="w-[70%] mx-auto my-5 shadow-lg bg-white p-8 flex flex-col gap-4 rounded-lg"
    >
      {/* top stuff */}
      <div className="flex w-full gap-4 items-center justify-between">
        <span className="text-xl font-sans font-semibold">Edit Question</span>
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
          defaultValue={oneQuestion.question}
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
          defaultValue={oneQuestion.answer_a}
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
          defaultValue={oneQuestion.answer_b}
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
          defaultValue={oneQuestion.answer_c}
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
          defaultValue={oneQuestion.answer_d}
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
          defaultValue={oneQuestion.correct_answer}
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
            Update Question
          </button>
        </>
      )}
    </form>
    // </div>
  );
};

export default EditQuestion;
