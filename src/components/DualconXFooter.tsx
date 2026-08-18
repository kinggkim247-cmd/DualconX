"use client";

import Link from "next/link";
import { Twitter, Facebook, Linkedin, Github, MapPin, Building, ArrowRight, ShieldCheck, Scale, Lock, FileText, AlertTriangle } from "lucide-react";
import { DualconXLogoMark } from "@/components/DualconXLogo";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useBrandLogo } from "@/hooks/useBrandLogo";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const legalDocs = {
  engagement: {
    title: "Terms of Forensic Engagement",
    icon: Scale,
    description: "Official protocols governing the laboratory's relationship with private and institutional clients.",
    content: `
      **1. Scope of Investigation**
      DualconX Forensics provides digital evidence tracing and heuristic probability assessments. We do not guarantee restoration but provide the technical evidence required for reclamation.

      **2. Client Obligations**
      Clients must provide accurate Transaction IDs (TXIDs), wallet addresses, and chronological event logs. Failure to provide validated data may result in case suspension.

      **3. Fee Structure**
      For qualifying fraud cases, the laboratory operates on a performance-aligned model. Initial assessments are complimentary. Specific forensic cycles may require resource allocation fees which are disclosed prior to initiation.

      **4. Liability**
      DualconX acts as a forensic consultant. Final asset reclamation is subject to the cooperation of Virtual Asset Service Providers (VASPs) and law enforcement jurisdictions.
    `
  },
  privacy: {
    title: "Data Privacy Policy",
    icon: Lock,
    description: "Enterprise-grade data isolation and encryption protocols for case integrity.",
    content: `
      **1. Data Isolation**
      All submitted intake data is isolated on encrypted servers based in Budapest, Hungary. We utilize RSA-4096 encryption for sensitive diagnostic files.

      **2. Retention Policy**
      Diagnostic data is retained for the duration of the investigation plus 90 days for audit purposes, after which it is purged from our primary forensic clusters unless legal holds are in place.

      **3. Third-Party Sharing**
      We do not sell data. We only share sanitized forensic reports with verified legal partners or exchange compliance teams upon explicit client authorization.

      **4. Data Security**
      Our infrastructure adheres to enterprise data security standards, ensuring strict internal controls over data access and network security.
    `
  },
  compliance: {
    title: "Regulatory Compliance",
    icon: ShieldCheck,
    description: "International standards and institutional certifications of the DualconX Laboratory.",
    content: `
      **1. Registration**
      DualconX Forensic Systems Ltd. is registered and operates in compliance with the digital asset and data protection regulations applicable in Hungary and the European Union.

      **2. Information Security**
      The laboratory maintains enterprise-grade information security management practices, ensuring global standard protection for all case data.

      **3. VASP Cooperation**
      We maintain communication channels with Tier-1 exchanges. Our forensic reports are formatted to satisfy international AML (Anti-Money Laundering) and KYC (Know Your Customer) requirements.

      **4. Forensic Integrity**
      Our lead analysts are trained in blockchain intelligence and follow internationally recognized digital evidence gathering protocols.
    `
  },
  conflict: {
    title: "Conflict of Interest",
    icon: AlertTriangle,
    description: "Transparency protocols ensuring unbiased forensic reporting.",
    content: `
      **1. Neutrality Protocol**
      DualconX maintain strict independence from exchanges and DeFi protocols. Our findings are based solely on on-chain heuristics and forensic evidence.

      **2. Case Screening**
      Every intake undergoes an automated conflict-of-interest check. We do not accept cases where the laboratory has a prior or existing investigation into the target entity that could compromise report objectivity.

      **3. Disclosure**
      If a conflict is identified during an active investigation, the client will be notified immediately, and the file will be transferred to a neutral partner node within the International Cyber Forensics Consortium.
    `
  }
};

const TechnicalRenderer = ({ text }: { text: string }) => (
  <div className="space-y-4">
    {text.split('\n\n').map((p, idx) => (
      <p key={idx} className="text-sm text-foreground/80 leading-relaxed">
        {p.split(/(\*\*.*?\*\*)/).map((part, pIdx) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={pIdx} className="text-foreground">{part.slice(2, -2)}</strong>;
          }
          return part;
        })}
      </p>
    ))}
  </div>
);

export function DualconXFooter() {
  const [year, setYear] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const logoUrl = useBrandLogo();
  const [selectedDoc, setSelectedDoc] = useState<keyof typeof legalDocs | null>(null);

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
            <Link href="/" className="flex items-center gap-3 group">
              {logoUrl ? (
                <div className="relative w-8 h-8 rounded bg-primary/10 overflow-hidden">
                  <Image src={logoUrl} alt="Logo" fill className="object-contain p-1" unoptimized />
                </div>
              ) : (
                <DualconXLogoMark size={28} />
              )}
              <div className="flex flex-col leading-none">
                <span className="font-headline text-xl font-bold">
                  <span className="text-white">DUAL</span><span className="text-primary">CON</span><span className="text-accent">X</span>
                </span>
                <span className="text-[8px] text-muted-foreground font-mono uppercase tracking-[0.18em] mt-1">
                  Digital Forensics &amp; Recovery
                </span>
              </div>
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
              <li>
                <button 
                  onClick={() => setSelectedDoc('privacy')}
                  className="hover:text-primary transition-colors text-left"
                >
                  Privacy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setSelectedDoc('engagement')}
                  className="hover:text-primary transition-colors text-left"
                >
                  Terms
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setSelectedDoc('compliance')}
                  className="hover:text-primary transition-colors text-left"
                >
                  Security
                </button>
              </li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Responsible Disclosure</Link></li>
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
          <div>© 2020-{mounted ? year : '...'} DualconX Forensics &amp; Evidence Labs. All rights reserved.</div>
          <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
            <span>● Secure Intake</span>
            <span>● Case Tracking</span>
            <span>● Evidence Reporting</span>
            <span>● Controlled Access</span>
          </div>
        </div>
      </div>

      <Dialog open={!!selectedDoc} onOpenChange={(open) => !open && setSelectedDoc(null)}>
        <DialogContent className="max-w-2xl bg-card border-white/10 text-foreground overflow-y-auto max-h-[90vh]">
          {selectedDoc && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest mb-2">
                  {(() => {
                    const Icon = legalDocs[selectedDoc].icon;
                    return <Icon className="w-4 h-4" />;
                  })()}
                  Laboratory Document
                </div>
                <DialogTitle className="text-2xl font-headline font-bold">
                  {legalDocs[selectedDoc].title}
                </DialogTitle>
                <DialogTitle className="sr-only">Access institutional legal documentation and compliance policies.</DialogTitle>
                <DialogDescription className="text-xs text-muted-foreground mt-2 italic">
                  {legalDocs[selectedDoc].description}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-8">
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                  <TechnicalRenderer text={legalDocs[selectedDoc].content} />
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-[10px] text-muted-foreground italic flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                  Authorized Forensic Protocol | Budapest, Hungary
                </div>
                <Button onClick={() => setSelectedDoc(null)} variant="secondary" className="w-full sm:w-auto">
                  Close Document
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </footer>
  );
}
