import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "../Pages/Signup/Signup";
import SignIn from "../Pages/SignIn/SignIn";
import Billing from "../Pages/Billing/Billing";
import Onboarding from "../Pages/Onboarding/Onboarding";
import Dashboard from "../Pages/Dashboard/Pages/Dashboard/Dashboard";
import Inbox from "../Pages/Dashboard/Pages/Inbox/Inbox";
import KnowledgeBase from "../Pages/Dashboard/Pages/Knowledge Base/KnowledgeBase";
import Recommendations from "../Pages/Dashboard/Pages/Recommendations/Recommendations";
import Integrations from "../Pages/Dashboard/Pages/Integrations/Integrations";
import Settings from "../Pages/Dashboard/Pages/Settings/Settings";
import Subscriptions from "../Pages/Dashboard/Pages/Subscriptions/Subscriptions";

const WebRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" replace />} />
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
