import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Code2, Cpu, LineChart, Zap } from "lucide-react";
import Link from "next/link";

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
                            <Link href="/contact?subject=Custom EA Request">
                                <Button size="lg" className="bg-gold text-slate-950 hover:bg-amber-400 font-bold px-8 h-14">
                                    Request a Custom Build
                                </Button>
                            </Link>
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

            {/* MQL5 Product Section */}
            <section className="py-20 bg-slate-900/40">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl font-bold mb-8">Featured Product: <span className="text-gold">Grid Scalper Pro</span></h2>
                    <p className="text-slate-400 mb-8 leading-relaxed">
                        Our flagship MQL5 Expert Advisor is now available for public licensing.
                        Designed for low-drawdown grid trading with automated risk controls.
                    </p>
                    <a href="https://www.mql5.com/en/market/product/160364?source=Site+Market+Product+Page#description" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-slate-950 font-bold h-14 px-8 text-lg">
                            View on MQL5 Market <Code2 className="ml-2 h-4 w-4" />
                        </Button>
                    </a>
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
