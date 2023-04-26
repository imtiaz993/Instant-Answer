import React, { useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import Databases from "../../../../Common/Tabs/Databases/Databases";
import WebPage from "../../../../Common/Tabs/WebPage/WebPage";
import Documents from "../../../../Common/Tabs/Documents/Documents";
import Profile from "../../../../Common/Tabs/Profile/Profile";
import Sinppets from "../../../../Common/Tabs/Sinppets/Sinppets";
import Socials from "../../../../Common/Tabs/Socials/Socials";

const KnowledgeBase = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [step, setStep] = useState(0);

  const Tabs = [
    { title: "Profile", component: <Profile /> },
    { title: "Web Page", component: <WebPage hideText={true} /> },
    { title: "Databases", component: <Databases hideText={true} /> },
    { title: "Documents", component: <Documents hideText={true} /> },
    { title: "Socials", component: <Socials hideText={true} /> },
    { title: "Snippets", component: <Sinppets hideText={true} /> },
  ];

  const getCurrentTab = () =>
    Tabs.map((item) => {
      if (item.title === activeTab) return item.component;
    });

  return (
    <DashboardLayout setActiveTab={setActiveTab} step={step} setStep={setStep}>
      {getCurrentTab()}
    </DashboardLayout>
  );
};

export default KnowledgeBase;
