import React, { useState } from "react";
import OnboardingLayout from "./Layout/OnboardingLayout";
import Databases from "../../Common/Tabs/Databases/Databases";
import WebPage from "../../Common/Tabs/WebPage/WebPage";
import Documents from "../../Common/Tabs/Documents/Documents";
import Profile from "../../Common/Tabs/Profile/Profile";
import Sinppets from "../../Common/Tabs/Sinppets/Sinppets";
import Socials from "../../Common/Tabs/Socials/Socials";

const Onboarding = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [step, setStep] = useState(0);

  const Tabs = [
    { title: "Profile", component: <Profile hideText={true}/> },
    { title: "Web Page", component: <WebPage /> },
    { title: "Databases", component: <Databases /> },
    { title: "Documents", component: <Documents /> },
    { title: "Socials", component: <Socials /> },
    { title: "Snippets", component: <Sinppets /> },
  ];

  const getCurrentTab = () =>
    Tabs.map((item) => {
      if (item.title === activeTab) return item.component;
    });

  return (
    <OnboardingLayout setActiveTab={setActiveTab} step={step} setStep={setStep}>
      {getCurrentTab()}
    </OnboardingLayout>
  );
};

export default Onboarding;
