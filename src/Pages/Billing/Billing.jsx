import React from "react";
import Logo from "../../Assets/icons/logo.svg";
import BackIcon from "../../Assets/icons/back.svg";
import StripeIcon from "../../Assets/icons/stripe.svg";

const Billing = () => {
  return (
    <div className="grid grid-cols-2  items-center">
      <div className="bg-[#FAFAFC]">
        <div className="w-4/5 px-10 mt-10">
          <div>
            <div className="flex items-start">
              <img width="20px" height="20px" src={BackIcon} alt="" />
              <img className="ml-2" src={Logo} alt="" />
            </div>
            <p className="mt-10 text-2xl font-semibold text-[#767676]">
              Pay Instant Answer
            </p>
            <h1 className="my-5 text-5xl font-bold text-black">$14.00</h1>
            <p className="text-xl font-semibold text-[#767676]">
              Then $99.00 per month
            </p>
            <div className="mt-11">
              <div className="mb-5 flex justify-between">
                <p className="text-xl font-medium text-[#382B2B]">
                  Instant Answer Lite Subscription Plan
                </p>
                <p className="text-xl font-bold text-[#382B2B]">$14.00</p>
              </div>
              <div className="flex justify-between mb-10">
                <p className="text-xl font-medium text-[#382B2B]">
                  Instant Answer Lite Subscription Plan
                </p>
                <div>
                  <p className="text-xl text-right font-bold text-[#382B2B]">
                    14 days free
                  </p>
                  <p className="text-xl text-right font-bold text-[#8C8C8C]">
                    $99.00 / month after
                  </p>
                </div>
              </div>
              <div className="flex justify-between pb-4 border-b border-[rgba(6, 6, 6, 0.23)]">
                <p className="text-[22px] font-semibold text-[#382B2B]">
                  Subtotal
                </p>
                <p className="text-[22px] font-semibold text-[#382B2B]">
                  $14.00
                </p>
              </div>
              <div className="my-4">
                <p className="text-[22px] font-semibold text-[#3771C8]">
                  Add promotion code
                </p>
              </div>
              <div className="flex justify-between pt-4 border-t border-[rgba(6, 6, 6, 0.23)]">
                <p className="text-[22px] font-semibold text-[#382B2B]">
                  Total due today
                </p>
                <p className="text-[22px] font-semibold text-[#382B2B]">
                  $14.00
                </p>
              </div>
            </div>
          </div>
          <p className="mt-32 flex items-center text-xl font-semibold text-[#767676]">
            Powered by <img className="mx-2" src={StripeIcon} alt="" /> | Terms
            Privacy Contact
          </p>
        </div>
      </div>
      <div className="w-4/5 px-10 mt-10"></div>
    </div>
  );
};

export default Billing;
