"use client";
import React, { useState, useEffect } from "react";
import { CircleCheck, AlertTriangle } from "lucide-react";
import Modal from "../Components/Modal";
import { useRouter } from "next/navigation";
import product1 from "../assets/Images/category/Category1.webp";
import Image from "next/image";

/* ===== STATIC DATA ===== */
const STATIC_CART = {
  products: [
    {
      _id: "p1",
      product: {
        name: "Green Tea Pack",
        price: 299,
        images: product1 ,
      },
      quantity: 1,
    },
    {
      _id: "p2",
      product: {
        name: "Herbal Powder",
        price: 499,
        images:product1,
      },
      quantity: 2,
    },
  ],
};

const STATIC_BREAKDOWN = {
  finalAmount: 1297,
  shippingCost: 50,
  discountsApplied: [
    { type: "OFFER", code: "FLAT10", amount: 150 },
  ],
};

const Ordersummary = ({
  selectedAddress,
  gstNumber,
  offerCode,
  shippingMethod,
  breakdown = STATIC_BREAKDOWN,
  applyPoints = false,
}) => {
  const router = useRouter();
  const [cart, setCart] = useState(STATIC_CART);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddressModal, setIsAddressModal] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  const [loading, setLoading] = useState(false);

  const finalTotal = breakdown.finalAmount;
  const shipping = breakdown.shippingCost;
  const discounts = breakdown.discountsApplied;

  /* ===== MOCK PLACE ORDER ===== */
  const handlePlaceOrder = async () => {
    if (!selectedAddress) {
      setIsAddressModal(true);
      return;
    }

    setLoading(true);

    // Simulate Razorpay demo flow
    setTimeout(() => {
      // Randomly simulate success or failure
      const isSuccess = true; // Set false to demo failure
      if (isSuccess) {
        setIsModalOpen(true);
      } else {
        setPaymentError("Payment failed. Try again!");
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="p-6 font-body">
      <h2 className="text-center text-[32px] md:text-[40px] text-[#ffd232] mb-4">
        Order Summary
      </h2>

      <div className="overflow-x-auto border border-gray-300 rounded-md">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#ffd232]">
            <tr className="text-[#000] font-heading text-lg">
              <th className="p-3">Image</th>
              <th className="p-3">Product name</th>
              <th className="p-3">Price</th>
              <th className="p-3">Qty</th>
              <th className="p-3">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.products.map((item) => (
              <tr key={item._id} className="border hover:bg-gray-50">
                <td className="p-3">
                  <Image
                    src={item.product.images}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-md border"
                  />
                </td>
                <td className="p-3 text-black">{item.product.name}</td>
                <td className="p-3">₹{item.product.price}</td>
                <td className="p-3 text-center">{item.quantity}</td>
                <td className="p-3">₹{item.product.price * item.quantity}</td>
              </tr>
            ))}

            <tr className="border-t font-semibold">
              <td colSpan="4" className="p-3">Total</td>
              <td className="p-3 text-end">₹{finalTotal.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-end mt-10">
        <button
          onClick={handlePlaceOrder}
          disabled={loading}
          className="bg-[#ffd232] text-back px-8 py-3 rounded-full "
        >
          {loading ? "Processing..." : "Place Order"}
        </button>
      </div>

      {/* ✅ Success Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="text-center p-6">
          <CircleCheck className="mx-auto w-16 h-16 text-[#000]" />eawrrwrwwreraawreraertyw
          <h3 className="text-[28px] mt-4 text-[#000]">Payment Successful!</h3>
          <p className="text-gray-600 mt-2">Your order has been placed successfully.</p>
          <button
            className="bg-[#ffd232] text-black px-6 py-2 mt-8 rounded-full  w-fit"
            onClick={() => router.push("/")}
          >
            Go To Homepage
          </button>
        </div>
      </Modal>

      {/* ✅ Address Modal */}
      <Modal isOpen={isAddressModal} onClose={() => setIsAddressModal(false)}>
        <div className="text-center p-6">
          <AlertTriangle className="mx-auto w-16 h-16 text-red-500" />
          <h3 className="text-[28px] mt-4 text-[#ffd232]">Please select a delivery address</h3>
        </div>
      </Modal>

      {/* ✅ Payment Error */}
      {paymentError && (
        <Modal isOpen={!!paymentError} onClose={() => setPaymentError(null)}>
          <div className="text-center p-6">
            <AlertTriangle className="mx-auto w-16 h-16 text-red-500" />
            <h3 className="text-[28px] mt-4 text-[#ffd232]">Payment Failed</h3>
            <p className="text-gray-600 mt-2">{paymentError}</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Ordersummary;
