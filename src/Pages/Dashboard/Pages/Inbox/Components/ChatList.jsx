import React, {useState} from "react";
import ReviewIcon from "../../../../../Assets/icons/review.svg";

const ChatList = ({ chatList, setChatList, activeTab, chats, activeChat, setActiveChat }) => {
  const avatar = false;

  return (
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
                  {item.username.charAt(0)}
                </h1>
              </div>
            )}
          </div>
          <div className="ml-2 w-[calc(100%-56px)]">
            <div className="flex justify-between items-center h-full">
              <h1 className="text-lg font-semibold text-light-gray">
                {item.username}
              </h1>
              {/* <div className="flex flex-nowrap items-start mt-1">
                <p className="text-sm text-light-gray">{item.update}</p>
                {item.isRecomended && (
                  <img className="ml-1" src={ReviewIcon} alt="" />
                )}
              </div> */}
            </div>
            {/* <p className="text-sm text-light-gray text-ellipsis w-full">
              {item.desc}
            </p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
