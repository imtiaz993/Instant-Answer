import React, { useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import CustomInput from "../../../../Common/CustomInput";
import InboxIcon from "../../../../Assets/icons/knowledge-base.svg";
import ReviewIcon from "../../../../Assets/icons/review.svg";
import BackIcon from "../../../../Assets/icons/back.svg";

const Inbox = () => {
  const avatar = false;
  const [chatList, setChatList] = useState(true);
  const [activeTab, setactiveTab] = useState("All");
  const [activeChat, setActiveChat] = useState(3);
  const [chats, setChats] = useState([
    {
      id: 1,
      name: "Daniel Adam",
      avatarName: "DA",
      desc: "Nick here from the InstantAnsw......",
      update: "Today",
      isRecomended: false,
    },
    {
      id: 2,
      name: "Daniel Adam",
      avatarName: "DA",
      desc: "Nick here from the InstantAnsw......",
      update: "Today",
      isRecomended: false,
    },
    {
      id: 3,
      name: "Daniel Adam",
      avatarName: "DA",
      desc: "Nick here from the InstantAnsw......",
      update: "Today",
      isRecomended: true,
    },
    {
      id: 4,
      name: "Daniel Adam",
      avatarName: "DA",
      desc: "Nick here from the InstantAnsw......",
      update: "Today",
      isRecomended: false,
    },
    {
      id: 5,
      name: "Daniel Adam",
      avatarName: "DA",
      desc: "Nick here from the InstantAnsw......",
      update: "Today",
      isRecomended: false,
    },
    {
      id: 6,
      name: "Daniel Adam",
      avatarName: "DA",
      desc: "Nick here from the InstantAnsw......",
      update: "Today",
      isRecomended: true,
    },
    {
      id: 7,
      name: "Daniel Adam",
      avatarName: "DA",
      desc: "Nick here from the InstantAnsw......",
      update: "Today",
      isRecomended: true,
    },
  ]);

  return (
    <DashboardLayout>
      <div>
        <h1 className="mb-4 text-xl font-bold text-dark-gray">Inbox</h1>
      </div>
      <div className="flex mb-4 border-b border-[#e2e2e2]">
        <div
          className={`flex w-24 items-center justify-center cursor-pointer py-2 ${
            activeTab === "All" && "border-b-2 border-active-color"
          }`}
          onClick={() => {
            setactiveTab("All");
          }}
        >
          <img src={InboxIcon} alt="" />
          <p
            className={`whitespace-nowrap ml-1 text-sm font-bold ${
              activeTab === "All" ? "text-active-color" : "text-light-gray"
            }`}
          >
            All
          </p>
        </div>
        <div
          className={`flex items-center cursor-pointer py-2 ${
            activeTab === "Review Recommended" && "border-b-2 border-active-color"
          }`}
          onClick={() => {
            setactiveTab("Review Recommended");
          }}
        >
          <img src={ReviewIcon} alt="" />
          <p
            className={`whitespace-nowrap ml-1 text-sm font-bold ${
              activeTab === "Review Recommended"
                ? "text-active-color"
                : "text-light-gray"
            }`}
          >
            Review Recommended
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3  border border-[rgba(102, 112, 133, 0.2]  rounded-xl h-[calc(100vh-200px)] -mb-8">
        <div
          className={`${
            chatList ? "block" : "hidden"
          } md:block bg-[#FAF9FF] pt-4 overflow-auto`}
        >
          {(activeTab === "All"
            ? chats
            : chats.filter((item) => item.isRecomended === true)
          ).map((item) => (
            <div
              className={`flex border-b border-[#0000001A] px-4 py-4 cursor-pointer ${
                activeChat === item.id && "bg-[#7F56D940]"
              }`}
              onClick={() => {
                setActiveChat(item.id);
                setChatList(false);
              }}
            >
              <div className="w-14 h-15">
                {avatar ? (
                  <img className="w-full h-full rounded-full" src="" alt="" />
                ) : (
                  <div className=" bg-[#FFF4DE] rounded-full w-14 h-14 inline-flex items-center justify-center">
                    <h1 className="text-sm font-bold text-yellow-numbering">
                      {item.avatarName}
                    </h1>
                  </div>
                )}
              </div>
              <div className="ml-2 w-[calc(100%-56px)]">
                <div className="flex justify-between">
                  <h1 className="text-lg font-semibold text-light-gray">
                    {item.name}
                  </h1>
                  <div className="flex flex-nowrap items-start mt-1">
                    <p className="text-sm text-light-gray">{item.update}</p>
                    {item.isRecomended && (
                      <img className="ml-1" src={ReviewIcon} alt="" />
                    )}
                  </div>
                </div>
                <p className="text-sm text-light-gray text-ellipsis w-full">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`${
            chatList ? "hidden" : "block"
          } md:block md:col-span-2 md:bg-white px-4 py-4 h-full overflow-hidden`}
        >
          <div className="flex">
            <div
              className="mt-2 mr-2 md:hidden"
              onClick={() => {
                setChatList(true);
              }}
            >
              <img className="w-5" src={BackIcon} alt="" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-light-gray">
                Daniel Adams
              </h1>
              <p className="text-sm text-light-gray">Today at 14:24 PM</p>
            </div>
          </div>
          <div className="bg-[#F0F3F775] pt-3 pb-2 mt-2 w-full flex flex-col justify-between h-[87%]">
            <div className="h-[86%] md:h-[83%] overflow-auto px-4">
              <div className="flex bg-[#E6E5EB] rounded-2xl p-3 pt-2 w-4/5 md:w-1/2 mb-2">
                <p className="text-base">
                  Hello, i would like more information regarding your product.
                </p>
              </div>
              <div className="flex ml-auto bg-active-color rounded-2xl p-3 pt-2 w-4/5 md:w-1/2 mb-2">
                <p className="text-base text-white">
                  Thank you for getting in touch. What is your name?
                </p>
              </div>
              <div className="flex bg-[#E6E5EB] rounded-2xl p-3 pt-2 w-4/5 md:w-1/2 mb-2">
                <p className="text-base">My name is Daniel Adams.</p>
              </div>
              <div className="flex ml-auto bg-active-color rounded-2xl p-3 pt-2 w-4/5 md:w-1/2 mb-2">
                <p className="text-base text-white">
                  Nice to meet you Daniel, which product would you like to know
                  about specfically?
                </p>
              </div>
            </div>
            <div className="px-4">
              {false && (
                <div className="bg-white rounded border border-[#0000001A] py-3 flex justify-center">
                  <p className="text-sm font-medium text-light-gray">
                    Manual Takeover
                  </p>
                </div>
              )}
              <CustomInput
                type="text"
                placeholder="Please type a message..."
                suffix={
                  <button className="ml-2 bg-active-color rounded-lg py-1.5 px-3  border-none text-white text-sm font-medium">
                    Send
                  </button>
                }
                styles="mb-0 bg-white rounded-[20px] border-none"
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Inbox;
