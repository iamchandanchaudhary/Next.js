"use client";
import { useEffect, useRef } from "react";

interface EconomicCalendarProps {
  colorTheme?: "light" | "dark";
  height?: number;
}

export default function EconomicCalendar({
  colorTheme = "dark",
  height = 400,
}: EconomicCalendarProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      colorTheme: colorTheme,
      isTransparent: false,
      width: "100%",
      height: height,
      locale: "en",
      importanceFilter: "-1,0,1",
      countryFilter:
        "ar,au,br,ca,cn,fr,de,in,id,it,jp,kr,mx,ru,sa,za,tr,gb,us,eu",
    });

    containerRef.current.appendChild(script);
  }, [colorTheme, height]);

  return (
    <div
      className="tradingview-widget-container rounded-lg overflow-hidden border border-gray-800"
      style={{ height: `${height}px` }}
    >
      <div ref={containerRef} style={{ height: "100%" }} />
    </div>
  );
}
