import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutStory = () => {
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
              Our <span className="text-accent">Story</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              The journey that led to the founding of Good Forests Foundation Uganda.
            </p>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div ref={contentRef} className={`transition-all duration-1000 ease-out ${
              contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}>
              <div className="prose prose-lg mx-auto text-muted-foreground">
                <h2 className="text-3xl font-bold text-foreground mb-6">A Vision Born from Necessity</h2>
                <p className="leading-relaxed mb-6">
                  Good Forests Foundation Uganda was born from a deep understanding that Uganda's forests 
                  are not just natural resources, but the foundation of life for millions of people. 
                  Our story began when our founders witnessed firsthand the devastating effects of 
                  deforestation on local communities and ecosystems.
                </p>
                
                <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">The Founding Moment</h2>
                <p className="leading-relaxed mb-6">
                  In 2018, our founders embarked on a journey across Uganda's forest landscapes, 
                  meeting with communities whose lives were intimately connected to the forests. 
                  They saw families struggling as their traditional sources of livelihood disappeared 
                  with the trees. They witnessed the loss of biodiversity and the growing challenges 
                  of climate change.
                </p>
                
                <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">Building Partnerships</h2>
                <p className="leading-relaxed mb-6">
                  From these encounters, we learned that successful conservation requires more than 
                  just protecting trees—it requires empowering people. We began building partnerships 
                  with local communities, understanding their needs, and developing programs that 
                  could provide sustainable livelihoods while protecting forests.
                </p>
                
                <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">Today and Tomorrow</h2>
                <p className="leading-relaxed mb-6">
                  Today, Good Forests Foundation Uganda stands as a testament to what's possible 
                  when conservation and community development work hand in hand. We've planted 
                  thousands of trees, empowered hundreds of families, and protected thousands 
                  of hectares of forest land.
                </p>
                
                <p className="leading-relaxed">
                  Our story continues to unfold with every tree planted, every family empowered, 
                  and every partnership formed. We're not just conserving forests—we're building 
                  a sustainable future for Uganda and its people.
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

export default AboutStory;