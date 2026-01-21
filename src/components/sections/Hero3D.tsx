"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, Award, ShieldCheck, Globe, Zap, Calculator } from "lucide-react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { Spotlight } from "@/components/ui/Spotlight";
import { ProfitCalculator } from "@/components/ui/ProfitCalculator";

export function Hero3D() {
    const ref = useRef(null);

    // Mouse tilt effect for the 3D card
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;

        // Normalize to -1 to 1 range for rotation
        // Reduced tilt intensity for better usability of the interactive calculator
        const rotateX = (y / height - 0.5) * -5;
        const rotateY = (x / width - 0.5) * 5;

        mouseX.set(rotateX);
        mouseY.set(rotateY);
    }

    function handleMouseLeave() {
        mouseX.set(0);
        mouseY.set(0);
    }

    // Smooth out the rotation
    const smoothX = useSpring(mouseX, { damping: 20, stiffness: 100 });
    const smoothY = useSpring(mouseY, { damping: 20, stiffness: 100 });

    return (
        <div className="relative w-full min-h-[95vh] flex flex-col items-center justify-center bg-slate-950 overflow-hidden antialiased">
            {/* Background Image & Effects */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="Dubai Skyline"
                    fill
                    priority
                    className="object-cover object-center opacity-30 select-none pointer-events-none mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/20" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20 z-10" fill="#F59E0B" />

            <div className="container relative z-20 mx-auto px-4 md:px-6 w-full pt-24 pb-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

                    {/* Left Content */}
                    <div className="flex-1 max-w-3xl text-center lg:text-left space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-gold/20 text-gold text-xs font-bold uppercase tracking-widest backdrop-blur-md hover:bg-gold/10 transition-colors"
                        >
                            <Award className="h-4 w-4" />
                            <span>Next-Gen Wealth Tech</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] drop-shadow-2xl"
                        >
                            Master the <br />
                            <span className="relative inline-block">
                                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500">Market Structure</span>
                                <span className="absolute -bottom-2 left-0 w-full h-4 bg-gold/20 blur-lg -z-10" />
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-lg"
                        >
                            Deploy agentic AI strategies that analyze microstructure and order flow.
                            <span className="text-white font-semibold"> 90% Success Ratio </span>
                            across Forex, Crypto, and Indices.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Link href="/ai-funds">
                                <div className="relative group overflow-hidden rounded-xl p-[1px] shadow-2xl shadow-gold/20 transform transition-transform hover:scale-105 cursor-pointer">
                                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                    <button className="relative w-full sm:w-auto h-14 px-8 bg-slate-950 rounded-xl flex items-center justify-center gap-2 text-white font-bold text-lg hover:bg-slate-900 transition-colors">
                                        Start Algorithmic Trading
                                        <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </Link>

                            <Link href="/performance">
                                <Button variant="outline" size="lg" className="h-14 px-8 rounded-xl bg-white/5 border-white/10 hover:bg-white/10 text-white font-medium text-lg backdrop-blur-sm">
                                    Live Performance
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="pt-8 border-t border-white/10 flex flex-wrap gap-6 justify-center lg:justify-start opacity-80"
                        >
                            <div className="flex items-center gap-2 text-sm text-slate-300 font-medium bg-slate-900/40 px-3 py-1.5 rounded-full border border-white/5">
                                <ShieldCheck className="text-gold h-4 w-4" />
                                Regulated Brokers
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-300 font-medium bg-slate-900/40 px-3 py-1.5 rounded-full border border-white/5">
                                <Globe className="text-gold h-4 w-4" />
                                Global Connectivity
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-300 font-medium bg-slate-900/40 px-3 py-1.5 rounded-full border border-white/5">
                                <Zap className="text-gold h-4 w-4" />
                                <span className="text-gold font-bold">Latency: 2ms</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content - Investment Calculator (Replaces 3D Card) */}
                    <div className="flex-1 w-full max-w-xl perspective-1000 hidden lg:block">
                        <motion.div
                            style={{ rotateX: smoothX, rotateY: smoothY }}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            className="relative w-full p-2 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl group"
                        >
                            <div className="bg-slate-950/90 backdrop-blur-xl rounded-[20px] p-6 border border-white/5 shadow-inner relative overflow-hidden">
                                {/* Background Glows */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px] -z-10 group-hover:bg-gold/20 transition-colors duration-700" />
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-[60px] -z-10" />

                                <div className="mb-6 flex items-center justify-between border-b border-white/5 pb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-gradient-to-br from-gold/20 to-gold/5 text-gold border border-gold/20 shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                                            <Calculator className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white leading-none">Profit Simulator</h3>
                                            <div className="text-[10px] text-slate-400 font-medium mt-1">AI COMPOUNDING ENGINE</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                        </span>
                                        <span className="text-[10px] font-mono font-bold text-emerald-500">LIVE FEED</span>
                                    </div>
                                </div>

                                {/* Compact Mode Calculator */}
                                <ProfitCalculator compact={true} />

                                {/* Decorative Data Stream */}
                                <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center opacity-50">
                                    <div className="text-[9px] font-mono text-slate-500">HASH: 0x8F...3A2</div>
                                    <div className="text-[9px] font-mono text-slate-500">BLOCK: 19,204,115</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
