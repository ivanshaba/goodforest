import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Trees, Users, Target } from "lucide-react";

const WorkAreas = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: areasRef, isVisible: areasVisible } = useScrollReveal();

  const operationalAreas = [
    {
      region: "Central Uganda",
      districts: ["Kampala", "Wakiso", "Mukono", "Luwero"],
      focus: "Urban forestry and peri-urban conservation",
      projects: [
        "Urban tree planting initiatives",
        "School forest programs", 
        "Community green spaces",
        "Wetland restoration"
      ],
      stats: {
        trees: "3,500+",
        communities: 8,
        area: "450 hectares"
      }
    },
    {
      region: "Mubende District",
      districts: ["Mubende", "Mityana", "Kassanda"],
      focus: "Community-based forest restoration",
      projects: [
        "Degraded land restoration",
        "Agroforestry promotion",
        "Community forest management",
        "Youth engagement programs"
      ],
      stats: {
        trees: "6,200+",
        communities: 12,
        area: "680 hectares"
      }
    },
    {
      region: "Nakasongola Region",
      districts: ["Nakasongola", "Nakaseke", "Luweero"],
      focus: "Savanna woodland conservation",
      projects: [
        "Natural regeneration support",
        "Fire management programs",
        "Pastoral community engagement",
        "Wildlife corridor restoration"
      ],
      stats: {
        trees: "2,800+",
        communities: 6,
        area: "320 hectares"
      }
    },
    {
      region: "Kiboga Area",
      districts: ["Kiboga", "Kyankwanzi", "Hoima"],
      focus: "Forest-agriculture integration",
      projects: [
        "Farmer field schools",
        "Sustainable agriculture training",
        "Tree-crop integration",
        "Market linkage support"
      ],
      stats: {
        trees: "4,100+",
        communities: 15,
        area: "590 hectares"
      }
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
              Operational <span className="text-accent">Areas</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Discover where we work across Uganda and the specific regions we're making an impact.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Where We Work
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Good Forests Foundation Uganda operates across multiple regions, each with unique 
              ecological characteristics and community needs. Our site-specific approaches ensure 
              that conservation efforts are tailored to local conditions and priorities.
            </p>
          </div>
        </div>
      </section>

      {/* Operational Areas */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div ref={areasRef} className={`transition-all duration-1000 ease-out ${
            areasVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <div className="space-y-16">
              {operationalAreas.map((area, index) => (
                <div
                  key={area.region}
                  className={`bg-card rounded-2xl shadow-lg overflow-hidden ${
                    areasVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Main Content */}
                    <div className="lg:col-span-2 p-8">
                      <div className="flex items-center mb-6">
                        <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{area.region}</h3>
                          <p className="text-muted-foreground">
                            {area.districts.join(", ")} Districts
                          </p>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-foreground mb-2">Focus Area</h4>
                        <p className="text-muted-foreground">{area.focus}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-4">Current Projects</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {area.projects.map((project, projectIndex) => (
                            <div key={projectIndex} className="flex items-center text-muted-foreground">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                              <span className="text-sm">{project}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Stats Sidebar */}
                    <div className="bg-muted/50 p-8 flex flex-col justify-center">
                      <h4 className="text-lg font-semibold text-foreground mb-6">Impact Statistics</h4>
                      
                      <div className="space-y-6">
                        <div className="text-center">
                          <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Trees className="w-6 h-6 text-primary" />
                          </div>
                          <div className="text-2xl font-bold text-primary">{area.stats.trees}</div>
                          <p className="text-sm text-muted-foreground">Trees Planted</p>
                        </div>
                        
                        <div className="text-center">
                          <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Users className="w-6 h-6 text-accent" />
                          </div>
                          <div className="text-2xl font-bold text-accent">{area.stats.communities}</div>
                          <p className="text-sm text-muted-foreground">Communities</p>
                        </div>
                        
                        <div className="text-center">
                          <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Target className="w-6 h-6 text-secondary" />
                          </div>
                          <div className="text-2xl font-bold text-secondary">{area.stats.area}</div>
                          <p className="text-sm text-muted-foreground">Area Coverage</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Total Impact */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Combined Impact</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our work across all operational areas creates significant cumulative impact 
              for forest conservation and community development in Uganda.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "16,600+", label: "Total Trees Planted", description: "Across all operational areas" },
              { number: "41", label: "Communities Engaged", description: "Active community partnerships" },
              { number: "2,040", label: "Hectares Covered", description: "Total area under management" },
              { number: "12", label: "Districts Reached", description: "Geographic coverage across Uganda" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center bg-card p-6 rounded-xl shadow-lg">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{stat.label}</h3>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion Plans */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Future Expansion</h2>
            <p className="text-xl mb-12 text-white/90">
              We're continuously expanding our reach to new areas across Uganda, 
              guided by ecological priorities and community needs.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Planned Regions</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Northern Uganda (Gulu, Kitgum)</li>
                  <li>• Eastern Uganda (Mbale, Soroti)</li>
                  <li>• Western Uganda (Fort Portal, Kasese)</li>
                  <li>• Southwest (Mbarara, Kabale)</li>
                </ul>
              </div>
              
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Selection Criteria</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Ecological significance</li>
                  <li>• Community readiness</li>
                  <li>• Deforestation pressure</li>
                  <li>• Partnership opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkAreas;