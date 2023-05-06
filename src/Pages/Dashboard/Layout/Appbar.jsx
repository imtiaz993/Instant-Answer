import React from "react";
import { Doughnut } from "react-chartjs-2";
import InfoIcon from "../../../Assets/icons/dashboard-info.svg";
import ProfileIcon from "../../../Assets/icons/dashobard-profile.svg";
import NavbarTogleIcon from "../../../Assets/icons/navbar-toggle.svg";
import Logo from "../../../Assets/icons/logo.svg";

const Appbar = ({ setToggleNavbar }) => {
  const data = {
    labels: ["Used", "Remaining"],
    datasets: [
      {
        label: "",
        data: [240, 60],
        backgroundColor: ["#B01827", "#D3D3D3"],
        hoverOffset: 0,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
      cutout: '65%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <div className="fixed z-20 w-full lg:w-[calc(100%-288px)] bg-white border-b border-[rgba(0, 0, 0, 0.08)] flex justify-between lg:justify-end items-center h-14 md:h-[65px] pb-[3px] px-3">
      <div className="lg:hidden flex items-center">
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
        <div className="w-7 md:w-8 h-7 md:h-8 mr-1.5">
          <Doughnut data={data} options={options} />
        </div>
        <img className="w-1/6 lg:w-auto mr-2" src={InfoIcon} alt="" />
        <img className="w-1/6 lg:w-auto lg:mr-4" src={ProfileIcon} alt="" />
      </div>
    </div>
  );
};

export default Appbar;
