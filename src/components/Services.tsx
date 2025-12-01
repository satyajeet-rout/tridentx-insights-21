import { Card } from "@/components/ui/card";
import { Lightbulb, Cog, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Digital Transformation",
    description: "Strategic consulting to modernize your enterprise infrastructure and accelerate digital innovation.",
    color: "text-primary"
  },
  {
    icon: Cog,
    title: "Solution Aggregation",
    description: "End-to-end integration of cutting-edge technologies tailored to your business objectives.",
    color: "text-accent"
  },
  {
    icon: Shield,
    title: "Manageability Partner",
    description: "Comprehensive support and management services ensuring optimal performance and security.",
    color: "text-primary"
  },
  {
    icon: Zap,
    title: "Innovation Delivery",
    description: "Rapid prototyping and deployment of transformative solutions that drive measurable results.",
    color: "text-accent"
  }
];

export const Services = () => {
  return (
    <section id="offerings" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Solution Aggregator and<br />
            <span className="text-glow">Manageability Partner</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Explore our tailored offerings designed to propel your organization towards 
            a successful digital future with innovative strategies and expert guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover-lift animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`mb-4 p-3 rounded-lg bg-background/50 w-fit ${service.color}`}>
                <service.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
