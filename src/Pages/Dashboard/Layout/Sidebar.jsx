import React, { useState } from "react";
import Logo from "../../../Assets/icons/logo.svg";
import DashboardIcon from "../../../Assets/icons/dashboard.svg";
import KnowledgeBaseIcon from "../../../Assets/icons/knowledge-base.svg";
import InboxIcon from "../../../Assets/icons/inbox.svg";
import RecommendationsIcon from "../../../Assets/icons/recommendations.svg";
import IntegrationsIcon from "../../../Assets/icons/integrations.svg";
import SettingsIcon from "../../../Assets/icons/settings.svg";
import SubscriptionsIcon from "../../../Assets/icons/subscriptions.svg";

const Sidebar = () => {
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
    <div className="w-1/5 border-r border-[rgba(0, 0, 0, 0.08)]">
      <div className="px-4 pl-7 py-5 pb-[17px] border-b border-[rgba(0, 0, 0, 0.08)]">
        <img className=" w-3/4" src={Logo} alt="" />
      </div>
      <div className="px-4 mt-6">
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
              className={`ml-2 text-base ${
                item.name === active ? "text-white" : "text-[#667085]"
              }  font-medium`}
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
