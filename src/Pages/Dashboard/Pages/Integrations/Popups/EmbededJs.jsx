import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { SketchPicker } from "react-color";
import { useDropzone } from "react-dropzone";
import CustomButton from "../../../../../Common/CustomButton";
import CloseIcon from "../../../../../Assets/icons/close.svg";

const EmbededJs = ({ setModal }) => {
  const modalRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [isSketchCrlor, setIsSketchColor] = useState(false);

  const [selectedColor, setSelectedColor] = useState("#E96179");

  const handleChangeComplete = (color) => {
    setIsSketchColor(true);
    setSelectedColor(color.hex);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (modalRef && modalRef.current) {
      if (!modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    }
  }

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
  console.log(showModal);
  return (
    <div className="flex justify-center md:items-center fixed z-30 top-0 bottom-0 left-0 right-0 w-screen h-screen bg-modal-overlay">
      <div
        className="max-h-[calc(100vh-30%)] md:max-h-[calc(100vh-15%)] relative top-[10%] md:top-0 overflow-y-auto py-8 px-7 w-11/12 md:w-full mx-auto z-10 max-w-lg bg-white border border-darker-border rounded-lg"
        // onClick={() => {
        //   setShowModal(false);
        // }}
      >
        <h1 className="text-xl font-bold text-dark-gray">Embeded JS Code</h1>

        <div>
          <div className="my-4">
            <p className="text-sm font-bold text-dark-gray">Web widget</p>
            <p className="text-sm mt-2 text-dark-gray">
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
            <p className="text-sm font-bold text-dark-gray">
              WordPress Integration
            </p>
            <p className="text-sm mt-2 text-dark-gray">
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
            <p className="text-sm font-bold text-dark-gray">
              iFrame Integration
            </p>
            <p className="text-sm mt-2 text-dark-gray">
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
            <p className="text-sm font-bold text-dark-gray">Custom color</p>
            <p className="text-sm mt-2 text-dark-gray">
              Change the color of your web widget button to complement your
              brand
            </p>
            <div className="flex mt-1">
              <div
                style={{
                  border:
                    selectedColor === "#E96179" && "2px solid #E96179",
                }}
                className={`w-7 md:w-10 h-7 md:h-10 mr-1 md:mr-2 flex items-center justify-center rounded-full  cursor-pointer `}
                onClick={() => {
                  setSelectedColor("#E96179");
                  setIsSketchColor(false);
                }}
              >
                <span className="inline-block bg-[#E96179] rounded-full w-5 md:w-7 h-5 md:h-7"></span>
              </div>
              <div
                style={{
                  border:
                    selectedColor === "#F7CD39" && "2px solid #F7CD39",
                }}
                className={`w-7 md:w-10 h-7 md:h-10 mr-1 md:mr-2 flex items-center justify-center rounded-full  cursor-pointer `}
                onClick={() => {
                  setSelectedColor("#F7CD39");
                  setIsSketchColor(false);
                }}
              >
                <span className="inline-block bg-[#F7CD39] rounded-full w-5 md:w-7 h-5 md:h-7"></span>
              </div>
              <div
                style={{
                  border:
                    selectedColor === "#68578B" && "2px solid #68578B",
                }}
                className={`w-7 md:w-10 h-7 md:h-10 mr-1 md:mr-2 flex items-center justify-center rounded-full  cursor-pointer `}
                onClick={() => {
                  setSelectedColor("#68578B");
                  setIsSketchColor(false);
                }}
              >
                <span className="inline-block bg-[#68578B] rounded-full w-5 md:w-7 h-5 md:h-7"></span>
              </div>
              <div
                style={{
                  border:
                    selectedColor === "#3DB48A" && "2px solid #3DB48A",
                }}
                className={`w-7 md:w-10 h-7 md:h-10 mr-1 md:mr-2 flex items-center justify-center rounded-full  cursor-pointer `}
                onClick={() => {
                  setSelectedColor("#3DB48A");
                  setIsSketchColor(false);
                }}
              >
                <span className="inline-block bg-[#3DB48A] rounded-full w-5 md:w-7 h-5 md:h-7"></span>
              </div>
              <div
                style={{
                  border:
                    selectedColor === "#5A80AF" && "2px solid #5A80AF",
                }}
                className={`w-7 md:w-10 h-7 md:h-10 mr-1 md:mr-2 flex items-center justify-center rounded-full  cursor-pointer `}
                onClick={() => {
                  setSelectedColor("#5A80AF");
                  setIsSketchColor(false);
                }}
              >
                <span className="inline-block bg-[#5A80AF] rounded-full w-5 md:w-7 h-5 md:h-7"></span>
              </div>
              <div
                style={{
                  border: selectedColor === "#D2814A" && "2px solid #D2814A",
                }}
                className={`w-7 md:w-10 h-7 md:h-10 mr-1 md:mr-2 flex items-center justify-center rounded-full  cursor-pointer `}
                onClick={() => {
                  setSelectedColor("#D2814A");
                  setIsSketchColor(false);
                }}
              >
                <span className="inline-block bg-[#D2814A] rounded-full w-5 md:w-7 h-5 md:h-7"></span>
              </div>
              <div
                style={{
                  border: selectedColor === "#3A1F24" && "2px solid #3A1F24",
                }}
                className={`w-7 md:w-10 h-7 md:h-10 mr-1 md:mr-2 flex items-center justify-center rounded-full  cursor-pointer `}
                onClick={() => {
                  setSelectedColor("#3A1F24");
                  setIsSketchColor(false);
                }}
              >
                <span className="inline-block bg-[#3A1F24] rounded-full w-5 md:w-7 h-5 md:h-7"></span>
              </div>
              <div
                style={{
                  border: isSketchCrlor && "2px solid " + selectedColor,
                }}
                className={`w-7 md:w-10 h-7 md:h-10 mr-1 md:mr-2 flex items-center justify-center rounded-full cursor-pointer `}
                onClick={() => setShowModal(true)}
              >
                <span
                  style={{
                    backgroundColor: isSketchCrlor && selectedColor,
                  }}
                  className={`inline-block ${
                    !isSketchCrlor &&
                    "bg-gradient-to-r from-red-500 via-white to-cyan-500"
                  } rounded-full w-5 md:w-7 h-5 md:h-7`}
                ></span>
              </div>
            </div>
          </div>
          <div className="my-4">
            <p className="text-sm font-bold text-dark-gray">AI Avatar</p>
            <p className="text-sm mt-2 text-dark-gray">
              Change the avatar picture of your AI Assistant
            </p>
            <div
              {...getRootProps({
                className:
                  "flex flex-col justify-center items-center w-56 h-36 mt-5 mb-5 rounded-xl border border-dashed border-[#66708547] cursor-pointer",
              })}
            >
              <p className="text-sm font-medium text-dark-gray">
                Drag or upload your image
              </p>
              <button className="mt-3 w-24 h-10 bg-[#6670851A] rounded text-sm font-medium text-dark-gray">
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
      {showModal &&
        ReactDOM.createPortal(
          <div className="w-full h-full flex justify-center items-center">
            <div ref={modalRef} className="fixed top-[13%]">
              <SketchPicker
                ref={modalRef}
                className="h-[300px]"
                color={selectedColor}
                onChangeComplete={handleChangeComplete}
              />
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default EmbededJs;
