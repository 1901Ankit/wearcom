"use client";

import { useState } from "react";
import { FilePenLine } from "lucide-react";
import Modal from "../Components/Modal";

/* ===== STATIC USER DATA ===== */
const STATIC_USER = {
  email: "user@example.com",
  phone: "+91 9876543210",
  password: "********",
};

export default function AccountInfoForm() {
  const [editingField, setEditingField] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [user, setUser] = useState(STATIC_USER);

  const fields = [
    { label: "Email", name: "email" },
    { label: "Phone No", name: "phone" },
    { label: "Password", name: "password", type: "password" },
  ];

  const handleEditClick = (fieldName) => {
    setEditingField(fieldName);
    setInputValue("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) return;

    // ✅ STATIC UPDATE (frontend only)
    setUser((prev) => ({
      ...prev,
      [editingField]:
        editingField === "password" ? "********" : inputValue,
    }));

    // Reset
    setEditingField(null);
    setInputValue("");
  };

  return (
    <>
      {/* Account Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.map(({ label, name, type }) => (
          <div key={name} className="relative">
            <label className="absolute -top-4 left-3 text-base text-[#353535] bg-white px-1">
              {label}
            </label>

            <input
              type={type || "text"}
              value={user[name]}
              readOnly
              className="w-full px-5 py-2.5 border border-green-700 rounded-full text-sm bg-white cursor-not-allowed"
            />

            <FilePenLine
              className="w-4 h-4 absolute right-4 top-3 text-[#2E4E2C] cursor-pointer"
              onClick={() => handleEditClick(name)}
            />
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      <Modal
        isOpen={!!editingField}
        onClose={() => setEditingField(null)}
      >
        <div className="p-8 text-center space-y-4">
          <div className="bg-main rounded-md p-2">
            <h2 className="text-xl text-white">
              Update{" "}
              {editingField &&
                editingField.charAt(0).toUpperCase() +
                  editingField.slice(1)}
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type={editingField === "password" ? "password" : "text"}
              placeholder={`Enter new ${editingField}`}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full px-4 py-2 border rounded"
            />

            <button
              type="submit"
              className="w-full bg-[#ffd232] text-white py-2 rounded-md hover:bg-[#14351a] transition"
            >
              Update
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
}
