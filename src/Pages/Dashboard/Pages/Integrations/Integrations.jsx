import React, { useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import PublicLinkIcon from "../../../../Assets/icons/public-link.svg";
import EmbededJsCodeIcon from "../../../../Assets/icons/embeded-js-code.svg";
import MessengerIcon from "../../../../Assets/icons/messenger.svg";
import InstagramIcon from "../../../../Assets/icons/instagram.svg";
import PublicLink from "./Popups/PublicLink";
import Instagram from "./Popups/Instagram";
import Messenger from "./Popups/Messenger";
import Whatsapp from "./Popups/Whatsapp";
import EmbededJs from "./Popups/EmbededJs";

const Integrations = () => {
  const [modal, setModal] = useState("");
  const openModal = () => {
    switch (modal) {
      case "Public Link":
        return <PublicLink setModal={setModal}/>;
      case "Embed Js Code":
        return <EmbededJs setModal={setModal}/>;
      case "Instagram":
        return <Instagram setModal={setModal}/>;
      case "Messenger":
        return <Messenger setModal={setModal}/>;
      case "Whatsapp":
        return <Whatsapp setModal={setModal}/>;
      default:
        break;
    }
  };
  return (
    <DashboardLayout>
      {openModal()}
      <div>
        <h1 className="mb-4 text-xl font-bold text-dark-gray">Integrations</h1>
        <p className="mb-3 text-base text-black">
          Connect your AI assistant to one of our many integrations!
        </p>
        <h1 className="mb-4 text-xl font-bold text-dark-gray">Widget Settings</h1>
      </div>
      <div className="px-4 md:px-8 py-8 bg-white border border-[rgba(102, 112, 133, 0.2]  rounded-xl">
        <div className="grid grid-cols-2 gap-4 pb-5 border-b border-dark-border">
          <div
            onClick={() => {
              setModal("Public Link");
            }}
            className="flex flex-col items-center justify-center py-8 border border-darker-border rounded-xl cursor-pointer"
          >
            <img src={PublicLinkIcon} alt="" />
            <p className="mt-2 text-base font-bold text-dark-gray">
              Public Link
            </p>
          </div>
          <div
            onClick={() => {
              setModal("Embed Js Code");
            }}
            className="flex flex-col items-center justify-center py-8 border border-darker-border rounded-xl cursor-pointer"
          >
            <img src={EmbededJsCodeIcon} alt="" />
            <p className="mt-2 text-base font-bold text-dark-gray">
              Embed JS Code
            </p>
          </div>
        </div>
        <h1 className="mt-5 mb-2 text-base font-bold text-dark-gray">
          Other Integrations
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            onClick={() => {
              setModal("Instagram");
            }}
            className="flex flex-col items-center justify-center py-8 border border-darker-border rounded-xl cursor-pointer"
          >
            <img className="w-9 h-9" src={InstagramIcon} alt="" />
            <p className="mt-2 text-base font-bold text-dark-gray">Instagram</p>
          </div>
          <div
            onClick={() => {
              setModal("Messenger");
            }}
            className="flex flex-col items-center justify-center py-8 border border-darker-border rounded-xl cursor-pointer"
          >
            <img src={MessengerIcon} alt="" />
            <p className="mt-2 text-base font-bold text-dark-gray">Messenger</p>
          </div>
          <div
            onClick={() => {
              setModal("Whatsapp");
            }}
            className="flex flex-col items-center justify-center py-8 border border-darker-border rounded-xl cursor-pointer"
          >
            <img src={EmbededJsCodeIcon} alt="" />
            <p className="mt-2 text-base font-bold text-dark-gray">Whatsapp</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Integrations;
