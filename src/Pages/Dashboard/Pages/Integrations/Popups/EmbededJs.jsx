import React from "react";
import CustomButton from "../../../../../Common/CustomButton";
import { useDropzone } from "react-dropzone";
import CloseIcon from "../../../../../Assets/icons/close.svg";

const EmbededJs = ({ setModal }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png, .pdf",
    maxSize: 3000000,
    multiple: false,
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path} className="flex justify-between items-center ">
      <span>
        {file.path} - {file.size} bytes
      </span>
      <img className="cursor-pointer" src={CloseIcon} alt="" />
    </li>
  ));

  return (
    <div className="flex justify-center md:items-center fixed top-0 bottom-0 left-0 right-0 w-screen h-screen bg-[#0000008F]">
      <div className="max-h-[calc(100vh-30%)] md:max-h-[calc(100vh-15%)] relative top-[10%] md:top-0 overflow-y-auto py-8 px-7 w-11/12 md:w-full mx-auto z-10 max-w-lg bg-white border border-[#66708533] rounded-lg">
        <h1 className="text-xl font-bold text-[#29303D]">Embeded JS Code</h1>

        <div>
          <div className="my-4">
            <p className="text-sm font-bold text-[#29303D]">Web widget</p>
            <p className="text-sm mt-2 text-[#29303D]">
              To add the web widget to your website include this JavaScript
              snippet at the end of your HEAD tag:
            </p>
          </div>
          <div>
            <p className="text-sm text-white bg-[#1A1717] py-2 px-4">
              ## Subscription not active
            </p>
          </div>
          <div className="my-4">
            <p className="text-sm font-bold text-[#29303D]">
              WordPress Integration
            </p>
            <p className="text-sm mt-2 text-[#29303D]">
              If you're using WordPress, you can find multiple tutorials showing{" "}
              <a
                className="underline"
                href="https://www.youtube.com/watch?v=oBC_JpV9meI"
                target="_blank"
                rel="noreferrer"
              >
                how to edit your HEAD tag manually
              </a>{" "}
              or{" "}
              <a
                className="underline"
                href="https://www.youtube.com/watch?v=TPoi6iGeweQ"
                target="_blank"
                rel="noreferrer"
              >
                with an external WordPress plugin
              </a>
              .
            </p>
          </div>
          <div className="my-4">
            <p className="text-sm font-bold text-[#29303D]">
              iFrame Integration
            </p>
            <p className="text-sm mt-2 text-[#29303D]">
              If you're using iFrame, you can find multiple tutorials showing{" "}
              <a
                className="underline"
                href="https://www.youtube.com/watch?v=oBC_JpV9meI"
                target="_blank"
                rel="noreferrer"
              >
                how to edit your HEAD tag manually
              </a>{" "}
            </p>
          </div>
          <div className="my-4">
            <p className="text-sm font-bold text-[#29303D]">Custom color</p>
            <p className="text-sm mt-2 text-[#29303D]">
              Change the color of your web widget button to complement your
              brand
            </p>
          </div>
          <div className="my-4">
            <p className="text-sm font-bold text-[#29303D]">AI Avatar</p>
            <p className="text-sm mt-2 text-[#29303D]">
              Change the avatar picture of your AI Assistant
            </p>
            <div
              {...getRootProps({
                className:
                  "flex flex-col justify-center items-center w-56 h-36 mt-5 mb-5 rounded-xl border border-dashed border-[#66708547] cursor-pointer",
              })}
            >
              <p className="text-sm font-medium text-[#29303D]">
                Drag or upload your image
              </p>
              <button className="mt-3 w-24 h-10 bg-[#6670851A] rounded text-sm font-medium text-[#29303D]">
                Choose File
              </button>
            </div>
            {files.length > 0 && (
              <div className="md:flex my-2">
                <h4 className="font-semibold mr-2 overflow-hidden">File: </h4>
                <ul className="w-full">{files}</ul>
              </div>
            )}
          </div>

          <div className="flex">
            <CustomButton
              title="Cancel"
              styles={"bg-white text-[#667085] w-20 px-4 py-2"}
              outlined
              onClick={() => {
                setModal("");
              }}
            />
            <CustomButton
              title="Done"
              styles={"ml-2 w-20 px-4 py-2"}
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

export default EmbededJs;
