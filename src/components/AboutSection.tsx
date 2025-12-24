import { MapPin, Users, Lightbulb, Zap } from 'lucide-react';

const AboutSection = () => {
  const traits = [
    {
      icon: Lightbulb,
      title: 'Analytical Thinker',
      description: 'Strong problem-solving abilities',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Great communication & collaboration',
    },
    {
      icon: Zap,
      title: 'Quick Learner',
      description: 'Adaptable to new technologies',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Aspiring SOC Analyst & Security Professional
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Passionate and analytical cybersecurity fresher with a strong academic 
                background in computer science and cybersecurity. I possess hands-on 
                exposure to network security, SOC fundamentals, ethical hacking concepts, 
                and security monitoring tools.
              </p>
              <p>
                Highly motivated to understand modern threat detection, incident response 
                workflows, and Blue Team operations. I am eager to contribute to a 
                cybersecurity team while continuously developing skills toward becoming 
                a competent SOC Analyst and Security Professional.
              </p>
              <div className="flex items-center gap-2 text-primary pt-2">
                <MapPin size={18} />
                <span className="font-medium">Based in Nepal</span>
              </div>
            </div>
          </div>

          {/* Soft Skills / Traits */}
          <div className="grid gap-6">
            {traits.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-6 flex items-center gap-6 hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <item.icon size={28} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
