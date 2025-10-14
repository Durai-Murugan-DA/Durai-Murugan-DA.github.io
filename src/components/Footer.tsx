import { Github, Linkedin, Mail } from "lucide-react";
const Footer = () => {
  return <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-foreground font-semibold text-lg mb-2">Durai Murugan</p>
            <p className="text-muted-foreground text-sm">
              Generative AI Developer | Building intelligent enterprise solutions
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a href="https://github.com/Durai-Murugan-DA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              
              
            </a>
            <a href="https://linkedin.com/in/durai-murugan-da" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              
              
            </a>
            
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Durai Murugan. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;