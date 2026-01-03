import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarMenu from "../components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Home | Course Project",
    template: "%s | Course Project"
  },
  description: "This is Course Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="relative w-full flex items-center justify-center">
          <NavbarMenu />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
