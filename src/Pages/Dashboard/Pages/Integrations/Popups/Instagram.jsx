import React from "react";
import CustomButton from "../../../../../Common/CustomButton";

const Instagram = ({ setModal }) => {
  return (
    <div className="flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 w-screen h-screen bg-[#0000008F]">
      <div className="py-8 px-7 w-11/12 md:w-full mx-auto z-10 max-w-lg bg-white border border-[#66708533] rounded-lg">
        <h1 className="text-xl font-bold text-[#29303D]">Instagram</h1>
        <p className="mt-4 text-sm font-medium text-[#29303D]">
          Contact us if you want to integrate your AI chat bot with Instagram.
        </p>
        <div className="mt-7">
          <CustomButton
            title="Cancel"
            styles={"bg-white text-[#667085] px-4 py-2"}
            outlined
            onClick={() => {
              setModal("");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Instagram;
