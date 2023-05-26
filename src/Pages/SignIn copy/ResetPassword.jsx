import React from "react";
import SignInSignupSideDetail from "../../Common/SignInSignupSideDetail";
import Form from "./Components/Form";

const ResetPassword = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row  lg:items-center mx-auto lg:h-screen">
      <SignInSignupSideDetail />
      <Form />
    </div>
  );
};

export default ResetPassword;
