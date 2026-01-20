"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TrendingUp, Globe, Clock, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as React from "react";

export default function InsightsPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Navbar />

            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl md:text-6xl font-black mb-6">Market <span className="text-gold">Insights.</span></h1>
                            <p className="text-slate-400 text-lg">Real-time financial feeds and AI-curated analysis of global market events.</p>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500 text-xs font-bold animate-pulse">
                            <Clock className="h-3 w-3" /> Live Feed Active
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Feed */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-slate-900 border border-white/10 rounded-3xl p-1 overflow-hidden min-h-[800px]">
                                <iframe
                                    src="https://www.tradingview-widget.com/embed-widget/timeline/?locale=en#%7B%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22displayMode%22%3A%22regular%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22800%22%2C%22utm_source%22%3A%22msnglobalmarkets.github.io%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22timeline%22%2C%22page-uri%22%3A%22msnglobalmarkets.github.io%2Finsights%22%7D"
                                    width="100%"
                                    height="800"
                                    frameBorder="0"
                                ></iframe>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-slate-900 border border-white/10 p-8 rounded-3xl">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <TrendingUp className="h-5 w-5 text-gold" /> Economic Calendar
                                </h3>
                                <div className="h-[400px] overflow-hidden rounded-xl border border-white/5">
                                    <iframe
                                        src="https://www.tradingview-widget.com/embed-widget/events/?locale=en#%7B%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22400%22%2C%22importanceFilter%22%3A%22-1%2C0%2C1%22%2C%22utm_source%22%3A%22msnglobalmarkets.github.io%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22events%22%7D"
                                        width="100%"
                                        height="400"
                                        frameBorder="0"
                                    ></iframe>
                                </div>
                            </div>

                            <div className="bg-gold p-8 rounded-3xl text-slate-950">
                                <h3 className="text-2xl font-black mb-4">AI Sentiment Alert</h3>
                                <p className="font-medium mb-6 opacity-80 text-sm italic">
                                    "Current market structure shows high accumulation in Gold (XAUUSD) ahead of FOMC. Expect volatility expansion."
                                </p>
                                <Link href="/contact" className="block">
                                    <Button className="w-full bg-slate-950 text-white hover:bg-slate-800 font-bold">
                                        Trade with AI <ArrowUpRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
