import React, { useState, useEffect } from "react";
import CustomInput from "../../../Common/CustomInput";
import { useDropzone } from "react-dropzone";
import CloseIcon from "../../../Assets/icons/close.svg";
import DownloadIcon from "../../../Assets/icons/download.svg";
import Papa from "papaparse";
import SampleCSV from "../../../Assets/csv/sample.csv";
import axios from "axios";
import { toast } from "react-toastify";
const allowedExtensions = ["csv"];

const Databases = ({ hideText = false }) => {
  const [data, setData] = useState([]);
  const [files, setFiles] = useState([SampleCSV]);
  const handleFileChange = (e) => {
    if (e.target.files.length) {
      const inputFile = e.target.files[0];
      const fileExtension = inputFile?.type.split("/")[1];
      if (!allowedExtensions.includes(fileExtension)) {
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
      error: (error) => {},
    });
  };

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: ".csv",
  });
  const [loading, setLoading] = useState(false);
  const API_URI = "https://appi.instantanswer.co/api/knowledgebase/csv/";
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const handleUpload = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('document', acceptedFiles[0]);
    formData.append('chatbot', localStorage.getItem('chatbotname'));
    axios
      .post(API_URI, formData, config)
      .then((response) => {
        setLoading(false);
        toast.success(response.data.message);
        console.log(response.data);
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error?.response?.data?.message??error.message);
        console.error(error.message);
      });
  };

  useEffect(() => {
    if (files.length !== 0) {
      files.map((item) => {
        handleParse(item);
      });
    }
  }, [files]);

  const filesData = acceptedFiles.map(
    (file) => `${file.path} - ${file.size} bytes`
  );

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
        className={`flex mt-4 items-center justify-between py-2 px-3 border border-[#D0D5DD] mb-3 rounded-lg`}
      >
        <div
          {...getRootProps({
            className: "w-full",
          })}
        >
          <input
            className="w-full text-base font-medium text-dark-gray ml-2 outline-none placeholder:text-light-gray disabled:bg-transparent  disabled:cursor-pointer"
            type="text"
            placeholder={
              filesData.length > 0 ? filesData : "Click or drag and drop,"
            }
          />
        </div>
        <button
          className="ml-2 bg-active-color rounded-lg py-2 px-4  border-none text-white text-sm font-medium"
          onClick={handleUpload}
        >
          {loading ? "Uploading" : "Upload"}
        </button>
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
    </>
  );
};

export default Databases;
