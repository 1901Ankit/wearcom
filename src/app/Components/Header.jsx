"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import {
  ShoppingCart,
  User,
  ArrowRight,
  Heart,
  Truck,
  Menu,
  X,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

import Logo from "../assets/Images/logo/logo.svg";
import Shop from "./shoppingcart";

const Header = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categorie" },
    { name: "Products", path: "/product" },
    { name: "About", path: "/about" },
    // { name: "Blogs", path: "/blog" },
    { name: "Contact Us", path: "/contactus" },
  ];

  const [isOpen, setIsOpen] = useState(false); // Cart
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const wishlistCount = 3;
  const cartCount = 5;

  return (
    <header className="relative z-50 ">
      <div className="flex flex-col lg:flex-row w-full h-full">
        {/* Left Logo Section */}
        <div className="relative bg-[#ffd232] flex items-center justify-between px-6 py-2 lg:px-8 overflow-hidden">
          <Link href="/">
            <Image src={Logo} alt="Zubeka Logo" className="h-14 w-56" />
          </Link>

          {/* Mobile Menu Button */}
          <button className="text-black lg:hidden" onClick={() => setMenuOpen(true)}>
            <Menu size={36} />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col bg-white">
          {/* Top Bar */}
          <div className="bg-[#ffd232] text-black hidden md:flex justify-between items-center px-6 py-3">
            <div className="flex items-center space-x-3">
              <Link href="#" target="_blank">
                <FaFacebook className="w-6 h-6 cursor-pointer hover:opacity-80" />
              </Link>
              <Link href="#" target="_blank">
                <FaYoutube className="w-6 h-6 cursor-pointer hover:opacity-80" />
              </Link>
              <Link href="#" target="_blank">
                <FaInstagram className="w-6 h-6 cursor-pointer hover:opacity-80" />
              </Link>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <Link href="/track_order" className="flex items-center gap-1 hover:opacity-80">
                <Truck className="w-4 h-4" />
                <span>Track Order</span>
              </Link>

              <Link href="/" className="flex items-center gap-1 hover:opacity-80">
                <User className="w-4 h-4" />
                <span>Sign In</span>
              </Link>
            </div>
          </div>

          {/* Desktop Navbar */}
          <nav className="hidden sm:flex flex-col lg:flex-row justify-between items-center px-6 lg:px-8 py-3">
            <ul className="flex flex-wrap justify-center items-center gap-6 text-lg font-medium text-gray-800">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="cursor-pointer hover:text-green-700 transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap justify-center lg:justify-end items-center gap-4 mt-4 lg:mt-0">
              <button
                onClick={() => {
                  const footerSection = document.getElementById("quote-section");
                  if (footerSection) {
                    footerSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-[#ffd232] text-black flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium  transition"
              >
                Get A Quote <ArrowRight className="w-4 h-4" />
              </button>

              <Link href="/wishlist">
                <div className="relative cursor-pointer">
                  <Heart className="w-5 h-5 text-gray-700 hover:text-green-700" />
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                </div>
              </Link>

              <div className="relative">
                <div className="relative cursor-pointer" onClick={() => setIsOpen(true)}>
                  <ShoppingCart className="w-5 h-5 text-gray-700 hover:text-green-700" />
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                </div>

                {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/30 z-40" />}
                <Shop isOpen={isOpen} closeDrawer={() => setIsOpen(false)} />
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 90, damping: 15 }}
              className="fixed top-0 left-0 h-full w-[80%] max-w-[300px] bg-[#ffd232] shadow-lg z-50 flex flex-col"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-black/10">
                <Image src={Logo} alt="Logo" className="h-16 w-auto" />
                <button onClick={() => setMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col items-start px-6 py-6 space-y-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="w-full text-black text-base font-medium hover:translate-x-2 transition"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="flex items-center justify-between px-6 py-4 border-t border-black/10">
                <div className="flex items-center space-x-4">
                  <FaFacebook className="w-5 h-5" />
                  <FaLinkedin className="w-5 h-5" />
                  <FaInstagram className="w-5 h-5" />
                </div>

                <div className="flex items-center gap-4">
                  <Link href="/wishlist">
                    <Heart className="w-5 h-5 text-black" />
                  </Link>

                  <Link href="/">
                    <User className="w-5 h-5 text-black" />
                  </Link>

                  <div className="relative cursor-pointer" onClick={() => setIsOpen(true)}>
                    <ShoppingCart className="w-5 h-5 text-black" />
                    <span className="absolute -top-2 -right-2 bg-red-600 text-black text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                      {cartCount}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
