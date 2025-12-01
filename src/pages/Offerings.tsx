import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "SOLUTIONX",
    subtitle: "Customer centric, collaborative innovations",
    features: [
      "Field Services: Design, Deployment, Optimization",
      "Wireless Network, Fiber, Data Centers"
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&h=1012&fit=crop",
    reverse: false
  },
  {
    number: "02",
    title: "NOCX",
    subtitle: "Intelligent operations driven by AI/ML",
    features: [
      "24x7x365 tiered support",
      "Powered by PLATFORMX"
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1280&h=784&fit=crop",
    reverse: true
  },
  {
    number: "03",
    title: "ANALYTICX",
    subtitle: "Purpose-driven data-assisted Insights to drive +ROI",
    features: [
      "Full spectrum analytics to drive strategic decisions",
      "Diverse experience across real-world use cases"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&h=1218&fit=crop",
    reverse: false
  }
];

const whyChoose = [
  {
    title: "Expert Team",
    description: "Our seasoned consultants bring extensive industry experience, ensuring personalized support tailored to your organization's unique challenges and goals. We stand by your side throughout the process.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=1095&fit=crop"
  },
  {
    title: "Tailored Solutions",
    description: "We understand that each business is unique. We design customized strategies that cater to your specific needs, promoting sustainable growth and adaptability in a dynamic market.",
    image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=700&h=1050&fit=crop"
  }
];

const Offerings = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Services and <span className="text-glow">Solutions</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Comprehensive Digital Transformation Services
          </p>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto mt-4">
            Explore our tailored offerings designed to propel your organization towards a successful digital future with innovative strategies and expert guidance.
          </p>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=577&h=504&fit=crop" 
                alt="Digital Strategy"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            </div>
            <div>
              <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">
                Vertical integration, horizontal scaling, serving the community
              </p>
              <h2 className="text-4xl font-bold mb-6">Strategy</h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                Our Digital Strategy Development assists businesses in creating effective roadmaps. We analyze unique needs and industry trends to define clear, actionable strategies that drive growth and efficiency.
              </p>
              <Button className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="space-y-24 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${service.reverse ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={service.reverse ? 'lg:order-2' : ''}>
                  <span className="text-6xl font-bold text-primary/20">{service.number}</span>
                  <h3 className="text-3xl font-bold mb-3 -mt-4">{service.title}</h3>
                  <p className="text-primary font-medium mb-6">{service.subtitle}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-foreground/70">
                        <span className="text-primary font-bold">({idx + 1})</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="group">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <div className={service.reverse ? 'lg:order-1' : ''}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="rounded-2xl shadow-xl w-full object-cover max-h-[500px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-medium text-foreground/90 italic mb-8">
              "TRIDENTX transforms companies approach to digital strategy, enabling them to thrive in a competitive market. Our expertise makes all the difference!"
            </p>
            <div className="flex items-center justify-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=181&h=183&fit=crop&crop=face" 
                alt="Kerry Baker"
                className="w-16 h-16 rounded-full object-cover border-2 border-primary"
              />
              <div className="text-left">
                <p className="font-semibold">Kerry Baker</p>
                <p className="text-foreground/60 text-sm">Strategy & Marketing Advisor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-primary">TRIDENTX</span> for Your Digital Journey?
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              TRIDENTX provides a unique blend of expertise and innovative solutions. Our commitment to tailored strategies drives transformative results for every client.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whyChoose.map((item, index) => (
              <Card key={index} className="overflow-hidden bg-card/50 border-border/50 hover-lift group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Card className="p-12 md:p-16 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Start Your Transformation
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Join us today and unlock the potential of your business through innovative digital solutions tailored to your success.
            </p>
            <Button size="lg" className="text-lg px-10 py-6 shadow-lg shadow-primary/30 hover-lift">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Offerings;
