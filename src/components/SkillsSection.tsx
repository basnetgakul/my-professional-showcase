import { Shield, Network, Server, Terminal, Users } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Shield,
      title: 'SOC & Security',
      skills: ['SOC Fundamentals', 'Incident Response', 'Threat Detection', 'Log Analysis', 'MITRE ATT&CK'],
    },
    {
      icon: Terminal,
      title: 'Security Tools',
      skills: ['Wireshark', 'Nmap', 'Burp Suite', 'Metasploit', 'LimaCharlie EDR', 'Tines SOAR'],
    },
    {
      icon: Network,
      title: 'Networking',
      skills: ['TCP/IP', 'DNS', 'DHCP', 'HTTP/HTTPS', 'VPN', 'Firewalls', 'VLAN'],
    },
    {
      icon: Server,
      title: 'Systems',
      skills: ['Linux (Ubuntu, Kali)', 'Windows', 'System Troubleshooting', 'Documentation'],
    },
    {
      icon: Users,
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Analytical Thinking', 'Research', 'Quick Learner', 'Communication'],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/20">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label justify-center">Skills & Expertise</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A growing toolkit focused on cybersecurity, threat detection, 
            and security operations built through hands-on learning.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-card p-6 group"
              style={{ animationDelay: `${categoryIndex * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <category.icon size={20} />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge text-xs">
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