// import React, { useState } from "react";
// import { useAuthStore } from "../Store/useAuthStore";

// function NewAddress() {
//   const { user, updateProfile, setUser } = useAuthStore(); // ✅ add setUser
//   const [loading, setLoading] = useState(false);

//   const [form, setForm] = useState({
//     address: "",
//     city: "",
//     state: "",
//     zipCode: "",
//     country: "",
//     isPrimary: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setForm({
//       ...form,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!user) return alert("Please log in first.");

//     setLoading(true);

//     try {
//       const existingLocations = user.locations || [];
//       const updatedLocations = [...existingLocations, form];

//       const payload = { locations: updatedLocations };

//       // ✅ instantly update local Zustand store before API call
//       setUser({ ...user, locations: updatedLocations });

//       // ✅ update backend next
//       await updateProfile(payload);
//     } catch (err) {
//       console.error("Error updating profile:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="px-8 ">
//         <h2 className="text-center text-[40px] font-normal text-[#ffd232] ">
//           Add A New Address
//         </h2>
//         <form
//           onSubmit={handleSubmit}
//           className="grid grid-cols-1 md:grid-cols-2 gap-6"
//         >
//           {/* Left Side */}
//           <div className="space-y-4">
//             <div className="relative mt-8">
//               <label className="absolute -top-4 left-3 bg-white text-[#ffd232] text-sm px-1">
//                 Country Name
//               </label>
//               <select
//                 name="country"
//                 value={form.country}
//                 onChange={handleChange}
//                 className="w-full px-5 py-2 border border-[#ffd232] rounded-full text-sm focus:outline-none appearance-none bg-white"
//               >
//                 <option>India</option>
//                 <option>USA</option>
//                 <option>UK</option>
//               </select>
//             </div>

//             <div className="relative mt-8">
//               <label className="absolute -top-4 left-3 bg-white text-[#ffd232] text-sm px-1">
//                 Coupon Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Your Coupon Name"
//                 className="w-full px-5 py-2 border border-[#ffd232] rounded-full text-sm focus:outline-none"
//               />
//             </div>

//             <div className="relative mt-8">
//               <label className="absolute -top-4 left-3 bg-white text-[#ffd232] text-sm px-1">
//                 Apartment / Suite
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter Your Apartment, Suite, Landmark"
//                 className="w-full px-5 py-2 border border-[#ffd232] rounded-full text-sm focus:outline-none"
//               />
//             </div>

//             <div className="relative mt-8">
//               <label className="absolute -top-4 left-3 bg-white text-[#ffd232] text-sm px-1">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 placeholder="Enter Your Email Address"
//                 className="w-full px-5 py-2 border border-[#ffd232] rounded-full text-sm focus:outline-none"
//               />
//             </div>

//             <div className="relative mt-8">
//               <label className="absolute -top-4 left-3 bg-white text-[#ffd232] text-sm px-1">
//                 Phone No
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter Your Phone Number"
//                 className="w-full px-5 py-2 border border-[#ffd232] rounded-full text-sm focus:outline-none"
//               />
//             </div>

//             <div className="flex gap-4 mt-8">
//               <div className="relative w-full">
//                 <label className="absolute -top-4 left-3 bg-white text-[#ffd232] text-sm px-1">
//                   Landmark
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Landmark"
//                   className="w-full px-5 py-2 border border-[#ffd232] rounded-full text-sm focus:outline-none"
//                 />
//               </div>

//               <div className="relative w-full">
//                 <label className="absolute -top-4 left-3 bg-white text-[#ffd232] text-sm px-1">
//                   GST No
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter GST No"
//                   className="w-full px-5 py-2 border border-[#ffd232] rounded-full text-sm focus:outline-none"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Right Side */}
//           <div className="space-y-4">
//             <div className="flex gap-4">
//               <div className="relative w-full mt-8">
//                 <label className="absolute -top-4 left-3 bg-white text-[#ffd232] text-sm px-1">
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter First Name"
//                   className="w-full px-5 py-2 border border-[#ffd232] rounded-full text-sm focus:outline-none"
//                 />
//               </div>

