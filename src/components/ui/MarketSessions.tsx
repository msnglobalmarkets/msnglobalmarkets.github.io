"use client";

import * as React from "react";
import { Clock } from "lucide-react";

export function MarketSessions() {
    const [time, setTime] = React.useState(new Date());

    React.useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const sessions = [
        { name: "Sydney", open: 22, close: 7, utc: 11 },
        { name: "Tokyo", open: 0, close: 9, utc: 9 },
        { name: "London", open: 8, close: 17, utc: 0 },
        { name: "New York", open: 13, close: 22, utc: -5 }
    ];

    const getStatus = (open: number, close: number, utcOffset: number) => {
        const hour = (time.getUTCHours() + utcOffset + 24) % 24;
        if (open < close) {
            return hour >= open && hour < close;
        } else {
            // Over midnight
            return hour >= open || hour < close;
        }
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sessions.map((s) => {
                const isOpen = getStatus(s.open, s.close, s.utc);
                return (
                    <div key={s.name} className={`p-6 rounded-2xl border transition-all ${isOpen ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-slate-950 border-white/5 opacity-50'}`}>
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-sm font-bold uppercase tracking-widest text-slate-400">{s.name}</span>
                            <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-slate-700'}`} />
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                            <Clock className={`h-4 w-4 ${isOpen ? 'text-emerald-500' : 'text-slate-600'}`} />
                            <span className="text-xl font-black text-white">
                                {((time.getUTCHours() + s.utc + 24) % 24).toString().padStart(2, '0')}:{time.getUTCMinutes().toString().padStart(2, '0')}
                            </span>
                        </div>
                        <div className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
                            {isOpen ? "Active Session" : "Market Closed"}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
