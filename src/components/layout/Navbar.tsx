"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/90 backdrop-blur-xl">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                {/* Logo and Brand */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-gold/10 flex items-center justify-center border border-gold/20 group-hover:border-gold/40 transition-all">
                        <Image
                            src="/logo.png"
                            alt="MSN Logo"
                            fill
                            className="object-contain p-1"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-tight text-white leading-tight">
                            MSN GLOBAL
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold">
                            Markets
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-2">
                    <NavigationMenu>
                        <NavigationMenuList className="gap-1">
                            {/* Home */}
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-slate-400 hover:text-white hover:bg-white/5")}>
                                        Home
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            {/* AI Funds Dropdown */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-slate-400 hover:text-white hover:bg-white/5">
                                    AI Strategies
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-6 bg-slate-900 border border-white/10 rounded-xl shadow-2xl">
                                        <ListItem title="AI Fund Management" href="/ai-funds">
                                            Our core automated portfolio management services.
                                        </ListItem>
                                        <ListItem title="Methodology & Risk" href="/performance">
                                            How we use agentic AI to protect and grow capital.
                                        </ListItem>
                                        <ListItem title="Custom EA Development" href="/expert-advisors">
                                            Tailored algorithmic systems for professional traders.
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Partners Dropdown */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-slate-400 hover:text-white hover:bg-white/5">
                                    Ecosystem
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-6 bg-slate-900 border border-white/10 rounded-xl shadow-2xl">
                                        <ListItem title="Broker Partners" href="/partners">
                                            Connect via Mex Atlantic, Exness, AvaTrade, or JKV Global.
                                        </ListItem>
                                        <ListItem title="Trading Platforms" href="/platforms">
                                            Seamless integration with MT4, MT5 and Proprietary Terminals.
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Company */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-slate-400 hover:text-white hover:bg-white/5">
                                    Company
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[250px] gap-3 p-4 bg-slate-900 border border-white/10 rounded-xl shadow-2xl">
                                        <ListItem title="About Us" href="/about" />
                                        <ListItem title="Legal & Risk" href="/legal" />
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Education */}
                            <NavigationMenuItem>
                                <Link href="/insights" legacyBehavior passHref>
                                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-slate-400 hover:text-white hover:bg-white/5")}>
                                        Insights
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Action Buttons */}
                <div className="hidden lg:flex items-center gap-4">
                    <Button variant="ghost" className="text-slate-400 hover:text-white hover:bg-white/5">
                        Login
                    </Button>
                    <Link href="/contact">
                        <Button className="bg-gold text-slate-950 hover:bg-amber-400 font-bold px-6 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                            Get Started
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Trigger */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="lg:hidden">
                        <Button variant="ghost" size="icon" className="text-slate-200">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-slate-950 border-white/10 text-white p-0">
                        <div className="flex flex-col h-full bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05),transparent)]">
                            <div className="p-6 border-b border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="relative w-8 h-8 rounded bg-gold/20 flex items-center justify-center p-1">
                                        <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                                    </div>
                                    <span className="font-bold text-lg">MSN Global</span>
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto p-6 space-y-8">
                                <div className="space-y-4">
                                    <MobileNavItem href="/" onClick={() => setIsOpen(false)}>Home</MobileNavItem>
                                    <div className="space-y-4 pt-2">
                                        <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold flex items-center gap-2">
                                            <div className="h-[1px] w-4 bg-gold/50" /> AI Strategies
                                        </h4>
                                        <MobileNavItem href="/ai-funds" onClick={() => setIsOpen(false)}>Fund Management</MobileNavItem>
                                        <MobileNavItem href="/performance" onClick={() => setIsOpen(false)}>Methodology</MobileNavItem>
                                        <MobileNavItem href="/expert-advisors" onClick={() => setIsOpen(false)}>Custom EAs</MobileNavItem>
                                    </div>
                                    <div className="space-y-4 pt-2">
                                        <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold flex items-center gap-2">
                                            <div className="h-[1px] w-4 bg-gold/50" /> Ecosystem
                                        </h4>
                                        <MobileNavItem href="/partners" onClick={() => setIsOpen(false)}>Brokers</MobileNavItem>
                                        <MobileNavItem href="/platforms" onClick={() => setIsOpen(false)}>Platforms</MobileNavItem>
                                    </div>
                                </div>

                                <div className="pt-8 space-y-3">
                                    <Button variant="outline" className="w-full border-white/10 text-white hover:bg-white/5">
                                        Client Login
                                    </Button>
                                    <Link href="/contact" className="block">
                                        <Button onClick={() => setIsOpen(false)} className="w-full bg-gold text-slate-950 hover:bg-amber-400 font-bold">
                                            Get Started
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}

function MobileNavItem({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="block text-xl font-medium text-slate-300 hover:text-gold transition-colors"
        >
            {children}
        </Link>
    );
}

const ListItem = React.forwardRef<
    React.ComponentRef<typeof Link>,
    React.ComponentPropsWithoutRef<typeof Link> & { title: string }
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all hover:bg-white/5 hover:translate-x-1 group",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-semibold leading-none text-slate-100 group-hover:text-gold transition-colors">{title}</div>
                    {children && (
                        <p className="line-clamp-2 text-xs leading-snug text-slate-500 mt-1">
                            {children}
                        </p>
                    )}
                </Link>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
