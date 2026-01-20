import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { Users, Building2, MapPin, Award, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="py-20 lg:py-32 bg-slate-900/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <h1 className="text-4xl md:text-6xl font-black mb-6">Our <span className="text-gold">Solutions.</span></h1>
                        <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
                            Institutional-grade technology, precision execution, and a multi-broker ecosystem.
                            We provide the bridge between elite algorithmic trading and the private investor.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
                        <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src="/hero-bg.png"
                                alt="Dubai Office"
                                fill
                                className="object-cover transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gold/5 mix-blend-overlay" />
                        </div>
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold">18 Years of Algorithmic Mastery.</h2>
                            <p className="text-slate-400">
                                Based in Dubai's financial hub, MSN Global Markets specializes in "Agentic AI" fund management—where algorithms act as autonomous agents, adapting to liquidity shifts and geopolitical events in real-time.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <AboutStat icon={<Building2 className="text-gold" />} val="Dubai, UAE" label="HQ Location" />
                                <AboutStat icon={<Users className="text-gold" />} val="2500+" label="Global Clients" />
                                <AboutStat icon={<MapPin className="text-gold" />} label="Licensed IB" val="Multi-Regulated" />
                                <AboutStat icon={<Award className="text-gold" />} label="Est. 2006" val="18+ Years" />
                            </div>
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                        <ServiceCard
                            title="AI Fund Management"
                            description="Fully automated, supervised portfolios ranging from conservative capital preservation to high-yield aggressive growth."
                            items={["24/7 Monitoring", "Zero Platform Lock-in", "Daily Audit Logs"]}
                        />
                        <ServiceCard
                            title="Bespoke EA Dev"
                            description="Need a custom strategy? Our quant team builds proprietary Expert Advisors tailored to your specific trading logic."
                            items={["MQL4/5 Experts", "API Connectivity", "Stress Testing"]}
                        />
                        <ServiceCard
                            title="Institutional Consulting"
                            description="Strategic advice for high-net-worth individuals and family offices on modernizing their wealth management."
                            items={["Risk Audit", "Ecosystem Setup", "Tax Optimization"]}
                        />
                    </div>

                    {/* Portfolio Balance Section */}
                    <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 md:p-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl font-black mb-6">How we Maintain <span className="text-gold">Balance.</span></h2>
                                <p className="text-slate-500 mb-8 font-medium">
                                    Our philosophy is not about "beating the market" every day, but about consistent, non-correlated returns.
                                </p>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                                            <div className="h-2 w-2 rounded-full bg-gold" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">Dynamic Asset Allocation</h4>
                                            <p className="text-sm text-slate-500">We balance exposure across FX, Commodities, and Indices to ensure no single market event can compromise the portfolio.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                                            <div className="h-2 w-2 rounded-full bg-blue-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">Multi-Node Redundancy</h4>
                                            <p className="text-sm text-slate-500">Our algorithms run on geographically dispersed servers in London and New York to ensure zero execution downtime.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-slate-950 p-8 rounded-2xl border border-white/5 relative group">
                                <div className="absolute -inset-1 bg-gold/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative">
                                    <div className="text-xs font-bold text-gold uppercase tracking-[0.3em] mb-4">Risk Shield Active</div>
                                    <div className="h-4 w-full bg-slate-900 rounded-full mb-6 relative overflow-hidden">
                                        <div className="absolute top-0 left-0 h-full bg-gold w-3/4 animate-pulse" />
                                    </div>
                                    <p className="text-[10px] text-slate-500 font-medium">90% Historical Success across 15+ high-net-worth portfolios during the 2024 cycles.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

function ServiceCard({ title, description, items }: any) {
    return (
        <div className="bg-slate-900/50 border border-white/5 p-8 rounded-3xl hover:border-gold/20 transition-all group">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-gold rounded-full" /> {title}
            </h3>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">{description}</p>
            <ul className="space-y-3">
                {items.map((item: string) => (
                    <li key={item} className="flex items-center gap-2 text-xs font-bold text-slate-300">
                        <CheckCircle2 className="h-3 w-3 text-gold" /> {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function AboutStat({ icon, label, val }: any) {
    return (
        <div className="space-y-1">
            <div className="flex items-center gap-2 text-slate-500 mb-1">
                {icon}
                <span className="text-[10px] uppercase tracking-widest font-bold">{label}</span>
            </div>
            <div className="text-xl font-bold text-white">{val}</div>
        </div>
    );
}
