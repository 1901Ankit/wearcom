"use client";

import { useState } from "react";
import Modal from "./Modal";
import { HiOutlineDocumentAdd } from "react-icons/hi";

export default function SocialProofModal({ isOpen, onClose }) {
  const [username, setUsername] = useState("");
  const [file, setFile] = useState(null);
  const [type, setType] = useState("");

  const handleSubmit = () => {
    if (!username || !type || !file) {
      alert("Please fill all fields");
      return;
    }

    // ✅ Static submit action
    alert(
      `Submitted Successfully!\n\nName: ${username}\nType: ${type}\nFile: ${file.name}`
    );

    // reset
    setUsername("");
    setType("");
    setFile(null);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6 w-full mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6 text-main">
          Social
        </h2>

        {/* Upload Box */}
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center mb-6">
          <div className="bg-main text-white p-4 rounded-full mb-4">
            <HiOutlineDocumentAdd size={30} />
          </div>

          <h3 className="text-lg font-medium mb-2">
            Choose File To <span className="text-main">Upload</span>
          </h3>

          <label className="flex w-full border rounded-lg overflow-hidden cursor-pointer">
            <span className="bg-main text-white px-6 py-2">
              Choose File
            </span>
            <span className="flex-1 px-4 py-2 text-gray-500">
              {file ? file.name : "No File Chosen"}
            </span>
            <input
              type="file"
              className="hidden"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>
        </div>

        {/* Username */}
        <div className="mb-6">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            User Name
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            className="border p-3 w-full rounded-lg outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Social Type */}
        <select
          className="border p-3 w-full mb-6 rounded-lg"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Select Social Type</option>
          <option value="instagram">Instagram</option>
          <option value="youtube">YouTube</option>
        </select>

        {/* Buttons */}
        <div className="flex justify-between gap-4">
          <button
            onClick={onClose}
            className="border border-main text-main py-2 px-6 rounded-lg w-full hover:bg-main hover:text-white transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-main text-white py-2 px-6 rounded-lg w-full transition"
          >
            Submit
          </button>
        </div>
      </div>
    </Modal>
  );
}
