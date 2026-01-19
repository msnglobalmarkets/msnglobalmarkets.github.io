"use client";

import * as React from "react";
import { MessageSquare, Send, X, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Chatbot() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [messages, setMessages] = React.useState<{ role: "bot" | "user"; text: string }[]>([
        { role: "bot", text: "Hello! I am the MSN AI Assistant. How can I help you today?" }
    ]);
    const [input, setInput] = React.useState("");

    const handleSend = () => {
        if (!input.trim()) return;

        // Add user message
        setMessages(prev => [...prev, { role: "user", text: input }]);
        const userText = input.toLowerCase();
        setInput("");

        // Simulate response delay
        setTimeout(() => {
            let response = "I'm not sure about that. Would you like to speak to a human advisor?";

            if (userText.includes("fund") || userText.includes("invest")) {
                response = "We offer AI-driven fund management with aggressive, balanced, and conservative options. You can explore them on our 'AI Strategies' page.";
            } else if (userText.includes("broker") || userText.includes("partner")) {
                response = "We work with Mex Atlantic, Exness, AvaTrade, and JKV Global. All are regulated and compatible with our AI.";
            } else if (userText.includes("risk") || userText.includes("safe")) {
                response = "All trading carries risk. We use automated hedging and strict stop-losses, but you should never invest more than you can afford to lose.";
            } else if (userText.includes("contact") || userText.includes("email")) {
                response = "You can reach us at msnglobalmarkets@gmail.com or visit our Contact page.";
            } else if (userText.includes("hello") || userText.includes("hi")) {
                response = "Hi there! Looking to grow your portfolio?";
            }

            setMessages(prev => [...prev, { role: "bot", text: response }]);
        }, 1000);
    };

    return (
        <>
            <div className="fixed bottom-6 right-6 z-50">
                {!isOpen && (
                    <Button
                        onClick={() => setIsOpen(true)}
                        className="h-14 w-14 rounded-full bg-gold hover:bg-amber-400 text-slate-950 shadow-[0_0_30px_rgba(212,175,55,0.4)] animate-bounce"
                    >
                        <MessageSquare className="h-6 w-6" />
                    </Button>
                )}
            </div>

            {isOpen && (
                <div className="fixed bottom-6 right-6 z-50 w-[350px] bg-slate-950 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">

                    {/* Header */}
                    <div className="bg-slate-900 p-4 border-b border-white/5 flex justify-between items-center">
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
                        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
                            <X className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 h-[300px] overflow-y-auto p-4 space-y-4 bg-slate-950/50">
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
                    </div>

                    {/* Input */}
                    <div className="p-3 bg-slate-900 border-t border-white/5">
                        <div className="relative">
                            <input
                                className="w-full bg-slate-950 border border-white/10 rounded-full pl-4 pr-12 py-3 text-sm text-white focus:border-gold/50 outline-none transition-all"
                                placeholder="Type your message..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            />
                            <Button
                                size="icon"
                                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-gold text-slate-950 hover:bg-amber-400"
                                onClick={handleSend}
                            >
                                <Send className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                </div>
            )}
        </>
    );
}
