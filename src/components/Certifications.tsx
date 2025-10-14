import { Award, GraduationCap } from "lucide-react";

const certifications = [
  { name: "Python for Data Science", org: "IBM", year: "2025" },
  { name: "Introduction to MCP", org: "Anthropic", year: "2025" },
  { name: "Google Analytics", org: "Google", year: "2024" },
  { name: "Excel Proficiency", org: "Microsoft", year: "2024" },
  { name: "Digital Marketing", org: "Simplilearn", year: "2024" }
];

const education = [
  {
    degree: "MBA (Marketing Management)",
    institution: "Bharathidasan University",
    duration: "Aug 2023 – May 2025",
    location: "Trichy, India"
  },
  {
    degree: "B.Sc. (Chemistry)",
    institution: "Bharathidasan University",
    duration: "Jun 2020 – Aug 2023",
    location: "Nagapattinam, India"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Credentials & <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Education</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>

              <div className="grid gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-all duration-300 hover:shadow-card group"
                  >
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {cert.name}
                    </h4>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-muted-foreground">{cert.org}</span>
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-secondary/10 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-6 hover:border-secondary transition-all duration-300 hover:shadow-card"
                  >
                    <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                    <p className="text-secondary font-semibold mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                      <span>{edu.duration}</span>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
