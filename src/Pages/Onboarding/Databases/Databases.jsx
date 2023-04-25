import React from "react";
import OnboardingLayout from "../OnboardingLayout";
import CustomInput from "../../../Common/CustomInput";

const SuffixButton = () => (
  <button className="ml-2 bg-[#7F56D9] rounded-lg py-2 px-5  border-none text-white text-sm font-medium">
    Upload
  </button>
);

const Databases = () => {
  return (
    <OnboardingLayout>
      <p className="mt-8 text-base font-bold text-black">Add your databases/ knowledge bases</p>
      <p className="mt-3 mb-2 text-base  text-[#29303D]">
        Upload any databases or knowledge bases in CSV format for the AI chat
        agent to reference when helping customers.
      </p>
      <CustomInput
        placeholder="Click or drag and drop,"
        type="file"
        suffix={<SuffixButton />}
      />
    </OnboardingLayout>
  );
};

export default Databases;
