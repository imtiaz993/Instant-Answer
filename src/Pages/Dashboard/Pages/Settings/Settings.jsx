import React from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import CustomInput from "../../../../Common/CustomInput";

const Settings = () => {
  return (
    <DashboardLayout>
      <div>
        <div>
          <h1 className="mb-4 text-xl font-bold text-[#29303D]">
            Customize Your AI Chat Agent for a Perfect Fit!
          </h1>
          <p className="mb-3 text-base text-[#000000]">
            Let's fine-tune your AI chat agent to align with your business's
            unique needs and style. Tailor its language, personality,
            creativity, and more to create the ultimate conversational
            experience.
          </p>
        </div>
        <div className="p-8 pb-2 bg-white border border-[rgba(102, 112, 133, 0.2]  rounded-xl">
          <div className="mb-8">
            <div>
              <h1 className="w-7 h-7 inline-flex items-center justify-center text-sm font-bold text-white bg-[#EEBC59] rounded-full">
                1
              </h1>
              <h1 className="ml-2 inline-block text-base font-bold text-[#29303D]">
                Select agent language
              </h1>
            </div>
            <p className="mt-3 mb-2 text-xs font-medium text-[#29303D]">
              Select the language in which your AI chat agent will communicate
              with your customers.
            </p>
            <CustomInput placeholder="Enter.." type="text" />
          </div>
          <div className="my-8">
            <div>
              <h1 className="w-7 h-7 inline-flex items-center justify-center text-sm font-bold text-white bg-[#EEBC59] rounded-full">
                2
              </h1>
              <h1 className="ml-2 inline-block text-base font-bold text-[#29303D]">
                Product / service / Company nameSelect agent personality
              </h1>
            </div>
            <p className="mt-3 mb-2 text-xs font-medium text-[#29303D]">
              From classic to mysterious, choose a personality that best
              complements your business's vibe.
            </p>
            <CustomInput placeholder="Enter.." type="text" />
          </div>
          <div className="my-8">
            <div>
              <h1 className="w-7 h-7 inline-flex items-center justify-center text-sm font-bold text-white bg-[#EEBC59] rounded-full">
                3
              </h1>
              <h1 className="ml-2 inline-block text-base font-bold text-[#29303D]">
                Choose agent level of creativity
              </h1>
            </div>
            <p className="mt-3 mb-2 text-xs font-medium text-[#29303D]">
              Determine how creative you'd like your AI chat agent to be when
              engaging with users.
            </p>
            <CustomInput placeholder="Enter.." type="text" />
          </div>
          <div className="my-8">
            <div>
              <h1 className="w-7 h-7 inline-flex items-center justify-center text-sm font-bold text-white bg-[#EEBC59] rounded-full">
                4
              </h1>
              <h1 className="ml-2 inline-block text-base font-bold text-[#29303D]">
                Reply Specify Reply Length
              </h1>
            </div>
            <p className="mt-3 mb-2 text-xs font-medium text-[#29303D]">
              Set your preferred reply length for your AI chat agent, from
              concise to more detailed responses.
            </p>
            <CustomInput placeholder="Enter.." type="text" />
          </div>
          <div className="my-8">
            <div>
              <h1 className="w-7 h-7 inline-flex items-center justify-center text-sm font-bold text-white bg-[#EEBC59] rounded-full">
                5
              </h1>
              <h1 className="ml-2 inline-block text-base font-bold text-[#29303D]">
                Enter your welcome message
              </h1>
            </div>
            <p className="mt-3 mb-2 text-xs font-medium text-[#29303D]">
              Craft a warm and inviting welcome message for your AI chat agent
              to greet users upon their first interaction.
            </p>
            <CustomInput placeholder="Enter.." type="text" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1 className="my-5 text-xl font-bold text-[#29303D]">
            Widget Settings
          </h1>
        </div>
        <div className="p-8 pb-2 bg-white border border-[rgba(102, 112, 133, 0.2]  rounded-xl">
          <div className="mb-8">
            <div>
              <h1 className="w-7 h-7 inline-flex items-center justify-center text-sm font-bold text-white bg-[#EEBC59] rounded-full">
                1
              </h1>
              <h1 className="ml-2 inline-block text-base font-bold text-[#29303D]">
                Colors
              </h1>
            </div>
            <p className="mt-3 mb-2 text-xs font-medium text-[#29303D]">
              Please select a color
            </p>
          </div>
          <div className="my-8">
            <div className="mb-4">
              <h1 className="w-7 h-7 inline-flex items-center justify-center text-sm font-bold text-white bg-[#EEBC59] rounded-full">
                2
              </h1>
              <h1 className="ml-2 inline-block text-base font-bold text-[#29303D]">
                Widget Style
              </h1>
            </div>

            <CustomInput placeholder="Enter.." type="text" />
          </div>
          <div className="my-8">
            <div className="mb-4">
              <h1 className="w-7 h-7 inline-flex items-center justify-center text-sm font-bold text-white bg-[#EEBC59] rounded-full">
                3
              </h1>
              <h1 className="ml-2 inline-block text-base font-bold text-[#29303D]">
                Agent Name
              </h1>
            </div>

            <CustomInput placeholder="Enter.." type="text" />
          </div>
          <div className="my-8">
            <div className="mb-4">
              <h1 className="w-7 h-7 inline-flex items-center justify-center text-sm font-bold text-white bg-[#EEBC59] rounded-full">
                4
              </h1>
              <h1 className="ml-2 inline-block text-base font-bold text-[#29303D]">
                Agent Profile Picture
              </h1>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
