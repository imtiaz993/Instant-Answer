import React from "react";
import CustomButton from "../../../../../Common/CustomButton";
import InfoIcon from "../../../../../Assets/icons/info.svg";

const ChartsUsage = () => {
  const totalChart = 300;
  const chartsUsed = 270;
  const chartsUsage = (chartsUsed / totalChart) * 100;

  return (
    <div className="px-4 md:px-6 py-10 bg-white border border-[rgba(102, 112, 133, 0.2]  rounded-xl">
      <div className="flex justify-between items-center">
        <p className="text-base font-bold text-dark-gray">Usage</p>
        <img src={InfoIcon} alt="" />
      </div>
      <div className="mt-2">
        <p className="text-sm font-medium text-dark-gray">Remaining Chats</p>
        <div className="bg-[#FFE7EE] rounded-full h-4 mt-2">
          <div
            className={`bg-[#F15464] rounded-full h-4`}
            style={{ width: chartsUsage + "%" }}
          ></div>
        </div>
      </div>
      <div className="border-y border-dark-border mt-8 mb-3">
        <div className="flex justify-between items-center my-2">
          <p className="text-sm font-medium text-dark-gray">
            Chats in your plan
          </p>
          <p className="text-sm font-bold text-dark-gray">{totalChart}</p>
        </div>
        <div className="flex justify-between items-center my-2">
          <p className="text-sm font-medium text-dark-gray">Chats in used</p>
          <p className="text-sm font-bold text-dark-gray">{chartsUsed}</p>
        </div>
      </div>
      <div className="flex justify-between items-center my-2 mb-3">
        <p className="text-sm font-medium text-dark-gray">Chats remaining</p>
        <p className="text-sm font-bold text-dark-gray">
          {totalChart - chartsUsed}
        </p>
      </div>
      <div>
        <CustomButton title="Upgrade" styles={"py-2 px-3"} />
      </div>
    </div>
  );
};

export default ChartsUsage;
