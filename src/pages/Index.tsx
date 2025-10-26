import Header from "@/components/Header";
import PromotionalBanner from "@/components/PromotionalBanner";
import ServicesGrid from "@/components/ServicesGrid";
import PickupSlots from "@/components/PickupSlots";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-6 md:py-12">
        <PromotionalBanner />
        <ServicesGrid />
        <PickupSlots />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
