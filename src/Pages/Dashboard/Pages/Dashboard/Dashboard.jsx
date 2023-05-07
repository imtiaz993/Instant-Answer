import React from "react";
import DashboardLayout from "../../Layout/DashboardLayout";

import BarChart from "./Components/BarChart";
import ReviewRecomendedChats from "./Components/ReviewRecomendedChats";
import AllChats from "./Components/AllChats";
import StatsCards from "./Components/StatsCards";
import UserBar from "./Components/UserBar";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <UserBar />
      <StatsCards />
      <div className="md:flex gap-5 mb-5 md:h-[380px] overflow-hidden">
        <BarChart />
        <ReviewRecomendedChats />
      </div>
      <AllChats />
    </DashboardLayout>
  );
};

export default Dashboard;
