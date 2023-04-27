import React from "react";
import CustomInput from "../../../Common/CustomInput";
import RefreshIcon from "../../../Assets/icons/refresh.svg";
import CloseIcon from "../../../Assets/icons/close.svg";

const SuffixButton = () => (
  <button className="ml-2 bg-[#7F56D9] rounded-lg py-2 px-5  border-none text-white text-sm font-medium">
    Add
  </button>
);

const WebPage = ({ hideText = false }) => {
  return (
    <>
      {!hideText && (
        <>
          <p className="mt-8 text-base font-bold text-black">
            Add your web pages
          </p>
          <p className="mt-3 mb-2 text-base  text-[#29303D]">
            List your website URLs so our AI chat agent can scan and gather
            relevant information to assist users (e.g. your homepage, blogs,
            about us page). The more content, the better.
          </p>
        </>
      )}
      <CustomInput
        styles={"mt-4"}
        placeholder="Enter URL"
        type="url"
        suffix={<SuffixButton />}
      />
      <div className="mt-8">
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center">
            <p className="text-sm font-medium text-[#29303D]">
            kaizencosmetics.com
            </p>
          </div>
          <div className="flex items-center w-60 justify-between text-left">
            <span className="w-3 h-3 inline-block bg-[#33D198] rounded-full"></span>
            <p className="ml-1 mr-4 text-xs font-medium text-[rgba(41, 48, 61, 0.44)]">
              Last analyzed 4 hours ago
            </p>
            <img className="mr-4 cursor-pointer" src={RefreshIcon} alt="" />
            <img className="cursor-pointer" src={CloseIcon} alt="" />
          </div>
        </div>
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center">
            <p className="text-sm font-medium text-[#29303D]">
            kaizencosmetics.com/blog/
            </p>
          </div>
          <div className="flex items-center w-60 justify-between text-left">
            <span className="w-3 h-3 inline-block bg-[#33D198] rounded-full"></span>
            <p className="ml-1 mr-4 text-xs font-medium text-[rgba(41, 48, 61, 0.44)]">
              Last analyzed 12 hours ago
            </p>
            <img className="mr-4 cursor-pointer" src={RefreshIcon} alt="" />
            <img className="cursor-pointer" src={CloseIcon} alt="" />
          </div>
        </div>
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center">
            <p className="text-sm font-medium text-[#29303D]">
            kaizencosmetics.com/about-us
            </p>
          </div>
          <div className="flex items-center w-60 justify-between text-left">
            <span className="w-3 h-3 inline-block bg-[#FFDD55] rounded-full"></span>
            <p className="ml-1 mr-4 text-xs font-medium text-[rgba(41, 48, 61, 0.44)]">
              Last analyzed 1 week ago
            </p>
            <img className="mr-4 cursor-pointer" src={RefreshIcon} alt="" />
            <img className="cursor-pointer" src={CloseIcon} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WebPage;
