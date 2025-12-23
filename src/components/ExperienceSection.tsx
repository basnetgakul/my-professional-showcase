import { ExternalLink, Folder } from 'lucide-react';
import { Button } from './ui/button';

const ExperienceSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.',
      tools: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      outcome: 'Increased client revenue by 40% through improved UX and performance optimization.',
      link: '#',
    },
    {
      title: 'Healthcare Management System',
      description: 'Comprehensive patient management platform with appointment scheduling, medical records, and telemedicine integration.',
      tools: ['Next.js', 'Python', 'MongoDB', 'WebRTC', 'Docker'],
      outcome: 'Reduced administrative workload by 60% for healthcare providers.',
      link: '#',
    },
    {
      title: 'Financial Analytics Dashboard',
      description: 'Real-time financial data visualization tool with predictive analytics and customizable reporting features.',
      tools: ['TypeScript', 'D3.js', 'GraphQL', 'Redis', 'Kubernetes'],
      outcome: 'Processed over 1M+ daily transactions with 99.9% uptime.',
      link: '#',
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Projects & Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in building 
            scalable, user-focused applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card p-8 md:p-10 hover:border-primary/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon */}
                <div className="p-4 rounded-xl bg-primary/10 text-primary w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Folder size={28} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <Button variant="ghost" size="sm" asChild className="w-fit">
                      <a href={project.link} className="flex items-center gap-2">
                        View Project <ExternalLink size={16} />
                      </a>
                    </Button>
                  </div>

                  <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <p className="text-primary font-medium mb-4">
                    ✦ {project.outcome}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 text-sm rounded-full bg-secondary text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
