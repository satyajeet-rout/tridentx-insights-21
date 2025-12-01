import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { OfficeLocations } from "@/components/OfficeLocations";
import { Services } from "@/components/Services";
import { Products } from "@/components/Products";
import { Journey } from "@/components/Journey";
import { WhyChoose } from "@/components/WhyChoose";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <OfficeLocations />
      <Services />
      <Products />
      <Journey />
      <WhyChoose />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
