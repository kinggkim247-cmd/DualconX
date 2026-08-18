"use client";

import Link from "next/link";
import { Shield, Twitter, Facebook, Linkedin, Github, MapPin, Building, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useBrandLogo } from "@/hooks/useBrandLogo";

export function AegisFooter() {
  const [year, setYear] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const logoUrl = useBrandLogo();

  useEffect(() => {
    setYear(new Date().getFullYear());
    setMounted(true);
  }, []);

  return (
    <footer className="bg-card/50 border-t border-white/5 pt-0 pb-10">
      <div className="container mx-auto px-4 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Column 1 — DualconX */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              {logoUrl ? (
                <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-primary/5 border border-white/5">
                  <Image src={logoUrl} alt="DualconX Logo" fill className="object-contain p-1" unoptimized />
                </div>
              ) : (
                <Shield className="w-8 h-8 text-primary" />
              )}
              <span className="font-headline text-2xl font-bold">
                <span className="text-white">DUAL</span><span className="text-primary">CON</span><span className="text-accent">X</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Digital forensics and recovery for people, organizations, and critical digital evidence.
            </p>
            <div className="flex flex-col gap-2 text-[11px] font-bold text-foreground/80 uppercase tracking-widest mt-4">
              <span className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-primary" /> Secure Intake</span>
              <span className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-primary" /> Case-Based Support</span>
            </div>
          </div>

          {/* Column 2 — CAPABILITIES */}
          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase mb-6 text-foreground/90">Capabilities</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#services" className="hover:text-primary transition-colors">Digital Forensics</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Data Recovery</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Device Analysis</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Evidence Review</Link></li>
              <li><Link href="#process" className="hover:text-primary transition-colors">Case Process</Link></li>
              <li><Link href="#blog" className="hover:text-primary transition-colors">Knowledge Hub</Link></li>
            </ul>
          </div>

          {/* Column 3 — INFORMATION */}
          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase mb-6 text-foreground/90">Information</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Security</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Responsible Disclosure</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4 — DUALCONX BRIEF */}
          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase mb-6 text-foreground/90">DualconX Brief</h4>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 pr-4">
              Forensic insights, recovery guidance, and digital security research.
            </p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-background border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors w-full"
              />
              <button className="bg-primary text-white rounded-lg px-4 py-2.5 text-sm font-bold hover:bg-primary/90 transition-colors w-full">
                Subscribe →
              </button>
            </form>
          </div>

          {/* Column 5 — CASE DESK */}
          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase mb-6 text-foreground/90 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Case Desk
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 pr-4">
              Have a device, data, or digital evidence issue?
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Start with the facts.
            </p>
            <Button size="lg" asChild className="w-full bg-primary hover:bg-primary/90 font-bold transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              <Link href="#request">
                Open a Case <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>© 2020-{mounted ? year : '...'} DualconX Recovery Systems. All rights reserved.</div>
          <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
            <span>● Secure Intake</span>
            <span>● Case Tracking</span>
            <span>● Evidence Reporting</span>
            <span>● Controlled Access</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
