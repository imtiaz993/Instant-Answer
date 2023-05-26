import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import InfoIcon from "../../../Assets/icons/dashboard-info.svg";
import ProfileIcon from "../../../Assets/icons/dashobard-profile.svg";
import NavbarTogleIcon from "../../../Assets/icons/navbar-toggle.svg";
import Logo from "../../../Assets/icons/logo.svg";
import axios from "axios";
import { toast } from "react-toastify";

const Appbar = ({ setToggleNavbar }) => {
  const [usage, setUsage] = useState("");
  const [loading, setLoading] = useState(false);
  const API_URI = "https://appi.instantanswer.co/api/dashboard/ddash/";
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const getUsage = () => {
    setLoading(true);
    axios
      .post(API_URI, {}, config)
      .then((response) => {
        setUsage(response.data.usage);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error?.response?.data?.message ?? error.message);
        console.error(error.message);
      });
  };

  useEffect(() => {
    getUsage();
  }, []);

  const data = {
    labels: ["Used", "Remaining"],
    datasets: [
      {
        label: "",
        data: [usage.used ?? 0, usage.available - usage.used ?? 0],
        backgroundColor: ["#B01827", "#D3D3D3"],
        hoverOffset: 0,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "65%",
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
          <p className="text-xs font-medium text-dark-gray">Usage</p>
          {usage && (
            <p className="text-[10px] text-dark-gray">
              {usage.used}/{usage.available} Chats
            </p>
          )}
          {loading && <p className="text-[10px] text-dark-gray">Loading</p>}
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
