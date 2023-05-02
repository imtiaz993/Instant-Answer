import React from "react";
import Info from "../Assets/icons/info.svg";

const CustomInput = ({
  label,
  prefix,
  type,
  placeholder,
  onChange,
  suffix,
  styles,
  value,
  disabled,
}) => {
  return (
    <div className={`mb-3 ${styles} border  border-[#D0D5DD] rounded-lg`}>
      <label className="mb-1.5 text-sm font-medium text-[#344054]  ">
        {label}
      </label>
      <div className="flex items-center py-2 px-3">
        <span>
          <img src={prefix} alt="" />
        </span>
        <input
          className="w-full text-base font-medium text-[#29303D] ml-2 outline-none placeholder:text-[#667085] disabled:bg-transparent  disabled:cursor-pointer"
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          disabled={disabled}
        />
        <div className="cursor-pointer">
          {suffix ? (
            suffix
          ) : (
            <span className="ml-auto">
              <img src={Info} alt="" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomInput;
