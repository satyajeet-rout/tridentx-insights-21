import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 cosmic-gradient opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your <span className="text-glow">Transformation</span>
          </h2>
          
          <p className="text-xl text-foreground/80 mb-10">
            Join us today and unlock the potential of your business through innovative digital 
            solutions tailored to your success.
          </p>

          <Link to="/offerings">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-6 text-lg shadow-2xl shadow-primary/40 hover-lift group"
            >
              Get Started
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
