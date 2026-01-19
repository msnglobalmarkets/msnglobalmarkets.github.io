import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { FeaturesBentoGrid } from "@/components/sections/FeaturesBentoGrid";
import { BrokerComparisonTable } from "@/components/sections/BrokerComparisonTable";
import { PerformanceChart } from "@/components/ui/PerformanceChart";
import { Footer } from "@/components/layout/Footer";
import { DisclaimerModal } from "@/components/ui/DisclaimerModal";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 overflow-x-hidden font-sans selection:bg-gold/30">
      <DisclaimerModal />
      <Navbar />

      <Hero />

      <FeaturesBentoGrid />

      {/* Performance Section */}
      <section className="py-20 bg-slate-900/50 border-y border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Proven Results in <span className="text-gold">Volatile Markets</span>
              </h2>
              <p className="text-slate-400 text-lg">
                While traditional funds struggle with market corrections, our agentic AI adapts in milliseconds.
                Our "Aggressive Growth" portfolio has consistently outperformed the S&P 500 benchmark.
              </p>
              <ul className="space-y-4">
                {[
                  "Real-time sentiment analysis news feeds",
                  "Micro-structure pattern recognition",
                  "Automated hedging against black swan events",
                  "24/7 Market Monitoring"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="h-2 w-2 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <PerformanceChart />
            </div>
          </div>
        </div>
      </section>

      {/* Broker Comparison Section */}
      <section className="py-20 bg-slate-950" id="partners">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Choose Your <span className="text-blue-500">Execution Partner</span>
            </h2>
            <p className="text-slate-400 text-lg">
              We connect consistently with the world's most regulated brokers.
              Select a partner that fits your jurisdiction and leverage requirements.
            </p>
          </div>
          <BrokerComparisonTable />
        </div>
      </section>

      <Footer />
    </main>
  );
}
