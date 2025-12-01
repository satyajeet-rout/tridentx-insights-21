import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logoIcon} alt="TridentX" className="h-10 w-10 animate-float" />
            <span className="text-2xl font-bold tracking-tight">
              TRIDENT<span className="text-primary">X</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground/90 hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-foreground/90 hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link to="/offerings" className="text-foreground/90 hover:text-primary transition-colors font-medium">
              Offerings
            </Link>
            <Link to="/blog" className="text-foreground/90 hover:text-primary transition-colors font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-foreground/90 hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <Link to="/contact">
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-lg shadow-primary/30 hover-lift"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
