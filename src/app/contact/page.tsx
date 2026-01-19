"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle } from "lucide-react";
import * as React from "react";

export default function ContactPage() {
    const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://formspree.io/f/mqaeobov", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Navbar />

            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Info Side */}
                        <div className="space-y-12">
                            <div>
                                <h1 className="text-4xl md:text-6xl font-black mb-6">Book a <span className="text-gold">Consultation.</span></h1>
                                <p className="text-slate-400 text-lg">Ready to transform your wealth management with AI? Our Dubai-based consulting team is available for 1-on-1 strategy sessions.</p>
                            </div>

                            <div className="space-y-8">
                                <ContactItem
                                    icon={<Mail />}
                                    title="Email us directly"
                                    val="msnglobalmarkets@gmail.com"
                                    href="mailto:msnglobalmarkets@gmail.com"
                                />
                                <ContactItem
                                    icon={<Phone />}
                                    title="Phone / WhatsApp"
                                    val="+971 562 201 306"
                                    href="tel:+971562201306"
                                />
                                <ContactItem
                                    icon={<MapPin />}
                                    title="Dubai HQ"
                                    val="Dubai, United Arab Emirates"
                                />
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="bg-slate-900 border border-white/10 p-8 md:p-12 rounded-3xl shadow-3xl relative">
                            {status === "success" ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20 animate-in fade-in zoom-in duration-500">
                                    <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                                        <CheckCircle className="h-10 w-10 text-emerald-500" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                                        <p className="text-slate-400">Our desk has received your inquiry. We will contact you within 24 hours.</p>
                                    </div>
                                    <Button variant="outline" onClick={() => setStatus("idle")} className="border-white/10">Send Another</Button>
                                </div>
                            ) : (
                                <>
                                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                        <MessageSquare className="h-24 w-24" />
                                    </div>
                                    <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs uppercase font-bold text-slate-500 tracking-widest pl-1">Full Name</label>
                                                <input name="name" required type="text" placeholder="John Doe" className="w-full bg-slate-950 border border-white/10 rounded-xl p-4 text-white focus:border-gold outline-none transition-all" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs uppercase font-bold text-slate-500 tracking-widest pl-1">Email Address</label>
                                                <input name="email" required type="email" placeholder="john@example.com" className="w-full bg-slate-950 border border-white/10 rounded-xl p-4 text-white focus:border-gold outline-none transition-all" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase font-bold text-slate-500 tracking-widest pl-1">Strategy of Interest</label>
                                            <input name="strategy" type="text" placeholder="e.g. Aggressive AI Fund" className="w-full bg-slate-950 border border-white/10 rounded-xl p-4 text-white focus:border-gold outline-none transition-all" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase font-bold text-slate-500 tracking-widest pl-1">Message</label>
                                            <textarea
                                                name="message"
                                                required
                                                className="w-full bg-slate-950 border border-white/10 rounded-xl p-4 text-white focus:border-gold outline-none transition-all h-32"
                                                placeholder="Tell us about your investment goals..."
                                            />
                                        </div>
                                        <Button
                                            disabled={status === "submitting"}
                                            className="w-full bg-gold text-slate-950 hover:bg-amber-400 font-bold h-14 text-lg"
                                        >
                                            {status === "submitting" ? "Sending..." : "Send Inquiry"} <Send className="ml-2 h-4 w-4" />
                                        </Button>
                                        {status === "error" && <p className="text-red-500 text-sm text-center font-medium">Something went wrong. Please try again or email us directly.</p>}
                                    </form>
                                </>
                            )}
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

function ContactItem({ icon, title, val, href }: any) {
    const content = (
        <div className="flex gap-6 items-center group">
            <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-slate-950 transition-all">
                {icon}
            </div>
            <div>
                <div className="text-xs uppercase font-bold text-slate-500 tracking-widest mb-1">{title}</div>
                <div className="text-lg font-bold text-white group-hover:text-gold transition-colors">{val}</div>
            </div>
        </div>
    );

    return href ? <a href={href} className="block">{content}</a> : content;
}
