// import { Button } from "@/components/ui/button";
// import { ChevronRight } from "lucide-react";
// import heroBg from "@/assets/hero-bg.jpg";

// export const Hero = () => {
//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image with Gradient Overlay */}
//       <div 
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `url(${heroBg})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         <div className="absolute inset-0 cosmic-gradient opacity-80" />
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
//         <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
//           Global Boutique<br />
//           <span className="text-glow">Consulting</span>
//         </h1>
        
//         <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto animate-fade-in-delay">
//           Curating enterprise digital transformation to empower the connected and aware ecosystem
//         </p>

//         <Button 
//           size="lg"
//           className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-6 text-lg shadow-2xl shadow-primary/40 hover-lift group"
//         >
//           Get Started
//           <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//         </Button>
//       </div>

//       {/* Decorative Elements */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
//     </section>
//   );
// };



// import { Button } from "@/components/ui/button";
// import { ChevronRight } from "lucide-react";
// // Use the NASA black hole image directly (or download it as a local asset for production)
// const heroBg = "https://cdn.wallpapersafari.com/93/56/BG5dfSV.jpg";

// export const Hero = () => {
//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Black Hole Background with Enhanced Overlays */}
//       <div 
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `url(${heroBg})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundAttachment: 'fixed', // Subtle parallax feel
//         }}
//       >
//         {/* Dark cosmic overlay to blend with your cyberpunk theme */}
//         <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-black/60 to-zinc-900/80" />
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />
        
//         {/* Subtle vignette for depth */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
//         <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
//           Global Boutique<br />
//           <span className="text-glow text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
//             Consulting
//           </span>
//         </h1>
        
//         <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto animate-fade-in-delay drop-shadow-md">
//           Curating enterprise digital transformation to empower the connected and aware ecosystem
//         </p>

//         <Button 
//           size="lg"
//           className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-12 py-7 text-lg shadow-2xl shadow-pink-500/50 hover-lift group border border-pink-400/30 backdrop-blur-sm"
//         >
//           Get Started
//           <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-all duration-300" />
//         </Button>
//       </div>

//       {/* Bottom fade to next section */}
//       <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10" />
//     </section>
//   );
// };


// import { Button } from "@/components/ui/button";
// import { ChevronRight } from "lucide-react";

// export const Hero = () => {
//   // Direct path when file is in /public folder
//   const blackHoleImage = "/"; 
//   // Works with any name/location inside public:
//   // "/blackhole.jpg"
//   // "/assets/blackhole-nasa.jpg"
//   // "/hero-blackhole.jpg"

//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
//       {/* Real Black Hole Background */}
//       <div 
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `url(${blackHoleImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           backgroundAttachment: "fixed", // nice parallax on desktop
//         }}
//       >
//         {/* Dark overlay stack — keeps your cyberpunk purple/pink identity */}
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="absolute inset-0 bg-gradient-to-b from-purple-950/60 via-black/70 to-zinc-950/90" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 container mx-auto px-6 text-center">
//         <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
//           Global Boutique<br />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 text-glow">
//             Consulting
//           </span>
//         </h1>
        
//         <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto drop-shadow-lg">
//           Curating enterprise digital transformation to empower the connected and aware ecosystem
//         </p>

//         <Button 
//           size="lg"
//           className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-12 py-7 text-lg 
//                      shadow-2xl shadow-pink-500/50 border border-pink-400/30
//                      hover:scale-105 transition-all duration-300 group"
//         >
//           Get Started
//           <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
//         </Button>
//       </div>

//       {/* Smooth fade to next section */}
//       <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
//     </section>
//   );
// };


// import { Button } from "@/components/ui/button";
// import { ChevronRight } from "lucide-react";
// // Correct import when file is in src/assets/
// import cosmicSpiralGalaxy from "@/assets/cosmic-spiral-galaxy.jpg";

// export const Hero = () => {
//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
//       {/* Cosmic Spiral Galaxy Background */}
//       <div 
//         className="absolute inset-0 z-0 bg-black"
//         style={{
//           backgroundImage: `url(${cosmicSpiralGalaxy})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           backgroundAttachment: "fixed",
//         }}
//       >
//         {/* Perfectly tuned overlays for your cyberpunk palette */}
//         <div className="absolute inset-0 bg-black/60" />
//         <div className="absolute inset-0 bg-gradient-to-b from-purple-950/70 via-black/60 to-zinc-950/90" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 container mx-auto px-6 text-center">
//         <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
//           Global Boutique<br />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 drop-shadow-2xl">
//             Consulting
//           </span>
//         </h1>
        
//         <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 max-w-4xl mx-auto drop-shadow-lg leading-relaxed">
//           Curating enterprise digital transformation to empower the connected and aware ecosystem
//         </p>

//         <Button 
//           size="lg"
//           className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-12 py-8 text-lg lg:text-xl
//                      shadow-2xl shadow-pink-500/60 border border-pink-400/40
//                      hover:scale-110 hover:shadow-pink-500/80 transition-all duration-300 group
//                      backdrop-blur-sm"
//         >
//           Get Started
//           <ChevronRight className="ml-3 h-6 w-6 group-hover:translate-x-3 transition-transform duration-300" />
//         </Button>
//       </div>

//       {/* Bottom fade */}
//       <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
//     </section>
//   );
// };



// import { Button } from "@/components/ui/button";
// import { ChevronRight } from "lucide-react";
// import cosmicSpiralGalaxy from "@/assets/cosmic-spiral-galaxy.jpg";

