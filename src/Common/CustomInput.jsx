import React from "react";
import Info from "../Assets/icons/info.svg";

const CustomInput = ({
  label,
  prefix,
  type,
  placeholder,
  onChange,
  suffix,
}) => {
  return (
    <div className="mb-3">
      <label className="mb-1.5 text-sm font-medium text-[#344054]">
        {label}
      </label>
      <div className="flex items-center py-2 px-3 border border-[#D0D5DD] rounded-lg">
        <span>
          <img src={prefix} alt="" />
        </span>
        <input
          className="w-full text-base font-medium text-[#667085] ml-2 outline-none"
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
        {suffix ? (
          suffix
        ) : (
          <span className="ml-auto">
            <img src={Info} alt="" />
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
