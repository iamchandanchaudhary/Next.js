import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Using Custom Metadata for different title for different page
export const metadata = {
  title: {
    default: "Script, Link & Image Components",
    template: "%s | Script, Link & Image Components"
  },
  description: "Describes Script, Link & Image Components",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#000] text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
