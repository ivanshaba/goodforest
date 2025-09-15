import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { IntroductionSection } from "@/components/IntroductionSection";
import { ImpactSection } from "@/components/ImpactSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <IntroductionSection />
      <ImpactSection />
      <ProgramsSection />
      <Footer />
    </div>
  );
};

export default Index;
