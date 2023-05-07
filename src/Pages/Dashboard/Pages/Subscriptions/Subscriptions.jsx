import React from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import Plan from "./Components/Plan";
import ChartsUsage from "./Components/ChartsUsage";
import Enterprise from "./Components/Enterprise";

const Subscriptions = () => {
  return (
    <DashboardLayout>
      <div>
        <h1 className="mb-4 text-xl font-bold text-dark-gray">
          Your Subscription
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Plan />
        <ChartsUsage />
      </div>
      <Enterprise />
    </DashboardLayout>
  );
};

export default Subscriptions;
