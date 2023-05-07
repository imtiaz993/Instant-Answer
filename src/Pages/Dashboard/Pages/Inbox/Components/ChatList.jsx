import React, {useState} from "react";
import ReviewIcon from "../../../../../Assets/icons/review.svg";

const ChatList = ({ chatList, setChatList, activeTab }) => {
  const avatar = false;
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
  );
};

export default ChatList;
