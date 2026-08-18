"use client";

import { Lock, ShieldCheck, FileText } from "lucide-react";

const principles = [
  {
    title: "Controlled Access",
    description: "Only authorized personnel can access case information.",
    icon: Lock,
  },
  {
    title: "Evidence Integrity",
    description: "Original evidence is handled carefully and changes are tracked.",
    icon: ShieldCheck,
  },
  {
    title: "Clear Reporting",
    description: "You receive understandable results instead of a confusing technical dump.",
    icon: FileText,
  },
];

export function DualconXDataControl() {
  return (
    <section className="py-24 bg-card/30 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-primary/10 border border-primary/20 text-primary font-mono text-[10px] font-bold uppercase tracking-widest mb-6">
            <Lock className="w-3 h-3" />
            Data Protocol
          </div>
          <h2 className="text-3xl lg:text-5xl font-headline font-bold mb-6">Your Evidence Stays Under Control</h2>
          <p className="text-muted-foreground text-lg font-body">
            What happens to your data? We maintain strict chain-of-custody protocols throughout the entire forensic investigation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {principles.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center p-8 rounded-xl bg-background border border-border hover:border-primary/40 transition-colors duration-200 group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-200 mb-6">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-headline font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
