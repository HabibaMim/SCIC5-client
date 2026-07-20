import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import ChatWidget from "@/components/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GigsVerse",
  description: "The freelance marketplace connecting sellers with buyers.",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="black" lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex overflow-x-hidden flex-col">
        <Navbar />
        {children}
        <Footer />
        <ChatWidget />
        <Toaster />
      </body>
    </html>
  );
}