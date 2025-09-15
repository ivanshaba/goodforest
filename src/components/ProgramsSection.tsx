import { Sprout, Heart, Monitor, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const programs = [
  {
    icon: Sprout,
    title: "Conservation Programs",
    description: "Protecting and restoring critical forest ecosystems through scientific monitoring and community engagement.",
    features: ["Forest restoration", "Biodiversity protection", "Ecosystem monitoring"],
    color: "bg-primary/10 hover:bg-primary/20",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&crop=center",
  },
  {
    icon: Heart,
    title: "Community Empowerment",
    description: "Working directly with farmers and local communities to build sustainable livelihoods through forest conservation.",
    features: ["Farmer training", "Livelihood support", "Capacity building"],
    color: "bg-accent/10 hover:bg-accent/20",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop&crop=center",
  },
  {
    icon: Monitor,
    title: "TreeO Technology",
    description: "Cutting-edge monitoring technology that tracks tree growth, carbon capture, and environmental impact in real-time.",
    features: ["Real-time monitoring", "Carbon tracking", "Impact verification"],
    color: "bg-forest-glow/10 hover:bg-forest-glow/20",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center",
  },
  {
    icon: Globe,
    title: "Climate Solutions",
    description: "Addressing climate change through scalable forest restoration and carbon sequestration projects.",
    features: ["Carbon sequestration", "Climate resilience", "Global impact"],
    color: "bg-secondary/20 hover:bg-secondary/30",
    image: "https://images.unsplash.com/photo-1569163139394-de4e5f43e4e3?w=400&h=300&fit=crop&crop=center",
  },
];

export const ProgramsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.2);
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal(0.1);
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollReveal(0.3);

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Empowering Farmers and Forests
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive approach combines technology, community engagement, 
            and scientific monitoring to create lasting environmental and social impact.
          </p>
        </div>
        
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {programs.map((program, index) => (
            <Card 
              key={program.title}
              className={`group hover-lift border-0 shadow-lg ${program.color} overflow-hidden transition-all duration-700 ease-out ${
                cardsVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <program.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl text-primary group-hover:text-primary-dark transition-colors duration-300">{program.title}</CardTitle>
                <CardDescription className="text-lg text-forest-dark">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <li key={feature} className="flex items-center text-forest-dark group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${featureIndex * 50}ms` }}>
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div 
          ref={buttonRef}
          className={`text-center transition-all duration-1000 ease-out ${
            buttonVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <Button 
            asChild
            size="lg" 
            className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 text-lg font-semibold hover-lift"
          >
            <a href="/work">Learn More About Our Work</a>
          </Button>
        </div>
      </div>
    </section>
  );
};