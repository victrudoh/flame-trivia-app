"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const GeneralContext = createContext({});

const GeneralProvider = (props: any) => {
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

  //*******/
  //************/
  // FUNCTIONS
  //************/
  //*******/

  useEffect(() => {
    console.log("__3d1k4N.init");
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
