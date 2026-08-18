
"use client";

import { Network, Scale, Building2, Cpu, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

const methods = [
  {
    title: "Blockchain Intelligence",
    description: "We utilize enterprise-grade forensic software to de-anonymize transactions and map the flow of stolen assets across multiple hops and privacy mixers.",
    icon: Network,
    stats: "Supports 50+ Blockchains",
  },
  {
    title: "Legal Enforcement",
    description: "Our network of legal partners across 40+ jurisdictions allows us to move rapidly from digital identification to international asset freezing orders.",
    icon: Scale,
    stats: "40+ Legal Jurisdictions",
  },
  {
    title: "Exchange Cooperation",
    description: "DualconX maintains direct emergency communication channels with the security and compliance teams of the world's top 20 centralized exchanges.",
    icon: Building2,
    stats: "Direct CEX Access",
  },
  {
    title: "Computational Forensics",
    description: "For locked wallets, our dedicated high-performance GPU clusters execute multi-threaded cryptographic simulations to reclaim lost access.",
    icon: Cpu,
    stats: "1.2 Petahash Capability",
  },
];

export function DualconXMethodology() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
              <ShieldCheck className="w-3 h-3" />
              Technical Competence
            </div>
            <h2 className="text-4xl lg:text-6xl font-headline font-bold mb-6">Digital Evidence, Made Clear</h2>
            <p className="text-muted-foreground text-lg">
              Complex device problems shouldn't require complex explanations. DualconX turns digital investigations into a clear, guided process.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Lab Uptime</div>
                <div className="text-xl font-bold font-headline">99.9% Operational</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {methods.map((method) => (
            <div key={method.title} className="border border-border rounded-xl hover:border-primary/40 transition-colors duration-200 overflow-hidden">
              <div className="bg-card h-full p-8 lg:p-10 flex flex-col sm:flex-row gap-8 items-start">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-200">
                    <method.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold font-headline">{method.title}</h3>
                    <div className="text-[10px] font-bold text-primary/60 uppercase tracking-widest">{method.stats}</div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {method.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3 pt-2">
                    <li className="flex items-center gap-2 text-xs font-semibold text-foreground/80">
                      <CheckCircle2 className="w-3 h-3 text-primary" /> Verified Protocol
                    </li>
                    <li className="flex items-center gap-2 text-xs font-semibold text-foreground/80">
                      <CheckCircle2 className="w-3 h-3 text-primary" /> ISO Certified
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-50 hover:opacity-100 transition-all duration-700">
          <div className="flex items-center gap-2 font-bold text-sm tracking-tighter">
            <span className="text-primary text-lg">●</span> SECURE INTAKE
          </div>
          <div className="flex items-center gap-2 font-bold text-sm tracking-tighter">
            <span className="text-primary text-lg">●</span> CASE TRACKING
          </div>
          <div className="flex items-center gap-2 font-bold text-sm tracking-tighter">
            <span className="text-primary text-lg">●</span> EVIDENCE REPORTING
          </div>
          <div className="flex items-center gap-2 font-bold text-sm tracking-tighter">
            <span className="text-primary text-lg">●</span> CONTROLLED ACCESS
          </div>
        </div>
      </div>

    </section>
  );
}
