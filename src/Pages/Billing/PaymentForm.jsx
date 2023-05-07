import React from "react";
import { useNavigate } from "react-router-dom";
import { PaymentElement } from "@stripe/react-stripe-js";
import AppleIcon from "../../Assets/icons/apple.png";

const PaymentForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <button
        onClick={() => {
          navigate("/dashboard/dashboard");
        }}
        className="flex justify-center items-center text-lg font-medium rounded-md py-3 px-5 text-center w-full bg-black text-white"
      >
        <img className="mr-1" src={AppleIcon} alt="" /> Pay
      </button>
      <div>
        <div className="w-full flex items-center justify-center my-8">
          <span className="h-[1px] w-full bg-gray-300"></span>
          <span className="mx-2 text-gray-400 font-medium whitespace-nowrap">
            Or pay with card
          </span>
          <span className="h-[1px] w-full bg-gray-300"></span>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <label className="py-2 font-semibold text-payment-label">
          Email
          <input
            className="mb-3 mt-0.5 w-full block p-[0.5rem] bg-white rounded-[10px] border border-payment-border outline-none focus:border-[hsla(210,96%,45%,50%)] "
            type="email"
            name="email"
          />
        </label>
        <PaymentElement />
        <button
          onClick={() => {
            navigate("/dashboard/dashboard");
          }}
          disabled
          className="mt-6 text-lg font-medium rounded-md py-3 px-5 text-center w-full bg-black disabled:bg-slate-600 disabled:text-gray-400 text-white"
        >
          Pay $14.00
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
