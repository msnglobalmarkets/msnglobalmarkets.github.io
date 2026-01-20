"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import performanceData from "@/lib/performance-data.json";
import {
    LayoutDashboard,
    TrendingUp,
    CircleDollarSign,
    ArrowUpRight,
    LogOut,
    User,
    BarChart3,
    Shield,
    Globe2,
    Calendar,
    ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Cell
} from "recharts";

const BROKER_COLORS: any = {
    ava: "#d4af37", // Gold
    jkv: "#3b82f6", // Blue
    mex: "#10b981", // Emerald
    daman: "#f97316", // Orange
};

export default function DashboardPage() {
    const [user, setUser] = useState<any>(null);
    const [selectedClient, setSelectedClient] = useState<string>("meet");
    const router = useRouter();

    useEffect(() => {
        const checkUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                router.push("/login");
            } else {
                setUser(user);
                // Map user to client if possible, default to first available
                const availableClients = Object.keys(performanceData.clients);
                if (availableClients.length > 0) {
                    // Try to find if current user matches any client
                    const userEmail = user.email?.toLowerCase() || "";
                    const match = availableClients.find(c => userEmail.includes(c));
                    if (match) {
                        setSelectedClient(match);
                    } else if (!availableClients.includes(selectedClient.trim().toLowerCase())) {
                        setSelectedClient(availableClients[0]);
                    }
                }
            }
        };
        checkUser();
    }, [router]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/login");
    };

    const clientKey = selectedClient.trim().toLowerCase();
    const clientInfo = (performanceData.clients as any)[clientKey];

    if (!user || !clientInfo) return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
            <div className="animate-pulse flex flex-col items-center gap-4">
                <BarChart3 className="h-12 w-12 text-gold" />
                <p className="font-bold">Syncing Portfolio Data...</p>
            </div>
        </div>
    );

    // Prepare chart data: array of { month: 'FEB', ava: 500, jkv: 300, ... }
    const chartData = Object.entries(clientInfo.monthlyData).map(([month, brokers]: [string, any]) => ({
        month,
        ...brokers
    }));

    const totalProfit = chartData.reduce((acc, month) => {
        const monthTotal = Object.entries(month)
            .filter(([key]) => key !== 'month')
            .reduce((sum, [_, val]) => sum + (val as number), 0);
        return acc + monthTotal;
    }, 0);

    const winningMonths = chartData.filter(month => {
        const monthTotal = Object.entries(month)
            .filter(([key]) => key !== 'month')
            .reduce((sum, [_, val]) => sum + (val as number), 0);
        return monthTotal > 0;
    }).length;

    const availableBrokers = Array.from(new Set(chartData.flatMap(d => Object.keys(d).filter(k => k !== 'month'))));

    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col">
            <Navbar />

            <main className="flex-1 container mx-auto px-4 md:px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <div>
                        <h1 className="text-3xl font-black flex items-center gap-3">
                            <LayoutDashboard className="h-8 w-8 text-gold" />
                            Client <span className="text-gold">Portfolio.</span>
                        </h1>
                        <p className="text-slate-500 text-sm mt-1">Institutional Audit - 2025 Cycle</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="bg-slate-900 border border-white/10 rounded-xl p-1 flex items-center">
                            <User className="h-4 w-4 text-slate-500 ml-3" />
                            <select
                                value={selectedClient}
                                onChange={(e) => setSelectedClient(e.target.value)}
                                className="bg-transparent border-none text-sm text-slate-300 outline-none px-4 py-2 cursor-pointer uppercase font-bold"
                            >
                                {Object.keys(performanceData.clients).map((c: any) => (
                                    <option key={c} value={c} className="bg-slate-900">{c.toUpperCase()}</option>
                                ))}
                            </select>
                        </div>
                        <Button variant="outline" onClick={handleLogout} className="border-white/10 text-white hover:bg-white/5 gap-2">
                            <LogOut className="h-4 w-4" /> Sign Out
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <StatCard
                        title="Active Investment"
                        value={`$${clientInfo.totalInvestment?.toLocaleString() || 0}`}
                        icon={<CircleDollarSign className="text-blue-500" />}
                    />
                    <StatCard
                        title="Total Net Profit"
                        value={`$${totalProfit.toLocaleString()}`}
                        trend={`+${clientInfo.totalInvestment ? ((totalProfit / clientInfo.totalInvestment) * 100).toFixed(1) : 0}%`}
                        icon={<TrendingUp className="text-emerald-500" />}
                    />
                    <StatCard
                        title="Consistency"
                        value={`${winningMonths}/${chartData.length}`}
                        sub="Winning Months"
                        icon={<Shield className="text-gold" />}
                    />
                    <StatCard
                        title="Ecosystem"
                        value={availableBrokers.join(", ").toUpperCase() || "N/A"}
                        icon={<Globe2 className="text-blue-400" />}
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Month-on-Month Stacked Chart */}
                    <Card className="lg:col-span-2 bg-slate-900 border-white/5 p-6">
                        <CardHeader className="px-0 pt-0 flex flex-row items-center justify-between">
                            <div>
                                <CardTitle className="text-xl font-black">Broker-Wise Profits</CardTitle>
                                <p className="text-xs text-slate-500">2025 Performance Cycle Breakdown</p>
                            </div>
                            <div className="flex gap-4">
                                {availableBrokers.map(b => (
                                    <div key={b} className="flex items-center gap-1.5">
                                        <div className="h-2 w-2 rounded-full" style={{ backgroundColor: BROKER_COLORS[b] || '#fff' }} />
                                        <span className="text-[10px] uppercase font-bold text-slate-500">{b}</span>
                                    </div>
                                ))}
                            </div>
                        </CardHeader>
                        <CardContent className="px-0 pt-6">
                            <div className="h-[400px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={chartData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                                        <XAxis
                                            dataKey="month"
                                            stroke="#64748b"
                                            fontSize={10}
                                            tickLine={false}
                                            axisLine={false}
                                            dy={10}
                                        />
                                        <YAxis
                                            stroke="#64748b"
                                            fontSize={10}
                                            tickLine={false}
                                            axisLine={false}
                                            tickFormatter={(val) => `$${val}`}
                                        />
                                        <Tooltip
                                            cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                                            contentStyle={{ backgroundColor: '#020617', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                                            itemStyle={{ fontSize: '10px', fontWeight: 'bold' }}
                                        />
                                        {availableBrokers.map(b => (
                                            <Bar
                                                key={b}
                                                dataKey={b}
                                                stackId="a"
                                                fill={BROKER_COLORS[b] || '#fff'}
                                                radius={[0, 0, 0, 0]}
                                                barSize={32}
                                            />
                                        ))}
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Snapshot */}
                    <div className="space-y-6">
                        <Card className="bg-slate-900 border-white/5 overflow-hidden">
                            <CardHeader>
                                <CardTitle className="text-sm font-bold flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-gold" /> Last 3 Months
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                {chartData.slice(-3).reverse().map((m, idx) => {
                                    const mTotal = Object.entries(m)
                                        .filter(([k]) => k !== 'month')
                                        .reduce((s, [_, v]) => s + (v as number), 0);
                                    return (
                                        <div key={idx} className="flex items-center justify-between p-4 border-b border-white/5 hover:bg-white/5 transition-colors">
                                            <div>
                                                <div className="text-xs font-black text-white">{m.month} 2025</div>
                                                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Monthly Hisab</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm font-black text-emerald-500">
                                                    {mTotal >= 0 ? "+" : ""}${mTotal.toLocaleString()}
                                                </div>
                                                <div className="text-[9px] text-slate-500 font-bold uppercase tracking-tighter">Net Change</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </CardContent>
                        </Card>

                        <div className="bg-gradient-to-br from-gold to-amber-600 p-8 rounded-[2rem] text-slate-950 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-700">
                                <Shield className="h-24 w-24" />
                            </div>
                            <h4 className="text-xs uppercase font-black tracking-widest mb-6 flex items-center gap-2">
                                <Shield className="h-4 w-4" /> Verified Data
                            </h4>
                            <div className="text-3xl font-black mb-2 tracking-tighter">MSN-SAFE-V3</div>
                            <p className="text-[10px] font-bold opacity-80 leading-relaxed mb-6">
                                End-to-end encrypted with zero platform lock-in. Your capital remains under your direct control at all times.
                            </p>
                            <Button className="w-full bg-slate-950 text-white hover:bg-slate-900 border-none rounded-xl font-bold h-12">
                                Export PDF Audit <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

function StatCard({ title, value, trend, sub, icon }: any) {
    return (
        <Card className="bg-slate-900 border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                {icon}
            </div>
            <CardHeader className="pb-2">
                <CardTitle className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-black text-white">{value}</div>
                {trend ? (
                    <div className="text-[10px] text-emerald-500 font-bold mt-1 flex items-center gap-1">
                        <ArrowUpRight className="h-3 w-3" /> {trend} All-time
                    </div>
                ) : (
                    <div className="text-[10px] text-slate-400 font-bold mt-1 uppercase tracking-widest">{sub}</div>
                )}
            </CardContent>
        </Card>
    );
}
