import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "First Project",
  description: "First Next.js Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-800`}>
        <Navbar />
        {children}

        <div className="flex gap-4 w-max px-5 py-2 bg-amber-500 mt-4">
          <Link href={"/"}>Home Page</Link>
          <Link href={"/contact"}>Contact Page</Link>
          <Link href={"/about"}>About Page</Link>
          <Link href={"/about/skills"}>Skills Page</Link>
        </div>
      </body>
    </html>
  );
}
