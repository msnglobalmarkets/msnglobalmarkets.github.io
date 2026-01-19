import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
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
                            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                <MessageSquare className="h-24 w-24" />
                            </div>
                            <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormInput label="Full Name" placeholder="John Doe" />
                                    <FormInput label="Email Address" placeholder="john@example.com" />
                                </div>
                                <FormInput label="Strategy of Interest" placeholder="e.g. Aggressive AI Fund" />
                                <div className="space-y-2">
                                    <label className="text-xs uppercase font-bold text-slate-500 tracking-widest pl-1">Message</label>
                                    <textarea
                                        className="w-full bg-slate-950 border border-white/10 rounded-xl p-4 text-white focus:border-gold outline-none transition-all h-32"
                                        placeholder="Tell us about your investment goals..."
                                    />
                                </div>
                                <Button className="w-full bg-gold text-slate-950 hover:bg-amber-400 font-bold h-14 text-lg">
                                    Send Inquiry <Send className="ml-2 h-4 w-4" />
                                </Button>
                            </form>
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

function FormInput({ label, placeholder, type = "text" }: any) {
    return (
        <div className="space-y-2">
            <label className="text-xs uppercase font-bold text-slate-500 tracking-widest pl-1">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full bg-slate-950 border border-white/10 rounded-xl p-4 text-white focus:border-gold outline-none transition-all"
            />
        </div>
    );
}
