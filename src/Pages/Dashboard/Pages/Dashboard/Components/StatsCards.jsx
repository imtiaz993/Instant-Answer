import React from "react";
import InclineIcon from "../../../../../Assets/icons/incline.svg";
import DeclineIcon from "../../../../../Assets/icons/decline.svg";
import ChatsStartedIcon from "../../../../../Assets/icons/chats-started.svg";
import KnowledgeBaseEntriesIcon from "../../../../../Assets/icons/knowledge-base-entries.svg";
import ChatInteractionIcon from "../../../../../Assets/icons/chat-interaction.svg";
import MessageAnsweredIcon from "../../../../../Assets/icons/message-answered.svg";

const StatsCards = ({ dashboard }) => {
  const { chats, chat_rate, knb_enteries, ms_answered } = dashboard;
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 my-5">
      <div className="bg-white border border-dashboard-card-border rounded-xl p-4">
        <div className="flex justify-between">
          <div className="w-10 h-10 rounded-full bg-[#EBDBFF4D] flex justify-center items-center">
            <img src={ChatsStartedIcon} alt="" />
          </div>
          <div className="text-right">
            <div className="flex justify-end items-center">
              <img
                className={`${!chats.increase ? "rotate-180" : ""}`}
                src={chats.increase ? InclineIcon : DeclineIcon}
                alt=""
              />
              <p
                className={`ml-1 text-sm font-medium ${
                  chats.increase ? "text-[#1E9268]" : "text-[red]"
                }`}
              >
                {chats.increase ? `+${chats.rate}` : `-${chats.rate}`}%
              </p>
            </div>
            <p className="text-xs text-dashboard-primary-text">
              vs last period
            </p>
          </div>
        </div>
        <div className="mt-2">
          <h1 className="text-xl font-bold text-dark-heading">{chats.value}</h1>
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
              <img
                className={`${!knb_enteries.increase ? "rotate-180" : ""}`}
                src={knb_enteries.increase ? InclineIcon : DeclineIcon}
                alt=""
              />
              <p
                className={`ml-1 text-sm font-medium ${
                  knb_enteries.increase ? "text-[#1E9268]" : "text-[red]"
                }`}
              >
                {chat_rate.increase
                  ? `+${knb_enteries.rate}`
                  : `-${knb_enteries.rate}`}
                %
              </p>
            </div>
            <p className="text-xs text-dashboard-primary-text">
              vs last period
            </p>
          </div>
        </div>
        <div className="mt-2">
          <h1 className="text-xl font-bold text-dark-heading">
            {knb_enteries.value}
          </h1>
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
              <img
                className={`${!chat_rate.increase ? "rotate-180" : ""}`}
                src={chat_rate.increase ? InclineIcon : DeclineIcon}
                alt=""
              />
              <p
                className={`ml-1 text-sm font-medium ${
                  chat_rate.increase ? "text-[#1E9268]" : "text-[red]"
                }`}
              >
                {chat_rate.increase
                  ? `+${chat_rate.rate}`
                  : `-${chat_rate.rate}`}
                %
              </p>
            </div>
            <p className="text-xs text-dashboard-primary-text">
              vs last period
            </p>
          </div>
        </div>
        <div className="mt-2">
          <h1 className="text-xl font-bold text-dark-heading">
            {chat_rate.value}%
          </h1>
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
              <img
                className={`${!ms_answered.increase ? "rotate-180" : ""}`}
                src={ms_answered.increase ? InclineIcon : DeclineIcon}
                alt=""
              />
              <p
                className={`ml-1 text-sm font-medium ${
                  ms_answered.increase ? "text-[#1E9268]" : "text-[red]"
                }`}
              >
                {ms_answered.increase
                  ? `+${ms_answered.rate}`
                  : `-${ms_answered.rate}`}
                %
              </p>
            </div>
            <p className="text-xs text-dashboard-primary-text">
              vs last period
            </p>
          </div>
        </div>
        <div className="mt-2">
          <h1 className="text-xl font-bold text-dark-heading">
            {ms_answered.value}
          </h1>
          <p className="text-xs md:text-sm text-dashboard-primary-text">
            Messages Answered{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
