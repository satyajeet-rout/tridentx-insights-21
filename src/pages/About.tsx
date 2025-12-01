import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Globe, 
  Target, 
  Lightbulb, 
  Handshake, 
  Link as LinkIcon,
  Users,
  Calculator,
  Search
} from "lucide-react";

const globalTeam = [
  {
    name: "Gurtaj S Alag",
    role: "Founder & CEO",
    linkedin: "https://www.linkedin.com/in/gurtaj-alag-026872b/",
    initials: "GA"
  },
  {
    name: "Kerry Baker",
    role: "Strategy & Marketing Advisor",
    linkedin: "https://www.linkedin.com/in/kerry-wm-baker/",
    initials: "KB"
  },
  {
    name: "Jang Singh",
    role: "Delivery & Operations Head",
    linkedin: "https://www.linkedin.com/in/jang-singh-b599624/",
    initials: "JS"
  }
];

const apacTeam = [
  {
    name: "Kajal Yadav",
    role: "Business Development",
    linkedin: "https://www.linkedin.com/in/kajal-yadav-690736317/",
    initials: "KY"
  }
];

const xMeanings = [
  { icon: LinkIcon, title: "Connect", description: "A connection, an intersection and crossroads, an opportunity for communications" },
  { icon: Users, title: "Relate", description: "Represents relationships, people, neighbors, communities working together" },
  { icon: Search, title: "Solve", description: "The unknown, something to be discovered and solved" },
  { icon: Calculator, title: "Multiply", description: "A force multiplier in synergistic contexts" }
];

const coreValues = [
  {
    icon: Target,
    title: "Integrity",
    description: "We prioritize honesty and transparency in all our dealings, building trust and fostering long-lasting relationships with our clients."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Our commitment to innovation drives us to constantly seek creative solutions that empower our clients to stay ahead in a competitive landscape."
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description: "We believe in the power of teamwork, working closely with our clients to ensure that their needs are met and their goals achieved."
  }
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Empowering <span className="text-glow">Transformation</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8">
              Our Journey to Empowering Organizations
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Bespoke consulting services that foster <span className="text-primary">innovation</span> and <span className="text-accent">efficiency</span>
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Our mission is not just to advise, but to partner with businesses at every step of their digital journey, creating tailored solutions that are both impactful and sustainable.
                </p>
                <p>
                  Founded by visionaries passionate about digital evolution, TRIDENTX emerged from the desire to simplify complex digital transitions for organizations.
                </p>
                <p>
                  Our client portfolio spans diverse industries—from wireless to fiber, manufacturing to retail—showcasing our adaptability and expertise in addressing unique challenges across sectors.
                </p>
              </div>
            </div>
            
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 animate-scale-in">
              <h3 className="text-2xl font-bold mb-4">The Meaning of TRIDENT</h3>
              <p className="text-foreground/80 mb-4">
                We selected our name from the <span className="text-primary font-semibold">TRIDENT</span> for its mythological connotations. The trident's "three teeth" represent:
              </p>
              <div className="flex gap-4 mb-6">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">Creation</span>
                <span className="px-4 py-2 rounded-full bg-accent/10 text-accent font-medium">Preservation</span>
                <span className="px-4 py-2 rounded-full bg-destructive/10 text-destructive font-medium">Destruction</span>
              </div>
              <p className="text-sm text-foreground/60 italic">
                From the circle-of-life to Joseph Schumpeter's creative destruction, the trident is metaphorically broad for us to embrace.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* X Meaning Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What <span className="text-glow">X</span> Means to Us
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              The nebulae of tines and four tridents coalesce our logo, with the negative space forming an X—our trademark.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {xMeanings.map((item, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover-lift text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/70">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Globe className="h-8 w-8 text-primary" />
              <h2 className="text-4xl font-bold">Global Team</h2>
            </div>
            <p className="text-foreground/70">Strategic leadership driving worldwide transformation</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {globalTeam.map((member, index) => (
              <Card 
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover-lift text-center animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-2xl font-bold text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                    {member.initials}
                  </div>
                </div>
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold hover:text-primary transition-colors"
                >
                  {member.name}
                </a>
                <p className="text-primary mt-2">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* APAC Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPin className="h-8 w-8 text-accent" />
              <h2 className="text-4xl font-bold">APAC Team</h2>
            </div>
            <p className="text-foreground/70">Regional excellence powering Asia-Pacific growth</p>
          </div>
          
          <div className="flex justify-center">
            {apacTeam.map((member, index) => (
              <Card 
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover-lift text-center animate-scale-in group max-w-sm"
              >
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center text-2xl font-bold text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                    {member.initials}
                  </div>
                </div>
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold hover:text-accent transition-colors"
                >
                  {member.name}
                </a>
                <p className="text-accent mt-2">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              The foundation of our approach lies in our strong values, guiding our actions and fostering a culture of excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {coreValues.map((value, index) => (
              <Card 
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-primary/10">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">{value.title}</h3>
                <p className="text-foreground/70 text-center leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Your <span className="text-glow">Transformation</span>
            </h2>
            <p className="text-xl text-foreground/70 mb-8">
              Join us today and unlock the potential of your business through innovative digital solutions tailored to your success.
            </p>
            <Link to="/offerings">
              <Button size="lg" className="hover-lift">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
