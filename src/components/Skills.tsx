import { useState } from "react";
import { Code2, Brain, Database, BarChart3, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: Code2,
    color: "text-primary",
    skills: ["Python", "SQL", "JavaScript", "Node.js", "CAPM", "SAP BTP", "Fiori/UI5"]
  },
  {
    title: "AI & Automation",
    icon: Brain,
    color: "text-secondary",
    skills: ["LangChain", "Knowledge Graphs (Neo4j)", "AI Chatbots", "RAG", "n8n", "Workflow Automation"]
  },
  {
    title: "Enterprise Systems & SAP",
    icon: Database,
    color: "text-accent",
    skills: ["SAP BTP", "SAP Integration Suite", "CAPM", "Fiori/UI5", "Enterprise-grade applications"]
  },
  {
    title: "Data & Visualization",
    icon: BarChart3,
    color: "text-primary",
    skills: ["Power BI (DAX, KPI Dashboards)", "Excel (Pivot Tables, Macros)", "Data Analysis"]
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    color: "text-secondary",
    skills: ["GitHub", "Postman", "VS Code", "Google Colab", "Cursor", "Notion"]
  }
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Skills & <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 text-lg">
            Specialized in AI-powered enterprise solutions and automation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === index;
              
              return (
                <div
                  key={index}
                  className={`bg-card border rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-card hover:-translate-y-1 ${
                    isSelected ? 'border-primary shadow-glow' : 'border-border'
                  }`}
                  onClick={() => setSelectedCategory(isSelected ? null : index)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 bg-background rounded-xl ${category.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  <div className={`space-y-2 overflow-hidden transition-all duration-300 ${
                    isSelected ? 'max-h-96 opacity-100' : 'max-h-24 opacity-70'
                  }`}>
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${category.color.replace('text-', 'bg-')}`}></div>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>

                  {!isSelected && category.skills.length > 3 && (
                    <p className="text-xs text-muted-foreground mt-3 italic">
                      Click to see all skills...
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
