"use client";

import React, { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Minus, Plus } from "lucide-react";
import TopBanner from "../Components/TopBanner";

export default function Faq() {
  // 📌 STATIC FAQ DATA
  const faqData = [
    {
      id: 1,
      question: "How can I track my order?",
      answer:
        "You can track your order using the tracking link sent to your registered email or by visiting the 'Track Order' page.",
    },
    {
      id: 2,
      question: "What is your return policy?",
      answer:
        "We offer a 7-day easy return policy. Products must be unused and returned with original packaging.",
    },
    {
      id: 3,
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship worldwide. Shipping charges may vary depending on the destination.",
    },
    {
      id: 4,
      question: "Can I cancel my order?",
      answer:
        "Orders can be canceled within the first 2 hours of placing them. After that, fulfillment may begin.",
    },
    {
      id: 5,
      question: "What payment methods are accepted?",
      answer:
        "We accept UPI, Debit/Credit Cards, Net Banking, Wallets, and Cash on Delivery.",
    },
    {
      id: 6,
      question: "How do I contact customer support?",
      answer:
        "You can reach us through email support or our customer care number available on the Contact page.",
    },
  ];

  // 📌 PAGINATION SETTINGS
  const itemsPerPage = 3;
  const totalPages = Math.ceil(faqData.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  // 📌 Calculate current items
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = faqData.slice(startIndex, startIndex + itemsPerPage);

  // 📌 Pagination Change Handler
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setActiveIndex(null); // close accordions on page change
    setCurrentPage(page);
  };

  return (
    <main>
      {/* Banner Section */}
      <TopBanner Page={"FAQ"} />

      {/* Heading */}
      <section className="bg-white py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-10 lg:px-16 text-center">
        <h1 className="text-[32px] sm:text-[42px] md:text-[54px] lg:text-[60px] text-black font-normal leading-tight">
          Got Questions?
          <span className="text-[#ffd232] mx-1 block sm:inline">
            We’ve Got Answers
          </span>
        </h1>
      </section>

      {/* FAQ Accordion */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {currentItems.map((item, index) => (
          <div
            key={item.id}
            className="border-b border-gray-300 last:border-b-0"
          >
            <button
              type="button"
              className="accordion-button cursor-pointer w-full text-sm sm:text-base md:text-lg font-semibold text-left px-3 sm:px-4 md:px-6 py-4 sm:py-5 md:py-6 text-black flex items-center gap-3 sm:gap-4"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <span className="flex-1">{item.question}</span>

              <div className="ml-auto transition-transform duration-200">
                {activeIndex === index ? (
                  <Minus className="w-5 sm:w-6 h-5 sm:h-6 text-white bg-[#ffd232] rounded-md p-[2px]" />
                ) : (
                  <Plus className="w-5 sm:w-6 h-5 sm:h-6 text-white bg-[#ffd232] rounded-md p-[2px]" />
                )}
              </div>
            </button>

            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className={`accordion-content overflow-hidden transition-all duration-300 ease-in-out 
                ${activeIndex === index ? "max-h-[200px]" : "max-h-0"}`}
            >
              <div className="px-3 sm:px-4 md:px-6 pb-4 sm:pb-5 md:pb-6">
                <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Pagination */}
        <div className="flex flex-wrap justify-center my-8 sm:my-10 gap-2 sm:gap-3">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 sm:px-4 py-2 rounded-full border transition ${
              currentPage === 1
                ? "border-gray-300 text-gray-400 cursor-not-allowed"
                : "border-[#ffd232] text-black hover:bg-[#ffd232] "
            }`}
          >
            <ArrowLeft className="w-4 sm:w-5" />
          </button>

          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => handlePageChange(idx + 1)}
              className={`px-3 sm:px-4 py-2 rounded-full border text-sm sm:text-base transition ${
                currentPage === idx + 1
                  ? "bg-[#ffd232] text-black border-[#ffd232]"
                  : "border-gray-300 text-gray-600 hover:bg-[#ffd232]/10"
              }`}
            >
              {idx + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 sm:px-4 py-2 rounded-full border transition ${
              currentPage === totalPages
                ? "border-gray-300 text-gray-400 cursor-not-allowed"
                : "border-[#ffd232] text-black hover:bg-[#ffd232] "
            }`}
          >
            <ArrowRight className="w-4 sm:w-5" />
          </button>
        </div>
      </div>
    </main>
  );
}
