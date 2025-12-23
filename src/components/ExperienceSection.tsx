import { Shield, Network, CheckCircle } from 'lucide-react';

const ExperienceSection = () => {
  const projects = [
    {
      title: 'SOAR & EDR Implementation',
      type: 'Minor Project',
      description: 'Implemented a SOAR–EDR integrated incident response workflow using LimaCharlie (EDR) and Tines (SOAR) for automated threat detection and response.',
      tools: ['LimaCharlie EDR', 'Tines SOAR', 'Slack', 'Email Alerts'],
      highlights: [
        'Configured LimaCharlie to detect suspicious or malicious activity on endpoints and trigger security alerts',
        'Automated alert handling through Tines to notify analysts via Slack and Email',
        'Enabled analyst decision-making to either isolate the infected endpoint or log the incident',
        'Automated endpoint isolation using EDR actions with confirmation notifications',
      ],
      icon: Shield,
    },
    {
      title: 'Network Traffic Analysis',
      type: 'Academic Project',
      description: 'Captured and analyzed live network packets to identify potential security risks and abnormal traffic behavior.',
      tools: ['Wireshark', 'TCP/IP', 'Network Protocols'],
      highlights: [
        'Captured live network packets and analyzed protocols including TCP, UDP, HTTP, and DNS',
        'Identified potential security risks and abnormal traffic behavior',
        'Documented findings and created analysis reports',
      ],
      icon: Network,
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
            Hands-On Security Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Practical projects demonstrating my skills in threat detection, 
            incident response, and security analysis.
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
                  <project.icon size={28} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary w-fit">
                      {project.type}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-3 mb-6">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-foreground/80">
                        <CheckCircle size={18} className="text-primary mt-1 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

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
