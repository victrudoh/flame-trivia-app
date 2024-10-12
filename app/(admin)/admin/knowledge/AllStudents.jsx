import React, { useContext, useEffect } from "react";

import AppContext from "../../../context/AppContext";
import { useNavigate } from "react-router-dom";

const AllStudents = () => {
  const navigate = useNavigate();

  const gotoStudent = async (id) => {
    navigate(`/admin/students/one?id=${id}`);
  };

  const { setCourseId, allStudents } = useContext(AppContext);

  let sn = 1;

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    if (id) {
      setCourseId(id);
    }
  }, []);

  return (
    <>
      <div className="shadow-lg rounded-md bg-white p-4 w-full flex flex-col gap-4">
        <div className="flex justify-end items-center w-full">
          {/* <input
            class="w-96 px-4 py-1 rounded-lg border-solid border-[0.5px] border-gray-400 text-[#87909E] text-lg focus:outline-none"
            type="text"
            placeholder="Search..."
          /> */}

          {/* <span className="bg-teal-600 rounded-lg p-2 px-4 flex items-center justify-center outline-none text-white cursor-pointer hover:bg-teal-500">
            Add New Student
          </span> */}
        </div>
        <div className="w-full mt-5">
          <table className="w-full text-center table-fixed">
            <thead className="text-gray-700 h-12">
              <tr>
                <th className="w-[4rem]">S/N</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Matric number</th>
                {/* <th className="w-[6rem]"></th> */}
                {/* <th></th> */}
                {/* <th>Actions</th> */}
              </tr>
            </thead>
            <div className="my-4"></div>

            <tbody>
              {allStudents ? (
                <>
                  {allStudents.map((item, i) => (
                    <>
                      <tr
                        key={i}
                        className="h-12 bg-teal-400/20 cursor-pointer hover:bg-teal-400/40"
                        onClick={() => gotoStudent(item._id)}
                      >
                        <td>{sn++}</td>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.matric_no}</td>
                        {/* <td
                          className="font-lg text-red-600 font-semibold hover:text-teal-500 cursor-pointer"
                          onClick={() => deleteHandler(item._id)}
                        >
                          x
                        </td> */}
                      </tr>
                      <div className="mb-5"></div>
                    </>
                  ))}
                </>
              ) : (
                <>
                  <tr className="h-12 bg-teal-400/20">
                    <td></td>
                    <td></td>
                    <td>No Student yet, add some</td>
                    <td></td>
                    <td></td>
                  </tr>
                </>
              )}
              {/* <div className="my-2"></div> */}
              {/* <tr
                className="h-12 bg-teal-400/20 cursor-pointer hover:bg-teal-400/40"
                onClick={gotoStudent}
              >
                <td>1</td>
                <td>Matthew</td>
                <td>Greg</td>
                <td>OLA/NUR/001/BS</td>
              </tr>
              <div className="mb-5"></div>
              <tr
                className="h-12 bg-teal-400/20 cursor-pointer hover:bg-teal-400/40"
                onClick={gotoStudent}
              >
                <td>1</td>
                <td>Matthew</td>
                <td>Greg</td>
                <td>OLA/NUR/001/BS</td>
              </tr> */}
              <div className="mb-5"></div>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllStudents;
