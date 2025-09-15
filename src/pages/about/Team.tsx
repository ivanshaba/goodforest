import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Mail } from "lucide-react";

const AboutTeam = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: teamRef, isVisible: teamVisible } = useScrollReveal();

  const teamMembers = [
    {
      name: "Dr. Sarah Nakamura",
      role: "Executive Director",
      bio: "Environmental scientist with 15+ years experience in forest conservation across East Africa.",
      image: "/placeholder.svg",
      initials: "SN"
    },
    {
      name: "James Mugisha",
      role: "Program Director",
      bio: "Community development specialist focused on sustainable livelihoods and forest management.",
      image: "/placeholder.svg", 
      initials: "JM"
    },
    {
      name: "Dr. Rachel Okello",
      role: "Research Lead",
      bio: "Forest ecologist and data scientist developing innovative monitoring technologies.",
      image: "/placeholder.svg",
      initials: "RO"
    },
    {
      name: "Moses Kyambadde",
      role: "Community Relations Manager",
      bio: "Local leader with deep knowledge of Ugandan communities and forest ecosystems.",
      image: "/placeholder.svg",
      initials: "MK"
    },
    {
      name: "Grace Auma",
      role: "Conservation Coordinator", 
      bio: "Field coordinator overseeing tree planting and forest restoration projects.",
      image: "/placeholder.svg",
      initials: "GA"
    },
    {
      name: "David Ssebunya",
      role: "Technology Manager",
      bio: "Software engineer developing the TreeO platform and digital conservation tools.",
      image: "/placeholder.svg",
      initials: "DS"
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
              Meet Our <span className="text-accent">Team</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Dedicated professionals working tirelessly for forest conservation and community empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div ref={teamRef} className={`transition-all duration-1000 ease-out ${
            teamVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Our Leadership Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our diverse team brings together expertise in conservation science, community development, 
                technology, and local knowledge to create lasting impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className={`bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center ${
                    teamVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <Avatar className="w-24 h-24 mx-auto mb-6">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="text-xl font-bold bg-primary text-primary-foreground">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-4">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">{member.bio}</p>
                  
                  <div className="flex justify-center space-x-4">
                    <button className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                      <Mail className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                      <Linkedin className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            We're always looking for passionate individuals who share our commitment 
            to forest conservation and community empowerment.
          </p>
          <a
            href="/partners/opportunities"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-white/90 transition-colors duration-300"
          >
            View Opportunities
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutTeam;