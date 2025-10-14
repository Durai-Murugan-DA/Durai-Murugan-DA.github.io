import { TrendingUp, Users, Zap, Target, CheckCircle, Clock } from "lucide-react";

const achievements = [
  {
    icon: Users,
    metric: "3",
    description: "Team Members Led",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    metric: "40%",
    description: "Integration Overhead Reduction",
    color: "text-secondary"
  },
  {
    icon: Target,
    metric: "5+",
    description: "Production AI Solutions",
    color: "text-accent"
  },
  {
    icon: Clock,
    metric: "30%",
    description: "Faster Reporting",
    color: "text-primary"
  },
  {
    icon: CheckCircle,
    metric: "99%",
    description: "Automation Accuracy",
    color: "text-secondary"
  },
  {
    icon: Zap,
    metric: "5+",
    description: "Developers Trained",
    color: "text-accent"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Key <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 text-lg">
            Impact at a glance
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 hover:shadow-card hover:-translate-y-1 group"
                >
                  <div className={`p-4 bg-background rounded-xl inline-block mb-4 ${achievement.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {achievement.metric}
                  </div>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
