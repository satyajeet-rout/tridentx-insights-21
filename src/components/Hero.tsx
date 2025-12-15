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
          
          <span className="relative  tracking-tight text-white">
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