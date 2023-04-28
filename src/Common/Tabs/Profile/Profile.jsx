import React from "react";
import CustomInput from "../../../Common/CustomInput";

const Profile = () => {
  return (
    <>
      <div>
        <div className="my-8">
          <div className="flex">
            <h1 className="w-7 h-7 inline-flex items-center justify-center text-sm font-bold text-white bg-[#EEBC59] rounded-full">
              1
            </h1>
            <h1 className="ml-2 inline-block text-base font-bold text-[#29303D]">
              Product / service / Company name
            </h1>
          </div>
          <p className="mt-3 mb-2 text-sm font-medium text-[#29303D]">
            We're excited to have you on board! To help your AI chat agent
            better understand your business and provide top-notch service,
            please provide some information about your company and offerings.
          </p>
          <CustomInput placeholder="Enter.." type="text" />
        </div>
        <div className="my-8">
          <div className="mb-3 flex">
            <h1 className="w-7 h-7 inline-flex items-center justify-center text-sm font-bold text-white bg-[#EEBC59] rounded-full">
              2
            </h1>
            <h1 className="ml-2 inline-block text-base font-bold text-[#29303D]">
              Enter a short description
            </h1>
          </div>
          <CustomInput placeholder="Enter.." type="text" />
        </div>
        <div>
          <div className="mb-3 flex">
            <h1 className="w-7 h-7 inline-flex items-center justify-center text-sm font-bold text-white bg-[#EEBC59] rounded-full">
              3
            </h1>
            <h1 className="  ml-2 inline-block text-base font-bold text-[#29303D]">
              How can people contact you?
            </h1>
          </div>
          <CustomInput placeholder="Enter.." type="text" />
        </div>
      </div>
    </>
  );
};

export default Profile;
