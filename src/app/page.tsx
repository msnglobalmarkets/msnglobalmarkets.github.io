import { Navbar } from "@/components/layout/Navbar";
import { Hero3D } from "@/components/sections/Hero3D";
import { FeaturesBentoGrid } from "@/components/sections/FeaturesBentoGrid";
import { BrokerComparisonTable } from "@/components/sections/BrokerComparisonTable";
import { PerformanceChart } from "@/components/ui/PerformanceChart";
import { Footer } from "@/components/layout/Footer";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight, ArrowUpRight, TrendingUp, Globe, Shield } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-gold/30">
      <Navbar />

      <Hero3D />

      {/* Lucrative Highlight Section */}
      <section className="py-24 relative overflow-hidden bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.08),transparent)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 text-gold text-xs font-black uppercase tracking-[0.2em]">
                <div className="w-8 h-[1px] bg-gold" />
                Institutional Edge
              </div>
              <h2 className="text-4xl md:text-6xl font-black leading-[1.1]">
                Unlocking <span className="text-gold">Alpha</span> through Agentic AI.
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                While retail traders rely on lagging indicators, our agentic AI models interpret the microstructure of global order flows, sentiment shifts, and macroeconomic data points in real-time.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FeatureHighlight
                  icon={<TrendingUp className="text-gold" />}
                  title="90%+ Success Ratio*"
                  desc="Historically proven algorithmic patterns."
                />
                <FeatureHighlight
                  icon={<Globe className="text-gold" />}
                  title="Global Markets"
                  desc="Forex, Indices, Commodities, and Crypto."
                />
                <FeatureHighlight
                  icon={<Shield className="text-gold" />}
                  title="Zero Lock-in"
                  desc="Your funds, your choice of broker."
                />
                <FeatureHighlight
                  icon={<ArrowUpRight className="text-gold" />}
                  title="24/7 Monitoring"
                  desc="Constant oversight by pro quant team."
                />
              </div>

              <div className="pt-4">
                <Link href="/performance">
                  <Button variant="link" className="text-gold p-0 h-auto font-bold text-lg hover:no-underline group">
                    View Live Performance Metrics
                    <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-gold/20 blur-[100px] rounded-full opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-3xl">
                <PerformanceChart />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturesBentoGrid />

      {/* Broker CTA Section */}
      <section className="py-24 bg-slate-950" id="partners">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white">
              Choose Your <span className="text-gold">Execution Partner</span>
            </h2>
            <p className="text-slate-400 text-lg">
              We connect consistently with the world&apos;s most regulated brokers.
              Select a partner that fits your jurisdiction and leverage requirements.
            </p>
          </div>
          <div className="bg-slate-900/50 p-6 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
            <BrokerComparisonTable />
          </div>
        </div>
      </section>

      {/* Custom EA Teaser */}
      <section className="py-24 bg-gold">
        <div className="container mx-auto px-4 md:px-6 text-center text-slate-950">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Need a Bespoke Trading System?</h2>
          <p className="text-slate-900/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
            We design and build custom Expert Advisors (EAs) and high-frequency trading systems for professional clients and hedge funds.
          </p>
          <Link href="/expert-advisors">
            <Button size="lg" className="bg-slate-950 text-white hover:bg-slate-800 font-black px-12 h-16 text-xl rounded-full shadow-2xl">
              Consult Our AI Engineers
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function FeatureHighlight({ icon, title, desc }: any) {
  return (
    <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-gold/20 transition-all">
      <div className="mt-1">{icon}</div>
      <div>
        <div className="font-bold text-white mb-0.5">{title}</div>
        <div className="text-xs text-slate-500 leading-tight">{desc}</div>
      </div>
    </div>
  );
}
