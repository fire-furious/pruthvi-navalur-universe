import { useEffect, useState } from "react";
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
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [achievements, setAchievements] = useState<string[]>([]);
  const [showAchievement, setShowAchievement] = useState(false);
  const [currentAchievement, setCurrentAchievement] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [easterEggs, setEasterEggs] = useState<{ [key: string]: boolean }>({});
  const [konamiCode, setKonamiCode] = useState<string[]>([]);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Konami code easter egg
  useEffect(() => {
    const konamiSequence = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    
    const handleKeyDown = (e: KeyboardEvent) => {
      setKonamiCode(prev => {
        const newCode = [...prev, e.key].slice(-10);
        if (newCode.join(",") === konamiSequence.join(",")) {
          setEasterEggs(prev => ({ ...prev, konami: true }));
          unlockAchievement("Secret Agent: Unlocked the Konami Code!");
        }
        return newCode;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Achievement system
  const unlockAchievement = (achievement: string) => {
    if (!achievements.includes(achievement)) {
      setAchievements(prev => [...prev, achievement]);
      setCurrentAchievement(achievement);
      setShowAchievement(true);
      setTimeout(() => setShowAchievement(false), 3000);
    }
  };

  // Easter egg click handler
  const handleEasterEggClick = (id: string, achievement: string) => {
    if (!easterEggs[id]) {
      setEasterEggs(prev => ({ ...prev, [id]: true }));
      unlockAchievement(achievement);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-primary/20 z-50">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Achievement Toast */}
      <AnimatePresence>
        {showAchievement && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 bg-primary/90 text-white px-6 py-3 rounded-lg shadow-lg z-50"
          >
            🏆 Achievement Unlocked: {currentAchievement}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Easter Eggs */}
      <div 
        className="fixed bottom-4 left-4 w-4 h-4 cursor-pointer opacity-0 hover:opacity-100 transition-opacity"
        onClick={() => handleEasterEggClick("hidden1", "Explorer: Found the hidden pixel!")}
      />
      <div 
        className="fixed top-1/2 right-4 w-4 h-4 cursor-pointer opacity-0 hover:opacity-100 transition-opacity"
        onClick={() => handleEasterEggClick("hidden2", "Treasure Hunter: Discovered the secret spot!")}
      />

      {/* Konami Code Effect */}
      {easterEggs.konami && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 pointer-events-none z-40"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent animate-pulse" />
        </motion.div>
      )}

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

      {/* Achievement Counter */}
      <div className="fixed bottom-4 right-4 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg z-40">
        <span className="text-sm font-medium">🏆 {achievements.length} Achievements</span>
      </div>
    </div>
  );
};

export default Index;
