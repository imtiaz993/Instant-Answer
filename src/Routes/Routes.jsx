import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/Signup/Signup";
import Billing from "../Pages/Billing/Billing";
import KnowledgeBase from "../Pages/Dashboard/Pages/Knowledge Base/KnowledgeBase";
import Onboarding from "../Pages/Onboarding/Modules/Onboarding";
import Settings from "../Pages/Dashboard/Pages/Settings/Settings";
import Integrations from "../Pages/Dashboard/Pages/Integrations/Integrations";

const WebRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/dashboard/knowledge-base" element={<KnowledgeBase />} />
        <Route path="/dashboard/settings" element={<Settings />} />
        <Route path="/dashboard/integrations" element={<Integrations />} />
      </Routes>
    </BrowserRouter>
  );
};

export default WebRoutes;
