import React from "react";
import CustomButton from "../../../../../Common/CustomButton";
import TickIcon from "../../../../../Assets/icons/tick.svg";


const Enterprise = () => {
  return (
    <div className="mt-3 px-4 md:px-6 py-10 bg-[#F8F8F8] border border-darker-border  rounded-xl">
      <h1 className="text-3xl font-semibold text-dark-gray">Enterprise</h1>
      <p className="text-sm text-[#64748B]">For businesses who need more!</p>
      <div className="flex justify-center flex-col items-center">
        <div className="my-8">
          <h1 className="text-2xl font-bold text-[#141A22]">Do you want a</h1>
          <h1 className="text-2xl font-bold text-[#141A22]">custom plan?</h1>
        </div>
        <CustomButton title="Talk to Sales" styles={"w-full justify-center"} />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-x-6">
          <div className="flex items-start flex-nowrap mt-5">
            <img className="mr-1 w-4 h-4 mt-1" src={TickIcon} alt="" />
            <p className="text-sm md:text-base font-medium txet-dark-heading">
              Bespoke machine learning solutions tailored for your growing
              business
            </p>
          </div>
          <div className="flex items-start flex-nowrap mt-5">
            <img className="mr-1 w-4 h-4 mt-1" src={TickIcon} alt="" />
            <p className="text-sm md:text-base font-medium txet-dark-heading">
              Exclusive attributes: distinct AI persona, interactive style,
              webhooks, connections, and more.
            </p>
          </div>
          <div className="flex items-start flex-nowrap mt-5">
            <img className="mr-1 w-4 h-4 mt-1" src={TickIcon} alt="" />
            <p className="text-sm md:text-base font-medium txet-dark-heading">
              Access to APIs and personalized integrations.
            </p>
          </div>
          <div className="flex items-start flex-nowrap mt-5">
            <img className="mr-1 w-4 h-4 mt-1" src={TickIcon} alt="" />
            <p className="text-sm md:text-base font-medium txet-dark-heading">
              Continuous upkeep and round-the-clock client assistance through
              email, Slack, Zoom, and telephone.
            </p>
          </div>
          <div className="flex items-start flex-nowrap mt-5">
            <img className="mr-1 w-4 h-4 mt-1" src={TickIcon} alt="" />
            <p className="text-sm md:text-base font-medium txet-dark-heading">
              Adaptable Service Level Agreement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enterprise;
