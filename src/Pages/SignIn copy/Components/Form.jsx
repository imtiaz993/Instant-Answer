import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CustomInput from "../../../Common/CustomInput";
import CustomButton from "../../../Common/CustomButton";
import EmailIcon from "../../../Assets/icons/email.svg";
import { toast } from "react-toastify";

const Form = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URI = `${process.env.REACT_APP_API_URI}/api/passwordreset/`;
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  const handleReset = () => {
    setLoading(true);
    axios
      .post(API_URI, { email , config})
      .then((response) => {
        setLoading(false);
        console.log(response.data);
        toast.success("Password reset sent to email");
        // setTimeout(() => {
        //   navigate("/billing");
        // }, 100);
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error?.response?.data?.message ?? error.message);
        console.error(error.message);
      });
  };
  return (
    <div className="mt-20 lg:mt-0 px-4 lg:px-10 lg:w-2/5 lg:ml-auto">
      <h1 className="text-4xl text-darker-gray leading-[60px] font-semibold">
        Reset you password
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleReset();
        }}
      >
        <CustomInput
          label="Email"
          prefix={EmailIcon}
          type="text"
          placeholder="Your Work Email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <CustomButton
          styles="mt-6 w-full flex justify-center"
          title={loading ? "Reseting In ..." : "Reset"}
          disabled={loading}
          type="submit"
        />
      </form>
      <div className="flex justify-between">
        <p className="pt-1 flex justify-end underline text-blue-600">
          <Link to="/signup">Create an account.</Link>
        </p>
        <p className="pt-1 flex justify-end underline text-blue-600">
          <Link to="/reset-password">Already have an account.</Link>
        </p>
      </div>
    </div>
  );
};

export default Form;
