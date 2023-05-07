import React from "react";
import CustomInput from "../../../../../Common/CustomInput";
import CustomButton from "../../../../../Common/CustomButton";

const Whatsapp = ({ setModal }) => {
  return (
    <div className="flex justify-center md:items-center fixed z-30 top-0 bottom-0 left-0 right-0 w-screen h-screen bg-modal-overlay">
      <div className="max-h-[calc(100vh-25%)] md:max-h-[calc(100vh-10%)] relative top-[5%] md:top-0 overflow-y-auto py-8 px-7 w-11/12 md:w-full mx-auto z-10 max-w-lg bg-white border border-darker-border rounded-lg">
        <h1 className="text-xl font-bold text-dark-gray">
          WhatsApp integration
        </h1>
        <p className="my-4 text-sm font-medium text-dark-gray">
          Log in to{" "}
          <a
            className="underline"
            href="https://developers.facebook.com/apps"
            target="_blank" rel="noreferrer"
          >
            Facebook for Developers
          </a>{" "}
          and paste your Page ID, App secret and Access token below.{" "}
          <a
            className="underline"
            href="https://blog.quickchat.ai/post/how-to-build-an-ai-facebook-messenger-chat-bot/"
            target="_blank" rel="noreferrer"
          >
            Step-by-step guide
          </a>
        </p>
        <div>
          <CustomInput
            label="Facebook Page ID"
            type="url"
            placeholder="Enter Link"
            styles={"mt-1 mb-4"}
          />
          <CustomInput
            label="Facebook App Secret ID"
            type="url"
            placeholder="Enter Link"
            styles={"mt-1 mb-4"}
          />
          <CustomInput
            label="Facebook Access Token"
            type="url"
            placeholder="Enter Link"
            styles={"mt-1 mb-4"}
          />
          <div>
            <p className="mt-4 mb-1.5 text-sm font-medium text-dark-blue">
              Your Verify Token:
            </p>
            <p className="mb-4 text-sm text-dark-gray">
              Use this Verify Token when configuring your{" "}
              <a
                className="underline"
                href="https://developers.facebook.com/apps"
                target="_blank" rel="noreferrer"
              >
                Facebook app
              </a>
            </p>
          </div>
          <div className="flex">
            <CustomButton
              title="Cancel"
              styles={"bg-white text-light-gray px-4 py-2"}
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

export default Whatsapp;
