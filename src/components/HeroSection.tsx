import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

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
          {/* Eyebrow */}
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6 animate-fade-in opacity-0">
            Full-Stack Developer
          </p>

          {/* Name */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up opacity-0 animation-delay-100">
            <span className="text-foreground">Gakul </span>
            <span className="gradient-text">Basnet</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up opacity-0 animation-delay-200">
            Crafting exceptional digital experiences through clean code, 
            thoughtful design, and innovative solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up opacity-0 animation-delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                <Mail className="mr-2" size={20} />
                Let's Connect
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#experience">View My Work</a>
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
              href="https://www.linkedin.com/in/gakul-basnet-333852322"
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
