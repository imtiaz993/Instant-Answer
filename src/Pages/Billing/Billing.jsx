import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import Logo from "../../Assets/icons/logo.svg";
import BackIcon from "../../Assets/icons/back.svg";
import StripeIcon from "../../Assets/icons/stripe.svg";

const Billing = () => {
  const stripePromise = loadStripe(
    "pk_test_51KQyqLSD8i2a6PggVfKCmTtRqIJfi7rscyT2n4rxcIkJzkYVzLTNr73WHkg6a2xQXSRLO7U8NfUHq458NVvsZ72Z00NoOBQfTw"
  );
  const options = {
    clientSecret:
      "pi_3N4jFqSD8i2a6Pgg1gqF722Y_secret_EadoViQxQHHJZ6N8RwyTA2zxB",
    appearance: {
      theme: "stripe",
      variables: {
        borderRadius: "10px",
        colorPrimaryText: "#262626",
      },
      rules: {
        ".Input": {
          padding: "12px",
        },
        ".Input:focus, .Input--invalid:focus": {
          boxShadow:"none"
        },
        ".Label": {
          fontWeight: "500",
          color:"#697386",
        },
      },
    },
  };

  return (
    <div className="grid lg:grid-cols-2  items-center">
      <div className="bg-[#FAFAFC] pb-8 ">
        <div className="px-4 lg:px-10 mt-10 lg:min-h-[calc(93vh)]">
          <div className="flex items-start">
            <img width="20px" height="20px" src={BackIcon} alt="" />
            <img className="ml-2 w-48" src={Logo} alt="" />
          </div>
          <div>
            <div className="ml-7">
              <p className="mt-10 text-xl font-semibold text-[#767676]">
                Pay Instant Answer
              </p>
              <h1 className="my-3 text-4xl font-bold text-black">$14.00</h1>
              <p className="text-lg font-semibold text-[#767676]">
                Then $99.00 per month
              </p>
              <div className="mt-11">
                <div className="mb-5 flex justify-between">
                  <p className="text-lg font-medium text-[#382B2B]">
                    Instant Answer Lite Subscription Plan
                  </p>
                  <p className="text-lg font-bold text-[#382B2B]">$14.00</p>
                </div>
                <div className="flex justify-between mb-10">
                  <p className="text-lg font-medium text-[#382B2B]">
                    Instant Answer Lite Subscription Plan
                  </p>
                  <div>
                    <p className="text-lg text-right font-bold text-[#382B2B]">
                      14 days free
                    </p>
                    <p className="text-lg text-right font-medium text-[#8C8C8C]">
                      $99.00 / month after
                    </p>
                  </div>
                </div>
                <div className="flex justify-between pb-4 border-b border-[rgba(6, 6, 6, 0.23)]">
                  <p className="text-xl font-semibold text-[#382B2B]">
                    Subtotal
                  </p>
                  <p className="text-xl font-semibold text-[#382B2B]">$14.00</p>
                </div>
                <div className="my-4">
                  <p className="text-xl font-semibold text-[#3771C8]">
                    Add promotion code
                  </p>
                </div>
                <div className="flex justify-between pt-4 border-t border-[rgba(6, 6, 6, 0.23)]">
                  <p className="text-xl font-semibold text-[#382B2B]">
                    Total due today
                  </p>
                  <p className="text-xl font-semibold text-[#382B2B]">$14.00</p>
                </div>
              </div>
              <p className="mt-32 -ml-4 whitespace-nowrap flex items-center text-base md:text-lg font-medium text-[#767676]">
                Powered by <img className="mx-2" src={StripeIcon} alt="" /> |
                Terms Privacy Contact
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-11/12 mx-auto px-4 lg:px-10 mt-16 pb-16 lg:pb-0 lg:-mt-6">
        <Elements stripe={stripePromise} options={options}>
          <PaymentForm />
        </Elements>
      </div>
    </div>
  );
};

export default Billing;
