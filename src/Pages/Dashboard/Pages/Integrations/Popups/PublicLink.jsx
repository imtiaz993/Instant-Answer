import React, { useState } from "react";
import CustomInput from "../../../../../Common/CustomInput";
import CustomButton from "../../../../../Common/CustomButton";
import CopyIcon from "../../../../../Assets/icons/copy.svg";

const PublicLink = ({ setModal }) => {
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Copied!");
      setTimeout(() => {
        setCopySuccess("");
      }, 1000);
    } catch (err) {
      setCopySuccess("Failed to copy!");
      setTimeout(() => {
        setCopySuccess("");
      }, 1000);
    }
  };

  return (
    <div className="flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 w-screen h-screen bg-[#0000008F]">
      <div className="py-8 px-7 w-11/12 md:w-full mx-auto z-10 max-w-lg bg-white border border-[#66708533] rounded-lg">
        <h1 className="text-xl font-bold text-[#29303D]">Public Link</h1>
        <div className="flex justify-between items-center">
          <p className="mt-4 text-sm font-medium text-[#29303D]">
            Please enter a link
          </p>
          <p className="mt-4 text-sm font-medium text-[#29303D]">
            {copySuccess}
          </p>
        </div>
        <div>
          <CustomInput
            label=""
            type="url"
            value="instantanswer.ai/yourbusiness"
            placeholder="Enter Link"
            styles={"my-4"}
            suffix={
              <img
                src={CopyIcon}
                alt=""
                onClick={() => copyToClipBoard("instantanswer.ai/yourbusiness")}
              />
            }
          />
          <div className="flex mt-6">
            <CustomButton
              title="Cancel"
              styles={"bg-white text-[#667085] px-4 py-2"}
              outlined
              onClick={() => {
                setModal("");
              }}
            />
            <CustomButton
              title="Done"
              styles={"ml-2 px-6 py-2"}
              onClick={() => {
                setModal("");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicLink;
