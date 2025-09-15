import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PartnersOpportunities = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-forest-dark via-forest-medium to-forest-light">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <div ref={titleRef} className={`transition-all duration-1000 ease-out ${
            titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Volunteer <span className="text-accent">Opportunities</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Join Our Team</h2>
            <p className="text-lg text-muted-foreground">Volunteer opportunities will be listed here.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnersOpportunities;