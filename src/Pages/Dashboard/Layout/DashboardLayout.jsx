import React from "react";
import Appbar from "./Appbar";
import Sidebar from "./Sidebar";
import ProfileIcon from "../../../Assets/icons/profile.svg";
import WebIcon from "../../../Assets/icons/web.svg";
import DatabaseIcon from "../../../Assets/icons/database.svg";
import DocumentIcon from "../../../Assets/icons/document.svg";
import SocialIcon from "../../../Assets/icons/social.svg";
import SnippetIcon from "../../../Assets/icons/snippet.svg";

const DashboardLayout = ({ children, setActiveTab, step, setStep }) => {
  const Tabs = [
    { title: "Profile", icon: ProfileIcon },
    { title: "Web Page", icon: WebIcon },
    { title: "Databases", icon: DatabaseIcon },
    { title: "Documents", icon: DocumentIcon },
    { title: "Socials", icon: SocialIcon },
    { title: "Snippets", icon: SnippetIcon },
  ];

  return (
    <div className="h-screen overflow-hidden">
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Appbar />

          <div className="bg-[#FAFAFC] h-screen overflow-y-auto pb-16">
            <div className="w-4/5 py-10 pt-6 mx-auto">
              <div>
                <h1 className="mb-4 text-xl font-bold text-[#29303D]">
                  Knowledge base
                </h1>
                <p className="mb-3 text-base text-[#000000]">
                  Right off the bat, your AI chat agent boasts a remarkable
                  grasp of the world and can engage in conversations on a wide
                  array of subjects. To further enhance its capabilities, you
                  can equip it with specialized knowledge about your website,
                  company, products, and more.
                </p>
                <p className="mb-3 text-base text-[#000000]">
                  Discover more: Tips for Structuring Your Knowledge Base (link)
                </p>
                <p className="mb-3 text-base text-[#000000]">
                  Even if you select a different secondary language for your
                  chatbot in Settings, your knowledge base must be in English.
                  Don't worry – your AI chat agent will automatically converse
                  in your chosen language.
                </p>
              </div>
              <div className="p-8 bg-white border border-[rgba(102, 112, 133, 0.2]  rounded-xl">
                <h1 className="mb-1 text-base font-bold text-[#29303D]">
                  Knowledge Base
                </h1>
                <p className="mb-8 text-sm font-medium text-[#29303D]">
                  Select the relevant knowledge tab & edit your knowledge!
                </p>
                <div className="flex">
                  {Tabs.map((item, index) => (
                    <div
                      className={`flex px-4 pb-1 whitespace-nowrap  cursor-pointer border-b-2${
                        index === step ? " border-[#7F56D9]" : ""
                      }`}
                      onClick={() => {
                        setStep(index);
                        setActiveTab(item.title);
                      }}
                    >
                      <img src={item.icon} alt="" />
                      <p
                        className={`ml-2 text-sm font-bold ${
                          index === step ? "text-[#7F56D9]" : "text-[#667085]"
                        }`}
                      >
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="min-h-16">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
