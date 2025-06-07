import { useEffect, useRef, useState } from "react";

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Builder's Toolkit",
      description: "Languages and frameworks I build with",
      skills: ["Python", "JavaScript", "HTML/CSS", "React", "Node.js"],
      color: "from-primary/20 to-primary/5",
      textColor: "text-primary",
      hoverEffect: "hover:scale-105 hover:rotate-1 hover:shadow-primary/20",
      icon: "🚀"
    },
    {
      title: "Systems Arsenal",
      description: "Lower level programming I'm proficient in",
      skills: ["C/C++", "Java"],
      color: "from-secondary/20 to-secondary/5",
      textColor: "text-secondary",
      hoverEffect: "hover:scale-105 hover:-rotate-1 hover:shadow-secondary/20",
      icon: "⚡"
    },
    {
      title: "Leadership Toolbox",
      description: "Skills for leading teams and projects",
      skills: ["Project Management", "Team Coordination", "Event Planning", "Community Building"],
      color: "from-accent/20 to-accent/5",
      textColor: "text-accent",
      hoverEffect: "hover:scale-105 hover:translate-y-[-4px] hover:shadow-accent/20",
      icon: "👥"
    },
    {
      title: "Creative Workshop",
      description: "Tools for bringing ideas to life",
      skills: ["UI/UX Design", "Creative Problem Solving", "Technical Storytelling"],
      color: "from-primary/20 to-secondary/5",
      textColor: "text-primary",
      hoverEffect: "hover:scale-105 hover:skew-x-2 hover:shadow-primary/20",
      icon: "🎨"
    },
    {
      title: "Data Laboratory",
      description: "Working with information and insights",
      skills: ["Data Analysis", "Predictive Modeling", "Database Design"],
      color: "from-secondary/20 to-accent/5",
      textColor: "text-secondary",
      hoverEffect: "hover:scale-105 hover:skew-y-2 hover:shadow-secondary/20",
      icon: "📊"
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 md:py-28 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute -bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className={`section-title text-center ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } transition-all duration-700`}>
            My Skillset
          </h2>
          
          <p className={`text-center text-foreground/70 max-w-3xl mx-auto mb-12 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } transition-all duration-700 delay-200`}>
            Beyond syntax and languages, I value creative problem-solving and the ability to 
            bring ideas to life through technology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title}
                className={`bg-gradient-to-br ${category.color} backdrop-blur-sm border border-white/10 rounded-lg p-6 
                  ${category.hoverEffect} transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                } transition-all duration-700 overflow-hidden relative group`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                {/* Animated glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700 rounded-lg"></div>
                
                {/* Category Icon */}
                <div className="absolute top-4 right-4 text-2xl transform group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                
                <h3 className={`text-xl font-display font-semibold mb-2 ${category.textColor}`}>{category.title}</h3>
                <p className="text-foreground/70 text-sm mb-4">{category.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className={`bg-muted/40 ${category.textColor} px-3 py-1 rounded-full text-sm 
                        hover:scale-110 hover:shadow-lg transition-all duration-300 border border-white/5
                        group-hover:translate-y-[-2px]`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Animated corner lines */}
                <div className="absolute bottom-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute bottom-2 left-0 h-px w-4 bg-primary"></div>
                  <div className="absolute bottom-0 left-2 w-px h-4 bg-primary"></div>
                </div>
                <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-2 right-0 h-px w-4 bg-secondary"></div>
                  <div className="absolute top-0 right-2 w-px h-4 bg-secondary"></div>
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-12 text-center ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } transition-all duration-700 delay-700`}>
            <p className="text-foreground/70 italic relative inline-block">
              <span className="absolute -left-4 top-0 text-2xl text-primary">"</span>
              It's not just about knowing the syntax—it's about knowing when and how to apply it to solve real problems.
              <span className="absolute -bottom-2 right-4 text-2xl text-primary">"</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
