import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const PaymentForm = () => {
  const [error, setError] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setError(error.message);
    } else {
      setPaymentMethod(paymentMethod);
    }
  };

  return (
    <div>
      <div>
        <div className="w-full flex items-center justify-center my-8">
          <span className="h-[1px] w-[calc(50%-120px)] bg-gray-300"></span>
          <span className="mx-2">Or pay with card</span>
          <span className="h-[1px] w-[calc(50%-120px)] bg-gray-300"></span>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button
          className="bg-black w-full text-white py-3 my-2 rounded-md"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
        {error && <div>{error}</div>}
        {paymentMethod && <div>Payment successful!</div>}
      </form>
    </div>
  );
};

export default PaymentForm;
