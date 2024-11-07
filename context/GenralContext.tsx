"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import { success, error } from "@/helpers/Alert";
import { createContext, useContext, useEffect, useState } from "react";

export const GeneralContext = createContext({});

const GeneralProvider = (props: any) => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const router = useRouter();

  // MISC
  const [token, setToken] = useState() as any;

  // LOADERS
  const [authLoading, setAuthLoading] = useState(false);
  const [levelLoading, setLevelLoading] = useState(false);
  const [topicLoading, setTopicLoading] = useState(false);
  const [triviaLoading, setTriviaLoading] = useState(false);

  // USER
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState();

  // AUTH
  const [signupDetails, setSignupDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
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
  const [oneQuestion, setOneQuestion] = useState();

  // KNOWLEDGE BASE
  const [allTopics, setAllTopics] = useState();
  const [oneTopic, setOneTopic] = useState();

  //TRIVIA
  const [oneTest, setOneTest] = useState();
  const [nextQuestion, setNextQuestion] = useState(false);
  const [endTest, setEndTest] = useState(false);

  //*******/
  //************/
  // FUNCTIONS
  //************/
  //*******/

  // AUTH
  const handleSignup = async (e: any) => {
    setAuthLoading(true);
    // console.log("signupDetails", signupDetails);
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/register`,
        signupDetails,
        {
          headers: { "content-type": "application/json" },
        }
      );
      // console.log("🚀 ~ handleSignup ~ response:", response);
      setAuthLoading(false);
      if (response.status === 200) {
        success("Signup Successful");
        success("Please go to your email to continue the process.");
        router.push(`/auth/verify`);
      }
    } catch (err: any) {
      console.log("🚀 ~ handleSignup ~ err:", err);
      setAuthLoading(false);
      error(
        err?.response?.data?.message
          ? err?.response?.data?.message
          : err?.response?.data?.error || err?.message
      );
      // error(err.response?.data?.message);
      // error(err.message);
    }
  };

  const handleLogin = async (e: any) => {
    setAuthLoading(true);
    // console.log("loginDetails", loginDetails);
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
        loginDetails,
        {
          headers: { "content-type": "application/json" },
        }
      );
      // console.log("🚀 ~ handleLogin ~ response:", response);
      const token = response.data.data.token;
      const userId = response.data.data.user?._id;
      setAuthLoading(false);
      if (response.status === 200) {
        success("Login Successful");
        localStorage.setItem("auth_token", token);
        localStorage.setItem("userId", userId);
        setUser(response.data.data.user);
        if (response.data.data.user.role === "admin") {
          router.push(`/admin`);
        }
        if (response.data.data.user.role === "user") {
          router.push(`/home`);
        }
        // window.location.reload();
      }
    } catch (err: any) {
      setAuthLoading(false);
      console.log("🚀 ~ handleLogin ~ err:", err);
      error(
        err?.response?.data?.message
          ? err?.response?.data?.message
          : err?.response?.data?.error || err?.message
      );
      // error(err.response?.data?.message);
      // error(err.message);
    }
  };

  const handleVerifyEmail = async () => {
    setAuthLoading(true);
    try {
      // console.log(
      //   "🚀 ~ handleVerifyEmail ~ verifyEmailDetails:",
      //   verifyEmailDetails
      // );
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/verify?id=${verifyEmailDetails.id}&emailToken=${verifyEmailDetails.emailToken}`,
        {
          headers: { "content-type": "application/json" },
        }
      );
      // console.log("🚀 ~ handleVerifyEmail ~ response:", response);
      setAuthLoading(false);
      if (response.status === 200) {
        success("Email Verified Successfully");
        setVerifyEmailDetails((item: any) => ({
          ...item,
          verified: true,
        }));
        router.push("/auth/login");
      }
    } catch (err: any) {
      console.log("🚀 ~ handleVerifyEmail ~ err:", err);
      setAuthLoading(false);
      error(
        err?.response?.data?.message
          ? err?.response?.data?.message
          : err?.response?.data?.error || err?.message
      );
      // error(err?.response?.data?.message);
      // error(err.message);
    }
  };

  const handleForgotPassword = async (email: any) => {
    setAuthLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/forgot-password`,
        { email },
        {
          headers: { "content-type": "application/json" },
        }
      );
      // console.log("🚀 ~ handleForgotPassword ~ response:", response);
      setAuthLoading(false);
      if (response.status === 200) {
        success("Reset Email Sent Successfully");
        success("Please check email to continue.");
        // router.push(`/auth/reset`);
      }
    } catch (err: any) {
      console.log("🚀 ~ handleForgotPassword ~ err:", err);
      setAuthLoading(false);
      error(
        err?.response?.data?.message
          ? err?.response?.data?.message
          : err?.response?.data?.error || err?.message
      );
      // error(err?.response?.data?.message);
      // error(err.message);
    }
  };

  const handleResetPassword = async (e: any) => {
    setAuthLoading(true);
    // console.log("resetPasswordDetails", resetPasswordDetails);
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/reset-password?id=${resetPasswordDetails.id}&resetToken=${resetPasswordDetails.resetToken}`,
        resetPasswordDetails,
        {
          headers: { "content-type": "application/json" },
        }
      );
      // console.log("🚀 ~ handleResetPassword ~ response:", response);
      setAuthLoading(false);
      if (response.status === 200) {
        success("Password reset successfully.");
        success("Please login to continue.");
        router.push(`/auth/login`);
      }
    } catch (err: any) {
      console.log("🚀 ~ handleResetPassword ~ err:", err);
      setAuthLoading(false);
      error(
        err?.response?.data?.message
          ? err?.response?.data?.message
          : err?.response?.data?.error || err?.message
      );
      // error(err.message);
    }
  };

  // USER
  const getOneUser = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/one?id=${userId}`,
        {
          headers: {
            "content-type": "application/json",
            "x-access-token": token,
            // "x-access-token": localStorage.getItem("auth_token"),
          },
        }
      );
      // console.log("🚀 ~ getOneUser ~ response:", response);
      if (response.status === 200) {
        setUser(response.data.data.user);
      }
    } catch (err: any) {
      console.log("🚀 ~ getOneUser ~ err:", err);
      error(
        err.response?.data?.message
          ? err?.response?.data?.message
          : err.response?.data?.error
      );
    }
  };

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
      // console.log("🚀 ~ getAllLevels ~ response:", response);
      setAllLevels(response.data.data.allLevels);
      setLevelLoading(false);
    } catch (ex: any) {
      console.log("🚀 ~ getAllLevels ~ ex:", ex);
      error(ex?.response?.data?.message);
      error(ex?.response?.data?.error);
      setLevelLoading(false);
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
      // console.log("🚀 ~ getOneLevel ~ response:", response);
      setOneLevel(response.data.data.level);
    } catch (err: any) {
      error(err?.response?.data?.message);
      error(err?.response?.data?.error);
      console.log("🚀 ~ file: AppContext.jsx:96 ~ getOneLevel ~ error:", err);
    }
  };

  // QUESTIONS
  // Get questions
  const getAllQuestions = async (id: any) => {
    // console.log("🚀 ~ getAllQuestions ~ id:", id);
    try {
      const response = await axios.get(
        `${base_url}/questions/all?levelId=${id}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log("🚀 ~ getAllQuestions ~ response:", response);
      setAllQuestions(response.data.data.allQuestions);
    } catch (err: any) {
      error(err?.response?.data?.message);
      error(err?.response?.data?.error);
      console.log(
        "🚀 ~ file: AppContext.jsx:115 ~ getAllQuestions ~ error:",
        err
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
      error(err?.response?.data?.message);
      error(err?.response?.data?.error);
      console.log(
        "🚀 ~ file: AppContext.jsx:132 ~ getOneQuestion ~ error:",
        err
      );
    }
  };

  // KNOWLEDGE BASE
  // Get Topics
  const getAllTopics = async () => {
    try {
      setTopicLoading(true);
      const response = await axios.get(`${base_url}/topics/all`, {
        headers: {
          "content-type": "application/json",
        },
      });
      // console.log("🚀 ~ getTopics ~ response:", response);
      setAllTopics(response.data.data.allTopics);
      setTopicLoading(false);
    } catch (ex: any) {
      error(ex?.response?.data?.message);
      error(ex?.response?.data?.error);
      setTopicLoading(false);
      console.log("🚀 ~ file: AppContext.jsx:72 ~ getTopics ~ error:", ex);
    }
  };

  // Get one topic
  const getOneTopic = async (id: any) => {
    try {
      const response = await axios.get(`${base_url}/topics/one?id=${id}`, {
        headers: {
          "content-type": "application/json",
        },
      });
      setOneTopic(response.data.data.topic);
    } catch (err: any) {
      error(err?.response?.data?.message);
      error(err?.response?.data?.error);
      console.log("🚀 ~ file: AppContext.jsx:132 ~ getOneTopic ~ error:", err);
    }
  };

  // TRIVIA
  // Start test
  const handleStartTest = async (levelId: any) => {
    try {
      setTriviaLoading(true);
      const response = await axios.get(
        `${base_url}/tests/add?levelId=${levelId}&userId=${userId}`,
        {
          headers: {
            "content-type": "application/json",
            "x-access-token": token,
          },
        }
      );
      // console.log("🚀 ~ handleStartTest ~ response:", response);
      setOneTest(response.data.data.test);
      setTriviaLoading(false);
    } catch (ex: any) {
      console.log("🚀 ~ handleStartTest ~ ex:", ex);
      error(ex?.response?.data?.message);
      error(ex?.response?.data?.error);
      setTriviaLoading(false);
    }
  };

  // Answer question
  const handleAnswerQuestion = async (
    testId: any,
    index: any,
    questionId: any,
    answer: any,
    levelId: any
  ) => {
    try {
      setTriviaLoading(true);
      const response = await axios.post(
        `${base_url}/tests/answer?testId=${testId}&questionId=${questionId}&index=${index}`,
        { answer: answer },
        {
          headers: {
            "content-type": "application/json",
            "x-access-token": token,
          },
        }
      );
      console.log("🚀 ~ GeneralProvider ~ response:", response);
      setTriviaLoading(false);
      handleStartTest(levelId);
      if (response.status === 200) {
        setNextQuestion(true);
        // if (response.data.data.test.testEnded) {
        //   setEndTest(true);
        // }
        // handleStartTest(levelId);
      }
      return response.data.data.test;
    } catch (ex: any) {
      console.log("🚀 ~ handleAnswerQuestion ~ ex:", ex);
      error(ex?.response?.data?.message);
      error(ex?.response?.data?.error);
      setTriviaLoading(false);
    }
  };

  // End Test
  const handleEndTest = async (testId: any) => {
    try {
      setTriviaLoading(true);
      const response = await axios.get(
        `${base_url}/tests/end?testId=${testId}`,
        {
          headers: {
            "content-type": "application/json",
            "x-access-token": token,
          },
        }
      );
      console.log("🚀 ~ GeneralProvider ~ response:", response);
      setTriviaLoading(false);
      // handleStartTest(levelId);
      if (response.status === 200) {
        setNextQuestion(false);
        setEndTest(true);
        success(response.data?.data?.message);
        if (response.data.data.test?.testEnded) {
          setOneTest(response.data?.data?.test);
        }
        // handleStartTest(levelId);
      }
      return response.data.data.test;
    } catch (ex: any) {
      console.log("🚀 ~ handleAnswerQuestion ~ ex:", ex);
      error(ex?.response?.data?.message);
      error(ex?.response?.data?.error);
      setTriviaLoading(false);
    }
  };

  useEffect(() => {
    console.log("__3d1k4N.init");
    const cachedUserId = localStorage.getItem("userId");
    const cachedToken = localStorage.getItem("auth_token");
    if (cachedUserId) setUserId(cachedUserId);
    if (cachedToken) setToken(cachedToken);
    getAllLevels();
    getAllTopics();
  }, []);

  useEffect(() => {
    if (userId) {
      getOneUser();
    }
  }, [userId]);

  useEffect(() => {
    if (verifyEmailDetails?.id && verifyEmailDetails.emailToken) {
      handleVerifyEmail();
    }
  }, [verifyEmailDetails]);

  useEffect(() => {
    if (levelId) {
      getAllQuestions(levelId);
    }
  }, [levelId]);

  return (
    <GeneralContext.Provider
      value={{
        // Loaders
        authLoading,
        topicLoading,
        levelLoading,
        triviaLoading,
        setAuthLoading,
        setTopicLoading,
        setLevelLoading,
        setTriviaLoading,

        // Misc
        user,
        token,
        userId,

        setUser,

        // Auth
        loginDetails,
        signupDetails,
        verifyEmailDetails,
        resetPasswordDetails,
        handleLogin,
        handleSignup,
        setLoginDetails,
        setSignupDetails,
        handleVerifyEmail,
        handleResetPassword,
        handleForgotPassword,
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

        // Knowledge Base
        oneTopic,
        allTopics,
        setOneTopic,
        getOneTopic,
        setAllTopics,
        getAllTopics,

        // Trivia
        endTest,
        oneTest,
        nextQuestion,
        setEndTest,
        setOneTest,
        handleEndTest,
        handleStartTest,
        setNextQuestion,
        handleAnswerQuestion,
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
