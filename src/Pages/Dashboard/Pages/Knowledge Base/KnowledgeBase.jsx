import React, { useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import Databases from "../../../../Common/Tabs/Databases/Databases";
import WebPage from "../../../../Common/Tabs/WebPage/WebPage";
import Documents from "../../../../Common/Tabs/Documents/Documents";
import Profile from "../../../../Common/Tabs/Profile/Profile";
import Sinppets from "../../../../Common/Tabs/Sinppets/Sinppets";
import Socials from "../../../../Common/Tabs/Socials/Socials";
import ProfileIcon from "../../../../Assets/icons/profile.svg";
import WebIcon from "../../../../Assets/icons/web.svg";
import DatabaseIcon from "../../../../Assets/icons/database.svg";
import DocumentIcon from "../../../../Assets/icons/document.svg";
import SocialIcon from "../../../../Assets/icons/social.svg";
import SnippetIcon from "../../../../Assets/icons/snippet.svg";
import CustomButton from "../../../../Common/CustomButton";
import RefreshIcon from "../../../../Assets/icons/refresh.svg";

const KnowledgeBase = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [step, setStep] = useState(0);

  const Tabs = [
    { title: "Profile", icon: ProfileIcon, component: <Profile /> },
    {
      title: "Web Page",
      icon: WebIcon,
      component: <WebPage hideText={true} />,
    },
    {
      title: "Databases",
      icon: DatabaseIcon,
      component: <Databases hideText={true} />,
    },
    {
      title: "Documents",
      icon: DocumentIcon,
      component: <Documents hideText={true} />,
    },
    {
      title: "Socials",
      icon: SocialIcon,
      component: <Socials hideText={true} />,
    },
    {
      title: "Snippets",
      icon: SnippetIcon,
      component: <Sinppets hideText={true} />,
    },
  ];

  const getCurrentTab = () =>
    Tabs.map((item) => {
      if (item.title === activeTab) return item.component;
    });

  return (
    <DashboardLayout>
      <div>
        <h1 className="mb-4 text-xl font-bold text-dark-gray">
          Knowledge base
        </h1>
        <p className="mb-3 text-base text-black">
          Right off the bat, your AI chat agent boasts a remarkable grasp of the
          world and can engage in conversations on a wide array of subjects. To
          further enhance its capabilities, you can equip it with specialized
          knowledge about your website, company, products, and more.
        </p>
        <p className="mb-3 text-base text-black">
          Discover more: Tips for Structuring Your Knowledge Base (link)
        </p>
        <p className="mb-3 text-base text-black">
          Even if you select a different secondary language for your chatbot in
          Settings, your knowledge base must be in English. Don't worry – your
          AI chat agent will automatically converse in your chosen language.
        </p>
      </div>
      <div className="px-4 md:px-8 py-8 bg-white border border-[rgba(102, 112, 133, 0.2]  rounded-xl">
        <div className="lg:flex justify-between ">
          <div>
            <h1 className="mb-2 text-base font-bold text-dark-gray">
              Knowledge Base
            </h1>
            <p className="mb-4 lg:mb-8 text-sm font-medium text-dark-gray">
              Select the relevant knowledge tab & edit your knowledge!
            </p>
          </div>
          <div>
            <div className="flex items-center lg:justify-end">
              <CustomButton
                title={"Retrain Agent"}
                prefix={RefreshIcon}
                styles="py-2 px-4"
              />
            </div>
            <div className="flex items-center mt-4 mb-4 lg:mb-0 lg:mt-2 lg:justify-end lg:w-60 text-left">
              <span className="w-3 h-3 inline-block bg-old-update-circle rounded-full"></span>
              <p className="ml-1 text-sm font-medium text-last-upload">
                5 Changes Since Last Retraining
              </p>
            </div>
          </div>
        </div>
        <div className="flex overflow-x-auto -mx-4 md:mx-0 px-2 md:px-0 border-b-2 hide-scroll-bar">
          {Tabs.map((item, index) => (
            <div
              className={`flex items-center px-4 pb-1 whitespace-nowrap  cursor-pointer ${
                index === step ? " border-b-2 border-active-color" : ""
              }`}
              onClick={() => {
                setStep(index);
                setActiveTab(item.title);
              }}
            >
              <img src={item.icon} alt="" />
              <p
                className={`ml-2 text-sm font-bold ${
                  index === step ? "text-active-color" : "text-light-gray"
                }`}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <div className="min-h-16"> {getCurrentTab()}</div>
      </div>
    </DashboardLayout>
  );
};

export default KnowledgeBase;
