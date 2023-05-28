import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import ColorSelector from "../../../../../Common/ColorSelector";
import CustomInput from "../../../../../Common/CustomInput";
import CloseIcon from "../../../../../Assets/icons/close.svg";
import Info from "../../../../../Assets/icons/info.svg";

const Widget = ({ getRootProps, acceptedFiles, setting, setSetting }) => {
  const [selectedColor, setSelectedColor] = useState(
    setting.color ? setting.color : "#E96179"
  );

  useEffect(() => {
    setSetting((prev) => ({ ...prev, color: selectedColor }));
  }, [selectedColor]);

  const files = acceptedFiles.map((file) => (
    <li key={file.path} className="flex justify-between items-center ">
      <span>
        {file.path} - {file.size} bytes
      </span>
      <img className="cursor-pointer" src={CloseIcon} alt="" />
    </li>
  ));

  return (
    <div>
      <div>
        <h1 className="my-5 text-xl font-bold text-dark-gray">
          Widget Settings
        </h1>
      </div>
      <div className="px-4 md:px-8 py-8 pb-2 bg-white border border-[rgba(102, 112, 133, 0.2]  rounded-xl">
        <div className="mb-8">
          <div className="flex">
            <div>
              <h1 className="w-7 h-7 inline-flex items-center justify-center text-sm font-bold text-white bg-yellow-numbering rounded-full">
                1
              </h1>
            </div>
            <h1 className="ml-2 inline-block text-base font-bold text-dark-gray">
              Colors
            </h1>
          </div>
          <p className="mt-3 mb-2 text-sm font-medium text-dark-gray">
            Please select a color
          </p>
          <ColorSelector
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        </div>
        {/* <div className="my-8">
          <div className="mb-4 flex">
            <div>
              <h1 className="w-7 h-7 inline-flex items-center justify-center text-sm font-bold text-white bg-yellow-numbering rounded-full">
                2
              </h1>
            </div>
            <h1 className="ml-2 inline-block text-base font-bold text-dark-gray">
              Widget Style
            </h1>
          </div>
          <div
            className={`flex justify-between items-center py-2 px-3 border border-[#D0D5DD] mb-3 rounded-lg`}
          >
            <select className="text-base font-medium text-dark-gray outline-none placeholder:text-light-gray disabled:bg-transparent  disabled:cursor-pointer">
              <option>Select between Boxy and Round</option>
              <option>Select between Boxy and Round 1</option>
              <option>Select between Boxy and Round 2</option>
            </select>
            <div className="cursor-pointer">
              <span className="ml-auto">
                <img src={Info} alt="" />
              </span>
            </div>
          </div>
        </div> */}
        <div className="my-8">
          <div className="mb-4 flex">
            <div>
              <h1 className="w-7 h-7 inline-flex items-center justify-center text-sm font-bold text-white bg-yellow-numbering rounded-full">
                3
              </h1>
            </div>
            <h1 className="ml-2 inline-block text-base font-bold text-dark-gray">
              Agent Name
            </h1>
          </div>

          <CustomInput
            value={setting.agent_name}
            onChange={(e) => {
              setSetting((prev) => ({ ...prev, agent_name: e.target.value }));
            }}
            placeholder="Enter.."
            type="text"
          />
        </div>
        <div className="my-8">
          <div className="mb-4 flex">
            <div>
              <h1 className="w-7 h-7 inline-flex items-center justify-center text-sm font-bold text-white bg-yellow-numbering rounded-full">
                4
              </h1>
            </div>
            <h1 className="ml-2 inline-block text-base font-bold text-dark-gray">
              Agent Profile Picture
            </h1>
          </div>
          <div>
            <div className="flex mt-5">
              {setting.profile_picture && (
                <div className="w-28 mr-8">
                  <img
                    className="w-full"
                    src={setting.profile_picture}
                    alt=""
                  />
                </div>
              )}
              <div
                {...getRootProps({
                  className:
                    "flex flex-col justify-center items-center w-56 h-36 mb-5 rounded-xl border border-dashed border-[#66708547] cursor-pointer",
                })}
              >
                <p className="text-sm font-medium text-dark-gray">
                  Drag or upload your image
                </p>
                <button className="mt-3 w-24 h-10 bg-[#6670851A] rounded text-sm font-medium text-dark-gray">
                  Choose File
                </button>
              </div>
            </div>

            {files.length > 0 && (
              <div className="md:flex my-2">
                <h4 className="font-semibold mr-2 overflow-hidden">File: </h4>
                <ul className="w-full">{files}</ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
