import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CustomInput from "../../../Common/CustomInput";
import CustomButton from "../../../Common/CustomButton";
import EmailIcon from "../../../Assets/icons/email.svg";
import PasswordIcon from "../../../Assets/icons/password.svg";
import GoogleIcon from "../../../Assets/icons/google.svg";
import { toast } from "react-toastify";

const Form = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(process.env.REACT_APP_API_URI)

  const API_URI = `${process.env.REACT_APP_API_URI}/token/`;
  const handleSignIn = () => {
    setLoading(true);
    axios
      .post(API_URI, { email, password })
      .then((response) => {
        setLoading(false);
        console.log(response.data);
        localStorage.setItem("token", response.data.access);
        localStorage.setItem("refresh", response.data.refresh);
        localStorage.setItem("tokenAdded", new Date().getTime());
        localStorage.setItem("refreshAdded", new Date().getTime());
        toast.success("Logged In successfully");
        setTimeout(() => {
          navigate("/billing");
        }, 100);
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error?.response?.data?.message ?? error.message);
        console.error(error.message);
      });
  };
  return (
    <div className="mt-20 lg:mt-20 px-4 lg:px-10 lg:w-2/5 lg:ml-auto">
      <h1 className="text-4xl text-darker-gray leading-[60px] font-semibold">
        Sign In To Your Account
      </h1>
      <p className="text-lg text-light-gray mt-1 mb-4">
        No credit card required.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignIn();
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
        <CustomInput
          label="Password"
          prefix={PasswordIcon}
          type="password"
          placeholder="Enter Password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <CustomButton
          styles="mt-6 w-full flex justify-center"
          title={loading ? "Signing In ..." : "Sign In"}
          disabled={loading}
          type="submit"
        />
      </form>
      <p className="mt-6 mb-8 text-sm text-center text-dark-blue font-medium">
        By signing in, you agree to the{" "}
        <a className="underline">Terms of Service</a> and{" "}
        <a className="underline">Privacy Policy</a>.
      </p>
      <button
        className="w-full flex items-center justify-center border border-[rgba(0, 0, 0, 0.26)] rounded-xl py-3 px-5 text-light-gray text-base font-medium"
        onClick={() => {}}
      >
        <img className="mr-3" src={GoogleIcon} alt="" />{" "}
        <span>Sign In With Google</span>
      </button>
      <div className="flex justify-between">
        <p className="pt-1 flex justify-end underline text-blue-600">
          <Link to="/signup">Create an account.</Link>
        </p>
        <p className="pt-1 flex justify-end underline text-blue-600">
          <Link to="/reset-password">Reset Password</Link>
        </p>
      </div>
    </div>
  );
};

export default Form;
