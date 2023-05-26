import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import Agent from "./Components/Agent";
import Widget from "./Components/Widget";
import axios from "axios";
import { toast } from "react-toastify";
import { useDropzone } from "react-dropzone";

const Settings = () => {
  const [setting, setSetting] = useState({
    agent_language: "",
    company_name: "",
    creativity: "",
    reply_length: "",
    welcome_message: "",
    color: "",
    agent_name: "",
    profile_picture: "",
  });
  const [chatbots, setChatBots] = useState("");
  const [loading, setLoading] = useState(false);
  const API_URI = "https://appi.instantanswer.co/api/baseview";
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
  const API_URI_1 = "https://appi.instantanswer.co/api/appsettings/";

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
        setting={setting}
        setSetting={setSetting}
      />
      <Widget
        getRootProps={getRootProps}
        acceptedFiles={acceptedFiles}
        setting={setting}
        setSetting={setSetting}
      />
    </DashboardLayout>
  );
};

export default Settings;
