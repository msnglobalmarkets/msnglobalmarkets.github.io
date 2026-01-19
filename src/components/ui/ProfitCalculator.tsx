"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export function ProfitCalculator() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-bold text-slate-300 uppercase tracking-widest">Initial Investment</label>
                        <span className="text-2xl font-black text-white">${amount.toLocaleString()}</span>
                    </div>
                    <Slider
                        value={[amount]}
                        onValueChange={(v: number[]) => setAmount(v[0])}
                        max={100000}
                        step={1000}
                        className="py-4"
                    />
                </div>

                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-bold text-slate-300 uppercase tracking-widest">Duration (Months)</label>
                        <span className="text-2xl font-black text-white">{months}</span>
                    </div>
                    <Slider
                        value={[months]}
                        onValueChange={(v: number[]) => setMonths(v[0])}
                        max={36}
                        min={1}
                        step={1}
                        className="py-4"
                    />
                </div>

                <div className="space-y-4">
                    <label className="text-sm font-bold text-slate-300 uppercase tracking-widest block mb-4">Select AI Strategy</label>
                    <div className="grid grid-cols-2 gap-3">
                        {Object.keys(rates).map((s) => (
                            <Button
                                key={s}
                                variant={strategy === s ? "default" : "outline"}
                                className={strategy === s ? "bg-gold text-slate-950" : "border-white/10"}
                                onClick={() => setStrategy(s)}
                            >
                                {s}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-slate-950/50 rounded-2xl p-8 border border-white/5 flex flex-col justify-center space-y-6">
                <div>
                    <div className="text-slate-500 text-xs uppercase font-bold tracking-widest mb-2">Estimated Profit</div>
                    <div className="text-5xl font-black text-emerald-500 tracking-tighter">
                        +${Math.round(profit).toLocaleString()}
                    </div>
                </div>
                <div>
                    <div className="text-slate-500 text-xs uppercase font-bold tracking-widest mb-2">Total Future Value</div>
                    <div className="text-3xl font-black text-white tracking-tighter">
                        ${Math.round(estimatedTotal).toLocaleString()}
                    </div>
                </div>
                <div className="pt-6 border-t border-white/5">
                    <p className="text-[10px] text-slate-600 italic">
                        *Estimates based on compound interest at historical average monthly returns. All investments carry risk, and past performance does not guarantee future results.
                    </p>
                </div>
            </div>
        </div>
    );
}
