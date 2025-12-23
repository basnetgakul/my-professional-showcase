const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'SOC & Security Concepts',
      skills: ['SOC Fundamentals', 'Incident Response Lifecycle', 'Threat Detection', 'Log Analysis', 'MITRE ATT&CK'],
    },
    {
      title: 'Security & Networking Tools',
      skills: ['Wireshark', 'Nmap', 'Burp Suite', 'Metasploit', 'LimaCharlie EDR', 'Tines SOAR'],
    },
    {
      title: 'Networking',
      skills: ['TCP/IP', 'DNS', 'DHCP', 'HTTP/HTTPS', 'VPN', 'Firewalls', 'VLAN Concepts'],
    },
    {
      title: 'Operating Systems & Other',
      skills: ['Linux (Ubuntu, Kali)', 'Windows', 'System Troubleshooting', 'Documentation', 'Security Awareness'],
    },
    {
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Analytical Thinking', 'Research-Oriented', 'Quick Learner', 'Teamwork', 'Communication'],
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
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A growing toolkit focused on cybersecurity, threat detection, 
            and security operations built through hands-on learning and projects.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-card p-8 hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge text-sm">
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
