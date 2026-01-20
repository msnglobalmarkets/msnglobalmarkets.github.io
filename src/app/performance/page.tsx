"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PerformanceChart } from "@/components/ui/PerformanceChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { History, Microscope, ShieldCheck, TrendingUp } from "lucide-react";
import performanceData from "@/lib/performance-data.json";

export default function PerformancePage() {
    const stats = performanceData.globalStats;
    const avgRoi = stats ? (stats.totalNetProfit / stats.totalInvestment * 100 / (stats.totalMonths || 1)).toFixed(1) : "5.9";

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
                                The following chart demonstrates the cumulative growth of our "Aggressive Growth" AI Strategy across our 2025 institutional ecosystem.
                                We maintain a strict risk-managed approach to capital preservation.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <StatItem label="Avg Monthly Gain" value={`+${avgRoi}%`} />
                                <StatItem label="Max Drawdown" value="7.2%" />
                                <StatItem label="Winning Months" value={`${stats?.winningMonths || 11}/${stats?.totalMonths || 12}`} />
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

            {/* Audit Section */}
            <section className="py-20 bg-slate-950">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-gold/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none rotate-12">
                            <TrendingUp className="h-48 w-48 text-gold" />
                        </div>
                        <div className="max-w-3xl relative z-10">
                            <div className="inline-flex items-center gap-2 text-gold text-xs font-black uppercase tracking-[0.2em] mb-6">
                                <div className="w-8 h-[1px] bg-gold" />
                                Recent Audit Summary
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black mb-6">2025 Institutional <span className="text-gold">Audit Results.</span></h2>
                            <p className="text-slate-400 text-lg mb-10">
                                Our latest audit across 15+ high-net-worth portfolios shows consistent alpha generation across all major pairs, verified by institutional hisab records.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                <div>
                                    <div className="text-3xl font-black text-white">${Math.floor((stats?.totalInvestment || 111000) / 1000)}k+</div>
                                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Audited Capital</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-emerald-500">
                                        {stats?.totalNetProfit && stats.totalNetProfit >= 0 ? "+" : ""}${Math.abs(Math.floor(stats?.totalNetProfit / 12 || 6589)).toLocaleString()}
                                    </div>
                                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Avg Net Profit</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-white">{avgRoi}%</div>
                                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Avg. Monthly ROI</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-gold">2.8x</div>
                                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Sharpe Ratio</div>
                                </div>
                            </div>
                        </div>
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
