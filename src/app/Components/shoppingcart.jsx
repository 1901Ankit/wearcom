"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Minus, Plus, Tag } from "lucide-react";
import FeedbackModal from "./FeedbackModal";
import { useRouter } from "next/navigation";
import product1 from "../assets/Images/category/Category1.webp";

const STATIC_PRODUCTS = [
  {
    id: "1",
    name: "Green Tea Pack",
    price: 299,
    quantity: 1,
    image:product1,
  },
  {
    id: "2",
    name: "Herbal Powder",
    price: 499,
    quantity: 2,
    image:product1,
  },
];

const STATIC_OFFERS = [
  { id: "offer1", title: "Flat 10% OFF", code: "FLAT10", discount: 0.1 },
];

const Shop = ({ isOpen, closeDrawer }) => {
  const router = useRouter();

  const [products, setProducts] = useState([]);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [appliedOffer, setAppliedOffer] = useState(null);
  const [usePoints, setUsePoints] = useState(false);
  const [shippingMethod, setShippingMethod] = useState("STANDARD");

  /* Load static cart */
  useEffect(() => {
    setProducts(STATIC_PRODUCTS);
  }, []);

  /* Calculations */
  const subtotal = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shippingCost = shippingMethod === "EXPRESS" ? 100 : 0;
  const offerDiscount = appliedOffer
    ? subtotal * appliedOffer.discount
    : 0;
  const pointsDiscount = usePoints ? 50 : 0;

  const finalAmount =
    subtotal + shippingCost - offerDiscount - pointsDiscount;

  /* Quantity handlers */
  const updateQty = (id, type) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              quantity:
                type === "inc"
                  ? p.quantity + 1
                  : Math.max(1, p.quantity - 1),
            }
          : p
      )
    );
  };

  const removeItem = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-[90%] sm:w-[380px] bg-white shadow-2xl z-50 transform transition-transform duration-300 overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-[#ffd232]">
          <h2 className="text-2xl text-black">Shopping Cart</h2>
          <X className="cursor-pointer" onClick={closeDrawer} />
        </div>

        {/* Cart Items */}
        {products.length > 0 ? (
          products.map((item) => (
            <div key={item.id} className="p-3 border-b">
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="rounded border"
                  />
                  <div>
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="font-semibold">₹ {item.price}</p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQty(item.id, "dec")}
                        className="bg-[#ffd232] w-6 h-6 rounded-full flex items-center justify-center"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, "inc")}
                        className="bg-[#ffd232] w-6 h-6 rounded-full flex items-center justify-center"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="bg-green-700 text-white w-6 h-6 rounded-full flex items-center justify-center"
                >
                  <X size={12} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="p-6 text-center text-gray-500">
            Your cart is empty 🛒
          </div>
        )}

        {/* Offers */}
        <div className="p-4 border-b">
          <p className="font-semibold mb-2">Available offers:</p>
          {STATIC_OFFERS.map((offer) => (
            <div key={offer.id} className="mb-2">
              <Tag className="inline w-4 h-4 mr-1" />
              {offer.title}
              {appliedOffer?.id === offer.id ? (
                <span className="ml-2 text-green-700">Applied</span>
              ) : (
                <button
                  onClick={() => setAppliedOffer(offer)}
                  className="ml-3 border px-3 py-1 rounded-full text-xs"
                >
                  Apply
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Loyalty Points */}
        <div className="p-4 border-b">
          <label className="flex gap-2">
            <input
              type="checkbox"
              checked={usePoints}
              onChange={(e) => setUsePoints(e.target.checked)}
            />
            Use Loyalty Points (₹50)
          </label>
        </div>

        {/* Shipping */}
        <div className="p-4 border-b">
          <label className="font-semibold block mb-2">
            Shipping Method
          </label>
          <label className="mr-4">
            <input
              type="radio"
              checked={shippingMethod === "STANDARD"}
              onChange={() => setShippingMethod("STANDARD")}
            />{" "}
            Standard
          </label>
          <label>
            <input
              type="radio"
              checked={shippingMethod === "EXPRESS"}
              onChange={() => setShippingMethod("EXPRESS")}
            />{" "}
            Express
          </label>
        </div>

        {/* Breakdown */}
        <div className="p-4">
          <div className="bg-[#E9E9CF] p-4 rounded space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₹{shippingCost}</span>
            </div>
            {appliedOffer && (
              <div className="flex justify-between">
                <span>Offer Discount</span>
                <span>-₹{offerDiscount}</span>
              </div>
            )}
            {usePoints && (
              <div className="flex justify-between">
                <span>Loyalty Points</span>
                <span>-₹50</span>
              </div>
            )}
            <div className="flex justify-between font-bold border-t pt-2">
              <span>Final Amount</span>
              <span>₹{finalAmount}</span>
            </div>
          </div>

          {/* Buttons */}
          <div className=" mt-4 space-y-2">
            <Link href="/shopping_cart" onClick={closeDrawer}>
              <button className="bg-[#ffd232] w-full py-2 rounded-full">
                View Cart
              </button>
            </Link>

            <button
              className="bg-[#ffd232] w-full py-2 mt-3 rounded-full"
              onClick={() => {
                if (products.length === 0) {
                  setIsFeedbackOpen(true);
                } else {
                  closeDrawer();
                  router.push("/checkout");
                }
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>

      {/* Feedback Modal */}
      {isFeedbackOpen && (
        <FeedbackModal
          isOpen={isFeedbackOpen}
          onClose={() => setIsFeedbackOpen(false)}
          closeDrawer={closeDrawer}
        />
      )}
    </>
  );
};

export default Shop;
