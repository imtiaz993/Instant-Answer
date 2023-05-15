import React, { useState } from "react";
import CustomInput from "../../../../../Common/CustomInput";
import Select, { components } from "react-select";
import Info from "../../../../../Assets/icons/info.svg";
import English from "../../../../../Assets/icons/us-flag.svg";

const CustomOption = (props) => (
  <components.Option {...props}>
    <div className="flex">
      <img className="mr-2 w-1/4" src={props.data.icon} alt="" />
      {props.data.label}
    </div>
  </components.Option>
);

const Agent = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const options = [
    {
      value: "English",
      label: "English",
      icon: English,
    },
    {
      value: "French",
      label: "French",
      icon: English,
    },
    {
      value: "Spanish",
      label: "Spanish",
      icon: English,
    },
  ];
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      height: 42,
      border:"none",
      borderColor:'white',
      marginTop: -8,
      marginRight: 10,
      borderRadius: 6,
      marginBottom: -8,
      boxShadow:'none',
      "&:hover": {
        borderColor: "black",
      },
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: "none",
    }),
  };

  return (
    <div>
      <div>
        <h1 className="mb-4 text-xl font-bold text-dark-gray">
          Customize Your AI Chat Agent for a Perfect Fit!
        </h1>
        <p className="mb-3 text-base text-black">
          Let's fine-tune your AI chat agent to align with your business's
          unique needs and style. Tailor its language, personality, creativity,
          and more to create the ultimate conversational experience.
        </p>
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
              Select agent language
            </h1>
          </div>
          <p className="mt-3 mb-2 text-sm font-medium text-dark-gray">
            Select the language in which your AI chat agent will communicate
            with your customers.
          </p>
          <div
            className={`flex justify-between items-center py-2 px-3 border border-[#D0D5DD] mb-3 rounded-lg text-base font-medium text-dark-gray outline-none placeholder:text-light-gray disabled:bg-transparent  disabled:cursor-pointer`}
          >
            <Select
              options={options}
              styles={customStyles}
              components={{ Option: CustomOption }}
              value={selectedOption}
              onChange={handleChange}
            />

            <div className="cursor-pointer">
              <span className="ml-auto">
                <img src={Info} alt="" />
              </span>
            </div>
          </div>

        </div>
        <div className="my-8">
          <div className="flex">
            <div>
              <h1 className="w-7 h-7 inline-flex items-center justify-center text-sm font-bold text-white bg-yellow-numbering rounded-full">
                2
              </h1>
            </div>
            <h1 className="ml-2 inline-block text-base font-bold text-dark-gray">
              Product / service / Company nameSelect agent personality
            </h1>
          </div>
          <p className="mt-3 mb-2 text-sm font-medium text-dark-gray">
            From classic to mysterious, choose a personality that best
            complements your business's vibe.
          </p>
          <div
            className={`flex justify-between items-center py-2 px-3 border border-[#D0D5DD] mb-3 rounded-lg`}
          >
            <select className="text-base font-medium text-dark-gray outline-none placeholder:text-light-gray disabled:bg-transparent  disabled:cursor-pointer">
              <option>Classic</option>
              <option>Classic 2</option>
              <option>Classic 3</option>
            </select>
            <div className="cursor-pointer">
              <span className="ml-auto">
                <img src={Info} alt="" />
              </span>
            </div>
          </div>
        </div>
        <div className="my-8">
          <div className="flex">
            <div>
              <h1 className="w-7 h-7 inline-flex items-center justify-center text-sm font-bold text-white bg-yellow-numbering rounded-full">
                3
              </h1>
            </div>
            <h1 className="ml-2 inline-block text-base font-bold text-dark-gray">
              Choose agent level of creativity
            </h1>
          </div>
          <p className="mt-3 mb-2 text-sm font-medium text-dark-gray">
            Determine how creative you'd like your AI chat agent to be when
            engaging with users.
          </p>
          <div
            className={`flex justify-between items-center py-2 px-3 border border-[#D0D5DD] mb-3 rounded-lg`}
          >
            <select className="text-base font-medium text-dark-gray outline-none placeholder:text-light-gray disabled:bg-transparent  disabled:cursor-pointer">
              <option>Normal</option>
              <option>Normal 2</option>
              <option>Normal 3</option>
            </select>
            <div className="cursor-pointer">
              <span className="ml-auto">
                <img src={Info} alt="" />
              </span>
            </div>
          </div>
        </div>
        <div className="my-8">
          <div className="flex">
            <div>
              <h1 className="w-7 h-7 inline-flex items-center justify-center text-sm font-bold text-white bg-yellow-numbering rounded-full">
                4
              </h1>
            </div>
            <h1 className="ml-2 inline-block text-base font-bold text-dark-gray">
              Reply Specify Reply Length
            </h1>
          </div>
          <p className="mt-3 mb-2 text-sm font-medium text-dark-gray">
            Set your preferred reply length for your AI chat agent, from concise
            to more detailed responses.
          </p>
          <div
            className={`flex justify-between items-center py-2 px-3 border border-[#D0D5DD] mb-3 rounded-lg`}
          >
            <select className="text-base font-medium text-dark-gray outline-none placeholder:text-light-gray disabled:bg-transparent  disabled:cursor-pointer">
              <option>Normal</option>
              <option>Normal 2</option>
              <option>Normal 3</option>
            </select>
            <div className="cursor-pointer">
              <span className="ml-auto">
                <img src={Info} alt="" />
              </span>
            </div>
          </div>
        </div>
        <div className="my-8">
          <div className="flex">
            <div>
              <h1 className="w-7 h-7 inline-flex items-center justify-center text-sm font-bold text-white bg-yellow-numbering rounded-full">
                5
              </h1>
            </div>
            <h1 className="ml-2 inline-block text-base font-bold text-dark-gray">
              Enter your welcome message
            </h1>
          </div>
          <p className="mt-3 mb-2 text-sm font-medium text-dark-gray">
            Craft a warm and inviting welcome message for your AI chat agent to
            greet users upon their first interaction.
          </p>
          <CustomInput placeholder="Enter.." type="text" />
        </div>
      </div>
    </div>
  );
};

export default Agent;
