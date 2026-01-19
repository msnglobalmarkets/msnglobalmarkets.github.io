import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, Globe, Award } from "lucide-react";

export function Hero() {
    return (
        <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden bg-slate-950">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 opacity-80" />
                {/* Abstract Grid/Map Overlay */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                {/* Placeholder for SVG pattern - in a real app, generate grid.svg or use CSS patterns */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">

                    {/* Headline */}
                    <div className="space-y-4 animate-fade-in-up">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
                            The Future of Wealth <br className="hidden md:inline" /> is Algorithmic.
                        </h1>
                        <p className="mx-auto max-w-[700px] text-slate-400 text-lg md:text-xl">
                            Access institutional-grade AI trading strategies with 18+ years of proven track record.
                            Trade via regulated brokers with zero platform lock-in.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <Link href="/performance">
                            <Button size="lg" className="w-full sm:w-auto bg-gold text-slate-950 hover:bg-amber-400 font-bold px-8 h-12 text-md">
                                View AI Performance
                            </Button>
                        </Link>
                        <Link href="/partners">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white px-8 h-12 text-md">
                                Compare Brokers
                            </Button>
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div className="pt-8 flex flex-wrap justify-center gap-6 md:gap-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <div className="flex items-center gap-2 text-slate-500 opacity-70">
                            <Globe className="h-5 w-5" />
                            <span className="text-sm font-medium">Regulated Partners</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 opacity-70">
                            <Lock className="h-5 w-5" />
                            <span className="text-sm font-medium">SSL Secure</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 opacity-70">
                            <ShieldCheck className="h-5 w-5" />
                            <span className="text-sm font-medium">256-bit Encryption</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 opacity-70">
                            <Award className="h-5 w-5" />
                            <span className="text-sm font-medium">18 Years Experience</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Decorative Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
        </section>
    );
}
