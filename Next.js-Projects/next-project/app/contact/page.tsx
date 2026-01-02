"use client";
import React from "react";
import { Meteors } from "@/components/ui/meteors";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 pt-44">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-4 text-white">Contact Us</h1>
      <p className='text-center text-gray-400 max-w-lg mx-auto'>We're here to help with any questions about out courses, program or events. Reach out and let us know how we can assist you in success journey.</p>

      <Meteors number={100} />

    </div>
  )
}

export default Contact;
