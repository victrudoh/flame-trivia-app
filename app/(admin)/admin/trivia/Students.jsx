import React, { Suspense, useContext, useEffect } from "react";

import AppContext from "../../../context/AppContext";
import axios from "axios";
import { error, success } from "../../../helpers/Alert";

export const Students = () => {
  const { courseId, setCourseId, resultsByCourse, getResultsByCourse } =
    useContext(AppContext);
  // console.log(
  //   "🚀 ~ file: Students.jsx:9 ~ Students ~ resultsByCourse:",
  //   resultsByCourse.length
  // );

  let sn = 1;

  const base_url = process.env.REACT_APP_BASE_URL;

  const deleteHandler = async (id) => {
    try {
      const response = await axios.delete(`${base_url}/tests/delete?id=${id}`, {
        headers: { "content-type": "application/json" },
      });
      // console.log("response", response);
      if (response.status === 200) {
        success("Deleted test successfully");
        getResultsByCourse(courseId);
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
      {/* name & image */}
      <div className="flex w-full gap-4 items-center justify-start">
        <span className="text-xl font-sans font-semibold">
          Student Results{" "}
        </span>
      </div>

      <div className="w-full mt-5">
        <table className="w-full text-center table-fixed">
          <thead className="text-gray-500 h-12">
            <tr>
              <th className="w-[4rem]">S/N</th>
              <th>Student</th>
              <th>Matric Number</th>
              <th>Score</th>
              <th></th>
            </tr>
          </thead>
          <div className="my-4"></div>

          <tbody>
            {resultsByCourse ? (
              <>
                {resultsByCourse.map((item, i) => (
                  <>
                    <tr key={i} className=" h-12 bg-teal-400/20">
                      <td>{sn++}</td>
                      <td>{item.studentName}</td>
                      <td>{item.studentMatricNumber}</td>
                      <td>
                        {item.correctAnswers} 0f {item.totalQuestions}
                      </td>
                      <td
                        className="font-lg text-red-600 font-semibold hover:text-teal-500 cursor-pointer"
                        onClick={() => deleteHandler(item._id)}
                      >
                        x
                      </td>
                    </tr>
                    <div className="my-2"></div>
                  </>
                ))}
              </>
            ) : (
              <>
                <tr className="h-12 bg-teal-400/20">
                  <td></td>
                  <td></td>
                  <td>No results yet</td>
                  <td></td>
                  <td></td>
                </tr>
              </>
            )}

            {/* <div className="my-2"></div> */}
            {/* <tr className="h-12 bg-teal-400/20">
              <td>1</td>
              <td>Matthew Greg</td>
              <td>OLA/NUR/001/BS</td>
              <td>13 0f 60</td>
            </tr>
            <div className="mb-5"></div>
            <tr className="h-12 bg-teal-400/20">
              <td>2</td>
              <td>Bollinger Hannah</td>
              <td>OLA/NUR/002/BS</td>
              <td>50 0f 60</td>
            </tr>
            <div className="mb-5"></div> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Students />
    </Suspense>
  );
}

// export default Students;
