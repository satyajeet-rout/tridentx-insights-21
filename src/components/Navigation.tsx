// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import logoIcon from "@/assets/logo-icon.png";

// export const Navigation = () => {
//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-3">
//             <img src={logoIcon} alt="TridentX" className="h-10 w-10 animate-float" />
//             <span className="text-2xl font-bold tracking-tight">
//               TRIDENT<span className="text-primary">X</span>
//             </span>
//           </Link>

//           {/* Navigation Links */}
//           <div className="hidden md:flex items-center gap-8">
//             <Link to="/" className="text-foreground/90 hover:text-primary transition-colors font-medium">
//               Home
//             </Link>
//             <Link to="/about" className="text-foreground/90 hover:text-primary transition-colors font-medium">
//               About
//             </Link>
//             <Link to="/offerings" className="text-foreground/90 hover:text-primary transition-colors font-medium">
//               Offerings
//             </Link>
//             <Link to="/blog" className="text-foreground/90 hover:text-primary transition-colors font-medium">
//               Blog
//             </Link>
//             <Link to="/contact" className="text-foreground/90 hover:text-primary transition-colors font-medium">
//               Contact
//             </Link>
//           </div>

//           {/* CTA Button */}
//           <Link to="/contact">
//             <Button 
//               className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-lg shadow-primary/30 hover-lift"
//             >
//               Get Started
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };




// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";

// // Replace this with the path to your own logo image
// import yourLogo from "@/assets/TRIDENTX_black-high-resolution.png";   // <-- Change this path/name

// export const Navigation = () => {
//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           {/* Your custom logo image */}
//           <Link to="/" className="flex items-center">
//             <img 
//               src={yourLogo} 
//               alt="Your Brand" 
//               className="h-12 w-auto"   // adjust height as needed
//             />
//           </Link>

//           {/* Navigation Links */}
//           <div className="hidden md:flex items-center gap-8">
//             <Link to="/" className="text-foreground/90 hover:text-primary transition-colors font-medium">
//               Home
//             </Link>
//             <Link to="/about" className="text-foreground/90 hover:text-primary transition-colors font-medium">
//               About
//             </Link>
//             <Link to="/offerings" className="text-foreground/90 hover:text-primary transition-colors font-medium">
//               Offerings
//             </Link>
//             <Link to="/blog" className="text-foreground/90 hover:text-primary transition-colors font-medium">
//               Blog
//             </Link>
//             <Link to="/contact" className="text-foreground/90 hover:text-primary transition-colors font-medium">
//               Contact
//             </Link>
//           </div>

//           {/* CTA Button */}
//           <Link to="/contact">
//             <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-lg shadow-primary/30 hover-lift">
//               Get Started
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };



// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import yourLogo from "@/assets/TRIDENTX_black-high-resolution.png";   // ← your white/purple logo here

// export const Navigation = () => {
//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 border-b border-white/10">
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           {/* Your logo – now perfectly visible */}
//           <Link to="/" className="flex items-center">
//             <img 
//               src={yourLogo} 
//               alt="Trident" 
//               className="h-11 w-auto"   // tweak height if needed
//             />
//           </Link>

//           {/* Navigation Links */}
//           <div className="hidden md:flex items-center gap-8">
//             <Link to="/" className="text-white/80 hover:text-white transition font-medium">
//               Home
//             </Link>
//             <Link to="/about" className="text-white/80 hover:text-white transition font-medium">
//               About
//             </Link>
//             <Link to="/offerings" className="text-white/80 hover:text-white transition font-medium">
//               Offerings
//             </Link>
//             <Link to="/blog" className="text-white/80 hover:text-white transition font-medium">
//               Blog
//             </Link>
//             <Link to="/contact" className="text-white/80 hover:text-white transition font-medium">
//               Contact
//             </Link>
//           </div>

//           {/* CTA Button */}
//           <Link to="/contact">
//             <Button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 shadow-lg">
//               Get Started
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };



import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import yourLogo from "@/assets/TRIDENTX_black-high-resolution.png";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 
                    bg-gradient-to-r from-zinc-950 via-purple-950 to-zinc-950 
                    border-b border-white/10">
      {/* Subtle depth overlay — same as footer */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      
      <div className="relative container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={yourLogo} 
              alt="TridentX" 
              className="h-11 w-auto brightness-110"   // tiny boost for perfect pop
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-white/70 hover:text-white transition font-medium">
              Home
            </Link>
            <Link to="/about" className="text-white/70 hover:text-white transition font-medium">
              About
            </Link>
            <Link to="/offerings" className="text-white/70 hover:text-white transition font-medium">
              Offerings
            </Link>
            <Link to="/blog" className="text-white/70 hover:text-white transition font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-white/70 hover:text-white transition font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <Link to="/contact">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 shadow-lg shadow-pink-500/20">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};