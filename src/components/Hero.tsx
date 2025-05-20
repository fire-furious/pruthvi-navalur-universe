
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const roles = ["Creator", "Hacker", "Builder", "Leader"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 md:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container max-w-5xl mx-auto z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          <p className={cn(
            "text-lg md:text-xl text-primary/80 font-medium opacity-0",
            isVisible && "animate-fade-in [animation-delay:200ms]"
          )}>
            Hello, I'm
          </p>
          
          <h1 className={cn(
            "text-4xl md:text-6xl lg:text-7xl font-bold font-display opacity-0",
            isVisible && "animate-fade-in [animation-delay:400ms]"
          )}>
            Pruthvi Navalur
          </h1>
          
          <div className="h-16 md:h-20 flex items-center justify-center overflow-hidden">
            <p className={cn(
              "text-2xl md:text-3xl lg:text-4xl font-medium opacity-0",
              isVisible && "animate-fade-in [animation-delay:600ms]"
            )}>
              <span className="text-foreground/80">I'm a </span>
              <span className="animated-gradient-text font-display font-semibold">
                {roles[currentRoleIndex]}
              </span>
            </p>
          </div>
          
          <p className={cn(
            "max-w-2xl text-lg text-foreground/70 opacity-0",
            isVisible && "animate-fade-in [animation-delay:800ms]"
          )}>
            From winning hackathons to founding RankTrek, I blend technical expertise with 
            creative problem-solving to build solutions that matter. My passion lies in 
            the intersection of technology, community, and impact.
          </p>
          
          <div className={cn(
            "flex flex-col sm:flex-row gap-4 mt-8 opacity-0",
            isVisible && "animate-fade-in [animation-delay:1000ms]"
          )}>
            <button 
              onClick={() => scrollToContact()}
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors"
            >
              Let's Build Together
            </button>
            <a 
              href="#projects" 
              className="px-6 py-3 bg-muted/40 hover:bg-muted/60 backdrop-blur text-foreground font-medium rounded-lg transition-colors"
            >
              Explore My Work
            </a>
          </div>
        </div>

        <div className={cn(
          "absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0",
          isVisible && "animate-fade-in [animation-delay:1200ms]"
        )}>
          <div className="flex flex-col items-center">
            <p className="text-sm text-foreground/50 mb-2">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse-subtle"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
