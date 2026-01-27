"use client";
import { useEffect, useRef } from "react";

export default function LiveStockChart() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    ref.current.innerHTML = "";

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

    ref.current.appendChild(script);
  }, []);

  return <div ref={ref} className="h-[500px] w-full" />;
}
