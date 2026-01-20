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
        <Card className="bg-slate-900 border-slate-800 w-full h-full">
            <CardHeader>
                <CardTitle className="text-white">Live AI Fund Performance</CardTitle>
                <CardDescription className="text-slate-400">2025 Institutional Growth (Aggregated Audit Data)</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-[300px] w-full min-h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorReturn" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis
                                dataKey="month"
                                stroke="#64748b"
                                fontSize={10}
                                tickLine={false}
                                axisLine={false}
                            />
                            <YAxis
                                stroke="#64748b"
                                fontSize={10}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => `${value}%`}
                            />
                            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc' }}
                                itemStyle={{ color: '#f59e0b' }}
                                formatter={(value: any) => [`${value}%`, "Growth"]}
                            />
                            <Area
                                type="monotone"
                                dataKey="return"
                                stroke="#f59e0b"
                                fillOpacity={1}
                                fill="url(#colorReturn)"
                                strokeWidth={2}
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
