"use client";

import * as React from "react";
import Link from "next/link";
import { BarChart3, Menu, X, Check } from "lucide-react";
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
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <BarChart3 className="h-6 w-6 text-gold" />
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                        MSN Global Markets
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-slate-200 hover:text-white hover:bg-slate-800 focus:bg-slate-800">
                                    AI Funds
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-slate-950 border border-slate-800 rounded-md">
                                        <ListItem title="Performance" href="/performance">
                                            Historical returns and live monitoring dashboards.
                                        </ListItem>
                                        <ListItem title="Methodology" href="/methodology">
                                            How our agentic AI strategies analyze 50+ indicators.
                                        </ListItem>
                                        <ListItem title="Risk Profile" href="/risk">
                                            Automated stop-losses and dynamic position sizing.
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-slate-200 hover:text-white hover:bg-slate-800 focus:bg-slate-800">
                                    Broker Partners
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-slate-950 border border-slate-800 rounded-md">
                                        <ListItem title="Mex Atlantic" href="/partners">
                                            ASIC regulated, 1:500 leverage, low spreads.
                                        </ListItem>
                                        <ListItem title="Exness" href="/partners">
                                            Unlimited leverage and instant withdrawals.
                                        </ListItem>
                                        <ListItem title="AvaTrade" href="/partners">
                                            Global regulation and fixed spread options.
                                        </ListItem>
                                        <ListItem title="JKV Global" href="/partners">
                                            Specialized for high volume algorithmic trading.
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/platforms" legacyBehavior passHref>
                                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-slate-200 hover:text-white hover:bg-slate-800 focus:bg-slate-800")}>
                                        Platforms
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/insights" legacyBehavior passHref>
                                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-slate-200 hover:text-white hover:bg-slate-800 focus:bg-slate-800")}>
                                        Insights
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* CTA Buttons - Desktop */}
                <div className="hidden items-center gap-4 md:flex">
                    <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">
                        Client Login
                    </Button>
                    <Button className="bg-gold text-slate-950 hover:bg-amber-400 font-semibold">
                        Start Investing
                    </Button>
                </div>

                {/* Mobile Menu */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon" className="text-slate-200">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-slate-950 border-slate-800 text-slate-200">
                        <div className="flex flex-col gap-6 mt-6">
                            <Link href="/" className="flex items-center gap-2 mb-4" onClick={() => setIsOpen(false)}>
                                <BarChart3 className="h-6 w-6 text-gold" />
                                <span className="text-lg font-bold">MSN Global Markets</span>
                            </Link>

                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-sm font-medium text-slate-400 uppercase">AI Funds</h4>
                                    <Link href="/performance" className="pl-4 py-2 hover:text-gold transition-colors" onClick={() => setIsOpen(false)}>Performance</Link>
                                    <Link href="/methodology" className="pl-4 py-2 hover:text-gold transition-colors" onClick={() => setIsOpen(false)}>Methodology</Link>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h4 className="text-sm font-medium text-slate-400 uppercase">Broker Partners</h4>
                                    <Link href="/partners" className="pl-4 py-2 hover:text-gold transition-colors" onClick={() => setIsOpen(false)}>Compare Brokers</Link>
                                </div>

                                <Link href="/platforms" className="font-medium hover:text-gold transition-colors" onClick={() => setIsOpen(false)}>Platforms</Link>
                                <Link href="/insights" className="font-medium hover:text-gold transition-colors" onClick={() => setIsOpen(false)}>Insights</Link>
                            </div>

                            <div className="flex flex-col gap-3 mt-4">
                                <Button variant="outline" className="w-full border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white">
                                    Client Login
                                </Button>
                                <Button className="w-full bg-gold text-slate-950 hover:bg-amber-400 font-bold">
                                    Start Investing
                                </Button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
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
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-white",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none text-slate-200">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-400">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
