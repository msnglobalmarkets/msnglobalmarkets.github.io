import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BrokerComparisonTable } from "@/components/sections/BrokerComparisonTable";
import { Info } from "lucide-react";

export default function PartnersPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Navbar />

            <section className="py-20 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.05),transparent)]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-black mb-6">Execution & <span className="text-gold">Broker Partners</span></h1>
                        <p className="text-slate-400 text-lg">
                            We provide the intelligence; you choose the platform.
                            Our AI strategies are optimized for zero-latency execution across the world's most regulated CFD brokers.
                        </p>
                    </div>

                    <div className="bg-slate-900/50 p-6 md:p-10 rounded-3xl border border-white/5 shadow-2xl overflow-hidden">
                        <BrokerComparisonTable />
                    </div>

                    <div className="mt-12 p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20 flex gap-4 items-center">
                        <Info className="h-6 w-6 text-blue-500 shrink-0" />
                        <p className="text-sm text-slate-400 leading-relaxed">
                            <strong>Managed Funds vs. Self-Trading:</strong> You can choose to have your account directly managed by our AI systems through PAMM/MAM services, or install our Expert Advisors on your own MT4/MT5 terminal. Select a broker above to view specific compatibility.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
