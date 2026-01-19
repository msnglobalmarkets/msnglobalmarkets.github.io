import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PerformanceChart } from "@/components/ui/PerformanceChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { History, Microscope, ShieldCheck, MicroscopeIcon } from "lucide-react";

export default function PerformancePage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Navbar />

            {/* Hero */}
            <section className="py-20 border-b border-white/5">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-4">Results & <span className="text-gold">Methodology</span></h1>
                    <p className="max-w-xl mx-auto text-slate-400">Our edge is a combination of 18 years of historical perspective and real-time agentic AI analysis.</p>
                </div>
            </section>

            {/* Charts Section */}
            <section className="py-20 bg-slate-900/40">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold">Historical Performance tracking</h2>
                            <p className="text-slate-400 leading-relaxed">
                                The following chart demonstrates the cumulative growth of our "Aggressive Growth" AI Strategy over a 12-month backtesting and live monitoring period.
                                We maintain a strict 1:3 reward-to-risk ratio on every trade triggered.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <StatItem label="Avg Monthly Gain" value="+12.4%" />
                                <StatItem label="Max Drawdown" value="7.2%" />
                                <StatItem label="Winning Months" value="11/12" />
                                <StatItem label="Profit Factor" value="2.14" />
                            </div>
                        </div>
                        <div className="bg-slate-950 p-4 rounded-2xl border border-white/5 shadow-3xl">
                            <PerformanceChart />
                        </div>
                    </div>
                </div>
            </section>

            {/* Methodology Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-center mb-16 underline decoration-gold underline-offset-8">The MSN Methodology</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <MethodItem
                            icon={<History className="h-8 w-8 text-gold" />}
                            title="18 Years of Experience"
                            desc="Our logic is built upon two decades of fund management data, survival through the 2008 crash, and 2020 pandemic volatility."
                        />
                        <MethodItem
                            icon={<Microscope className="h-8 w-8 text-blue-500" />}
                            title="Agentic Analysis"
                            desc="Our AI doesn't just use indicators; it functions as an autonomous 'agent' that interprets news sentiment and volume spikes."
                        />
                        <MethodItem
                            icon={<ShieldCheck className="h-8 w-8 text-emerald-500" />}
                            title="Risk-First Engineering"
                            desc="Every strategy is stress-tested with Monte Carlo simulations to ensure sustainability during black swan events."
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

function StatItem({ label, value }: { label: string; value: string }) {
    return (
        <div className="bg-slate-900 p-6 rounded-xl border border-white/5 text-center">
            <div className="text-gold text-2xl font-black mb-1">{value}</div>
            <div className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">{label}</div>
        </div>
    );
}

function MethodItem({ icon, title, desc }: any) {
    return (
        <div className="text-center group">
            <div className="mx-auto w-20 h-20 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center mb-6 group-hover:border-gold/30 transition-all">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}
