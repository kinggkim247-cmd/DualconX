import { ClipboardList, Search, Settings, CheckCircle, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const steps = [
  {
    title: "Intake",
    description: "Capture the situation, device details, and recovery objectives.",
    benefit: "Phase 01",
    icon: ClipboardList,
  },
  {
    title: "Examine",
    description: "Identify available data, damage, and relevant evidence.",
    benefit: "Phase 02",
    icon: Search,
  },
  {
    title: "Recover",
    description: "Restore accessible information while preserving the original evidence.",
    benefit: "Phase 03",
    icon: Settings,
  },
  {
    title: "Verify",
    description: "Review recovered results and document what was found.",
    benefit: "Phase 04",
    icon: CheckCircle,
  },
];

export function DualconXSteps() {
  return (
    <section id="process" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl lg:text-5xl font-headline font-bold mb-6">From Incident to Evidence</h2>
          <p className="text-muted-foreground text-lg">
            A structured process designed to keep every stage understandable, controlled, and accountable.
          </p>
        </div>

        <div className="relative mb-20">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, idx) => (
              <div key={step.title} className="flex flex-col items-center text-center relative group">
                <div className="w-16 h-16 rounded-xl bg-background border border-border flex items-center justify-center mb-6 relative group-hover:border-primary/50 transition-colors">
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-md bg-primary text-background text-[10px] font-bold font-mono flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-headline font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm max-w-[240px] leading-relaxed mb-4 font-body">
                  {step.description}
                </p>
                <div className="px-2.5 py-1 rounded bg-primary/10 border border-primary/20 text-[10px] font-mono font-bold text-primary uppercase tracking-wider">{step.benefit}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm font-body font-medium">
                <strong className="text-foreground">Average Resolution Time:</strong> Most cases are fully resolved within 3–14 business days.
              </span>
            </div>
            <p className="mt-4 text-xs text-muted-foreground italic font-body">
              *Complex multi-jurisdictional cases may require additional forensic scan cycles.
            </p>
          </div>

          <Button size="lg" asChild className="px-10 h-14 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105 font-body">
            <Link href="#request">
              Open a Case <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
