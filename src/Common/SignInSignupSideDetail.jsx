import React from 'react'
import Logo from "../Assets/icons/logo.svg";
import TickIcon from "../Assets/icons/tick.svg";
import NextonLogo from "../Assets/icons/nexton.svg";
import StrategicSystemsLogo from "../Assets/icons/strategic-systems.svg";
import ClearBoxLogo from "../Assets/icons/clearbox.svg";

const SignInSignupSideDetail = () => {
  return (
    <div className="bg-light-background pb-10 lg:pb-0 lg:w-2/4  mt-10 lg:mt-0 h-full flex items-center auth-clip">
    <img className="absolute top-6 left-6 w-48" src={Logo} alt="" />
    <div className="mt-10 pl-4 lg:pl-10 w-full lg:w-11/12 ">
      <h1 className="text-3xl font-bold text-dark-gray leading-10">
        Set up your AI assistant in just 5 minutes
      </h1>
      <p className="mt-4 text-base text-light-gray">
        Set up your AI assistant in just 5 minutes
      </p>
      <div className="mt-6 mb-10">
        <div className="flex mb-5">
          <img src={TickIcon} alt="" />
          <p className="ml-2 text-base text-light-gray">
            Boost your revenue by up to 24%
          </p>
        </div>
        <div className="flex mb-5">
          <img src={TickIcon} alt="" />
          <p className="ml-2 text-base text-light-gray">
            Get 24/7 live chat at a fraction of the cost
          </p>
        </div>
        <div className="flex mb-5">
          <img src={TickIcon} alt="" />
          <p className="ml-2 text-base text-light-gray">
            Have the AI agent answer based on your custom knowledge
          </p>
        </div>
      </div>
      <p className="mb-10 text-xl text-dark-gray font-bold">
        Trusted by 1000s of companies
      </p>
      <div className="flex overflow-auto hide-scroll-bar">
        <img className="mr-8" src={NextonLogo} alt="" />
        <img className="mr-8" src={StrategicSystemsLogo} alt="" />
        <img className="mr-8" src={ClearBoxLogo} alt="" />
      </div>
    </div>
  </div>
  )
}

export default SignInSignupSideDetail