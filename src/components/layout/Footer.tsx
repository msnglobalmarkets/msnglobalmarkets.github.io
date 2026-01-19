import Link from "next/link";
import { BarChart3 } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-800">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-left">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <BarChart3 className="h-6 w-6 text-gold" />
                            <span className="text-xl font-bold text-white">MSN Global Markets</span>
                        </Link>
                        <p className="text-slate-500 text-sm mb-4">Standardizing institutional AI trading for the retail sector.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="#" className="hover:text-gold transition-colors">About</Link></li>
                            <li><Link href="#" className="hover:text-gold transition-colors">Career</Link></li>
                            <li><Link href="#" className="hover:text-gold transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="#" className="hover:text-gold transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-gold transition-colors">Risk Disclosure</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">Connect</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="#" className="hover:text-gold transition-colors">Twitter</Link></li>
                            <li><Link href="#" className="hover:text-gold transition-colors">LinkedIn</Link></li>
                            <li><Link href="#" className="hover:text-gold transition-colors">Telegram</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="text-center text-slate-600 text-xs border-t border-slate-900 pt-8">
                    <p className="mb-2">&copy; {new Date().getFullYear()} MSN Global Markets. All rights reserved.</p>
                </div>
            </div>

            {/* Regulatory Risk Warning Band */}
            <div className="w-full bg-[#050a14] py-8 border-t border-slate-900">
                <div className="container mx-auto px-4 md:px-6 text-xs text-slate-500 text-justify leading-relaxed opacity-80">
                    <p className="font-bold text-slate-400 mb-2">Risk Warning:</p>
                    <p className="mb-4">
                        Trading Forex and CFDs carries a high level of risk to your capital and you should only trade with money you can afford to lose.
                        These products may not be suitable for all investors. Please ensure that you fully understand the risks involved and seek independent advice if necessary.
                    </p>
                    <p className="mb-2">
                        MSN Global Markets is an Introducing Broker for Mex Atlantic (Regulated by ASIC/SCB) and Exness (Regulated by CySEC/FCA).
                        Past performance of AI algorithms does not guarantee future results.
                    </p>
                    <p>
                        Information on this site is not directed at residents of the United States, Belgium, or any country where such distribution would be contrary to local law or regulation.
                    </p>
                </div>
            </div>
        </footer>
    );
}
