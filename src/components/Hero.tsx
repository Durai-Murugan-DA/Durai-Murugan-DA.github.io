import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-50"></div>
              <img 
                src={profileImage} 
                alt="Durai Murugan" 
                className="relative w-40 h-40 rounded-full object-cover object-center border-4 border-primary shadow-glow scale-125"
              />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
            Generative AI Developer
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90 mb-4">
            Enterprise Automation Specialist
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Building intelligent SAP solutions and AI-powered workflows that bridge enterprise systems with cutting-edge automation
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-xl transition-all duration-300"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              asChild
              className="border-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <a href="/Durai_Murugan_Resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Tech stack tags */}
          <div className="mt-16 flex flex-wrap gap-3 justify-center">
            {['Python', 'SAP BTP', 'LangChain', 'n8n', 'Neo4j', 'AI Automation'].map((tech, index) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground/80 hover:border-primary transition-colors animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-foreground/30 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
