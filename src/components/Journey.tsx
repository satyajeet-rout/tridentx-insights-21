import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Journey = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Our Journey to <span className="text-glow">Empowering Organizations</span>
          </h2>
          
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">
            With years of experience in the tech landscape, TRIDENTX has been instrumental in guiding 
            organizations through the challenges of digital transformation. Our consultants bring deep 
            industry insights, enabling businesses to exploit the advancements of Industry 4.0 effectively 
            and strategically. We are experts in solution aggregation, ensuring seamless integration of 
            cutting-edge technologies.
          </p>

          <Link to="/about">
            <Button variant="outline" className="mb-12 hover-lift">
              Learn More
            </Button>
          </Link>

          <p className="text-foreground/70 italic mb-8">
            TRIDENTX drives customer centric and collaborative innovations. Our expertise plays a pivotal 
            role in delivering digital transformation by aligning company business strategies with the 
            latest technologies.
          </p>

          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mb-4 flex items-center justify-center text-3xl font-bold text-primary-foreground">
              KB
            </div>
            <a 
              href="https://www.linkedin.com/in/kerry-wm-baker/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              Kerry Baker
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
