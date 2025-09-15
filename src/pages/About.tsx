import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Award } from "lucide-react";

const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();
  const { ref: sectionsRef, isVisible: sectionsVisible } = useScrollReveal();

  const highlights = [
    {
      icon: Users,
      title: "Our Team",
      description: "Dedicated professionals working tirelessly for forest conservation",
      link: "/about/team"
    },
    {
      icon: Target,
      title: "Vision & Mission",
      description: "Our commitment to sustainable forest management and community empowerment",
      link: "/about/vision"
    },
    {
      icon: Award,
      title: "Our Story",
      description: "The journey that led to the founding of Good Forests Foundation",
      link: "/about/story"
    }
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
              About <span className="text-accent">Good Forests</span><br />
              Foundation Uganda
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Empowering communities through sustainable forest conservation and environmental stewardship in Uganda.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div ref={contentRef} className={`text-center mb-16 transition-all duration-1000 ease-out ${
              contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Protecting Uganda's Forests for Future Generations
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Good Forests Foundation Uganda is a non-profit organization dedicated to forest conservation, 
                community empowerment, and sustainable environmental practices. We believe that healthy forests 
                are the foundation of thriving communities and a sustainable future.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through innovative programs, community partnerships, and science-based approaches, we work to 
                restore degraded forests, protect existing ecosystems, and create sustainable livelihoods for 
                local communities across Uganda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Sections */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div ref={sectionsRef} className={`transition-all duration-1000 ease-out ${
            sectionsVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-center text-foreground mb-16">
              Learn More About Us
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight.title}
                  className={`bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                    sectionsVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <highlight.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">{highlight.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{highlight.description}</p>
                  <Button asChild variant="outline" className="group">
                    <a href={highlight.link}>
                      Learn More 
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-16">
              Our Core Values
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Sustainability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to practices that meet present needs without compromising 
                  the ability of future generations to meet their own needs.
                </p>
              </div>
              
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Community Partnership</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that lasting conservation success comes through meaningful 
                  collaboration with local communities.
                </p>
              </div>
              
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Scientific Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our programs are grounded in rigorous scientific research and 
                  evidence-based conservation strategies.
                </p>
              </div>
              
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Transparency</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain open communication about our work, impacts, and challenges 
                  with all stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;