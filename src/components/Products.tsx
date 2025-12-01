import { Card } from "@/components/ui/card";

const products = [
  {
    name: "TRISHULX",
    tagline: "Solution Aggregator & Manageability Partner",
    description: "Digital transformation empowering the connected and aware ecosystem"
  },
  {
    name: "THIRDEYEX",
    tagline: "Advanced Analytics",
    description: "B2B"
  },
  {
    name: "CHAKRAX",
    tagline: "VC Platform",
    description: "India-focused investing from Seed to IPO"
  }
];

export const Products = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover-lift animate-scale-in text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-2 text-primary">{product.name}</h3>
              <p className="text-foreground/70 italic mb-3">{product.tagline}</p>
              <p className="text-foreground/80">{product.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
