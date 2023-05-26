import React from "react";
import { useNavigate } from "react-router-dom";
import { CardElement ,useStripe, useElements } from "@stripe/react-stripe-js";
import AppleIcon from "../../Assets/icons/apple.png";

const PaymentForm = () => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (e) => {
    e.preventDefault()
    if (!stripe || !elements) {
      // Stripe or Elements is not ready yet
      return;
    }

    const cardElement = elements.getElement(CardElement );

    if (cardElement) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        // Handle error
      } else {
        // Access card details from paymentMethod object
        const { card } = paymentMethod;
        const { exp_year, exp_month, last4, cardCvc } = card;
        const cvc = cardElement._elements[0].cardCvc;
        console.log(exp_year, exp_month, cvc, cardCvc);
      }
    }
  };
  return (
    <div>
      <button
        onClick={() => {
          navigate("/chatbot");
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
      <form onSubmit={handlePayment}>
        <label className="py-2 font-semibold text-payment-label">
          Email
          <input
            className="mb-3 mt-0.5 w-full block p-[0.5rem] bg-white rounded-[10px] border border-payment-border outline-none focus:border-[hsla(210,96%,45%,50%)] "
            type="email"
            name="email"
          />
        </label>
        <CardElement  />
        <button
        type="submit"
          // onClick={() => {
          //   navigate("/onboarding");
          // }}
          // disabled
          className="mt-6 text-lg font-medium rounded-md py-3 px-5 text-center w-full bg-black disabled:bg-slate-600 disabled:text-gray-400 text-white"
        >
          Pay $14.00
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
