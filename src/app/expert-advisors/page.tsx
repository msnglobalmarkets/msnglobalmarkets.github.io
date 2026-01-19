import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Code2, Cpu, LineChart, Zap } from "lucide-react";

export default function ExpertAdvisorsPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Navbar />

            <section className="py-20 lg:py-32 relative">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-block px-4 py-1 rounded bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-widest">
                                Custom Algorithmic Engineering
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black leading-tight">
                                Custom <span className="text-gold">Expert Advisors</span> Built to Order
                            </h1>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Beyond managed funds, we build bespoke MQL4/MQL5 and Python-based trading bots.
                                Whether you need a simple trend-follower or a complex frequency-adaptive system, our 18 years of code architecture is at your disposal.
                            </p>
                            <ul className="space-y-4 text-slate-300">
                                <li className="flex items-center gap-3"><Zap className="h-5 w-5 text-gold" /> High-frequency execution optimization</li>
                                <li className="flex items-center gap-3"><Zap className="h-5 w-5 text-gold" /> Proprietary indicator integration</li>
                                <li className="flex items-center gap-3"><Zap className="h-5 w-5 text-gold" /> Advanced risk-management logic layers</li>
                            </ul>
                            <Button size="lg" className="bg-gold text-slate-950 hover:bg-amber-400 font-bold px-8 h-14">
                                Request a Custom Build
                            </Button>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gold/20 blur-[120px] rounded-full pointer-events-none" />
                            <div className="relative bg-slate-900 border border-white/10 rounded-3xl p-8 shadow-3xl overflow-hidden aspect-square flex items-center justify-center">
                                <Code2 className="h-48 w-48 text-gold/30 absolute" />
                                <div className="grid grid-cols-2 gap-4 relative z-10 w-full">
                                    <FeatureBox icon={<Cpu />} title="MT4/MT5" desc="Expert Advisor" />
                                    <FeatureBox icon={<LineChart />} title="C#" desc="cTrader Bot" />
                                    <FeatureBox icon={<Code2 />} title="Python" desc="REST/Fix APIs" />
                                    <FeatureBox icon={<Zap />} title="90%+" desc="Historical Success*" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Compliance Note */}
            <section className="py-12 bg-white/5 border-y border-white/5">
                <div className="container mx-auto px-4 text-center text-slate-500 text-xs italic">
                    *The "90% Success Ratio" refers to historical backtesting results for specific optimized strategies and does not guarantee future live performance. All algorithmic trading carries significant risk of capital loss.
                </div>
            </section>

            <Footer />
        </div>
    );
}

function FeatureBox({ icon, title, desc }: any) {
    return (
        <div className="bg-slate-950/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center hover:border-gold/30 transition-all">
            <div className="text-gold mb-3 flex justify-center">{icon}</div>
            <div className="text-lg font-bold text-white">{title}</div>
            <div className="text-xs text-slate-500 font-medium">{desc}</div>
        </div>
    );
}
