import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { Users, Building2, MapPin, Award } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Navbar />

            <section className="py-20 lg:py-32 bg-slate-900/50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <h1 className="text-4xl md:text-6xl font-black mb-6">Our <span className="text-gold">Heritage.</span></h1>
                        <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
                            MSN Global Markets was founded on a simple principle: that institutional trading technology should be accessible to everyone.
                            Based in Dubai, we lead the region in AI-driven portfolio management.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src="/hero-bg.png"
                                alt="Dubai Office"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
                        </div>
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold">18 Years in the Making.</h2>
                            <p className="text-slate-400">
                                Our team comprises veteran quant analysts, former hedge fund brokers, and AI engineers with decades of combined experience in high-frequency trading.
                                We have survived every major market correction since 2006 by evolving our algorithms every single day.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <AboutStat icon={<Building2 className="text-gold" />} val="Dubai, UAE" label="HQ Location" />
                                <AboutStat icon={<Users className="text-gold" />} val="2500+" label="Global Clients" />
                                <AboutStat icon={<MapPin className="text-gold" />} label="Licensed IB" val="Multi-Regulated" />
                                <AboutStat icon={<Award className="text-gold" />} label="Est. 2006" val="18+ Years" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
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
