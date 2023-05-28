import React, { useState } from "react";
import CustomButton from "../../../../../Common/CustomButton";
import InfoIcon from "../../../../../Assets/icons/info.svg";
import axios from "axios";
import { toast } from "react-toastify";

const Plan = ({ plan, getAPIloading }) => {
  const [loading, setLoading] = useState(false);
  const API_URI = `${process.env.REACT_APP_API_URI}/api/subscriptions/delete/`;
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const cancelSubscription = () => {
    setLoading(true);
    axios
      .delete(API_URI, {
        data: { subscription_id: plan },
        headers: config.headers,
      })
      .then((response) => {
        setLoading(false);
        toast.success(response.data.message);
        console.log(response.data);
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error?.response?.data?.message ?? error.message);
        console.error(error.message);
      });
  };

  return (
    <div className="px-4 md:px-6 py-10 bg-white border border-[rgba(102, 112, 133, 0.2]  rounded-xl">
      <div className="flex justify-between items-center">
        <p className="text-base font-bold text-dark-gray">Premium Plan</p>
        <img src={InfoIcon} alt="" />
      </div>
      {getAPIloading && (
        <p className="text-base font-bold text-dark-gray">Loading ...</p>
      )}
      {plan && <p className="text-base font-bold text-dark-gray">{plan}</p>}
      <div className="border-y border-dark-border mt-8 mb-3">
        <div className="flex justify-between items-center my-2">
          <p className="text-sm font-medium text-dark-gray">Next billing on</p>
          <p className="text-sm font-bold text-dark-gray">24/04/2023</p>
        </div>
        <div className="flex justify-between items-center my-2">
          <p className="text-sm font-medium text-dark-gray">
            Next billing amount{" "}
          </p>
          <p className="text-sm font-bold text-dark-gray">$98</p>
        </div>
        <div className="flex justify-between items-center my-2">
          <p className="text-sm font-medium text-dark-gray">
            Billing frequency
          </p>
          <p className="text-sm font-bold text-dark-gray">Monthly</p>
        </div>
      </div>
      <div>
        <p className="text-sm font-medium text-active-color underline mb-8">
          Get annual subscription (save 20%)
        </p>
        <div className="flex justify-between">
          <CustomButton title="Manage Your Plan" styles={"py-2 px-3"} />
          <CustomButton
            title={loading ? "Cancelling ..." : "Cancel Subscription"}
            styles={"py-2 px-3 disabled:opacity-60"}
            onClick={cancelSubscription}
            disabled={!plan}
          />
        </div>
      </div>
    </div>
  );
};

export default Plan;
