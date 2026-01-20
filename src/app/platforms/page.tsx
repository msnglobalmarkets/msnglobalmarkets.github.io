import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Smartphone, Monitor, Globe, Server, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarketSessions } from "@/components/ui/MarketSessions";
import Link from "next/link";

export default function PlatformsPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Navbar />

            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h1 className="text-4xl md:text-5xl font-black mb-6">Trade on <span className="text-gold">Any Platform</span></h1>
                        <p className="text-slate-400 text-lg">
                            Our AI core is ecosystem-agnostic. Whether you prefer the industry standard MetaTrader or modern proprietary web terminals, we have you covered.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PlatformCard
                            icon={<Monitor className="h-10 w-10 text-gold" />}
                            title="Desktop"
                            platforms={["MT4 / MT5", "cTrader Desktop", "AvaTrade Professional"]}
                        />
                        <PlatformCard
                            icon={<Smartphone className="h-10 w-10 text-blue-500" />}
                            title="Mobile"
                            platforms={["MT4 Mobile", "Daman Securities Terminal App", "Mex Atlantic App"]}
                        />
                        <PlatformCard
                            icon={<Globe className="h-10 w-10 text-emerald-500" />}
                            title="Web Terminal"
                            platforms={["Standard WebTrader", "cTrader Web", "Proprietary APIs"]}
                        />
                    </div>

                    {/* Infrastructure Section */}
                    <div className="mt-24 p-12 rounded-3xl bg-slate-900 border border-white/5 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Equinix LD4 / NY4 Infrastructure</h2>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                For professional clients and EA users, we recommend VPS hosting in Equinix LD4 (London) or NY4 (New York) to achieve ultra-low latency execution (&lt;1ms).
                                Our signals are broadcast directly from these tier-1 data centers.
                            </p>
                            <Link href="/contact?subject=VPS Setup">
                                <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold hover:text-slate-950">
                                    Request VPS Setup
                                </Button>
                            </Link>
                        </div>
                        <div className="bg-slate-950 p-8 rounded-2xl border border-white/10 flex flex-col gap-4">
                            <InfrastructureRow label="Average Latency" val="0.28 ms" />
                            <InfrastructureRow label="Server Uptime" val="99.99%" />
                            <InfrastructureRow label="Data Center" val="Equinix LD4" />
                            <InfrastructureRow label="Execution Mode" val="Market Execution" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Trading Sessions */}
            <section className="py-20 bg-slate-900 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Global <span className="text-gold">Market Sessions</span></h2>
                        <p className="text-slate-400">Our AI strategies adapt to the specific liquidity characteristics of each global session.</p>
                    </div>
                    <MarketSessions />
                </div>
            </section>

            <Footer />
        </div>
    );
}

function PlatformCard({ icon, title, platforms }: any) {
    return (
        <div className="bg-slate-900 border border-white/10 p-8 rounded-3xl hover:border-gold/30 transition-all">
            <div className="mb-6">{icon}</div>
            <h3 className="text-2xl font-bold mb-6">{title}</h3>
            <ul className="space-y-4">
                {platforms.map((p: string, i: number) => (
                    <li key={i} className="flex items-center gap-3 text-slate-400">
                        <CheckCircle2 className="h-4 w-4 text-gold" />
                        {p}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function InfrastructureRow({ label, val }: any) {
    return (
        <div className="flex justify-between items-center py-3 border-b border-white/5 last:border-0">
            <span className="text-xs uppercase font-bold text-slate-500 tracking-widest">{label}</span>
            <span className="text-sm font-bold text-white">{val}</span>
        </div>
    );
}
