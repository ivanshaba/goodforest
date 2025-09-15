import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutPartners = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: partnersRef, isVisible: partnersVisible } = useScrollReveal();

  const partnerCategories = [
    {
      title: "Government Partners",
      description: "Official partnerships with government agencies and ministries",
      partners: [
        "Ministry of Water and Environment",
        "Uganda Wildlife Authority", 
        "National Forest Authority",
        "Local Government Councils"
      ]
    },
    {
      title: "International Organizations",
      description: "Global partnerships for conservation and development",
      partners: [
        "World Wildlife Fund (WWF)",
        "UN Environment Programme",
        "African Development Bank",
        "EU Forest Law Enforcement"
      ]
    },
    {
      title: "Academic Institutions",
      description: "Research and educational partnerships",
      partners: [
        "Makerere University",
        "University of Oxford",
        "International Institute of Tropical Agriculture",
        "Uganda National Meteorological Authority"
      ]
    },
    {
      title: "Community Organizations",
      description: "Local partnerships with community groups",
      partners: [
        "Uganda Community Forest Association",
        "Women's Tree Planting Cooperatives",
        "Youth Environmental Groups",
        "Traditional Leader Councils"
      ]
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
              Our <span className="text-accent">Partners</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Collaborating with organizations worldwide to create lasting impact in forest conservation.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div ref={partnersRef} className={`transition-all duration-1000 ease-out ${
            partnersVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Partnership Network
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our work is made possible through strong partnerships with government agencies, 
                international organizations, academic institutions, and community groups.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {partnerCategories.map((category, index) => (
                <div
                  key={category.title}
                  className={`bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    partnersVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <h3 className="text-2xl font-bold text-foreground mb-4">{category.title}</h3>
                  <p className="text-muted-foreground mb-6">{category.description}</p>
                  
                  <ul className="space-y-3">
                    {category.partners.map((partner, partnerIndex) => (
                      <li key={partnerIndex} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {partner}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Approach */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-12">
              Our Partnership Approach
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Collaborative",
                  description: "We work together as equals, combining our strengths and resources for maximum impact."
                },
                {
                  title: "Transparent", 
                  description: "Open communication and shared decision-making ensure all partners are informed and engaged."
                },
                {
                  title: "Long-term",
                  description: "We build lasting relationships that create sustainable change over time."
                }
              ].map((approach, index) => (
                <div key={approach.title} className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{approach.title}</h3>
                  <p className="text-muted-foreground">{approach.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Become a Partner
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join our network of partners working together to protect Uganda's forests 
            and empower communities for a sustainable future.
          </p>
          <a
            href="/partners"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-white/90 transition-colors duration-300"
          >
            Partnership Opportunities
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPartners;