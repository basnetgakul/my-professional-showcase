import { Code2, Lightbulb, Users } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: '5+ Years',
      description: 'Professional Development',
    },
    {
      icon: Users,
      title: '50+ Projects',
      description: 'Successfully Delivered',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Driven Approach',
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
              Passionate about building impactful solutions
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a full-stack developer with a passion for creating elegant, 
                user-centric applications. With expertise in modern web technologies, 
                I transform complex problems into intuitive digital experiences.
              </p>
              <p>
                My journey in software development began with a curiosity for how 
                things work, which evolved into a career dedicated to crafting 
                solutions that make a difference. I believe in writing clean, 
                maintainable code and staying at the forefront of technological 
                advancements.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-6 flex items-center gap-6 hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <item.icon size={28} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
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
