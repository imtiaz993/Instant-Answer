import React, { useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import Plan from "./Components/Plan";
import ChartsUsage from "./Components/ChartsUsage";
import Enterprise from "./Components/Enterprise";
import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Subscriptions = () => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const API_URI = "https://appi.instantanswer.co/api/user/";
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const getUser = () => {
    setLoading(true);
    axios
      .get(API_URI, config)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error?.response?.data?.message??error.message);
        console.error(error.message);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <DashboardLayout>
      <div>
        <h1 className="mb-4 text-xl font-bold text-dark-gray">
          Your Subscription
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Plan plan={user.subscription_plan} getAPIloading={loading}/>
        <ChartsUsage />
      </div>
      <Enterprise />
    </DashboardLayout>
  );
};

export default Subscriptions;
