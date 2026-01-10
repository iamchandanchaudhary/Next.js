"use client"
export default function Home() {

  const handleClick = async () => {
    let data = {
      name: "Chandan",
      course: "BCA"
    }

    let a = await fetch("/api/add", {
      method: "POST", headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    let res = await a.json();
    console.log(res);

  }

  return (
    <div className="p-4">
      <p className="text-lg">Next.js API Route.</p>

      <button
        onClick={handleClick}
        className="bg-white text-black rounded hover:bg-white/85 px-2 py-0.5 mt-2"
      >
        Click me
      </button>
    </div>
  );
}
