import React from "react";
import CustomInput from "../../../Common/CustomInput";
import FacebookIcon from "../../../Assets/icons/facebook.svg";
import InstagramIcon from "../../../Assets/icons/instagram.svg";
import TwitterIcon from "../../../Assets/icons/twitter.svg";
import RefreshIcon from "../../../Assets/icons/refresh.svg";
import CloseIcon from "../../../Assets/icons/close.svg";

const SuffixButton = () => (
  <button className="ml-2 bg-[#7F56D9] rounded-lg py-2 px-5  border-none text-white text-sm font-medium">
    Add
  </button>
);

const Socials = ({ hideText = false }) => {

  return (
    <>
     {!hideText && (
        <>
      <p className="mt-8 text-base font-bold text-black">
        Add your social accounts
      </p>
      <p className="mt-3 mb-2 text-base  text-[#29303D]">
        Connect your social media accounts, allowing the AI chat agent to stay
        up-to-date with your latest posts and promotions.
      </p>
      </>
     )}
      <div className={`flex ${hideText && "mt-4"}`}>
        <select className="px-2 h-[54px] rounded-md mr-2 outline-none border border-[rgba(102, 112, 133, 0.28)">
          <option className="">
            <img src={FacebookIcon} alt="" />
            Facebook
          </option>
          <option className="">
            <img src={InstagramIcon} alt="" />
            Instagram
          </option>
          <option className="">
            <img src={TwitterIcon} alt="" />
            Twitter
          </option>
        </select>
        <div className="w-full">
          <CustomInput
            placeholder="Enter Social Links"
            type="url"
            suffix={<SuffixButton />}
          />
        </div>
      </div>
      <div className="mt-8">
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center">
            <img src={FacebookIcon} alt="" />
            <p className="ml-2 text-sm font-medium text-[#29303D]">
              @kaizencosmetics
            </p>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 inline-block bg-[#33D198] rounded-full"></span>
            <p className="ml-1 mr-4 text-xs font-medium text-[rgba(41, 48, 61, 0.44)]">
              Last analyzed 4 hours ago
            </p>
            <img className="mr-4" src={RefreshIcon} alt="" />
            <img src={CloseIcon} alt="" />
          </div>
        </div>
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center">
            <img src={InstagramIcon} alt="" />
            <p className="ml-2 text-sm font-medium text-[#29303D]">
              @kaizencosmetics
            </p>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 inline-block bg-[#33D198] rounded-full"></span>
            <p className="ml-1 mr-4 text-xs font-medium text-[rgba(41, 48, 61, 0.44)]">
              Last analyzed 4 hours ago
            </p>
            <img className="mr-4" src={RefreshIcon} alt="" />
            <img src={CloseIcon} alt="" />
          </div>
        </div>
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center">
            <img src={TwitterIcon} alt="" />
            <p className="ml-2 text-sm font-medium text-[#29303D]">
              @kaizencosmetics
            </p>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 inline-block bg-[#33D198] rounded-full"></span>
            <p className="ml-1 mr-4 text-xs font-medium text-[rgba(41, 48, 61, 0.44)]">
              Last analyzed 4 hours ago
            </p>
            <img className="mr-4" src={RefreshIcon} alt="" />
            <img src={CloseIcon} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Socials;
