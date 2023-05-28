import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppleIcon from "../../Assets/icons/apple.png";
import axios from "axios";
import { toast } from "react-toastify";

const PaymentForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState("");
  const [expire, setExpire] = useState("");
  const [cvc, setCvc] = useState("");

  const API_URI_1 = `${process.env.REACT_APP_API_URI}/api/subscriptions/create_card/`;
  const API_URI_2 = `${process.env.REACT_APP_API_URI}/api/subscriptions/`;

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const handleSubmit = () => {
    setLoading(true);
    const data = {
      number,
      exp_year: expire.split("/")[0],
      exp_month: expire.split("/")[1],
      cvc,
    };
    axios
      .post(API_URI_1, data, config)
      .then((response) => {
        toast.success("Card Added successfully");
        console.log(response.data);
        const priceId = { price_id: "price_1N85bHHd6QK9GeBxm0aUXqb9" };
        axios
          .post(API_URI_2, priceId, config)
          .then((response) => {
            toast.success("Payment Made successfully");
            console.log(response.data);
            navigate("/onboarding");
          })
          .catch((error) => {
            setLoading(false);
            toast.error(error?.response?.data?.message ?? error.message);
            console.error(error.message);
          });
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error?.response?.data?.message ?? error.message);
        console.error(error.message);
      });
  };

  return (
    <div>
      {/* <button
        onClick={() => {
          navigate("/chatbot");
        }}
        className="flex justify-center items-center text-lg font-medium rounded-md py-3 px-5 text-center w-full bg-black text-white"
      >
        <img className="mr-1" src={AppleIcon} alt="" /> Pay
      </button> */}
      <div>
        <div className="w-full flex items-center justify-center my-8">
          <span className="h-[1px] w-full bg-gray-300"></span>
          <span className="mx-2 text-gray-400 font-medium whitespace-nowrap">
            Pay with card
          </span>
          <span className="h-[1px] w-full bg-gray-300"></span>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label className="py-2 font-semibold text-payment-label">
          Card Number
          <input
            className="mb-3 mt-0.5 w-full block p-[0.5rem] bg-white rounded-[10px] border border-payment-border outline-none focus:border-[hsla(210,96%,45%,50%)] "
            type="number"
            required
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
        </label>
        <div className="grid md:grid-cols-2 md:gap-3">
          <label className="py-2 font-semibold text-payment-label">
            Expiration (DD/MM)
            <input
              className="mb-3 mt-0.5 w-full block p-[0.5rem] bg-white rounded-[10px] border border-payment-border outline-none focus:border-[hsla(210,96%,45%,50%)] "
              type="text"
              required
              value={expire}
              maxLength={5}
              onChange={(e) => {
                setExpire(e.target.value);
              }}
            />
          </label>
          <label className="py-2 font-semibold text-payment-label">
            CVC
            <input
              className="mb-3 mt-0.5 w-full block p-[0.5rem] bg-white rounded-[10px] border border-payment-border outline-none focus:border-[hsla(210,96%,45%,50%)] "
              type="number"
              required
              value={cvc}
              maxLength={3}
              onChange={(e) => {
                setCvc(e.target.value);
              }}
            />
          </label>
        </div>
        <button
          type="submit"
          className="mt-6 text-lg font-medium rounded-md py-3 px-5 text-center w-full bg-black disabled:bg-slate-600 disabled:text-gray-400 text-white"
        >
          Pay $14.00
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
