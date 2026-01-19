import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Linkedin, Twitter, MessageSquare } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-white/5 relative overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

                    {/* Brand Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative w-8 h-8 rounded bg-gold/10 flex items-center justify-center p-1 border border-gold/20">
                                <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">MSN GLOBAL MARKETS</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                            Empowering wealth growth through institutional-grade AI trading strategies and advanced portfolio management.
                            Built on 18+ years of expertise in global market volatility.
                        </p>
                        <div className="flex gap-4">
                            <SocialLink href="#" icon={<Twitter className="h-4 w-4" />} />
                            <SocialLink href="#" icon={<Linkedin className="h-4 w-4" />} />
                            <SocialLink href="#" icon={<MessageSquare className="h-4 w-4" />} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Solutions</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><Link href="/ai-funds" className="hover:text-gold transition-colors">AI Fund Management</Link></li>
                            <li><Link href="/performance" className="hover:text-gold transition-colors">Performance Results</Link></li>
                            <li><Link href="/expert-advisors" className="hover:text-gold transition-colors">Expert Advisors</Link></li>
                            <li><Link href="/partners" className="hover:text-gold transition-colors">Partner Brokers</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Platform</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
                            <li><Link href="/how-it-works" className="hover:text-gold transition-colors">How it Works</Link></li>
                            <li><Link href="/legal" className="hover:text-gold transition-colors">Legal & Compliance</Link></li>
                            <li><Link href="/contact" className="hover:text-gold transition-colors">Support</Link></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li className="flex items-start gap-3">
                                <Mail className="h-4 w-4 text-gold mt-1 shrink-0" />
                                <a href="mailto:msnglobalmarkets@gmail.com" className="hover:text-gold break-all">msnglobalmarkets@gmail.com</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="h-4 w-4 text-gold mt-1 shrink-0" />
                                <a href="tel:+971562201306" className="hover:text-gold">+971 562 201 306</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="h-4 w-4 text-gold mt-1 shrink-0" />
                                <span>Dubai, UAE</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center text-slate-600 text-[10px] border-t border-white/5 pt-12">
                    <p className="mb-2">© {new Date().getFullYear()} MSN Global Markets. UAE Licensed Introducing Broker.</p>
                </div>
            </div>

            {/* Strict Regulatory Band */}
            <div className="w-full bg-[#050a14] py-10 border-t border-white/5">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto space-y-4 opacity-60">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-center mb-6">Risk & Regulatory Disclosure</p>
                        <p className="text-[11px] text-slate-500 text-justify leading-relaxed">
                            <strong>Risk Warning:</strong> Trading Forex and CFDs carries a high level of risk to your capital and you should only trade with money you can afford to lose.
                            Leveraged products can work against you as well as for you. Past performance of AI algorithms or our historical track records are not indicative of future results.
                            The 90%+ success ratio mentioned for certain Expert Advisors refers specifically to historical backtesting data and does not constitute a guarantee of future profitability.
                        </p>
                        <p className="text-[11px] text-slate-500 text-justify leading-relaxed">
                            <strong>Introducing Broker Disclosure:</strong> MSN Global Markets operates as an Introducing Broker (IB) for regulated partners including Mex Atlantic (ASIC/SCB), Exness (CySEC/FCA), AvaTrade, and JKV Global.
                            We do not hold client funds; all deposits are held directly by your chosen regulated broker.
                            Information on this site is not intended for residents of jurisdictions where CFD trading or portfolio management is restricted, including the USA and Belgium.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a href={href} className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-gold hover:border-gold/30 transition-all">
            {icon}
        </a>
    );
}
