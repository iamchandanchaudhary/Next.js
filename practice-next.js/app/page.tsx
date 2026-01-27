import Link from "next/link";
import {
  TickerTape,
  MarketOverview,
  AdvancedChart,
  MiniChart,
} from "@/components/StockMarket";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0f14]">
      {/* Live Ticker Tape - Fixed at top */}
      <div className="sticky top-0 z-50 bg-[#0b0f14]">
        <TickerTape colorTheme="dark" />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Live Stock Market Prices
            </h1>
            <p className="text-gray-400 mt-2">
              Real-time market data • No login required
            </p>
          </div>
          <Link
            href="/stocks"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
          >
            View Full Dashboard →
          </Link>
        </div>

        {/* Quick Stats - Mini Charts */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Market Snapshot
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <MiniChart symbol="NSE:NIFTY" title="NIFTY 50" colorTheme="dark" />
            <MiniChart symbol="BSE:SENSEX" title="SENSEX" colorTheme="dark" />
            <MiniChart symbol="BITSTAMP:BTCUSD" title="Bitcoin" colorTheme="dark" />
            <MiniChart symbol="FX_IDC:USDINR" title="USD/INR" colorTheme="dark" />
          </div>
        </section>

        {/* Market Overview */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
            Market Overview
          </h2>
          <MarketOverview colorTheme="dark" height={450} />
        </section>

        {/* Advanced Chart */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-purple-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
              />
            </svg>
            Interactive Chart
          </h2>
          <AdvancedChart defaultSymbol="NSE:NIFTY" colorTheme="dark" height={500} />
        </section>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border border-blue-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Want More Features?
              </h3>
              <p className="text-gray-300 mt-1">
                Access heatmaps, screeners, technical analysis & economic calendar
              </p>
            </div>
            <Link
              href="/stocks"
              className="px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl"
            >
              Explore Full Dashboard
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 py-6 border-t border-gray-800">
          <p className="text-sm">
            Data provided by{" "}
            <a
              href="https://www.tradingview.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              TradingView
            </a>{" "}
            • Prices may be delayed
          </p>
        </footer>
      </main>
    </div>
  );
}
