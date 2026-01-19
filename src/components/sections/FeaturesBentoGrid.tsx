import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TrendingUp, Network, ShieldCheck } from "lucide-react";

export function FeaturesBentoGrid() {
    return (
        <section className="py-20 bg-slate-950">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                    Institutional Advantage for <span className="text-gold">Every Investor</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">

                    {/* Card 1: AI Strategies (Large - Spans 2 cols) */}
                    <Card className="md:col-span-2 bg-slate-900 border-slate-800 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)] transition-all duration-300 group">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-white text-xl">
                                <TrendingUp className="h-6 w-6 text-emerald-500" />
                                AI-Powered Fund Management
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-400 mb-6">
                                Our proprietary algorithms analyze 50+ market indicators in real-time to identify high-probability trade setups before the market moves.
                            </p>
                            {/* Visual Placeholder for Abstract Line Chart */}
                            <div className="h-32 w-full bg-slate-950/50 rounded-lg relative overflow-hidden flex items-end p-4 border border-slate-800">
                                <div className="w-full h-full flex items-end justify-between gap-1">
                                    {[30, 45, 35, 60, 50, 75, 65, 90, 80, 100].map((h, i) => (
                                        <div key={i} className="w-[8%] bg-gradient-to-t from-emerald-500/20 to-emerald-500 rounded-t-sm transition-all duration-1000 group-hover:from-emerald-400/30 group-hover:to-emerald-400" style={{ height: `${h}%` }}></div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Card 4: Risk Management (Tall - Spans 1 col, 2 rows) - Moved up in DOM for responsive stacking, logic handled by grid-row/col classes if needed, but standard 3-col logic usually places this 2nd or 3rd. Let's stick to user desc 'Spans 1 col, 2 rows' */}
                    <Card className="md:row-span-2 bg-slate-900 border-slate-800 hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.15)] transition-all duration-300 flex flex-col justify-between">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-white text-xl">
                                <ShieldCheck className="h-6 w-6 text-gold" />
                                Risk Management First
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col justify-between">
                            <p className="text-slate-400 mb-6">
                                Automated stop-losses and dynamic position sizing to protect capital. We prioritize drawdown control over aggressive gains.
                            </p>
                            <div className="flex items-center justify-center p-6">
                                <ShieldCheck className="h-32 w-32 text-gold/20 animate-pulse-subtle" />
                            </div>
                        </CardContent>
                    </Card>


                    {/* Card 2: Multi-Broker Ecosystem (Square) */}
                    <Card className="bg-slate-900 border-slate-800 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)] transition-all duration-300">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-white text-xl">
                                <Network className="h-6 w-6 text-blue-500" />
                                Multi-Broker Ecosystem
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-400 mb-4">
                                Connect via Mex Atlantic, Exness, or AvaTrade.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['Mex', 'Exness', 'Ava', 'JKV'].map((broker) => (
                                    <span key={broker} className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300 border border-slate-700">{broker}</span>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Card 3: Historical Success (Square) */}
                    <Card className="bg-slate-900 border-slate-800 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.15)] transition-all duration-300">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-white text-xl">
                                90% Historical Success*
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-400 text-sm mb-4">
                                Based on 18 years of backtesting data across major pairings.
                            </p>
                            <div className="relative h-24 w-24 mx-auto">
                                <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
                                    {/* Background Circle */}
                                    <path className="text-slate-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                                    {/* Progress Circle */}
                                    <path className="text-emerald-500 drop-shadow-[0_0_4px_rgba(16,185,129,0.5)]" strokeDasharray="90, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center font-bold text-white text-xl">90%</div>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </section>
    );
}
