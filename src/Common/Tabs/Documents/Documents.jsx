import React from "react";
import CustomInput from "../../../Common/CustomInput";

const SuffixButton = () => (
  <button className="ml-2 bg-[#7F56D9] rounded-lg py-2 px-4  border-none text-white text-sm font-medium">
    Upload
  </button>
);

const Documents = ({ hideText = false }) => {
  return (
    <>
     {!hideText && (
        <>
      <p className="mt-8 text-base font-bold text-black">
        Upload knowledge documents
      </p>
      <p className="mt-3 mb-2 text-base  text-[#29303D]">
      Share any documents, guides, or manuals that contain important information about your products or services.
      </p>
      </>)}
      <CustomInput
        styles={"mt-4"}
        placeholder="Click or drag and drop,"
        type="file"
        suffix={<SuffixButton />}
      />
    </>
  );
};

export default Documents;
