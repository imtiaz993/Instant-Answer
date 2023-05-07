import React, { useState } from "react";
import CustomButton from "../../../../../Common/CustomButton";
import ReviewRecomendedUser from "../../../../../Assets/icons/review-recomended-user.svg";
import SeeAllIcon from "../../../../../Assets/icons/see-all.svg";

const ReviewRecomendedChats = () => {
  const [seeAllReviewRecomended, setSeeAllReviewRecomended] = useState(false);
  const reviewRecomendedChats = [
    { name: "Daniel Adams", update: "Just now" },
    { name: "Daniel Adams", update: "Just now" },
    { name: "Daniel Adams", update: "Just now" },
    { name: "Daniel Adams", update: "Just now" },
    { name: "Daniel Adams", update: "Just now" },
  ];
  return (
    <div className="min-w-[320px] h-[390px] md:h-auto overflow-y-auto  bg-white border border-dashboard-card-border rounded-xl p-4">
      <h1 className="text-base font-bold text-dark-heading">
        Latest Chats (Review Recommended)
      </h1>
      <p className="text-sm text-dashboard-primary-text">
        Review these chats as soon as possible to ensure maximum bot accuracy.
      </p>
      <div>
        {(seeAllReviewRecomended
          ? reviewRecomendedChats
          : reviewRecomendedChats.slice(0, 3)
        ).map((item) => (
          <div className="flex justify-between border border-[#E4E4E7] rounded-xl px-4 py-3 my-3">
            <div className="flex">
              <div>
                <img
                  className="w-9 h-9 rounded-full"
                  src={ReviewRecomendedUser}
                  alt=""
                />
              </div>
              <div className="ml-3">
                <h1 className="text-sm font-bold text-dark-heading">
                  {item.name}
                </h1>
                <p className="text-sm text-dashboard-primary-text">
                  {item.update}
                </p>
              </div>
            </div>
            <div>
              <CustomButton
                outlined
                title="Review"
                styles="py-2 text-[#4F46E5] border-[#E4E4E7]"
              />
            </div>
          </div>
        ))}
        <div
          className="flex justify-center cursor-pointer pt-2"
          onClick={() => {
            setSeeAllReviewRecomended(!seeAllReviewRecomended);
          }}
        >
          <p className="mr-2 text-sm font-medium text-[#4F46E5]">
            {seeAllReviewRecomended ? "See Less" : "See All"}
          </p>
          <img src={SeeAllIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ReviewRecomendedChats;
