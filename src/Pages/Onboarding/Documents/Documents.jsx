import React from "react";
import OnboardingLayout from "../OnboardingLayout";
import CustomInput from "../../../Common/CustomInput";

const SuffixButton = () => (
  <button className="ml-2 bg-[#7F56D9] rounded-lg py-2 px-4  border-none text-white text-sm font-medium">
    Upload
  </button>
);

const Documents = () => {
  return (
    <OnboardingLayout>
      <p className="mt-8 text-base font-bold text-black">
        Upload knowledge documents
      </p>
      <p className="mt-3 mb-2 text-base  text-[#29303D]">
        We're excited to have you on board! To help your AI chat agent better
        understand your business and provide top-notch service, please provide
        some information about your company and offerings.
      </p>
      <CustomInput
        placeholder="Click or drag and drop,"
        type="file"
        suffix={<SuffixButton />}
      />
    </OnboardingLayout>
  );
};

export default Documents;
