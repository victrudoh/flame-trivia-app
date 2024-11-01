import React, { Suspense, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StudentDetails from "./StudentDetails";
import StudentResult from "./StudentResult";
import AppContext from "../../../context/AppContext";
import axios from "axios";
import { error, success } from "../../../helpers/Alert";

export const OneStudent = () => {
  const {
    userId,
    setUserId,
    getOneStudent,
    getAllStudents,
    switchStudentPanel,
    getResultsByStudent,
    setSwitchStudentPanel,
  } = useContext(AppContext);
  // console.log("🚀 ~ file: OneStudent.jsx:18 ~ OneStudent ~ userId:", userId);

  const navigate = useNavigate();

  const goBack = async () => {
    navigate("/admin/students");
  };

  const base_url = process.env.REACT_APP_BASE_URL;

  const deleteHandler = async () => {
    try {
      const response = await axios.delete(
        `${base_url}/users/delete?id=${userId}`,
        {
          headers: { "content-type": "application/json" },
        }
      );
      // console.log("response", response);
      if (response.status === 200) {
        success("Deleted student successfully");
        getAllStudents();
        navigate("/admin/students");
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
      setUserId(id);
      getOneStudent(id);
      getResultsByStudent(id);
    }
  }, []);

  return (
    <>
      <div className="flex flex-col justify-between items-end w-full mt-10">
        <span
          className="bg-teal-600 rounded-lg p-2 px-4 flex items-center justify-center outline-none text-white cursor-pointer hover:bg-teal-500 mr-14"
          onClick={() => goBack()}
        >
          Back
        </span>
        <div className="w-full flex justify-between p-4 px-14">
          <div className="flex flex-col justify-center items-center w-[20%] shadow-lg bg-white p-4 gap-6 rounded-lg h-[14rem]">
            <span
              className={
                switchStudentPanel === "details"
                  ? "bg-teal-600 rounded-2xl p-2 px-4 font-bold cursor-pointer text-white"
                  : "bg-teal-300/30 rounded-2xl p-2 px-4 text-teal-600 font-bold cursor-pointer hover:bg-teal-600 hover:text-white"
              }
              onClick={() => setSwitchStudentPanel("details")}
            >
              Student Details
            </span>
            <span
              className={
                switchStudentPanel === "results"
                  ? "bg-teal-600 rounded-2xl p-2 px-4 font-bold cursor-pointer text-white"
                  : "bg-teal-300/30 rounded-2xl p-2 px-4 text-teal-600 font-bold cursor-pointer hover:bg-teal-600 hover:text-white"
              }
              onClick={() => setSwitchStudentPanel("results")}
            >
              Student Results
            </span>
            <span
              onClick={() => deleteHandler()}
              className="rounded-2xl p-2 px-4 font-bold cursor-pointer text-white bg-red-400 hover:bg-red-600 "
            >
              Delete Student
            </span>
          </div>
          {switchStudentPanel === "details" && (
            <>
              <StudentDetails />
            </>
          )}
          {switchStudentPanel === "results" && (
            <>
              <StudentResult />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OneStudent />
    </Suspense>
  );
}

// export default OneStudent;
