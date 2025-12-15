"use client";

import { useState } from "react";
import Image from "next/image";
import { FilePenLine } from "lucide-react";
import BasicInfoForm from "./BasicInfoForm";
import AccountInfoForm from "./AccountInfoForm";

/* ===== STATIC USER DATA ===== */
const STATIC_USER = {
  firstName: "Ankit",
  lastName: "Sharma",
  role: "Customer",
  picture: "/default-profile.png",
};

export default function UpdateProfile() {
  const [activeTab, setActiveTab] = useState("basic");
  const [profilePic, setProfilePic] = useState(STATIC_USER.picture);
  const [showUpdatePicBtn, setShowUpdatePicBtn] = useState(false);

  // Static image update
  const handleProfileUpdate = () => {
    setShowUpdatePicBtn(false);
  };

  return (
    <div className="max-w-6xl my-8 mx-auto bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8">
      {/* Left Side */}
      <div className="flex flex-col items-center bg-[#E9E9CF] rounded-xl p-5 sm:p-6 w-full md:w-1/3 relative">
        <div className="flex items-center justify-between w-full mb-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-main">
            Profile Picture
          </h3>

          <label
            htmlFor="profileUpload"
            className="p-2 rounded-xl border border-[#2E4E2C] cursor-pointer hover:bg-[#d5d5b5] transition"
          >
            <FilePenLine className="w-5 h-5 sm:w-6 sm:h-6 text-[#2E4E2C]" />
            <input
              id="profileUpload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setProfilePic(URL.createObjectURL(file));
                  setShowUpdatePicBtn(true);
                }
              }}
            />
          </label>
        </div>

        <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 relative">
          <Image
            src={profilePic}
            alt="Profile"
            fill
            className="rounded-full object-cover"
          />
        </div>

        <span className="mt-3 font-semibold text-lg sm:text-xl text-green-900 text-center">
          {STATIC_USER.firstName} {STATIC_USER.lastName}
        </span>
        <p className="text-sm text-green-700">{STATIC_USER.role}</p>

        {showUpdatePicBtn && (
          <div className="mt-5 flex justify-center w-full">
            <button
              onClick={handleProfileUpdate}
              className="bg-[#2E4E2C] text-white px-4 sm:px-6 py-2 rounded-full text-sm font-medium hover:bg-[#234021] transition-all w-full sm:w-auto"
            >
              Update Picture
            </button>
          </div>
        )}
      </div>

      {/* Right Side */}
      <div className="flex-1 space-y-3">
        {/* Tabs */}
        <div className="flex gap-2 sm:gap-3 mb-6 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => setActiveTab("basic")}
            className={`font-medium px-5 sm:px-8 py-2 rounded-md transition ${
              activeTab === "basic"
                ? "bg-main text-white"
                : "bg-[#E9E9CF] text-[#2E4E2C]"
            }`}
          >
            Basic Information
          </button>

          <button
            onClick={() => setActiveTab("account")}
            className={`font-medium px-5 sm:px-8 py-2 rounded-md transition ${
              activeTab === "account"
                ? "bg-main text-white"
                : "bg-[#E9E9CF] text-[#2E4E2C]"
            }`}
          >
            Account Information
          </button>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-[#2E4E2C]">
          {activeTab === "basic"
            ? "Personal Information"
            : "Account Information"}
        </h2>

        <p className="text-sm text-[#585656] mb-6 sm:mb-8">
          {activeTab === "basic"
            ? "Your personal details and contact information"
            : "Update your email, phone, and password information"}
        </p>

        {activeTab === "basic" ? <BasicInfoForm /> : <AccountInfoForm />}
      </div>
    </div>
  );
}
