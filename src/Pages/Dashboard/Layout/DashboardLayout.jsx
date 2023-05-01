import React, { useEffect, useState } from "react";
import Appbar from "./Appbar";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  const [toggleNavber, setToggleNavbar] = useState(false);
  useEffect(() => {
    if (toggleNavber) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [toggleNavber]);

  return (
    <div className="h-screen overflow-hidden">
      <div className="flex">
        <Sidebar
          toggleNavber={toggleNavber}
          setToggleNavbar={setToggleNavbar}
        />
        <div className="w-full lg:w-[calc(100%-288px)]">
          <Appbar setToggleNavbar={setToggleNavbar} />
          <div className="bg-[#FAFAFC] h-screen overflow-y-auto pb-16 pt-14 lg:pt-16">
            <div className="w-11/12 lg:px-8 py-10 pt-6 mx-auto">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
