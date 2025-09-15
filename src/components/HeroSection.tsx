import { CountdownTimer } from "./CountdownTimer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import forestHeroBg from "@/assets/forest-hero-bg.jpg";

export const HeroSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.2);
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal(0.1);
  const { ref: countdownRef, isVisible: countdownVisible } = useScrollReveal(0.3);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        className="absolute inset-0 w-full h-full object-cover"
        poster={forestHeroBg}
      >
        <source src="/video.mp4" type="video/mp4" />
        {/* Fallback to image if video fails to load */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${forestHeroBg})` }}
        ></div>
      </video>
      <div className="absolute inset-0 bg-forest-dark/40"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 pt-32">
        <div className="max-w-4xl backdrop-blur-xl bg-white/5 rounded-3xl border border-white/20 p-8 lg:p-12 shadow-2xl mt-16">
          <h1 
            ref={titleRef}
            className={`text-2xl lg:text-4xl font-bold text-white mb-8 overflow-hidden group cursor-pointer transition-all duration-1000 ease-out ${
              titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <span 
              className={`inline-block animate-hero-title-interactive animate-continuous-fade animate-continuous-float transition-all duration-300 ${
                titleVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
              }`}
              style={{
                transitionDelay: titleVisible ? '200ms' : '0ms'
              }}
            >
              Good Forests are
            </span>{" "}
            <span 
              className={`inline-block text-accent animate-hero-accent-interactive animate-shimmer animate-continuous-fade transition-all duration-500 ${
                titleVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
              }`}
              style={{
                transitionDelay: titleVisible ? '400ms' : '0ms'
              }}
            >
              {"Climate Solutions.".split('').map((letter, index) => (
                <span
                  key={index}
                  className={`inline-block transition-all duration-300 cursor-pointer ${
                    titleVisible ? 'animate-letter-bounce' : 'opacity-0'
                  } hover:animate-letter-wiggle`}
                  style={{
                    animationDelay: titleVisible ? `${0.6 + index * 0.1}s` : '0ms',
                    animationFillMode: 'forwards',
                    transitionDelay: titleVisible ? `${600 + index * 100}ms` : '0ms'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.2) rotate(5deg)';
                    e.currentTarget.style.color = 'hsl(var(--forest-glow))';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                    e.currentTarget.style.color = '';
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </span>
          </h1>
          
          <div 
            ref={contentRef}
            className="space-y-6 mb-12 overflow-hidden"
          >
            <p 
              className={`text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl transition-all duration-1000 ease-out ${
                contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: contentVisible ? '200ms' : '0ms' }}
            >
              Join us in reviving degraded landscapes and combating climate change! Let's 
              work closely with farmers to ensure each tree planted strengthens ecosystems, 
              supports rural livelihoods, and builds climate resilience.
            </p>
            
            <p 
              className={`text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl transition-all duration-1000 ease-out ${
                contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: contentVisible ? '400ms' : '0ms' }}
            >
              Using cutting-edge monitoring, we track every tree's growth and capture carbon, 
              delivering transparent, verifiable impact. Together, let's create thriving forests that 
              benefit both people and the natural world.
            </p>
          </div>
          
          <div 
            ref={countdownRef}
            className={`transition-all duration-1000 ease-out ${
              countdownVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
            }`}
            style={{ transitionDelay: countdownVisible ? '300ms' : '0ms' }}
          >
            <CountdownTimer />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};