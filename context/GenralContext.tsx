"use client";

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { error } from "@/helpers/Alert";

export const GeneralContext = createContext({});

const GeneralProvider = (props: any) => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;

  // LOADERS
  const [authLoading, setAuthLoading] = useState(false);
  const [levelLoading, setLevelLoading] = useState(false);

  // AUTH
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
  const [oneLevel, setOneLevel] = useState();
  const [levelId, setLevelId] = useState();
  const [switchLevelPanel, setSwitchLevelPanel] = useState("questions");

  // QUESTIONS
  const [allQuestions, setAllQuestions] = useState();
  console.log("🚀 ~ GeneralProvider ~ allQuestions:", allQuestions);
  const [oneQuestion, setOneQuestion] = useState();

  //*******/
  //************/
  // FUNCTIONS
  //************/
  //*******/

  // LEVELS
  // Get levels
  const getAllLevels = async () => {
    try {
      setLevelLoading(true);
      const response = await axios.get(`${base_url}/levels/all`, {
        headers: {
          "content-type": "application/json",
        },
      });
      console.log("🚀 ~ getAllLevels ~ response:", response);
      setAllLevels(response.data.data.allLevels);
      setLevelLoading(false);
    } catch (ex: any) {
      error(ex.response.data.message);
      error(ex.response.data.error);
      setLevelLoading(false);
      console.log(
        "🚀 ~ file: AppContext.jsx:72 ~ getAllLevels ~ error:",
        error
      );
    }
  };

  // Get one level
  const getOneLevel = async (id: any) => {
    try {
      const response = await axios.get(`${base_url}/levels/one?id=${id}`, {
        headers: {
          "content-type": "application/json",
        },
      });
      console.log("🚀 ~ getOneLevel ~ response:", response);
      setOneLevel(response.data.data.level);
    } catch (err: any) {
      error(err.response.data.message);
      error(err.response.data.error);
      console.log("🚀 ~ file: AppContext.jsx:96 ~ getOneLevel ~ error:", error);
    }
  };

  // QUESTIONS
  // Get questions
  const getAllQuestions = async (id: any) => {
    console.log("🚀 ~ getAllQuestions ~ id:", id);
    try {
      const response = await axios.get(
        `${base_url}/questions/all?levelId=${id}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      console.log("🚀 ~ getAllQuestions ~ response:", response);
      setAllQuestions(response.data.data.allQuestions);
    } catch (err: any) {
      error(err.response.data.message);
      error(err.response.data.error);
      console.log(
        "🚀 ~ file: AppContext.jsx:115 ~ getAllQuestions ~ error:",
        error
      );
    }
  };

  // Get one question
  const getOneQuestion = async (id: any) => {
    try {
      const response = await axios.get(`${base_url}/questions/one?id=${id}`, {
        headers: {
          "content-type": "application/json",
        },
      });
      setOneQuestion(response.data.data.question);
    } catch (err: any) {
      error(err.response.data.message);
      error(err.response.data.error);
      console.log(
        "🚀 ~ file: AppContext.jsx:132 ~ getOneQuestion ~ error:",
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
        // Loaders
        authLoading,
        levelLoading,
        setAuthLoading,
        setLevelLoading,

        // Auth
        loginDetails,
        signupDetails,
        verifyEmailDetails,
        resetPasswordDetails,
        setLoginDetails,
        setSignupDetails,
        setVerifyEmailDetails,
        setResetPasswordDetails,

        // Levels
        levelId,
        allLevels,
        oneLevel,
        switchLevelPanel,

        setLevelId,
        setOneLevel,
        getOneLevel,
        setAllLevels,
        getAllLevels,
        setSwitchLevelPanel,

        // Questions
        oneQuestion,
        allQuestions,

        setOneQuestion,
        getOneQuestion,
        setAllQuestions,
        getAllQuestions,
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
