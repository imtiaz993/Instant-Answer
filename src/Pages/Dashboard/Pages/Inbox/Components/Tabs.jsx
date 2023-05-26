import React from "react";
import InboxIcon from "../../../../../Assets/icons/knowledge-base.svg";
import ReviewIcon from "../../../../../Assets/icons/review.svg";
const Tabs = ({ activeTab, setactiveTab, setChatList }) => {
  return (
    <div className="flex mb-4 border-b border-[#e2e2e2]">
      <div
        className={`flex w-24 items-center justify-center cursor-pointer py-2 ${
          activeTab === "All" && "border-b-2 border-active-color"
        }`}
        onClick={() => {
          setactiveTab("All");
          setChatList(true)
        }}
      >
        <img src={InboxIcon} alt="" />
        <p
          className={`whitespace-nowrap ml-1 text-sm font-bold ${
            activeTab === "All" ? "text-active-color" : "text-light-gray"
          }`}
        >
          All
        </p>
      </div>
      {/* <div
        className={`flex items-center cursor-pointer py-2 ${
          activeTab === "Review Recommended" && "border-b-2 border-active-color"
        }`}
        onClick={() => {
          setactiveTab("Review Recommended");
          setChatList(true)
        }}
      >
        <img src={ReviewIcon} alt="" />
        <p
          className={`whitespace-nowrap ml-1 text-sm font-bold ${
            activeTab === "Review Recommended"
              ? "text-active-color"
              : "text-light-gray"
          }`}
        >
          Review Recommended
        </p>
      </div> */}
    </div>
  );
};

export default Tabs;
