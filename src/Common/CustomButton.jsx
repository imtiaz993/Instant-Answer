import React from "react";

const CustomButton = ({ title, outlined, styles, onClick }) => {
  return (
    <button
      className={`w-full text-white text-base font-medium bg-[#7F56D9] rounded-lg py-3 px-5 ${
        outlined ? "border border-[#667085]" : "border-none"
      } ${styles}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
