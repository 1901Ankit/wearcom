import React, { useState } from "react";
import { X } from "lucide-react";
import { toast } from "react-hot-toast";

function AddAddressModal({ onClose }) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    country: "",
    state: "",
    city: "",
    zipCode: "",
    address: "",
    firstName: "",
    lastName: "",
    phone: "",
  });



  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
      <div
        className="bg-white w-full max-w-xl p-6 rounded-xl shadow-2xl relative max-h-[80vh] overflow-y-auto animate-fadeIn
                    scrollbar-thin scrollbar-thumb-[#ffd232]/50 scrollbar-track-transparent"
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
          onClick={onClose}
          disabled={loading}
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-semibold text-[#ffd232] mb-4">
          Add New Address
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* First Name & Last Name */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2 mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2 mt-1"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2 mt-1"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2 mt-1"
            />
          </div>

          {/* City & State */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2 mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                State
              </label>
              <input
                name="state"
                value={form.state}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2 mt-1"
              />
            </div>
          </div>

          {/* Zip Code & Country */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Zip Code
              </label>
              <input
                name="zipCode"
                value={form.zipCode}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2 mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <input
                name="country"
                value={form.country}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2 mt-1"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="pt-3 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`px-4 py-2 rounded-md text-white ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#ffd232] hover:bg-[#145d2c]"
              }`}
            >
              {loading ? "Saving..." : "Save Address"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddAddressModal;
