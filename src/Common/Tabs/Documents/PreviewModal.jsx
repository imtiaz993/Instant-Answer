import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import CloseIcon from "../../../Assets/icons/close.svg";

const PreviewModal = ({ setModal, pdf }) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div className="flex justify-center md:items-center fixed z-10 top-0 bottom-0 left-0 right-0 w-screen h-screen bg-[#0000008F]">
      <div className="max-h-[calc(100vh-30%)] md:max-h-[calc(100vh-15%)] relative top-[10%] md:top-0 overflow-y-auto py-4 w-11/12 md:w-full mx-auto z-10 max-w-3xl bg-white border border-[#66708533] rounded-lg">
        <div className="flex justify-end mb-4 px-4">
          <img
          className=" cursor-pointer"
            onClick={() => {
              setModal(false);
            }}
            src={CloseIcon}
            alt=""
          />
        </div>
        <div className="pdf-preview h-[calc(100%-60px)] md:h-[440px] overflow-y-auto px-4 ">
          <Document
            width="100%"
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page scale={1 / 1} pageNumber={pageNumber} />
          </Document>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            &lt;
          </button>
          <p c className="mx-2">
            Page {pageNumber} of {numPages}
          </p>

          <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
