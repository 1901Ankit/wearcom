"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  CircleCheck,
  CircleX,
  Download,
  ListFilter,
  Loader2,
  Search,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import FilterModal from "./FilterModal";
import OrderDetailModal from "./OrderDetailModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import TopBanner from "../Components/TopBanner";
import toast from "react-hot-toast";

/* ===== Static Orders Data ===== */
const staticOrders = [
  {
    _id: "ORD123",
    createdAt: new Date(),
    paymentStatus: "PAID",
    totalAmount: 1499,
    status: "Delivered",
    products: [
      {
        quantity: 1,
        product: {
          _id: "P1",
          name: "Men T-Shirt",
          images: [{ url: "/placeholder.jpg" }],
        },
      },
      {
        quantity: 2,
        product: {
          _id: "P2",
          name: "Shoes",
          images: [{ url: "/placeholder.jpg" }],
        },
      },
    ],
  },
  {
    _id: "ORD124",
    createdAt: new Date(),
    paymentStatus: "PENDING",
    totalAmount: 799,
    status: "Processing",
    products: [
      {
        quantity: 1,
        product: {
          _id: "P3",
          name: "Cap",
          images: [{ url: "/placeholder.jpg" }],
        },
      },
    ],
  },
];

const Myorder = () => {
  const [orders] = useState(staticOrders);
  const [downloading, setDownloading] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("");

  const filteredOrders = statusFilter
    ? orders.filter((order) => order.status === statusFilter)
    : orders;

  /* ===== Dummy Invoice Download ===== */
  const downloadInvoice = (id) => {
    setDownloading(id);
    setTimeout(() => {
      toast.success("Invoice downloaded (dummy)");
      setDownloading(null);
    }, 1500);
  };

  return (
    <div>
      <TopBanner Page={"My Orders"} />

      {/* Search & Filter */}
      <div className="px-2 sm:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between gap-4 bg-[#E9E9CF] p-3 rounded-md">
          <div className="relative w-full md:w-[35%]">
            <input
              type="text"
              placeholder="Search Your Product Here"
              className="w-full px-5 py-2 border rounded-full"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#ffd232] p-2 rounded-full">
              <Search className="w-5 h-5 text-white" />
            </button>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="border px-4 py-2 rounded-md"
            >
              Filters <ListFilter className="inline w-4 h-4 ml-1" />
            </button>

            {statusFilter && (
              <button
                onClick={() => setStatusFilter("")}
                className="border border-red-500 text-red-600 px-4 py-2 rounded-md"
              >
                Clear <XCircle className="inline w-4 h-4 ml-1" />
              </button>
            )}
          </div>
        </div>

        {/* Orders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-6">
          {filteredOrders.map((order) => (
            <div
              key={order._id}
              className="bg-white rounded-xl shadow border"
            >
              <div className="h-56 relative">
                <Swiper modules={[Pagination, Autoplay]} autoplay loop>
                  {order.products.map((item, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="relative h-56">
                        <div
                          onClick={() => downloadInvoice(order._id)}
                          className="absolute top-2 right-2 bg-white p-2 rounded-full cursor-pointer z-10"
                        >
                          {downloading === order._id ? (
                            <Loader2 className="animate-spin" size={18} />
                          ) : (
                            <Download size={18} />
                          )}
                        </div>

                        <Image
                          src={item.product.images[0].url}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="p-3 text-sm">
                <div className="flex justify-between items-center">
                  <span>
                    Placed on{" "}
                    {new Date(order.createdAt).toLocaleDateString()}
                  </span>

                  {order.paymentStatus === "PAID" ? (
                    <span className="text-green-600 flex gap-1">
                      <CircleCheck size={16} /> Paid
                    </span>
                  ) : (
                    <span className="text-red-600 flex gap-1">
                      <CircleX size={16} /> Not Paid
                    </span>
                  )}
                </div>

                <div className="flex justify-between mt-3 font-semibold">
                  <Link href={`/track_order?id=${order._id}`}>
                    Track Order
                  </Link>
                  <span>₹{order.totalAmount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApply={(status) => {
          setStatusFilter(status);
          setIsFilterOpen(false);
        }}
        selectedStatus={statusFilter}
      />

      <OrderDetailModal
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        order={selectedOrder}
      />
    </div>
  );
};

export default Myorder;
