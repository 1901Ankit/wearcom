import React, { useState } from "react";
import Modal from "./Modal";
import { useRouter } from "next/navigation"; // ✅ for navigation
import { CircleXIcon } from "lucide-react";

const FeedbackModal = ({ isOpen = true, onClose, closeDrawer  }) => {
  const [remarks, setRemarks] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User remarks:", remarks);

    if (onClose) onClose(); // close modal
     if (closeDrawer) closeDrawer();
    router.push("/myorder"); //
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-8  text-center space-y-3">
        <div className=" bg-main rounded-md p-1 ">
          <h2 className="text-xl font-normal w-full text-white text-center justify-center my-2">
            We’d Love to Know Why You Didn’t Complete <br />
            Your Order
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-left">
            <div className="relative mt-8">
              <label className="absolute -top-4 left-3 text-lg text-[#353535] bg-white px-1 font-heading">
                Remarks (Have an Issue? Let Us Know!)
              </label>
              <textarea
                name="remarks"
                placeholder="Enter your feedback"
                rows="4"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                className="w-full px-5 py-3 border border-gray-300 rounded-3xl text-sm focus:outline-none resize-none bg-white"
              ></textarea>
            </div>
           
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-[#ffd232] text-white py-2 rounded-md hover:bg-[#14351a] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default FeedbackModal;
