import React from "react";
import ChartIcon from "../../../Assets/icons/chart.svg";
import InfoIcon from "../../../Assets/icons/dashboard-info.svg";
import ProfileIcon from "../../../Assets/icons/dashobard-profile.svg";

const Appbar = () => {
  return (
    <div className="bg-white border-b border-[rgba(0, 0, 0, 0.08)] flex justify-end items-center py-1">
      <div className="mr-1">
        <p className="text-xs font-medium text-[#29303D]">Usage</p>
        <p className="text-[8px] text-[#29303D]">240/300 Chats</p>
      </div>
      <img className="" src={ChartIcon} alt="" />
      <img className="mr-2" src={InfoIcon} alt="" />
      <img className="mr-4" src={ProfileIcon} alt="" />
    </div>
  );
};

export default Appbar;
