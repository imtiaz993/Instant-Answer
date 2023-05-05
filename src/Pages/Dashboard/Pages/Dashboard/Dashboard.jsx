import React from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import CustomButton from "../../../../Common/CustomButton";
import DonnaPicture from "../../../../Assets/icons/user.png";
import FilterIcon from "../../../../Assets/icons/filter.svg";
import CalenderIcon from "../../../../Assets/icons/calender.svg";
import InclineIcon from "../../../../Assets/icons/incline.svg";
import ChatsStartedIcon from "../../../../Assets/icons/chats-started.svg";
import KnowledgeBaseEntriesIcon from "../../../../Assets/icons/knowledge-base-entries.svg";
import ChatInteractionIcon from "../../../../Assets/icons/chat-interaction.svg";
import MessageAnsweredIcon from "../../../../Assets/icons/message-answered.svg";
import ReviewRecomendedUser from "../../../../Assets/icons/review-recomended-user.svg";
import SeeAllIcon from "../../../../Assets/icons/see-all.svg";
import BarChart from "./BarChart";
import { useState } from "react";

const Dashboard = () => {
  const [seeAllReviewRecomended, setSeeAllReviewRecomended] = useState(false);
  const [seeAllLatestChat, setSeeAllLatestChat] = useState(false);

  const reviewRecomendedChats = [
    { name: "Daniel Adams", update: "Just now" },
    { name: "Daniel Adams", update: "Just now" },
    { name: "Daniel Adams", update: "Just now" },
    { name: "Daniel Adams", update: "Just now" },
    { name: "Daniel Adams", update: "Just now" },
  ];
  const allChats = [
    {
      time: "04:02 AM",
      name: "Alex Joenes",
      country: "United States",
      messageTitle: "Latest Mesage",
      messageContent: "This is a preview...",
    },
    {
      time: "04:02 AM",
      name: "Alex Joenes",
      country: "United States",
      messageTitle: "Latest Mesage",
      messageContent: "This is a preview...",
    },
    {
      time: "04:02 AM",
      name: "Alex Joenes",
      country: "United States",
      messageTitle: "Latest Mesage",
      messageContent: "This is a preview...",
    },
    {
      time: "04:02 AM",
      name: "Alex Joenes",
      country: "United States",
      messageTitle: "Latest Mesage",
      messageContent: "This is a preview...",
    },
    {
      time: "04:02 AM",
      name: "Alex Joenes",
      country: "United States",
      messageTitle: "Latest Mesage",
      messageContent: "This is a preview...",
    },
    {
      time: "04:02 AM",
      name: "Alex Joenes",
      country: "United States",
      messageTitle: "Latest Mesage",
      messageContent: "This is a preview...",
    },
  ];

  return (
    <DashboardLayout>
      <div className="md:flex justify-between">
        <div className="flex">
          <div>
            <img
              src={DonnaPicture}
              alt=""
              className="w-13 h-13 rounded-full inline-block"
            />
          </div>
          <div className="ml-3">
            <h1 className="text-lg font-bold text-[#18181B]">
              Hey Donna Jones! 👋
            </h1>
            <p className="text-sm text-[#71717A]">
              Here's what your AI agent has been up to lately
            </p>
          </div>
        </div>
        <div className="flex mt-4 md:mt-0">
          <div className="bg-white border border-[#667085] rounded-md px-4 h-10 flex items-center justify-center cursor-pointer">
            <img src={CalenderIcon} alt="" />
            <p className="ml-1 text-sm font-medium text-[#52525B]">
              Yesterday (Jan 5)
            </p>
          </div>
          <div className="ml-4 bg-white border border-[#667085] rounded-md w-11 h-10 flex items-center justify-center cursor-pointer">
            <img src={FilterIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 my-5">
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-4">
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
              <p className="text-xs text-[#71717A]">vs last period</p>
            </div>
          </div>
          <div className="mt-2">
            <h1 className="text-xl font-bold text-[#18181B]">204</h1>
            <p className="text-xs md:text-sm text-[#71717A]">Chats Started </p>
          </div>
        </div>
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-4">
          <div className="flex justify-between">
            <div className="w-10 h-10 rounded-full bg-[#EBDBFF4D] flex justify-center items-center">
              <img src={KnowledgeBaseEntriesIcon} alt="" />
            </div>
            <div className="text-right">
              <div className="flex justify-end items-center">
                <img src={InclineIcon} alt="" />
                <p className="ml-1 text-sm font-medium text-[#1E9268]">23%</p>
              </div>
              <p className="text-xs text-[#71717A]">vs last period</p>
            </div>
          </div>
          <div className="mt-2">
            <h1 className="text-xl font-bold text-[#18181B]">198</h1>
            <p className="text-xs md:text-sm text-[#71717A]">
              Knowledge Base Entries{" "}
            </p>
          </div>
        </div>
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-4">
          <div className="flex justify-between">
            <div className="w-10 h-10 rounded-full bg-[#EBDBFF4D] flex justify-center items-center">
              <img src={ChatInteractionIcon} alt="" />
            </div>
            <div className="text-right">
              <div className="flex justify-end items-center">
                <img src={InclineIcon} alt="" />
                <p className="ml-1 text-sm font-medium text-[#1E9268]">
                  12.42%
                </p>
              </div>
              <p className="text-xs text-[#71717A]">vs last period</p>
            </div>
          </div>
          <div className="mt-2">
            <h1 className="text-xl font-bold text-[#18181B]">2.45%</h1>
            <p className="text-xs md:text-sm text-[#71717A]">
              Chat Interaction Rate{" "}
            </p>
          </div>
        </div>
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-4">
          <div className="flex justify-between">
            <div className="w-10 h-10 rounded-full bg-[#EBDBFF4D] flex justify-center items-center">
              <img src={MessageAnsweredIcon} alt="" />
            </div>
            <div className="text-right">
              <div className="flex justify-end items-center">
                <img src={InclineIcon} alt="" />
                <p className="ml-1 text-sm font-medium text-[#1E9268]">
                  16.25%
                </p>
              </div>
              <p className="text-xs text-[#71717A]">vs last period</p>
            </div>
          </div>
          <div className="mt-2">
            <h1 className="text-xl font-bold text-[#18181B]">2404</h1>
            <p className="text-xs md:text-sm text-[#71717A]">
              Messages Answered{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="md:flex gap-5 mb-5 md:h-[380px] overflow-hidden">
        <div className="mb-5 md:mb-0 md:w-[calc(100%-320px)] bg-white border border-[#E2E8F0] rounded-xl py-4 px-2 md:px-4">
          <BarChart />
        </div>
        <div className="min-w-[320px] h-[390px] md:h-auto overflow-y-auto  bg-white border border-[#E2E8F0] rounded-xl p-4">
          <h1 className="text-base font-bold text-[#18181B]">
            Latest Chats (Review Recommended)
          </h1>
          <p className="text-sm text-[#71717A]">
            Review these chats as soon as possible to ensure maximum bot
            accuracy.
          </p>
          <div>
            {(seeAllReviewRecomended
              ? reviewRecomendedChats
              : reviewRecomendedChats.slice(0, 3)
            ).map((item) => (
              <div className="flex justify-between border border-[#E4E4E7] rounded-xl px-4 py-3 my-3">
                <div className="flex">
                  <div>
                    <img
                      className="w-9 h-9 rounded-full"
                      src={ReviewRecomendedUser}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <h1 className="text-sm font-bold text-[#18181B]">
                      {item.name}
                    </h1>
                    <p className="text-sm text-[#71717A]">{item.update}</p>
                  </div>
                </div>
                <div>
                  <CustomButton
                    outlined
                    title="Review"
                    styles="py-2 text-[#4F46E5] border-[#E4E4E7]"
                  />
                </div>
              </div>
            ))}
            <div
              className="flex justify-center cursor-pointer pt-2"
              onClick={() => {
                setSeeAllReviewRecomended(!seeAllReviewRecomended);
              }}
            >
              <p className="mr-2 text-sm font-medium text-[#4F46E5]">
                {seeAllReviewRecomended ? "See Less" : "See All"}
              </p>
              <img src={SeeAllIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="border bg-white border-[#E4E4E7] rounded-xl py-6 my-3">
        <div className="md:w-11/12 flex items-start justify-between px-6 mb-4">
          <div>
            <h1 className="text-base font-bold text-[#18181B]">All Chats</h1>
            <p className="text-sm text-[#71717A]">Your latest chats</p>
          </div>
          <div className="flex items-center">
            <p
              className="mr-3 text-sm font-medium text-[#4F46E5] cursor-pointer"
              onClick={() => {
                setSeeAllLatestChat(!seeAllLatestChat);
              }}
            >
              {seeAllLatestChat ? "See Less Chats" : "See All Chats"}
            </p>
            <img src={SeeAllIcon} alt="" />
          </div>
        </div>
        {(seeAllLatestChat ? allChats : allChats.slice(0, 4)).map(
          (item, index) => (
            <div
              className={`${
                seeAllLatestChat
                  ? allChats.length === index
                    ? "pt-4"
                    : "border-b border-[#E4E4E7B2] py-4"
                  : index === 3
                  ? "pt-4"
                  : "border-b border-[#E4E4E7B2] py-4"
              }`}
            >
              <div className="md:w-11/12 flex items-center justify-between px-2 md:px-6">
                <div className="flex items-center rounded-full bg-[#DCFCE7] px-2 md:px-3 py-1 md:w-36">
                  <span className="inline-block w-2 md:w-2.5 h-2 rounded-full bg-[#22C55E]"></span>
                  <p className="ml-1 md:ml-2 text-xs md:text-sm font-medium text-[#14532D]">
                    {item.time}
                  </p>
                </div>
                <div className="ml-1">
                  <p className="text-[13px] md:text-sm font-bold text-[#18181B]">
                    {item.name}
                  </p>
                  <div className="flex mt-1">
                    <img
                      className="w-5 h-5 rounded-full"
                      src={ReviewRecomendedUser}
                      alt=""
                    />
                    <p className="ml-1 text-xs md:text-sm font-medium text-[#71717A]">
                      {item.country}
                    </p>
                  </div>
                </div>
                <div className="ml-1">
                  <p className="text-[13px] md:text-sm font-bold text-[#18181B]">
                    {item.messageTitle}
                  </p>
                  <p className="text-xs md:text-sm font-medium text-[#71717A]">
                    {item.messageContent}
                  </p>
                </div>
                <div className="ml-1">
                  <CustomButton
                    outlined
                    title="View"
                    styles="py-2 px-4 md:px-8 text-[#4F46E5] border-[#E4E4E7] text-xs"
                  />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
