import React from "react";
import WellnessContactForm from "./form";
import TopBanner from "../Components/TopBanner";
export default function Contact() {
  return (
    <main>
     <TopBanner Page={"Contact Us"}/>

      {/* form */}
      <WellnessContactForm />
    </main>
  );
}
