import Link from "next/link";
import { Popup } from "../../components/Popup";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-gray-50">
      <Popup />

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-foreground">Welcome to Your Store</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            A popup will appear 4-5 seconds after you load this page. Click the close button to dismiss it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="p-6 rounded-lg bg-white border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-red-800 text-foreground mb-2">Product {item}</h3>
                <p className="text-gray-600">High-quality product with amazing features</p>
              </div>
            ))}
          </div>

          <Link href={"/"} className="bg-black rounded px-4 py-2 text-white">Home</Link>

        </div>
      </div>
    </div>
  )
}
