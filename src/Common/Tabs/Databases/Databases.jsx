import React, { useState, useEffect } from "react";
import CustomInput from "../../../Common/CustomInput";
import { useDropzone } from "react-dropzone";
import CloseIcon from "../../../Assets/icons/close.svg";
import DownloadIcon from "../../../Assets/icons/download.svg";
import Papa from "papaparse";
import SampleCSV from "../../../Assets/csv/sample.csv";
const allowedExtensions = ["csv"];

const SuffixButton = () => (
  <button className="ml-2 bg-active-color rounded-lg py-2 px-4  border-none text-white text-sm font-medium">
    Upload
  </button>
);

const Databases = ({ hideText = false }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: ".csv",
  });

  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [files, setFiles] = useState([SampleCSV]);
  console.log(data);
  const handleFileChange = (e) => {
    setError("");
    if (e.target.files.length) {
      const inputFile = e.target.files[0];
      const fileExtension = inputFile?.type.split("/")[1];
      if (!allowedExtensions.includes(fileExtension)) {
        setError("Please input a csv file");
        return;
      }
      setFiles([...files, inputFile]);
    }
  };
  const handleParse = (item) => {
    Papa.parse(item, {
      download: true,
      header: false,
      complete: (result) => {
        setData([...data, result.data]);
      },
      error: (error) => {
        setError(error);
      },
    });
  };

  useEffect(() => {
    if (files.length !== 0) {
      files.map((item) => {
        handleParse(item);
      });
    }
  }, [files]);

  // const files = acceptedFiles.map((file) => (
  //   <li key={file.path} className="flex justify-between items-center ">
  //     <span>
  //       {file.path} - {file.size} bytes
  //     </span>
  //     <img className="cursor-pointer" src={CloseIcon} alt="" />
  //   </li>
  // ));

  return (
    <>
      {!hideText && (
        <>
          <p className="mt-8 text-base font-bold text-black">
            Add your databases/ knowledge bases
          </p>
          <p className="mt-3 mb-2 text-base  text-dark-gray">
            Upload any databases or knowledge bases in CSV format for the AI
            chat agent to reference when helping customers.
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
      <div className="flex flex-wrap justify-center sm:justify-start">
        {data.map((item) => (
          <div className="w-[255px] h-[220px] border border-darker-border  rounded-lg py-3 px-4 mr-6 mb-6">
            <div className="thumbnail-pdf w-[220px] pr-4 h-[150px] border border-light-dark-border rounded overflow-hidden">
              <div>
                {item.map((object, index) =>
                  Object.entries(object).map(([key, value], idx) => (
                    <div className="inline text-[10px]" key={idx}>
                      {value},
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="flex justify-between items-start mt-1 pl-1 pr-2">
              <div>
                <p className="text-sm font-medium text-dark-gray">
                  Database CSV
                </p>
                <p className="text-sm font-medium text-last-upload">
                  Uploaded 4 hours ago
                </p>
              </div>
              <div className="flex items-center mt-1">
                <img className="mr-2" src={DownloadIcon} alt="" />{" "}
                <img src={CloseIcon} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* {files.length > 0 && (
        <div className="md:flex my-2">
          <h4 className="font-semibold mr-2 overflow-hidden">Files: </h4>
          <ul className="w-full">{files}</ul>
        </div>
      )} */}
    </>
  );
};

export default Databases;
