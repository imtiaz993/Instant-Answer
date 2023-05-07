import React from "react";
import DonnaPicture from "../../../../../Assets/icons/user.png";
import FilterIcon from "../../../../../Assets/icons/filter.svg";
import CalenderIcon from "../../../../../Assets/icons/calender.svg";

const UserBar = () => {
  return (
    <div className="md:flex justify-between">
      <div className="flex">
        <div>
          <img
            src={DonnaPicture}
            alt=""
            className="w-13 h-13 rounded-full inline-block"
          />
        </div>
        <div className="ml-3">
          <h1 className="text-lg font-bold text-dark-heading">
            Hey Donna Jones! 👋
          </h1>
          <p className="text-sm text-dashboard-primary-text">
            Here's what your AI agent has been up to lately
          </p>
        </div>
      </div>
      <div className="flex mt-4 md:mt-0">
        <div className="bg-white border border-light-gray rounded-md px-4 h-10 flex items-center justify-center cursor-pointer">
          <img src={CalenderIcon} alt="" />
          <p className="ml-1 text-sm font-medium text-[#52525B]">
            Yesterday (Jan 5)
          </p>
        </div>
        <div className="ml-4 bg-white border border-light-gray rounded-md w-11 h-10 flex items-center justify-center cursor-pointer">
          <img src={FilterIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default UserBar;
