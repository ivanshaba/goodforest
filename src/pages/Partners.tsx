import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Building } from "lucide-react";

const Partners = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: waysRef, isVisible: waysVisible } = useScrollReveal();

  const partnershipWays = [
    {
      icon: Heart,
      title: "Donate",
      description: "Make a direct impact on forest conservation through financial support for our programs.",
      link: "/partners/donate",
      color: "from-red-500 to-pink-600",
      benefits: ["Tax-deductible donations", "Impact reports", "Recognition opportunities", "Direct program support"]
    },
    {
      icon: Users,
      title: "Volunteer Opportunities",
      description: "Join our team as a volunteer and contribute your skills to forest conservation efforts.",
      link: "/partners/opportunities", 
      color: "from-blue-500 to-indigo-600",
      benefits: ["Hands-on conservation work", "Skill development", "Community engagement", "Networking opportunities"]
    },
    {
      icon: Building,
      title: "Corporate Partnerships",
      description: "Partner with us to integrate forest conservation into your corporate social responsibility.",
      link: "/partners/corporate",
      color: "from-green-500 to-emerald-600", 
      benefits: ["CSR alignment", "Employee engagement", "Sustainability reporting", "Brand association"]
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
              Partner With Us for <span className="text-accent">Change</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join our mission to protect Uganda's forests and empower communities through various partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Ways */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div ref={waysRef} className={`transition-all duration-1000 ease-out ${
            waysVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Ways to Partner
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Whether through donations, volunteering, or corporate partnerships, 
                there are many ways to join our forest conservation mission.
              </p>
            </div>

            <div className="space-y-12">
              {partnershipWays.map((way, index) => (
                <div
                  key={way.title}
                  className={`group transition-all duration-1000 ease-out ${
                    waysVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Content Side */}
                      <div className="p-8 lg:p-12">
                        <div className="flex items-center mb-6">
                          <div className={`bg-gradient-to-br ${way.color} w-16 h-16 rounded-full flex items-center justify-center mr-4`}>
                            <way.icon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-3xl font-bold text-foreground">
                            {way.title}
                          </h3>
                        </div>
                        
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                          {way.description}
                        </p>
                        
                        <div className="mb-8">
                          <h4 className="text-xl font-semibold text-foreground mb-4">Benefits:</h4>
                          <ul className="space-y-2">
                            {way.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-center text-muted-foreground">
                                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button asChild size="lg" className="group/btn">
                          <a href={way.link}>
                            Learn More
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                          </a>
                        </Button>
                      </div>
                      
                      {/* Visual Side */}
                      <div className={`relative bg-gradient-to-br ${way.color} flex items-center justify-center min-h-[300px] md:min-h-[400px]`}>
                        <div className="absolute inset-0 bg-black/20"></div>
                        <way.icon className="w-24 h-24 text-white/30 relative z-10" />
                      </div>
                    </div>
                  </div>
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
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Every partnership, donation, and volunteer hour brings us closer to 
            our goal of sustainable forest conservation in Uganda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <a href="/partners/donate">Start Donating</a>
            </Button>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <a href="/about">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;