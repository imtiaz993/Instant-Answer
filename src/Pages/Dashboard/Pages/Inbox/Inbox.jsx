import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import Tabs from "./Components/Tabs";
import ChatList from "./Components/ChatList";
import Chat from "./Components/Chat";
import axios from "axios";
import { toast } from "react-toastify";

const Inbox = () => {
  const [chatList, setChatList] = useState(true);
  const [activeTab, setactiveTab] = useState("All");
  const [activeChat, setActiveChat] = useState(0);

  const [chats, setChats] = useState("");
  const [loading, setLoading] = useState(false);
  const API_URI = "https://appi.instantanswer.co/api/dashboard/ddash/";
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const getAllChats = () => {
    setLoading(true);
    axios
      .post(API_URI, {}, config)
      .then((response) => {
        setChats(response.data.all_chats);
        if(response.data.all_chats.length>0){
          setActiveChat(response.data.all_chats[0].id)
        }
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error?.response?.data?.message ?? error.message);
        console.error(error.message);
      });
  };

  useEffect(() => {
    getAllChats()
  }, []);

  return (
    <DashboardLayout>
      <div>
        <h1 className="mb-4 text-xl font-bold text-dark-gray">Inbox</h1>
      </div>
      <Tabs
        activeTab={activeTab}
        setactiveTab={setactiveTab}
        setChatList={setChatList}
      />
      {chats.length > 0 && (
        <div className="grid md:grid-cols-3  border border-[rgba(102, 112, 133, 0.2]  rounded-xl h-[calc(100vh-200px)] -mb-8">
          <ChatList
            chatList={chatList}
            setChatList={setChatList}
            activeTab={activeTab}
            chats={chats}
            activeChat={activeChat}
            setActiveChat={setActiveChat}
          />
          <Chat chatList={chatList} setChatList={setChatList} activeChat={activeChat} chats={chats}/>
        </div>
      )}
      {loading && <p>Loading ...</p>}
    </DashboardLayout>
  );
};

export default Inbox;
