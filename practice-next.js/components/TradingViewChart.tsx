"use client";
import { useEffect, useRef } from "react";

export default function TradingViewChart() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    chartRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      symbol: "NSE:NIFTY",
      interval: "5",
      theme: "light",
      autosize: true,
      locale: "en"
    });

    chartRef.current.appendChild(script);
  }, []);

  return <div ref={chartRef} className="h-[500px] w-full" />;
}
