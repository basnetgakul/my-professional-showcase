import { ArrowDown, Github, Linkedin, Mail, Phone, Shield } from 'lucide-react';
import { Button } from './ui/button';
import gakulPhoto from '@/assets/gakul-photo.jpg';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Certified Ethical Hacker v13';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Subtle gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-10 animate-fade-in opacity-0">
            <div className="relative inline-block">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden border-2 border-primary/30 animate-glow">
                <img 
                  src={gakulPhoto} 
                  alt="Gakul Basnet - Cybersecurity Professional" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Status indicator */}
              <div className="absolute -bottom-2 -right-2 flex items-center gap-2 bg-card px-3 py-1.5 rounded-full border border-border">
                <span className="status-dot" />
                <span className="text-xs text-muted-foreground">Available</span>
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in opacity-0 animation-delay-100">
            <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
              <Shield size={14} className="text-primary" />
              <span className="text-sm text-primary font-medium">
                {displayText}<span className="animate-pulse">|</span>
              </span>
            </div>
          </div>

          {/* Name */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up opacity-0 animation-delay-200 tracking-tight">
            <span className="text-foreground">Gakul </span>
            <span className="gradient-text">Basnet</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up opacity-0 animation-delay-200">
            Cybersecurity professional focused on{' '}
            <span className="text-foreground">threat detection</span>,{' '}
            <span className="text-foreground">incident response</span>, and{' '}
            <span className="text-foreground">Blue Team operations</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up opacity-0 animation-delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:basnetgakul8@gmail.com">
                <Mail size={18} />
                Get in Touch
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#experience">
                View Projects
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3 animate-fade-in opacity-0 animation-delay-400">
            {[
              { href: "https://github.com/basnetgakul", icon: Github, label: "GitHub" },
              { href: "http://www.linkedin.com/in/gakul-basnet-333852322", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:basnetgakul8@gmail.com", icon: Mail, label: "Email" },
              { href: "tel:+9779822251567", icon: Phone, label: "Phone" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? "_blank" : undefined}
                rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="p-3 rounded-lg border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a 
          href="#about" 
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group" 
          aria-label="Scroll to About"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;