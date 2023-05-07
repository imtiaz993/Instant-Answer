import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../../Assets/icons/logo.svg";
import DashboardIcon from "../../../Assets/icons/dashboard.svg";
import KnowledgeBaseIcon from "../../../Assets/icons/knowledge-base.svg";
// import InboxIcon from "../../../Assets/icons/inbox.svg";
import RecommendationsIcon from "../../../Assets/icons/recommendations.svg";
import IntegrationsIcon from "../../../Assets/icons/integrations.svg";
import SettingsIcon from "../../../Assets/icons/settings.svg";
import SubscriptionsIcon from "../../../Assets/icons/subscriptions.svg";
import CloseIcon from "../../../Assets/icons/close.svg";

const Sidebar = ({ toggleNavber, setToggleNavbar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathArray = location.pathname.split("/");
  const currentPath = pathArray[pathArray.length - 1].replace(/-/g, " ");

  const pages = [
    { name: "Dashboard", icon: DashboardIcon },
    { name: "Inbox", icon: KnowledgeBaseIcon },
    { name: "Knowledge Base", icon: KnowledgeBaseIcon },
    { name: "Recommendations", icon: RecommendationsIcon },
    { name: "Integrations", icon: IntegrationsIcon },
    { name: "Settings", icon: SettingsIcon },
    { name: "Subscriptions", icon: SubscriptionsIcon },
  ];
  return (
    <div
      className={`absolute z-10 lg:static ${
        toggleNavber ? "block h-screen" : "hidden"
      } lg:block  w-64 lg:w-72 border-r border-[rgba(0, 0, 0, 0.08)] bg-white`}
    >
      <div className="hidden lg:block w-full px-4 pl-7 py-5 pb-[17px] border-b border-[rgba(0, 0, 0, 0.08)]">
        <img className="w-3/4" src={Logo} alt="" />
      </div>
      <div className="flex flex-row-reverse justify-between lg:block w-full px-3 lg:px-6 mt-20 lg:mt-6">
        <div
          onClick={() => {
            setToggleNavbar(false);
          }}
          className="lg:hidden"
        >
          <img className="-mt-3" src={CloseIcon} alt="" />
        </div>
        <div>
          {pages.map((item) => (
            <div
              className={`py-2 px-3 mb-1 flex items-center ${
                item.name.toLowerCase() === currentPath && "bg-active-color"
              } rounded-md cursor-pointer`}
              onClick={() => {
                navigate(
                  `/dashboard/${item.name.toLowerCase().replace(/ /g, "-")}`
                );
              }}
            >
              <img src={item.icon} alt="" />
              <p
                className={`ml-2 text-base whitespace-nowrap ${
                  item.name.toLowerCase() === currentPath
                    ? "text-white"
                    : "text-light-gray"
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
