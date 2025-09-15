import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, TreePine, Users, Smartphone, MapPin, HelpCircle } from "lucide-react";

const Work = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: programsRef, isVisible: programsVisible } = useScrollReveal();

  const programs = [
    {
      icon: TreePine,
      title: "Conservation Programs",
      description: "Protecting and restoring Uganda's forest ecosystems through science-based conservation strategies.",
      link: "/work/conservation",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Users,
      title: "Community Empowerment",
      description: "Building local capacity and creating sustainable livelihoods through forest-based enterprises.",
      link: "/work/community",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Smartphone,
      title: "TreeO Platform",
      description: "Innovative technology platform for forest monitoring, tree tracking, and impact measurement.",
      link: "/work/treeo",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: MapPin,
      title: "Operational Areas",
      description: "Discover where we work across Uganda and the specific regions we're making an impact.",
      link: "/work/areas",
      color: "from-orange-500 to-red-600"
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
              Our <span className="text-accent">Conservation</span><br />
              Work in Action
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Discover how we're transforming landscapes, empowering communities, and creating lasting impact across Uganda.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div ref={programsRef} className={`transition-all duration-1000 ease-out ${
            programsVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Our Key Programs
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We work across multiple interconnected areas to create comprehensive solutions 
                for forest conservation and community development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {programs.map((program, index) => (
                <div
                  key={program.title}
                  className={`group relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                    programsVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="p-8 relative z-10">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <program.icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {program.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {program.description}
                    </p>
                    
                    <Button asChild variant="outline" className="group/btn">
                      <a href={program.link}>
                        Explore Program
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Link */}
            <div className="text-center bg-muted/30 rounded-2xl p-8">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Have Questions?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Find answers to frequently asked questions about our work, 
                programs, and how you can get involved in forest conservation.
              </p>
              <Button asChild variant="default">
                <a href="/work/faqs">
                  View FAQs
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Creating Measurable Impact
          </h2>
          <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto">
            Our work is guided by data, measured by results, and driven by the positive 
            changes we create in forest ecosystems and community lives.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "15,000+", label: "Trees Planted" },
              { number: "500+", label: "Families Empowered" },
              { number: "1,200", label: "Hectares Protected" },
              { number: "25", label: "Communities Engaged" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;