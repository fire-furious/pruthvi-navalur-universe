import { useEffect, useRef, useState } from "react";
import { Trophy, Star, Medal } from "lucide-react";
import { motion } from "framer-motion";

const Hackathons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
      color: "from-red-500/20 to-pink-500/20",
      hoverColor: "hover:shadow-red-500/30",
      borderColor: "border-red-500/20",
      glowColor: "group-hover:shadow-red-500/20"
    },
    {
      name: "DataFest 2022",
      position: "Winner",
      description: "Created a predictive analytics tool for healthcare outcomes",
      icon: <Trophy className="w-8 h-8 text-yellow-400" />,
      color: "from-yellow-500/20 to-orange-500/20",
      hoverColor: "hover:shadow-yellow-500/30",
      borderColor: "border-yellow-500/20",
      glowColor: "group-hover:shadow-yellow-500/20"
    },
    {
      name: "HackNation 2022",
      position: "Winner",
      description: "Developed an educational platform for remote learning",
      icon: <Trophy className="w-8 h-8 text-yellow-400" />,
      color: "from-pink-500/20 to-purple-500/20",
      hoverColor: "hover:shadow-pink-500/30",
      borderColor: "border-pink-500/20",
      glowColor: "group-hover:shadow-pink-500/20"
    },
    {
      name: "InnoHack 2023",
      position: "Finalist",
      description: "Designed a smart energy consumption monitoring system",
      icon: <Medal className="w-7 h-7 text-silver-400" />,
      color: "from-blue-500/20 to-cyan-500/20",
      hoverColor: "hover:shadow-blue-500/30",
      borderColor: "border-blue-500/20",
      glowColor: "group-hover:shadow-blue-500/20"
    },
    {
      name: "DevSprint 2022",
      position: "Participant",
      description: "Built a community support app for local businesses",
      icon: <Star className="w-7 h-7 text-blue-400" />,
      color: "from-green-500/20 to-emerald-500/20",
      hoverColor: "hover:shadow-green-500/30",
      borderColor: "border-green-500/20",
      glowColor: "group-hover:shadow-green-500/20"
    },
    {
      name: "TechJam 2021",
      position: "Participant",
      description: "Created a mental health support chatbot",
      icon: <Star className="w-7 h-7 text-blue-400" />,
      color: "from-purple-500/20 to-indigo-500/20",
      hoverColor: "hover:shadow-purple-500/30",
      borderColor: "border-purple-500/20",
      glowColor: "group-hover:shadow-purple-500/20"
    },
  ];

  return (
    <section id="hackathons" ref={sectionRef} className="py-20 md:py-28 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute -bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <h2 className={`section-title text-center mb-4 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        } transition-all duration-700`}>
          Hackathon Journey
        </h2>

        <p className={`text-center text-foreground/70 max-w-3xl mx-auto mb-12 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        } transition-all duration-700 delay-200`}>
          From intense coding sprints to innovative solutions, each hackathon has been a unique 
          adventure in problem-solving and creativity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 20,
                scale: hoveredCard === index ? 1.05 : 1
              }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className={`group relative bg-gradient-to-br ${hackathon.color} backdrop-blur-sm 
                border ${hackathon.borderColor} rounded-lg p-6 transition-all duration-500
                ${hackathon.hoverColor} ${hackathon.glowColor} hover:border-opacity-50`}
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 rounded-lg"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-display font-semibold">{hackathon.name}</h3>
                  {hackathon.icon}
                </div>
                
                <div className="mb-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium
                    ${hackathon.position === "Winner" ? "bg-yellow-500/20 text-yellow-400" :
                      hackathon.position === "Finalist" ? "bg-silver-500/20 text-silver-400" :
                      "bg-blue-500/20 text-blue-400"}`}>
                    {hackathon.position}
                  </span>
                </div>
                
                <p className="text-foreground/70">{hackathon.description}</p>
              </div>

              {/* Animated corner accents */}
              <div className="absolute bottom-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute bottom-2 left-0 h-px w-4 bg-gradient-to-r from-transparent to-current"></div>
                <div className="absolute bottom-0 left-2 w-px h-4 bg-gradient-to-t from-transparent to-current"></div>
              </div>
              <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-2 right-0 h-px w-4 bg-gradient-to-l from-transparent to-current"></div>
                <div className="absolute top-0 right-2 w-px h-4 bg-gradient-to-b from-transparent to-current"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
