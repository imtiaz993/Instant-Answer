import React from "react";
import CustomInput from "../../Common/CustomInput";
import CustomButton from "../../Common/CustomButton";
import Logo from "../../Assets/icons/logo.svg";
import EmailIcon from "../../Assets/icons/email.svg";
import PasswordIcon from "../../Assets/icons/password.svg";
import GoogleIcon from "../../Assets/icons/google.svg";
import TickIcon from "../../Assets/icons/tick.svg";
import NextonLogo from "../../Assets/icons/nexton.svg";
import StrategicSystemsLogo from "../../Assets/icons/strategic-systems.svg";
import ClearBoxLogo from "../../Assets/icons/clearbox.svg";

const Signup = () => {
  return (
    <div className="grid lg:grid-cols-2 mt-10 items-center px-10 mx-auto">
      <div>
        <img className="absolute top-8 left-8" src={Logo} alt="" />
        <div className="w-4/5">
          <h1 className="text-4xl font-bold text-[#29303D] leading-10">
            Set up your AI assistant in just 5 minutes
          </h1>
          <p className="mt-4 text-xl text-[#667085]">
            Set up your AI assistant in just 5 minutes
          </p>
          <div className="mt-9 mb-10">
            <div className="flex mb-5">
              <img src={TickIcon} alt="" />
              <p className="ml-2 text-lg text-[#667085]">
                Set up your AI assistant in just 5 minutes
              </p>
            </div>
            <div className="flex mb-5">
              <img src={TickIcon} alt="" />
              <p className="ml-2 text-lg text-[#667085]">
                Set up your AI assistant in just 5 minutes
              </p>
            </div>
            <div className="flex mb-5">
              <img src={TickIcon} alt="" />
              <p className="ml-2 text-lg text-[#667085]">
                Set up your AI assistant in just 5 minutes
              </p>
            </div>
          </div>
          <p className="mb-10 text-2xl text-[#29303D] font-bold">
            Trusted by 1000s of companies
          </p>
          <div className="flex">
            <img className="mr-8" src={NextonLogo} alt=""/>
            <img className="mr-8" src={StrategicSystemsLogo} alt=""/>
            <img className="mr-8" src={ClearBoxLogo} alt=""/>
          </div>
        </div>
      </div>
      <div className="mt-6 w-4/5 ml-auto">
        <h1 className="text-5xl text-[#101828] leading-[60px] font-semibold">
          Start Your Free Trial
        </h1>
        <p className="text-lg text-[#667085] mt-3 mb-8">
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
        <CustomButton styles="mt-6" title="Sign Up" onClick={() => {}} />
        <p className="mt-6 mb-8 text-sm text-center text-[#344054] font-medium">
          By signing up, you agree to the{" "}
          <a className="underline">Terms of Service</a> and{" "}
          <a className="underline">Privacy Policy</a>.
        </p>
        <button
          className="w-full flex items-center border border-[rgba(0, 0, 0, 0.26)] rounded-xl py-3 px-5 text-[#667085] text-base font-medium"
          onClick={() => {}}
        >
          <img className="mr-3" src={GoogleIcon} alt="" /> Sign Up With Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
