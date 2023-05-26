import React, { useState } from "react";
import CustomButton from "../../../../../Common/CustomButton";
import ReviewRecomendedUser from "../../../../../Assets/icons/review-recomended-user.svg";
import SeeAllIcon from "../../../../../Assets/icons/see-all.svg";

const AllChats = ({ dashboard }) => {
  const { all_chats } = dashboard;

  const allChats = [];
  all_chats.map((item) =>
    item.chats.map((innerItem) =>
      allChats.push({
        chatbot_id: item.chatbot_id,
        username: item.username,
        ...innerItem,
      })
    )
  );
  const [seeAllLatestChat, setSeeAllLatestChat] = useState(false);

  return (
    <div className="border bg-white border-[#E4E4E7] rounded-xl py-6 my-3">
      <div className="md:w-11/12 flex items-start justify-between px-6 mb-4">
        <div>
          <h1 className="text-base font-bold text-dark-heading">All Chats</h1>
          <p className="text-sm text-dashboard-primary-text">
            Your latest chats
          </p>
        </div>
        {allChats.length > 4 && (
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
        )}
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
                  {new Date(item.date).toLocaleDateString("en-US")}
                </p>
              </div>
              <div className="ml-1">
                <p className="text-[13px] md:text-sm font-bold text-dark-heading">
                  {item.username}
                </p>
                {/* <div className="flex mt-1">
                  <img
                    className="w-5 h-5 rounded-full"
                    src={ReviewRecomendedUser}
                    alt=""
                  />
                  <p className="ml-1 text-xs md:text-sm font-medium text-dashboard-primary-text">
                    {item.country}
                  </p>
                </div> */}
              </div>
              <div className="ml-1">
                <p className="text-[13px] md:text-sm font-bold text-dark-heading">
                  {item.user}
                </p>
                <p className="text-xs md:text-sm font-medium text-dashboard-primary-text">
                  {item["Festus (AI reply)"]}
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
  );
};

export default AllChats;
