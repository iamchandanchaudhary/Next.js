import {
  TickerTape,
  MarketOverview,
  AdvancedChart,
  StockHeatmap,
  StockScreener,
  MiniChart,
  TechnicalAnalysis,
  EconomicCalendar,
} from "@/components/StockMarket";

export default function StockMarketPage() {
  return (
    <div className="min-h-screen bg-[#0b0f14]">
      {/* Live Ticker Tape - Fixed at top */}
      <div className="sticky top-0 z-50 bg-[#0b0f14]">
        <TickerTape colorTheme="dark" />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Live Stock Market Dashboard
          </h1>
          <p className="text-gray-400">
            Real-time market data • No login required • Powered by TradingView
          </p>
        </div>

        {/* Quick Stats - Mini Charts */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Quick Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <MiniChart symbol="NSE:NIFTY" title="NIFTY 50" colorTheme="dark" />
            <MiniChart symbol="NASDAQ:AAPL" title="Apple" colorTheme="dark" />
            <MiniChart
              symbol="BITSTAMP:BTCUSD"
              title="Bitcoin"
              colorTheme="dark"
            />
            <MiniChart symbol="FX_IDC:USDINR" title="USD/INR" colorTheme="dark" />
          </div>
        </section>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Market Overview - Takes 2 columns */}
          <section className="lg:col-span-2">
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
            <MarketOverview colorTheme="dark" height={500} />
          </section>

          {/* Technical Analysis - Takes 1 column */}
          <section className="lg:col-span-1">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Technical Analysis
            </h2>
            <TechnicalAnalysis defaultSymbol="NSE:NIFTY" colorTheme="dark" />
          </section>
        </div>

        {/* Advanced Chart - Full Width */}
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
            Advanced Chart
          </h2>
          <AdvancedChart defaultSymbol="NSE:NIFTY" colorTheme="dark" height={550} />
        </section>

        {/* Stock Heatmap */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-emerald-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
              />
            </svg>
            Market Heatmap
          </h2>
          <StockHeatmap colorTheme="dark" height={500} />
        </section>

        {/* Two Column Layout - Screener & Calendar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Stock Screener */}
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Stock Screener
            </h2>
            <StockScreener colorTheme="dark" height={450} />
          </section>

          {/* Economic Calendar */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-pink-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Economic Calendar
            </h2>
            <EconomicCalendar colorTheme="dark" height={450} />
          </section>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 py-8 border-t border-gray-800">
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
          <p className="text-xs mt-2 text-gray-600">
            This is for informational purposes only and should not be considered
            financial advice.
          </p>
        </footer>
      </main>
    </div>
  );
}
