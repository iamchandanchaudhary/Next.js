"use client" // ==> It will allow us to run our next app on client side but without showing server side details
// because next.js is by default run on server side
import { useState, useEffect } from "react";
// import fs from "fs/promises";

export default function ClientFile() {

  const [count, setCount] = useState(0);
  console.log("Hello Chandan");

  // let a = fs.readFile(".gitignore");
  // a.then((e) => console.log(e.toString())) // ==> it was a server side data can't run on client side

  return (
    <div>
      <p>Total: {count}</p>

      <button
        onClick={() => setCount(count + 1)}
        className="bg-white hover:bg-white/80 rounded text-black px-2 py-0.5"
      >
        Click me
      </button>
    </div>
  );
}
