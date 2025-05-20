
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setMobileMenuOpen(false);
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scroll ? "bg-background/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <span className="text-primary text-2xl font-bold font-display">P</span>
          <h1 className="text-xl font-medium font-display">Pruthvi Navalur</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection("about")} className="nav-link">
            About
          </button>
          <button onClick={() => scrollToSection("projects")} className="nav-link">
            Projects
          </button>
          <button onClick={() => scrollToSection("hackathons")} className="nav-link">
            Hackathons
          </button>
          <button onClick={() => scrollToSection("leadership")} className="nav-link">
            Leadership
          </button>
          <button onClick={() => scrollToSection("skills")} className="nav-link">
            Skills
          </button>
          <button onClick={() => scrollToSection("contact")} className="nav-link">
            Contact
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md absolute w-full py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-left py-2 px-2 hover:bg-muted/50 rounded-md"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-left py-2 px-2 hover:bg-muted/50 rounded-md"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("hackathons")}
              className="text-left py-2 px-2 hover:bg-muted/50 rounded-md"
            >
              Hackathons
            </button>
            <button
              onClick={() => scrollToSection("leadership")}
              className="text-left py-2 px-2 hover:bg-muted/50 rounded-md"
            >
              Leadership
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-left py-2 px-2 hover:bg-muted/50 rounded-md"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left py-2 px-2 hover:bg-muted/50 rounded-md"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
