import { Card } from "@/components/ui/card";
import { MapPin, Globe } from "lucide-react";

export const OfficeLocations = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* US Headquarters */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover-lift animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">TRIDENT Inc.</h3>
            </div>
            
            <div className="mb-4">
              <p className="text-lg font-semibold text-primary mb-2">
                🇺🇸 U.S. Headquarters – Seattle, WA
              </p>
            </div>

            <p className="text-foreground/80 leading-relaxed">
              Located in the heart of one of the world's leading tech hubs, our Seattle headquarters 
              serves as the <span className="text-foreground font-semibold">strategic command</span> center for{" "}
              <span className="text-foreground font-semibold">global operations, innovation, and client engagement.</span> 
              {" "}This center drives transformative growth initiatives, accelerates business outcomes, 
              and empowers partner success across markets.
            </p>
          </Card>

          {/* India GCC */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover-lift animate-fade-in-delay">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-accent/10">
                <Globe className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">TRIDENT APAC Pvt. Ltd.</h3>
            </div>
            
            <div className="mb-4">
              <p className="text-lg font-semibold text-accent mb-2">
                🌐 Global Capability Center (GCC) – Noida, India
              </p>
            </div>

            <p className="text-foreground/80 leading-relaxed">
              Our <span className="text-foreground font-semibold">Global Capability Center (GCC)</span> in{" "}
              <span className="text-foreground font-semibold">Noida, Uttar Pradesh</span>, serves as a strategic 
              hub for <span className="text-foreground font-semibold">engineering delivery and innovation</span>. 
              Designed to scale rapidly, the center enables seamless execution of projects across domains, 
              providing high-quality support for global clients.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
