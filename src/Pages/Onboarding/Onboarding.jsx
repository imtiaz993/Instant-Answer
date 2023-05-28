import React, { useState } from "react";
import OnboardingLayout from "./Layout/OnboardingLayout";
import Databases from "../../Common/Tabs/Databases/Databases";
import WebPage from "../../Common/Tabs/WebPage/WebPage";
import Documents from "../../Common/Tabs/Documents/Documents";
import Profile from "../../Common/Tabs/Profile/Profile";
import Sinppets from "../../Common/Tabs/Sinppets/Sinppets";
import Socials from "../../Common/Tabs/Socials/Socials";
import { toast } from "react-toastify";
import axios from "axios";

const Onboarding = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [step, setStep] = useState(0);
  const [profile, setProfile] = useState({
    name: "",
    description: "",
    contact_you: "",
  });
  const [loading, setLoading] = useState(false);

  const Tabs = [
    {
      title: "Profile",
      component: (
        <Profile hideText={true} profile={profile} setProfile={setProfile} />
      ),
    },
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

  const API_URI = `${process.env.REACT_APP_API_URI}/api/profileview/`;
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const handleUploadProfile = () => {
    setLoading(true);
    axios
      .post(API_URI, profile, config)
      .then((response) => {
        setLoading(false);
        toast.success(response.data.message);
        console.log(response.data);
        setStep(step + 1);
        setActiveTab(Tabs[step + 1].title);
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error?.response?.data?.message ?? error.message);
        console.error(error.message);
      });
  };

  return (
    <OnboardingLayout
      setActiveTab={setActiveTab}
      step={step}
      setStep={setStep}
      handleNextClick={activeTab === "Profile" ? handleUploadProfile : null}
      loading={loading}
    >
      {getCurrentTab()}
    </OnboardingLayout>
  );
};

export default Onboarding;
