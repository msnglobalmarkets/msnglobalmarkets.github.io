import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

export function BrokerComparisonTable() {
    const brokers = [
        {
            name: "Mex Atlantic",
            regulation: "ASIC, FCA, SCB",
            leverage: "1:500",
            spreads: "From 0.0 pips",
            deposit: "$50",
            platform: "MT4, MT5",
            ai: true,
            url: "https://trade.mex.ae/register"
        },
        {
            name: "Daman Securities",
            regulation: "SCA (UAE), CySEC",
            leverage: "1:400",
            spreads: "From 0.1 pips",
            deposit: "$100",
            platform: "MT5, Daman App",
            ai: true,
            url: "https://portal.damanmarkets.com/links/go/1573"
        },
        {
            name: "AvaTrade",
            regulation: "CBI, ASIC, FSCA",
            leverage: "1:400",
            spreads: "From 0.9 pips",
            deposit: "$100",
            platform: "MT4, MT5, Web",
            ai: true,
            url: "https://www.avatrade.com?tag=204550"
        },
        {
            name: "JKV Global",
            regulation: "FSC Mauritius",
            leverage: "1:500",
            spreads: "From 0.1 pips",
            deposit: "$100",
            platform: "MT5",
            ai: true,
            url: "https://cabinet.jkvglobal.com/register"
        },
    ];

    return (
        <div className="w-full overflow-auto rounded-2xl border border-white/5 bg-slate-900/40 backdrop-blur-xl shadow-2xl relative">
            <div className="absolute inset-0 bg-gold/5 blur-3xl rounded-full -z-10" />

            <Table>
                <TableHeader className="bg-white/5 sticky top-0 z-10 backdrop-blur-md">
                    <TableRow className="border-white/5 hover:bg-white/5 transition-colors">
                        <TableHead className="w-[150px] text-slate-300 font-bold uppercase tracking-wider text-xs">Feature</TableHead>
                        {brokers.map((broker) => (
                            <TableHead key={broker.name} className="text-center text-white font-bold min-w-[140px] text-sm">
                                {broker.name}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {/* Regulation */}
                    <TableRow className="border-white/5 hover:bg-white/5 transition-colors">
                        <TableCell className="font-medium text-slate-400">Regulation</TableCell>
                        {brokers.map((broker, i) => (
                            <TableCell key={i} className="text-center text-slate-300 font-mono text-xs">{broker.regulation}</TableCell>
                        ))}
                    </TableRow>

                    {/* Leverage */}
                    <TableRow className="border-white/5 hover:bg-white/5 transition-colors">
                        <TableCell className="font-medium text-slate-400">Max Leverage</TableCell>
                        {brokers.map((broker, i) => (
                            <TableCell key={i} className="text-center text-slate-300 font-mono">{broker.leverage}</TableCell>
                        ))}
                    </TableRow>

                    {/* Spreads */}
                    <TableRow className="border-white/5 hover:bg-white/5 transition-colors">
                        <TableCell className="font-medium text-slate-400">Spreads (EUR/USD)</TableCell>
                        {brokers.map((broker, i) => (
                            <TableCell key={i} className="text-center text-emerald-400 font-bold font-mono">{broker.spreads}</TableCell>
                        ))}
                    </TableRow>

                    {/* Min Deposit */}
                    <TableRow className="border-white/5 hover:bg-white/5 transition-colors">
                        <TableCell className="font-medium text-slate-400">Min Deposit</TableCell>
                        {brokers.map((broker, i) => (
                            <TableCell key={i} className="text-center text-slate-300 font-mono">{broker.deposit}</TableCell>
                        ))}
                    </TableRow>

                    {/* Platform */}
                    <TableRow className="border-white/5 hover:bg-white/5 transition-colors">
                        <TableCell className="font-medium text-slate-400">Platform</TableCell>
                        {brokers.map((broker, i) => (
                            <TableCell key={i} className="text-center text-slate-300 text-xs">{broker.platform}</TableCell>
                        ))}
                    </TableRow>

                    {/* AI Compatibility */}
                    <TableRow className="border-white/5 bg-gold/5 blur-0">
                        <TableCell className="font-medium text-gold">AI Compatibility</TableCell>
                        {brokers.map((broker, i) => (
                            <TableCell key={i} className="text-center">
                                <div className="flex items-center justify-center gap-1 text-gold font-bold text-xs uppercase tracking-wide">
                                    <Check className="h-4 w-4" /> Native
                                </div>
                            </TableCell>
                        ))}
                    </TableRow>

                    {/* Action Button */}
                    <TableRow className="border-white/5 hover:bg-transparent">
                        <TableCell className="font-medium text-slate-400"></TableCell>
                        {brokers.map((broker, i) => (
                            <TableCell key={i} className="text-center p-4">
                                <a href={broker.url} target="_blank" rel="noopener noreferrer" className="block w-full">
                                    <Button size="sm" className="w-full bg-white/10 hover:bg-gold hover:text-slate-950 text-white border border-white/10 transition-all rounded-lg font-bold">
                                        Open Account
                                    </Button>
                                </a>
                            </TableCell>
                        ))}
                    </TableRow>

                </TableBody>
            </Table>
        </div>
    );
}
