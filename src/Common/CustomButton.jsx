import React from "react";

const CustomButton = ({ title, styles, onClick }) => {
  return (
    <div className={`bg-[#7F56D9] rounded-lg py-3 px-5 ${styles}`}>
      <button className="w-full border-none text-white text-base font-medium" onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default CustomButton;
