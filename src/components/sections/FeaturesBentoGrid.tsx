import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Network, ShieldCheck, Zap, BrainCircuit, Globe2 } from "lucide-react";

export function FeaturesBentoGrid() {
    return (
        <section className="py-20 bg-slate-950">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black text-white">
                        Institutional Advantage for <span className="text-gold">Every Investor</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto font-medium">
                        Leveraging the same technology stacks used by tier-1 hedge funds and proprietary trading desks in Dubai and London.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">

                    {/* Card 1: Agentic AI Logic */}
                    <Card className="md:col-span-2 bg-slate-900 border-white/5 hover:border-gold/20 transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <BrainCircuit className="h-32 w-32 text-gold" />
                        </div>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-white text-2xl font-black">
                                <BrainCircuit className="h-7 w-7 text-gold" />
                                Agentic AI Micro-Analysis
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-400 text-lg mb-8 max-w-xl">
                                Our "Agentic" models don't just follow static rules. They interpret liquidity voids, order flow imbalances, and macroeconomic sentiment shifts to adjust strategies in milliseconds.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="p-3 bg-slate-950 rounded-xl border border-white/5">
                                    <div className="text-gold font-bold text-xs mb-1">LATENCY</div>
                                    <div className="text-white text-sm font-black">0.8ms</div>
                                </div>
                                <div className="p-3 bg-slate-950 rounded-xl border border-white/5">
                                    <div className="text-gold font-bold text-xs mb-1">UPTIME</div>
                                    <div className="text-white text-sm font-black">99.99%</div>
                                </div>
                                <div className="p-3 bg-slate-950 rounded-xl border border-white/5">
                                    <div className="text-gold font-bold text-xs mb-1">SIGNALS</div>
                                    <div className="text-white text-sm font-black">500k/day</div>
                                </div>
                                <div className="p-3 bg-slate-950 rounded-xl border border-white/5">
                                    <div className="text-gold font-bold text-xs mb-1">AGENTS</div>
                                    <div className="text-white text-sm font-black">Multi-Node</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Card 2: Risk Management (Tall) */}
                    <Card className="md:row-span-2 bg-slate-900 border-white/5 hover:border-gold/20 transition-all duration-500 flex flex-col">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-white text-2xl font-black">
                                <ShieldCheck className="h-7 w-7 text-gold" />
                                Institutional Protection
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col justify-between">
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                                    <div>
                                        <div className="text-white font-bold text-sm">Kill-Switch Protocol</div>
                                        <div className="text-slate-500 text-xs">Instant liquidation if drawdown hits 5% on any single asset pair.</div>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                                    <div>
                                        <div className="text-white font-bold text-sm">Zero Platform Lock-in</div>
                                        <div className="text-slate-500 text-xs">Funds remain in your personal MT4/MT5 account with regulated brokers.</div>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                                    <div>
                                        <div className="text-white font-bold text-sm">Dubai HQ Compliance</div>
                                        <div className="text-slate-500 text-xs">Operating under strict UAE technology and financial services standards.</div>
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-12 p-6 bg-gold/5 rounded-2xl border border-gold/10 flex items-center justify-center">
                                <ShieldCheck className="h-24 w-24 text-gold/20" />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Card 3: HFT Infrastructure */}
                    <Card className="bg-slate-900 border-white/5 hover:border-gold/20 transition-all duration-500">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-white text-xl font-black">
                                <Zap className="h-5 w-5 text-gold" />
                                HFT Infrastructure
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-400 text-sm mb-6">
                                Co-located servers in Equinix LD4 (London) and NY4 (New York) ensure ultra-low slippage and best price execution.
                            </p>
                            <div className="flex items-center gap-2">
                                <div className="h-1 w-full bg-slate-950 rounded-full overflow-hidden">
                                    <div className="h-full bg-gold w-3/4 shadow-[0_0_10px_#D4AF37]" />
                                </div>
                                <span className="text-[10px] text-white font-black italic">ULTRA</span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Card 4: Global Sentiment Monitoring */}
                    <Card className="bg-slate-900 border-white/5 hover:border-gold/20 transition-all duration-500">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-white text-xl font-black">
                                <Globe2 className="h-5 w-5 text-gold" />
                                Sentiment Analysis
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-400 text-sm mb-6">
                                Proprietary NLP models scanning 10,000+ data points including FOMC speeches, news wires, and social signals.
                            </p>
                            <div className="flex gap-2">
                                <span className="text-[10px] bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded font-bold">Bullish Bias</span>
                                <span className="text-[10px] bg-white/5 text-slate-500 px-2 py-0.5 rounded font-bold">Gold Focus</span>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </section>
    );
}
