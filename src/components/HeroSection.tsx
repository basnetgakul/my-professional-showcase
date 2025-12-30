import { ArrowDown, Github, Linkedin, Mail, Phone, Terminal } from 'lucide-react';
import { Button } from './ui/button';
import gakulPhoto from '@/assets/gakul-photo.jpg';
import { useEffect, useState } from 'react';

const MatrixRain = () => {
  const [columns, setColumns] = useState<number[]>([]);
  
  useEffect(() => {
    const cols = Math.floor(window.innerWidth / 20);
    setColumns(Array.from({ length: cols }, (_, i) => i));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      {columns.map((col) => (
        <div
          key={col}
          className="absolute text-primary text-xs font-mono"
          style={{
            left: `${col * 20}px`,
            animation: `matrix-fall ${5 + Math.random() * 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          {Array.from({ length: 20 }, () => 
            String.fromCharCode(0x30A0 + Math.random() * 96)
          ).join('\n')}
        </div>
      ))}
      <style>{`
        @keyframes matrix-fall {
          0% { transform: translateY(-100%); opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Certified Ethical Hacker v13 — Blue Team';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 scanlines">
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-30" />

      {/* Glowing orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-300" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyber-purple/5 rounded-full blur-3xl animate-float animation-delay-500" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-8 animate-fade-in opacity-0">
            <div className="relative inline-block">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-lg overflow-hidden border-2 border-primary/50 animate-pulse-glow">
                <img 
                  src={gakulPhoto} 
                  alt="Gakul Basnet" 
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              {/* Corner brackets */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-primary" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-primary" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-primary" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-primary" />
            </div>
          </div>

          {/* Terminal-style eyebrow */}
          <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in opacity-0 animation-delay-100">
            <Terminal size={16} className="text-primary" />
            <p className="text-primary font-mono tracking-wider text-sm">
              <span className="text-muted-foreground">$</span> {displayText}
              <span className="animate-pulse">_</span>
            </p>
          </div>

          {/* Name with glitch effect */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up opacity-0 animation-delay-200 tracking-wider">
            <span className="text-foreground text-glow">GAKUL </span>
            <span className="gradient-text">BASNET</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up opacity-0 animation-delay-200 font-mono">
            <span className="text-primary">&gt;</span> Threat Detection | Incident Response | Blue Team Operations
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up opacity-0 animation-delay-300">
            <Button variant="hero" size="xl" asChild className="group">
              <a href="mailto:basnetgakul8@gmail.com">
                <Mail className="mr-2 group-hover:animate-pulse" size={20} />
                <span className="font-mono">./contact.sh</span>
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#experience" className="font-mono">
                <span className="text-primary mr-2">$</span> view_projects
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-fade-in opacity-0 animation-delay-400">
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
                className="p-3 rounded border border-primary/30 bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                style={{ boxShadow: '0 0 10px hsl(var(--primary) / 0.1)' }}
                aria-label={link.label}
              >
                <link.icon size={20} className="group-hover:animate-pulse" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group" aria-label="Scroll to About">
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;