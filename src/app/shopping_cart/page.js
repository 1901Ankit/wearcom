"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Minus, Plus, Trash2, Tag } from "lucide-react";
import TopBanner from "../Components/TopBanner";
import { useRouter } from "next/navigation";
import product1 from "../assets/Images/category/Category1.webp";

/* -------------------- STATIC DATA -------------------- */
const STATIC_CART = {
  products: [
    {
      _id: "1",
      quantity: 1,
      product: {
        _id: "p1",
        name: "Yellow Printed T‑Shirt",
        price: 799,
        images: [{ url: product1 }],
      },
    },
    {
      _id: "2",
      quantity: 2,
      product: {
        _id: "p2",
        name: "Casual Sneakers",
        price: 1999,
        images: [{ url: product1 }],
      },
    },
  ],
};

const STATIC_OFFERS = [
  { _id: "o1", title: "Flat ₹200 OFF", code: "FLAT200", amount: 200 },
  { _id: "o2", title: "10% OFF", code: "SAVE10", percent: 10 },
];

/* -------------------- COMPONENT -------------------- */
const Shopping_cart = () => {
  const router = useRouter();

  const [cart, setCart] = useState(STATIC_CART);
  const [offers] = useState(STATIC_OFFERS);
  const [appliedOffer, setAppliedOffer] = useState(null);
  const [usePoints, setUsePoints] = useState(false);
  const [shippingMethod, setShippingMethod] = useState("STANDARD");

  /* -------------------- CALCULATIONS -------------------- */
  const subtotal = useMemo(() => {
    return cart.products.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  }, [cart]);

  const shippingCost = shippingMethod === "EXPRESS" ? 150 : 50;

  const offerDiscount = useMemo(() => {
    if (!appliedOffer) return 0;
    if (appliedOffer.amount) return appliedOffer.amount;
    if (appliedOffer.percent)
      return (subtotal * appliedOffer.percent) / 100;
    return 0;
  }, [appliedOffer, subtotal]);

  const pointsDiscount = usePoints ? Math.min(100, subtotal * 0.05) : 0;

  const finalAmount = Math.max(
    subtotal + shippingCost - offerDiscount - pointsDiscount,
    0
  );

  const pointsToEarn = Math.floor(finalAmount / 100);

  /* -------------------- HANDLERS -------------------- */
  const handleIncrease = (id) => {
    setCart((prev) => ({
      ...prev,
      products: prev.products.map((item) =>
        item.product._id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    }));
  };

  const handleDecrease = (id, qty) => {
    if (qty <= 1) return;
    setCart((prev) => ({
      ...prev,
      products: prev.products.map((item) =>
        item.product._id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    }));
  };

  const handleRemove = (id) => {
    setCart((prev) => ({
      ...prev,
      products: prev.products.filter((item) => item.product._id !== id),
    }));
  };

  /* -------------------- UI -------------------- */
  return (
    <>
      <TopBanner Page={"Shopping Cart"} />

      <div className="mx-auto px-8 py-5 container">
        {/* CART TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse border">
            <thead className="bg-[#ffd232]">
              <tr className="text-black font-heading text-lg border">
                <th className="p-3">Image</th>
                <th className="p-3">Product name</th>
                <th className="p-3">Price</th>
                <th className="p-3">Quantity</th>
                <th className="p-3">Total</th>
                <th className="p-3">Remove</th>
              </tr>
            </thead>

            <tbody>
              {cart.products.map((item) => (
                <tr key={item._id} className="border">
                  <td className="p-3">
                    <Image
                      src={item.product.images[0].url}
                      alt={item.product.name}
                      width={96}
                      height={56}
                      className="rounded-md border"
                    />
                  </td>

                  <td className="p-3 text-[#000]">
                    {item.product.name}
                  </td>

                  <td className="p-3">₹ {item.product.price}</td>

                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          handleDecrease(item.product._id, item.quantity)
                        }
                        className="bg-[#ffd232] w-6 h-6 rounded-full flex items-center justify-center"
                      >
                        <Minus size={12} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleIncrease(item.product._id)}
                        className="bg-[#ffd232] w-6 h-6 rounded-full flex items-center justify-center"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </td>

                  <td className="p-3">
                    ₹ {item.product.price * item.quantity}
                  </td>

                  <td className="p-3">
                    <button onClick={() => handleRemove(item.product._id)}>
                      <Trash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MAIN CONTENT */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* OFFERS */}
          <div>
            <h4 className="text-[#000] font-semibold mb-3">
              Available Offers
            </h4>
            {offers.map((offer) => (
              <div
                key={offer._id}
                className={`p-3 mb-2 rounded border ${appliedOffer?._id === offer._id
                    ? "bg-green-100"
                    : ""
                  }`}
              >
                <Tag className="inline w-4 h-4 mr-1" />
                {offer.title}
                {appliedOffer?._id === offer._id ? (
                  <span className="ml-2 text-green-700">Applied</span>
                ) : (
                  <button
                    onClick={() => setAppliedOffer(offer)}
                    className="ml-3 text-xs border px-3 py-1 rounded-full"
                  >
                    Apply
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* PRICE DETAILS */}
          <div>
            <h2 className="text-[#000] text-2xl mb-4">Price Details</h2>

            <div className="flex items-center gap-2 mb-3">
              <input
                type="checkbox"
                checked={usePoints}
                onChange={(e) => setUsePoints(e.target.checked)}
              />
              <span>Use Loyalty Points</span>
            </div>

            <div className="flex gap-5 mb-4">
              <label className="flex gap-2 items-center">
                <input
                  type="radio"
                  checked={shippingMethod === "STANDARD"}
                  onChange={() => setShippingMethod("STANDARD")}
                />
                Standard
              </label>
              <label className="flex gap-2 items-center">
                <input
                  type="radio"
                  checked={shippingMethod === "EXPRESS"}
                  onChange={() => setShippingMethod("EXPRESS")}
                />
                Express
              </label>
            </div>

            <div className="bg-[#E9E9CF] p-5 rounded-lg space-y-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹{shippingCost.toFixed(2)}</span>
              </div>
              {offerDiscount > 0 && (
                <div className="flex justify-between">
                  <span>Offer Discount</span>
                  <span>- ₹{offerDiscount.toFixed(2)}</span>
                </div>
              )}
              {pointsDiscount > 0 && (
                <div className="flex justify-between">
                  <span>Loyalty Points</span>
                  <span>- ₹{pointsDiscount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Points to Earn</span>
                <span>{pointsToEarn}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Final Amount</span>
                <span>₹{finalAmount.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={() => router.push("/checkout")}
              className="bg-[#ffd232] text-black px-6 py-3 mt-6 rounded-full"
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shopping_cart;
