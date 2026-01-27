"use client";
import { useEffect, useRef } from "react";

export default function MarketTicker() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    ref.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "NSE:HINDCOPPER", title: "Hindustan Copper" },
        { proName: "NSE:IREDA", title: "Indian Ren. Energy" },
        { proName: "NSE:GROWW", title: "Groww" },
        { proName: "NSE:SOLARINDS", title: "Solar Industries India" },
        { proName: "NSE:IDEA", title: "Vodafone Idea" }
      ],
      showSymbolLogo: false,
      isTransparent: true,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "en"
    });

    ref.current.appendChild(script);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* background grid effect */}
      <div className="absolute inset-0 bg-[#0b0f14] bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      {/* ticker */}
      <div
        ref={ref}
        className="relative z-10 border-y border-white/10 py-2"
      />
    </div>
  );
}
