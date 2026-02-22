"use client";

import { Brain, Zap, Globe, Shield } from "lucide-react";

const features = [
    {
        icon: Brain,
        color: "text-purple-500",
        bg: "bg-purple-50",
        title: "AI-Powered Verification",
        description: "Gemini AI automatically reviews all submissions, provides feedback, and picks the best work — saving hours of manual review.",
    },
    {
        icon: Zap,
        color: "text-blue-500",
        bg: "bg-blue-50",
        title: "Instant Settlement",
        description: "Built on Monad's EVM-compatible blockchain with near-instant finality. Prize payouts happen directly wallet-to-wallet.",
    },
    {
        icon: Globe,
        color: "text-green-500",
        bg: "bg-green-50",
        title: "Global Talent Pool",
        description: "Access skilled developers, designers, and creators worldwide. No borders, no middlemen, just results.",
    },
    {
        icon: Shield,
        color: "text-orange-500",
        bg: "bg-orange-50",
        title: "Trustless & Secure",
        description: "x402 payment protocol ensures skin-in-the-game. Every transaction is transparent and verifiable on-chain.",
    },
];

export default function CarbonFeatures() {
    return (
        <section className="w-full py-24">
            <div className="max-w-6xl mx-auto px-6">

                {/* Section Header */}
                <div className="mb-20">
                    <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-4">Core Capabilities</p>
                    <h2 className="text-4xl font-medium text-primary tracking-tight max-w-xl leading-tight">
                        Engineered for High-Trust <br />Digital Transactions.
                    </h2>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-1 bg-brand-border border border-brand-border">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className="bg-brand-paper p-10 hover:bg-white transition-colors cursor-default border-none"
                        >
                            <div className="mb-8">
                                <feature.icon className="h-5 w-5 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold text-primary mb-3 tracking-tight">{feature.title}</h3>
                            <p className="text-xs font-medium text-primary/50 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
