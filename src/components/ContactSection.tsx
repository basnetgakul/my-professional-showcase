import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from './ui/button';

const ContactSection = () => {
  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/basnetgakul', username: '@basnetgakul' },
    { icon: Linkedin, label: 'LinkedIn', href: 'http://www.linkedin.com/in/gakul-basnet-333852322', username: 'Gakul Basnet' },
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
              Let's Connect
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Interested in discussing cybersecurity opportunities, collaborations, 
              or just want to connect? I'd love to hear from you.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Email Card */}
            <div className="glass-card p-6 text-center hover:border-primary/50 transition-all duration-300 group">
              <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Mail size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Email
              </h3>
              <a
                href="mailto:basnetgakul8@gmail.com"
                className="text-primary hover:underline text-sm break-all"
              >
                basnetgakul8@gmail.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="glass-card p-6 text-center hover:border-primary/50 transition-all duration-300 group">
              <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Phone size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Phone
              </h3>
              <a
                href="tel:+9779822251567"
                className="text-primary hover:underline text-sm"
              >
                +977 9822251567
              </a>
            </div>

            {/* Location Card */}
            <div className="glass-card p-6 text-center hover:border-primary/50 transition-all duration-300 group sm:col-span-2 lg:col-span-1">
              <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <MapPin size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Location
              </h3>
              <p className="text-muted-foreground text-sm">
                Nepal
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="glass-card p-8">
            <h3 className="font-display text-lg font-semibold text-foreground mb-6 text-center">
              Connect on Professional Networks
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
              <a href="mailto:basnetgakul8@gmail.com" className="inline-flex items-center gap-3">
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
