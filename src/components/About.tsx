const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Me</span>
          </h2>

          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p className="text-2xl font-semibold text-foreground mb-8 text-center">
              From business strategy to building intelligent systems — my journey is about bridging gaps between enterprise needs and AI solutions.
            </p>

            <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
              <p className="mb-6">
                My path into AI development wasn't conventional. With an MBA in Marketing and a background in Chemistry, I discovered my passion for technology while analyzing customer data at Asian Paints. What started as automating Excel reports evolved into a fascination with how AI could transform entire business workflows.
              </p>

              <p className="mb-6">
                Today, I specialize in building Generative AI solutions that integrate seamlessly with enterprise systems like SAP. At IT Resonance, I lead knowledge graph development and create AI-powered automation pipelines that reduce manual work by 40% while maintaining enterprise-grade reliability.
              </p>

              <p className="mb-6 italic border-l-4 border-primary pl-6">
                "I believe great AI solutions don't just automate tasks — they simplify complexity and unlock human potential."
              </p>

              <p>
                What drives me is the challenge of making sophisticated AI accessible to businesses. Whether it's building intelligent chatbots that understand enterprise context or orchestrating complex data flows between systems, I'm fascinated by how AI can transform the way organizations work.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary transition-colors">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-sm text-muted-foreground">Years in Tech</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary transition-colors">
                <div className="text-3xl font-bold text-secondary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Projects Shipped</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary transition-colors">
                <div className="text-3xl font-bold text-accent mb-2">3</div>
                <div className="text-sm text-muted-foreground">Team Members Led</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary transition-colors">
                <div className="text-3xl font-bold text-primary mb-2">40%</div>
                <div className="text-sm text-muted-foreground">Task Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
