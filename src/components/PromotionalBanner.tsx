import { Sparkles } from "lucide-react";

const PromotionalBanner = () => {
  return (
    <section className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-border rounded-xl p-8 mb-8 animate-fade-in">
      <div className="flex items-center justify-center gap-3 text-center">
        <Sparkles className="h-6 w-6 text-primary animate-pulse" />
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Special Offer!</h2>
          <p className="text-muted-foreground">
            Get 20% off on your first order. Limited time only!
          </p>
        </div>
        <Sparkles className="h-6 w-6 text-primary animate-pulse" />
      </div>
    </section>
  );
};

export default PromotionalBanner;
