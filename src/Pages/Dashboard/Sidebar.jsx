import React from "react";
import Logo from "../../Assets/icons/logo.svg";

const Sidebar = () => {
  return (
    <div className=" border-r border-[rgba(0, 0, 0, 0.08)]">
      <div className="px-4 pl-7 py-6 border-b border-[rgba(0, 0, 0, 0.08)]">
        <img className=" w-3/4" src={Logo} alt="" />
      </div>
      <div className="px-4 mt-6">
        <div className="py-2 px-3 mb-1 bg-[#7F56D9] rounded-md cursor-pointer">
          <img src="" alt="" />
          <p className="text-base text-white font-medium">Dashboard</p>
        </div>
        <div className="py-2 px-3 mb-1 rounded-md cursor-pointer">
          <img src="" alt="" />
          <p className="text-base text-[#667085] font-medium">Inbox</p>
        </div>
        <div className="py-2 px-3 mb-1 rounded-md cursor-pointer">
          <img src="" alt="" />
          <p className="text-base text-[#667085] font-medium">Knowledge Base</p>
        </div>
        <div className="py-2 px-3 mb-1 rounded-md cursor-pointer">
          <img src="" alt="" />
          <p className="text-base text-[#667085] font-medium">
            Recommendations
          </p>
        </div>
        <div className="py-2 px-3 mb-1 rounded-md cursor-pointer">
          <img src="" alt="" />
          <p className="text-base text-[#667085] font-medium">Integrations</p>
        </div>
        <div className="py-2 px-3 mb-1 rounded-md cursor-pointer">
          <img src="" alt="" />
          <p className="text-base text-[#667085] font-medium">Settings</p>
        </div>
      <div className="py-2 px-3 mb-1 rounded-md cursor-pointer">
        <img src="" alt="" />
        <p className="text-base text-[#667085] font-medium">Subscription</p>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
