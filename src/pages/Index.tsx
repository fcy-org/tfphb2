import UrgencyBanner from "@/components/UrgencyBanner";
import HeroSection from "@/components/HeroSection";
import InstagramCarousel from "@/components/InstagramCarousel";
import BenefitsSection from "@/components/BenefitsSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <UrgencyBanner />
      <HeroSection />
      <InstagramCarousel />
      <BenefitsSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
