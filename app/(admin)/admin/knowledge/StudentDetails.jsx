import React, { useContext } from "react";

// import DP from "../../../assets/images/studentDP.png";
import AppContext from "../../../context/AppContext";

const StudentDetails = () => {
  const { oneStudent } = useContext(AppContext);

  return (
    <div className="w-[70%] shadow-lg bg-white p-8 flex flex-col gap-4 rounded-lg">
      {/* name & image */}
      <div className="flex w-full gap-4 items-center justify-start">
        {/* <img src={DP} alt="#" className="w-[50px]" /> */}
        <span className="text-xl font-sans font-semibold">
          {oneStudent?.firstname} {oneStudent?.lastname}
        </span>
      </div>
      {/* pair */}
      <div className="flex flex-col align-start justify-center gap-2 my-2">
        <span className="text-gray-400">First name</span>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={oneStudent?.firstname}
          disabled
          className="bg-gray-300/40 p-2 w-full rounded-lg"
        />
      </div>
      {/* pair */}
      <div className="flex flex-col align-start justify-center gap-2 my-2">
        <span className="text-gray-400">Last name</span>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={oneStudent?.lastname}
          disabled
          className="bg-gray-300/40 p-2 w-full rounded-lg"
        />
      </div>
      {/* pair */}
      <div className="flex flex-col align-start justify-center gap-2 my-2">
        <span className="text-gray-400">Matric Number</span>
        <input
          type="text"
          name="matric_no"
          id="matric_no"
          value={oneStudent?.matric_no}
          disabled
          className="bg-gray-300/40 p-2 w-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default StudentDetails;
