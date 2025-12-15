import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // assuming you have a Badge component in shadcn/ui

const products = [
  {
    name: "TRISHULX",
    tagline: "Solution Aggregator & Manageability Partner",
    description: "Digital transformation empowering the connected and aware ecosystem",
    isLive: true,
  },
  {
    name: "THIRDEYEX",
    tagline: "Advanced Analytics",
    description: "B2B",
    isLive: false,
  },
  {
    name: "CHAKRAX",
    tagline: "VC Platform",
    description: "India-focused investing from Seed to IPO",
    isLive: false,
  },
];

export const Products = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => {
            const isComingSoon = !product.isLive;

            return (
              <Card
                key={index}
                className={`
                  p-8 bg-card/50 backdrop-blur-sm border-border/50 text-center
                  transition-all duration-300
                  ${isComingSoon 
                    ? "opacity-70 grayscale cursor-not-allowed" 
                    : "hover-lift hover:shadow-2xl hover:border-primary/50"
                  }
                  animate-scale-in
                `}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Coming Soon Badge */}
                {isComingSoon && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="secondary" className="bg-orange-500 text-white px-3 py-1 text-xs font-semibold">
                      Coming Soon
                    </Badge>
                  </div>
                )}

                <div className="mt-4">
                  <h3 className={`text-2xl font-bold mb-2 ${isComingSoon ? "text-foreground/60" : "text-primary"}`}>
                    {product.name}
                  </h3>
                  <p className={`italic mb-3 ${isComingSoon ? "text-foreground/50" : "text-foreground/70"}`}>
                    {product.tagline}
                  </p>
                  <p className={isComingSoon ? "text-foreground/50" : "text-foreground/80"}>
                    {product.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};