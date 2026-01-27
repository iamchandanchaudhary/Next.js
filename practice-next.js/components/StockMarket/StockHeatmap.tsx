"use client";
import { useEffect, useRef, useState } from "react";

interface StockHeatmapProps {
  colorTheme?: "light" | "dark";
  height?: number;
}

type DataSource = "SPX500" | "NasdaqComposite" | "NIFTY" | "Crypto";

const dataSources: { id: DataSource; label: string }[] = [
  { id: "SPX500", label: "S&P 500" },
  { id: "NasdaqComposite", label: "NASDAQ" },
  { id: "NIFTY", label: "NIFTY" },
  { id: "Crypto", label: "Crypto" },
];

export default function StockHeatmap({
  colorTheme = "dark",
  height = 500,
}: StockHeatmapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dataSource, setDataSource] = useState<DataSource>("SPX500");

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      exchanges: [],
      dataSource: dataSource,
      grouping: "sector",
      blockSize: "market_cap_basic",
      blockColor: "change",
      locale: "en",
      symbolUrl: "",
      colorTheme: colorTheme,
      hasTopBar: true,
      isDataSet498: true,
      isZoomEnabled: true,
      hasSymbolTooltip: true,
      width: "100%",
      height: height,
    });

    containerRef.current.appendChild(script);
  }, [dataSource, colorTheme, height]);

  return (
    <div className="space-y-3">
      {/* Data Source Selector */}
      <div className="flex gap-2">
        {dataSources.map((source) => (
          <button
            key={source.id}
            onClick={() => setDataSource(source.id)}
            className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
              dataSource === source.id
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/30"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
            }`}
          >
            {source.label}
          </button>
        ))}
      </div>

      {/* Heatmap Container */}
      <div
        className="tradingview-widget-container rounded-lg overflow-hidden border border-gray-800"
        style={{ height: `${height}px` }}
      >
        <div ref={containerRef} style={{ height: "100%" }} />
      </div>
    </div>
  );
}
