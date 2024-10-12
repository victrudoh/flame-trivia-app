import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Students from "./Students";
import Questions from "./Questions";
import AppContext from "../../../context/AppContext";

const OneCourse = () => {
  const { switchCoursePanel, setSwitchCoursePanel } = useContext(AppContext);
  const navigate = useNavigate();

  const goBack = async () => {
    navigate("/admin/courses");
  };

  const gotoAddQuestion = async () => {
    navigate("/admin/questions/add");
  };

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
          {switchCoursePanel === "questions" && (
            <span
              className="bg-teal-600 rounded-lg p-2 px-4 flex items-center justify-center outline-none text-white cursor-pointer hover:bg-teal-500 mr-14"
              onClick={gotoAddQuestion}
            >
              Add New Question
            </span>
          )}
        </div>
        <div className="w-full flex justify-between p-4 px-14">
          <div className="flex flex-col justify-center items-center w-[20%] shadow-lg bg-white p-4 gap-6 rounded-lg h-[10rem]">
            <span
              className={
                switchCoursePanel === "questions"
                  ? "bg-teal-600 rounded-2xl p-2 px-4 font-bold cursor-pointer text-white"
                  : "bg-teal-300/30 rounded-2xl p-2 px-4 text-teal-600 font-bold cursor-pointer hover:bg-teal-600 hover:text-white"
              }
              onClick={() => setSwitchCoursePanel("questions")}
            >
              Questions
            </span>
            <span
              className={
                switchCoursePanel === "students"
                  ? "bg-teal-600 rounded-2xl p-2 px-4 font-bold cursor-pointer text-white"
                  : "bg-teal-300/30 rounded-2xl p-2 px-4 text-teal-600 font-bold cursor-pointer hover:bg-teal-600 hover:text-white"
              }
              onClick={() => setSwitchCoursePanel("students")}
            >
              Students
            </span>
          </div>
          {switchCoursePanel === "students" && (
            <>
              <Students />
            </>
          )}
          {switchCoursePanel === "questions" && (
            <>
              <Questions />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default OneCourse;
