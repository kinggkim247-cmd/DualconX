import { DualconXNavbar } from "@/components/DualconXNavbar";
import { DualconXHero } from "@/components/DualconXHero";
import { DualconXProofLayer } from "@/components/DualconXProofLayer";
import { DualconXServices } from "@/components/DualconXServices";
import { DualconXConfidence } from "@/components/DualconXConfidence";
import { DualconXMethodology } from "@/components/DualconXMethodology";
import { DualconXSteps } from "@/components/DualconXSteps";
import { DualconXDataControl } from "@/components/DualconXDataControl";
import { DualconXTrustStrip } from "@/components/DualconXTrustStrip";
import { DualconXRecoveryForm } from "@/components/DualconXRecoveryForm";
import { DualconXTestimonials } from "@/components/DualconXTestimonials";
import { DualconXKnowledgeHub } from "@/components/DualconXKnowledgeHub";
import { DualconXContact } from "@/components/DualconXContact";
import { DualconXFooter } from "@/components/DualconXFooter";
import { DualconXStickyCTA } from "@/components/DualconXStickyCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <DualconXNavbar />
      <main>
        <DualconXHero />
        <DualconXProofLayer />
        <DualconXServices />
        <DualconXConfidence />
        <DualconXMethodology />
        <DualconXSteps />
        <DualconXDataControl />
        <DualconXTrustStrip />
        <DualconXRecoveryForm />
        <DualconXTestimonials />
        <DualconXKnowledgeHub />
        <DualconXContact />
      </main>
      <DualconXFooter />
      <DualconXStickyCTA />
    </div>
  );
}
