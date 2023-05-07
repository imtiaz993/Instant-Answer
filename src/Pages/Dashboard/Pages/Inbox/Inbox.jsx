import React, { useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import Tabs from "./Components/Tabs";
import ChatList from "./Components/ChatList";
import Chat from "./Components/Chat";

const Inbox = () => {
  const [chatList, setChatList] = useState(true);
  const [activeTab, setactiveTab] = useState("All");

  return (
    <DashboardLayout>
      <div>
        <h1 className="mb-4 text-xl font-bold text-dark-gray">Inbox</h1>
      </div>
      <Tabs activeTab={activeTab} setactiveTab={setactiveTab} />
      <div className="grid md:grid-cols-3  border border-[rgba(102, 112, 133, 0.2]  rounded-xl h-[calc(100vh-200px)] -mb-8">
        <ChatList
          chatList={chatList}
          setChatList={setChatList}
          activeTab={activeTab}
        />
        <Chat chatList={chatList} setChatList={setChatList} />
      </div>
    </DashboardLayout>
  );
};

export default Inbox;
