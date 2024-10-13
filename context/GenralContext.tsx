"use client";

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { error } from "@/helpers/Alert";

export const GeneralContext = createContext({});

const GeneralProvider = (props: any) => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;

  // AUTH
  const [authLoading, setAuthLoading] = useState(false);
  const [signupDetails, setSignupDetails] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    isCompany: "",
  });
  const [verifyEmailDetails, setVerifyEmailDetails] = useState({
    id: "",
    emailToken: "",
    verified: false,
  });
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [resetPasswordDetails, setResetPasswordDetails] = useState({
    id: "",
    resetToken: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Levels
  const [allLevels, setAllLevels] = useState();

  //*******/
  //************/
  // FUNCTIONS
  //************/
  //*******/

  // LEVELS
  // Get levels
  const getAllLevels = async () => {
    try {
      const response = await axios.get(`${base_url}/levels/all`, {
        headers: {
          "content-type": "application/json",
        },
      });
      console.log("🚀 ~ getAllLevels ~ response:", response);
      setAllLevels(response.data.data.allLevels);
    } catch (ex: any) {
      error(ex.response.data.message);
      error(ex.response.data.error);
      console.log(
        "🚀 ~ file: AppContext.jsx:72 ~ getAllLevels ~ error:",
        error
      );
    }
  };

  useEffect(() => {
    console.log("__3d1k4N.init");
    getAllLevels();
  }, []);

  return (
    <GeneralContext.Provider
      value={{
        // Auth
        authLoading,
        loginDetails,
        signupDetails,
        verifyEmailDetails,
        resetPasswordDetails,
        setAuthLoading,
        setLoginDetails,
        setSignupDetails,
        setVerifyEmailDetails,
        setResetPasswordDetails,

        // Levels
        allLevels,
        setAllLevels,
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export const useGeneralContext = () => {
  const context = useContext(GeneralContext);
  return context;
};

export default GeneralProvider;
