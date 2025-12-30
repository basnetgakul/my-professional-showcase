import { Award, Languages, BookOpen, ExternalLink } from 'lucide-react';

const AchievementsSection = () => {
  const certifications = [
    {
      title: 'CEH v13 — Certified Ethical Hacker',
      issuer: 'EC-Council',
      description: 'Industry-recognized certification demonstrating expertise in ethical hacking methodologies and security assessment techniques.',
    },
  ];

  const languages = [
    { name: 'Nepali', level: 'Native' },
    { name: 'English', level: 'Proficient' },
  ];

  return (
    <section id="achievements" className="py-24 md:py-32 bg-secondary/20">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label justify-center">Credentials</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications validating cybersecurity expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Certifications */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Award className="text-primary" size={20} />
              <h3 className="font-display text-lg font-semibold text-foreground">
                Certifications
              </h3>
            </div>
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="glass-card p-6 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Award size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display font-semibold text-foreground mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-primary font-medium mb-3">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Languages & Learning */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Languages className="text-primary" size={20} />
              <h3 className="font-display text-lg font-semibold text-foreground">
                Languages
              </h3>
            </div>
            <div className="glass-card p-6">
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between">
                    <span className="font-medium text-foreground">{lang.name}</span>
                    <span className="px-3 py-1.5 rounded-md bg-secondary text-muted-foreground text-xs border border-border">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 bg-primary/5 border-primary/20">
              <div className="flex items-start gap-3">
                <BookOpen size={18} className="text-primary mt-0.5" />
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-2">
                    Continuous Learning
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Actively pursuing certifications in SOC operations, threat intelligence, 
                    and advanced security testing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;