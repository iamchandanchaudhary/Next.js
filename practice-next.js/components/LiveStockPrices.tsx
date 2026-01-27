"use client";
import { useEffect, useRef } from "react";

export default function LiveStockPrices() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "NSE:RELIANCE", title: "Reliance" },
        { proName: "NSE:TCS", title: "TCS" },
        { proName: "NSE:HDFCBANK", title: "HDFC Bank" },
        { proName: "NSE:INFY", title: "Infosys" },
        { proName: "NSE:ICICIBANK", title: "ICICI Bank" }
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "adaptive",
      locale: "en"
    });

    containerRef.current.appendChild(script);
  }, []);

  return <div ref={containerRef} className="w-full" />;
}
