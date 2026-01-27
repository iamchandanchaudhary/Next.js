import TradingViewTicker from "@/components/TradingViewTicker";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-4">
        Live Stock Market Prices
      </h1>

      <TradingViewTicker />
    </main>
  );
}
