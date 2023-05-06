import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import CustomInput from "../../../Common/CustomInput";
import CloseIcon from "../../../Assets/icons/close.svg";
import PdfIcon from "../../../Assets/icons/pdf.svg";
import SamplePDF from "../../../Assets/pdf/sample.pdf";
import PreviewModal from "./PreviewModal";

const SuffixButton = () => (
  <button className="ml-2 bg-[#7F56D9] rounded-lg py-2 px-4  border-none text-white text-sm font-medium">
    Upload
  </button>
);

const Documents = ({ hideText = false }) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: ".pdf",
  });
  const [showModal, setShoModal] = useState(false);
  const [files, setFile] = useState([]);
  console.log(files)

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


  return (
    <>
      {showModal && <PreviewModal setModal={setShoModal} pdf={SamplePDF} />}
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
      <div className="flex flex-wrap justify-center sm:justify-start">
        <div
          className="w-[255px] h-[220px] border border-[#66708533]  rounded-lg py-3 px-4 mr-6 mb-6 cursor-pointer"
          onClick={() => {
            setShoModal(true);
          }}
        >
          <div className="thumbnail-pdf w-[220px] pr-4 h-[150px] border border-[#00000026] rounded overflow-hidden">
            <Document width="100%" file={SamplePDF}>
              <Page scale={1.2 / 2.8} pageNumber={1} />
            </Document>
          </div>
          <div className="flex justify-between items-start mt-1 pl-1 pr-2">
            <div>
              <p className="text-sm font-medium text-[#29303D]">Sample.pdf</p>
              <p className="text-sm font-medium text-[#29303D70]">
                Uploaded 4 hours ago
              </p>
            </div>
            <div className="flex items-center mt-1">
              <img className="mr-2" src={PdfIcon} alt="" />{" "}
              <img src={CloseIcon} alt="" />
            </div>
          </div>
        </div>
        <div
          className="w-[255px] h-[220px] border border-[#66708533] rounded-lg py-3 px-4 mr-6 mb-6 cursor-pointer"
          onClick={() => {
            setShoModal(true);
          }}
        >
          <div className="thumbnail-pdf w-[220px] pr-4 h-[150px] border border-[#00000026] rounded overflow-hidden">
            <Document width="100%" file={SamplePDF}>
              <Page scale={1.2 / 2.8} pageNumber={1} />
            </Document>
          </div>
          <div className="flex justify-between items-start mt-1 pl-1 pr-2">
            <div>
              <p className="text-sm font-medium text-[#29303D]">Sample.pdf</p>
              <p className="text-sm font-medium text-[#29303D70]">
                Uploaded 4 hours ago
              </p>
            </div>
            <div className="flex items-center mt-1">
              <img className="mr-2" src={PdfIcon} alt="" />{" "}
              <img src={CloseIcon} alt="" />
            </div>
          </div>
        </div>
        <div
          className="w-[255px] h-[220px] border border-[#66708533] rounded-lg py-3 px-4 mr-6 mb-6 cursor-pointer"
          onClick={() => {
            setShoModal(true);
          }}
        >
          <div className="thumbnail-pdf w-[220px] pr-4 h-[150px] border border-[#00000026] rounded overflow-hidden">
            <Document width="100%" file={SamplePDF}>
              <Page scale={1.2 / 2.8} pageNumber={1} />
            </Document>
          </div>
          <div className="flex justify-between items-start mt-1 pl-1 pr-2">
            <div>
              <p className="text-sm font-medium text-[#29303D]">Sample.pdf</p>
              <p className="text-sm font-medium text-[#29303D70]">
                Uploaded 4 hours ago
              </p>
            </div>
            <div className="flex items-center mt-1">
              <img className="mr-2" src={PdfIcon} alt="" />{" "}
              <img src={CloseIcon} alt="" />
            </div>
          </div>
        </div>
        {files.map((item) => (
          <div
            className="w-[255px] h-[220px] border border-[#66708533] rounded-lg py-3 px-4 mr-6 mb-6"
          >
            <div className="thumbnail-pdf w-[220px] pr-4 h-[150px] border border-[#00000026] rounded overflow-hidden cursor-pointer"  onClick={() => {
              setShoModal(true);
            }}>
              <Document width="100%" file={item}>
                <Page scale={1.2 / 2.8} pageNumber={1} />
              </Document>
            </div>
            <div className="flex justify-between items-start mt-1 pl-1 pr-2">
              <div>
                <p className="text-sm font-medium text-[#29303D]">Sample.pdf</p>
                <p className="text-sm font-medium text-[#29303D70]">
                  Uploaded 4 hours ago
                </p>
              </div>
              <div className="flex items-center mt-1">
                <img className="mr-2 cursor-pointer" src={PdfIcon} alt="" />{" "}
                <img className="cursor-pointer" src={CloseIcon} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Documents;
