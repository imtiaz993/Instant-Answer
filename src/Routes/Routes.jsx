import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/Signup/Signup";
import Billing from "../Pages/Billing/Billing";
import Profile from "../Pages/Onboarding/Profile/Profile";
import WebPage from "../Pages/Onboarding/WebPage/WebPage";
import Databases from "../Pages/Onboarding/Databases/Databases";
import Documents from "../Pages/Onboarding/Documents/Documents";
import Socials from "../Pages/Onboarding/Socials/Socials";
import Sinppets from "../Pages/Onboarding/Sinppets/Sinppets";
import KnowledgeBase from "../Pages/Dashboard/Knowledge Base/KnowledgeBase";

const WebRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/onboarding/profile" element={<Profile />} />
        <Route path="/onboarding/webpage" element={<WebPage />} />
        <Route path="/onboarding/databases" element={<Databases />} />
        <Route path="/onboarding/documents" element={<Documents />} />
        <Route path="/onboarding/socials" element={<Socials />} />
        <Route path="/onboarding/snippets" element={<Sinppets />} />
        <Route path="/dashboard/knowledge-base" element={<KnowledgeBase />} />
      </Routes>
    </BrowserRouter>
  );
};

export default WebRoutes;
