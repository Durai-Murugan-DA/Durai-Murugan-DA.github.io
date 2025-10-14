import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "IT Resonance",
    role: "Generative AI Developer Intern",
    duration: "Jul 2025 – Present",
    location: "Chennai, India",
    achievements: [
      "Designed AI-powered enterprise applications using SAP BTP, CAPM, and Fiori/UI5",
      "Built AI chatbots and Knowledge Graphs (Neo4j) for intelligent employee productivity tracking",
      "Created n8n workflow automations to streamline data synchronization and integration pipelines",
      "Led the Knowledge Graph Team for ITR Shift, reducing repetitive integration tasks by 40%"
    ],
    color: "border-primary"
  },
  {
    company: "Asian Paints",
    role: "Customer Associate",
    duration: "Aug 2023 – Dec 2024",
    location: "Chennai, India",
    achievements: [
      "Conducted customer trend analysis to enhance satisfaction and optimize targeted campaigns",
      "Developed automated KPI tracking systems using Power BI, improving reporting efficiency by 30%",
      "Reduced manual data preparation time by 30% through Excel automation (Pivot Tables, Macros)"
    ],
    color: "border-secondary"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Work <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 text-lg">
            Building enterprise AI solutions and automation systems
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto md:text-left'
                  } md:w-1/2`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-0 md:left-auto ${
                    index % 2 === 0 ? 'md:right-[-1.125rem]' : 'md:left-[-1.125rem]'
                  } top-0 w-9 h-9 bg-background border-4 ${exp.color} rounded-full z-10`}>
                    <Briefcase className="w-4 h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>

                  <div className="ml-12 md:ml-0 bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-card">
                    <div className="flex items-start gap-2 mb-2 md:justify-end">
                      <Calendar className="w-4 h-4 text-muted-foreground mt-1" />
                      <span className="text-sm text-muted-foreground">{exp.duration}</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-primary font-semibold mb-1">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>

                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="text-sm text-foreground/80 flex items-start gap-2 md:flex-row-reverse md:justify-end"
                        >
                          <span className="text-primary mt-1.5">•</span>
                          <span className="flex-1">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
