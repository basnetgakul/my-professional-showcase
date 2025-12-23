import { GraduationCap, Calendar } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'Bachelors in Computer Science',
      specialization: 'Cybersecurity',
      institution: 'Forbes College',
      year: '2023 - 2026',
      description: 'Pursuing a comprehensive degree focused on computer science fundamentals with specialization in cybersecurity, network security, and ethical hacking.',
      icon: GraduationCap,
    },
  ];

  return (
    <section id="education" className="py-24 md:py-32">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Education
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Academic Background
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building a strong foundation in computer science and cybersecurity 
            through rigorous academic study.
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-3xl mx-auto">
          {education.map((item, index) => (
            <div
              key={item.degree}
              className="glass-card p-8 md:p-10 hover:border-primary/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="p-4 rounded-xl bg-primary text-primary-foreground shadow-lg flex-shrink-0 w-fit">
                  <item.icon size={32} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-foreground">
                        {item.degree}
                      </h3>
                      <p className="text-primary font-medium text-lg">
                        {item.specialization}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{item.year}</span>
                    </div>
                  </div>
                  
                  <p className="text-xl text-foreground/90 mb-4 font-medium">
                    {item.institution}
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
