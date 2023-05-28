import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";

import BarChart from "./Components/BarChart";
import ReviewRecomendedChats from "./Components/ReviewRecomendedChats";
import AllChats from "./Components/AllChats";
import StatsCards from "./Components/StatsCards";
import UserBar from "./Components/UserBar";
import axios from "axios";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [dashboard, setDashboard] = useState("");
  const [loading, setLoading] = useState(false);
  const API_URI = `${process.env.REACT_APP_API_URI}/api/dashboard/ddash/`;
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const getDashboard = () => {
    setLoading(true);
    axios
      .post(API_URI, {}, config)
      .then((response) => {
        setDashboard(response.data);
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
    getDashboard();
  }, []);

  return (
    <DashboardLayout>
      {dashboard && (
        <>
          <UserBar />
          <StatsCards dashboard={dashboard} />
          <div className="md:flex gap-5 mb-5 md:h-[380px] overflow-hidden">
            <BarChart dashboard={dashboard}/>
            <ReviewRecomendedChats />
          </div>
          <AllChats dashboard={dashboard} />
        </>
      )}
      {loading && <p>Loading ...</p>}
    </DashboardLayout>
  );
};

export default Dashboard;
