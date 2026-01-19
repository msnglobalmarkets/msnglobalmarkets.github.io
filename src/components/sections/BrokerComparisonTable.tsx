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
            url: "https://www.mexatlantic.com/"
        },
        {
            name: "Exness",
            regulation: "CySEC, FCA, FSA",
            leverage: "1:Unlimited",
            spreads: "From 0.0 pips (Zero)",
            deposit: "$10",
            platform: "MT4, MT5, Terminal",
            ai: true,
            url: "https://www.exness.com/"
        },
        {
            name: "AvaTrade",
            regulation: "CBI, ASIC, FSCA",
            leverage: "1:400",
            spreads: "From 0.9 pips",
            deposit: "$100",
            platform: "MT4, MT5, Web",
            ai: true,
            url: "https://www.avatrade.com/"
        },
        {
            name: "JKV Global",
            regulation: "FSC Mauritius",
            leverage: "1:500",
            spreads: "From 0.1 pips",
            deposit: "$100",
            platform: "MT5",
            ai: true,
            url: "https://jkvglobal.com/"
        },
    ];

    return (
        <div className="w-full overflow-auto rounded-lg border border-slate-800 bg-slate-900 shadow-xl">
            <Table>
                <TableHeader className="bg-slate-950 sticky top-0 z-10">
                    <TableRow className="border-slate-800 hover:bg-slate-950">
                        <TableHead className="w-[150px] text-slate-300 font-bold">Feature</TableHead>
                        {brokers.map((broker) => (
                            <TableHead key={broker.name} className="text-center text-slate-200 font-bold min-w-[140px]">
                                {broker.name}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {/* Regulation */}
                    <TableRow className="border-slate-800 hover:bg-slate-900/50">
                        <TableCell className="font-medium text-slate-400">Regulation</TableCell>
                        {brokers.map((broker, i) => (
                            <TableCell key={i} className="text-center text-slate-300">{broker.regulation}</TableCell>
                        ))}
                    </TableRow>

                    {/* Leverage */}
                    <TableRow className="border-slate-800 hover:bg-slate-900/50">
                        <TableCell className="font-medium text-slate-400">Max Leverage</TableCell>
                        {brokers.map((broker, i) => (
                            <TableCell key={i} className="text-center text-slate-300">{broker.leverage}</TableCell>
                        ))}
                    </TableRow>

                    {/* Spreads */}
                    <TableRow className="border-slate-800 hover:bg-slate-900/50">
                        <TableCell className="font-medium text-slate-400">Spreads (EUR/USD)</TableCell>
                        {brokers.map((broker, i) => (
                            <TableCell key={i} className="text-center text-emerald-400 font-medium">{broker.spreads}</TableCell>
                        ))}
                    </TableRow>

                    {/* Min Deposit */}
                    <TableRow className="border-slate-800 hover:bg-slate-900/50">
                        <TableCell className="font-medium text-slate-400">Min Deposit</TableCell>
                        {brokers.map((broker, i) => (
                            <TableCell key={i} className="text-center text-slate-300">{broker.deposit}</TableCell>
                        ))}
                    </TableRow>

                    {/* Platform */}
                    <TableRow className="border-slate-800 hover:bg-slate-900/50">
                        <TableCell className="font-medium text-slate-400">Platform</TableCell>
                        {brokers.map((broker, i) => (
                            <TableCell key={i} className="text-center text-slate-300 text-sm">{broker.platform}</TableCell>
                        ))}
                    </TableRow>

                    {/* AI Compatibility */}
                    <TableRow className="border-slate-800 hover:bg-slate-900/50 bg-blue-950/20">
                        <TableCell className="font-medium text-blue-400">AI Compatibility</TableCell>
                        {brokers.map((broker, i) => (
                            <TableCell key={i} className="text-center">
                                <div className="flex items-center justify-center gap-1 text-emerald-400 font-bold">
                                    <Check className="h-4 w-4" /> Full Support
                                </div>
                            </TableCell>
                        ))}
                    </TableRow>

                    {/* Action Button */}
                    <TableRow className="border-slate-800 hover:bg-slate-900/50">
                        <TableCell className="font-medium text-slate-400"></TableCell>
                        {brokers.map((broker, i) => (
                            <TableCell key={i} className="text-center p-4">
                                <a href={broker.url} target="_blank" rel="noopener noreferrer" className="block w-full">
                                    <Button size="sm" className="w-full bg-slate-800 hover:bg-gold hover:text-slate-950 text-slate-200 transition-colors">
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
