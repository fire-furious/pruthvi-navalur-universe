
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Hackathons from "@/components/Hackathons";
import Leadership from "@/components/Leadership";
import Skills from "@/components/Skills";
import Values from "@/components/Values";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Hackathons />
        <Leadership />
        <Skills />
        <Values />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
