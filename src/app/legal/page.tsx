import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AlertTriangle, ShieldCheck, Scale, Globe } from "lucide-react";

export default function LegalPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Navbar />

            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-black mb-12 text-center">Legal & <span className="text-gold">Compliance</span></h1>

                    <div className="space-y-16">

                        <LegalSection
                            icon={<AlertTriangle className="text-red-500" />}
                            title="Risk Disclosure Statement"
                            content={`Trading Forex and Contracts for Difference (CFDs) is highly speculative, carries a high level of risk and may not be suitable for all investors. You may sustain a loss of some or all of your invested capital; therefore, you should not speculate with capital that you cannot afford to lose. You should be aware of all the risks associated with trading on margin. MSN Global Markets provided AI automated strategies and Expert Advisors are tools used to assist in trading decisions but do not guarantee profitability. Past performance is not an indicator of future success.`}
                        />

                        <LegalSection
                            icon={<ShieldCheck className="text-emerald-500" />}
                            title="Introducing Broker (IB) Status"
                            content={`MSN Global Markets acts solely as an Introducing Broker (IB). We are not a bank, not a liquidity provider, and we do not hold client funds. All brokerage accounts are opened with third-party regulated entities (Mex Atlantic, Exness, AvaTrade, JKV Global). We receive compensation from our broker partners for bringing new business, which may be in the form of commission sharing or spreads.`}
                        />

                        <LegalSection
                            icon={<Scale className="text-blue-500" />}
                            title="No Financial Advice"
                            content={`The content on this website and within our strategy reports is for informational purposes only. It does not constitute financial, investment, tax, or legal advice. You should seek advice from a licensed financial advisor before making any investment decisions.`}
                        />

                        <LegalSection
                            icon={<Globe className="text-gold" />}
                            title="Geographical Restrictions"
                            content={`Our services are not intended for distribution to, or use by, any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation. This includes but is not limited to the United States of America, Belgium, and Canada.`}
                        />

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

function LegalSection({ icon, title, content }: any) {
    return (
        <div className="bg-slate-900/50 border border-white/5 p-8 md:p-12 rounded-3xl">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center">
                    {icon}
                </div>
                <h2 className="text-2xl font-bold">{title}</h2>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base text-justify">
                {content}
            </p>
        </div>
    );
}
