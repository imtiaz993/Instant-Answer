import React from "react";
import CustomInput from "../../../../../Common/CustomInput";
import BackIcon from "../../../../../Assets/icons/back.svg";

const Chat = ({ chatList, setChatList }) => {
  return (
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
  );
};

export default Chat;