// export const Hero = () => {
//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
//       {/* Cosmic Spiral Galaxy Background – Bright & Vibrant */}
//       <div 
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `url(${cosmicSpiralGalaxy})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           backgroundAttachment: "fixed",
//         }}
//       >
//         {/* Light, tasteful overlays only – no more black void */}
//         <div className="absolute inset-0 bg-black/20" />
//         <div className="absolute inset-0 bg-gradient-to-b from-purple-950/30 via-transparent to-zinc-950/40" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 container mx-auto px-6 text-center">
//         <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
//           Global Boutique<br />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 drop-shadow-2xl">
//             Consulting
//           </span>
//         </h1>
        
//         <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-12 max-w-4xl mx-auto drop-shadow-lg leading-relaxed">
//           Curating enterprise digital transformation to empower the connected and aware ecosystem
//         </p>

//         <Button 
//           size="lg"
//           className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-12 py-8 text-lg lg:text-xl
//                      shadow-2xl shadow-pink-500/60 border border-pink-400/40
//                      hover:scale-110 hover:shadow-pink-500/80 transition-all duration-300 group
//                      backdrop-blur-sm"
//         >
//           Get Started
//           <ChevronRight className="ml-3 h-6 w-6 group-hover:translate-x-3 transition-transform duration-300" />
//         </Button>
//       </div>

//       {/* Subtle bottom fade to next section */}
//       <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
//     </section>
//   );
// };



// import { Button } from "@/components/ui/button";
// import { ChevronRight } from "lucide-react";
// import cosmicSpiralGalaxy from "@/assets/cosmic-spiral-galaxy.jpg";

// export const Hero = () => {
//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
//       {/* Bright Cosmic Background */}
//       <div 
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `url(${cosmicSpiralGalaxy})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           backgroundAttachment: "fixed",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/20" />
//         <div className="absolute inset-0 bg-gradient-to-b from-purple-950/30 via-transparent to-zinc-950/40" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
//       </div>

//       {/* Hero Content – "Consulting" now looks EPIC */}
//       <div className="relative z-10 container mx-auto px-6 text-center">
//         <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
//           <span className="text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)] [text-shadow:0_10px_40px_rgba(0,0,0,0.95)]">
//             Global Boutique
//           </span>
//           <br />
//           <span 
//             className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
//                        font-black tracking-tight
//                        drop-shadow-[0_15px_35px_rgba(0,0,0,0.95)]
//                        [text-shadow:0_15px_40px_rgba(0,0,0,0.9)_0_0_20px_#ec4899_0_0_40px_#a855f7]"
//           >
//             Consulting
//           </span>
//         </h1>
        
//         <p className="text-xl md:text-2xl lg:text-3xl text-white/98 mb-12 max-w-4xl mx-auto leading-relaxed font-medium
//                       drop-shadow-[0_8px_25px_rgba(0,0,0,0.9)]
//                       [text-shadow:0_4px_20px_rgba(0,0,0,0.95)]">
//           Curating enterprise digital transformation to empower the connected and aware ecosystem
//         </p>

//         <Button 
//           size="lg"
//           className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-12 py-8 text-lg lg:text-xl
//                      shadow-2xl shadow-pink-500/60 border border-pink-400/40
//                      hover:scale-110 hover:shadow-pink-500/80 transition-all duration-300 group
//                      backdrop-blur-sm rounded-full"
//         >
//           Get Started
//           <ChevronRight className="ml-3 h-6 w-6 group-hover:translate-x-3 transition-transform duration-300" />
//         </Button>
//       </div>

//       <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
//     </section>
//   );
// };


import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import cosmicSpiralGalaxy from "@/assets/cosmic-spiral-galaxy.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Bright Cosmic Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${cosmicSpiralGalaxy})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/30 via-transparent to-zinc-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Hero Content – "Consulting" now looks EPIC */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12 leading-tight">
          <span className="text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)] [text-shadow:0_10px_40px_rgba(0,0,0,0.95)]">
            Global Boutique
          </span>
          <br />
          {/* <span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
                       font-black tracking-tight
                       drop-shadow-[0_15px_35px_rgba(0,0,0,0.95)]
                       [text-shadow:0_15px_40px_rgba(0,0,0,0.9)_0_0_20px_#ec4899_0_0_40px_#a855f7]"
          >
            Consulting
          </span> */}
          <span className="relative font-black tracking-tight text-white">
            <span className="absolute inset-0 -z-10 bg-black/40 blur-[12px] rounded-lg"></span>
            Consulting
          </span>

        </h1>
        
        {/* <p className="text-xl md:text-2xl lg:text-3xl text-white/98 mb-12 max-w-4xl mx-auto leading-relaxed font-medium
                      drop-shadow-[0_8px_25px_rgba(0,0,0,0.9)]
                      [text-shadow:0_4px_20px_rgba(0,0,0,0.95)]">
          Curating enterprise digital transformation to empower the connected and aware ecosystem
        </p> */}

        <p className="text-xl md:text-2xl lg:text-3xl text-purple-200 mb-12  max-w-4xl mx-auto leading-relaxed font-medium
              drop-shadow-[0_8px_25px_rgba(0,0,0,0.9)]
              [text-shadow:0_4px_20px_rgba(0,0,0,0.95)]">
  Curating enterprise digital transformation to empower the connected and aware ecosystem
</p>


        <Button 
          size="lg"
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-12 py-8 text-lg lg:text-xl
                     shadow-2xl shadow-pink-500/60 border border-pink-400/40
                     hover:scale-110 hover:shadow-pink-500/80 transition-all duration-300 group
                     backdrop-blur-sm rounded-full"
        >
          Get Started
          <ChevronRight className="ml-3 h-6 w-6 group-hover:translate-x-3 transition-transform duration-300" />
        </Button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
    </section>
  );
};