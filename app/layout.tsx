import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/Starbackground";
import Navbar from "@/components/main/NavBar";
import Footer from "@/components/main/Footer";

export const metadata: Metadata = {
  title: "Get to know Abhilash",
  description: "Abhilash Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <Navbar />
        <StarsCanvas />
        {children}
        <Footer />
      </body>
    </html>
  );
}
