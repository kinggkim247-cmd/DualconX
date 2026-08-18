"use client";

import { useState } from "react";
import { FileText, HardDrive, Search, Database, ArrowRight, Info, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Link from "next/link";

const services = [
  {
    id: "files",
    title: "Files",
    description: "Documents, photos, videos and other files.",
    icon: FileText,
    content: "Our advanced file carving techniques allow us to extract damaged, deleted, or corrupted files from almost any storage medium. We prioritize the integrity of the original data to ensure the recovered files are perfectly intact and ready for analysis.",
  },
  {
    id: "devices",
    title: "Devices",
    description: "Storage media, computers and mobile devices.",
    icon: HardDrive,
    content: "From physically damaged hard drives to logic-locked mobile devices, our hardware lab provides the cleanroom environment and proprietary firmware tools required to directly interface with and extract data from failing components.",
  },
  {
    id: "evidence",
    title: "Evidence",
    description: "Deleted, damaged or hidden digital information.",
    icon: Search,
    content: "We uncover the digital footprint of malicious activity. By locating hidden partitions, tracing encrypted vaults, and analyzing unallocated space, we surface the critical evidence that standard recovery tools often miss.",
  },
  {
    id: "records",
    title: "Records",
    description: "Important system and activity data.",
    icon: Database,
    content: "System logs, activity records, and database shards provide the context needed for investigations. We extract and reconstruct these fragmented records to piece together timelines and prove exactly what happened on the device.",
  },
];

export function DualconXServices() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-24 bg-card/50 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-headline font-bold mb-6">What We Can Recover</h2>
          <p className="text-muted-foreground text-lg">
            We specialize in extracting and restoring critical information across four primary categories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className="bg-background border border-border rounded-xl group hover:border-primary/40 cursor-pointer transition-colors duration-200"
              onClick={() => setSelectedService(service)}
            >
              <CardHeader>
                <div className="p-2.5 w-fit rounded-lg bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl font-headline group-hover:text-accent transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3 text-sm">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all">
                  Explore Recovery <ArrowRight className="w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4">
          <Button size="lg" asChild className="px-10 h-14 text-lg font-bold btn-glow-action bg-primary hover:bg-primary/90 transition-all hover:scale-105">
            <Link href="#request">
              Start a Case <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground font-medium flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent" />
            Confidential review • No upfront fees for scams
          </p>
        </div>
      </div>

      {/* Service Details Dialog */}
      <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent className="max-w-2xl bg-card border border-border text-foreground overflow-y-auto max-h-[90vh] rounded-xl">
          {selectedService && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest mb-2">
                  <selectedService.icon className="w-4 h-4" />
                  Professional Service Insight
                </div>
                <DialogTitle className="text-2xl lg:text-3xl font-headline font-bold leading-tight">
                  {selectedService.title} Guidance
                </DialogTitle>
                <DialogDescription className="text-muted-foreground text-base mt-2">
                  Professional technical methodology and restoration roadmap.
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-6 space-y-6">
                <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
                      <Info className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Our Technical Approach</h4>
                      <p className="text-foreground/90 leading-relaxed">
                        {selectedService.content}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-accent font-bold text-[10px] uppercase tracking-widest mb-1">Standard Timeframe</div>
                    <div className="text-sm font-semibold">3–7 Business Days</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-accent font-bold text-[10px] uppercase tracking-widest mb-1">Success Rate</div>
                    <div className="text-sm font-semibold">94% Verified Restoration</div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-muted-foreground flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-green-500" />
                    Institutional Grade Forensic Protocol
                  </div>
                  <Button onClick={() => setSelectedService(null)} variant="secondary" className="w-full sm:w-auto">
                    Return to Evidence Overview
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
