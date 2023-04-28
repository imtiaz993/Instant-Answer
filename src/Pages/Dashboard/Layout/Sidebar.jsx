import React, { useState } from "react";
import Logo from "../../../Assets/icons/logo.svg";
import DashboardIcon from "../../../Assets/icons/dashboard.svg";
import KnowledgeBaseIcon from "../../../Assets/icons/knowledge-base.svg";
import InboxIcon from "../../../Assets/icons/inbox.svg";
import RecommendationsIcon from "../../../Assets/icons/recommendations.svg";
import IntegrationsIcon from "../../../Assets/icons/integrations.svg";
import SettingsIcon from "../../../Assets/icons/settings.svg";
import SubscriptionsIcon from "../../../Assets/icons/subscriptions.svg";
import CloseIcon from "../../../Assets/icons/close.svg";

const Sidebar = ({ toggleNavber, setToggleNavbar }) => {
  const [active, setActive] = useState("Inbox");

  const pages = [
    { name: "Dashboard", icon: DashboardIcon },
    { name: "Inbox", icon: InboxIcon },
    { name: "Knowledge Base", icon: KnowledgeBaseIcon },
    { name: "Recommendations", icon: RecommendationsIcon },
    { name: "Integrations", icon: IntegrationsIcon },
    { name: "Settings", icon: SettingsIcon },
    { name: "Subscription", icon: SubscriptionsIcon },
  ];
  return (
    <div
      className={`absolute md:static ${
        toggleNavber ? "block h-screen" : "hidden"
      } md:block  w-64 md:w-72 border-r border-[rgba(0, 0, 0, 0.08)] bg-white`}
    >
      <div className="hidden md:block w-full px-4 pl-7 py-5 pb-[17px] border-b border-[rgba(0, 0, 0, 0.08)]">
        <img className="w-3/4" src={Logo} alt="" />
      </div>
      <div className="flex flex-row-reverse justify-between md:block w-full px-3 md:px-6 mt-20 md:mt-6">
        <div
          onClick={() => {
            setToggleNavbar(false);
          }}
          className="md:hidden"
        >
          <img className="-mt-2" src={CloseIcon} alt="" />
        </div>
        <div>
          {pages.map((item) => (
            <div
              className={`py-2 px-3 mb-1 flex items-center ${
                item.name === active && "bg-[#7F56D9]"
              } rounded-md cursor-pointer`}
              onClick={() => {
                setActive(item.name);
              }}
            >
              <img src={item.icon} alt="" />
              <p
                className={`ml-2 text-base whitespace-nowrap ${
                  item.name === active ? "text-white" : "text-[#667085]"
                }  font-medium`}
              >
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
