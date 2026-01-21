"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface ProfitCalculatorProps {
    className?: string; // Allow passing standard className
    compact?: boolean;
}

export function ProfitCalculator({ className, compact = false }: ProfitCalculatorProps) {
    const [amount, setAmount] = React.useState(10000);
    const [months, setMonths] = React.useState(12);
    const [strategy, setStrategy] = React.useState("Balanced");

    const rates: Record<string, number> = {
        "Conservative": 0.04,
        "Balanced": 0.10,
        "Aggressive": 0.20,
        "Hedge/Arb": 0.05
    };

    const monthlyRate = rates[strategy];
    const estimatedTotal = amount * Math.pow(1 + monthlyRate, months);
    const profit = estimatedTotal - amount;

    return (
        <div className={cn(
            "grid gap-8 transition-all",
            compact ? "grid-cols-1 gap-6" : "grid-cols-1 lg:grid-cols-2 gap-12",
            className
        )}>
            <div className="space-y-8">
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-bold text-slate-300 uppercase tracking-widest">Initial Investment</label>
                        <span className="text-xl md:text-2xl font-black text-white">${amount.toLocaleString()}</span>
                    </div>
                    <Slider
                        value={[amount]}
                        onValueChange={(v: number[]) => setAmount(v[0])}
                        max={100000}
                        step={1000}
                        className="py-4 cursor-pointer"
                    />
                </div>

                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-bold text-slate-300 uppercase tracking-widest">Duration (Months)</label>
                        <span className="text-xl md:text-2xl font-black text-white">{months}</span>
                    </div>
                    <Slider
                        value={[months]}
                        onValueChange={(v: number[]) => setMonths(v[0])}
                        max={36}
                        min={1}
                        step={1}
                        className="py-4 cursor-pointer"
                    />
                </div>

                <div className="space-y-4">
                    <label className="text-sm font-bold text-slate-300 uppercase tracking-widest block mb-4">Select AI Strategy</label>
                    <div className="grid grid-cols-2 gap-2">
                        {Object.keys(rates).map((s) => (
                            <Button
                                key={s}
                                variant={strategy === s ? "default" : "outline"}
                                size={compact ? "sm" : "default"}
                                className={cn(
                                    "font-bold transition-all",
                                    strategy === s
                                        ? "bg-gold text-slate-950 hover:bg-gold/90 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                                        : "border-white/10 hover:bg-white/5 text-slate-400"
                                )}
                                onClick={() => setStrategy(s)}
                            >
                                {s}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>

            <div className={cn(
                "bg-slate-950/60 rounded-2xl border border-white/5 flex flex-col justify-center space-y-6 relative overflow-hidden",
                compact ? "p-6" : "p-8"
            )}>
                {/* Inner Glow */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none" />

                <div className="relative z-10">
                    <div className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1">Estimated Net Profit</div>
                    <div className="text-4xl md:text-5xl font-black text-emerald-400 tracking-tighter drop-shadow-sm">
                        +${Math.round(profit).toLocaleString()}
                    </div>
                </div>
                <div className="relative z-10">
                    <div className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1">Total Future Value</div>
                    <div className="text-2xl md:text-3xl font-black text-white tracking-tighter">
                        ${Math.round(estimatedTotal).toLocaleString()}
                    </div>
                </div>
                <div className="pt-4 border-t border-white/5 relative z-10">
                    <p className="text-[9px] text-slate-500 leading-relaxed italic">
                        *Estimates based on compound interest at historical average monthly returns ({Math.round(monthlyRate * 100)}%). All investments carry risk.
                    </p>
                </div>
            </div>
        </div>
    );
}
