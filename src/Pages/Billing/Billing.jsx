import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import Logo from "../../Assets/icons/logo.svg";
import BackIcon from "../../Assets/icons/back.svg";
import StripeIcon from "../../Assets/icons/stripe.svg";

const Billing = () => {
  const stripePromise = loadStripe("pk_test_51KQyqLSD8i2a6PggVfKCmTtRqIJfi7rscyT2n4rxcIkJzkYVzLTNr73WHkg6a2xQXSRLO7U8NfUHq458NVvsZ72Z00NoOBQfTw");
  const appearance = {
    theme: "flat",
    variables: {
      fontFamily: ' "Gill Sans", sans-serif',
      fontLineHeight: "1.5",
      borderRadius: "10px",
      colorBackground: "#F6F8FA",
      colorPrimaryText: "#262626",
    },
    rules: {
      ".Block": {
        backgroundColor: "var(--colorBackground)",
        boxShadow: "none",
        padding: "12px",
      },
      ".Input": {
        padding: "12px",
      },
      ".Input:disabled, .Input--invalid:disabled": {
        color: "lightgray",
      },
      ".Tab": {
        padding: "10px 12px 8px 12px",
        border: "none",
      },
      ".Tab:hover": {
        border: "none",
        boxShadow:
          "0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)",
      },
      ".Tab--selected, .Tab--selected:focus, .Tab--selected:hover": {
        border: "none",
        backgroundColor: "#fff",
        boxShadow:
          "0 0 0 1.5px var(--colorPrimaryText), 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)",
      },
      ".Label": {
        fontWeight: "500",
      },
    },
  };
  
  const [clientSecret,setClientSecret]=useState("")
  const options = {
    clientSecret: clientSecret,
    appearance: appearance,
  };
  useEffect(()=>{
    (async () => {
      const response = await fetch('localhost:4242/create-payment-intent');
      const {client_secret: clientSecret} = await response.json();
      setClientSecret(clientSecret)
    })();
  },[])
  return (
    <div className="grid lg:grid-cols-2  items-center">
      <div className="bg-[#FAFAFC] pb-8 ">
        <div className="px-4 lg:px-10 mt-10">
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
      <div className="px-4 lg:px-10 mt-10">
       {/* {clientSecret && <Elements stripe={stripePromise} options={options}>
          <PaymentForm />
        </Elements>} */}
      </div>
    </div>
  );
};

export default Billing;
