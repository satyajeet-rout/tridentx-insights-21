import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in <span className="text-glow">Touch</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Let's discuss how we can help transform your business with our digital solutions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input 
                        id="firstName" 
                        placeholder="John"
                        required
                        className="bg-background border-border"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe"
                        required
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="john.doe@company.com"
                      required
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input 
                      id="company" 
                      placeholder="Your Company Name"
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input 
                      id="subject" 
                      placeholder="How can we help?"
                      required
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project..."
                      rows={6}
                      required
                      className="bg-background border-border resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/30 hover-lift"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Email Us</h3>
                    <p className="text-foreground/70 mb-1">contact@tridentxapac.xyz</p>
                    
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-accent/10">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Call Us</h3>
                    <p className="text-foreground/70 mb-1">US: +1 (425) 243 9586</p>
                    <p className="text-foreground/70">India: +91 9810811397</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Business Hours</h3>
                    <p className="text-foreground/70 mb-1">Monday - Friday</p>
                    <p className="text-foreground/70">9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </Card>

              {/* Office Locations */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">🇺🇸 US Headquarters</h3>
                    <p className="text-foreground/70">
                      Seattle, Washington<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-accent/10">
                    <Globe className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">🌐 India Office</h3>
                    <p className="text-foreground/70">
                      Noida, Uttar Pradesh<br />
                      India
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Locations</h2>
            <p className="text-foreground/70">Visit us at our global offices</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* US Office Map */}
            {/* <Card className="overflow-hidden bg-card/50 border-border/50">
              <div className="p-4 border-b border-border/50">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <span>🇺🇸</span> US Headquarters
                </h3>
                <p className="text-sm text-foreground/70">21727 SE 3rd Pl, Sammamish, WA 98074</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172037.06377825903!2d-122.17136205!3d47.605736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549071fcfd8aaf6f%3A0xa60c3a839b1f7c8e!2s21727%20SE%203rd%20Pl%2C%20Sammamish%2C%20WA%2098074!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="US Office Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </Card> */}

            {/* India Office Map */}
            {/* <Card className="overflow-hidden bg-card/50 border-border/50">
              <div className="p-4 border-b border-border/50">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <span>🇮🇳</span> APAC Office
                </h3>
                <p className="text-sm text-foreground/70">ATM 07, Iconic Tower, Urbtech Trade Center, Sec. 132, Noida - UP 201304</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112173.0399551981!2d77.31119!3d28.505184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37eb7f1dbb3e1c8d!2sUrbtech%20Trade%20Centre!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="India Office Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </Card> */}

            {/* US Office Map – Full Color */}
<Card className="overflow-hidden bg-card/50 border-border/50">
  <div className="p-4 border-b border-border/50">
    <h3 className="text-xl font-bold flex items-center gap-2">
      US Headquarters
    </h3>
  </div>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172037.06377825903!2d-122.17136205!3d47.605736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549071fcfd8aaf6f%3A0xa60c3a839b1f7c8e!2s21727%20SE%203rd%20Pl%2C%20Sammamish%2C%20WA%2098074!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
    width="100%"
    height="350"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="US Office Location"
    className="transition-all duration-500"
  />
</Card>

{/* India Office Map – Full Color */}
<Card className="overflow-hidden bg-card/50 border-border/50">
  <div className="p-4 border-b border-border/50">
    <h3 className="text-xl font-bold flex items-center gap-2">
      APAC Office
    </h3>
  </div>
  {/* <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112173.0399551981!2d77.31119!3d28.505184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37eb7f1dbb3e1c8d!2sUrbtech%20Trade%20Centre!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
    width="100%"
    height="350"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="India Office Location"
    className="transition-all duration-500"
  /> */}
              
              <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56075.72375046183!2d77.30646221953128!3d28.547752012109385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce627eaaaaaab%3A0x1683188e18dcfc43!2sUrbtech%20Trade%20Centre!5e0!3m2!1sen!2sin!4v1764609556230!5m2!1sen!2sin"
  width="100%"
  height="350"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Urbtech Trade Centre Location"
/>

</Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
