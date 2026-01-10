import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Home Page | Script, Link & Image Components",
  description: "Next.js Project",
};

export default function Home() {
  return (
    <div className="h-[85vh] px-4 py-3">
      <p>Hello I'm Home Page</p>

      <img className="mt-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNubLmqdOK9pZWU-2IiD20cuSIdUUDi9-NvQ&s" alt="map"></img>

      {/* <Image width={100} height={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNubLmqdOK9pZWU-2IiD20cuSIdUUDi9-NvQ&s" /> */}
    </div>
  );
}
