import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Footer = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <footer className="bg-forest-dark text-white">
      <div className="container mx-auto px-6 py-16">
        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          {/* Organization Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              {/* <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">GF</span>
              </div>
              <div className="text-primary font-semibold">
                <div className="text-sm leading-tight">GOOD FORESTS</div>
                <div className="text-sm leading-tight">FOUNDATION UGANDA</div>
              </div> */}
              <img style={{width:"150px", height:"60px"}} src="/logo-2.png" alt="" />
            </div>
            <p className="text-white/80 leading-relaxed">
              Empowering Farmers and Forests through sustainable conservation, 
              community engagement, and cutting-edge monitoring technology.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-white/60 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-white/60 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-white/60 hover:text-accent cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-white/60 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Our Work", "Resources", "Partners", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/80 hover:text-accent transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Our Programs</h3>
            <ul className="space-y-3">
              {[
                "Conservation Programs",
                "Community Empowerment", 
                "TreeO Technology",
                "Educational Materials",
                "Corporate Partnerships"
              ].map((program) => (
                <li key={program}>
                  <a href="#" className="text-white/80 hover:text-accent transition-colors duration-200">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-white/80 text-sm">
                  Crown House Rooftop, Plot 4A,<br />
                  Kampala Road, Kampala Uganda
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:info@goodforestuganda.org" className="text-white/80 hover:text-accent transition-colors">
                  info@goodforestuganda.org
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+256700000000" className="text-white/80 hover:text-accent transition-colors">
                  +256 700 000 000
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2024 Good Forest Foundation Uganda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};