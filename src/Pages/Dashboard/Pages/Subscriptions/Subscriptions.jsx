import React from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import CustomButton from "../../../../Common/CustomButton";
import InfoIcon from "../../../../Assets/icons/info.svg";
import TickIcon from "../../../../Assets/icons/tick.svg";

const Subscriptions = () => {
  const totalChart = 300;
  const chartsUsed = 270;
  const chartsUsage = (chartsUsed / totalChart) * 100;
  return (
    <DashboardLayout>
      <div>
        <h1 className="mb-4 text-xl font-bold text-[#29303D]">
          Your Subscription
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="px-4 md:px-6 py-10 bg-white border border-[rgba(102, 112, 133, 0.2]  rounded-xl">
          <div className="flex justify-between items-center">
            <p className="text-base font-bold text-[#29303D]">Premium Plan</p>
            <img src={InfoIcon} alt="" />
          </div>
          <div className="border-y border-[#0000000A] mt-8 mb-3">
            <div className="flex justify-between items-center my-2">
              <p className="text-sm font-medium text-[#29303D]">
                Next billing on
              </p>
              <p className="text-sm font-bold text-[#29303D]">24/04/2023</p>
            </div>
            <div className="flex justify-between items-center my-2">
              <p className="text-sm font-medium text-[#29303D]">
                Next billing amount{" "}
              </p>
              <p className="text-sm font-bold text-[#29303D]">$98</p>
            </div>
            <div className="flex justify-between items-center my-2">
              <p className="text-sm font-medium text-[#29303D]">
                Billing frequency
              </p>
              <p className="text-sm font-bold text-[#29303D]">Monthly</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-[#7F56D9] underline mb-8">
              Get annual subscription (save 20%)
            </p>
            <CustomButton title="Manage Your Plan" />
          </div>
        </div>
        <div className="px-4 md:px-6 py-10 bg-white border border-[rgba(102, 112, 133, 0.2]  rounded-xl">
          <div className="flex justify-between items-center">
            <p className="text-base font-bold text-[#29303D]">Usage</p>
            <img src={InfoIcon} alt="" />
          </div>
          <div className="mt-2">
            <p className="text-sm font-medium text-[#29303D]">
              Remaining Chats
            </p>
            <div className="bg-[#FFE7EE] rounded-full h-4 mt-2">
              <div
                className={`bg-[#F15464] rounded-full h-4`}
                style={{ width: chartsUsage + "%" }}
              ></div>
            </div>
          </div>
          <div className="border-y border-[#0000000A] mt-8 mb-3">
            <div className="flex justify-between items-center my-2">
              <p className="text-sm font-medium text-[#29303D]">
                Chats in your plan
              </p>
              <p className="text-sm font-bold text-[#29303D]">{totalChart}</p>
            </div>
            <div className="flex justify-between items-center my-2">
              <p className="text-sm font-medium text-[#29303D]">
                Chats in used
              </p>
              <p className="text-sm font-bold text-[#29303D]">{chartsUsed}</p>
            </div>
          </div>
          <div className="flex justify-between items-center my-2 mb-3">
            <p className="text-sm font-medium text-[#29303D]">
              Chats remaining
            </p>
            <p className="text-sm font-bold text-[#29303D]">
              {totalChart - chartsUsed}
            </p>
          </div>
          <div>
            <CustomButton title="Upgrade" />
          </div>
        </div>
      </div>
      <div className="mt-3 px-4 md:px-6 py-10 bg-[#F8F8F8] border border-[#66708533]  rounded-xl">
        <h1 className="text-3xl font-semibold text-[#29303D]">Enterprise</h1>
        <p className="text-sm text-[#64748B]">For businesses who need more!</p>
        <div className="flex justify-center flex-col items-center">
          <div className="my-8">
            <h1 className="text-2xl font-bold text-[#141A22]">Do you want a</h1>
            <h1 className="text-2xl font-bold text-[#141A22]">custom plan?</h1>
          </div>
          <CustomButton
            title="Talk to Sales"
            styles={"w-full justify-center"}
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-x-6">
            <div className="flex items-start flex-nowrap mt-5">
              <img className="mr-1 w-4 h-4 mt-1" src={TickIcon} alt="" />
              <p className="text-sm md:text-base font-medium txet-[#18181B]">
                Bespoke machine learning solutions tailored for your growing
                business
              </p>
            </div>
            <div className="flex items-start flex-nowrap mt-5">
              <img className="mr-1 w-4 h-4 mt-1" src={TickIcon} alt="" />
              <p className="text-sm md:text-base font-medium txet-[#18181B]">
                Exclusive attributes: distinct AI persona, interactive style,
                webhooks, connections, and more.
              </p>
            </div>
            <div className="flex items-start flex-nowrap mt-5">
              <img className="mr-1 w-4 h-4 mt-1" src={TickIcon} alt="" />
              <p className="text-sm md:text-base font-medium txet-[#18181B]">
                Access to APIs and personalized integrations.
              </p>
            </div>
            <div className="flex items-start flex-nowrap mt-5">
              <img className="mr-1 w-4 h-4 mt-1" src={TickIcon} alt="" />
              <p className="text-sm md:text-base font-medium txet-[#18181B]">
                Continuous upkeep and round-the-clock client assistance through
                email, Slack, Zoom, and telephone.
              </p>
            </div>
            <div className="flex items-start flex-nowrap mt-5">
              <img className="mr-1 w-4 h-4 mt-1" src={TickIcon} alt="" />
              <p className="text-sm md:text-base font-medium txet-[#18181B]">
                Adaptable Service Level Agreement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Subscriptions;
