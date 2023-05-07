import React from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import Agent from "./Components/Agent";
import Widget from "./Components/Widget";

const Settings = () => {
  return (
    <DashboardLayout>
      <Agent />
      <Widget />
    </DashboardLayout>
  );
};

export default Settings;
