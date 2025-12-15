'use client';
import "./globals.css";
import { Manrope, Oregano, Outfit } from "next/font/google";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { usePathname, useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const oregano = Oregano({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-oregano",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  variable: "--font-outfit",
});



export default function RootLayout({ children }) {
  const pathname = usePathname();
 const router = useRouter();
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${oregano.variable} ${outfit.variable}`}
    >
      <body>
   <Header />
        {children}
          <>
            <Footer />
          </>

        <Toaster position="top-right" />
      </body>
    </html>
  );
}
