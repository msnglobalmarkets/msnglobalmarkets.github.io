import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { UserPlus, UserCheck, PlayCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HowItWorksPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Navbar />

            <section className="py-20 lg:py-32 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gold/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h1 className="text-4xl md:text-6xl font-black mb-6">Start Your <span className="text-gold">AI Journey</span></h1>
                        <p className="text-slate-400 text-lg">
                            Onboarding with MSN Global Markets is designed for speed, transparency, and regulatory compliance.
                            Get connected to institutional strategies in under 24 hours.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {/* Connector Lines (Desktop only) */}
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2 z-0" />

                        <StepCard
                            num="01"
                            icon={<UserPlus />}
                            title="Select Broker"
                            desc="Choose from our regulated partners: Mex, AvaTrade, JKV, or Exness."
                        />
                        <StepCard
                            num="02"
                            icon={<UserCheck />}
                            title="KYC & Funding"
                            desc="Open your live account and fund it directly with your chosen broker."
                        />
                        <StepCard
                            num="03"
                            icon={<PlayCircle />}
                            title="Connect AI"
                            desc="Invite us to your terminal or connect via PAMM to sync our strategies."
                        />
                        <StepCard
                            num="04"
                            icon={<ShieldCheck />}
                            title="Monitor & Grow"
                            desc="Access 24/7 performance dashboard and adjust risk settings anytime."
                        />
                    </div>

                    <div className="mt-24 text-center">
                        <Button className="bg-gold text-slate-950 hover:bg-amber-400 font-bold px-12 h-16 text-lg shadow-2xl">
                            Start Registration Now
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

function StepCard({ num, icon, title, desc }: any) {
    return (
        <div className="bg-slate-900 border border-white/10 p-8 rounded-3xl relative z-10 hover:border-gold/30 transition-all group">
            <div className="text-5xl font-black text-white/5 absolute -top-4 -right-4 transition-colors group-hover:text-gold/10">{num}</div>
            <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-slate-950 transition-all">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}
