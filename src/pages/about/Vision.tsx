import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Eye, Compass } from "lucide-react";

const AboutVision = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

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
              Vision & <span className="text-accent">Mission</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Our commitment to sustainable forest management and community empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div ref={contentRef} className={`transition-all duration-1000 ease-out ${
            contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <div className="space-y-20">
              
              {/* Vision */}
              <div className="text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Eye className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">Our Vision</h2>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  A Uganda where forests and communities thrive together in harmony, creating a 
                  sustainable future where environmental conservation and human prosperity are 
                  inseparably linked, ensuring that future generations inherit a world of abundant 
                  forests and empowered communities.
                </p>
              </div>

              {/* Mission */}
              <div className="text-center">
                <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Target className="w-10 h-10 text-accent" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">Our Mission</h2>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  To protect, restore, and sustainably manage Uganda's forest ecosystems while 
                  empowering local communities through education, capacity building, and the 
                  creation of forest-based sustainable livelihoods that benefit both people and 
                  the environment.
                </p>
              </div>

              {/* Core Values */}
              <div className="text-center">
                <div className="bg-secondary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Compass className="w-10 h-10 text-secondary" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12">Core Values</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {[
                    {
                      title: "Sustainability",
                      description: "We are committed to practices that meet present needs without compromising future generations' ability to meet their own needs."
                    },
                    {
                      title: "Community Partnership",
                      description: "We believe lasting conservation success comes through meaningful collaboration with local communities."
                    },
                    {
                      title: "Scientific Excellence",
                      description: "Our programs are grounded in rigorous scientific research and evidence-based conservation strategies."
                    },
                    {
                      title: "Transparency",
                      description: "We maintain open communication about our work, impacts, and challenges with all stakeholders."
                    },
                    {
                      title: "Innovation",
                      description: "We embrace new technologies and approaches to enhance the effectiveness of our conservation efforts."
                    },
                    {
                      title: "Integrity",
                      description: "We operate with honesty, accountability, and ethical practices in all our interactions and operations."
                    }
                  ].map((value, index) => (
                    <div key={value.title} className="text-left bg-card p-6 rounded-xl shadow-lg">
                      <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-12">Strategic Goals</h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              {[
                {
                  title: "Forest Conservation",
                  goal: "Protect and restore 50,000 hectares of forest land by 2030"
                },
                {
                  title: "Community Empowerment",
                  goal: "Empower 10,000 families with sustainable forest-based livelihoods"
                },
                {
                  title: "Capacity Building", 
                  goal: "Train 500 community conservation leaders across Uganda"
                },
                {
                  title: "Research & Innovation",
                  goal: "Develop and implement 10 innovative conservation technologies"
                }
              ].map((goal, index) => (
                <div key={goal.title} className="bg-card p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-foreground mb-4">{goal.title}</h3>
                  <p className="text-muted-foreground">{goal.goal}</p>
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

export default AboutVision;