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
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URI = "https://appi.instantanswer.co/api/register/";
  const handleRegister = () => {
    if (password !== confirmPassword) {
      toast.error("Confirm Password doesn't match");
    } else if (password.length > 10) {
      toast.error("Password shouldn't containt more than 10 characters.");
    } else {
      setLoading(true);
      axios
        .post(API_URI, { email, password })
        .then((response) => {
          setLoading(false);
          toast.success("Logged In successfully");
          console.log(response.data);
          // navigate("/billing");
        })
        .catch((error) => {
          setLoading(false);
          toast.error(error?.response?.data?.message ?? error.message);
          console.error(error.message);
        });
    }
  };
  return (
    <div className="mt-20 lg:mt-2 px-4 lg:px-10 lg:w-2/5 lg:ml-auto">
      <h1 className="text-4xl text-darker-gray leading-[60px] font-semibold">
        Start Your Free Trial
      </h1>
      <p className="text-lg text-light-gray mt-1 mb-4">
        No credit card required.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister();
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
        <CustomInput
          label="Confirm Password"
          prefix={PasswordIcon}
          type="password"
          placeholder="Enter Password"
          required
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <CustomButton
          styles="mt-6 w-full flex justify-center"
          title={loading ? "Signing Up ..." : "Sign Up"}
          disabled={loading}
          type="submit"
        />
      </form>
      <p className="mt-6 mb-8 text-sm text-center text-dark-blue font-medium">
        By signing up, you agree to the{" "}
        <a className="underline">Terms of Service</a> and{" "}
        <a className="underline">Privacy Policy</a>.
      </p>
      <div
        id="g_id_onload"
        data-client_id="893936726176-8uvr1bdkiva5v3mvn55nmcp3u7e3t3f6.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="popup"
        data-login_uri="https://appi.instantanswer.com/api/googlelogin/"
        data-auto_prompt="false"
      >
        DIV 1
      </div>

      <div
        class="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="filled_black"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left"
      >
        {" "}
        Div 2
      </div>
      <button
        className="w-full flex items-center justify-center border border-[rgba(0, 0, 0, 0.26)] rounded-xl py-3 px-5 text-light-gray text-base font-medium"
        onClick={() => {}}
      >
        <img className="mr-3" src={GoogleIcon} alt="" />{" "}
        <span>Sign Up With Google</span>
      </button>
      <p className="pt-1 flex justify-end underline text-blue-600">
        <Link to="/signin">Already have an account.</Link>
      </p>
    </div>
  );
};

export default Form;
