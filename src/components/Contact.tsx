
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // In a real implementation, you would send this data to a server or email service
    alert("Thanks for reaching out! This is a demo form. In a real implementation, your message would be sent.");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className={`section-title text-center mb-4 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } transition-all duration-700`}>
            Let's Build Together
          </h2>
          
          <p className={`text-center text-foreground/70 max-w-3xl mx-auto mb-12 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } transition-all duration-700 delay-200`}>
            Have an idea? Looking for collaboration? Interested in working together on a project?
            I'm always open to new opportunities and connections.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className={`lg:col-span-2 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            } transition-all duration-700 delay-300`}>
              <h3 className="text-xl font-display font-semibold mb-4">Get In Touch</h3>
              
              <div className="space-y-6">
                <p className="text-foreground/70">
                  Whether you have a question, a project idea, or just want to connect, 
                  I'd love to hear from you. Fill out the form or reach out through any 
                  of these channels:
                </p>
                
                <div className="flex flex-col space-y-4">
                  <a href="mailto:contact@pruthvinavalur.com" className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors">
                    <Mail className="w-5 h-5" />
                    contact@pruthvinavalur.com
                  </a>
                  <a href="https://linkedin.com/in/pruthvinavalur" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5" />
                    linkedin.com/in/pruthvinavalur
                  </a>
                  <a href="https://github.com/pruthvinavalur" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                    github.com/pruthvinavalur
                  </a>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="font-display text-lg font-medium mb-2">I'm especially interested in:</p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/70">
                    <li>Hackathon collaboration or mentorship</li>
                    <li>Community building initiatives</li>
                    <li>Creative tech projects with social impact</li>
                    <li>Speaking opportunities about tech & innovation</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className={`lg:col-span-3 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            } transition-all duration-700 delay-400`}>
              <form onSubmit={handleSubmit} className="bg-muted/10 border border-border rounded-lg p-6 md:p-8">
                <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Send a Message
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="bg-background border-input"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your email"
                      required
                      className="bg-background border-input"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="What would you like to discuss?"
                      required
                      className="min-h-32 bg-background border-input"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
