import { Mail, Clock, MapPin, CheckCircle2 } from "lucide-react";

const benefits = [
  "Industry-leading 94% success rate",
  "No-restoration, no-fee initial scan",
  "Military-grade data encryption",
  "Certified digital forensics experts",
  "24/7 Global response team",
];

export function DualconXContact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-5xl font-headline font-bold mb-8">Review a Case with a Specialist</h2>
            <p className="text-muted-foreground text-lg mb-10">
              Don't leave your digital evidence to chance. Speak with a specialist today and begin the restoration process through our secure case intake.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Email Us</div>
                  <div className="text-lg font-semibold">support@dualconx.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Hours</div>
                  <div className="text-lg font-semibold">24/7 Forensic Response</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Office</div>
                  <div className="text-base font-semibold leading-relaxed">
                    Budapest Obuda Gate<br />
                    Arpad Fejedelem Utja 26-28, 5th Floor<br />
                    Budapest, Hungary 1023
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-xl bg-primary/5 border border-primary/20">
            <h3 className="text-2xl font-headline font-bold mb-8">Why Choose DualconX?</h3>
            <ul className="space-y-6">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 pt-10 border-t border-primary/20">
              <div className="text-sm text-muted-foreground mb-4">DualconX is a registered digital forensics firm specializing in blockchain asset reclamation and cyber insurance recovery.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}