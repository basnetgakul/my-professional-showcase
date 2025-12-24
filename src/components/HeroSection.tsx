import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';
import gakulPhoto from '@/assets/gakul-photo.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float animation-delay-300" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-8 animate-fade-in opacity-0">
            <div className="relative inline-block">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
                <img 
                  src={gakulPhoto} 
                  alt="Gakul Basnet" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Eyebrow */}
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6 animate-fade-in opacity-0 animation-delay-100">
            Certified Ethical Hacker v13 — Blue Team
          </p>

          {/* Name */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up opacity-0 animation-delay-200">
            <span className="text-foreground">Gakul </span>
            <span className="gradient-text">Basnet</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up opacity-0 animation-delay-200">
            Passionate cybersecurity professional focused on threat detection, 
            incident response, and Blue Team operations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up opacity-0 animation-delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:basnetgakul8@gmail.com">
                <Mail className="mr-2" size={20} />
                Get in Touch
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#experience">View My Projects</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-fade-in opacity-0 animation-delay-400">
            <a
              href="https://github.com/basnetgakul"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="http://www.linkedin.com/in/gakul-basnet-333852322"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:basnetgakul8@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
            <a
              href="tel:+9779822251567"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="Phone"
            >
              <Phone size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Scroll to About">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
