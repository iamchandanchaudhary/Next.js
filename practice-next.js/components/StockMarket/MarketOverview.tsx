"use client";
import { useEffect, useRef } from "react";

interface MarketOverviewProps {
  colorTheme?: "light" | "dark";
  height?: number;
}

export default function MarketOverview({
  colorTheme = "dark",
  height = 450,
}: MarketOverviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      colorTheme: colorTheme,
      dateRange: "12M",
      showChart: true,
      locale: "en",
      largeChartUrl: "",
      isTransparent: false,
      showSymbolLogo: true,
      showFloatingTooltip: true,
      width: "100%",
      height: height,
      plotLineColorGrowing: "rgba(41, 98, 255, 1)",
      plotLineColorFalling: "rgba(255, 82, 82, 1)",
      gridLineColor: "rgba(42, 46, 57, 0)",
      scaleFontColor: "rgba(209, 212, 220, 1)",
      belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorFalling: "rgba(255, 82, 82, 0.12)",
      belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
      belowLineFillColorFallingBottom: "rgba(255, 82, 82, 0)",
      symbolActiveColor: "rgba(41, 98, 255, 0.12)",
      tabs: [
        {
          title: "Indices",
          symbols: [
            { s: "FOREXCOM:SPXUSD", d: "S&P 500" },
            { s: "FOREXCOM:NSXUSD", d: "NASDAQ 100" },
            { s: "FOREXCOM:DJI", d: "Dow Jones" },
            { s: "NSE:NIFTY", d: "NIFTY 50" },
            { s: "BSE:SENSEX", d: "SENSEX" },
            { s: "INDEX:NKY", d: "Nikkei 225" },
            { s: "INDEX:DEU40", d: "DAX" },
            { s: "CAPITALCOM:UK100", d: "FTSE 100" },
          ],
          originalTitle: "Indices",
        },
        {
          title: "Tech Stocks",
          symbols: [
            { s: "NASDAQ:AAPL", d: "Apple" },
            { s: "NASDAQ:GOOGL", d: "Google" },
            { s: "NASDAQ:MSFT", d: "Microsoft" },
            { s: "NASDAQ:AMZN", d: "Amazon" },
            { s: "NASDAQ:TSLA", d: "Tesla" },
            { s: "NASDAQ:NVDA", d: "NVIDIA" },
            { s: "NASDAQ:META", d: "Meta" },
            { s: "NASDAQ:NFLX", d: "Netflix" },
          ],
          originalTitle: "Tech Stocks",
        },
        {
          title: "Indian Stocks",
          symbols: [
            { s: "NSE:RELIANCE", d: "Reliance" },
            { s: "NSE:TCS", d: "TCS" },
            { s: "NSE:HDFCBANK", d: "HDFC Bank" },
            { s: "NSE:INFY", d: "Infosys" },
            { s: "NSE:ICICIBANK", d: "ICICI Bank" },
            { s: "NSE:SBIN", d: "SBI" },
            { s: "NSE:BHARTIARTL", d: "Bharti Airtel" },
            { s: "NSE:ITC", d: "ITC" },
          ],
          originalTitle: "Indian Stocks",
        },
        {
          title: "Crypto",
          symbols: [
            { s: "BITSTAMP:BTCUSD", d: "Bitcoin" },
            { s: "BITSTAMP:ETHUSD", d: "Ethereum" },
            { s: "BINANCE:BNBUSDT", d: "BNB" },
            { s: "BINANCE:SOLUSDT", d: "Solana" },
            { s: "BINANCE:XRPUSDT", d: "Ripple" },
            { s: "BINANCE:ADAUSDT", d: "Cardano" },
          ],
          originalTitle: "Crypto",
        },
        {
          title: "Forex",
          symbols: [
            { s: "FX:EURUSD", d: "EUR/USD" },
            { s: "FX:GBPUSD", d: "GBP/USD" },
            { s: "FX:USDJPY", d: "USD/JPY" },
            { s: "FX_IDC:USDINR", d: "USD/INR" },
            { s: "FX:AUDUSD", d: "AUD/USD" },
            { s: "FX:USDCAD", d: "USD/CAD" },
          ],
          originalTitle: "Forex",
        },
      ],
    });

    containerRef.current.appendChild(script);
  }, [colorTheme, height]);

  return (
    <div className="tradingview-widget-container rounded-lg overflow-hidden">
      <div ref={containerRef} style={{ height: `${height}px` }} />
    </div>
  );
}
