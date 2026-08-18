"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle2, ShieldCheck, Activity, BarChart3 } from "lucide-react";
import Link from "next/link";

export function DualconXHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-24 lg:pt-32 lg:pb-40 hero-glow">
      {/* Subtle radial tint at top for depth */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-primary/[0.03] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT - Conversion Focus (Royal Gold) */}
        <motion.div 
          className="z-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
            </span>
            Case Intake Active
          </div>

          <h1 className="text-4xl md:text-6xl font-headline font-bold leading-tight mb-6">
            DualconX <span className="text-primary">Forensics</span><br />
            <span className="text-muted-foreground text-3xl md:text-4xl font-medium">
              Recover Assets from Investment Scams, Bad Brokers, Trading & Romance Scams
            </span>
          </h1>

          <p className="text-muted-foreground text-lg mb-8 max-w-lg font-body leading-relaxed">
            We scan for evidence, trace what happened, and restore what can be safely reclaimed.
            Free scan assessment within 24 hours. Confidential case intake.
          </p>

          {/* Trust bullets */}
          <div className="mb-10 space-y-3 text-sm font-medium">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 shadow-[0_0_5px_rgba(34,197,94,0.3)]" />
              <span>Priority case review in 24 hours</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-primary shadow-[0_0_5px_rgba(245,158,11,0.3)]" />
              <span>Swiss-standard data confidentiality</span>
            </div>
            <div className="flex items-center gap-3">
              <BarChart3 className="w-5 h-5 text-accent shadow-[0_0_5px_rgba(34,211,238,0.3)]" />
              <span className="text-accent font-bold">Heuristic probability assessment</span>
            </div>
          </div>

          {/* CTA Group - Action Color (Gold) */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="h-14 px-8 text-lg font-bold btn-glow-action bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105">
              <Link href="#request">
                Open a Case <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-primary/50">
              <Play className="mr-2 w-5 h-5 fill-current" /> Check Your Device
            </Button>
          </div>
        </motion.div>

        {/* RIGHT SIDE - Investigation Timeline */}
        <motion.div 
          className="relative h-[400px] lg:h-[500px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="w-full max-w-sm relative p-8 py-12 rounded-xl bg-card border border-border overflow-hidden">
            
            <div className="text-center mb-10">
              <div className="inline-block px-4 py-1.5 rounded bg-primary/10 border border-primary/20 text-primary font-mono text-xs font-bold uppercase tracking-widest">
                CASE DCX-20481
              </div>
            </div>

            <div className="relative">
              {/* Timeline Track */}
              <div className="absolute top-2 bottom-2 left-[9px] w-[2px] bg-white/10">
                <motion.div 
                  className="absolute w-full bg-gradient-to-b from-primary/0 via-primary to-primary/0"
                  initial={{ top: "-20%", height: "20%" }}
                  animate={{ top: "100%" }}
                  transition={{ duration: 2.5, ease: "linear", repeat: Infinity }}
                />
              </div>

              {/* Timeline Steps */}
              <div className="space-y-8 relative z-10">
                {[
                  { text: "DEVICE DETECTED", highlight: false },
                  { text: "EVIDENCE SCANNED", highlight: false },
                  { text: "87 FILES IDENTIFIED", highlight: true },
                  { text: "12 DAMAGED FILES", highlight: true, alert: true },
                  { text: "RESTORATION VERIFIED", highlight: false, success: true }
                ].map((step, i) => (
                  <motion.div 
                    key={i} 
                    className="relative flex items-center pl-10"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (i * 0.3) }}
                  >
                    {/* Node */}
                    <div className={`absolute left-[10px] -translate-x-1/2 w-3 h-3 rounded-full border-2 flex items-center justify-center bg-background ${step.success ? 'border-green-500' : step.alert ? 'border-destructive' : 'border-primary'}`}>
                      <motion.div 
                        className={`w-1 h-1 rounded-full ${step.success ? 'bg-green-500' : step.alert ? 'bg-destructive' : 'bg-primary'}`}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      />
                    </div>
                    {/* Text */}
                    <div className={`font-mono text-xs sm:text-sm uppercase tracking-widest font-bold ${step.success ? 'text-green-500' : step.alert ? 'text-destructive' : step.highlight ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {step.text}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
