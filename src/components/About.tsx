
import { useEffect, useRef, useState } from "react";

const About = () => {
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
    <section id="about" ref={sectionRef} className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className={`section-title ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } transition-all duration-700`}>
            My Story
          </h2>

          <div 
            className={`space-y-6 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            } transition-all duration-700 delay-300`}
          >
            <p className="text-lg leading-relaxed">
              I've always been fascinated by the <span className="highlight">creative potential of technology</span>. 
              My journey didn't start with coding—it began with curiosity about how things work and 
              how they could work better.
            </p>

            <p className="text-lg leading-relaxed">
              This curiosity led me through a path of exploration: from my first lines of code to 
              founding <span className="highlight">RankTrek.in</span>, a platform that uses data and expert 
              mentorship to make college decisions smarter and more accessible.
            </p>

            <p className="text-lg leading-relaxed">
              Along the way, I discovered my love for <span className="highlight">hackathons</span>—those intense
              crucibles of creativity where problems meet solutions at breakneck speed. I've participated in 
              over 10, winning 3 through approaches that challenge conventional thinking.
            </p>

            <p className="text-lg leading-relaxed">
              As Creative Lead at <span className="highlight">Google Developer Student Club</span>, I found joy 
              in blending technical expertise with compelling storytelling. Now, as PR & Management Lead 
              at <span className="highlight">OS Code Club</span>, I'm focused on building communities that foster 
              collaboration and meaningful impact.
            </p>

            <p className="text-lg leading-relaxed">
              What truly drives me isn't just building things that work, but creating solutions that 
              <span className="highlight"> meaningfully impact people</span>. Whether it's a smart pill dispenser 
              that improves healthcare accessibility or coordinating hackathons that empower new voices 
              in tech, I believe in technology as a force for good.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
