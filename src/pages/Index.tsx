import Header from "@/components/Header";
import PromotionalBanner from "@/components/PromotionalBanner";
import ServicesGrid from "@/components/ServicesGrid";
import PickupSlots from "@/components/PickupSlots";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <PromotionalBanner />
        <ServicesGrid />
        <PickupSlots />
      </main>
    </div>
  );
};

export default Index;
