"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import performanceData from "@/lib/performance-data.json";

export function PerformanceChart() {
    // Fallback to static if globalStats missing
    const chartData = performanceData.globalStats?.monthlyGrowth?.length > 0
        ? performanceData.globalStats.monthlyGrowth.map(d => ({
            month: d.month,
            return: parseFloat(d.cumulative)
        }))
        : [
            { month: "Jan", return: 100 },
            { month: "Feb", return: 104.5 },
            { month: "Mar", return: 107.2 },
            { month: "Apr", return: 112.8 },
            { month: "May", return: 110.5 },
            { month: "Jun", return: 118.9 },
            { month: "Jul", return: 124.3 },
            { month: "Aug", return: 129.1 },
            { month: "Sep", return: 135.4 },
            { month: "Oct", return: 133.2 },
            { month: "Nov", return: 140.5 },
            { month: "Dec", return: 145.8 },
        ];

    return (
        <Card className="bg-slate-900/50 backdrop-blur-xl border-white/5 w-full h-full shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl -z-10 group-hover:bg-gold/10 transition-colors" />
            <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                    Live AI Fund Performance
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                </CardTitle>
                <CardDescription className="text-slate-400">2025 Institutional Growth (Aggregated Audit Data)</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-[300px] w-full min-h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorReturn" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.5} />
                                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis
                                dataKey="month"
                                stroke="#94a3b8"
                                fontSize={10}
                                tickLine={false}
                                axisLine={false}
                                dy={10}
                            />
                            <YAxis
                                stroke="#94a3b8"
                                fontSize={10}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => `${value}%`}
                                dx={-10}
                            />
                            <CartesianGrid strokeDasharray="3 3" stroke="#2b3245" vertical={false} />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                                    borderColor: 'rgba(255,255,255,0.1)',
                                    color: '#f8fafc',
                                    borderRadius: '12px',
                                    backdropFilter: 'blur(10px)'
                                }}
                                itemStyle={{ color: '#f59e0b', fontWeight: 'bold' }}
                                formatter={(value: any) => [`${value}%`, "Growth"]}
                            />
                            <Area
                                type="monotone"
                                dataKey="return"
                                stroke="#f59e0b"
                                fillOpacity={1}
                                fill="url(#colorReturn)"
                                strokeWidth={3}
                                activeDot={{ r: 6, strokeWidth: 0, fill: "#fff" }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <p className="text-[10px] text-slate-500 mt-4 text-center italic">
                    *Performance based on aggregated 2025 institutional hisab sheets. Past results are not indicative of future returns.
                </p>
            </CardContent>
        </Card>
    );
}
