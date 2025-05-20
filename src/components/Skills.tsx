
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
      skills: ["Python", "JavaScript", "HTML/CSS", "React", "Node.js"]
    },
    {
      title: "Systems Arsenal",
      description: "Lower level programming I'm proficient in",
      skills: ["C/C++", "Java"]
    },
    {
      title: "Leadership Toolbox",
      description: "Skills for leading teams and projects",
      skills: ["Project Management", "Team Coordination", "Event Planning", "Community Building"]
    },
    {
      title: "Creative Workshop",
      description: "Tools for bringing ideas to life",
      skills: ["UI/UX Design", "Creative Problem Solving", "Technical Storytelling"]
    },
    {
      title: "Data Laboratory",
      description: "Working with information and insights",
      skills: ["Data Analysis", "Predictive Modeling", "Database Design"]
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
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
                className={`bg-muted/20 backdrop-blur-sm border border-border rounded-lg p-6 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                } transition-all duration-700`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <h3 className="text-xl font-display font-semibold mb-2">{category.title}</h3>
                <p className="text-foreground/70 text-sm mb-4">{category.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="bg-muted/40 text-foreground/90 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-12 text-center ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } transition-all duration-700 delay-700`}>
            <p className="text-foreground/70 italic">
              "It's not just about knowing the syntax—it's about knowing when and how to apply it to solve real problems."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
