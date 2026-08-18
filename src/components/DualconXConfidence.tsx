"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Activity } from "lucide-react";

export function DualconXConfidence() {
  const scores = [
    { label: "Documents", score: 96 },
    { label: "Images", score: 91 },
    { label: "Videos", score: 74 },
    { label: "System Data", score: 62 },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-accent/10 border border-accent/20 text-accent font-mono text-[10px] font-bold uppercase tracking-widest mb-6">
              <Activity className="w-3 h-3" />
              Signature Feature
            </div>
            <h2 className="text-3xl lg:text-5xl font-headline font-bold mb-6">Evidence Confidence</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Every restoration result is rigorously assessed. We don't just hand over raw files—you receive a detailed confidence score so you know exactly what was recovered and how reliable the forensic scan was.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/90 font-medium">Granular integrity scoring for different file types.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/90 font-medium">Mathematical probability of sector-level corruption.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/90 font-medium">Transparent reporting suitable for legal proceedings.</span>
              </li>
            </ul>
          </div>

          {/* Right: Visual Component */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-card border border-border rounded-xl p-8">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                <div>
                  <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-2">Case Report</div>
                  <div className="text-2xl font-headline font-bold text-foreground flex items-center gap-3">
                    <span className="text-accent font-mono">87%</span> Recovery Confidence
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-dashed border-accent/30 flex items-center justify-center animate-[spin_8s_linear_infinite]">
                  <ShieldCheck className="w-5 h-5 text-accent animate-[spin_8s_linear_infinite_reverse]" />
                </div>
              </div>

              {/* Progress bar simulation for total */}
              <div className="mb-10 flex gap-1">
                {Array.from({ length: 40 }).map((_, col) => {
                  const threshold = (87 / 100) * 40;
                  const isFilled = col < threshold;
                  return (
                    <motion.div 
                      key={col}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: col * 0.02 }}
                      className={`h-3 flex-1 rounded-[1px] ${isFilled ? 'bg-primary' : 'bg-white/5'}`}
                    />
                  )
                })}
              </div>

              {/* Granular Scores */}
              <div className="space-y-5 bg-black/20 rounded-xl p-6 border border-border">
                {scores.map((item, i) => (
                  <motion.div 
                    key={item.label} 
                    className="flex items-center justify-between font-mono text-xs sm:text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                  >
                    <span className="text-muted-foreground w-28 uppercase tracking-wider">{item.label}</span>
                    
                    <div className="flex-1 mx-4 flex items-center gap-1">
                      {Array.from({ length: 20 }).map((_, col) => {
                        const threshold = (item.score / 100) * 20;
                        const isFilled = col < threshold;
                        return (
                          <div 
                            key={col}
                            className={`h-1.5 flex-1 rounded-[1px] ${isFilled ? (item.score > 90 ? 'bg-green-500' : item.score > 70 ? 'bg-accent' : 'bg-amber-500') : 'bg-white/5'}`}
                          />
                        )
                      })}
                    </div>

                    <span className="font-bold w-10 text-right">{item.score}%</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
