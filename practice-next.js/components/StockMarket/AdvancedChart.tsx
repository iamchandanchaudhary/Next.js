"use client";
import { useEffect, useRef, useState } from "react";

interface AdvancedChartProps {
  defaultSymbol?: string;
  colorTheme?: "light" | "dark";
  height?: number;
}

const popularSymbols = [
  { symbol: "NSE:NIFTY", label: "NIFTY 50" },
  { symbol: "BSE:SENSEX", label: "SENSEX" },
  { symbol: "NSE:RELIANCE", label: "Reliance" },
  { symbol: "NSE:TCS", label: "TCS" },
  { symbol: "NSE:HDFCBANK", label: "HDFC Bank" },
  { symbol: "NASDAQ:AAPL", label: "Apple" },
  { symbol: "NASDAQ:GOOGL", label: "Google" },
  { symbol: "NASDAQ:MSFT", label: "Microsoft" },
  { symbol: "NASDAQ:TSLA", label: "Tesla" },
  { symbol: "NASDAQ:NVDA", label: "NVIDIA" },
  { symbol: "BITSTAMP:BTCUSD", label: "Bitcoin" },
  { symbol: "BITSTAMP:ETHUSD", label: "Ethereum" },
];

export default function AdvancedChart({
  defaultSymbol = "NSE:NIFTY",
  colorTheme = "dark",
  height = 500,
}: AdvancedChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedSymbol, setSelectedSymbol] = useState(defaultSymbol);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: selectedSymbol,
      interval: "D",
      timezone: "Asia/Kolkata",
      theme: colorTheme,
      style: "1",
      locale: "en",
      allow_symbol_change: true,
      calendar: false,
      support_host: "https://www.tradingview.com",
      hide_side_toolbar: false,
      withdateranges: true,
      details: true,
      hotlist: true,
      show_popup_button: true,
      popup_width: "1000",
      popup_height: "650",
      studies: ["STD;RSI", "STD;MACD"],
    });

    containerRef.current.appendChild(script);
  }, [selectedSymbol, colorTheme]);

  return (
    <div className="space-y-3">
      {/* Symbol Quick Select */}
      <div className="flex flex-wrap gap-2">
        {popularSymbols.map((item) => (
          <button
            key={item.symbol}
            onClick={() => setSelectedSymbol(item.symbol)}
            className={`px-3 py-1.5 text-sm rounded-full transition-all duration-200 ${
              selectedSymbol === item.symbol
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Chart Container */}
      <div
        className="tradingview-widget-container rounded-lg overflow-hidden border border-gray-800"
        style={{ height: `${height}px` }}
      >
        <div ref={containerRef} style={{ height: "100%" }} />
      </div>
    </div>
  );
}
