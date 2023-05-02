import React, { useState } from "react";
import CustomInput from "../../../Common/CustomInput";
import Select, { components } from "react-select";
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

const CustomOption = (props) => (
  <components.Option {...props} >
    <div className="flex">
      <img className="mr-1" src={props.data.icon} alt="" />
      {props.data.label}
    </div>
  </components.Option>
);

const Socials = ({ hideText = false }) => {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const options = [
    {
      value: "Facebook",
      label: "Facebook",
      icon: FacebookIcon,
    },
    {
      value: "Instagram",
      label: "Instagram",
      icon: InstagramIcon,
    },
    {
      value: "Twitter",
      label: "Twitter",
      icon: TwitterIcon,
    },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: 160, 
      height: 52,
      marginTop:1,
      marginRight:10,
      borderRadius:6,
      marginBottom:-4,
    })
  };

  return (
    <>
      {!hideText && (
        <>
          <p className="mt-8 text-base font-bold text-black">
            Add your social accounts
          </p>
          <p className="mt-3 mb-2 text-base  text-[#29303D]">
            Connect your social media accounts, allowing the AI chat agent to
            stay up-to-date with your latest posts and promotions.
          </p>
        </>
      )}
      <div className={`flex ${hideText && "mt-4"}`}>
        <Select
          options={options}
          styles={customStyles}
          components={{ Option: CustomOption }}
          value={selectedOption}
          onChange={handleChange}
        />
        <div className="w-full -mb-6">
          <CustomInput
            placeholder="Enter Social Links"
            type="url"
            suffix={<SuffixButton />}
          />
        </div>
      </div>
      <div className="mt-4 md:mt-8">
        <div className="md:flex justify-between items-center mb-5">
          <div className="flex items-center">
            <img src={FacebookIcon} alt="" />
            <p className="ml-2 text-sm font-medium text-[#29303D]">
              @kaizencosmetics
            </p>
          </div>
          <div className="flex items-center md:w-60 text-left justify-between">
            <div className="flex items-center mt-2 md:md-0">
              {" "}
              <span className="w-3 h-3 inline-block bg-[#33D198] rounded-full"></span>
              <p className="ml-1 mr-4 text-xs font-medium text-[rgba(41, 48, 61, 0.44)]">
                Last analyzed 4 hours ago
              </p>
            </div>
            <div className="flex -mt-9 md:mt-0">
              <img className="mr-4 cursor-pointer" src={RefreshIcon} alt="" />
              <img className="cursor-pointer" src={CloseIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="md:flex justify-between items-center mb-5">
          <div className="flex items-center">
            <img src={InstagramIcon} alt="" />
            <p className="ml-2 text-sm font-medium text-[#29303D]">
              @kaizencosmetics
            </p>
          </div>
          <div className="flex items-center md:w-60 text-left justify-between">
            <div className="flex items-center mt-2 md:md-0">
              {" "}
              <span className="w-3 h-3 inline-block bg-[#33D198] rounded-full"></span>
              <p className="ml-1 mr-4 text-xs font-medium text-[rgba(41, 48, 61, 0.44)]">
                Last analyzed 4 hours ago
              </p>
            </div>
            <div className="flex -mt-9 md:mt-0">
              <img className="mr-4 cursor-pointer" src={RefreshIcon} alt="" />
              <img className="cursor-pointer" src={CloseIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="md:flex justify-between items-center mb-5">
          <div className="flex items-center">
            <img src={TwitterIcon} alt="" />
            <p className="ml-2 text-sm font-medium text-[#29303D]">
              @kaizencosmetics
            </p>
          </div>
          <div className="flex items-center md:w-60 text-left justify-between">
            <div className="flex items-center mt-2 md:md-0">
              {" "}
              <span className="w-3 h-3 inline-block bg-[#33D198] rounded-full"></span>
              <p className="ml-1 mr-4 text-xs font-medium text-[rgba(41, 48, 61, 0.44)]">
                Last analyzed 4 hours ago
              </p>
            </div>
            <div className="flex -mt-9 md:mt-0">
              <img className="mr-4 cursor-pointer" src={RefreshIcon} alt="" />
              <img className="cursor-pointer" src={CloseIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Socials;
