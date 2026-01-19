import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google"; // Import Lexend
import "./globals.css";
import { Chatbot } from "@/components/ui/Chatbot";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

export const metadata: Metadata = {
  title: "MSN Global Markets",
  description: "AI-Driven Asset Management using Advanced Agentic Trading Strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${lexend.variable} font-sans antialiased`}>
        <Chatbot />
        {children}
      </body>
    </html>
  );
}
