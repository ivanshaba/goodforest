import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, BookOpen } from "lucide-react";

const Resources = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: sectionsRef, isVisible: sectionsVisible } = useScrollReveal();

  const resourceSections = [
    {
      icon: FileText,
      title: "Reports & Publications",
      description: "Access our research findings, impact reports, and scientific publications on forest conservation.",
      link: "/resources/reports",
      items: ["Annual Impact Reports", "Research Papers", "Policy Briefs", "Technical Guidelines"]
    },
    {
      icon: BookOpen,
      title: "Educational Materials",
      description: "Discover learning resources, guides, and materials for forest conservation education.",
      link: "/resources/education",
      items: ["Conservation Guides", "Training Manuals", "Community Toolkits", "Educational Videos"]
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
              Knowledge & <span className="text-accent">Resources</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Access our research, reports, and educational materials to learn more about forest conservation and sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Sections */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div ref={sectionsRef} className={`transition-all duration-1000 ease-out ${
            sectionsVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Explore Our Resources
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We believe in sharing knowledge to advance forest conservation. 
                Access our research, reports, and educational materials.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {resourceSections.map((section, index) => (
                <div
                  key={section.title}
                  className={`group transition-all duration-1000 ease-out ${
                    sectionsVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <section.icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h3 className="text-3xl font-bold text-foreground mb-4">
                      {section.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {section.description}
                    </p>
                    
                    <ul className="space-y-2 mb-8">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <Button asChild variant="default" className="group/btn">
                      <a href={section.link}>
                        Explore Resources
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter to receive the latest research findings, 
              reports, and educational resources directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="px-6 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;