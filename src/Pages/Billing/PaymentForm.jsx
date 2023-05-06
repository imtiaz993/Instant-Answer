import React from "react";
import {PaymentElement} from '@stripe/react-stripe-js';

const PaymentForm = () => {
  return (
    <div>
      <div>
        <div className="w-full flex items-center justify-center my-8">
          <span className="h-[1px] w-[calc(50%-120px)] bg-gray-300"></span>
          <span className="mx-2">Or pay with card</span>
          <span className="h-[1px] w-[calc(50%-120px)] bg-gray-300"></span>
        </div>
      </div>
      <PaymentElement />
    </div>
  );
};

export default PaymentForm;
