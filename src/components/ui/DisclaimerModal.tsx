"use client";

import { useEffect, useState } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { ShieldAlert } from "lucide-react";

export function DisclaimerModal() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const hasConsented = localStorage.getItem("msn-regulatory-consent");
        if (!hasConsented) {
            setOpen(true);
        }
    }, []);

    const handleConsent = () => {
        localStorage.setItem("msn-regulatory-consent", "true");
        setOpen(false);
    };

    return (
        <AlertDialog open={open}>
            <AlertDialogContent className="bg-slate-900 border-slate-800 text-slate-200">
                <AlertDialogHeader>
                    <AlertDialogTitle className="flex items-center gap-2 text-white">
                        <ShieldAlert className="h-5 w-5 text-gold" />
                        Important Regulatory Information
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-slate-400">
                        This website provides information about automated trading strategies and brokerage services.
                        It does not constitute financial advice. By proceeding, you confirm that you are a professional or informed investor.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction
                        onClick={handleConsent}
                        className="bg-gold text-slate-950 hover:bg-amber-400 font-bold"
                    >
                        I Understand & Proceed
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
