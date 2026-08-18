"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function DualconXStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-[60] p-4 transition-all duration-500 transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      )}
    >
      <div className="container mx-auto max-w-3xl">
        <div className="bg-card/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
          {/* Top accent bar */}
          <div className="h-[2px] w-full bg-gradient-to-r from-primary via-accent to-primary/50" />
          <div className="p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-4">

            {/* Left: Label + status */}
            <div className="flex items-center gap-3">
              <div className="relative shrink-0">
                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="font-headline font-black text-primary text-sm leading-none">DX</span>
                </div>
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse-green shadow-[0_0_6px_rgba(34,197,94,0.9)]" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-black uppercase tracking-widest text-foreground leading-none mb-1">
                  DualconX Case Desk
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-semibold text-green-500 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_4px_rgba(34,197,94,0.7)]" />
                  Intake Available
                </div>
              </div>
            </div>

            {/* Centre: message (hidden on very small) */}
            <p className="hidden md:block text-xs text-muted-foreground flex-1 text-center px-4">
              Tell us what happened.{" "}
              <span className="text-foreground font-semibold">We&apos;ll determine the next step.</span>
            </p>

            {/* Right: CTA */}
            <Button
              size="sm"
              asChild
              className="shrink-0 h-11 px-7 gap-2 font-bold text-xs bg-primary text-primary-foreground shadow-lg shadow-primary/20 btn-glow-action"
            >
              <Link href="#request">
                Open a Case <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}