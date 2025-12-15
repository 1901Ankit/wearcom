"use client";

import { useState } from "react";
import { FilePenLine } from "lucide-react";

/* ===== STATIC USER DATA ===== */
const STATIC_USER = {
  firstName: "Ankit",
  lastName: "Sharma",
};

export default function BasicInfoForm() {
  const [formData, setFormData] = useState(STATIC_USER);
  const [initialData, setInitialData] = useState(STATIC_USER);
  const [editedFields, setEditedFields] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  // Toggle editable fields
  const handleEditClick = (field) => {
    setEditedFields((prev) => {
      const updated = { ...prev, [field]: !prev[field] };
      setIsEditing(Object.values(updated).some(Boolean));
      return updated;
    });
  };

  // Update form state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Save changes (STATIC)
  const handleSave = () => {
    setInitialData(formData);
    setEditedFields({});
    setIsEditing(false);
  };

  // Cancel changes
  const handleCancel = () => {
    setFormData(initialData);
    setEditedFields({});
    setIsEditing(false);
  };

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        { label: "First Name", name: "firstName" },
        { label: "Last Name", name: "lastName" },
      ].map(({ label, name }) => (
        <div key={name} className="relative">
          <label className="absolute -top-4 left-3 text-base text-[#353535] bg-white px-1">
            {label}
          </label>

          <input
            type="text"
            name={name}
            value={formData[name]}
            disabled={!editedFields[name]}
            onChange={handleChange}
            className="w-full px-5 py-2.5 border border-green-700 rounded-full text-sm bg-white"
          />

          <FilePenLine
            className="w-4 h-4 absolute right-4 top-3 text-[#2E4E2C] cursor-pointer"
            onClick={() => handleEditClick(name)}
          />
        </div>
      ))}

      {/* Action Buttons */}
      <div className="md:col-span-2 flex justify-end gap-4 mt-8 h-[48px]">
        <button
          type="button"
          onClick={handleCancel}
          className={`px-6 py-2 rounded-full text-sm font-medium transition ${
            isEditing
              ? "bg-[#E9E9CF] text-[#2E4E2C] opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={handleSave}
          className={`px-6 py-2 rounded-full text-sm font-medium bg-main text-white transition ${
            isEditing ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}
