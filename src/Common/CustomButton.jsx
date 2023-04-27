import React from "react";

const CustomButton = ({ title, prefix, outlined, styles, onClick }) => {
  return (
    <button
      className={`flex items-center text-base font-medium bg-[#7F56D9] rounded-lg py-3 px-5 ${
        outlined
          ? "border border-[#667085] text-[#667085]"
          : "border-none text-white"
      } ${styles}`}
      onClick={onClick}
    >
      {prefix && <img className="mr-2" src={prefix} alt="" />}
      {title}
    </button>
  );
};

export default CustomButton;
