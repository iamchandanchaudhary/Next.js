"use client";

import { useEffect, useState } from "react";

export default function Popup3() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Popup Box */}
      <div className="relative z-50 w-[90%] max-w-md rounded-2xl bg-white p-6 shadow-xl">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold text-gray-800">
          Welcome to My Website 🎉
        </h2>

        <p className="mt-2 text-gray-600 text-sm">
          This popup appears after 4–5 seconds and closes when you click the close button.
        </p>

        <button
          onClick={() => setIsOpen(false)}
          className="mt-5 w-full rounded-xl bg-black px-4 py-2 text-white hover:bg-gray-800"
        >
          Close Popup
        </button>
      </div>
    </div>
  );
}
