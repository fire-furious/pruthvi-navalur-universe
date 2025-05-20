
import { useEffect, useRef, useState } from "react";
import { Lightbulb, Users, Target, Heart } from "lucide-react";

const Values = () => {
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

  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Creativity",
      description: "I believe the most powerful solutions emerge when we think beyond conventional boundaries. Creativity isn't just for artists—it's essential for technologists who want to solve real problems."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community",
      description: "Technology thrives in community. I'm passionate about building spaces where people can learn, collaborate, and grow together—turning individual potential into collective impact."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Innovation",
      description: "I'm driven by the challenge of creating what doesn't yet exist. Innovation isn't just about new ideas—it's about executing them in ways that create genuine value and solve meaningful problems."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Impact",
      description: "Technology should improve lives. I measure success not just by technical excellence, but by how my work improves people's experiences, solves real problems, and contributes to a better future."
    }
  ];

  return (
    <section id="values" className="py-20 md:py-28 bg-muted/10" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className={`section-title text-center mb-4 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        } transition-all duration-700`}>
          Values & Vision
        </h2>

        <p className={`text-center text-foreground/70 max-w-3xl mx-auto mb-12 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        } transition-all duration-700 delay-200`}>
          What drives me isn't just the technology itself—it's the possibilities it creates when guided by these core principles.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={value.title} 
              className={`bg-background border border-border rounded-lg p-6 flex items-start gap-4 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              } transition-all duration-700 card-hover`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                {value.icon}
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold mb-2">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 max-w-3xl mx-auto text-center ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        } transition-all duration-700 delay-700`}>
          <h3 className="text-2xl font-display font-semibold mb-4">My Vision</h3>
          <p className="text-lg text-foreground/80 leading-relaxed">
            I envision a tech landscape where innovation is accessible to all, where communities collaborate to 
            solve our greatest challenges, and where technology serves humanity rather than the other way around.
            As a young tech leader, I'm committed to building bridges between technical excellence and human needs,
            creating solutions that are both cutting-edge and deeply meaningful.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Values;
