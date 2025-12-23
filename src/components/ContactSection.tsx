import { Github, Linkedin, Mail, MapPin, Send, Twitter } from 'lucide-react';
import { Button } from './ui/button';

const ContactSection = () => {
  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com', username: '@johndoe' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', username: '/in/johndoe' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com', username: '@johndoe' },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Get in Touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, creative projects, 
              or ways to help bring your ideas to life.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Email Card */}
            <div className="glass-card p-8 text-center hover:border-primary/50 transition-all duration-300 group">
              <div className="p-4 rounded-xl bg-primary/10 text-primary w-fit mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Mail size={32} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Email Me
              </h3>
              <a
                href="mailto:john@example.com"
                className="text-primary hover:underline text-lg"
              >
                john@example.com
              </a>
            </div>

            {/* Location Card */}
            <div className="glass-card p-8 text-center hover:border-primary/50 transition-all duration-300 group">
              <div className="p-4 rounded-xl bg-primary/10 text-primary w-fit mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <MapPin size={32} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Location
              </h3>
              <p className="text-muted-foreground text-lg">
                San Francisco, CA
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="glass-card p-8">
            <h3 className="font-display text-lg font-semibold text-foreground mb-6 text-center">
              Connect on Social Media
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                >
                  <link.icon size={20} />
                  <span className="font-medium">{link.username}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:john@example.com" className="inline-flex items-center gap-3">
                <Send size={20} />
                Send Me a Message
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
