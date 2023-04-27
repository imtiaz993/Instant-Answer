import React from "react";
import Appbar from "./Appbar";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Appbar />
          <div className="bg-[#FAFAFC] h-screen overflow-y-auto pb-16">
            <div className="w-4/5 py-10 pt-6 mx-auto">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