//               <div className="relative w-full mt-8">
//                 <label className="absolute -top-4 left-3 bg-white text-[#ffd232] text-sm px-1">
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Last Name"
//                   className="w-full px-5 py-2 border border-[#ffd232] rounded-full text-sm focus:outline-none"
//                 />
//               </div>
//             </div>

//             <div className="relative mt-8">
//               <label className="absolute -top-4 left-3 bg-white text-[#ffd232] text-sm px-1">
//                 Home Address
//               </label>
//               <input
//                 type="text"
//                 name="address"
//                 value={form.address}
//                 onChange={handleChange}
//                 placeholder="Enter Your Home Address"
//                 className="w-full px-5 py-2 border border-[#ffd232] rounded-full text-sm focus:outline-none"
//               />
//             </div>

//             <div className="relative mt-8">
//               <label className="absolute -top-4 left-3 bg-white text-[#ffd232] text-sm px-1">
//                 City/Town
//               </label>
//               <input
//                 type="text"
//                 name="city"
//                 value={form.city}
//                 onChange={handleChange}
//                 placeholder="Enter Your City/Town"
//                 className="w-full px-5 py-2 border border-[#ffd232] rounded-full text-sm focus:outline-none"
//               />
//             </div>

//             <div className="flex gap-4 mt-8">
//               <div className="relative w-full">
//                 <label className="absolute -top-4 left-3 bg-white text-[#ffd232] text-sm px-1">
//                   State
//                 </label>
//                 <input
//                   type="text"
//                   name="state"
//                   value={form.state}
//                   onChange={handleChange}
//                   placeholder="Enter Country Name"
//                   className="w-full px-5 py-2 border border-[#ffd232] rounded-full text-sm focus:outline-none"
//                 />
//               </div>

//               <div className="relative w-full">
//                 <label className="absolute -top-4 left-3 bg-white text-[#ffd232] text-sm px-1">
//                   Postal Code
//                 </label>
//                 <input
//                   type="text"
//                   name="zipCode"
//                   value={form.zipCode}
//                   onChange={handleChange}
//                   placeholder="Enter Postal/Zip"
//                   className="w-full px-5 py-2 border border-[#ffd232] rounded-full text-sm focus:outline-none"
//                 />
//               </div>
//             </div>

//             <div className="flex items-center mt-4">
//               <input
//                 type="checkbox"
//                 name="isPrimary"
//                 checked={form.isPrimary}
//                 onChange={handleChange}
//                 className="mr-2 accent-[#ffd232]"
//               />
//               <label className="text-[#ffd232] text-sm">Set as primary</label>
//             </div>
//           </div>
//         </form>

//         {/* Address Type */}
//         <div className="mt-8">
//           <p className="text-[#ffd232] font-medium mb-2">Address Type</p>
//           <div className="flex items-center gap-6">
//             <label className="flex items-center gap-2 cursor-pointer">
//               <input
//                 type="radio"
//                 name="addressType"
//                 className="accent-[#ffd232]"
//                 defaultChecked
//               />
//               Home
//             </label>
//             <label className="flex items-center gap-2 cursor-pointer">
//               <input
//                 type="radio"
//                 name="addressType"
//                 className="accent-[#ffd232]"
//               />
//               Office
//             </label>
//             <label className="flex items-center gap-2 cursor-pointer">
//               <input
//                 type="radio"
//                 name="addressType"
//                 className="accent-[#ffd232]"
//               />
//               Others
//             </label>
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="flex gap-4 mt-8">
//           <button
//             onClick={handleSubmit}
//             disabled={loading}
//             className="bg-[#ffd232] text-white px-6 py-2 rounded-full hover:bg-green-800 transition-all duration-200"
//           >
//             {loading ? "Saving..." : "Save And Deliver Here"}
//           </button>
//           <button
//             type="submit"
//             className="bg-[#ffd232] text-white px-6 py-2 rounded-full hover:bg-green-800 transition-all duration-200"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default NewAddress;
