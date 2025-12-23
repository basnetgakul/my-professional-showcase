const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'HTML5/CSS3'],
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'CI/CD'],
    },
    {
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Communication', 'Team Leadership', 'Agile/Scrum', 'Mentoring', 'Project Management'],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Skills & Expertise
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            My Technical Arsenal
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through years of experience, continuous learning, 
            and hands-on project work.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-card p-8 hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
