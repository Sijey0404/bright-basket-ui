import { Truck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const PromotionalBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-border rounded-2xl overflow-hidden mb-12 animate-fade-in">
      <div className="container mx-auto px-8 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="p-4 bg-primary/10 rounded-full">
              <Truck className="h-12 w-12 text-primary" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Free Pickup & Delivery
          </h1>

          {/* Subheading */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience premium laundry and dry cleaning services delivered right to your doorstep. 
            Professional care for all your garments.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="text-foreground font-medium">Same Day Service</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="text-foreground font-medium">Eco-Friendly Products</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="text-foreground font-medium">Expert Care</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <Button variant="cta" size="xl" className="gap-2">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;
