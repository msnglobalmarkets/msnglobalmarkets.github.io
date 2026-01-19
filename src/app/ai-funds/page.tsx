import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BrainCircuit, Timer, Shield, Zap, BarChart, Settings2 } from "lucide-react";

export default function AIFundsPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.05),transparent)] pointer-events-none" />
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                        AI-Powered <span className="text-gold">Fund Management</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl">
                        Institutional-grade automated portfolios tailored to your risk appetite.
                        No platform lock-in. Full transparency.
                    </p>
                </div>
            </section>

            {/* Strategies Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <StrategyCard
                            title="Aggressive Growth"
                            description="High-frequency scalping and momentum strategies targeting superior returns."
                            risk="High"
                            target="15-25% Monthly"
                            icon={<Zap className="h-6 w-6 text-gold" />}
                        />
                        <StrategyCard
                            title="Balanced Portfolio"
                            description="Medium-term trend following combined with automated hedging for stability."
                            risk="Medium"
                            target="8-12% Monthly"
                            icon={<BrainCircuit className="h-6 w-6 text-blue-500" />}
                        />
                        <StrategyCard
                            title="Conservative Wealth"
                            description="Focus on capital preservation using indices and low-volatility commodities."
                            risk="Low"
                            target="3-5% Monthly"
                            icon={<Shield className="h-6 w-6 text-emerald-500" />}
                        />
                    </div>
                </div>
            </section>

            {/* Why AI Section */}
            <section className="py-20 bg-slate-900/50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Why AI Fund Management?</h2>
                        <p className="text-slate-400">Traditional funds are limited by human emotion and 40-hour work weeks. Our AI works 24/7 with pixel-perfect precision.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <BenefitItem
                            title="Zero Emotional Friction"
                            desc="Algorithms don't 'hope' or 'panic'. Every trade is executed based on mathematical probability and historical patterns."
                            icon={<Timer />}
                        />
                        <BenefitItem
                            title="Instant Execution"
                            desc="React to global market news in milliseconds, faster than any human operator or retail trader could possibly think."
                            icon={<Zap />}
                        />
                        <BenefitItem
                            title="Dynamic Position Sizing"
                            desc="Risk is managed trade-by-trade, adjusting sizes automatically based on current account equity and market volatility."
                            icon={<Settings2 />}
                        />
                        <BenefitItem
                            title="Multivariate Analysis"
                            desc="Analyzing 50+ indicators, sentiment data, and volume flow simultaneously across 20+ pairs."
                            icon={<BarChart />}
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

function StrategyCard({ title, description, risk, target, icon }: any) {
    return (
        <Card className="bg-slate-900 border-white/10 hover:border-gold/30 transition-all group shadow-2xl">
            <CardHeader>
                <div className="mb-4">{icon}</div>
                <CardTitle className="text-white text-2xl">{title}</CardTitle>
                <CardDescription className="text-slate-500">{description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded bg-slate-950/50 border border-white/5">
                    <span className="text-xs uppercase font-bold text-slate-500">Risk Profile</span>
                    <span className={cn(
                        "text-xs px-2 py-1 rounded font-bold",
                        risk === "High" ? "bg-red-500/10 text-red-500" :
                            risk === "Medium" ? "bg-blue-500/10 text-blue-500" : "bg-emerald-500/10 text-emerald-500"
                    )}>{risk}</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded bg-slate-950/50 border border-white/5">
                    <span className="text-xs uppercase font-bold text-slate-500">Target Returns*</span>
                    <span className="text-xs text-gold font-bold">{target}</span>
                </div>
                <Button className="w-full bg-slate-800 hover:bg-gold hover:text-slate-950 group-hover:bg-gold group-hover:text-slate-950 transition-all font-bold">
                    Connect Account
                </Button>
            </CardContent>
        </Card>
    );
}

function BenefitItem({ title, desc, icon }: any) {
    return (
        <div className="flex gap-6">
            <div className="w-12 h-12 shrink-0 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                {icon}
            </div>
            <div>
                <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
            </div>
        </div>
    );
}

import { cn } from "@/lib/utils";
