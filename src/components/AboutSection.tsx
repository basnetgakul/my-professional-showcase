import { MapPin, Target, Brain, Zap } from 'lucide-react';

const AboutSection = () => {
  const traits = [
    { icon: Target, label: 'Detail Oriented' },
    { icon: Brain, label: 'Analytical Thinker' },
    { icon: Zap, label: 'Quick Learner' },
  ];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="section-label justify-center">About Me</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Aspiring SOC Analyst &<br />
            <span className="gradient-text">Security Professional</span>
          </h2>
          
          <div className="glass-card p-8 md:p-10">
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Passionate and analytical cybersecurity fresher with a strong academic 
                background in computer science and cybersecurity. I possess hands-on 
                exposure to network security, SOC fundamentals, ethical hacking concepts, 
                and security monitoring tools.
              </p>
              <p>
                Highly motivated to understand modern threat detection, incident response 
                workflows, and Blue Team operations. Eager to contribute to a 
                cybersecurity team while continuously developing skills toward becoming 
                a competent SOC Analyst and Security Professional.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2 text-foreground">
                <MapPin size={18} className="text-primary" />
                <span className="font-medium">Based in Nepal</span>
              </div>
              
              <div className="flex items-center gap-4">
                {traits.map((trait) => (
                  <div 
                    key={trait.label}
                    className="flex items-center gap-2 px-3 py-1.5 bg-secondary/50 rounded-full border border-border"
                  >
                    <trait.icon size={14} className="text-primary" />
                    <span className="text-xs text-muted-foreground">{trait.label}</span>
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

export default AboutSection;