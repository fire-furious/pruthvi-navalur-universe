
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-primary text-xl font-bold font-display">P</span>
            <span className="text-lg font-medium">Pruthvi Navalur</span>
          </div>
          
          <div className="text-center md:text-left text-foreground/60 text-sm">
            <p>
              &copy; {currentYear} Pruthvi Navalur. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-1 text-foreground/60 text-sm">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-primary mx-1" />
            <span>using React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
