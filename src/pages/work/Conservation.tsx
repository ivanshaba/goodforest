import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TreePine, Leaf, Shield, BarChart3 } from "lucide-react";

const WorkConservation = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: programsRef, isVisible: programsVisible } = useScrollReveal();

  const conservationPrograms = [
    {
      icon: TreePine,
      title: "Forest Restoration",
      description: "Restoring degraded forest lands through native tree planting and natural regeneration techniques.",
      activities: [
        "Native species tree planting",
        "Soil restoration and erosion control", 
        "Community nursery establishment",
        "Natural regeneration support"
      ]
    },
    {
      icon: Shield,
      title: "Forest Protection",
      description: "Protecting existing forests from deforestation, illegal logging, and encroachment.",
      activities: [
        "Community forest monitoring",
        "Anti-poaching patrols",
        "Boundary demarcation",
        "Legal advocacy and enforcement"
      ]
    },
    {
      icon: Leaf,
      title: "Biodiversity Conservation",
      description: "Preserving Uganda's rich biodiversity through habitat protection and species conservation.",
      activities: [
        "Species monitoring programs",
        "Habitat corridor creation",
        "Endangered species protection",
        "Ecosystem restoration"
      ]
    },
    {
      icon: BarChart3,
      title: "Forest Monitoring",
      description: "Using technology and community involvement to monitor forest health and changes over time.",
      activities: [
        "Satellite forest monitoring",
        "Community data collection",
        "Forest health assessments",
        "Impact measurement and reporting"
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
              Conservation <span className="text-accent">Programs</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Protecting and restoring Uganda's forest ecosystems through science-based conservation strategies.
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
                Our Conservation Approach
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We use a comprehensive approach to forest conservation that combines restoration, 
                protection, biodiversity conservation, and continuous monitoring.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {conservationPrograms.map((program, index) => (
                <div
                  key={program.title}
                  className={`bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                    programsVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <program.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">{program.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{program.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-4">Key Activities:</h4>
                    <ul className="space-y-2">
                      {program.activities.map((activity, activityIndex) => (
                        <li key={activityIndex} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Conservation Impact</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Measurable results from our conservation programs across Uganda.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "1,200", label: "Hectares Protected", description: "Forest areas under active protection" },
              { number: "15,000+", label: "Trees Planted", description: "Native species restoration" },
              { number: "50+", label: "Species Monitored", description: "Biodiversity tracking programs" },
              { number: "25", label: "Forest Sites", description: "Active conservation locations" }
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

      {/* Methods and Technology */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-foreground mb-12">
              Methods & Technology
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Scientific Methods</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <span><strong>Ecological surveys</strong> to assess forest health and biodiversity</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <span><strong>Soil analysis</strong> for optimal restoration techniques</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <span><strong>Climate monitoring</strong> to track environmental changes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <span><strong>Species population studies</strong> for conservation planning</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Technology Tools</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3"></div>
                    <span><strong>Satellite imagery</strong> for forest monitoring and change detection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3"></div>
                    <span><strong>GPS mapping</strong> for precise location tracking</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3"></div>
                    <span><strong>Mobile apps</strong> for community data collection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3"></div>
                    <span><strong>Drone surveys</strong> for detailed forest assessments</span>
                  </li>
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

export default WorkConservation;