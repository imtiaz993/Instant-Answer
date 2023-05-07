import React from "react";
import CustomButton from "../../../../../Common/CustomButton";
import InfoIcon from "../../../../../Assets/icons/info.svg";

const Plan = () => {
  return (
    <div className="px-4 md:px-6 py-10 bg-white border border-[rgba(102, 112, 133, 0.2]  rounded-xl">
      <div className="flex justify-between items-center">
        <p className="text-base font-bold text-dark-gray">Premium Plan</p>
        <img src={InfoIcon} alt="" />
      </div>
      <div className="border-y border-dark-border mt-8 mb-3">
        <div className="flex justify-between items-center my-2">
          <p className="text-sm font-medium text-dark-gray">Next billing on</p>
          <p className="text-sm font-bold text-dark-gray">24/04/2023</p>
        </div>
        <div className="flex justify-between items-center my-2">
          <p className="text-sm font-medium text-dark-gray">
            Next billing amount{" "}
          </p>
          <p className="text-sm font-bold text-dark-gray">$98</p>
        </div>
        <div className="flex justify-between items-center my-2">
          <p className="text-sm font-medium text-dark-gray">
            Billing frequency
          </p>
          <p className="text-sm font-bold text-dark-gray">Monthly</p>
        </div>
      </div>
      <div>
        <p className="text-sm font-medium text-active-color underline mb-8">
          Get annual subscription (save 20%)
        </p>
        <CustomButton title="Manage Your Plan" styles={"py-2 px-3"} />
      </div>
    </div>
  );
};

export default Plan;
