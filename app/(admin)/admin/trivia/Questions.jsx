import React, { Suspense, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AppContext from "../../../context/AppContext";
import axios from "axios";
import { error, success } from "../../../helpers/Alert";

const Questions = () => {
  const navigate = useNavigate();

  const base_url = process.env.REACT_APP_BASE_URL;

  const {
    courseId,
    setCourseId,
    allQuestions,
    getOneQuestion,
    getAllQuestions,
  } = useContext(AppContext);

  console.log("allQuestions", allQuestions);

  let sn = 1;

  const gotoQuestion = async (id) => {
    await getOneQuestion(id);
    navigate(`/admin/questions/edit?id=${id}`);
  };

  const deleteHandler = async (id) => {
    try {
      const response = await axios.delete(
        `${base_url}/questions/delete?id=${id}`,
        {
          headers: { "content-type": "application/json" },
        }
      );
      // console.log("response", response);
      if (response.status === 200) {
        success("Deleted question successfully");
        getAllQuestions(courseId);
        //  goBack();
      }
    } catch (err) {
      console.log(err);
      error(err.response.data.error);
      error(err.response.data.message);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    if (id) {
      setCourseId(id);
    }
  }, []);

  return (
    <div className="w-[75%] shadow-lg bg-white p-8 flex flex-col gap-4 rounded-lg">
      {/* cards */}
      <div className="w-full mx-auto mt-5 flex gap-8 py-4 px-2 flex-wrap ml-4">
        {/* card */}
        {allQuestions?.length > 0 ? (
          <>
            {allQuestions.map((item, i) => (
              <>
                <div className="flex gap-2 items-start">
                  <div
                    key={i}
                    className="flex gap-4 px-2 justify-start items-between shadow-md rounded-md border-2  border-teal-600 w-[320px] cursor-pointer hover:shadow-2xl"
                    onClick={() => gotoQuestion(item._id)}
                  >
                    <span className="text-xl font-semibold">{sn++}</span>
                    <div className=" w-full bg-white rounded-[8px] bg-cover bg-center shadow-xl p-4 flex flex-col items-center justify-start z-[1]">
                      {/* Question */}
                      <div className="w-full h-28 p-2 bg-teal-100 rounded-md font-poppins text-xs text-center text-gray-600 overflow-hidden">
                        {item.question}
                      </div>
                      {/* Answers */}
                      <div className="flex gap-2 w-full items-start justify-start my-2 flex-wrap ml-2">
                        {/* answer */}
                        <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                          <div className="font-poppins text-xs text-left text-teal-700">
                            A
                          </div>
                          <div className="font-poppins text-xs text-left text-gray-600">
                            {item.answer_a}
                          </div>
                        </div>
                        <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                          <div className="font-poppins text-xs text-left text-teal-700">
                            B
                          </div>
                          <div className="font-poppins text-xs text-left text-gray-600">
                            {item.answer_b}
                          </div>
                        </div>
                        <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                          <div className="font-poppins text-xs text-left text-teal-700">
                            C
                          </div>
                          <div className="font-poppins text-xs text-left text-gray-600">
                            {item.answer_c}
                          </div>
                        </div>
                        <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                          <div className="font-poppins text-xs text-left text-teal-700">
                            D
                          </div>
                          <div className="font-poppins text-xs text-left text-gray-600">
                            {item.answer_d}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span
                    className="font-lg text-red-600 font-semibold hover:text-teal-500 cursor-pointer"
                    onClick={() => deleteHandler(item._id)}
                  >
                    x
                  </span>
                </div>
              </>
            ))}
          </>
        ) : (
          <>
            <span className="w-full mx-auto">
              No Questions, please add some.
            </span>
          </>
        )}

        {/* <div
          className="flex gap-2 justify-start items-between shadow-md rounded-md border-2 border-teal-600 w-[320px] cursor-pointer hover:shadow-2xl"
          onClick={gotoQuestion}
        >
          <span className="text-xl font-semibold">1</span>
          <div className=" w-full bg-white rounded-[8px] bg-cover bg-center shadow-xl p-4 flex flex-col items-center justify-start z-[1]">
            <div className="w-full min-h-[5%] flex items-center justify-center">
              <img src="#" alt="Sample Image" />
            </div>
            <div className="w-full h-28 p-2 bg-teal-100 rounded-md font-poppins text-xs text-center text-gray-600 overflow-hidden">
              Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
              pharetra sed lacinia sit. Id elit amet facilisis ultrices. A
              mattis amet consectetur consectetur.
            </div>
            <div className="flex gap-2 w-full items-start justify-start my-2 flex-wrap ml-2">
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Questions />
    </Suspense>
  );
}

// export default Questions;
