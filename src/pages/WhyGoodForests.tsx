import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TreePine, Users, Globe, Heart } from "lucide-react";

const WhyGoodForests = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal();

  const reasons = [
    {
      icon: TreePine,
      title: "Climate Regulation",
      description: "Forests act as carbon sinks, absorbing CO2 from the atmosphere and helping mitigate climate change effects."
    },
    {
      icon: Users,
      title: "Community Livelihoods",
      description: "Sustainable forest management provides income opportunities and resources for local communities."
    },
    {
      icon: Globe,
      title: "Biodiversity Conservation",
      description: "Forests are home to 80% of terrestrial biodiversity, protecting countless species and ecosystems."
    },
    {
      icon: Heart,
      title: "Human Wellbeing",
      description: "Forests provide clean air, water filtration, and natural spaces that support physical and mental health."
    }
  ];

  const statistics = [
    { number: "31%", label: "of global land covered by forests" },
    { number: "1.6B", label: "people depend on forests for livelihoods" },
    { number: "2.5B", label: "tons of CO2 stored by forests annually" },
    { number: "80%", label: "of terrestrial biodiversity in forests" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-forest-dark via-forest-medium to-forest-light">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <div ref={titleRef} className={`transition-all duration-1000 ease-out ${
            titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Why <span className="text-accent">Good Forests</span> Matter
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Forests are the lungs of our planet, the foundation of biodiversity, and the lifeline of communities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div ref={contentRef} className={`text-center mb-16 transition-all duration-1000 ease-out ${
            contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              The Critical Role of Forests
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Understanding why forest conservation is essential for our planet's future and human survival.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className={`text-center transition-all duration-1000 ease-out ${
                  contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <reason.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div ref={statsRef} className={`transition-all duration-1000 ease-out ${
            statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-center text-foreground mb-16">
              Forests By The Numbers
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {statistics.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center p-8 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                    statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-4">{stat.number}</div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Join Us in Forest Conservation
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Every forest saved, every tree planted, and every community empowered brings us closer to a sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/partners/donate"
              className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-white/90 transition-colors duration-300"
            >
              Make a Donation
            </a>
            <a
              href="/work"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors duration-300"
            >
              Learn About Our Work
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyGoodForests;