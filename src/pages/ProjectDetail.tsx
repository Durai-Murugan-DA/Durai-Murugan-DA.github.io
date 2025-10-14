import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";

const projectData = {
  "employee-productivity-app": {
    title: "Employee Productivity App",
    subtitle: "AI-Powered Productivity & Performance Management",
    overview: "A comprehensive AI-driven productivity dashboard that transforms how teams manage tasks, track performance, and make data-driven decisions. Built on SAP BTP with advanced AI capabilities for intelligent insights and automation.",
    problem: {
      title: "The Challenge",
      description: "Organizations struggled with fragmented workflows where employees used multiple disconnected tools for task management. Managers lacked visibility into team productivity, and manual performance reporting consumed significant time. Critical insights were buried in disparate systems, making strategic decision-making difficult.",
      painPoints: [
        "Employees juggled 5+ different tools for daily tasks",
        "Managers spent 10+ hours weekly on manual reporting",
        "No centralized view of team productivity metrics",
        "Performance data was outdated by the time reports were generated",
        "Limited ability to identify bottlenecks or productivity patterns"
      ]
    },
    solution: {
      title: "The Solution",
      description: "I designed and developed an intelligent productivity platform that centralizes task management, automates performance tracking, and provides AI-powered insights for continuous improvement.",
      features: [
        {
          name: "Centralized Task Management",
          description: "Single dashboard for all tasks with smart categorization, priority scoring, and deadline tracking"
        },
        {
          name: "AI-Powered Insights",
          description: "Machine learning algorithms analyze work patterns to identify productivity trends and suggest optimizations"
        },
        {
          name: "Knowledge Graph Integration",
          description: "Neo4j-based knowledge graph maps relationships between tasks, teams, and projects for intelligent recommendations"
        },
        {
          name: "Automated Performance Reporting",
          description: "Real-time dashboards automatically generate performance metrics and insights for managers"
        },
        {
          name: "Smart Notifications",
          description: "Context-aware alerts for deadlines, blockers, and collaboration opportunities"
        }
      ]
    },
    techStack: [
      "SAP BTP (Business Technology Platform)",
      "CAPM (Cloud Application Programming Model)",
      "SAP Fiori/UI5",
      "Neo4j Knowledge Graphs",
      "Python (AI/ML)",
      "LangChain",
      "Node.js"
    ],
    impact: {
      metrics: [
        { label: "Reporting Time Reduced", value: "85%" },
        { label: "Team Visibility", value: "100%" },
        { label: "Adoption Rate", value: "92%" },
        { label: "Weekly Time Saved", value: "12hrs" }
      ],
      outcomes: [
        "Dramatically reduced manual reporting overhead, freeing managers for strategic work",
        "Improved cross-team visibility led to better resource allocation and collaboration",
        "AI-driven insights helped identify and resolve productivity bottlenecks 60% faster",
        "Successfully deployed across multiple teams with overwhelmingly positive feedback",
        "Enhanced decision-making capability for leadership through real-time analytics"
      ]
    },
    learnings: [
      "Integrating AI meaningfully requires deep understanding of user workflows, not just technical implementation",
      "Knowledge graphs excel at revealing non-obvious connections in enterprise data",
      "User adoption depends more on solving real pain points than having advanced features",
      "Real-time data is crucial for productivity tools — outdated metrics create distrust"
    ]
  },
  "itr-shift": {
    title: "ITR Shift – AI Automation Hub",
    subtitle: "Intelligent Enterprise Integration Platform",
    overview: "A sophisticated automation platform that transforms how enterprise systems communicate and exchange data. ITR Shift orchestrates complex integration workflows, validates data integrity using AI, and maintains comprehensive knowledge graphs for system relationship mapping.",
    problem: {
      title: "The Challenge",
      description: "Enterprise integration workflows were plagued by manual processes, error-prone data transfers, and lack of visibility. Teams spent countless hours manually mapping data fields, validating information, and troubleshooting failed integrations. System relationships were poorly documented, making debugging a nightmare.",
      painPoints: [
        "Manual data mapping consumed 40% of integration development time",
        "Data validation errors caused costly downstream failures",
        "No centralized view of system dependencies and relationships",
        "Integration troubleshooting was reactive and time-consuming",
        "Repetitive tasks prevented teams from focusing on strategic work"
      ]
    },
    solution: {
      title: "The Solution",
      description: "I designed ITR Shift as an intelligent automation hub that combines workflow orchestration, AI-powered validation, and knowledge graph technology to create self-documenting, reliable integration pipelines.",
      features: [
        {
          name: "Intelligent Workflow Orchestration",
          description: "n8n-based automation engine that routes data between systems with conditional logic and error handling"
        },
        {
          name: "AI-Powered Data Validation",
          description: "Machine learning models validate data quality, detect anomalies, and suggest corrections before propagation"
        },
        {
          name: "System Knowledge Graph",
          description: "Neo4j graph database maps all system relationships, data flows, and dependencies for comprehensive visibility"
        },
        {
          name: "Self-Healing Integrations",
          description: "Automated retry logic and intelligent routing when downstream systems are unavailable"
        },
        {
          name: "Real-Time Monitoring",
          description: "Live dashboards track integration health, throughput, and data quality metrics"
        }
      ]
    },
    techStack: [
      "n8n (Workflow Automation)",
      "Neo4j (Knowledge Graphs)",
      "Python (AI/ML)",
      "LangChain",
      "SAP Integration Suite",
      "Node.js",
      "REST/GraphQL APIs"
    ],
    impact: {
      metrics: [
        { label: "Manual Tasks Reduced", value: "40%" },
        { label: "Data Accuracy", value: "99.2%" },
        { label: "Integration Speed", value: "+65%" },
        { label: "Error Detection", value: "Real-time" }
      ],
      outcomes: [
        "Reduced repetitive integration tasks by 40%, allowing team to focus on high-value work",
        "Improved data accuracy to 99.2% through AI-powered validation",
        "Accelerated integration development by 65% with automated workflows",
        "Enhanced system visibility through comprehensive knowledge graph",
        "Enabled proactive issue detection and resolution before business impact"
      ]
    },
    learnings: [
      "Knowledge graphs are transformative for documenting complex enterprise architectures",
      "Automation is most valuable when it eliminates entire categories of manual work",
      "AI validation catches errors humans consistently miss in high-volume data flows",
      "Leading the Knowledge Graph team taught me the importance of clear technical communication"
    ]
  }
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectData[id as keyof typeof projectData] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <Button asChild variant="ghost" className="mb-8">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              {project.subtitle}
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {project.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-destructive">
              {project.problem.title}
            </h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              {project.problem.description}
            </p>
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Key Pain Points:</h3>
              <ul className="space-y-3">
                {project.problem.painPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-destructive text-xl mt-1">•</span>
                    <span className="text-foreground/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
              {project.solution.title}
            </h2>
            <p className="text-lg text-foreground/80 mb-12 leading-relaxed">
              {project.solution.description}
            </p>

            <div className="grid gap-6">
              {project.solution.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:border-secondary transition-all hover:shadow-card"
                >
                  <h3 className="text-xl font-bold mb-2 text-secondary">
                    {feature.name}
                  </h3>
                  <p className="text-foreground/80">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:border-primary transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-accent">
              Impact & Results
            </h2>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {project.impact.metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:border-accent transition-all hover:shadow-card"
                >
                  <div className="text-3xl font-bold text-accent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Outcomes */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6">Key Outcomes:</h3>
              <ul className="space-y-4">
                {project.impact.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent text-xl mt-1">✓</span>
                    <span className="text-foreground/80">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Learnings Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Key Learnings
            </h2>
            <div className="space-y-4">
              {project.learnings.map((learning, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all"
                >
                  <p className="text-foreground/80 italic">"{learning}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-background/80"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interested in Similar Solutions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how AI can transform your enterprise workflows
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/#contact">Get In Touch</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  View More Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
