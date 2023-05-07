import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { SketchPicker } from "react-color";

const ColorSelector = ({ selectedColor, setSelectedColor }) => {
  const modalRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [isSketchCrlor, setIsSketchColor] = useState(false);
  const handleChangeComplete = (color) => {
    setIsSketchColor(true);
    setSelectedColor(color.hex);
  };
  function handleClickOutside(event) {
    if (modalRef && modalRef.current) {
      if (!modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="flex mt-1">
        <div
          style={{
            border: selectedColor === "#E96179" && "2px solid #E96179",
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
            border: selectedColor === "#F7CD39" && "2px solid #F7CD39",
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
            border: selectedColor === "#68578B" && "2px solid #68578B",
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
            border: selectedColor === "#3DB48A" && "2px solid #3DB48A",
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
            border: selectedColor === "#5A80AF" && "2px solid #5A80AF",
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
      {showModal &&
        ReactDOM.createPortal(
          <div className="w-full h-full flex justify-center items-center">
            <div ref={modalRef} className="fixed z-40 top-[13%]">
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
    </>
  );
};

export default ColorSelector;
