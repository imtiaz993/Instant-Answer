import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../Assets/icons/logo.svg";
import ProfileIcon from "../../Assets/icons/profile.svg";
import WebIcon from "../../Assets/icons/web.svg";
import DatabaseIcon from "../../Assets/icons/database.svg";
import DocumentIcon from "../../Assets/icons/document.svg";
import SocialIcon from "../../Assets/icons/social.svg";
import SnippetIcon from "../../Assets/icons/snippet.svg";

const OnboardingLayout = ({ children }) => {
  const navigate = useNavigate();
  const locationArray = useLocation().pathname.split("/");
  const currentPath = locationArray[locationArray.length - 1];
  let previousRoute = "";
  let nextRoute = "";
  let step = 0;
  switch (currentPath) {
    case "profile":
      previousRoute = "/onboarding/profile";
      nextRoute = "/onboarding/webpage";
      step = 0;
      break;
    case "webpage":
      previousRoute = "/onboarding/profile";
      nextRoute = "/onboarding/databases";
      step = 1;
      break;
    case "databases":
      previousRoute = "/onboarding/webpage";
      nextRoute = "/onboarding/documents";
      step = 2;
      break;
    case "documents":
      previousRoute = "/onboarding/databases";
      nextRoute = "/onboarding/socials";
      step = 3;
      break;
    case "socials":
      previousRoute = "/onboarding/documents";
      nextRoute = "/onboarding/snippets";
      step = 4;
      break;
    case "snippets":
      previousRoute = "/onboarding/socials";
      nextRoute = "/onboarding/snippets";
      step = 5;
      break;
    default:
      break;
  }

  const Tabs = [
    { title: "Profile", icon: ProfileIcon },
    { title: "Web Page", icon: WebIcon },
    { title: "Databases", icon: DatabaseIcon },
    { title: "Documents", icon: DocumentIcon },
    { title: "Socials", icon: SocialIcon },
    { title: "Snippets", icon: SnippetIcon },
  ];

  return (
    <div className="bg-[#F5F5F5] ">
      <div className="w-4/5 py-10 mx-auto">
        <img className="mx-auto mb-8" src={Logo} alt="" />
        <div className="p-8 bg-white border border-[rgba(102, 112, 133, 0.2]  rounded-xl">
          <h1 className="mb-5 text-4xl font-bold text-[#29303D]">
            Welcome to Your InstantAnswer Trial!
          </h1>
          <p className="text-base text-[#000000]">
            We're excited to have you on board! To help your AI chat agent
            better understand your business and provide top-notch service,
          </p>
          <p className="mb-8 text-base text-[#000000]">
            please provide some information about your company and offerings.
          </p>
          <div className="flex">
            {Tabs.map((item, index) => (
              <div
                className={`flex px-4 pb-1 whitespace-nowrap border-b-2${
                  index === step ? " border-[#7F56D9]" : ""
                }`}
              >
                <img src={item.icon} alt="" />
                <p
                  className={`ml-2 text-sm font-bold ${
                    index === step
                      ? "text-[#7F56D9]"
                      : "text-[#667085]"
                  }`}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <div className="min-h-16">{children}</div>
        </div>
        <div className="mt-8 flex justify-between items-center">
          <button
            className="py-3 text-[#000000] text-base"
            onClick={() => {
              navigate(previousRoute);
            }}
          >
            Back
          </button>
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
          <div>
            <button
              className="py-3 text-[#000000] text-base"
              onClick={() => {
                navigate(nextRoute);
              }}
            >
              Skip
            </button>
            <button
              className="ml-10 bg-[#7F56D9] rounded-lg py-2 px-5  border-none text-white text-sm font-medium"
              onClick={() => {
                navigate(nextRoute);
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
