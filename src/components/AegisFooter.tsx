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
      {/* Command Centre CTA */}
      <div className="relative overflow-hidden py-20 mb-20 border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-accent/[0.04] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Intake Available
            </div>
            <h3 className="text-3xl lg:text-4xl font-headline font-bold mb-4">Have a Digital Evidence Problem?</h3>
            <p className="text-muted-foreground text-lg mb-3 max-w-xl mx-auto">
              Start with the facts. Tell DualconX what happened, and we&apos;ll help determine the right path forward.
            </p>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground/50 mb-10">
              Secure Intake &nbsp;·&nbsp; Clear Communication &nbsp;·&nbsp; Verified Results
            </p>
            <Button size="lg" asChild className="h-14 px-10 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105">
              <Link href="#request">
                Open a Case <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] -z-10" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
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
            <p className="text-muted-foreground leading-relaxed">
              Global leaders in professional cryptocurrency and digital asset recovery services. Trusted by individuals and institutional investors worldwide.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Budapest Obuda Gate, Arpad Fejedelem Utja 26-28, 5th Floor, Budapest, Hungary 1023</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <Building className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>DualconX Systems Ltd. | Reg #HE-45293-C1</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="#services" className="hover:text-primary transition-colors">Forensic Capabilities</Link></li>
              <li><Link href="#process" className="hover:text-primary transition-colors">Case Process</Link></li>
              <li><Link href="#blog" className="hover:text-primary transition-colors">DualconX Knowledge Hub</Link></li>
              <li><Link href="#request" className="hover:text-primary transition-colors">Open a Case</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Talk to DualconX</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Compliance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Join our Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-4">Get the latest security alerts and crypto protection tips delivered to your inbox.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 bg-background border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">
                Join
              </button>
            </form>
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
