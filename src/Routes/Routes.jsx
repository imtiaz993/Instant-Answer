import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/Signup/Signup";
import Billing from "../Pages/Billing/Billing";
import Onboarding from "../Pages/Onboarding/Modules/Onboarding";
import Dashboard from "../Pages/Dashboard/Pages/Dashboard/Dashboard";
import Inbox from "../Pages/Dashboard/Pages/Inbox/Inbox";
import KnowledgeBase from "../Pages/Dashboard/Pages/Knowledge Base/KnowledgeBase";
import Recommendations from "../Pages/Recommendations/Recommendations";
import Integrations from "../Pages/Dashboard/Pages/Integrations/Integrations";
import Settings from "../Pages/Dashboard/Pages/Settings/Settings";
import Subscriptions from "../Pages/Dashboard/Pages/Subscriptions/Subscriptions";
import SignIn from "../Pages/SignIn/SignIn";

const WebRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/dashboard/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/inbox" element={<Inbox />} />
        <Route path="/dashboard/knowledge-base" element={<KnowledgeBase />} />
        <Route
          path="/dashboard/recommendations"
          element={<Recommendations />}
        />
        <Route path="/dashboard/integrations" element={<Integrations />} />
        <Route path="/dashboard/settings" element={<Settings />} />
        <Route path="/dashboard/subscriptions" element={<Subscriptions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default WebRoutes;
