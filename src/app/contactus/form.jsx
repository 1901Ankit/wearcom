"use client";
import React, { useState } from "react";
import { Phone, Mail, LocateFixed } from "lucide-react";

export default function WellnessContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    location: "",
    subject: "",
    message: "",
  });

  /* ---------- HANDLERS (STATIC) ---------- */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.gender
    ) {
      alert("Please fill all required fields");
      return;
    }

    // ✅ static submit
    alert(
      `Form Submitted Successfully!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nGender: ${formData.gender}\nLocation: ${formData.location}`
    );

    // reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      gender: "",
      dob: "",
      location: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-24 py-8 sm:py-10">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 2xl:gap-32">
          {/* LEFT : FORM */}
          <div>
            <p className="uppercase tracking-wide">Send Us Email</p>
            <h1 className="text-[36px] sm:text-[48px] font-heading mb-6">
              Talk to Our{" "}
              <span className="text-[#ffd232]">Wellness Experts</span>
            </h1>

            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { name: "name", label: "Name", type: "text" },
                { name: "email", label: "Email", type: "email" },
                { name: "phone", label: "Phone", type: "tel" },
                { name: "subject", label: "Subject", type: "text" },
              ].map((field) => (
                <div key={field.name} className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-sm">
                    {field.label}
                  </label>
                  <input
                    {...field}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={`Enter Your ${field.label}`}
                    className="w-full px-4 py-2.5 border rounded-full"
                  />
                </div>
              ))}

              {/* Gender */}
              <div className="relative">
                <label className="absolute -top-3 left-3 bg-white px-1 text-sm">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border rounded-full"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* DOB */}
              <div className="relative">
                <label className="absolute -top-3 left-3 bg-white px-1 text-sm">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border rounded-full"
                />
              </div>

              {/* Location */}
              <div className="relative">
                <label className="absolute -top-3 left-3 bg-white px-1 text-sm">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter Your Location"
                  className="w-full px-4 py-2.5 border rounded-full"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <label className="absolute -top-3 left-3 bg-white px-1 text-sm">
                  Remarks
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Description"
                  className="w-full px-4 py-3 border rounded-3xl resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#ffd232] py-3 rounded-full font-medium"
              >
                Submit
              </button>
            </form>
          </div>

          {/* RIGHT : CONTACT INFO */}
          <div className="pt-4">
            <h1 className="text-[36px] sm:text-[48px] font-heading mb-4">
              Get In <span className="text-[#ffd232]">Touch</span>
            </h1>

            <p className="text-gray-600 mb-6">
              Lorem ipsum is simply dummy text of the printing industry.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: <Phone />,
                  title: "Have Any Question?",
                  detail: "+91 9318432162",
                },
                {
                  icon: <Mail />,
                  title: "Send Email",
                  detail: "support@zubeka.com",
                },
                {
                  icon: <LocateFixed />,
                  title: "Location",
                  detail:
                    "C-53 1st Floor Shashi Garden New Delhi (110091)",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="bg-[#ffd232] p-3 rounded-xl mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
