"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ShieldCheck, Activity } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

// Floating card data
const floatingCards = [
  { id: 1, title: "CASE ANALYSIS", text: "Evidence detected", top: "15%", left: "10%", delay: 2 },
  { id: 2, title: "TRANSACTION TRACE", text: "12 linked records", top: "60%", left: "70%", delay: 6 },
  { id: 3, title: "RECOVERY STATUS", text: "Assessment complete", top: "30%", left: "75%", delay: 10 },
];

export function DualconXHero() {
  const [bgImage, setBgImage] = useState<string>("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80");
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the parallax effect
  const springConfig = { damping: 25, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax transforms
  const bgShiftX = useTransform(smoothX, [-1, 1], [-10, 10]);
  const bgShiftY = useTransform(smoothY, [-1, 1], [-10, 10]);
  
  const nodesShiftX = useTransform(smoothX, [-1, 1], [-20, 20]);
  const nodesShiftY = useTransform(smoothY, [-1, 1], [-20, 20]);

  const contentShiftX = useTransform(smoothX, [-1, 1], [15, -15]);
  const contentShiftY = useTransform(smoothY, [-1, 1], [15, -15]);

  // Spotlight position
  const spotlightX = useTransform(smoothX, [-1, 1], ["0%", "100%"]);
  const spotlightY = useTransform(smoothY, [-1, 1], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Normalize to -1 to 1 range
    const x = (clientX / innerWidth) * 2 - 1;
    const y = (clientY / innerHeight) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  useEffect(() => {
    // Fetch hero background from admin trust assets
    const fetchHeroImage = async () => {
      const { data, error } = await supabase
        .from("operational_proofs")
        .select("image_url")
        .eq("asset_key", "hero-bg")
        .single();
      
      if (!error && data?.image_url) {
        setBgImage(data.image_url);
      }
    };
    fetchHeroImage();
  }, []);

  // Card rotation logic
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setActiveCard(floatingCards[index].id);
      index = (index + 1) % floatingCards.length;
    }, 4000); // Change card every 4 seconds
    
    // Initial card
    setActiveCard(floatingCards[0].id);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-background min-h-[90vh] flex items-center pt-20 pb-24"
    >
      {/* Spotlight that follows cursor */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-screen"
        style={{
          background: "radial-gradient(circle at center, rgba(34,211,238,0.15) 0%, transparent 40%)",
          left: useTransform(smoothX, [-1, 1], ["-20%", "20%"]),
          top: useTransform(smoothY, [-1, 1], ["-20%", "20%"]),
        }}
      />

      {/* LAYER 1: Background Image with Cinematic Pan/Zoom + Parallax */}
      <motion.div 
        className="absolute inset-[-5%] z-0"
        style={{ x: bgShiftX, y: bgShiftY }}
      >
        <motion.div 
          className="w-full h-full opacity-40 mix-blend-luminosity"
          initial={{ scale: 1, x: "0%" }}
          animate={{ scale: 1.08, x: "-2%" }}
          transition={{ duration: 30, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          style={{
            backgroundImage: `url('${bgImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </motion.div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background via-background/90 to-background/60 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/40 via-transparent to-background pointer-events-none" />

      {/* LAYER 2: Evidence Nodes with Parallax */}
      <motion.div 
        className="absolute inset-[-10%] z-0 pointer-events-none opacity-30"
        style={{ x: nodesShiftX, y: nodesShiftY }}
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Static thin lines representing connections */}
          <path d="M 100 200 L 300 150 L 500 300 L 800 250 L 1200 400" stroke="rgba(34,211,238,0.3)" strokeWidth="1" fill="none" />
          <path d="M 200 500 L 400 400 L 600 600 L 1000 500" stroke="rgba(34,211,238,0.2)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
          <path d="M 700 100 L 900 200 L 1100 150" stroke="rgba(34,211,238,0.2)" strokeWidth="1" fill="none" />
        </svg>

        {/* Pulsing Nodes */}
        {[
          { top: "200px", left: "100px", delay: 0 },
          { top: "150px", left: "300px", delay: 1 },
          { top: "300px", left: "500px", delay: 2 },
          { top: "250px", left: "800px", delay: 1.5 },
          { top: "400px", left: "1200px", delay: 0.5 },
          { top: "500px", left: "200px", delay: 2.5 },
          { top: "400px", left: "400px", delay: 0.8 },
          { top: "600px", left: "600px", delay: 1.2 },
        ].map((node, i) => (
          <div key={i} className="absolute" style={{ top: node.top, left: node.left }}>
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-cyan-400"
              animate={{
                boxShadow: ["0 0 0px rgba(34,211,238,0)", "0 0 15px rgba(34,211,238,0.8)", "0 0 0px rgba(34,211,238,0)"],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: node.delay }}
            />
          </div>
        ))}
      </motion.div>

      {/* LAYER 3: Data Scan Line */}
      <motion.div
        className="absolute left-0 right-0 h-[2px] bg-cyan-500/50 z-0 pointer-events-none shadow-[0_0_20px_rgba(34,211,238,0.6)]"
        initial={{ top: "-10%", opacity: 0 }}
        animate={{ top: "110%", opacity: [0, 1, 1, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
      />

      {/* LAYER 4: Intelligence Cards with inverse parallax */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none hidden md:block"
        style={{ x: contentShiftX, y: contentShiftY }}
      >
        <AnimatePresence>
          {floatingCards.map((card) => (
            activeCard === card.id && (
              <motion.div
                key={card.id}
                className="absolute bg-black/60 border border-cyan-500/30 backdrop-blur-md px-4 py-3 rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.1)]"
                style={{ top: card.top, left: card.left }}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-1">{card.title}</div>
                <div className="text-xs font-bold text-white flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  {card.text}
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </motion.div>

      {/* CONTENT LAYER */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-start pt-10 pointer-events-none">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl pointer-events-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-mono font-semibold mb-8 uppercase tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            CASE ANALYSIS • ACTIVE
          </div>

          <h1 className="text-5xl md:text-7xl font-headline font-bold leading-[1.1] mb-6 tracking-tight text-white drop-shadow-lg">
            Recover Your Lost<br />
            <span className="text-cyan-400">Digital Assets.</span>
          </h1>

          <p className="text-xl md:text-2xl font-semibold mb-6 text-white/90 font-headline drop-shadow-md">
            Lost access doesn't always mean lost forever.
          </p>

          <p className="text-white/70 text-lg mb-10 max-w-lg font-body leading-relaxed drop-shadow">
            DualconX provides professional digital forensics and recovery for inaccessible wallets, damaged devices, lost credentials, and critical digital data.
          </p>

          {/* Trust bullets */}
          <div className="mb-12 space-y-4 text-sm font-medium text-white/90">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" />
              <span className="drop-shadow-sm">No Upfront Fees*</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" />
              <span className="drop-shadow-sm">Confidential Case Intake</span>
            </div>
            <div className="flex items-center gap-3">
              <Activity className="w-5 h-5 text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" />
              <span className="drop-shadow-sm">Professional Assessment</span>
            </div>
          </div>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row gap-5">
            <Button size="lg" asChild className="h-14 px-8 text-lg font-bold shadow-[0_0_20px_rgba(34,211,238,0.3)] bg-cyan-500 text-black hover:bg-cyan-400 transition-all hover:scale-105 border border-cyan-400">
              <Link href="#request">
                Request a Case Assessment <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-14 px-8 text-lg font-semibold border-white/20 bg-black/40 backdrop-blur-md hover:bg-white/10 hover:border-cyan-500/50 text-white">
              <Link href="#process">
                Explore the Process
              </Link>
            </Button>
          </div>

          {/* Trust tagline */}
          <div className="mt-10 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-white/50">
            <span>Private</span>
            <span className="w-1 h-1 rounded-full bg-cyan-500/50" />
            <span>Controlled</span>
            <span className="w-1 h-1 rounded-full bg-cyan-500/50" />
            <span>Traceable</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
