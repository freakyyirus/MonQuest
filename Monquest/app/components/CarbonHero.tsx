"use client";

import Link from "next/link";
import { ArrowRight, Shield, Zap, Users, Star } from "lucide-react";

export default function CarbonHero() {
    return (
        <section className="relative w-full pt-32 pb-24 border-b border-brand-border">
            <div className="max-w-6xl mx-auto px-6">

                {/* Hero Content */}
                <div className="max-w-4xl mb-20 animate-fade-in-up">
                    {/* Minimal status */}
                    <div className="flex items-center gap-3 text-[10px] font-bold text-accent uppercase tracking-widest mb-8">
                        <span className="h-1 w-1 bg-accent" />
                        Monad Testnet Protocol v1.0
                    </div>

                    {/* Headline */}
                    <h1 className="text-6xl sm:text-7xl lg:text-8xl font-medium tracking-tighter text-primary leading-[0.95] mb-8">
                        The Institutional Standard for <br />
                        <span className="text-primary/40 font-light italic">Digital Bounties.</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl text-primary/60 leading-relaxed max-w-2xl mb-12 font-medium">
                        A high-trust marketplace for technical tasks. <br />
                        AI-validated submissions. Instant on-chain settlement.
                    </p>

                    {/* CTAs */}
                    <div className="flex items-center gap-4">
                        <Link href="/bounties" className="btn-primary">
                            Explore Marketplace
                        </Link>
                        <Link href="/create" className="btn-secondary">
                            Post Directive
                        </Link>
                    </div>
                </div>

                {/* Data Strip */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-brand-border">
                    <div className="space-y-1">
                        <p className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">Network Authority</p>
                        <p className="text-xl font-semibold text-primary font-mono tracking-tighter">512 Registered Hunters</p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">Protocol Trust</p>
                        <p className="text-xl font-semibold text-primary font-mono tracking-tighter">4.92 Creator Rating</p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">Settlement Layer</p>
                        <p className="text-xl font-semibold text-primary font-mono tracking-tighter">Monad Parallel EVM</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
