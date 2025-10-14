import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import employeeProductivityBanner from "@/assets/employee-productivity-banner.png";
import itrShiftBanner from "@/assets/itr-shift-banner.png";

const projects = [
  {
    id: "employee-productivity-app",
    title: "Employee Productivity App",
    description: "AI-driven productivity dashboard centralizing task management with intelligent insights",
    problem: "Employees struggled with fragmented workflows and manual task tracking across teams",
    solution: "Built an AI-driven productivity dashboard that centralizes task management, provides intelligent insights, and automates performance reporting",
    impact: "Reduced reporting overhead, improved team visibility, enhanced decision-making for leadership",
    achievement: "Successfully deployed and adopted by multiple teams within the organization",
    tags: ["AI", "SAP BTP", "CAPM", "Knowledge Graphs", "Neo4j"],
    gradient: "from-primary to-secondary",
    image: employeeProductivityBanner,
    githubUrl: "https://github.com/Durai-Murugan-DA/emp_productivity_app"
  },
  {
    id: "itr-shift",
    title: "ITR Shift – AI Automation Hub",
    description: "Intelligent automation platform orchestrating data flows between enterprise systems",
    problem: "Manual, error-prone integration workflows between enterprise systems caused delays and inaccuracies",
    solution: "Designed an intelligent automation platform that orchestrates data flows, validates information using AI, and maintains a knowledge graph for system relationship mapping",
    impact: "Dramatically reduced manual intervention, improved accuracy and traceability, accelerated integration timelines",
    achievement: "Reduced repetitive integration tasks by 40%, enabling team to focus on strategic work",
    tags: ["n8n", "AI", "Knowledge Graphs", "Workflow Automation", "Integration"],
    gradient: "from-secondary to-accent",
    image: itrShiftBanner,
    githubUrl: "https://github.com/Durai-Murugan-DA/kg-injection-pipeline"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Featured <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 text-lg">
            Real-world AI solutions with measurable impact
          </p>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-card group"
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Project visual indicator */}
                    <div className={`md:w-1/3 h-48 md:h-auto rounded-xl bg-gradient-to-br ${project.gradient} overflow-hidden relative group-hover:shadow-lg transition-all`}>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover opacity-90"
                      />
                    </div>

                    {/* Project details */}
                    <div className="md:w-2/3 space-y-4">
                      <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-foreground/80 text-lg">
                        {project.description}
                      </p>

                      <div className="space-y-3 text-sm">
                        <div>
                          <span className="font-semibold text-destructive">Problem:</span>
                          <span className="text-muted-foreground ml-2">{project.problem}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-secondary">Impact:</span>
                          <span className="text-muted-foreground ml-2">{project.achievement}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-background border border-border rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="pt-4 flex gap-3">
                        <Button
                          asChild
                          variant="outline"
                          className="group/btn border-primary/50 hover:border-primary hover:bg-primary/10"
                        >
                          <Link to={`/projects/${project.id}`}>
                            View Case Study
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          size="icon"
                          className="border-primary/50 hover:border-primary hover:bg-primary/10"
                        >
                          <a 
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View GitHub Repository"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
