import React from "react";
import OnboardingLayout from "../OnboardingLayout";
import CustomInput from "../../../Common/CustomInput";

const SuffixButton = () => (
  <button className="ml-2 bg-[#7F56D9] rounded-lg py-2 px-5  border-none text-white text-sm font-medium">
    Add
  </button>
);

const WebPage = () => {
  return (
    <OnboardingLayout>
      <p className="mt-8 text-base font-bold text-black">Add your web pages</p>
      <p className="mt-3 mb-2 text-base  text-[#29303D]">
        List your website URLs so our AI chat agent can scan and gather relevant
        information to assist users (e.g. your homepage, blogs, about us page).
        The more content, the better.
      </p>
      <CustomInput
        placeholder="Enter URL"
        type="url"
        suffix={<SuffixButton />}
      />
    </OnboardingLayout>
  );
};

export default WebPage;
