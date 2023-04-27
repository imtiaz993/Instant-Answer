import React from "react";
import CustomInput from "../../../Common/CustomInput";
import CloseIcon from "../../../Assets/icons/close.svg";

const SuffixButton = () => (
  <button className="ml-2 bg-[#7F56D9] rounded-lg py-2 px-5  border-none text-white text-sm font-medium">
    Add
  </button>
);

const Sinppets = ({ hideText = false }) => {
  return (
    <>
      {!hideText && (
        <>
          <p className="mt-8 text-base font-bold text-black">
            Add more information
          </p>
          <p className="mt-3 mb-2 text-base  text-[#29303D]">
            Include additional details about your business or offerings in text
            form to further enhance the AI chat agent's knowledge.
          </p>
        </>
      )}
      <CustomInput
        styles={"mt-4"}
        placeholder="Add Text"
        type="text"
        suffix={<SuffixButton />}
      />
      <div className="mt-8">
        <div className="flex justify-between pb-3 mb-4 border-b border-[#0000000A]">
          <div>
            <p className="text-sm font-medium text-[#29303D]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore
            </p>
            <p className="mt-2 text-sm font-medium text-[#29303D70] ">Uploaded 4 hours ago</p>
          </div>
          <div className="mt-2 ml-12 w-8">
            <img src={CloseIcon} alt="" />
          </div>
        </div>
        <div className="flex justify-between pb-3 mb-4 border-b border-[#0000000A]">
          <div>
            <p className="text-sm font-medium text-[#29303D]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore
            </p>
            <p className="mt-2 text-sm font-medium text-[#29303D70] ">Uploaded 4 hours ago</p>
          </div>
          <div className="mt-2 ml-12 w-8">
            <img src={CloseIcon} alt="" />
          </div>
        </div>
        <div className="flex justify-between pb-3 mb-4 border-b border-[#0000000A]">
          <div>
            <p className="text-sm font-medium text-[#29303D]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore
            </p>
            <p className="mt-2 text-sm font-medium text-[#29303D70] ">Uploaded 4 hours ago</p>
          </div>
          <div className="mt-2 ml-12 w-8">
            <img src={CloseIcon} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sinppets;
