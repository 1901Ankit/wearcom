"use client";
import UpdateProfile from "./UpdateProfile";
import TopBanner from "../Components/TopBanner";

export default function Profile() {
  return (
    <>
      <TopBanner Page={"My Profile"}/>

      <UpdateProfile />
    </>
  );
}
