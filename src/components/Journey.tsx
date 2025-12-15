import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import KerryBaker from "@/assets/KB.jpg";

export const Journey = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Our Journey to <span className="text-glow">Empowering Organizations</span>
          </h2>
          
          <p className="text-lg text-foreground/80 leading-relaxed mb-12">
            With years of experience in the tech landscape, TRIDENTX has been instrumental in guiding 
            organizations through the challenges of digital transformation. Our consultants bring deep 
            industry insights, enabling businesses to exploit the advancements of Industry 4.0 effectively 
            and strategically. We are experts in solution aggregation, ensuring seamless integration of 
            cutting-edge technologies.
          </p>

          <Link to="/about">
            <Button variant="outline" className="mb-16 hover-lift">
              Learn More
            </Button>
          </Link>

          {/* Premium Quote Box */}
          <div className="relative max-w-3xl mx-auto bg-card/60 backdrop-blur-md border border-primary/20 rounded-3xl p-10 md:p-14 shadow-2xl">
            {/* Optional left quote mark */}
            <div className="absolute -top-6 left-8 text-primary/30 text-8xl font-serif select-none">
              “
            </div>

            <blockquote className="text-xl md:text-2xl font-medium text-foreground/90 leading-relaxed">
              TRIDENTX drives customer-centric and collaborative innovations. Our expertise plays a pivotal 
              role in delivering digital transformation by aligning company business strategies with the 
              latest technologies.
            </blockquote>

            {/* Author */}
            <div className="mt-10 flex items-center justify-center gap-5">
              <div className="relative">
                <img
                  src={KerryBaker}
                  alt="Kerry Baker"
                  className="w-20 h-20 rounded-full object-cover border-4 border-primary/30 shadow-lg"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.3)] pointer-events-none" />
              </div>

              <div className="text-left">
                <a
                  href="https://www.linkedin.com/in/kerry-wm-baker/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-bold text-lg hover:text-primary/80 transition-colors block"
                >
                  Kerry Baker
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};