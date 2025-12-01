// import { Link } from "react-router-dom";
// import logoIcon from "@/assets/logo-icon.png";

// export const Footer = () => {
//   return (
//     <footer className="relative py-12 border-t border-border/50">
//       <div className="container mx-auto px-6">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-3">
//             <img src={logoIcon} alt="TridentX" className="h-8 w-8" />
//             <span className="text-xl font-bold">
//               TRIDENT<span className="text-primary">X</span>
//             </span>
//           </Link>

//           {/* Links */}
//           <div className="flex flex-wrap items-center gap-6 text-sm">
//             <Link to="/" className="text-foreground/70 hover:text-primary transition-colors">
//               Home
//             </Link>
//             <Link to="/about" className="text-foreground/70 hover:text-primary transition-colors">
//               About
//             </Link>
//             <Link to="/offerings" className="text-foreground/70 hover:text-primary transition-colors">
//               Offerings
//             </Link>
//             <Link to="/blog" className="text-foreground/70 hover:text-primary transition-colors">
//               Blog
//             </Link>
//             <Link to="/contact" className="text-foreground/70 hover:text-primary transition-colors">
//               Contact
//             </Link>
//           </div>

//           {/* Copyright */}
//           <p className="text-sm text-foreground/50">
//             © 2025 TridentX. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };




// import { Link } from "react-router-dom";

// // Replace this with your actual full logo (the one that already includes the text)
// import footerLogo from "@/assets/TRIDENTX_black-high-resolution.png";   // or .webp, .svg, etc.

// export const Footer = () => {
//   return (
//     <footer className="relative py-12 border-t border-border/50">
//       <div className="container mx-auto px-6">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-8">

//           {/* Clean Logo – same as navbar */}
//           <Link to="/" className="flex items-center">
//             <img 
//               src={footerLogo} 
//               alt="TridentX" 
//               className="h-10 w-auto md:h-11"   // slightly larger than navbar for footer presence
//             />
//           </Link>

//           {/* Links */}
//           <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm">
//             <Link to="/" className="text-foreground/70 hover:text-primary transition-colors">
//               Home
//             </Link>
//             <Link to="/about" className="text-foreground/70 hover:text-primary transition-colors">
//               About
//             </Link>
//             <Link to="/offerings" className="text-foreground/70 hover:text-primary transition-colors">
//               Offerings
//             </Link>
//             <Link to="/blog" className="text-foreground/70 hover:text-primary transition-colors">
//               Blog
//             </Link>
//             <Link to="/contact" className="text-foreground/70 hover:text-primary transition-colors">
//               Contact
//             </Link>
//           </div>

//           {/* Copyright */}
//           <p className="text-sm text-foreground/50 text-center md:text-right">
//             © 2025 TridentX. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };



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
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm">
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
          </div>

          {/* Copyright */}
          <p className="text-sm text-white/50">
            © 2025 TridentX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};