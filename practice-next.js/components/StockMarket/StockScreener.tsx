"use client";
import { useEffect, useRef, useState } from "react";

interface StockScreenerProps {
  colorTheme?: "light" | "dark";
  height?: number;
}

type Market = "america" | "india" | "crypto";

const markets: { id: Market; label: string }[] = [
  { id: "america", label: "USA" },
  { id: "india", label: "India" },
  { id: "crypto", label: "Crypto" },
];

export default function StockScreener({
  colorTheme = "dark",
  height = 500,
}: StockScreenerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [market, setMarket] = useState<Market>("india");

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      width: "100%",
      height: height,
      defaultColumn: "overview",
      defaultScreen: "most_capitalized",
      market: market,
      showToolbar: true,
      colorTheme: colorTheme,
      locale: "en",
    });

    containerRef.current.appendChild(script);
  }, [market, colorTheme, height]);

  return (
    <div className="space-y-3">
      {/* Market Selector */}
      <div className="flex gap-2">
        {markets.map((m) => (
          <button
            key={m.id}
            onClick={() => setMarket(m.id)}
            className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
              market === m.id
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Screener Container */}
      <div
        className="tradingview-widget-container rounded-lg overflow-hidden border border-gray-800"
        style={{ height: `${height}px` }}
      >
        <div ref={containerRef} style={{ height: "100%" }} />
      </div>
    </div>
  );
}
