import React from "react";
import CustomButton from "../../../../../Common/CustomButton";

const Instagram = ({ setModal }) => {
  return (
    <div className="flex justify-center items-center fixed z-30 top-0 bottom-0 left-0 right-0 w-screen h-screen bg-modal-overlay">
      <div className="py-8 px-7 w-11/12 md:w-full mx-auto z-10 max-w-lg bg-white border border-darker-border rounded-lg">
        <h1 className="text-xl font-bold text-dark-gray">Instagram</h1>
        <p className="mt-4 text-sm font-medium text-dark-gray">
          Contact us if you want to integrate your AI chat bot with Instagram.
        </p>
        <div className="mt-7">
          <CustomButton
            title="Cancel"
            styles={"bg-white text-light-gray px-4 py-2"}
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
