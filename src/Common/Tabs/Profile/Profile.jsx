import React from "react";
import CustomInput from "../../../Common/CustomInput";
import CustomButton from "../../CustomButton";

const Profile = ({
  hideText,
  profile,
  setProfile,
  showSaveButton,
  handleUploadProfile,
  loading,
}) => {
  return (
    <>
      <div>
        <div className="my-8">
          <div className="flex">
            <h1 className="w-7 h-7 inline-flex items-center justify-center text-sm font-bold text-white bg-yellow-numbering rounded-full">
              1
            </h1>
            <h1 className="ml-2 inline-block text-base font-bold text-dark-gray">
              Product / service / Company name
            </h1>
          </div>
          <p className="mt-3 mb-2 text-sm font-medium text-dark-gray">
            {!hideText &&
              `To help your AI chat agent better understand your business and
            provide top-notch service, please provide some information about
            your company and offerings.`}
          </p>
          <CustomInput
            value={profile.name}
            onChange={(e) => {
              setProfile({ ...profile, name: e.target.value });
            }}
            placeholder="Enter.."
            type="text"
          />
        </div>
        <div className="my-8">
          <div className="mb-3 flex">
            <h1 className="w-7 h-7 inline-flex items-center justify-center text-sm font-bold text-white bg-yellow-numbering rounded-full">
              2
            </h1>
            <h1 className="ml-2 inline-block text-base font-bold text-dark-gray">
              Enter a short description
            </h1>
          </div>
          <CustomInput
            value={profile.description}
            onChange={(e) => {
              setProfile({ ...profile, description: e.target.value });
            }}
            placeholder="Enter.."
            type="text"
          />
        </div>
        <div>
          <div className="mb-3 flex">
            <h1 className="w-7 h-7 inline-flex items-center justify-center text-sm font-bold text-white bg-yellow-numbering rounded-full">
              3
            </h1>
            <h1 className="  ml-2 inline-block text-base font-bold text-dark-gray">
              How can people contact you?
            </h1>
          </div>
          <CustomInput
            value={profile.contact_you}
            onChange={(e) => {
              setProfile({ ...profile, contact_you: e.target.value });
            }}
            placeholder="Enter.."
            type="text"
          />
          {showSaveButton && (
            <CustomButton
              title={loading ? "Updating" : "Update"}
              styles="py-1.5 ml-auto px-6"
              onClick={handleUploadProfile}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
