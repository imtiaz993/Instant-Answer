import React from "react";

const CustomButton = ({ title, prefix, outlined, styles, onClick }) => {
  return (
    <button
      className={`flex items-center text-base font-medium rounded-lg py-3 px-5 ${
        outlined
          ? "border border-light-gray text-light-gray"
          : "border-none text-white bg-active-color"
      } ${styles}`}
      onClick={onClick}
    >
      {prefix && <img className="mr-2" src={prefix} alt="" />}
      {title}
    </button>
  );
};

export default CustomButton;
