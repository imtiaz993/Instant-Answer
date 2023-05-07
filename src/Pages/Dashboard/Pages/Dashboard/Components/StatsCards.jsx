import React from "react";
import InclineIcon from "../../../../../Assets/icons/incline.svg";
import ChatsStartedIcon from "../../../../../Assets/icons/chats-started.svg";
import KnowledgeBaseEntriesIcon from "../../../../../Assets/icons/knowledge-base-entries.svg";
import ChatInteractionIcon from "../../../../../Assets/icons/chat-interaction.svg";
import MessageAnsweredIcon from "../../../../../Assets/icons/message-answered.svg";

const StatsCards = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 my-5">
      <div className="bg-white border border-dashboard-card-border rounded-xl p-4">
        <div className="flex justify-between">
          <div className="w-10 h-10 rounded-full bg-[#EBDBFF4D] flex justify-center items-center">
            <img src={ChatsStartedIcon} alt="" />
          </div>
          <div className="text-right">
            <div className="flex justify-end items-center">
              <img src={InclineIcon} alt="" />
              <p className="ml-1 text-sm font-medium text-[#1E9268]">
                +16.24 %
              </p>
            </div>
            <p className="text-xs text-dashboard-primary-text">
              vs last period
            </p>
          </div>
        </div>
        <div className="mt-2">
          <h1 className="text-xl font-bold text-dark-heading">204</h1>
          <p className="text-xs md:text-sm text-dashboard-primary-text">
            Chats Started{" "}
          </p>
        </div>
      </div>
      <div className="bg-white border border-dashboard-card-border rounded-xl p-4">
        <div className="flex justify-between">
          <div className="w-10 h-10 rounded-full bg-[#EBDBFF4D] flex justify-center items-center">
            <img src={KnowledgeBaseEntriesIcon} alt="" />
          </div>
          <div className="text-right">
            <div className="flex justify-end items-center">
              <img src={InclineIcon} alt="" />
              <p className="ml-1 text-sm font-medium text-[#1E9268]">23%</p>
            </div>
            <p className="text-xs text-dashboard-primary-text">
              vs last period
            </p>
          </div>
        </div>
        <div className="mt-2">
          <h1 className="text-xl font-bold text-dark-heading">198</h1>
          <p className="text-xs md:text-sm text-dashboard-primary-text">
            Knowledge Base Entries{" "}
          </p>
        </div>
      </div>
      <div className="bg-white border border-dashboard-card-border rounded-xl p-4">
        <div className="flex justify-between">
          <div className="w-10 h-10 rounded-full bg-[#EBDBFF4D] flex justify-center items-center">
            <img src={ChatInteractionIcon} alt="" />
          </div>
          <div className="text-right">
            <div className="flex justify-end items-center">
              <img src={InclineIcon} alt="" />
              <p className="ml-1 text-sm font-medium text-[#1E9268]">12.42%</p>
            </div>
            <p className="text-xs text-dashboard-primary-text">
              vs last period
            </p>
          </div>
        </div>
        <div className="mt-2">
          <h1 className="text-xl font-bold text-dark-heading">2.45%</h1>
          <p className="text-xs md:text-sm text-dashboard-primary-text">
            Chat Interaction Rate{" "}
          </p>
        </div>
      </div>
      <div className="bg-white border border-dashboard-card-border rounded-xl p-4">
        <div className="flex justify-between">
          <div className="w-10 h-10 rounded-full bg-[#EBDBFF4D] flex justify-center items-center">
            <img src={MessageAnsweredIcon} alt="" />
          </div>
          <div className="text-right">
            <div className="flex justify-end items-center">
              <img src={InclineIcon} alt="" />
              <p className="ml-1 text-sm font-medium text-[#1E9268]">16.25%</p>
            </div>
            <p className="text-xs text-dashboard-primary-text">
              vs last period
            </p>
          </div>
        </div>
        <div className="mt-2">
          <h1 className="text-xl font-bold text-dark-heading">2404</h1>
          <p className="text-xs md:text-sm text-dashboard-primary-text">
            Messages Answered{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
