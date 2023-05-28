import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import Agent from "./Components/Agent";
import Widget from "./Components/Widget";
import axios from "axios";
import { toast } from "react-toastify";
import { useDropzone } from "react-dropzone";
import CustomButton from "../../../../Common/CustomButton";

const Settings = () => {
  const settingFromStorage = localStorage.getItem("setting");
  console.log(settingFromStorage)
  const [setting, setSetting] = useState(
    settingFromStorage
      ? JSON.parse(settingFromStorage)
      : {
          agent_language: "",
          company_name: "",
          creativity: "",
          reply_length: "",
          welcome_message: "",
          color: "",
          agent_name: "",
          profile_picture: "",
        }
  );
  console.log(setting);
  const [chatbots, setChatBots] = useState("");
  const [loading, setLoading] = useState(false);
  const API_URI = `${process.env.REACT_APP_API_URI}/api/baseview`;
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const getcChatbots = () => {
    setLoading(true);
    axios
      .get(API_URI, config)
      .then((response) => {
        setChatBots(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error?.response?.data?.message ?? error.message);
        console.error(error.message);
      });
  };

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png,",
    maxSize: 3000000,
    multiple: false,
  });
  const [postAPIloading, setPostAPIloadingLoading] = useState(false);
  const API_URI_1 =   `${process.env.REACT_APP_API_URI}/api/appsettings/`;

  const handleUpload = () => {
    setPostAPIloadingLoading(true);
    const formData = new FormData();
    formData.append("agent_language", setting.agent_language);
    formData.append("company_name", setting.company_name);
    formData.append("creativity", setting.creativity);
    formData.append("reply_length", setting.reply_length);
    formData.append("welcome_message", setting.welcome_message);
    formData.append("color", setting.color);
    formData.append("agent_name", setting.agent_name);
    formData.append("profile_picture", acceptedFiles[0]);
    axios
      .post(API_URI_1, formData, config)
      .then((response) => {
        setPostAPIloadingLoading(false);
        toast.success(response.data.message);
        localStorage.setItem("setting", JSON.stringify(response.data));
        console.log(response.data);
      })
      .catch((error) => {
        setPostAPIloadingLoading(false);
        toast.error(error?.response?.data?.message ?? error.message);
        console.error(error.message);
      });
  };

  useEffect(() => {
    getcChatbots();
  }, []);

  return (
    <DashboardLayout>
      <Agent
        loading={loading}
        chatbots={chatbots}
        setChatBots={setChatBots}
        setting={setting}
        setSetting={setSetting}
      />
      <Widget
        getRootProps={getRootProps}
        acceptedFiles={acceptedFiles}
        setting={setting}
        setSetting={setSetting}
      />
      <CustomButton
        title={postAPIloading ? "Saving" : "Save"}
        onClick={handleUpload}
        disabled={postAPIloading}
        styles={"flex flex-end mt-4 px-8"}
      />
    </DashboardLayout>
  );
};

export default Settings;
