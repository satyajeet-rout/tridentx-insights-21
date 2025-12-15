import { Link } from "react-router-dom";
import footerLogo from "@/assets/TRIDENTX_black-high-resolution.png";   // your full logo

export const Footer = () => {
  return (
    <footer className="relative py-12 bg-gradient-to-r from-zinc-950 via-purple-950 to-zinc-950 border-t border-white/10">
      {/* Optional subtle overlay for extra depth */}
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="relative container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo — now perfectly visible */}
          <Link to="/" className="flex items-center">
            <img 
              src={footerLogo} 
              alt="TridentX" 
              className="h-11 w-auto brightness-110"   // slight brightness boost for extra pop
            />
          </Link>

          {/* Navigation Links */}
          {/* <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm">
            <Link to="/" className="text-white/70 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white/70 hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/offerings" className="text-white/70 hover:text-primary transition-colors">
              Offerings
            </Link>
            <Link to="/blog" className="text-white/70 hover:text-primary transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-white/70 hover:text-primary transition-colors">
              Contact
            </Link>
          </div> */}

          {/* Copyright */}
          <p className="text-sm text-white/50">
            © 2025 TRIDENTX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};