import React from "react";
import CustomInput from "../../../Common/CustomInput";
import { useDropzone } from "react-dropzone";
import CloseIcon from "../../../Assets/icons/close.svg";

const SuffixButton = () => (
  <button className="ml-2 bg-[#7F56D9] rounded-lg py-2 px-4  border-none text-white text-sm font-medium">
    Upload
  </button>
);

const Documents = ({ hideText = false }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path} className="flex justify-between items-center ">
      <span>
        {file.path} - {file.size} bytes
      </span>
      <img className="cursor-pointer" src={CloseIcon} alt="" />
    </li>
  ));

  return (
    <>
      {!hideText && (
        <>
          <p className="mt-8 text-base font-bold text-black">
            Upload knowledge documents
          </p>
          <p className="mt-3 mb-2 text-base  text-[#29303D]">
            Share any documents, guides, or manuals that contain important
            information about your products or services.
          </p>
        </>
      )}
      <div
        {...getRootProps({
          className: "",
        })}
      >
        <CustomInput
          styles={"mt-4"}
          placeholder="Click or drag and drop,"
          type="text"
          suffix={<SuffixButton />}
          disabled
        />
      </div>
      {files.length > 0 && (
        <div className="md:flex my-2">
          <h4 className="font-semibold mr-2 overflow-hidden">Files: </h4>
          <ul className="w-full">{files}</ul>
        </div>
      )}
    </>
  );
};

export default Documents;
