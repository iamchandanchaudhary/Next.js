"use client";
import { useEffect, useRef } from "react";

interface TickerTapeProps {
  colorTheme?: "light" | "dark";
  /** Speed: "slow" = 60s, "normal" = 30s, "fast" = 15s */
  speed?: "slow" | "normal" | "fast";
}

const speedMap = {
  slow: "60s",
  normal: "30s",
  fast: "15s",
};

export default function TickerTape({ 
  colorTheme = "dark",
  speed = "normal" 
}: TickerTapeProps) {
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
        // US Markets
        { proName: "FOREXCOM:SPXUSD", title: "S&P 500" },
        { proName: "FOREXCOM:NSXUSD", title: "NASDAQ 100" },
        { proName: "FOREXCOM:DJI", title: "Dow Jones" },
        // Indian Markets (using correct TradingView symbols)
        { proName: "PEPPERSTONE:NIFTY50", title: "NIFTY 50" },
        { proName: "BSE:SENSEX", title: "SENSEX" },
        { proName: "BSE:RELIANCE", title: "Reliance" },
        { proName: "BSE:TCS", title: "TCS" },
        { proName: "BSE:INFY", title: "Infosys" },
        // Top US Stocks
        { proName: "NASDAQ:AAPL", title: "Apple" },
        { proName: "NASDAQ:GOOGL", title: "Google" },
        { proName: "NASDAQ:MSFT", title: "Microsoft" },
        { proName: "NASDAQ:AMZN", title: "Amazon" },
        { proName: "NASDAQ:TSLA", title: "Tesla" },
        { proName: "NASDAQ:NVDA", title: "NVIDIA" },
        { proName: "NASDAQ:META", title: "Meta" },
        // Crypto
        { proName: "CRYPTO:BTCUSD", title: "Bitcoin" },
        { proName: "CRYPTO:ETHUSD", title: "Ethereum" },
        // Forex
        { proName: "FX_IDC:USDINR", title: "USD/INR" },
        { proName: "FX:EURUSD", title: "EUR/USD" },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "adaptive",
      colorTheme: colorTheme,
      locale: "en",
    });

    containerRef.current.appendChild(script);
  }, [colorTheme]);

  return (
    <div className="tradingview-widget-container">
      {/* Custom CSS to control ticker speed */}
      <style jsx global>{`
        .tradingview-widget-container iframe {
          /* Override TradingView's animation speed */
        }
        .tv-ticker-tape__wrapper {
          animation-duration: ${speedMap[speed]} !important;
        }
      `}</style>
      <div ref={containerRef} className="w-full" />
    </div>
  );
}
