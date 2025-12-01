import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 cosmic-gradient opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Global Boutique<br />
          <span className="text-glow">Consulting</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto animate-fade-in-delay">
          Curating enterprise digital transformation to empower the connected and aware ecosystem
        </p>

        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-6 text-lg shadow-2xl shadow-primary/40 hover-lift group"
        >
          Get Started
          <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
