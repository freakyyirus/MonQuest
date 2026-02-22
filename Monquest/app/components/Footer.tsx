"use client";

import Link from "next/link";
import { Brain, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-brand-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Brain className="h-4 w-4 text-primary" />
              <span className="font-semibold text-sm text-primary tracking-tight">Monquest</span>
            </div>
            <p className="text-xs text-primary/60 max-w-xs leading-relaxed">
              AI-powered bounty platform built on Monad. <br />
              Post tasks, get results, pay instantly.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <p className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.1em] mb-4">Platform</p>
              <div className="flex flex-col gap-2.5">
                <Link href="/bounties" className="text-xs font-medium text-primary/70 hover:text-primary transition-colors">Explore</Link>
                <Link href="/create" className="text-xs font-medium text-primary/70 hover:text-primary transition-colors">Create Bounty</Link>
                <Link href="/profile" className="text-xs font-medium text-primary/70 hover:text-primary transition-colors">Profile</Link>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.1em] mb-4">Resources</p>
              <div className="flex flex-col gap-2.5">
                <Link
                  href="https://github.com/freakyyirus/Monquest"
                  target="_blank"
                  className="text-xs font-medium text-primary/70 hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <Github className="h-3 w-3" />
                  GitHub
                </Link>
                <Link href="https://monad.xyz" target="_blank" className="text-xs font-medium text-primary/70 hover:text-primary transition-colors">Monad</Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-brand-border flex items-center justify-between">
          <p className="text-[10px] font-medium text-primary/40 tracking-tight">© 2025 Monquest. Built on Monad.</p>
          <p className="text-[10px] font-medium text-primary/40 tracking-tight">Powered by x402</p>
        </div>
      </div>
    </footer>
  );
}
