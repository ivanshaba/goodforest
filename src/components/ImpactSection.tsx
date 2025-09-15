import { TreePine, Users, MapPin, Leaf } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const impactStats = [
  {
    icon: TreePine,
    number: "50,000+",
    label: "Trees Planted",
    description: "Contributing to forest restoration across Uganda",
  },
  {
    icon: Users,
    number: "1,200+",
    label: "Farmers Empowered",
    description: "Supporting local communities and livelihoods",
  },
  {
    icon: MapPin,
    number: "25",
    label: "Operational Areas",
    description: "Expanding our conservation footprint",
  },
  {
    icon: Leaf,
    number: "15,000",
    label: "Tons CO2 Captured",
    description: "Measurable climate impact through monitoring",
  },
];

export const ImpactSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.2);
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal(0.1);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Our Impact So Far
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Together with farmers and communities, we're creating measurable change 
            for climate resilience and forest restoration across Uganda.
          </p>
        </div>
        
        <div 
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {impactStats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`text-center group hover-lift transition-all duration-700 ease-out ${
                statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                <stat.icon className="w-10 h-10 text-primary transition-all duration-300 group-hover:scale-110" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-forest-dark mb-3">
                {stat.label}
              </div>
              <p className="text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};