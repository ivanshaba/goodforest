import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Smartphone, MapPin, BarChart3, Camera, Zap, Users } from "lucide-react";

const WorkTreeO = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollReveal();

  const platformFeatures = [
    {
      icon: MapPin,
      title: "Tree Geolocation",
      description: "Precise GPS tracking of every planted tree for accurate monitoring and verification.",
      benefits: ["Exact tree locations", "Growth tracking", "Survival monitoring", "Impact verification"]
    },
    {
      icon: Camera,
      title: "Photo Documentation",
      description: "Visual progress tracking through timestamped photographs of tree growth.",
      benefits: ["Growth documentation", "Health assessment", "Before/after comparison", "Impact visualization"]
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Advanced analytics and reporting for forest conservation impact measurement.",
      benefits: ["Real-time dashboards", "Progress reports", "Impact metrics", "Trend analysis"]
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Mobile tools that enable community members to participate in forest monitoring.",
      benefits: ["Easy data collection", "Community involvement", "Local ownership", "Skill development"]
    },
    {
      icon: Zap,
      title: "Smart Notifications",
      description: "Automated alerts and reminders for tree care, monitoring, and maintenance activities.",
      benefits: ["Care reminders", "Monitoring alerts", "Weather updates", "Action notifications"]
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Optimized for smartphones to work in remote areas with limited connectivity.",
      benefits: ["Offline capability", "Low bandwidth usage", "Simple interface", "Local language support"]
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
              TreeO <span className="text-accent">Platform</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Innovative technology platform for forest monitoring, tree tracking, and impact measurement.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Technology for Conservation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              TreeO is our innovative digital platform that combines mobile technology, geolocation, 
              and community engagement to revolutionize forest monitoring and tree planting verification. 
              The platform enables real-time tracking of reforestation efforts and provides transparent, 
              data-driven insights into conservation impact.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div ref={featuresRef} className={`transition-all duration-1000 ease-out ${
            featuresVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Platform Features
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive tools for forest monitoring, community engagement, and impact measurement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                    featuresVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {benefit}
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

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-foreground mb-16">
              How TreeO Works
            </h2>
            
            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Tree Registration",
                  description: "Each planted tree is registered in the system with GPS coordinates, species information, and planting date."
                },
                {
                  step: "02",
                  title: "Community Monitoring",
                  description: "Local community members use the mobile app to take photos and record tree health data during regular monitoring visits."
                },
                {
                  step: "03",
                  title: "Data Analysis",
                  description: "The platform analyzes collected data to track tree survival rates, growth patterns, and overall forest restoration progress."
                },
                {
                  step: "04",
                  title: "Impact Reporting",
                  description: "Automated reports provide transparent, real-time insights into conservation impact for stakeholders and funders."
                }
              ].map((step, index) => (
                <div key={step.step} className="flex items-start space-x-6">
                  <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Impact */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Platform Impact</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real numbers from TreeO platform usage across our conservation programs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "12,500+", label: "Trees Tracked", description: "Individual trees in the system" },
              { number: "75", label: "Active Users", description: "Community monitors using the app" },
              { number: "2,800", label: "Photos Collected", description: "Tree monitoring photographs" },
              { number: "15", label: "Project Sites", description: "Locations using TreeO platform" }
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

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Built for the Field</h2>
            <p className="text-xl mb-12 text-white/90">
              TreeO is designed to work in challenging environments with limited connectivity, 
              ensuring reliable performance in remote forest locations.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Offline Capabilities</h3>
                <p className="text-white/90 leading-relaxed">
                  Data collection continues even without internet connection, with automatic 
                  synchronization when connectivity is restored.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Low Bandwidth Design</h3>
                <p className="text-white/90 leading-relaxed">
                  Optimized for slow internet connections with efficient data compression 
                  and minimal bandwidth requirements.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Multi-Language Support</h3>
                <p className="text-white/90 leading-relaxed">
                  Available in local Ugandan languages to ensure accessibility for 
                  all community members.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Open Source</h3>
                <p className="text-white/90 leading-relaxed">
                  Built on open-source technologies to ensure transparency, 
                  adaptability, and community contribution.
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

export default WorkTreeO;