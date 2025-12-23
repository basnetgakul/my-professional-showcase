import { GraduationCap, BookOpen } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'Stanford University',
      year: '2018 - 2020',
      description: 'Specialized in Artificial Intelligence and Machine Learning. Thesis on distributed systems optimization.',
      icon: GraduationCap,
    },
    {
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'MIT',
      year: '2014 - 2018',
      description: 'Graduated with honors. Focus on software architecture and system design.',
      icon: BookOpen,
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
            A strong foundation in computer science and engineering, 
            complemented by continuous learning.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-8">
              {education.map((item, index) => (
                <div
                  key={item.degree}
                  className="relative flex gap-6 md:gap-8"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Icon */}
                  <div className="relative z-10 p-3 rounded-xl bg-primary text-primary-foreground shadow-lg flex-shrink-0">
                    <item.icon size={24} />
                  </div>

                  {/* Content */}
                  <div className="glass-card p-6 md:p-8 flex-1 hover:border-primary/50 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {item.degree}
                      </h3>
                      <span className="text-sm text-primary font-medium">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-lg text-foreground/90 mb-2">
                      {item.institution}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
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

export default EducationSection;
