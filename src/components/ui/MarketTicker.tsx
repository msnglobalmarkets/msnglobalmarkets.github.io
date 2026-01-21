"use client";

import React from "react";
import { MoveUp, MoveDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const MARKET_DATA = [
    { symbol: "EUR/USD", price: "1.0845", change: "+0.12%", up: true },
    { symbol: "GBP/USD", price: "1.2630", change: "-0.05%", up: false },
    { symbol: "XAU/USD", price: "2,035.40", change: "+0.85%", up: true },
    { symbol: "BTC/USD", price: "64,230.00", change: "+2.4%", up: true },
    { symbol: "US30", price: "38,750.50", change: "+0.30%", up: true },
    { symbol: "NDX100", price: "17,980.20", change: "-0.15%", up: false },
    { symbol: "USD/JPY", price: "150.20", change: "+0.01%", up: true },
    { symbol: "ETH/USD", price: "3,450.00", change: "+1.2%", up: true },
    { symbol: "AUD/USD", price: "0.6540", change: "-0.22%", up: false },
    { symbol: "WTI Crude", price: "78.40", change: "+0.50%", up: true },
];

export function MarketTicker() {
    return (
        <div className="w-full bg-slate-900 border-b border-white/5 overflow-hidden py-2 select-none relative z-50">
            <div className="flex animate-marquee whitespace-nowrap gap-8 items-center">
                {[...MARKET_DATA, ...MARKET_DATA, ...MARKET_DATA].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-mono font-medium">
                        <span className="text-slate-400">{item.symbol}</span>
                        <span className={item.up ? "text-emerald-400" : "text-rose-400"}>
                            {item.price}
                        </span>
                        <span className={cn(
                            "flex items-center text-[10px]",
                            item.up ? "text-emerald-500" : "text-rose-500"
                        )}>
                            {item.up ? <MoveUp className="h-2 w-2 mr-0.5" /> : <MoveDown className="h-2 w-2 mr-0.5" />}
                            {item.change}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
