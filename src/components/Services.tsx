import { Card } from "@/components/ui/card";
import { Lightbulb, Cog, Shield, Zap } from "lucide-react";

// Import your image
import solutionImage from "@/assets/Solution-Aggregator-and-Manageability-Partner.jpg";

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
    <section id="offerings" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Solution Aggregator and<br />
            <span className="text-glow">Manageability Partner</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Explore our tailored offerings designed to propel your organization towards 
            a successful digital future with innovative strategies and expert guidance.
          </p>
        </div>

        {/* Full-width Image Section */}
        <div className="my-20 -mx-6 md:-mx-12 lg:-mx-20">
          <div className="relative max-w-6xl mx-auto">
            <img
              src={solutionImage}
              alt="TRIDENTX Solution Aggregator & Manageability Partner"
              className="w-full h-auto rounded-2xl shadow-2xl border border-white/10 object-cover"
              loading="lazy"
            />
            {/* Optional elegant dark overlay for depth */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover-lift animate-scale-in group transition-all duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`mb-4 p-3 rounded-lg bg-background/50 w-fit transition-colors ${service.color}`}>
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