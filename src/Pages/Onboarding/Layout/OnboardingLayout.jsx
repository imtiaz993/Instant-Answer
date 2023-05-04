import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../Assets/icons/logo.svg";
import ProfileIcon from "../../../Assets/icons/profile.svg";
import WebIcon from "../../../Assets/icons/web.svg";
import DatabaseIcon from "../../../Assets/icons/database.svg";
import DocumentIcon from "../../../Assets/icons/document.svg";
import SocialIcon from "../../../Assets/icons/social.svg";
import SnippetIcon from "../../../Assets/icons/snippet.svg";

const OnboardingLayout = ({ children, setActiveTab, step, setStep }) => {
  const navigate = useNavigate()
  const Tabs = [
    { title: "Profile", icon: ProfileIcon },
    { title: "Web Page", icon: WebIcon },
    { title: "Databases", icon: DatabaseIcon },
    { title: "Documents", icon: DocumentIcon },
    { title: "Socials", icon: SocialIcon },
    { title: "Snippets", icon: SnippetIcon },
  ];

  return (
    <div className="bg-[#FAFAFC]">
      <div className="w-11/12 md:w-4/5 py-6 md:py-10 mx-auto">
        <img
          className="mx-auto mb-6 md:mb-8 w-1/2 md:w-auto"
          src={Logo}
          alt=""
        />
        <div className="px-4 md:px-8 py-8 bg-white border border-[rgba(102, 112, 133, 0.2]  rounded-xl">
          <h1 className="mb-5 text-3xl md:text-4xl font-bold text-[#29303D]">
            Welcome to Your InstantAnswer Trial!
          </h1>
          <p className="text-base text-[#000000]">
            We're excited to have you on board! To help your AI chat agent
            better understand your business and provide top-notch service,
          </p>
          <p className="mb-8 text-base text-[#000000]">
            please provide some information about your company and offerings.
          </p>
          <div className="flex overflow-x-auto -mx-4 md:mx-0 px-2 md:px-0 hide-scroll-bar border-b-2">
            {Tabs.map((item, index) => (
              <div
                className={`flex items-center px-4 pb-1 whitespace-nowrap cursor-pointer ${
                  index === step ? "border-b-2 border-[#7F56D9]" : ""
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
        <div className="md:mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex my-4 md:my-0">
            <button
              className="py-2 text-[#000000] text-base"
              onClick={() => {
                if (step !==0) {
                  setStep(step - 1);
                  setActiveTab(Tabs[step - 1].title);
                }
              }}
            >
              Back
            </button>
            <button
              className="md:hidden ml-10 bg-[#7F56D9] rounded-lg py-2 px-6  border-none text-white text-sm font-medium"
              onClick={() => {
                if (step !==Tabs.length-1) {
                  setStep(step + 1);
                  setActiveTab(Tabs[step + 1].title);
                }
                else{
                  navigate("/dashboard/knowledge-base")
                }
              }}
            >
              Next
            </button>
          </div>
          <div>
            {Array(6)
              .fill()
              .map((item, index) => (
                <span
                  className={`mr-2 w-3 h-3 rounded-full ${
                    index === step ? "bg-[#7F56D9]" : "bg-[#DFD0FF]"
                  } inline-block cursor-default`}
                ></span>
              ))}
          </div>
          <div className="flex">
            <button
              className="py-2 text-[#000000] text-base"
              onClick={() => {
                if (step !==Tabs.length-1) {
                  setStep(step + 1);
                  setActiveTab(Tabs[step + 1].title);
                }
                else{
                  navigate("/dashboard/knowledge-base")
                }
              }}
            >
              Skip
            </button>
            <button
              className="hidden md:block ml-10 bg-[#7F56D9] rounded-lg py-2 px-6  border-none text-white text-sm font-medium"
              onClick={() => {
                if (step !==Tabs.length-1) {
                  setStep(step + 1);
                  setActiveTab(Tabs[step + 1].title);
                }
                else{
                  navigate("/dashboard/knowledge-base")
                }
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingLayout;
