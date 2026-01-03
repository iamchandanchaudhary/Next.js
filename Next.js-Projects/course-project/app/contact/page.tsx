// "use client";
import React from "react";
import { Meteors } from "@/components/ui/meteors";
import { BackgroundBeams } from "@/components/ui/background-beams";

export const metadata = {
  title: "Contact",
  description: "This is Contact Page",
};

function Contact() {
  return (
    <div className="min-h-screen bg-black py-12 pt-40 pb-16">

      <BackgroundBeams />

      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-4 text-white">Contact Us</h1>
      <p className='text-center text-gray-400 max-w-lg mx-auto'>We're here to help with any questions about out courses, program or events. Reach out and let us know how we can assist you in success journey.</p>

      {/* <Meteors number={400} /> */}
      <form
        action=""
        className="mx-auto flex flex-col justify-start items-center mt-4 gap-4 w-2xl"
      >
        <input
          type="email"
          name=""
          id=""
          placeholder="Your email address"
          required
          className="bg-gray-800 w-full h-12 px-4 py-2 rounded border-2 border-transparent focus:border-teal-600 focus:outline-none focus:ring-0"
        />

        <textarea
          rows={8}
          placeholder="Your message"
          required
          className="bg-gray-800 w-full px-4 py-3 rounded border-2 border-transparent focus:border-teal-600 focus:outline-none focus:ring-0"
        ></textarea>

        <button
          type={"submit"}
          className="font-medium w-full px-5 py-3 bg-teal-600 hover:bg-teal-500 focus:ring-2 focus:ring-teal-700 transition-all ease-in-out duration-150 rounded"
        >
          Send Message
        </button>
      </form>

    </div>
  )
}

export default Contact;
