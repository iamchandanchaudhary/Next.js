"use client";
import { useEffect, useRef } from "react";

interface MiniChartProps {
  symbol: string;
  title: string;
  colorTheme?: "light" | "dark";
}

export default function MiniChart({
  symbol,
  title,
  colorTheme = "dark",
}: MiniChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      symbol: symbol,
      width: "100%",
      height: "100%",
      locale: "en",
      dateRange: "1D",
      colorTheme: colorTheme,
      isTransparent: false,
      autosize: true,
      largeChartUrl: "",
      noTimeScale: false,
      chartOnly: false,
    });

    containerRef.current.appendChild(script);
  }, [symbol, colorTheme]);

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden h-[200px]">
      <div ref={containerRef} className="h-full" />
    </div>
  );
}
