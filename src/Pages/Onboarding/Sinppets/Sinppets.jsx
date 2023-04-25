import React from "react";
import OnboardingLayout from "../OnboardingLayout";
import CustomInput from "../../../Common/CustomInput";

const SuffixButton = () => (
  <button className="ml-2 bg-[#7F56D9] rounded-lg py-2 px-5  border-none text-white text-sm font-medium">
    Add
  </button>
);

const Sinppets = () => {
  return (
    <OnboardingLayout>
      <p className="mt-8 text-base font-bold text-black">Add more information</p>
      <p className="mt-3 mb-2 text-base  text-[#29303D]">
      Include additional details about your business or offerings in text form to further enhance the AI chat agent's knowledge.
      </p>
      <CustomInput
        placeholder="Add Text"
        type="text"
        suffix={<SuffixButton />}
      />
    </OnboardingLayout>
  );
};

export default Sinppets;
