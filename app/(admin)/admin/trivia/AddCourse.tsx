import React, { useState } from "react";
// import { useNavigate } from "next/navigation";
import { useGeneralContext } from "@/context/GenralContext";
import axios from "axios";
import { success, error } from "@/helpers/Alert";
import Spinner from "@/components/spinner/Spinner";
// import { success, error } from "../../../helpers/Alert";
// import Spinner from "../../../components/widgets/spinner/Spinner";

const AddCourse = () => {
  // const navigate = useNavigate();

  const base_url = process.env.REACT_APP_BASE_URL;

  const goBack = async () => {
    await getAllCourses();
    // navigate("/admin/courses/");
  };

  const { loading, setLoading, getAllCourses }: any = useGeneralContext();

  const [courseDetails, setCourseDetails] = useState({
    name: "",
  });

  const createCourse = async (e: any) => {
    setLoading(true);
    console.log("courseDetails", courseDetails);
    e.preventDefault();
    try {
      const response = await axios.post(
        `${base_url}/courses/add`,
        courseDetails,
        {
          headers: { "content-type": "application/json" },
        }
      );
      // console.log("response", response);
      setLoading(false);
      if (response.status === 200) {
        success("New course created.");
        goBack();
        // navigate("/");
        // window.location.reload(false);
      }
    } catch (err: any) {
      console.log(err);
      error(err.response.data.message);
      error(err.response.data.error);
      setLoading(false);
    }
  };

  const onchangeHandler = async (e: any) => {
    e.persist();
    setCourseDetails((courseDetails) => ({
      ...courseDetails,
      [e.target.name]: e.target.value,
    }));
    // console.log(
    //   "🚀 ~ file: AddCourse.jsx:53 ~ setCourseDetails ~ courseDetails:",
    //   courseDetails
    // );
  };

  return (
    // <div className="w-[70%] mx-auto my-5 shadow-lg bg-white p-8 flex flex-col gap-4 rounded-lg">
    <form
      onSubmit={createCourse}
      className="w-[70%] mx-auto my-5 shadow-lg bg-white p-8 flex flex-col gap-4 rounded-lg"
    >
      {/* top stuff */}
      <div className="flex w-full gap-4 items-center justify-between">
        <span className="text-xl font-sans font-semibold">Add Course</span>
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
          Course Name <span className="text-red-400">*</span>
        </span>
        <input
          type="text"
          name="name"
          id="name"
          required
          onChange={onchangeHandler}
          placeholder="Please add course name here . . ."
          className="bg-gray-300/40 p-2 w-full rounded-lg outline-2 outline-teal-500"
        />
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
            Add Course
          </button>
        </>
      )}
    </form>
    // </div>
  );
};

export default AddCourse;
