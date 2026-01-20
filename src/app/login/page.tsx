"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LogIn, UserPlus, Shield, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: "error" | "success"; text: string } | null>(null);
    const [isSignUp, setIsSignUp] = useState(false);
    const router = useRouter();

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            if (isSignUp) {
                const { error } = await supabase.auth.signUp({ email, password });
                if (error) throw error;
                setMessage({ type: "success", text: "Check your email for confirmation link!" });
            } else {
                const { error } = await supabase.auth.signInWithPassword({ email, password });
                if (error) throw error;
                router.push("/dashboard");
            }
        } catch (error: any) {
            setMessage({ type: "error", text: error.message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col">
            <Navbar />

            <div className="flex-1 flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-slate-900 border border-white/10 p-8 rounded-3xl shadow-2xl space-y-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                        <Shield className="h-24 w-24" />
                    </div>

                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-black">{isSignUp ? "Join" : "Welcome"} <span className="text-gold">MSN Global.</span></h1>
                        <p className="text-slate-400 text-sm">Access your institutional trading terminal</p>
                    </div>

                    <form onSubmit={handleAuth} className="space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs uppercase font-bold text-slate-500 tracking-widest pl-1">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-slate-950 border border-white/10 rounded-xl p-4 text-white focus:border-gold outline-none transition-all"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase font-bold text-slate-500 tracking-widest pl-1">Password</label>
                                <input
                                    type="password"
                                    required
                                    className="w-full bg-slate-950 border border-white/10 rounded-xl p-4 text-white focus:border-gold outline-none transition-all"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        {message && (
                            <div className={cn(
                                "p-4 rounded-xl text-sm font-bold text-center border",
                                message.type === "error" ? "bg-red-500/10 text-red-500 border-red-500/20" : "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                            )}>
                                {message.text}
                            </div>
                        )}

                        <Button
                            disabled={loading}
                            className="w-full bg-gold text-slate-950 hover:bg-amber-400 font-bold h-14 text-lg"
                        >
                            {loading ? <Loader2 className="animate-spin h-5 w-5" /> : (isSignUp ? "Create Account" : "Sign In")}
                        </Button>
                    </form>

                    <div className="pt-4 text-center">
                        <button
                            onClick={() => setIsSignUp(!isSignUp)}
                            className="text-slate-500 text-sm hover:text-gold transition-colors font-medium underline underline-offset-4"
                        >
                            {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Join Now"}
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
