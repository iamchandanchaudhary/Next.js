import React from "react";
import Script from "next/script"; // => Script Component help us to write javascript language in the next.js 

export const metadata = {
  title: "About Page",
  description: "Next.js Project",
};

export default function About() {
  return (
    <div className="h-[85vh] px-4 py-3">
      <Script>
        {` alert("Welcome to About Page"); `}
      </Script>
      <p>Hello I'm About Page</p>
    </div>
  );
}
