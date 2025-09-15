import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Users, GraduationCap, Coins, Home } from "lucide-react";

const WorkCommunity = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: programsRef, isVisible: programsVisible } = useScrollReveal();

  const empowermentPrograms = [
    {
      icon: GraduationCap,
      title: "Capacity Building",
      description: "Training community members in sustainable forest management and conservation techniques.",
      activities: [
        "Forest management training",
        "Leadership development programs",
        "Technical skills workshops",
        "Conservation education"
      ]
    },
    {
      icon: Coins,
      title: "Sustainable Livelihoods",
      description: "Creating income-generating opportunities that support both families and forest conservation.",
      activities: [
        "Agroforestry training",
        "Eco-tourism development",
        "Forest product enterprises",
        "Beekeeping and honey production"
      ]
    },
    {
      icon: Users,
      title: "Community Organizations",
      description: "Strengthening local institutions and building networks for collective action.",
      activities: [
        "Forest user groups formation",
        "Women's cooperatives",
        "Youth environmental clubs",
        "Traditional leader engagement"
      ]
    },
    {
      icon: Home,
      title: "Infrastructure Development",
      description: "Supporting community infrastructure that enables sustainable forest use and protection.",
      activities: [
        "Community forest centers",
        "Water point protection",
        "Eco-friendly housing",
        "Renewable energy systems"
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
              Community <span className="text-accent">Empowerment</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Building local capacity and creating sustainable livelihoods through forest-based enterprises.
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
                Empowering Communities
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We believe that sustainable forest conservation requires empowered communities. 
                Our programs build local capacity and create economic opportunities that benefit both people and forests.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {empowermentPrograms.map((program, index) => (
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
                    <h4 className="font-semibold text-foreground mb-4">Program Components:</h4>
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

      {/* Success Stories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Community Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real impact from our community empowerment programs across Uganda.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Nakasongola Women's Cooperative",
                story: "50 women now earn sustainable income through honey production and forest fruit processing.",
                impact: "300% increase in household income"
              },
              {
                title: "Mubende Youth Forest Club", 
                story: "Young people leading tree planting initiatives and environmental education in schools.",
                impact: "5,000 trees planted by youth"
              },
              {
                title: "Kiboga Agroforestry Group",
                story: "Farmers integrating trees into agriculture, improving soil fertility and crop yields.",
                impact: "40% increase in crop productivity"
              }
            ].map((story, index) => (
              <div key={story.title} className="bg-card p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-4">{story.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{story.story}</p>
                <div className="bg-primary/10 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-primary">{story.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Empowerment Impact</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Measuring the positive changes in community capacity and livelihoods.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Families Empowered", description: "Direct beneficiaries of programs" },
              { number: "150", label: "Leaders Trained", description: "Community conservation leaders" },
              { number: "25", label: "Enterprises Started", description: "Forest-based businesses" },
              { number: "85%", label: "Income Increase", description: "Average household improvement" }
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

      {/* Community Approach */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Community-Centered Approach
            </h2>
            <p className="text-xl mb-12 text-white/90">
              We work with communities as partners, not beneficiaries. Every program is designed 
              with community input and led by local champions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                {
                  title: "Community-Led",
                  description: "Programs are initiated, planned, and implemented by community members themselves."
                },
                {
                  title: "Culturally Appropriate",
                  description: "We respect and build upon traditional knowledge and cultural practices."
                },
                {
                  title: "Sustainable Impact",
                  description: "Focus on long-term capacity building rather than short-term interventions."
                }
              ].map((principle, index) => (
                <div key={principle.title} className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4">{principle.title}</h3>
                  <p className="text-white/90 leading-relaxed">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkCommunity;