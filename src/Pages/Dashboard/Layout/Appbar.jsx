import React from "react";
import ChartIcon from "../../../Assets/icons/chart.svg";
import InfoIcon from "../../../Assets/icons/dashboard-info.svg";
import ProfileIcon from "../../../Assets/icons/dashobard-profile.svg";
import NavbarTogleIcon from "../../../Assets/icons/navbar-toggle.svg";
import Logo from "../../../Assets/icons/logo.svg";

const Appbar = ({ setToggleNavbar }) => {
  return (
    <div className="relative bg-white border-b border-[rgba(0, 0, 0, 0.08)] flex justify-between md:justify-end items-center py-1 pb-[3px] px-3">
      <div className="md:hidden flex items-center">
        <img
          onClick={() => {
            setToggleNavbar(true);
          }}
          className=""
          src={NavbarTogleIcon}
          alt=""
        />
        <img className="mx-auto w-28 ml-2" src={Logo} alt="" />
      </div>
      <div className="flex items-center justify-end">
        <div className="mr-1">
          <p className="text-xs font-medium text-[#29303D]">Usage</p>
          <p className="text-[10px] text-[#29303D]">240/300 Chats</p>
        </div>
        <img className="w-1/4 md:w-auto p-1" src={ChartIcon} alt="" />
        <img className="w-1/6 md:w-auto -ml-1 mr-2" src={InfoIcon} alt="" />
        <img className="w-1/6 md:w-auto md:mr-4" src={ProfileIcon} alt="" />
      </div>
    </div>
  );
};

export default Appbar;
