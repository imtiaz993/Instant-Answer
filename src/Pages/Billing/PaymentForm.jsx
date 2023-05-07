import React from "react";
import { PaymentElement } from "@stripe/react-stripe-js";
import AppleIcon from "../../Assets/icons/apple.png"

const PaymentForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
       <button className="flex justify-center items-center text-lg font-medium rounded-md py-3 px-5 text-center w-full bg-black text-white">
         <img className="mr-1" src={AppleIcon} alt=""/> Pay
        </button>
      <div>
        <div className="w-full flex items-center justify-center my-8">
          <span className="h-[1px] w-full bg-gray-300"></span>
          <span className="mx-2 text-gray-400 font-medium whitespace-nowrap">Or pay with card</span>
          <span className="h-[1px] w-full bg-gray-300"></span>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <label className="py-2 font-semibold text-[#697386]">
          Email
          <input
            className="mb-3 mt-0.5 w-full block p-[0.5rem] bg-white rounded-[10px] border border-[#E6E6E6] outline-none focus:border-[hsla(210,96%,45%,50%)] "
            type="email"
            name="email"
          />
        </label>
        <PaymentElement />
        <button disabled className="mt-6 text-lg font-medium rounded-md py-3 px-5 text-center w-full bg-black disabled:bg-slate-600 disabled:text-gray-400 text-white">
          Pay $14.00
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
