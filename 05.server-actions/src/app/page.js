"use client"
import { submitAction } from "@/action/form";
import { useRef } from "react";

export default function Home() {

  const ref = useRef();

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold">Fill the Form</h1>

      <form
        ref={ref}
        action={(e) => { submitAction(e); ref.current.reset() }}
        className="flex flex-col gap-2 mt-4"
      >
        
        <div>
          <label htmlFor="name">Name: </label>
          <input id="name" name="name" className="border border-white rounded mx-4" />
        </div>

        <div>
          <label htmlFor="course">Course: </label>
          <input id="course" name="course" className="border border-white rounded mx-4" />
        </div>

        <div>
          <button type="submit" className="px-2 mt-2 bg-white hover:bg-white/85 text-black rounded">Submit</button>
        </div>

      </form>
    </div>
  );
}
