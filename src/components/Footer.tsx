import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";

export const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logoIcon} alt="TridentX" className="h-8 w-8" />
            <span className="text-xl font-bold">
              TRIDENT<span className="text-primary">X</span>
            </span>
          </Link>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <Link to="/" className="text-foreground/70 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-foreground/70 hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/offerings" className="text-foreground/70 hover:text-primary transition-colors">
              Offerings
            </Link>
            <Link to="/blog" className="text-foreground/70 hover:text-primary transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-foreground/70 hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-foreground/50">
            © 2025 TridentX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
