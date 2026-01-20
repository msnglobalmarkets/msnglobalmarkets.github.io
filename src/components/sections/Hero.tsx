"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, Globe, Award, ChevronRight } from "lucide-react";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Hero() {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-slate-950">

            {/* Background with optimized overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="Dubai Skyline Trading Background"
                    fill
                    priority
                    className="object-cover object-center opacity-60 mix-blend-luminosity scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/80" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent_70%)]" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6 py-20 lg:py-32">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

                    {/* Experience Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gold text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in-up">
                        <Award className="h-3 w-3" />
                        18+ Years Pro Proven Experience
                    </div>

                    {/* Headline */}
                    <div className="space-y-6 mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]">
                            The Future of Wealth <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-200 to-gold">
                                is Algorithmic.
                            </span>
                        </h1>
                        <p className="mx-auto max-w-2xl text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
                            Standardizing institutional-grade AI trading for the modern investor.
                            Deploy advanced automated strategies across regulated global brokers with
                            <span className="text-white"> Zero Platform Lock-in.</span>
                        </p>
                    </div>

                    {/* CTA Group */}
                    <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <Link href="/ai-funds" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto bg-gold text-slate-950 hover:bg-amber-400 font-bold px-10 h-14 text-lg shadow-[0_10px_30px_rgba(212,175,55,0.3)]">
                                Trade with AI
                                <ChevronRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/partners" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/10 text-white bg-white/5 hover:bg-white/10 px-10 h-14 text-lg">
                                Compare Brokers
                            </Button>
                        </Link>
                    </div>

                    {/* Institutional Trust Bar */}
                    <div className="w-full max-w-4xl pt-10 border-t border-white/5 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold mb-8">
                            Trusted Technology Across Tier-1 Ecosystems
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 opacity-60 grayscale group hover:grayscale-0 transition-all duration-700">
                            <TrustItem label="Mex Atlantic" />
                            <TrustItem label="Daman Securities" />
                            <TrustItem label="AvaTrade" />
                            <TrustItem label="JKV Global" />
                        </div>
                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
                <div className="w-[1px] h-12 bg-white" />
            </div>
        </section>
    );
}

function TrustItem({ label, icon }: { label: string; icon?: React.ReactNode }) {
    return (
        <div className="flex flex-col items-center justify-center gap-3 hover:opacity-100 transition-opacity cursor-default">
            <div className="h-8 w-full flex items-center justify-center">
                {icon ? icon : <div className="text-xl font-black italic tracking-tighter text-white/80">{label.split(' ')[0]}</div>}
            </div>
            <span className="text-[9px] uppercase tracking-widest font-bold text-slate-500">{label}</span>
        </div>
    );
}
