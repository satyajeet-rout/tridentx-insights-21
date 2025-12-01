import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Settings } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Our seasoned consultants bring extensive industry experience, ensuring personalized support tailored to your organization's unique challenges and goals. We stand by your side throughout the process."
  },
  {
    icon: Settings,
    title: "Tailored Solutions",
    description: "At TRIDENTX, we understand that each business is unique. We design customized strategies that cater to your specific needs, promoting sustainable growth and adaptability in a dynamic market."
  }
];

export const WhyChoose = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-glow">TRIDENTX</span> for Your Digital Journey?
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            TRIDENTX provides a unique blend of expertise and innovative solutions. Our commitment to 
            tailored strategies drives transformative results for every client.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <reason.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{reason.title}</h3>
              </div>
              
              <p className="text-foreground/80 leading-relaxed mb-6">
                {reason.description}
              </p>

              <Link to="/offerings">
                <Button variant="outline" className="hover-lift">
                  Learn More
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
