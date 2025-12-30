import { Shield, Network, CheckCircle, ExternalLink } from 'lucide-react';

const ExperienceSection = () => {
  const projects = [
    {
      title: 'SOAR & EDR Implementation',
      type: 'Security Project',
      description: 'Built an automated incident response workflow integrating LimaCharlie EDR with Tines SOAR for real-time threat detection and response.',
      tools: ['LimaCharlie', 'Tines SOAR', 'Slack', 'Email'],
      highlights: [
        'Configured EDR to detect and alert on suspicious endpoint activity',
        'Automated alert handling with analyst decision workflow',
        'Implemented automated endpoint isolation with confirmations',
      ],
      icon: Shield,
    },
    {
      title: 'Network Traffic Analysis',
      type: 'Research Project',
      description: 'Captured and analyzed live network packets to identify potential security risks and anomalous traffic patterns.',
      tools: ['Wireshark', 'TCP/IP', 'Network Protocols'],
      highlights: [
        'Analyzed TCP, UDP, HTTP, and DNS protocol traffic',
        'Identified potential security risks and behavioral anomalies',
        'Created detailed analysis reports and documentation',
      ],
      icon: Network,
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label justify-center">Projects</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Hands-On <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Practical security projects demonstrating threat detection 
            and incident response capabilities.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card p-6 md:p-8 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon */}
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <project.icon size={24} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 w-fit">
                      {project.type}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2.5 mb-6">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80">
                        <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 text-xs rounded-md bg-secondary border border-border text-muted-foreground"
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