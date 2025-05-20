
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

const Projects = () => {
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
    <section id="projects" ref={sectionRef} className="py-20 md:py-28 bg-muted/10 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <h2 className={`section-title text-center mb-12 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        } transition-all duration-700`}>
          Projects That Define Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* RankTrek Project */}
          <Card className={`overflow-hidden glow group ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } transition-all duration-700 delay-100 bg-gradient-to-br from-background to-muted/20 backdrop-blur-sm border border-primary/20`}>
            <div className="h-48 bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="text-4xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-pulse-subtle">RankTrek.in</div>
            </div>
            <div className="p-6">
              <h3 className="section-subtitle mb-6">Smart College Predictions</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Data Analytics</span>
                <span className="text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full">Machine Learning</span>
                <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">Web Development</span>
              </div>
              <p className="mb-4">
                A platform using data-driven algorithms and expert mentorship to provide students with 
                personalized college predictions and guidance, making higher education more accessible.
              </p>
              <div className="flex flex-col space-y-2">
                <div className="flex items-start group">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary mr-2 group-hover:scale-125 transition-transform"></div>
                  <p className="group-hover:translate-x-1 transition-transform">Combined data analytics with personalized mentorship</p>
                </div>
                <div className="flex items-start group">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary mr-2 group-hover:scale-125 transition-transform"></div>
                  <p className="group-hover:translate-x-1 transition-transform">Helped students navigate complex college application decisions</p>
                </div>
                <div className="flex items-start group">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary mr-2 group-hover:scale-125 transition-transform"></div>
                  <p className="group-hover:translate-x-1 transition-transform">Built from concept to launching a functional platform</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Smart Pill Dispenser Project */}
          <Card className={`overflow-hidden glow group ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } transition-all duration-700 delay-300 bg-gradient-to-br from-background to-muted/20 backdrop-blur-sm border border-secondary/20`}>
            <div className="h-48 bg-gradient-to-r from-secondary/20 to-accent/20 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="text-4xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent animate-pulse-subtle">Smart Pill Dispenser</div>
            </div>
            <div className="p-6">
              <h3 className="section-subtitle mb-6">Health Tech Innovation</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full">IoT</span>
                <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">Hardware</span>
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Healthcare</span>
              </div>
              <p className="mb-4">
                An automated medication dispenser that ensures patients take the right medication at the right time,
                improving medication adherence and healthcare outcomes. Funded under NAIN.
              </p>
              <div className="flex flex-col space-y-2">
                <div className="flex items-start group">
                  <div className="w-2 h-2 mt-2 rounded-full bg-secondary mr-2 group-hover:scale-125 transition-transform"></div>
                  <p className="group-hover:translate-x-1 transition-transform">Developed IoT device with real-time monitoring capabilities</p>
                </div>
                <div className="flex items-start group">
                  <div className="w-2 h-2 mt-2 rounded-full bg-secondary mr-2 group-hover:scale-125 transition-transform"></div>
                  <p className="group-hover:translate-x-1 transition-transform">Created companion app for caregivers to track medication adherence</p>
                </div>
                <div className="flex items-start group">
                  <div className="w-2 h-2 mt-2 rounded-full bg-secondary mr-2 group-hover:scale-125 transition-transform"></div>
                  <p className="group-hover:translate-x-1 transition-transform">Secured funding under NAIN (New Age Incubation Network)</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
