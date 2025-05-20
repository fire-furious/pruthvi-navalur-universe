
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
    <section id="projects" ref={sectionRef} className="py-20 md:py-28 bg-muted/10">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className={`section-title text-center mb-12 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        } transition-all duration-700`}>
          Projects That Define Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* RankTrek Project */}
          <Card className={`overflow-hidden card-hover ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } transition-all duration-700 delay-100`}>
            <div className="h-48 bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-4xl font-bold font-display text-primary">RankTrek.in</div>
            </div>
            <div className="p-6">
              <h3 className="section-subtitle">Smart College Predictions</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-muted px-2 py-1 rounded-md">Data Analytics</span>
                <span className="text-xs bg-muted px-2 py-1 rounded-md">Machine Learning</span>
                <span className="text-xs bg-muted px-2 py-1 rounded-md">Web Development</span>
              </div>
              <p className="mb-4">
                A platform using data-driven algorithms and expert mentorship to provide students with 
                personalized college predictions and guidance, making higher education more accessible.
              </p>
              <div className="flex flex-col space-y-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary mr-2"></div>
                  <p>Combined data analytics with personalized mentorship</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary mr-2"></div>
                  <p>Helped students navigate complex college application decisions</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary mr-2"></div>
                  <p>Built from concept to launching a functional platform</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Smart Pill Dispenser Project */}
          <Card className={`overflow-hidden card-hover ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } transition-all duration-700 delay-300`}>
            <div className="h-48 bg-gradient-to-r from-secondary/20 to-primary/20 flex items-center justify-center">
              <div className="text-4xl font-bold font-display text-secondary">Smart Pill Dispenser</div>
            </div>
            <div className="p-6">
              <h3 className="section-subtitle">Health Tech Innovation</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-muted px-2 py-1 rounded-md">IoT</span>
                <span className="text-xs bg-muted px-2 py-1 rounded-md">Hardware</span>
                <span className="text-xs bg-muted px-2 py-1 rounded-md">Healthcare</span>
              </div>
              <p className="mb-4">
                An automated medication dispenser that ensures patients take the right medication at the right time,
                improving medication adherence and healthcare outcomes. Funded under NAIN.
              </p>
              <div className="flex flex-col space-y-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-secondary mr-2"></div>
                  <p>Developed IoT device with real-time monitoring capabilities</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-secondary mr-2"></div>
                  <p>Created companion app for caregivers to track medication adherence</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-secondary mr-2"></div>
                  <p>Secured funding under NAIN (New Age Incubation Network)</p>
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
