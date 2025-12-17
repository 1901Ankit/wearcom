"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Logo from "../assets/Images/logo/logo.svg";
import SocialProofModal from "./SocialProofForm";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSocialModalOpen, setIsSocialModalOpen] = useState(false);

  const handleNewsletterSubmit = () => {
    if (!email) {
      alert("Please enter an email address");
      return;
    }
    alert(`Subscribed successfully with: ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-[#111111] text-sm relative overflow-hidden">
      {/* LEFT BG */}
  

      {/* NEWSLETTER */}
      <div className="px-4 sm:px-8 lg:px-12 py-8 flex flex-col md:flex-row justify-between items-center border-b border-gray-700 relative z-10">
        <div>
          <h3 className="text-white text-xl font-bold">Join our newsletter</h3>
          <p className="text-white text-sm max-w-md">
            Stay updated with latest offers and product launches.
          </p>
        </div>

        <div className="flex w-full md:w-auto mt-4 md:mt-0 relative bg-white">
          <Mail size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="pl-10 p-2 md:w-80 rounded-l-md"
          />
          <button
            onClick={handleNewsletterSubmit}
            className="bg-[#ffd232] px-4 py-2 rounded-r-md"
          >
            SEND
          </button>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="px-4 sm:px-8 lg:px-12 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 relative z-10">
        {/* LOGO & CONTACT */}
        <div>
          <Image src={Logo} alt="Logo" width={220} height={70} />
          <p className="text-white mt-4">
            C-53 1st Floor Shashi Garden, New Delhi (110091)
          </p>

          <div className="flex items-center text-white mt-3">
            <Phone size={18} className="mr-2" />
            <span>+91 9318432162</span>
          </div>

          <div className="flex items-center text-white mt-2">
            <Mail size={18} className="mr-2" />
            <span>support@zubeka.com</span>
          </div>
        </div>

        {/* HELP */}
        <div>
          <h4 className="text-white text-xl mb-3">Let Us Help You</h4>
          <ul className="space-y-2 text-white">
            <li><Link href="/myorder">My Orders</Link></li>
            <li><Link href="/privacy_policy">Privacy Policy</Link></li>
            <li><Link href="/term_condition">Terms & Conditions</Link></li>
            <li>
              <button onClick={() => setIsSocialModalOpen(true)}>Social</button>
            </li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-white text-xl mb-3">Get to Know Us</h4>
          <ul className="space-y-2 text-white">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/categorie">Categories</Link></li>
            <li><Link href="/product">Products</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contactus">Contact</Link></li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="text-white text-xl mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            <Link href="#" className="bg-[#ffd232] p-2 rounded-full"><FaFacebook /></Link>
            <Link href="#" className="bg-[#ffd232] p-2 rounded-full"><FaInstagram /></Link>
            <Link href="#" className="bg-[#ffd232] p-2 rounded-full"><FaYoutube /></Link>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#ffd232] text-black py-3 text-center text-xs flex flex-col md:flex-row justify-between px-4">
        <p>© 2025 Zubeka. All Rights Reserved</p>
        <div className="space-x-4">
          <Link href="/term_condition">Terms</Link>
          <Link href="/privacy_policy">Privacy</Link>
        </div>
      </div>

      <SocialProofModal
        isOpen={isSocialModalOpen}
        onClose={() => setIsSocialModalOpen(false)}
      />
    </footer>
  );
}
