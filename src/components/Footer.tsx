import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-foreground font-semibold text-lg mb-2">Durai Murugan</p>
            <p className="text-muted-foreground text-sm">
              Generative AI Developer | Building intelligent enterprise solutions
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/Durai-Murugan-DA"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/durai-murugan-da"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:duraijeeva2017@gmail.com"
              className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Durai Murugan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
