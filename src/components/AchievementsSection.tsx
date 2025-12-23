import { Award, Languages } from 'lucide-react';

const AchievementsSection = () => {
  const certifications = [
    {
      icon: Award,
      title: 'CEH v13 — Certified Ethical Hacker',
      description: 'EC-Council certification demonstrating expertise in ethical hacking methodologies, tools, and techniques for identifying vulnerabilities and securing systems.',
      issuer: 'EC-Council',
    },
  ];

  const languages = [
    { name: 'Nepali', level: 'Native' },
    { name: 'English', level: 'Proficient' },
  ];

  return (
    <section id="achievements" className="py-24 md:py-32 bg-secondary/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Certifications & Languages
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional Credentials
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Industry-recognized certifications validating my cybersecurity expertise 
            and commitment to professional development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-semibold text-foreground flex items-center gap-3">
              <Award className="text-primary" size={24} />
              Certifications
            </h3>
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className="glass-card p-8 hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <cert.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-primary font-medium mb-3">
                      {cert.issuer}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-semibold text-foreground flex items-center gap-3">
              <Languages className="text-primary" size={24} />
              Languages
            </h3>
            <div className="glass-card p-8 hover:border-primary/50 transition-all duration-300">
              <div className="space-y-6">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between">
                    <span className="text-lg font-medium text-foreground">{lang.name}</span>
                    <span className="px-4 py-2 rounded-lg bg-secondary text-muted-foreground text-sm">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="glass-card p-8 hover:border-primary/50 transition-all duration-300 bg-primary/5">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                Continuous Learning
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Actively pursuing additional certifications and hands-on training in 
                SOC operations, threat intelligence, and advanced penetration testing 
                to expand my cybersecurity expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
