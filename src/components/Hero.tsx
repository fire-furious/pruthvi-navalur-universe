
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
    }, 1500);
    
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
      {/* Animated Floating Shapes */}
      <div className="floating-shapes">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="floating-shape"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              left: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, 
                hsl(${Math.random() * 360}, 70%, 60%), 
                hsl(${Math.random() * 360}, 70%, 80%))`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-gradient-to-br from-cyan-300/40 to-blue-300/40 rounded-full blur-3xl opacity-60 animate-[pulse_3s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-gradient-to-br from-violet-300/40 to-purple-300/40 rounded-full blur-3xl opacity-50 animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-rose-300/40 to-pink-300/40 rounded-full blur-3xl opacity-40 animate-[pulse_5s_ease-in-out_infinite]"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: `linear-gradient(45deg, 
                  hsl(${200 + Math.random() * 160}, 70%, 60%), 
                  hsl(${280 + Math.random() * 80}, 70%, 70%))`,
                opacity: Math.random() * 0.6 + 0.4,
                animation: `float ${Math.random() * 8 + 6}s linear infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container max-w-5xl mx-auto z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          <p className={cn(
            "text-lg md:text-xl text-indigo-600 font-medium opacity-0",
            isVisible && "animate-fade-in [animation-delay:200ms]"
          )}>
            Hello, I'm
          </p>
          
          <h1 className={cn(
            "text-4xl md:text-6xl lg:text-7xl font-bold font-display opacity-0 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600",
            isVisible && "animate-fade-in [animation-delay:400ms]"
          )}>
            Pruthvi Navalur
          </h1>
          
          <div className="h-16 md:h-20 flex items-center justify-center overflow-hidden">
            <p className={cn(
              "text-2xl md:text-3xl lg:text-4xl font-medium opacity-0",
              isVisible && "animate-fade-in [animation-delay:600ms]"
            )}>
              <span className="text-gray-700">I'm a </span>
              <span className="animated-gradient-text font-display font-semibold">
                {roles[currentRoleIndex]}
              </span>
            </p>
          </div>
          
          <p className={cn(
            "max-w-2xl text-lg text-gray-700 opacity-0",
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
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-200"
            >
              Let's Build Together
            </button>
            <a 
              href="#projects" 
              className="px-6 py-3 bg-white/80 hover:bg-white/90 backdrop-blur text-gray-700 font-medium rounded-lg border border-indigo-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
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
            <p className="text-sm text-gray-600 mb-2">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-indigo-300 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
