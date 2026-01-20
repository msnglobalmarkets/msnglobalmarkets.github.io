"use client";

import * as React from "react";
import { MessageSquare, Send, X, Bot, User, Loader2, Minus, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Chatbot() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isMinimized, setIsMinimized] = React.useState(false);
    const [messages, setMessages] = React.useState<{ role: "bot" | "user"; text: string }[]>([
        { role: "bot", text: "Hello! I am the MSN AI Assistant. How can I help you today?" }
    ]);
    const [input, setInput] = React.useState("");
    const [isThinking, setIsThinking] = React.useState(false);
    const [step, setStep] = React.useState<"chat" | "collect_name" | "collect_email" | "collect_query" | "complete">("chat");
    const [leadData, setLeadData] = React.useState({ name: "", email: "", query: "" });

    const handleSend = async () => {
        if (!input.trim()) return;

        const userText = input.trim();
        setMessages(prev => [...prev, { role: "user", text: userText }]);
        setInput("");
        setIsThinking(true);

        // lead generation flow
        if (step === "collect_name") {
            setLeadData(prev => ({ ...prev, name: userText }));
            setTimeout(() => {
                setMessages(prev => [...prev, { role: "bot", text: `Thanks ${userText}! What is your email address so our team can reach out?` }]);
                setStep("collect_email");
                setIsThinking(false);
            }, 800);
            return;
        }

        if (step === "collect_email") {
            setLeadData(prev => ({ ...prev, email: userText }));
            setTimeout(() => {
                setMessages(prev => [...prev, { role: "bot", text: "Got it. Finally, tell us briefly about your investment goals or questions." }]);
                setStep("collect_query");
                setIsThinking(false);
            }, 800);
            return;
        }

        if (step === "collect_query") {
            const finalData = { ...leadData, query: userText };
            setLeadData(finalData);

            // Sending lead to Formspree
            try {
                await fetch("https://formspree.io/f/mqaeobov", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        subject: "New Lead from MSN Chatbot",
                        ...finalData
                    })
                });
            } catch (e) {
                console.error("Formspree error", e);
            }

            setTimeout(() => {
                setMessages(prev => [...prev, { role: "bot", text: "Perfect! Your inquiry has been sent to our desk. An advisor will contact you shortly." }]);
                setStep("complete");
                setIsThinking(false);
            }, 1000);
            return;
        }

        // normal chat
        setTimeout(() => {
            let response = "I'm not sure about that. Would you like to speak to a human advisor?";
            const text = userText.toLowerCase();

            if (text.includes("fund") || text.includes("invest") || text.includes("start") || text.includes("yes") || text.includes("get started")) {
                response = "I can certainly help with that. To get started, may I have your full name?";
                setStep("collect_name");
            } else if (text.includes("broker") || text.includes("partner")) {
                response = "We work with top-tier partners like Daman Securities, Mex Atlantic, AvaTrade, and JKV Global. Would you like to connect with one of them?";
            } else if (text.includes("risk") || text.includes("safe")) {
                response = "Risk management is our core priority. We use algorithmic hedging. Would you like to see our performance metrics?";
            } else if (text.includes("contact") || text.includes("email")) {
                response = "You can reach us at msnglobalmarkets@gmail.com. Or if you like, I can take your details now and have someone call you?";
            } else if (text.includes("hello") || text.includes("hi")) {
                response = "Hi there! I'm the MSN AI. Are you looking to automate your wealth management?";
            }

            setMessages(prev => [...prev, { role: "bot", text: response }]);
            setIsThinking(false);
        }, 1000);
    };

    const resetChat = () => {
        setMessages([{ role: "bot", text: "Hello! I am the MSN AI Assistant. How can I help you today?" }]);
        setStep("chat");
        setLeadData({ name: "", email: "", query: "" });
        setInput("");
    };

    if (!isOpen) {
        return (
            <div className="fixed bottom-6 right-6 z-50">
                <Button
                    onClick={() => {
                        setIsOpen(true);
                        setIsMinimized(false);
                    }}
                    className="h-14 w-14 rounded-full bg-gold hover:bg-amber-400 text-slate-950 shadow-[0_0_30px_rgba(212,175,55,0.4)] animate-bounce"
                >
                    <MessageSquare className="h-6 w-6" />
                </Button>
            </div>
        );
    }

    return (
        <div className={cn(
            "fixed bottom-6 right-6 z-50 transition-all duration-300 ease-in-out",
            isMinimized ? "h-14 w-60" : "w-[350px] h-[550px]"
        )}>
            <div className="bg-slate-950 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden h-full">
                {/* Header */}
                <div className="bg-slate-900 p-4 border-b border-white/5 flex justify-between items-center shrink-0">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
                            <Bot className="h-4 w-4 text-gold" />
                        </div>
                        <div>
                            <div className="font-bold text-white text-sm">MSN Assistant</div>
                            <div className="text-[10px] text-green-500 flex items-center gap-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Online
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" onClick={() => setIsMinimized(!isMinimized)} className="text-slate-400 hover:text-white h-8 w-8">
                            <Minus className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white h-8 w-8">
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {!isMinimized && (
                    <>
                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/50 scroll-smooth">
                            {messages.map((m, i) => (
                                <div key={i} className={cn("flex gap-2 max-w-[85%]", m.role === "user" ? "ml-auto flex-row-reverse" : "")}>
                                    <div className={cn("w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1", m.role === "bot" ? "bg-gold/10 text-gold" : "bg-slate-800 text-slate-400")}>
                                        {m.role === "bot" ? <Bot className="h-3 w-3" /> : <User className="h-3 w-3" />}
                                    </div>
                                    <div className={cn("p-3 text-sm rounded-2xl", m.role === "bot" ? "bg-slate-900 text-slate-300 rounded-tl-none" : "bg-gold text-slate-950 rounded-tr-none font-medium")}>
                                        {m.text}
                                    </div>
                                </div>
                            ))}
                            {isThinking && (
                                <div className="flex gap-2 max-w-[85%]">
                                    <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1 bg-gold/10 text-gold">
                                        <Bot className="h-3 w-3" />
                                    </div>
                                    <div className="p-3 text-sm rounded-2xl bg-slate-900 text-slate-500 rounded-tl-none flex items-center gap-2">
                                        <Loader2 className="h-3 w-3 animate-spin" /> Thinking...
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Footer / Input */}
                        <div className="p-3 bg-slate-900 border-t border-white/5 shrink-0 space-y-2">
                            {step === "complete" ? (
                                <Button onClick={resetChat} className="w-full bg-gold text-slate-950 hover:bg-amber-400 font-bold gap-2">
                                    <RefreshCcw className="h-4 w-4" /> Start New Conversation
                                </Button>
                            ) : (
                                <>
                                    <div className="relative">
                                        <input
                                            className="w-full bg-slate-950 border border-white/10 rounded-full pl-4 pr-12 py-3 text-sm text-white focus:border-gold/50 outline-none transition-all"
                                            placeholder="Type your message..."
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    e.preventDefault();
                                                    handleSend();
                                                }
                                            }}
                                        />
                                        <Button
                                            size="icon"
                                            className="absolute right-1 top-1 h-8 w-8 rounded-full bg-gold text-slate-950 hover:bg-amber-400"
                                            onClick={handleSend}
                                            disabled={!input.trim()}
                                        >
                                            <Send className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <a
                                        href="https://wa.me/971562201306?text=Hi%20MSN%20Global,%20I'm%20chatting%20online%20and%20want%20to%20connect%20directly."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        <Button variant="outline" className="w-full border-green-500/20 text-emerald-500 hover:bg-green-500/10 h-8 text-[10px] font-bold uppercase tracking-widest gap-2">
                                            <MessageSquare className="h-3 w-3" /> Chat on WhatsApp
                                        </Button>
                                    </a>
                                </>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
