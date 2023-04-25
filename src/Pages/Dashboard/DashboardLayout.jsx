import React from "react";
import Appbar from "./Appbar";
import Sidebar from "./Sidebar";
import OnboardingLayout from "../Onboarding/OnboardingLayout";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Appbar />
          <OnboardingLayout>{children}</OnboardingLayout>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
