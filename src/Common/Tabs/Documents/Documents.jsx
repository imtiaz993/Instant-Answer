import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import CustomInput from "../../../Common/CustomInput";
import CloseIcon from "../../../Assets/icons/close.svg";
import PdfIcon from "../../../Assets/icons/pdf.svg";
import SamplePDF from "../../../Assets/pdf/sample.pdf";
import PreviewModal from "./PreviewModal";
import axios from "axios";
import { toast } from "react-toastify";

const Documents = ({ hideText = false }) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [showModal, setShoModal] = useState(false);
  const [files, setFile] = useState([]);
  console.log(files);

  // function onFileChange(file) {
  //   const selectedFile = file;
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     const pdfData = new Uint8Array(reader.result);
  //     setFile([...files, pdfData]);
  //   };
  //   reader.readAsArrayBuffer(selectedFile);
  // }
  // useEffect(()=>{
  //   acceptedFiles.map((file) => {
  //     onFileChange(file);
  //   });
  // },[acceptedFiles])

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: ".docx",
  });
  const [loading, setLoading] = useState(false);
  const API_URI = "https://appi.instantanswer.co/api/knowledgebase/docx/";
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

  const filesData = acceptedFiles.map(
    (file) => `${file.path} - ${file.size} bytes`
  );

  return (
    <>
      {showModal && <PreviewModal setModal={setShoModal} pdf={SamplePDF} />}
      {!hideText && (
        <>
          <p className="mt-8 text-base font-bold text-black">
            Upload knowledge documents
          </p>
          <p className="mt-3 mb-2 text-base  text-dark-gray">
            Share any documents, guides, or manuals that contain important
            information about your products or services.
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
        {[1, 2, 3].map((item, index) => (
          <div
            className="w-[255px] h-[220px] border border-darker-border  rounded-lg py-3 px-4 mr-6 mb-6 cursor-pointer"
            onClick={() => {
              setShoModal(true);
            }}
          >
            <div className="thumbnail-pdf w-[220px] pr-4 h-[150px] border border-light-dark-border rounded overflow-hidden">
              <Document width="100%" file={SamplePDF}>
                <Page scale={1.2 / 2.8} pageNumber={1} />
              </Document>
            </div>
            <div className="flex justify-between items-start mt-1 pl-1 pr-2">
              <div>
                <p className="text-sm font-medium text-dark-gray">Sample.pdf</p>
                <p className="text-sm font-medium text-last-upload">
                  Uploaded 4 hours ago
                </p>
              </div>
              <div className="flex items-center mt-1">
                <img className="mr-2" src={PdfIcon} alt="" />{" "}
                <img src={CloseIcon} alt="" />
              </div>
            </div>
          </div>
        ))}

        {/* {files.map((item) => (
          <div
            className="w-[255px] h-[220px] border border-darker-border rounded-lg py-3 px-4 mr-6 mb-6"
          >
            <div className="thumbnail-pdf w-[220px] pr-4 h-[150px] border border-light-dark-border rounded overflow-hidden cursor-pointer"  onClick={() => {
              setShoModal(true);
            }}>
              <Document width="100%" file={item}>
                <Page scale={1.2 / 2.8} pageNumber={1} />
              </Document>
            </div>
            <div className="flex justify-between items-start mt-1 pl-1 pr-2">
              <div>
                <p className="text-sm font-medium text-dark-gray">Sample.pdf</p>
                <p className="text-sm font-medium text-last-upload">
                  Uploaded 4 hours ago
                </p>
              </div>
              <div className="flex items-center mt-1">
                <img className="mr-2 cursor-pointer" src={PdfIcon} alt="" />{" "}
                <img className="cursor-pointer" src={CloseIcon} alt="" />
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </>
  );
};

export default Documents;
