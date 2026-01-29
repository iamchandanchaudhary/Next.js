"use client";
import { useEffect, useRef, useState } from "react";

interface TechnicalAnalysisProps {
  defaultSymbol?: string;
  colorTheme?: "light" | "dark";
}

const symbols = [
  { symbol: "NSE:NIFTY", label: "NIFTY 50" },
  { symbol: "NSE:RELIANCE", label: "Reliance" },
  { symbol: "NSE:TCS", label: "TCS" },
  { symbol: "NASDAQ:AAPL", label: "Apple" },
  { symbol: "NASDAQ:GOOGL", label: "Google" },
  { symbol: "BITSTAMP:BTCUSD", label: "Bitcoin" },
];

export default function TechnicalAnalysis({
  defaultSymbol = "NSE:NIFTY",
  colorTheme = "dark",
}: TechnicalAnalysisProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedSymbol, setSelectedSymbol] = useState(defaultSymbol);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      interval: "1D",
      width: "100%",
      isTransparent: false,
      height: 400,
      symbol: selectedSymbol,
      showIntervalTabs: true,
      displayMode: "single",
      locale: "en",
      colorTheme: colorTheme,
    });

    containerRef.current.appendChild(script);
  }, [selectedSymbol, colorTheme]);

  return (
    <div className="space-y-3">
      {/* Symbol Selector */}
      <div className="flex flex-wrap gap-2">
        {symbols.map((item) => (
          <button
            key={item.symbol}
            onClick={() => setSelectedSymbol(item.symbol)}
            className={`px-3 py-1.5 text-sm rounded-full transition-all duration-200 ${
              selectedSymbol === item.symbol
                ? "bg-orange-600 text-white shadow-lg shadow-orange-500/30"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Technical Analysis Container */}
      <div className="tradingview-widget-container rounded-lg overflow-hidden border border-gray-800">
        <div ref={containerRef} style={{ height: "400px" }} />
      </div>
    </div>
  );
}
