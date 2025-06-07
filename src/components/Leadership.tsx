
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Users, Code } from "lucide-react";

const Leadership = () => {
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

  return (
    <section id="leadership" ref={sectionRef} className="py-20 md:py-28 bg-muted/10">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className={`section-title text-center mb-4 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        } transition-all duration-700`}>
          Leadership & Community
        </h2>

        <p className={`text-center text-foreground/70 max-w-3xl mx-auto mb-12 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        } transition-all duration-700 delay-200`}>
          Building communities and leading teams has been a core part of my journey, where I've found 
          purpose in empowering others and creating spaces for collaboration.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* GDSC Role */}
          <Card className={`p-6 card-hover ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } transition-all duration-700 delay-300`}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold mb-1">Creative Lead</h3>
                <p className="text-primary mb-3">Google Developer Student Club</p>
                <p className="text-foreground/70">
                  Led creative initiatives that bridged technology with storytelling, helping students 
                  connect with complex technical concepts through compelling narratives and experiences.
                </p>
                
                <div className="mt-4 pt-4 border-t border-border">
                  <blockquote className="italic text-foreground/80">
                    "Pruthvi's ability to translate technical concepts into engaging stories helped 
                    our club reach a much wider audience. His creative leadership transformed how we 
                    communicated about technology."
                  </blockquote>
                  <p className="mt-2 text-sm text-foreground/60">— GDSC Team Member</p>
                </div>
              </div>
            </div>
          </Card>

          {/* OS Code Club Role */}
          <Card className={`p-6 card-hover ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } transition-all duration-700 delay-400`}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold mb-1">PR & Management Lead</h3>
                <p className="text-secondary mb-3">OS Code Club</p>
                <p className="text-foreground/70">
                  Currently driving community engagement and managing collaborative projects, 
                  focusing on creating an inclusive environment that encourages contribution 
                  and meaningful impact through code.
                </p>
                
                <div className="mt-4 pt-4 border-t border-border">
                  <blockquote className="italic text-foreground/80">
                    "Pruthvi has transformed how our club engages with the community. His leadership 
                    in PR and management has led to better organization, clearer communication, and 
                    more impactful projects."
                  </blockquote>
                  <p className="mt-2 text-sm text-foreground/60">— OS Code Club Director</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Hackathon Coordination */}
          <Card className={`p-6 card-hover lg:col-span-2 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } transition-all duration-700 delay-500`}>
            <h3 className="text-xl font-display font-semibold mb-1">Hackathon Coordinator</h3>
            <p className="text-accent mb-3">3+ Major Events</p>
            
            <p className="text-foreground/70 mb-4">
              Orchestrated multiple successful hackathons, managing teams, logistics, and participant 
              engagement. Created environments that fostered innovation, collaboration, and technical growth 
              for participants of all skill levels.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-muted/20 p-4 rounded-md">
                <h4 className="font-medium mb-2">Team Management</h4>
                <p className="text-sm text-foreground/70">
                  Coordinated diverse teams of volunteers, judges, and mentors to ensure smooth event operations.
                </p>
              </div>
              <div className="bg-muted/20 p-4 rounded-md">
                <h4 className="font-medium mb-2">Participant Experience</h4>
                <p className="text-sm text-foreground/70">
                  Created supportive, challenging environments that empowered participants to do their best work.
                </p>
              </div>
              <div className="bg-muted/20 p-4 rounded-md">
                <h4 className="font-medium mb-2">Event Logistics</h4>
                <p className="text-sm text-foreground/70">
                  Managed complex scheduling, resource allocation, and technical infrastructure for 100+ participants.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
