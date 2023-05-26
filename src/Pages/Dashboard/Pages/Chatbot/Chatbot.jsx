import React, { useState } from "react";
import Logo from "../../../../Assets/icons/logo.svg";
import CustomInput from "../../../../Common/CustomInput";
import CustomButton from "../../../../Common/CustomButton";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const Chatbot = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URI = "https://appi.instantanswer.co/api/knowledgebase/";
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  const handleCreateChatbot = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(API_URI, { name }, config)
      .then((response) => {
        setLoading(false);
        console.log(response.data);
        toast.success(response.data.message);
        localStorage.setItem("chatbotname", name);
        if(searchParams.get('from')){
          navigate("/dashboard/settings");
        }
        else{
          navigate("/onboarding");
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error?.response?.data?.message??error.message);
        console.error(error.message);
      });
  };

  return (
    <div className="bg-layout-background h-screen">
      <div className="w-11/12 md:w-4/5 py-6 md:py-10 mx-auto">
        <img
          className="mx-auto mb-6 md:mb-8 w-1/2 md:w-auto"
          src={Logo}
          alt=""
        />
        <div className="px-4 md:px-8 py-8 bg-white border border-[rgba(102, 112, 133, 0.2]  rounded-xl">
          <h1 className="mb-5 text-3xl md:text-4xl font-bold text-dark-gray">
            Create Chatbot
          </h1>
          <p className="text-base text-black">
            We're excited to have you on board! To help your AI chat agent
            better understand your business and provide top-notch service,
          </p>
          <p className="mb-8 text-base text-black">
            please create your chatbot.
          </p>
          <form onSubmit={handleCreateChatbot}>
            <CustomInput
              label="Chatbot Name"
              placeholder="Enter Name"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <CustomButton
              styles="mt-6 w-full flex justify-center"
              title={loading ? "Creating ..." : "Create"}
              disabled={loading}
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
