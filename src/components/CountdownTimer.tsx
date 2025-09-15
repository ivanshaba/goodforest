import { useState, useEffect } from "react";

interface TimeUnit {
  value: number;
  label: string;
}

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([
    { value: 3, label: "YEARS" },
    { value: 28, label: "MONTHS" },
    { value: 30, label: "DAYS" },
    { value: 12, label: "HOURS" },
    { value: 45, label: "MINUTES" },
    { value: 30, label: "SECONDS" },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = [...prev];
        
        // Decrement seconds first
        if (newTime[5].value > 0) {
          newTime[5].value -= 1;
        } else {
          newTime[5].value = 59; // Reset seconds to 59
          if (newTime[4].value > 0) {
            newTime[4].value -= 1;
          } else {
            newTime[4].value = 59; // Reset minutes to 59
            if (newTime[3].value > 0) {
              newTime[3].value -= 1;
            } else {
              newTime[3].value = 23; // Reset hours to 23
              if (newTime[2].value > 0) {
                newTime[2].value -= 1;
              } else {
                newTime[2].value = 29; // Reset days
                if (newTime[1].value > 0) {
                  newTime[1].value -= 1;
                } else {
                  newTime[1].value = 11; // Reset months
                  if (newTime[0].value > 0) {
                    newTime[0].value -= 1;
                  }
                }
              }
            }
          }
        }
        
        return newTime;
      });
    }, 1000); // Update every second for real-time countdown

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animate-fade-in">
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-8 mb-8">
        {timeLeft.map((unit, index) => (
          <div 
            key={unit.label} 
            className="text-center animate-bounce-in hover-lift" 
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative">
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-white animate-pulse-glow bg-forest-dark/30 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                {unit.value.toString().padStart(2, '0')}
              </div>
              <div className="absolute inset-0 animate-shimmer rounded-lg"></div>
            </div>
            <div className="text-xs md:text-sm lg:text-base font-semibold text-white/90 mt-2 tracking-wider">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-slide-in-left">
        <p className="text-white text-lg lg:text-xl font-semibold animate-float">
          The clock is ticking.
        </p>
        <button className="bg-accent hover:bg-accent/90 text-forest-dark px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 hover:scale-110 hover-lift animate-bounce-in animate-delay-300 group">
          <span className="group-hover:animate-pulse">Take action now!</span>
        </button>
      </div>
    </div>
  );
};