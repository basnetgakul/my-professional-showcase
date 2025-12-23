import { Award, Medal, Star, Trophy } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'AWS Certified Solutions Architect',
      description: 'Professional-level certification demonstrating expertise in designing distributed systems on AWS.',
      year: '2023',
    },
    {
      icon: Award,
      title: 'Google Cloud Professional Developer',
      description: 'Certified in building scalable and reliable applications using Google Cloud technologies.',
      year: '2023',
    },
    {
      icon: Medal,
      title: 'Best Innovation Award',
      description: 'Recognized for developing an AI-powered solution that improved operational efficiency by 50%.',
      year: '2022',
    },
    {
      icon: Star,
      title: 'Open Source Contributor',
      description: 'Active contributor to major open-source projects with 500+ GitHub stars on personal projects.',
      year: '2021',
    },
  ];

  return (
    <section id="achievements" className="py-24 md:py-32 bg-secondary/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Recognition
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Achievements & Certifications
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Milestones and recognitions that reflect my commitment to excellence 
            and continuous professional growth.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="glass-card p-8 hover:border-primary/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <achievement.icon size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {achievement.title}
                    </h3>
                    <span className="text-sm text-primary font-medium">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
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

export default AchievementsSection;
