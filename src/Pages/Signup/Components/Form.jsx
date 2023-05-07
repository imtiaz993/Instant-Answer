import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../../Common/CustomInput";
import CustomButton from "../../../Common/CustomButton";
import EmailIcon from "../../../Assets/icons/email.svg";
import PasswordIcon from "../../../Assets/icons/password.svg";
import GoogleIcon from "../../../Assets/icons/google.svg";

const Form = () => {
    const navigate = useNavigate();
  return (
    <div className="mt-20 lg:mt-12 px-4 lg:px-10 lg:w-2/5 lg:ml-auto">
    <h1 className="text-4xl text-darker-gray leading-[60px] font-semibold">
      Start Your Free Trial
    </h1>
    <p className="text-lg text-light-gray mt-1 mb-4">
      No credit card required.
    </p>
    <CustomInput
      label="Email"
      prefix={EmailIcon}
      type="text"
      placeholder="Your Work Email"
      onChange={() => {}}
    />
    <CustomInput
      label="Password"
      prefix={PasswordIcon}
      type="text"
      placeholder="Enter Password"
      onChange={() => {}}
    />
    <CustomInput
      label="Confirm Password"
      prefix={PasswordIcon}
      type="text"
      placeholder="Enter Password"
      onChange={() => {}}
    />
    <CustomButton
      styles="mt-6 w-full flex justify-center"
      title="Sign Up"
      onClick={() => {navigate('/billing')}}
    />
    <p className="mt-6 mb-8 text-sm text-center text-dark-blue font-medium">
      By signing up, you agree to the{" "}
      <a className="underline">Terms of Service</a> and{" "}
      <a className="underline">Privacy Policy</a>.
    </p>
    <button
      className="w-full flex items-center justify-center border border-[rgba(0, 0, 0, 0.26)] rounded-xl py-3 px-5 text-light-gray text-base font-medium"
      onClick={() => {}}
    >
      <img className="mr-3" src={GoogleIcon} alt="" />{" "}
      <span>Sign Up With Google</span>
    </button>
    <p className="pt-1 flex justify-end underline text-blue-600">
      <Link to="/signin">Already have an account.</Link>
    </p>
  </div>
  )
}

export default Form