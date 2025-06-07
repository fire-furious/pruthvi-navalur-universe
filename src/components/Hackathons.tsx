
import { useEffect, useRef, useState } from "react";
import { Trophy, Star, Medal } from "lucide-react";

const Hackathons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const hackathons = [
    {
      name: "CodeCraft 2023",
      position: "Winner",
      description: "Built an AI-powered solution for sustainable agriculture",
      icon: <Trophy className="w-8 h-8 text-yellow-400" />,
    },
    {
      name: "DataFest 2022",
      position: "Winner",
      description: "Created a predictive analytics tool for healthcare outcomes",
      icon: <Trophy className="w-8 h-8 text-yellow-400" />,
    },
    {
      name: "HackNation 2022",
      position: "Winner",
      description: "Developed an educational platform for remote learning",
      icon: <Trophy className="w-8 h-8 text-yellow-400" />,
    },
    {
      name: "InnoHack 2023",
      position: "Finalist",
      description: "Designed a smart energy consumption monitoring system",
      icon: <Medal className="w-7 h-7 text-silver-400" />,
    },
    {
      name: "DevSprint 2022",
      position: "Participant",
      description: "Built a community support app for local businesses",
      icon: <Star className="w-7 h-7 text-blue-400" />,
    },
    {
      name: "TechJam 2021",
      position: "Participant",
      description: "Created a mental health support chatbot",
      icon: <Star className="w-7 h-7 text-blue-400" />,
    },
  ];

  return (
    <section id="hackathons" ref={sectionRef} className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className={`section-title text-center mb-4 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } transition-all duration-700`}>
            Hackathon Journey
          </h2>
          
          <p className={`text-center text-foreground/70 max-w-3xl mx-auto mb-12 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } transition-all duration-700 delay-200`}>
            10+ hackathons. 3 victories. Countless lessons. Each event has been a unique story of 
            creativity, collaboration, and code under pressure.
          </p>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-muted/50"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {hackathons.map((hackathon, index) => (
                <div
                  key={hackathon.name}
                  className={`flex flex-col md:flex-row gap-8 relative ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  } transition-all duration-700`}
                  style={{ transitionDelay: `${300 + index * 150}ms` }}
                >
                  <div className={`flex-1 md:text-right ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                    <div className="bg-muted/20 backdrop-blur-sm p-6 rounded-lg border border-border card-hover">
                      <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                        {hackathon.name}
                      </h3>
                      <p className="font-medium text-primary mb-3">{hackathon.position}</p>
                      <p className="text-foreground/70">{hackathon.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center bg-background rounded-full z-10">
                    <div className="w-14 h-14 flex items-center justify-center bg-muted/20 backdrop-blur-sm rounded-full border border-muted">
                      {hackathon.icon}
                    </div>
                  </div>

                  {index % 2 === 0 ? (
                    <div className="flex-1 md:order-2 hidden md:block"></div>
                  ) : (
                    <div className="flex-1 md:order-1 hidden md:block"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
